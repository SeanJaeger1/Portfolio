import Link from "next/link"
import Image from "next/image"

interface SiteLinkProps {
  src: string
  text: string
  url: string
  alt: string
}

export default function SiteLink({ src, text, url, alt }: SiteLinkProps) {
  return (
    <Link className="flex-row flex link-text" href={url} target={"_blank"}>
      <Image width={16} height={16} src={src} alt={alt} className="mx-4" />
      <div>{text}</div>
    </Link>
  )
}
