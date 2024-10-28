import { FC } from 'react'
import Image, { StaticImageData } from 'next/image'
import { ExternalLink } from 'lucide-react'

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
}) => {
  return (
    <div
      className="group rounded-xl overflow-hidden bg-slate-800/50 hover:bg-slate-800/80 
      transition-colors duration-300 h-full flex flex-col"
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden relative aspect-video"
      >
        <Image
          src={image}
          alt={`${title} Screenshot`}
          fill
          className="object-cover object-top transform group-hover:scale-105 
            transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent 
          opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </a>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-4">
          <h3
            className="text-xl font-bold text-slate-200 group-hover:text-purple-400 
            transition-colors duration-300"
          >
            {title}
          </h3>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-purple-400 transition-colors duration-200"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>

        <div className="space-y-3 text-slate-400 flex-grow">
          {description.map((paragraph, index) => (
            <p key={index} className={index > 0 ? 'hidden md:block' : ''}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
