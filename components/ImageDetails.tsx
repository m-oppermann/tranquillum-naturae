"use client"

import { use, useContext } from "react"
import { ImageContext } from "@/utils/contexts"
import { PhotoDataType } from "@/sanity/types"
import { getPhotoData } from "@/sanity/lib/query"

const photoFetch = getPhotoData()

export default function ImageDetails() {
  const photoData: PhotoDataType[] = use(photoFetch)
  const { currentImageIndex } = useContext(ImageContext)

  return (
    <>
      <span className="col-start-1 sm:row-start-1">
        {photoData[currentImageIndex].imageName}
      </span>
      <span className="col-start-3 sm:col-start-5 sm:row-start-1 lg:col-start-7 xl:col-start-11">
        {photoData[currentImageIndex].coordinateNorth}
      </span>
      <span className="col-start-4 justify-self-end sm:col-start-6 sm:row-start-1 lg:col-start-8 xl:col-start-12">
        {photoData[currentImageIndex].coordinateWest}
      </span>
    </>
  )
}