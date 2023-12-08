import { groq } from "next-sanity"
import { client } from "./client"

export async function getMetaData() {
  return client.fetch(
    groq`*[_type == "metaData"]{
        _id,
        title,
        description,
        url,
        previewImage {"image": asset->url},
        icon {"image": asset->url},
        appleTouchIcon {"image": asset->url},
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
        drawing {alt, "image": asset->url},
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
        imageName,
        coordinateNorth,
        coordinateWest,
        photo {alt, "image": asset->url},
    }`,
  )
}
