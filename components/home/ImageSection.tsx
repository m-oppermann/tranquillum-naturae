"use client"

import { useContext } from "react"
import { clsx } from "clsx"
import { motion } from "framer-motion"
import { EditorialOld } from "@/styles/fonts"
import { PortableText } from "@portabletext/react"
import { ImageContext, AnimationContext } from "@/utils/contexts"
import MainImage from "./MainImage"
import { MainType, PhotoDataType } from "@/sanity/types"

interface ImageSectionProps {
  main: MainType
  photoData: PhotoDataType[]
}

export default function ImageSection({ photoData, main }: ImageSectionProps) {
  const { currentImageIndex } = useContext(ImageContext)
  const { hasAnimatedHome, hasAnimatedInfo } = useContext(AnimationContext)
  const photo = photoData[currentImageIndex]

  const animationProps = {
    initial: !hasAnimatedHome && !hasAnimatedInfo && { y: -8, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5, delay: 2.75 },
  }

  return (
    <section className="grid-col-4 grid gap-x-4 gap-y-6 text-xs sm:row-span-2 sm:row-start-4 sm:grid-cols-6 sm:grid-rows-2 sm:gap-4 sm:text-sm lg:grid-cols-8 xl:grid-cols-12 2xl:text-base -sm:pb-4">
      <motion.span className="col-start-1 sm:row-start-1" {...animationProps}>
        {photo.name}
      </motion.span>
      <motion.span
        className="col-start-3 sm:col-start-5 sm:row-start-1 lg:col-start-7 xl:col-start-11"
        {...animationProps}
      >
        {photo.coordinateNorth}
      </motion.span>
      <motion.span
        className="col-start-4 justify-self-end sm:col-start-6 sm:row-start-1 lg:col-start-8 xl:col-start-12"
        {...animationProps}
      >
        {photo.coordinateWest}
      </motion.span>
      <motion.div
        className="col-span-4 sm:col-start-2 sm:row-span-2 sm:row-start-1 lg:col-start-4 xl:col-start-6"
        {...animationProps}
        transition={{ ...animationProps.transition, delay: 2.5 }}
      >
        <MainImage photoData={photoData} />
      </motion.div>
      <motion.div
        className={clsx(
          "col-span-2 col-start-1 font-serif font-normal sm:col-start-5 sm:row-start-2 lg:col-start-2 xl:col-start-2",
          EditorialOld.variable,
        )}
        {...animationProps}
      >
        <PortableText value={main.copyright} />
      </motion.div>
    </section>
  )
}
