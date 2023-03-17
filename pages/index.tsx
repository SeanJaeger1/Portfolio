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
      <main className="site-container">
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
            I'm a Front End developer and with significant experience working in
            early-stage start up companies.
          </p>
          <p className="text-general mt-6">
            I'm passionate about product development and computer science,
            currently competing actively as a competitive programmer in my spare
            time.
          </p>
        </section>
      </main>
    </>
  )
}
