import type { Metadata, Viewport } from 'next'
import { cookies } from 'next/headers'
import { SunMoon } from 'lucide-react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vuelta · Испанский Испании',
  description: 'Общий испанско-русский словарь и личные интервальные повторения.',
}
export const viewport: Viewport = { themeColor: '#edece7', colorScheme: 'light dark' }

export default async function Layout({ children }: { children: React.ReactNode }) {
  const preference = (await cookies()).get('vuelta-theme')?.value
  const theme = preference === 'light' || preference === 'dark' ? preference : 'system'
  return (
    <html lang="ru" className="bg-background" data-theme={theme}>
      <head><link rel="stylesheet" href="/study/style.css" /></head>
      <body className="font-sans">
        <header className="top">
          <div className="wrap authbar">
            <a className="brand" href="/" aria-label="Vuelta — Сегодня">
              <svg viewBox="0 0 36 36" aria-hidden="true"><path d="M1 7h8l8 18 9-16-5-5h14v15l-4-5-10 18q-1 2-4 2h-1q-3 0-4-3z" /></svg>vuelta
            </a>
            <label className="theme-picker">
              <SunMoon aria-hidden="true" />
              <select aria-label="Тема оформления" data-theme-picker defaultValue={theme}>
                <option value="system">Как в системе</option>
                <option value="light">Светлая</option>
                <option value="dark">Тёмная</option>
              </select>
            </label>
          </div>
        </header>
        {children}
        <script src="/study/theme.js" defer />
      </body>
    </html>
  )
}
