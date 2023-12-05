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

export default function ImageComponent({
  className,
  width,
  height,
}: ImageComponentProps) {
  const photoData: PhotoDataType[] = use(photoDataFetch)
  const { currentImageIndex } = useContext(ImageContext)

  return (
    <Image
      className={className}
      src={photoData[currentImageIndex].photo.image}
      alt={photoData[currentImageIndex].photo.alt}
      width={width}
      height={height}
    />
  )
}
