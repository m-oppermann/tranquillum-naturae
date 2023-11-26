"use client"

import { useState, useRef, useEffect } from "react"
import { usePathname } from "next/navigation"
import { SoundContext, CursorContext, ImageContext } from "@/utils/contexts"
import { images } from "@/utils/imagesData"
import { ROUTES } from "@/utils/routes"
import { Howl } from "howler"
import { clsx } from "clsx"

interface ProvidersProps {
  children: React.ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  const pathname = usePathname()

  // Sound
  const [isPlaying, setIsPlaying] = useState(false)
  const sound = useRef(
    new Howl({
      src: ["/audio/sound.mp3"],
      volume: 0.1,
      loop: true,
    }),
  )

  useEffect(() => {
    const currentSound = sound.current
    return () => {
      currentSound.stop()
    }
  }, [])

  const handleSwitch = () => {
    !isPlaying && sound.current.play()
    sound.current.mute(isPlaying)
    setIsPlaying(!isPlaying)
  }

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

  // Images
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handleClickNext = () => {
    setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length)
  }

  return (
    <SoundContext.Provider value={{ isPlaying, handleSwitch }}>
      <CursorContext.Provider value={{ setIsHovering }}>
        <ImageContext.Provider value={{ currentImageIndex }}>
          <div
            className={clsx(
              "h-full",
              pathname === ROUTES.HOME && !isHovering && "sm:cursor-none",
            )}
            onClick={handleClickNext}
            onMouseEnter={handleViewportMouseEnter}
            onMouseLeave={handleViewportMouseLeave}
          >
            {children}
          </div>
          {pathname === ROUTES.HOME && (
            <span
              className={clsx(
                "pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 text-sm sm:text-base 2xl:text-lg -sm:hidden",
                position.x === 0 && position.y === 0 && "hidden",
                !isMouseInViewport && "hidden",
                isHovering && "hidden",
              )}
              style={{ left: `${position.x}px`, top: `${position.y}px` }}
            >
              (&nbsp;{currentImageIndex + 1}&nbsp;/&nbsp;{images.length}
              &nbsp;)
            </span>
          )}
        </ImageContext.Provider>
      </CursorContext.Provider>
    </SoundContext.Provider>
  )
}
