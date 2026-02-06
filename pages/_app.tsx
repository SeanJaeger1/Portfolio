import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    async function initGSAP() {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/dist/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)
    }
    initGSAP()
  }, [])

  return <Component {...pageProps} />
}
