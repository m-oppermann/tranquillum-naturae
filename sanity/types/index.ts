import { PortableTextBlock } from "sanity"

export type MetaDataType = {
  _id: string
  title: string
  description: string
  url: string
  previewImage: {
    image: string
  }
  icon: {
    image: string
  }
  appleTouchIcon: {
    image: string
  }
}

export type NavigationType = {
  _id: string
  homeLinkName: string
  infoLinkName: string
  infoRoute: {
    current: string
  }
}

export type MainType = {
  _id: string
  title: string
  drawing: {
    image: string
    alt: string
  }
  contemplation: PortableTextBlock[]
  about: PortableTextBlock[]
  credits: PortableTextBlock[]
  copyright: PortableTextBlock[]
  soundFile: {
    file: string
  }
}

export type PhotoDataType = {
  _id: string
  imageName: string
  coordinateNorth: string
  coordinateWest: string
  photo: {
    image: string
    alt: string
  }
}
