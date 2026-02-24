import { useState, useEffect } from 'react'

const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('intro')

  useEffect(() => {
    const sections = [
      'intro',
      'about',
      'skills',
      'experience',
      'work',
      'achievements',
      'contact',
    ]

    const getActiveSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2 // Middle of viewport
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const sectionTop = section.offsetTop
          if (scrollPosition >= sectionTop) {
            return sections[i]
          }
        }
      }
      return 'intro'
    }

    const handleScroll = () => {
      const newActiveSection = getActiveSection()
      setActiveSection(newActiveSection)
    }

    // Set initial active section
    handleScroll()

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return activeSection
}

export default useActiveSection
