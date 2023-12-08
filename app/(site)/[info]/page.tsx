import ImageComponent from "@/components/Image"
import { clsx } from "clsx"
import { EditorialOld } from "@/styles/fonts"
import { MainType } from "@/sanity/types"
import { getMain } from "@/sanity/lib/query"
import { PortableText } from "@portabletext/react"
import { PortableTextComponents } from "@portabletext/react"
import { NavigationType } from "@/sanity/types"
import { getNavigation } from "@/sanity/lib/query"

export async function generateStaticParams() {
  const navigation: NavigationType[] = await getNavigation()

  return navigation.map(route => ({
    info: route.infoRoute.current,
  }))
}

export default async function InfoPage() {
  const [main]: MainType[] = await getMain()

  const customTag: PortableTextComponents = {
    block: {
      normal: ({ children }) => <span>{children}</span>,
    },
  }

  const RepeatedImage = () => (
    <ImageComponent className="h-full w-full" width={72} height={96} />
  )

  return (
    <div className="grid h-full grid-cols-4 grid-rows-5 gap-4 sm:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12">
      <div
        className={clsx(
          "col-span-4 col-start-1 row-start-1 font-serif text-base font-normal sm:col-span-6 sm:text-lg lg:col-span-6 lg:col-start-3 xl:col-span-9 xl:col-start-3 2xl:text-xl -sm:row-span-3 -sm:grid -sm:grid-rows-3 -sm:gap-4",
          EditorialOld.variable,
        )}
      >
        <p className="row-start-1">
          <PortableText value={main.about} components={customTag} />
          &nbsp;
          <br className="-*:hidden" />
          <span className="-sm:hidden">
            <PortableText value={main.credits} components={customTag} />
          </span>
        </p>
        <div className="row-start-3 sm:hidden">
          <PortableText value={main.credits} />
        </div>
      </div>
      <div className="col-start-1 row-start-2 aspect-[3/4] lg:row-start-1 2xl:h-28 -sm:hidden">
        <RepeatedImage />
      </div>
      <div className="col-start-6 row-start-3 aspect-[3/4] lg:col-start-8 xl:col-start-12 2xl:h-28 -sm:hidden">
        <RepeatedImage />
      </div>
      <div className="col-start-3 row-start-5 aspect-[3/4] lg:col-start-5 xl:col-start-6 2xl:h-28 -sm:hidden">
        <RepeatedImage />
      </div>
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
