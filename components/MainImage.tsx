"use client"

import { useState, useEffect, useContext } from "react"
import CurrentImage from "./CurrentImage"
import { CursorContext } from "@/utils/contexts"
import { clsx } from "clsx"
import { EditorialOld } from "@/styles/fonts"

export default function MainImage() {
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
      <div
        className={clsx(
          "aspect-[3/4]",
          isZoomed
            ? "fixed left-1/2 z-10 -translate-x-1/2 cursor-zoom-out bg-gradient-to-b from-sand-1 font-serif sm:bottom-8 sm:h-3/4 2xl:bottom-10"
            : "col-span-4 h-full sm:col-start-2 sm:row-span-2 sm:row-start-1 sm:cursor-zoom-in lg:col-start-4 xl:col-start-6 -sm:w-full",
          EditorialOld.variable,
        )}
        onClick={event => {
          if (window.innerWidth > 640) {
            stopClickPropagation(event)
            setIsZoomed(!isZoomed)
          }
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {isZoomed && (
          <button
            onClick={() => setIsHovering(false)}
            className="absolute left-1/2 -translate-x-1/2 text-sm sm:-top-12 sm:text-base 2xl:-top-14 2xl:text-lg"
          >
            ( <em>Close</em> )
          </button>
        )}
        <CurrentImage className="h-full w-full" width={300} height={400} />
      </div>
      {isZoomed && (
        <div className="pointer-events-none fixed left-0 top-0 z-0 h-screen min-h-[800px] w-screen bg-gradient-to-b from-sand-1 from-45%" />
      )}
    </>
  )
}
