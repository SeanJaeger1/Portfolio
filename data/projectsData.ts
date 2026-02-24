import { StaticImageData } from 'next/image'
import HLImage from '@/public/HLscreenshot.webp'
import CPImage from '@/public/CPscreenshot.webp'
import RCImage from '@/public/RCScreenshot.webp'
import EloquentImage from '@/public/EloquentScreenshot.webp'
import TSImage from '@/public/TSScreenshot.webp'

export interface Project {
  title: string
  image: StaticImageData
  link: string
  description: string[]
  github?: string
  tech: string[]
  timeline?: string
  role?: string
  impact?: string[]
  metrics?: {
    users?: string
    funding?: string
    timeline?: string
    impact?: string
  }
  status?: 'Live' | 'In Development' | 'Completed'
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: 'Teiwaz Striking',
    image: TSImage,
    link: 'https://www.teiwazstriking.com',
    role: 'Designer & Developer',
    timeline: '2026',
    status: 'Live',
    featured: true,
    metrics: {
      timeline: 'Solo build',
      impact: 'Full brand & web presence',
    },
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'UI/UX Design'],
    description: [
      'Designed and developed a complete web presence for an elite combat sports gym in Phuket, Thailand, covering MMA striking, boxing, K1 kickboxing, wrestling, and strength & conditioning programs.',
      'Crafted a dark, bold visual identity with gold accents that reflects the intensity of the gym, featuring interactive program cards, a professional fighter roster, class schedules, and tiered membership pricing.',
      'Built with a focus on conversion — clear calls-to-action, smooth scroll navigation, and a contact form drive visitor engagement and membership inquiries.',
    ],
    impact: [
      'Designed the full brand identity and visual language from scratch',
      'Built a responsive, high-performance site with optimized images and smooth interactions',
      'Created an intuitive information architecture spanning programs, schedules, pricing, and fighter profiles',
      'Implemented a contact system to convert site visitors into gym members',
    ],
  },
  {
    title: 'Eloquent',
    image: EloquentImage,
    link: 'https://eloquent-nine.vercel.app/',
    github: 'https://github.com/SeanJaeger1/Eloquent',
    role: 'Solo Developer',
    timeline: '2024',
    status: 'Live',
    featured: true,
    metrics: {
      timeline: '4 months',
      impact: 'AI-powered learning',
    },
    tech: [
      'React Native',
      'TypeScript',
      'Expo',
      'LLaMA 3',
      'React Reanimated',
      'Gesture Handler',
    ],
    description: [
      'Eloquent is an innovative language learning platform that combines spaced repetition with AI-powered definitions, delivering a seamless mobile experience across iOS and Android.',
      'The app leverages locally-run LLaMA 3 to generate comprehensive and contextual definitions, ensuring reliable access to high-quality learning materials without dependency on external APIs.',
      'Built with React Native and Expo, the application emphasizes performance and user experience through fluid animations and gesture-based interactions.',
    ],
    impact: [
      'Implemented an efficient spaced repetition algorithm to optimize vocabulary retention',
      'Integrated local LLaMA 3 processing to generate contextually accurate definitions while maintaining user privacy',
      'Developed a robust CI/CD pipeline with automated testing and platform-specific builds',
      'Created an intuitive pronunciation practice system using Google TTS integration',
    ],
  },
  {
    title: 'Recirculate Systems',
    image: RCImage,
    link: 'https://www.recirculatesystems.com/',
    role: 'Full Stack Engineer',
    timeline: '2023',
    status: 'Live',
    featured: true,
    metrics: {
      impact: 'Zero waste solution',
      timeline: '2+ years',
    },
    tech: [
      'React',
      'Next.js',
      'Python',
      'Go',
      'PostgreSQL',
      'RFID Integration',
    ],
    description: [
      'Recirculate Systems revolutionized sustainable consumption through an innovative reusable cup system that eliminated single-use waste while maintaining convenience for both businesses and consumers.',
      'As a key member of the engineering team, I developed full-stack solutions spanning from user-facing applications to complex backend systems handling real-time RFID tracking and payment processing.',
      'The platform integrated seamlessly with existing point-of-sale systems, making adoption frictionless for partner cafes while ensuring accurate tracking and billing.',
    ],
    impact: [
      'Architected and implemented the RFID tracking system, enabling real-time cup monitoring across multiple locations',
      'Developed secure payment integration handling thousands of transactions with automated billing for unreturned cups',
      'Created an intuitive management dashboard for partner cafes to track inventory and usage patterns',
      'Established integration protocols with various point-of-sale systems, expanding platform compatibility',
    ],
  },
  {
    title: 'Human Lambdas',
    image: HLImage,
    link: 'https://github.com/Human-Lambdas/human-lambdas',
    github: 'https://github.com/Human-Lambdas/human-lambdas',
    role: 'Founding Engineer',
    timeline: '2019-2020',
    status: 'Completed',
    metrics: {
      funding: 'Seedcamp backed',
      timeline: 'One year',
    },
    tech: ['TypeScript', 'React', 'Django', 'Python', 'UI/UX Design'],
    description: [
      'Human Lambdas, backed by Seedcamp, pioneered Human-in-the-Loop infrastructure for reliable and scalable data labeling, enabling high-quality training data generation for machine learning systems.',
      'As a founding engineer joining at 18, I played a crucial role in building both the TypeScript React frontend and Django backend, establishing core functionality and scalable architecture.',
      'Working in a tight-knit team of four, I contributed across the full stack while participating in strategic decisions that shaped the product and company direction.',
    ],
    impact: [
      'Built core features of the distributed data labeling platform from scratch',
      'Implemented robust frontend state management and backend API architecture',
      'Contributed to product strategy and technical decision-making as a founding team member',
      'Collaborated on UI/UX design iterations to optimize user workflow efficiency',
    ],
  },
  {
    title: 'Competitive Programming',
    image: CPImage,
    link: 'https://leetcode.com/seanjaeger/',
    timeline: '2021-2022',
    status: 'Completed',
    metrics: {
      impact: 'Top 3% globally',
      timeline: '12 months',
    },
    tech: ['Python', 'Algorithms', 'Data Structures', 'Problem Solving'],
    description: [
      'During my focused study of Computer Science fundamentals, I immersed myself in competitive programming, tackling complex algorithmic challenges under time constraints.',
      'Through consistent practice and deep understanding of data structures and algorithms, I achieved great success in global competitions, demonstrating both technical proficiency and problem-solving abilities.',
      'This intensive period of study and practice markedly enhanced my ability to architect efficient solutions and quickly master new technologies.',
    ],
    impact: [
      'Achieved top 4% global ranking among ~400,000 participants on LeetCode',
      'Placed in top 0.8% in a recent competition with 17,000+ global participants',
      'Mastered advanced algorithms and data structures through practical application',
      'Developed strong problem-solving skills under time pressure',
    ],
  },
]
