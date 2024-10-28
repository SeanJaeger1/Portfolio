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
      <Image src={image} width={600} height={326} alt={`${title} Screenshot`} />
    </Link>
    {description.map((paragraph: string, index: number) => (
      <p key={index} className="text-general mt-6">
        {paragraph}
      </p>
    ))}
  </div>
)

export default ProjectSection
