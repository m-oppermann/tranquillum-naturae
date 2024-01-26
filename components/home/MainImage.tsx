"use client"

import { useState, useEffect, useContext } from "react"
import { clsx } from "clsx"
import { motion } from "framer-motion"
import { EditorialOld } from "@/styles/fonts"
import { CursorContext } from "@/utils/contexts"
import CurrentImage from "../CurrentImage"
import { PhotoDataType } from "@/sanity/types"

interface MainImageProps {
  photoData: PhotoDataType[]
}

export default function MainImage({ photoData }: MainImageProps) {
  const { setIsHovering, stopClickPropagation } = useContext(CursorContext)
  const [isZoomed, setIsZoomed] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640 && isZoomed) {
        setIsZoomed(false)
      }
    }

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [isZoomed])

  return (
    <>
      <motion.div
        className={clsx(
          "aspect-[3/4]",
          isZoomed
            ? "fixed left-0 right-0 z-10 m-auto cursor-zoom-out bg-gradient-to-b from-sand-1 font-serif sm:bottom-8 sm:h-3/4 2xl:bottom-10"
            : "h-full sm:cursor-zoom-in -sm:w-full",
          EditorialOld.variable,
        )}
        layout
        onClick={event => {
          if (window.innerWidth > 640) {
            stopClickPropagation(event)
            setIsZoomed(!isZoomed)
            setIsHovering(true)
          }
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {isZoomed && (
          <motion.button
            className="absolute left-1/2 -translate-x-1/2 text-sm sm:-top-12 sm:text-base 2xl:-top-14 2xl:text-lg"
            initial={{ opacity: 0, x: "-50%", y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            onClick={() => setIsHovering(false)}
          >
            ( <em>Close</em> )
          </motion.button>
        )}
        <CurrentImage
          className="h-full w-full"
          width={300}
          height={400}
          quality={isZoomed ? 100 : 75}
          photoData={photoData}
        />
      </motion.div>
      {isZoomed && (
        <motion.div
          className="pointer-events-none fixed left-0 top-0 z-0 h-screen min-h-[800px] w-screen bg-gradient-to-b from-sand-1 from-45%"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
      )}
    </>
  )
}
