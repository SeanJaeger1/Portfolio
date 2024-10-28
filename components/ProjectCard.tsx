import { FC } from 'react'
import Image, { StaticImageData } from 'next/image'
import { motion } from 'framer-motion'
import { ANIMATION_VARIANTS } from '../constants/animations'

interface ProjectCardProps {
  title: string
  image: StaticImageData
  link: string
  description: string[]
}

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  image,
  link,
  description,
}) => (
  <motion.article
    variants={ANIMATION_VARIANTS.item}
    className="rounded-lg overflow-hidden bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl 
      transition-shadow duration-300"
  >
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      <div className="relative aspect-video w-full">
        <Image
          src={image}
          alt={`${title} Screenshot`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-kaisei font-bold text-slate-900 dark:text-slate-100 mb-4">
          {title}
        </h3>
        {description.map((paragraph, index) => (
          <p
            key={index}
            className="text-slate-700 dark:text-slate-300 mt-4 first:mt-0"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </a>
  </motion.article>
)

export default ProjectCard
