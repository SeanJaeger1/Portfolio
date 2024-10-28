import { FC } from 'react'
import Section from './Section'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projectsData'

const WorkSection: FC = () => {
  return (
    <Section id="work" title="My Work">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </Section>
  )
}

export default WorkSection
