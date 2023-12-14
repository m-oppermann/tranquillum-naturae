"use client"

import { use, useContext } from "react"
import { ImageContext } from "@/utils/contexts"
import { PhotoDataType } from "@/sanity/types"
import { getPhotoData } from "@/sanity/lib/query"

const photoFetch = getPhotoData()

export default function ImageDetails() {
  const photoData: PhotoDataType[] = use(photoFetch)
  const { currentImageIndex } = useContext(ImageContext)

  const photo = photoData[currentImageIndex]

  return (
    <>
      <span className="col-start-1 sm:row-start-1">{photo.name}</span>
      <span className="col-start-3 sm:col-start-5 sm:row-start-1 lg:col-start-7 xl:col-start-11">
        {photo.coordinateNorth}
      </span>
      <span className="col-start-4 justify-self-end sm:col-start-6 sm:row-start-1 lg:col-start-8 xl:col-start-12">
        {photo.coordinateWest}
      </span>
    </>
  )
}
