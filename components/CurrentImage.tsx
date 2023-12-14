"use client"

import Image from "next/image"
import { use, useContext } from "react"
import { ImageContext } from "@/utils/contexts"
import { PhotoDataType } from "@/sanity/types"
import { getPhotoData } from "@/sanity/lib/query"

interface ImageComponentProps {
  className?: string
  width: number
  height: number
}

const photoDataFetch = getPhotoData()

export default function CurrentImage({
  className,
  width,
  height,
}: ImageComponentProps) {
  const photoData: PhotoDataType[] = use(photoDataFetch)
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
      placeholder="blur"
      blurDataURL={photo.image.placeholder}
    />
  )
}
