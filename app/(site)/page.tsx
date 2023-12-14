import Image from "next/image"
import CurrentImage from "@/components/CurrentImage"
import ImageDetails from "@/components/ImageDetails"
import { clsx } from "clsx"
import { EditorialOld } from "@/styles/fonts"
import { MainType } from "@/sanity/types"
import { getMain } from "@/sanity/lib/query"
import { PortableText } from "@portabletext/react"

export default async function IndexPage() {
  const [main]: MainType[] = await getMain()

  return (
    <div className="grid h-full gap-y-16 sm:grid-rows-5 sm:gap-4">
      <section className="grid grid-cols-4 gap-x-4 gap-y-16 sm:row-span-3 sm:row-start-1 sm:grid-cols-6 sm:grid-rows-3 sm:gap-4 lg:grid-cols-8 xl:grid-cols-12">
        <h1 className="col-span-3 col-start-1 text-2xl font-bold sm:col-span-4 sm:row-start-1 sm:text-3xl md:text-4xl lg:col-start-3 lg:text-5xl xl:col-span-5 xl:col-start-5 2xl:text-6xl">
          {main.title}
        </h1>
        <Image
          className="col-start-4 -mt-4 w-16 sm:col-start-6 sm:row-start-1 sm:-mt-6 sm:w-20 md:w-[5.5rem] lg:col-start-7 lg:-mt-5 lg:w-24 xl:col-span-2 xl:col-start-10 2xl:-mt-4 2xl:w-[6.5rem]"
          src={main.drawing.url}
          alt={main.drawing.alt}
          width={120}
          height={120}
        />
        <div
          className={clsx(
            "col-span-4 col-start-1 font-serif text-base font-normal sm:col-span-6 sm:text-lg lg:col-span-8 lg:self-center xl:col-span-12 2xl:text-xl",
            EditorialOld.variable,
          )}
        >
          <PortableText value={main.contemplation} />
        </div>
      </section>

      <section className="grid-col-4 grid gap-x-4 gap-y-6 text-xs sm:row-span-2 sm:row-start-4 sm:grid-cols-6 sm:grid-rows-2 sm:gap-4 sm:text-sm lg:grid-cols-8 xl:grid-cols-12 2xl:text-base -sm:pb-4">
        <ImageDetails />
        <div className="col-span-4 aspect-[3/4] h-full sm:col-start-2 sm:row-span-2 sm:row-start-1 lg:col-start-4 xl:col-start-6 -sm:w-full">
          <CurrentImage className="h-full w-full" width={240} height={320} />
        </div>

        <div
          className={clsx(
            "col-span-2 col-start-1 font-serif font-normal sm:col-start-5 sm:row-start-2 lg:col-start-2 xl:col-start-2",
            EditorialOld.variable,
          )}
        >
          <PortableText value={main.copyright} />
        </div>
      </section>
    </div>
  )
}
