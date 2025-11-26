import Image from 'next/image'

export function Cover({
  src,
  alt,
  caption,
}: {
  src: string
  alt: string
  caption: string
}) {
  return (
    <figure>
      <Image src={src} alt={alt} className="rounded-xl" />
      <figcaption className="text-center">{caption}</figcaption>
    </figure>
  )
}
