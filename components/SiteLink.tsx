import Link from "next/link"
import Image from "next/image"

export default function SiteLink({ src, text, url, alt }) {
  return (
    <Link className="flex-row flex link-text" href={url} target={"_blank"}>
      <Image width={16} height={16} src={src} alt={alt} className="mx-4" />
      <div>{text}</div>
    </Link>
  )
}
