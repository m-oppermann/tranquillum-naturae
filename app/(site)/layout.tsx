import "@/styles/globals.css"
import type { Metadata } from "next"
import { clsx } from "clsx"
import { NeueMontreal } from "@/styles/fonts"
import Providers from "@/components/Providers"
import Header from "@/components/Header"
import {
  MetaDataType,
  NavigationType,
  MainType,
  PhotoDataType,
} from "@/sanity/types"
import {
  getMetaData,
  getNavigation,
  getMain,
  getPhotoData,
} from "@/sanity/lib/query"

export const dynamic = "force-static"

export async function generateMetadata(): Promise<Metadata> {
  const [metaData]: MetaDataType[] = await getMetaData()

  return {
    title: metaData.title,
    description: metaData.description,
    openGraph: {
      title: metaData.title,
      description: metaData.description,
      url: metaData.siteUrl,
      images: {
        url: metaData.previewImage.url,
        width: 1200,
        height: 630,
      },
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: metaData.title,
      description: metaData.description,
      images: metaData.previewImage.url,
    },
    icons: {
      icon: {
        url: metaData.icon.url,
        sizes: "any",
        type: "image/svg+xml",
      },
      apple: {
        url: metaData.appleTouchIcon.url,
        sizes: "180x180",
        type: "image/png",
      },
    },
  }
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const [navigation]: NavigationType[] = await getNavigation()
  const [main]: MainType[] = await getMain()
  const photoData: PhotoDataType[] = await getPhotoData()

  return (
    <html lang="en">
      <body
        className={clsx(
          "mx-auto h-screen min-h-[800px] max-w-[1920px] bg-sand-1 font-sans font-medium text-sand-8 antialiased",
          NeueMontreal.variable,
        )}
      >
        <Providers main={main} photoData={photoData}>
          <div className="grid h-full grid-rows-6 gap-4 px-4 py-4 sm:px-6 sm:pb-8 sm:pt-4 2xl:px-8 2xl:pb-10 2xl:pt-6">
            <Header
              className="row-span-1 row-start-1"
              navigation={navigation}
            />
            <main className="row-span-5 row-start-2">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
