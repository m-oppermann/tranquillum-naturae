"use client"

import { useContext } from "react"
import { ImageContext } from "@/utils/contexts"
import { images } from "@/utils/imagesData"

export default function ImageDetails() {
  const { currentImageIndex } = useContext(ImageContext)

  return (
    <>
      <span className="col-start-1 sm:row-start-1">
        {images[currentImageIndex].name}
      </span>
      <span className="col-start-3 sm:col-start-5 sm:row-start-1 lg:col-start-7 xl:col-start-11">
        {images[currentImageIndex].coordinates.north}
      </span>
      <span className="col-start-4 justify-self-end sm:col-start-6 sm:row-start-1 lg:col-start-8 xl:col-start-12">
        {images[currentImageIndex].coordinates.west}
      </span>
    </>
  )
}
