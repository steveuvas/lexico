import {createClient} from '@/lib/supabase/server'
import {cookies} from 'next/headers'
import {redirect} from 'next/navigation'
export async function GET(request:Request){const code=new URL(request.url).searchParams.get('code');if(code){const {error}=await(await createClient()).auth.exchangeCodeForSession(code);if(!error)redirect((await cookies()).has('vuelta-invite')?'/join':'/')}redirect('/auth?expired=1')}
