import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

interface SiteLinkProps {
  src: string
  text: string
  url: string
  alt: string
}

const SiteLink: FC<SiteLinkProps> = ({ src, text, url, alt }) => {
  return (
    <Link
      href={url}
      className="flex items-center gap-2 text-sm text-general hover:opacity-80 transition-opacity"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="relative w-5 h-5">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          sizes="20px"
        />
      </div>
      <span>{text}</span>
    </Link>
  )
}

export default SiteLink
