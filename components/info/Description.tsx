"use client"

import { useContext } from "react"
import clsx from "clsx"
import { motion } from "framer-motion"
import { EditorialOld } from "@/styles/fonts"
import { PortableText } from "@portabletext/react"
import { PortableTextComponents } from "@portabletext/react"
import { AnimationContext } from "@/utils/contexts"
import { MainType } from "@/sanity/types"

interface DescriptionProps {
  main: MainType
}

export default function Description({ main }: DescriptionProps) {
  const { hasAnimatedInfo } = useContext(AnimationContext)
  const customTag: PortableTextComponents = {
    block: {
      normal: ({ children }) => <span>{children}</span>,
    },
  }

  return (
    <motion.div
      className={clsx(
        "col-span-4 col-start-1 row-start-1 font-serif text-base font-normal sm:col-span-6 sm:text-lg lg:col-span-6 lg:col-start-3 xl:col-span-9 xl:col-start-3 2xl:text-xl -sm:row-span-3 -sm:grid -sm:grid-rows-3 -sm:gap-4",
        EditorialOld.variable,
      )}
      initial={
        !hasAnimatedInfo &&
        typeof window !== "undefined" &&
        window.innerWidth > 640 && { y: -8, opacity: 0 }
      }
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.75, duration: 0.5 }}
    >
      <p className="row-start-1">
        <PortableText value={main.about} components={customTag} />
        &nbsp;
        <br className="-*:hidden" />
        <span className="-sm:hidden">
          <PortableText value={main.credits} components={customTag} />
        </span>
      </p>
      <div className="row-start-3 sm:hidden">
        <PortableText value={main.credits} />
      </div>
    </motion.div>
  )
}
