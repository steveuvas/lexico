import {cookies} from 'next/headers'
import {AccountForm} from '@/components/account-form'
export default async function Auth({searchParams}:{searchParams:Promise<{expired?:string;import?:string}>}){const params=await searchParams;return <AccountForm invited={(await cookies()).has('vuelta-invite')} expired={params.expired==='1'} importing={params.import==='1'}/>}
