import { FC } from 'react'
import Image, { StaticImageData } from 'next/image'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

interface ProjectCardProps {
  title: string
  image: StaticImageData
  link: string
  github?: string
  tech: string[]
  description: string[]
}

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  image,
  link,
  github,
  tech,
  description,
}) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group rounded-xl overflow-hidden bg-white dark:bg-slate-800 shadow-xl hover:shadow-2xl 
      transition-all duration-300 transform hover:-translate-y-1"
  >
    <div className="relative aspect-video w-full overflow-hidden">
      <Image
        src={image}
        alt={`${title} Screenshot`}
        fill
        className="object-cover transform group-hover:scale-105 transition-transform duration-300"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>

    <div className="p-6 space-y-4">
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          {title}
        </h3>
        <div className="flex gap-3">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-indigo-500 dark:text-slate-400 dark:hover:text-indigo-400"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-indigo-500 dark:text-slate-400 dark:hover:text-indigo-400"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-100 text-indigo-600 
              dark:bg-indigo-900/30 dark:text-indigo-400"
          >
            {item}
          </span>
        ))}
      </div>

      {description.map((paragraph, index) => (
        <p key={index} className="text-slate-600 dark:text-slate-300">
          {paragraph}
        </p>
      ))}
    </div>
  </motion.article>
)

export default ProjectCard
