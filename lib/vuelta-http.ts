import {z} from 'zod'
export const json=(body:unknown,status=200)=>Response.json(body,{status,headers:{'Cache-Control':'private, no-store','Vary':'Cookie'}})
export class InputError extends Error{}
export function fail(e:unknown){return e instanceof InputError||e instanceof z.ZodError?json({error:'Проверьте данные запроса.'},400):json({error:'Не удалось связаться с базой. Повторите запрос.'},503)}
export async function readBody(req:Request,max=1024*1024){if(req.headers.get('sec-fetch-site')==='cross-site'||!req.headers.get('content-type')?.startsWith('application/json')||!req.body)throw new InputError();const reader=req.body.getReader(),decoder=new TextDecoder();let n=0,text='';for(;;){const {done,value}=await reader.read();if(done)break;n+=value.length;if(n>max){await reader.cancel();throw new InputError()}text+=decoder.decode(value,{stream:true})}try{return z.record(z.string(),z.unknown()).parse(JSON.parse(text+decoder.decode()))}catch{throw new InputError()}}
