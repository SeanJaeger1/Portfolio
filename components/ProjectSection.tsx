import React from 'react'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'

interface ProjectSectionProps {
  title: string
  image: StaticImageData
  link: string
  description: string[]
}

const ProjectSection: React.FC<ProjectSectionProps> = ({
  title,
  image,
  link,
  description,
}) => (
  <div className="mb-12">
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <div className="subheader mt-6 mb-4 font-kaisei">{title}</div>
      <div className="relative w-full aspect-[600/326]">
        <Image
          src={image}
          alt={`${title} Screenshot`}
          fill
          sizes="(max-width: 768px) 100vw, 600px"
          className="object-contain"
          priority={title.includes('CP')}
        />
      </div>
    </Link>
    {description.map((paragraph: string, index: number) => (
      <p key={index} className="text-general mt-6">
        {paragraph}
      </p>
    ))}
  </div>
)

export default ProjectSection
