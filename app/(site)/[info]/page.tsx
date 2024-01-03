import { notFound } from "next/navigation"
import clsx from "clsx"
import { EditorialOld } from "@/styles/fonts"
import { PortableText } from "@portabletext/react"
import Description from "@/components/info/Description"
import RepeatedImage from "@/components/info/RepeatedImage"
import { getNavigation, getMain, getPhotoData } from "@/sanity/lib/query"
import { NavigationType, MainType, PhotoDataType } from "@/sanity/types"

export async function generateStaticParams() {
  const navigation: NavigationType[] = await getNavigation()

  return navigation.map(route => ({
    info: route.infoRoute.current,
  }))
}

export default async function InfoPage({
  params,
}: {
  params: { info: string }
}) {
  const [main]: MainType[] = await getMain()
  const [navigation]: NavigationType[] = await getNavigation()
  const photoData: PhotoDataType[] = await getPhotoData()

  if (params.info !== navigation.infoRoute.current) {
    notFound()
  }

  return (
    <div className="grid h-full grid-cols-4 grid-rows-5 gap-4 sm:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12">
      <Description main={main} />
      <RepeatedImage
        className="col-start-1 row-start-2 lg:row-start-1 -md:mt-8"
        photoData={photoData}
      />
      <RepeatedImage
        className="col-start-6 row-start-3 lg:col-start-8 xl:col-start-12 -md:mt-8"
        photoData={photoData}
      />
      <RepeatedImage
        className="col-start-3 row-start-5 lg:col-start-5 xl:col-start-6"
        photoData={photoData}
      />
      <div
        className={clsx(
          "col-span-2 col-start-1 row-start-5 font-serif text-xs font-normal sm:col-start-5 sm:row-start-5 sm:text-sm lg:col-start-2 xl:col-start-2 2xl:text-base -sm:self-end",
          EditorialOld.variable,
        )}
      >
        <PortableText value={main.copyright} />
      </div>
    </div>
  )
}
