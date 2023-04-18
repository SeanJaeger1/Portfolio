import ScrollLink from "./ScrollLink"

const Nav = () => {
  return (
    <nav className="px-4 w-full sm:hidden font-kaisei">
      <div className="flex flex-row  w-full justify-between">
        <ScrollLink className="mobile-scroll-link" href="#intro">
          Home
        </ScrollLink>
        <ScrollLink className="mobile-scroll-link" href="#about">
          About
        </ScrollLink>
        <ScrollLink className="mobile-scroll-link" href="#work">
          My Work
        </ScrollLink>
      </div>
    </nav>
  )
}

export default Nav
