import { createContext } from "react"

export const SoundContext = createContext<{
  isPlaying: boolean
  handleSwitch: () => void
}>({
  isPlaying: false,
  handleSwitch: () => {},
})

export const CursorContext = createContext<{
  setIsHovering: React.Dispatch<React.SetStateAction<boolean>>
  stopClickPropagation: (event: React.MouseEvent<HTMLElement>) => void
}>({
  setIsHovering: () => {},
  stopClickPropagation: () => {},
})

export const ImageContext = createContext<{
  currentImageIndex: number
}>({
  currentImageIndex: 0,
})

export const AnimationContext = createContext<{
  hasAnimatedHome: boolean
  hasAnimatedInfo: boolean
}>({
  hasAnimatedHome: false,
  hasAnimatedInfo: false,
})
