"use client"

import { useContext } from "react"
import Image from "next/image"
import clsx from "clsx"
import { motion } from "framer-motion"
import { EditorialOld } from "@/styles/fonts"
import { PortableText } from "@portabletext/react"
import { AnimationContext } from "@/utils/contexts"
import { MainType } from "@/sanity/types"

interface TextSectionProps {
  main: MainType
}

export default function TextSection({ main }: TextSectionProps) {
  const { hasAnimatedHome, hasAnimatedInfo } = useContext(AnimationContext)

  const animationProps = {
    initial: !hasAnimatedHome && !hasAnimatedInfo && { y: -8, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5, delay: 2.25 },
  }

  return (
    <section className="grid grid-cols-4 gap-x-4 gap-y-16 sm:row-span-3 sm:row-start-1 sm:grid-cols-6 sm:grid-rows-3 sm:gap-4 lg:grid-cols-8 xl:grid-cols-12">
      <motion.h1
        className="col-span-3 col-start-1 text-2xl font-bold sm:col-span-4 sm:row-start-1 sm:text-3xl md:text-4xl lg:col-start-3 lg:text-5xl xl:col-span-5 xl:col-start-5 2xl:text-6xl"
        {...animationProps}
      >
        {main.title}
      </motion.h1>
      <motion.div
        className="col-start-4 -mt-4 w-16 sm:col-start-6 sm:row-start-1 sm:-mt-6 sm:w-20 md:w-[5.5rem] lg:col-start-7 lg:-mt-5 lg:w-24 xl:col-span-2 xl:col-start-10 2xl:-mt-4 2xl:w-[6.5rem]"
        {...animationProps}
      >
        <Image
          src={main.drawing.url}
          alt={main.drawing.alt}
          width={120}
          height={120}
        />
      </motion.div>
      <motion.div
        className={clsx(
          "col-span-4 col-start-1 font-serif text-base font-normal sm:col-span-6 sm:text-lg lg:col-span-8 lg:self-center xl:col-span-12 2xl:text-xl",
          EditorialOld.variable,
        )}
        {...animationProps}
        transition={{ ...animationProps.transition, delay: 2 }}
      >
        <PortableText value={main.contemplation} />
      </motion.div>
    </section>
  )
}
