"use client"

import { useContext } from "react"
import Image from "next/image"
import { ImageContext } from "@/utils/contexts"
import { PhotoDataType } from "@/sanity/types"

interface CurrentImageProps {
  className?: string
  width: number
  height: number
  photoData: PhotoDataType[]
}

export default function CurrentImage({
  className,
  width,
  height,
  photoData,
}: CurrentImageProps) {
  const { currentImageIndex } = useContext(ImageContext)
  const photo = photoData[currentImageIndex]

  return (
    <Image
      key={photo._id}
      className={className}
      src={photo.image.url}
      alt={photo.image.alt}
      width={width}
      height={height}
      quality={100}
      placeholder="blur"
      blurDataURL={photo.image.placeholder}
    />
  )
}
