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
    <Link href={url} className="flex-row flex link-text" target="_blank">
      <Image src={src} alt={alt} width={16} height={16} className="mx-4" />
      <div>{text}</div>
    </Link>
  )
}

export default SiteLink
