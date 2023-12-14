import { groq } from "next-sanity"
import { client } from "./client"

export async function getMetaData() {
  return client.fetch(
    groq`*[_type == "metaData"]{
        _id,
        title,
        description,
        siteUrl,
        previewImage {"url": asset->url},
        icon {"url": asset->url},
        appleTouchIcon {"url": asset->url},
    }`,
  )
}

export async function getNavigation() {
  return client.fetch(
    groq`*[_type == "navigation"]{
        _id,
        homeLinkName,
        infoLinkName,
        infoRoute,
    }`,
  )
}

export async function getMain() {
  return client.fetch(
    groq`*[_type == "main"]{
        _id,
        title,
        drawing {
          alt, 
          "url": asset->url,
        },
        contemplation,
        about,
        credits,
        copyright,
        soundFile {"file": asset->url},
    }`,
  )
}

export async function getPhotoData() {
  return client.fetch(
    groq`*[_type == "photoData"] | order(_createdAt asc) {
        _id,
        name,
        coordinateNorth,
        coordinateWest,
        image {
          alt, 
          "url": asset->url,
          "placeholder": asset->metadata.lqip
      },
    }`,
  )
}
