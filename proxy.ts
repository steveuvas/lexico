import type { NextRequest } from 'next/server'
import {updateSession} from '@/lib/supabase/proxy'
export function proxy(request:NextRequest){return updateSession(request)}
export const config={matcher:['/auth/:path*','/join','/api/vuelta/:path*']}
