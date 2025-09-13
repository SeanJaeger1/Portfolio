import { FC } from 'react'
import Head from 'next/head'
import { Analytics } from '@vercel/analytics/react'
import Navigation from '../components/Navigation'
import IntroSection from '../components/IntroSection'
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'
import ExperienceSection from '../components/ExperienceSection'
import WorkSection from '../components/WorkSection'
import AchievementsSection from '../components/AchievementsSection'
import ScrollIndicator from '../components/ScrollIndicator'

const Home: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Head>
        <title>Sean Jaeger | Software Engineer</title>
        <meta
          name="description"
          content="Sean Jaeger - Software Engineer with 5+ years experience at early-stage startups. Top 3% LeetCode, full-stack development, and proven track record building products that secure funding."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Analytics */}
      <Analytics />

      {/* Desktop Navigation */}
      <Navigation />

      {/* Mobile Navigation */}
      <Navigation isMobile />

      {/* Main Content */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pl-48 pb-20">
        <IntroSection />
        <div className="max-w-6xl mx-auto">
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <WorkSection />
          <AchievementsSection />
        </div>
      </main>

      <ScrollIndicator />
    </div>
  )
}

export default Home
