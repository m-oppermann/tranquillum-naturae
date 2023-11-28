import type { Metadata } from "next"
import Image from "next/image"
import ImageComponent from "@/components/Image"
import ImageDetails from "@/components/ImageDetails"
import { clsx } from "clsx"
import { EditorialOld } from "@/styles/fonts"

export const metadata: Metadata = {
  title: "tranquillum naturae | Home",
}

export default function IndexPage() {
  return (
    <div className="grid h-full gap-y-16 sm:grid-rows-5 sm:gap-4">
      <section className="grid grid-cols-4 gap-x-4 gap-y-16 sm:row-span-3 sm:row-start-1 sm:grid-cols-6 sm:grid-rows-3 sm:gap-4 lg:grid-cols-8 xl:grid-cols-12">
        <h1 className="col-span-3 col-start-1 text-2xl font-bold sm:col-span-4 sm:row-start-1 sm:text-3xl md:text-4xl lg:col-start-3 lg:text-5xl xl:col-span-5 xl:col-start-5 2xl:text-6xl">
          tranquillum naturae
        </h1>
        <Image
          className="col-start-4 -mt-4 w-16 sm:col-start-6 sm:row-start-1 sm:-mt-6 sm:w-20 md:w-[5.5rem] lg:col-start-7 lg:-mt-5 lg:w-24 xl:col-span-2 xl:col-start-10 2xl:-mt-4 2xl:w-[6.5rem]"
          src="/assets/images/circles.png"
          alt="Drawing of circles"
          width={120}
          height={120}
        />
        <p
          className={clsx(
            "col-span-4 col-start-1 font-serif text-base font-normal sm:col-span-6 sm:text-lg lg:col-span-8 lg:self-center xl:col-span-12 2xl:text-xl",
            EditorialOld.variable,
          )}
        >
          In nature, all is accomplished,{" "}
          <span className="italic">all is at peace</span>, all is. Everything
          already exists in the silent field of stillness, longing to find
          expression in matter.{" "}
          <span className="italic">Nature wants to experience itself</span>, to
          celebrate itself. Every rock, plant, and animal is a celebration of
          existence, waiting to be recognised. When nature flows in its myriad
          colours through our being, it is able to know itself. It can dwell in
          the ocean of its own beauty and sacredness in which it exists.{" "}
          <span className="italic">Resting in awareness</span> of nature&apos;s
          countless forms reveals the stillness they appear in, showing us the
          way back home.
        </p>
      </section>
      <section className="grid-col-4 grid gap-x-4 gap-y-6 text-xs sm:row-span-2 sm:row-start-4 sm:grid-cols-6 sm:grid-rows-2 sm:gap-4 sm:text-sm lg:grid-cols-8 xl:grid-cols-12 2xl:text-base -sm:pb-4">
        <ImageDetails />
        <div className="col-span-4 aspect-[3/4] h-full sm:col-start-2 sm:row-span-2 sm:row-start-1 lg:col-start-4 xl:col-start-6 -sm:w-full">
          <ImageComponent className="h-full w-full" width={240} height={320} />
        </div>
        <p
          className={clsx(
            "col-span-2 col-start-1 font-serif font-normal sm:col-start-5 sm:row-start-2 lg:col-start-2 xl:col-start-2",
            EditorialOld.variable,
          )}
        >
          © 2023 Matthias Oppermann.
          <br />
          <span className="italic">All rights reserved.</span>
        </p>
      </section>
    </div>
  )
}
