import Image from 'next/image'

export function Cover({
  src,
  alt,
  caption,
  width,
  height,
}: {
  src: string
  alt: string
  caption: string
  width?: number
  height?: number
}) {
  return (
    <figure>
      <Image
        src={src}
        alt={alt}
        className="rounded-xl"
        width={width}
        height={height}
      />
      <figcaption className="text-center">{caption}</figcaption>
    </figure>
  )
}
