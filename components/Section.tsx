import { FC, PropsWithChildren, useRef } from 'react'

interface SectionProps extends PropsWithChildren {
  id: string
  title?: string
  className?: string
}

const Section: FC<SectionProps> = ({ id, title, children, className = '' }) => {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section ref={sectionRef} id={id} className={`mt-24 first:mt-0 ${className}`}>
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold text-cinema-text mb-8">
          {title}
        </h2>
      )}
      {children}
    </section>
  )
}

export default Section
