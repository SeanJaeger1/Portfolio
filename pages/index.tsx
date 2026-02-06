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
    <div className="min-h-screen bg-cinema-bg text-cinema-text font-body noise-overlay">
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

      <main className="w-full pb-24 md:pb-0">
        <IntroSection />
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <WorkSection />
          <AchievementsSection />
        </div>
      </main>

      <footer className="border-t border-cinema-border mt-32 pb-24 md:pb-0">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-16 text-center">
          <div className="font-display italic text-3xl text-cinema-text mb-3">
            Sean Jaeger<span className="text-cinema-accent">.</span>
          </div>
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-cinema-muted mb-8">
            Software Engineer
          </p>
          <div className="flex justify-center gap-8 mb-8">
            <a
              href="https://github.com/SeanJaeger1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-cinema-muted hover:text-cinema-accent transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sean-jaeger/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-cinema-muted hover:text-cinema-accent transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href="https://leetcode.com/seanjaeger/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-cinema-muted hover:text-cinema-accent transition-colors duration-200"
            >
              LeetCode
            </a>
            <a
              href="/Sean-Jaeger-CV.pdf"
              target="_blank"
              className="text-sm text-cinema-muted hover:text-cinema-accent transition-colors duration-200"
            >
              CV
            </a>
          </div>
          <p className="text-xs text-cinema-muted/50">
            &copy; 2024 Sean Jaeger
          </p>
        </div>
      </footer>

      <ScrollIndicator />
    </div>
  )
}

export default Home
