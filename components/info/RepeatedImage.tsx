"use client"

import { useContext } from "react"
import clsx from "clsx"
import { motion } from "framer-motion"
import { AnimationContext } from "@/utils/contexts"
import CurrentImage from "@/components/CurrentImage"
import { PhotoDataType } from "@/sanity/types"

interface RepeatedImageProps {
  className?: string
  photoData: PhotoDataType[]
}

export default function RepeatedImage({
  className,
  photoData,
}: RepeatedImageProps) {
  const { hasAnimatedInfo } = useContext(AnimationContext)

  return (
    <motion.div
      className={clsx(
        "aspect-[3/4] h-24 2xl:h-28 -sm:hidden",
        hasAnimatedInfo
          ? className
          : "fixed bottom-0 left-0 right-0 top-0 m-auto",
      )}
      layout
      initial={!hasAnimatedInfo && { y: -8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        default: { duration: 0.75, ease: "easeIn" },
        layout: { duration: 0.75, delay: 0.75, ease: [0.8, 0.0, 0.2, 1.0] },
      }}
    >
      <CurrentImage
        className="h-full w-full"
        width={72}
        height={96}
        photoData={photoData}
      />
    </motion.div>
  )
}
