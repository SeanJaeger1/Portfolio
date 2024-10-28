import Head from 'next/head'
import Aside from '@/components/Aside'
import IntroSection from '@/components/IntroSection'
import AboutSection from '@/components/AboutSection'
import WorkSection from '@/components/WorkSection'
import Nav from '@/components/Nav'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sean Jaeger</title>
        <meta
          name="description"
          content="Sean Jaeger's Software Engineering portfolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Kaisei+HarunoUmi:wght@400;500;700&family=Open+Sans:wght@300;400;600;700;800&display=swap"
        />
      </Head>
      <main className="site-container flex flex-col sm:flex-row py-8 sm:py-36 overflow-y-hidden font-open-sans">
        <Aside />
        <Nav />
        <div className="px-4 py-4 sm:py-0">
          <IntroSection />
          <AboutSection />
          <WorkSection />
        </div>
      </main>
    </>
  )
}
