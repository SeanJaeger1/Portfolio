import Head from "next/head"
import Image from "next/image"
import headshotImage from "@/public/headshot.png"

export default function Home() {
  return (
    <>
      <Head>
        <title>Sean Jaeger</title>
        <meta
          name="description"
          content="Sean Jaeger's Software Engineering portfolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="site-container flex flex-row py-36 overflow-y-hidden">
        <aside className="w-1/3 flex flex-row-reverse px-12">
          <div>
            <div className="menu-text">Home</div>
            <div className="menu-text">About</div>
            <div className="menu-text">My Work</div>
          </div>
        </aside>
        <div>
          <section id="intro" aria-label="My introduction as a developer">
            <div className="header">Sean Jaeger</div>
            <div className="my-4">
              <Image
                src={headshotImage}
                width={108}
                height={108}
                alt="Sean Jaeger headshot photo"
              />
            </div>
            <p className="text-general">
              I'm a Front End developer and with significant experience working
              in early-stage start up companies.
            </p>
            <p className="text-general mt-6">
              I'm passionate about product development and computer science,
              currently competing actively as a competitive programmer in my
              spare time.
            </p>
          </section>
          <section id="about" aria-label="About Sean Jaeger" className="mt-24">
            <div className="header">About Me</div>
            <p className="text-general mt-6">Hi, I'm Sean.</p>
            <p className="text-general mt-6">
              I've had a very non-traditional path into Software Engineering,
              having taught myself JavaScript online whilst taking my A levels,
              landing my first full time role and opting to take that instead of
              attending university.
            </p>
            <hr className="w-4  my-6" />
            <p className="text-general">
              I've always maintained an extremely pragmatic approach to solving
              business problems with well designed code.
            </p>
            <p className="text-general mt-6">
              Since my first two years of professional experience, I have taken
              a hiatus from my professional career and taken the time to learn
              the theory behind my work deeply. This involved self-teaching
              Computer Science topics, including but not limited to: Data
              Structures & Algorithms, Systems Design and Front End
              technologies.
            </p>
            <p className="text-general mt-6">
              Outside of tech, I have an eclectic mix of interests, from
              traveling the world as a Digital Nomad, to competing in Mixed
              Martial Arts to Chess.
            </p>
            <p className="text-general mt-6">
              I'm deeply passionate about tackling big problems in all fields
              and love to jump in head first to new challenges.
            </p>
          </section>
        </div>
      </main>
    </>
  )
}
