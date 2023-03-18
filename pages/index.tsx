import Head from "next/head"
import Image from "next/image"
import headshotImage from "@/public/headshot.png"
import HLImage from "@/public/HLscreenshot.jpg"
import CPImage from "@/public/CPscreenshot.png"

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
        <link rel="icon" href="favicon.ico" />
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
          <section id="work" aria-label="My work portfolio" className="mt-24">
            <div className="header">My Work</div>
            <div className="mb-12">
              <div className="subheader mt-6 mb-4">Human Lambdas</div>
              <Image
                src={HLImage}
                width={500}
                height={350}
                alt="Human Lambdas App Screenshot"
              />
              <p className="text-general mt-6">
                After joining Human Lambdas (Seedcamp backed) as a founding
                engineer, I worked full stack on both the TypeScript React web
                app and Django Back End creating Human In The Loop
                infrastructure for reliable and scalable data labeling.
              </p>
              <p className="text-general mt-6">
                Working within a start-up of four, I wore many hats and made
                various contributions to everything from UI/UX to broader
                discussions about company strategy, whilst receiving mentorship
                from my colleagues.
              </p>
            </div>
            <div>
              <div className="subheader mt-6 mb-4">Competitive Programming</div>
              <Image
                src={CPImage}
                width={500}
                height={350}
                alt="Competitive Programming Profile Screenshot"
              />
              <p className="text-general mt-6">
                As part of my studies of Computer Science, I have put my
                knowledge into practice by competing in timed competitive
                programming competitions using Python.
              </p>
              <p className="text-general mt-6">
                These competitions involve four questions of increasing
                difficulty, where a sufficiently asymptotically efficient
                solution is required for all test cases to past.
              </p>
              <p className="text-general mt-6">
                I've experienced great success in these competitions, achieving
                a top 4% global ranking out of ~400,000 total participants. In
                my most recent competition I placed in the top ~0.8% of a
                competition with over 17,000 global participants.
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
