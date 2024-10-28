import { FC } from 'react'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import IntroSection from '../components/IntroSection'
import AboutSection from '../components/AboutSection'
import WorkSection from '../components/WorkSection'
import ScrollIndicator from '../components/ScrollIndicator'

const Home: FC = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Head>
        <title>Sean Jaeger | Software Engineer</title>
        <meta
          name="description"
          content="Sean Jaeger - Software Engineer specializing in front-end development and early-stage startups"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Desktop Navigation */}
      <Navigation />

      {/* Mobile Navigation */}
      <Navigation isMobile />

      {/* Main Content */}
      <main className="w-full lg:pl-48 pb-20">
        <IntroSection />
        <AboutSection />
        <WorkSection />
      </main>

      <ScrollIndicator />
    </div>
  )
}

export default Home
