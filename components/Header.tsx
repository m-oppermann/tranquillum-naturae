"use client"

import { useContext } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import clsx from "clsx"
import { motion } from "framer-motion"
import { SoundContext, CursorContext, AnimationContext } from "@/utils/contexts"
import { NavigationType } from "@/sanity/types"

interface HeaderProps {
  className?: string
  navigation: NavigationType
}

export default function Header({ className, navigation }: HeaderProps) {
  const pathname = usePathname()

  const { isPlaying, handleSwitch } = useContext(SoundContext)
  const { setIsHovering, stopClickPropagation } = useContext(CursorContext)
  const { hasAnimatedHome } = useContext(AnimationContext)

  return (
    <motion.header
      className={clsx(
        "grid grid-cols-4 gap-4 text-sm sm:grid-cols-6 sm:text-base lg:grid-cols-8 xl:grid-cols-12 2xl:text-lg",
        className,
      )}
      initial={pathname === "/" && !hasAnimatedHome && { y: -8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 2 }}
    >
      <nav className="col-span-2 col-start-1 grid grid-cols-2 place-items-start gap-4 xl:col-span-3 xl:grid-cols-3">
        <Link
          href={"/"}
          className={clsx("col-start-1", pathname === "/" && "font-bold")}
          onClick={stopClickPropagation}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {navigation.homeLinkName}
        </Link>
        <Link
          href={navigation.infoRoute.current}
          className={clsx(
            "col-start-2 xl:col-start-3",
            pathname === "/" + navigation.infoRoute.current && "font-bold",
          )}
          onClick={stopClickPropagation}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {navigation.infoLinkName}
        </Link>
      </nav>
      <button
        className="col-start-4 cursor-pointer self-start justify-self-end sm:col-start-6 lg:col-start-8 lg:grid xl:col-start-12"
        aria-label={isPlaying ? "Mute audio" : "Play audio"}
        onClick={event => {
          stopClickPropagation(event)
          handleSwitch()
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {isPlaying ? "Mute" : "Play"}
      </button>
    </motion.header>
  )
}
