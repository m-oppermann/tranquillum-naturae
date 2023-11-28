"use client"

import Image from "next/image"
import { useContext } from "react"
import { ImageContext } from "@/utils/contexts"
import { images } from "@/utils/imagesData"

interface ImageComponentProps {
  className?: string
  width: number
  height: number
}

export default function ImageComponent({
  className,
  width,
  height,
}: ImageComponentProps) {
  const { currentImageIndex } = useContext(ImageContext)

  return (
    <Image
      className={className}
      src={`/assets/images/${images[currentImageIndex].name}.jpg`}
      alt={images[currentImageIndex].alt}
      width={width}
      height={height}
    />
  )
}
