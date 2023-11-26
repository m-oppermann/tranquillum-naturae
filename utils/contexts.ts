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
}>({
  setIsHovering: () => {},
})

export const ImageContext = createContext<{
  currentImageIndex: number
}>({
  currentImageIndex: 0,
})
