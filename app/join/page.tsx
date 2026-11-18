import {cookies} from 'next/headers'
import {createClient} from '@/lib/supabase/server'
import {JoinForm} from '@/components/join-form'
export default async function Join(){const {data:{user}}=await(await createClient()).auth.getUser();return <JoinForm signedIn={!!user} pending={(await cookies()).has('vuelta-invite')}/>}
