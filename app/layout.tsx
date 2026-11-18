import type { Metadata, Viewport } from 'next'
import './globals.css'
export const metadata: Metadata = {title:'Vuelta · Испанский Испании',description:'Общий испанско-русский словарь и личные интервальные повторения.'}
export const viewport: Viewport = {themeColor:'#edece7', colorScheme:'light'}
export default function Layout({children}:{children:React.ReactNode}) {return <html lang="ru" className="bg-background"><head><link rel="stylesheet" href="/study/style.css" /></head><body className="font-sans">{children}</body></html>}
