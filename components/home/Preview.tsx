"use client"

import { useState, useEffect, useContext } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { AnimationContext } from "@/utils/contexts"
import { MainType, PhotoDataType } from "@/sanity/types"

interface PreviewProps {
  main: MainType
  photoData: PhotoDataType[]
}

export default function Preview({ main, photoData }: PreviewProps) {
  const { hasAnimatedHome, hasAnimatedInfo } = useContext(AnimationContext)
  const [preview, setPreview] = useState(true)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => {
        if (prevIndex < photoData.length - 1) {
          return prevIndex + 1
        }
        setPreview(false)
        return prevIndex
      })
    }, 200)

    return () => {
      clearInterval(interval)
    }
  }, [photoData])

  const animationProps = {
    initial: !hasAnimatedHome && { y: 0, opacity: 1 },
    animate: { y: 8, opacity: 0 },
    transition: { duration: 0.25 },
  }

  return (
    <>
      {preview && !hasAnimatedHome && !hasAnimatedInfo && (
        <section className="fixed left-0 top-0 z-10 grid h-screen w-screen grid-cols-4 grid-rows-6 gap-x-4 gap-y-16 px-4 py-4 sm:row-span-6 sm:row-start-1 sm:grid-cols-6 sm:grid-rows-6 sm:gap-4 sm:px-6 sm:pb-8 sm:pt-4 lg:grid-cols-8 xl:grid-cols-12 2xl:px-8 2xl:pb-10 2xl:pt-6">
          <motion.h3
            className="col-span-4 col-start-1 row-start-1 text-xl font-bold sm:text-2xl lg:text-3xl xl:col-span-6 2xl:text-4xl"
            {...animationProps}
            transition={{ ...animationProps.transition, delay: 1.5 }}
          >
            {main.title}
          </motion.h3>
          <motion.p
            className="col-span-4 col-start-1 row-start-6 self-end text-sm font-normal sm:col-span-6 sm:text-base md:col-span-4 md:row-start-3 md:self-center lg:text-lg xl:col-span-8"
            {...animationProps}
            transition={{ ...animationProps.transition, delay: 1.25 }}
          >
            {photoData.map(photo => photo.name).join(", ")}
          </motion.p>
          <motion.div
            className="aspect-[3/4] h-24 md:col-start-5 md:row-start-2 lg:col-start-7 xl:col-start-10 xl:h-28 -md:fixed -md:bottom-0 -md:left-0 -md:right-0 -md:top-0 -md:z-10 -md:m-auto"
            {...animationProps}
            transition={{ ...animationProps.transition, delay: 1.75 }}
          >
            <Image
              className="h-full w-full"
              src={photoData[index].image.url}
              alt={photoData[index].image.alt}
              width={72}
              height={96}
              quality={1}
              placeholder="blur"
              blurDataURL={photoData[index].image.placeholder}
              priority
            />
          </motion.div>
        </section>
      )}
    </>
  )
}
