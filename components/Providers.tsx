"use client"

import { use, useState, useRef, useEffect } from "react"
import { usePathname } from "next/navigation"
import { SoundContext, CursorContext, ImageContext } from "@/utils/contexts"
import { Howl } from "howler"
import { clsx } from "clsx"
import { MainType, PhotoDataType } from "@/sanity/types"

interface ProvidersProps {
  children: React.ReactNode
  main: MainType
  photoData: PhotoDataType[]
}

export default function Providers({
  children,
  main,
  photoData,
}: ProvidersProps) {
  const pathname = usePathname()

  // Sound
  const [isPlaying, setIsPlaying] = useState(false)
  const sound = useRef<Howl | null>(null)

  const handleSwitch = () => {
    !isPlaying && sound.current?.play()
    sound.current?.mute(isPlaying)
    setIsPlaying(!isPlaying)
  }

  useEffect(() => {
    if (!sound.current) {
      sound.current = new Howl({
        src: [main.soundFile.file],
        volume: 0.1,
        loop: true,
      })
    }

    return () => {
      sound.current?.stop()
    }
  }, [main])

  // Cursor
  const [isHovering, setIsHovering] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isMouseInViewport, setIsMouseInViewport] = useState(true)

  useEffect(() => {
    const updateMousePosition = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY })
    }
    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  const handleViewportMouseEnter = () => setIsMouseInViewport(true)
  const handleViewportMouseLeave = () => setIsMouseInViewport(false)

  const stopClickPropagation = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
  }

  // Images
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handleClickNext = () => {
    pathname === "/" &&
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % photoData.length)
  }

  return (
    <SoundContext.Provider value={{ isPlaying, handleSwitch }}>
      <CursorContext.Provider
        value={{
          setIsHovering,
          stopClickPropagation,
        }}
      >
        <ImageContext.Provider value={{ currentImageIndex }}>
          <div
            className={clsx(
              "h-full",
              pathname === "/" && !isHovering && "sm:cursor-none",
            )}
            onClick={handleClickNext}
            onMouseEnter={handleViewportMouseEnter}
            onMouseLeave={handleViewportMouseLeave}
          >
            {children}
          </div>
          {pathname === "/" && (
            <span
              className={clsx(
                "pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-1/2 text-sm sm:text-base 2xl:text-lg -sm:hidden",
                position.x === 0 && position.y === 0 && "hidden",
                !isMouseInViewport && "hidden",
                isHovering && "hidden",
              )}
              style={{ left: `${position.x}px`, top: `${position.y}px` }}
            >
              {currentImageIndex + 1}&nbsp;/&nbsp;{photoData.length}
            </span>
          )}
        </ImageContext.Provider>
      </CursorContext.Provider>
    </SoundContext.Provider>
  )
}
