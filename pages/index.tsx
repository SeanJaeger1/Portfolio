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
    <div className="min-h-screen bg-cinema-bg text-cinema-text font-inter noise-overlay">
      <Head>
        <title>Sean Jaeger | Software Engineer</title>
        <meta
          name="description"
          content="Sean Jaeger - Software Engineer with 5+ years experience at early-stage startups. Top 3% LeetCode, full-stack development, and proven track record building products that secure funding."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Analytics />

      <Navigation />
      <Navigation isMobile />

      <main className="w-full pb-20">
        <IntroSection />
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
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
