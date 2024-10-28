import Image from 'next/image'
import { FC } from 'react'
import SiteLink from './SiteLink'

interface LinkData {
  src: string
  text: string
  url: string
  alt: string
}

const IntroSection: FC = () => {
  const links: LinkData[] = [
    {
      src: '/ExternalLink.svg',
      text: 'Check out my LeetCode',
      url: 'https://leetcode.com/seanjaeger/',
      alt: 'External link icon',
    },
    {
      src: '/LinkedIn.svg',
      text: 'Check out my LinkedIn',
      url: 'https://www.linkedin.com/in/sean-jaeger/',
      alt: 'LinkedIn icon',
    },
    {
      src: '/CV.svg',
      text: 'View my CV',
      url: '/Sean-Jaeger-CV.pdf',
      alt: 'CV icon',
    },
  ]

  return (
    <section id="intro" aria-label="My introduction as a developer">
      <div className="header font-kaisei">Sean Jaeger</div>

      <div className="my-4 text-general">
        Hey, I&apos;m Sean. A start-up focused software engineer.
      </div>

      <div className="my-4 flex flex-row h-28">
        <div className="relative w-28 h-28">
          <Image
            src="/headshot.jpg"
            alt="Sean Jaeger headshot photo"
            fill
            className="rounded-full object-cover"
            sizes="(max-width: 768px) 112px, 112px"
            priority
          />
        </div>

        <div className="flex flex-col justify-between py-2 px-9">
          {links.map((link, index) => (
            <SiteLink key={index} {...link} />
          ))}
        </div>
      </div>

      <p className="text-general">
        I&apos;m a Front End developer with significant experience working in
        early-stage start up companies.
      </p>

      <p className="text-general mt-6">
        I&apos;m passionate about product development and computer science,
        currently competing actively as a competitive programmer in my spare
        time.
      </p>
    </section>
  )
}

export default IntroSection
