import {cookies} from 'next/headers'
import {AccountForm} from '@/components/account-form'
export default async function Auth({searchParams}:{searchParams:Promise<{expired?:string}>}){return <AccountForm invited={(await cookies()).has('vuelta-invite')} expired={(await searchParams).expired==='1'}/>}
