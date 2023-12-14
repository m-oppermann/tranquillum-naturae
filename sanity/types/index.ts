import { PortableTextBlock } from "sanity"

export type MetaDataType = {
  _id: string
  title: string
  description: string
  siteUrl: string
  previewImage: {
    url: string
  }
  icon: {
    url: string
  }
  appleTouchIcon: {
    url: string
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
    alt: string
    url: string
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
  name: string
  coordinateNorth: string
  coordinateWest: string
  image: {
    alt: string
    url: string
    placeholder: string
  }
}
