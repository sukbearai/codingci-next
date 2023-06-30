import type { AppProps } from 'next/app'
import MainLayout from '../layouts/main'
import '../styles/globals.css'
import withTheme from '../theme'
import { Analytics } from '@vercel/analytics/react'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  // 跟随系统主题色
  useEffect(() => {
    const mql = window.matchMedia('(prefers-color-scheme: dark)')

    function matchMode(e: { matches: any }) {
      const body = document.body
      if (e.matches) {
        if (!body.hasAttribute('theme-mode')) {
          body.setAttribute('theme-mode', 'dark')
        }
      } else {
        if (body.hasAttribute('theme-mode')) {
          body.removeAttribute('theme-mode')
        }
      }
    }

    mql.addListener(matchMode)
  }, [])

  return withTheme(
    MainLayout(
      <>
        <Component {...pageProps} />
        <Analytics />
      </>,
    ),
  )
}
