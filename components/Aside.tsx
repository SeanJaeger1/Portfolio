import ScrollLink from "./ScrollLink"

const Aside = () => {
  return (
    <aside className="hidden sm:flex w-1/3 flex-row-reverse px-12 md:px-20 font-kaisei">
      <div className="flex flex-col">
        <ScrollLink className="menu-text" href="#intro">
          Home
        </ScrollLink>
        <ScrollLink className="menu-text" href="#about">
          About
        </ScrollLink>
        <ScrollLink className="menu-text" href="#work">
          My Work
        </ScrollLink>
      </div>
    </aside>
  )
}

export default Aside
