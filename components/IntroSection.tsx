import Image from "next/image"
import SiteLink from "./SiteLink"

const IntroSection = () => {
  return (
    <section id="intro" aria-label="My introduction as a developer">
      <div className="header font-kaisei">Sean Jaeger</div>
      <div className="my-4 text-general">
        Hey, I&apos;m Sean. A start-up focused software engineer.
      </div>
      <div className="my-4 flex flex-row h-28">
        <div className="relative w-28 h-28">
          <Image
            src="/headshot.jpg"
            alt="Sean Jaeger headshot photo"
            fill
            className="rounded-full object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="flex flex-col justify-between py-2 px-3">
          <SiteLink
            src={"ExternalLink.svg"}
            text={"Check out my LeetCode"}
            url={"https://leetcode.com/seanjaeger/"}
            alt={"External link icon"}
          />
          <SiteLink
            src={"LinkedIn.svg"}
            text={"Check out my LinkedIn"}
            url={"https://www.linkedin.com/in/sean-jaeger/"}
            alt={"LinkedIn icon"}
          />
          <SiteLink
            src={"CV.svg"}
            text={"View my CV"}
            url={"Sean-Jaeger-CV.pdf"}
            alt={"CV icon"}
          />
        </div>
      </div>
      <p className="text-general">
        I&apos;m a Front End developer and with significant experience working
        in early-stage start up companies.
      </p>
      <p className="text-general mt-6">
        I&apos;m passionate about product development and computer science,
        currently competing actively as a competitive programmer in my spare
        time.
      </p>
    </section>
  )
}

export default IntroSection
