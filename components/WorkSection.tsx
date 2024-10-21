import Link from "next/link"
import Image from "next/image"
import HLImage from "@/public/HLscreenshot.jpg"
import CPImage from "@/public/CPscreenshot.png"
import DCImage from "@/public/DeleteCupsScreenshot.jpg" // You'll need to add this image to your project

const WorkSection = () => {
  return (
    <section id="work" aria-label="My work portfolio" className="mt-24">
      <div className="header font-kaisei">My Work</div>
      <hr className="w-10  my-6" />
      
      {/* Delete Cups Section */}
      <div className="mb-12">
        <Link href="https://delete.gorilla3.co.uk/" target="_blank" rel="noopener noreferrer">
          <div className="subheader mt-6 mb-4 font-kaisei">Delete Cups</div>
          <Image
            src={DCImage}
            width={600}
            height={326}
            alt="Delete Cups Website Screenshot"
          />
        </Link>
        <p className="text-general mt-6">
          At Delete Cups, I worked as a software engineer on a mission to reduce single-use cup waste through an innovative reusable cup system. Our goal was to eliminate the administrative hassle typically associated with reusable cup programs.
        </p>
        <p className="text-general mt-6">
          My role involved full-stack development, working with technologies such as React / Next.js for the frontend and Python, Go and Postgres for the backend. I contributed to the development of the main website, the user management system, and the integration with point-of-sale systems at partner cafes.
        </p>
        <p className="text-general mt-6">
          One of my key contributions was developing the RFID tracking system for the cups. This involved creating a robust API to handle cup check-outs and returns, ensuring accurate tracking of cup usage and facilitating the seamless return process for users.
        </p>
        <p className="text-general mt-6">
          I also played a crucial role in implementing the payment integration system, allowing for smooth transactions and automatic billing for unreturned cups. This required careful consideration of security measures and compliance with financial regulations.
        </p>
        <p className="text-general mt-6">
          Working at Delete Cups provided me with valuable experience in developing environmentally-focused technology solutions. It reinforced my skills in creating user-friendly interfaces and robust backend systems, while also helping me hone skills such as management & architecting solutions.
        </p>
      </div>

      {/* Human Lambdas Section */}
      <div className="mb-12">
        <Link
          href="https://github.com/Human-Lambdas/human-lambdas"
          target="_blank"
        >
          <div className="subheader mt-6 mb-4 font-kaisei">Human Lambdas</div>
          <Image
            src={HLImage}
            width={600}
            height={326}
            alt="Human Lambdas App Screenshot"
          />
        </Link>
        <p className="text-general mt-6">
          After joining Human Lambdas (Seedcamp backed) as a founding engineer
          at 18, I worked full stack on both the TypeScript React web app and
          Django Back End creating Human In The Loop infrastructure for reliable
          and scalable data labelling.
        </p>
        <p className="text-general mt-6">
          Working within a start-up of four, I wore many hats and made various
          contributions to everything from UI/UX to broader discussions about
          company strategy, whilst receiving mentorship from my colleagues.
        </p>
        <p className="text-general mt-6">
          This work experience has served as the cornerstone of my development
          approach, having learned to focus on rapid iteration, quality, and
          resourcefulness.
        </p>
      </div>

      {/* Competitive Programming Section */}
      <div>
        <Link href="https://leetcode.com/seanjaeger/" target="_blank">
          <div className="subheader mt-6 mb-4 font-kaisei">
            Competitive Programming
          </div>
          <Image
            src={CPImage}
            width={600}
            height={326}
            alt="Competitive Programming Profile Screenshot"
          />
        </Link>
        <p className="text-general mt-6">
          As part of my studies of Computer Science, I have put my knowledge
          into practice by competing in timed competitive programming
          competitions using Python.
        </p>
        <p className="text-general mt-6">
          These competitions involve four questions of increasing difficulty,
          where a sufficiently asymptotically efficient solution is required for
          all test cases to pass.
        </p>
        <p className="text-general mt-6">
          I&apos;ve experienced great success in these competitions, achieving a
          top 4% global ranking out of ~400,000 total participants. In my most
          recent competition, I placed in the top ~0.8% of a competition with
          over 17,000 global participants.
        </p>
        <p className="text-general mt-6">
          Despite not being professional experience, I have found this to be one
          of the most fruitful periods of my career. Coming back to development
          and suddenly understanding many concepts that were previously a
          mystery to me as well as being able to pick up new technologies with
          ease was an incredible experience and felt like a great leap forward
          in terms of my skill as an engineer.
        </p>
      </div>
    </section>
  )
}

export default WorkSection
