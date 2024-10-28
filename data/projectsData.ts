import { StaticImageData } from 'next/image'
import HLImage from '@/public/HLscreenshot.jpg'
import CPImage from '@/public/CPscreenshot.png'
import RCImage from '@/public/RCScreenshot.jpg'
import EloquentImage from '@/public/EloquentScreenshot.png'

export interface Project {
  title: string
  image: StaticImageData
  link: string
  description: string[]
  github?: string
  tech: string[]
}

export const projects: Project[] = [
  {
    title: 'Eloquent',
    image: EloquentImage,
    link: 'https://eloquent-nine.vercel.app/',
    github: 'https://github.com/SeanJaeger1/Eloquent',
    tech: [
      'React Native',
      'TypeScript',
      'Expo',
      'LLaMA 3',
      'React Reanimated',
      'Gesture Handler',
    ],
    description: [
      'Eloquent is a cross-platform mobile application designed to enhance language learning through spaced repetition, leveraging locally run LLaMA 3 to generate a comprehensive database of definitions.',
      'Built using React Native and Expo, with TypeScript for type safety, the application delivers a native mobile experience while maintaining a single codebase for both iOS and Android platforms.',
      "Key features include vocabulary tracking through spaced repetition, pronunciation practice using Google's Text-to-Speech API via Expo's AV module, and a custom-generated definition database powered by local LLaMA 3 implementation.",
      "The implementation involved solving complex technical challenges around mobile audio integration, state persistence, and smooth animations using React Native's Reanimated and Gesture Handler libraries.",
      'The project follows professional development practices with a multi-stage CI/CD pipeline handling type checking, linting, web builds, and automated EAS builds for Android with different profiles for preview and production environments.',
    ],
  },
  {
    title: 'Recirculate Systems',
    image: RCImage,
    link: 'https://www.recirculatesystems.com/',
    tech: [
      'React',
      'Next.js',
      'Python',
      'Go',
      'PostgreSQL',
      'RFID Integration',
    ],
    description: [
      'At Recirculate Systems, I worked as a software engineer on a mission to reduce single-use cup waste through an innovative reusable cup system. Our goal was to eliminate the administrative hassle typically associated with reusable cup programs.',
      'My role involved full-stack development, working with technologies such as React / Next.js for the frontend and Python, Go and Postgres for the backend. I contributed to the development of the main website, the user management system, and the integration with point-of-sale systems at partner cafes.',
      'One of my key contributions was developing the RFID tracking system for the cups. This involved creating a robust API to handle cup check-outs and returns, ensuring accurate tracking of cup usage and facilitating the seamless return process for users.',
      'I also played a crucial role in implementing the payment integration system, allowing for smooth transactions and automatic billing for unreturned cups. This required careful consideration of security measures and compliance with financial regulations.',
      'Working at Recirculate Systems provided me with valuable experience in developing environmentally-focused technology solutions. It reinforced my skills in creating user-friendly interfaces and robust backend systems, while also helping me hone skills such as management & architecting solutions.',
    ],
  },
  {
    title: 'Human Lambdas',
    image: HLImage,
    link: 'https://github.com/Human-Lambdas/human-lambdas',
    github: 'https://github.com/Human-Lambdas/human-lambdas',
    tech: ['TypeScript', 'React', 'Django', 'Python', 'UI/UX Design'],
    description: [
      'After joining Human Lambdas (Seedcamp backed) as a founding engineer at 18, I worked full stack on both the TypeScript React web app and Django Back End creating Human In The Loop infrastructure for reliable and scalable data labelling.',
      'Working within a start-up of four, I wore many hats and made various contributions to everything from UI/UX to broader discussions about company strategy, whilst receiving mentorship from my colleagues.',
      'This work experience has served as the cornerstone of my development approach, having learned to focus on rapid iteration, quality, and resourcefulness.',
    ],
  },
  {
    title: 'Competitive Programming',
    image: CPImage,
    link: 'https://leetcode.com/seanjaeger/',
    tech: ['Python', 'Algorithms', 'Data Structures', 'Problem Solving'],
    description: [
      'As part of my studies of Computer Science, I have put my knowledge into practice by competing in timed competitive programming competitions using Python.',
      'These competitions involve four questions of increasing difficulty, where a sufficiently asymptotically efficient solution is required for all test cases to pass.',
      "I've experienced great success in these competitions, achieving a top 4% global ranking out of ~400,000 total participants. In my most recent competition, I placed in the top ~0.8% of a competition with over 17,000 global participants.",
      'Despite not being professional experience, I have found this to be one of the most fruitful periods of my career. Coming back to development and suddenly understanding many concepts that were previously a mystery to me as well as being able to pick up new technologies with ease was an incredible experience and felt like a great leap forward in terms of my skill as an engineer.',
    ],
  },
]
