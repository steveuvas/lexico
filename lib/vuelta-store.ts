import 'server-only'
import {createClient} from '@/lib/supabase/server'
import {createClient as privileged} from '@supabase/supabase-js'
import type {User} from '@supabase/supabase-js'
export type DB=Awaited<ReturnType<typeof createClient>>
export function writer(){return privileged(process.env.NEXT_PUBLIC_SUPABASE_URL!,process.env.SUPABASE_SECRET_KEY??process.env.SUPABASE_SERVICE_ROLE_KEY!,{auth:{autoRefreshToken:false,persistSession:false}})}
export function unwrap<T>(r:{data:T,error:unknown}){if(r.error)throw Error('storage');return r.data}
export async function readSpace(db:DB,u:User){const w=unwrap(await db.rpc('vuelta_open_space')) as string;const list=unwrap(await db.from('vuelta_spaces').select('id,name,owner_id'))??[];return {w,spaces:list.map(s=>({id:s.id,owner:s.owner_id===u.id,name:s.owner_id===u.id?'Мой словарь':'Словарь по приглашению'}))}}
const metaKeys=['cat','raw','meaning','example','forms','status'] as const
export async function loadStudy(db:DB,u:User,w:string){const [entries,cards,head]=await Promise.all([pages((a,b)=>db.from('vuelta_entries').select('id,es,ru,meta,version').eq('space_id',w).order('created_at').order('id').range(a,b)),pages((a,b)=>db.from('vuelta_cards').select('target,card,question').eq('space_id',w).eq('user_id',u.id).order('target').range(a,b)),db.from('vuelta_progress').select('version,run').eq('space_id',w).eq('user_id',u.id).maybeSingle()]);const progress=unwrap(head);return {entries:entries.map(({meta,...row})=>({...Object.fromEntries(metaKeys.filter(k=>typeof meta?.[k]==='string').map(k=>[k,meta[k]])),...row})),cards,run:progress?.run??null,version:progress?.version??0}}
async function pages<T>(read:(a:number,b:number)=>PromiseLike<{data:T[]|null,error:unknown}>){const out:T[]=[];for(let offset=0;;offset+=500){const page=unwrap(await read(offset,offset+499))??[];out.push(...page);if(page.length<500)return out}}
