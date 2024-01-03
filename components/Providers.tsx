"use client"

import { useState, useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import { Howl } from "howler"
import { clsx } from "clsx"
import {
  SoundContext,
  CursorContext,
  ImageContext,
  AnimationContext,
} from "@/utils/contexts"
import { NavigationType, MainType, PhotoDataType } from "@/sanity/types"

interface ProvidersProps {
  children: React.ReactNode
  navigation: NavigationType
  main: MainType
  photoData: PhotoDataType[]
}

export default function Providers({
  children,
  navigation,
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

  // Animation
  const [hasAnimatedHome, setHasAnimatedHome] = useState(false)
  const [hasAnimatedInfo, setHasAnimatedInfo] = useState(false)

  useEffect(() => {
    if (pathname === "/") {
      if (!hasAnimatedHome) {
        setIsHovering(true)
      }

      const timeout = setTimeout(() => {
        setHasAnimatedHome(true)
        setIsHovering(false)
      }, 2000)

      return () => {
        clearTimeout(timeout)
      }
    } else if (pathname === "/" + navigation.infoRoute.current) {
      setHasAnimatedInfo(true)
    }
  }, [hasAnimatedHome, pathname, navigation.infoRoute])

  return (
    <SoundContext.Provider value={{ isPlaying, handleSwitch }}>
      <CursorContext.Provider
        value={{
          setIsHovering,
          stopClickPropagation,
        }}
      >
        <ImageContext.Provider value={{ currentImageIndex }}>
          <AnimationContext.Provider
            value={{
              hasAnimatedHome,
              hasAnimatedInfo,
            }}
          >
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
          </AnimationContext.Provider>
        </ImageContext.Provider>
      </CursorContext.Provider>
    </SoundContext.Provider>
  )
}
