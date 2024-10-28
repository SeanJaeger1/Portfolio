import { FC } from 'react'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import IntroSection from '../components/IntroSection'
import AboutSection from '../components/AboutSection'
import WorkSection from '../components/WorkSection'
import ScrollIndicator from '../components/ScrollIndicator'

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Sean Jaeger | Software Engineer</title>
        <meta
          name="description"
          content="Sean Jaeger - Software Engineer specializing in front-end development and early-stage startups"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 py-8 sm:py-16">
            <aside className="lg:col-span-1">
              <Navigation className="hidden lg:block sticky top-8" />
              <Navigation className="lg:hidden" />
            </aside>

            <main className="lg:col-span-3">
              <IntroSection />
              <AboutSection />
              <WorkSection />
            </main>
          </div>
        </div>
      </div>
      <ScrollIndicator />
    </>
  )
}

export default Home
