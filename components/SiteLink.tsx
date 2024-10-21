import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

interface SiteLinkProps {
  src: string
  text: string
  url: string
  alt: string
}

const SiteLink: FC<SiteLinkProps> = ({ src, text, url, alt }) => {
  return (
    <Link href={url} className="flex items-center space-x-2">
      <Image
        src={src}
        alt={alt}
        width={16}
        height={16}
        className="object-contain"
      />
      <span className="text-sm text-general">{text}</span>
    </Link>
  )
}

export default SiteLink
