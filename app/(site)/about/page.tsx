import ImageComponent from "@/components/Image"
import { clsx } from "clsx"
import { EditorialOld } from "@/styles/fonts"

export default function AboutPage() {
  const RepeatedImage = () => (
    <ImageComponent className="h-full w-full" width={72} height={96} />
  )

  const creditText = (
    <>
      Photography by <span className="italic">Matthias Oppermann</span>.
      Designed and developed by{" "}
      <a href="https://mtths.co" className="italic">
        mtths ↗
      </a>
      .
    </>
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
          <span className="italic">tranquillum naturae</span> is a collection of
          ethereal moments captured in Gran Canaria, accompanied by
          contemplative thoughts on the mystery of nature, exploring the essence
          they hold within. Hopefully serving as an inspiration to cultivate a
          sense of wonder for all of nature&apos;s expressions.{" "}
          <span className="-sm:hidden">{creditText}</span>
        </p>
        <p className="row-start-3 sm:hidden">{creditText}</p>
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
      <p
        className={clsx(
          "col-span-2 col-start-1 row-start-5 font-serif text-xs font-normal sm:col-start-5 sm:row-start-5 sm:text-sm lg:col-start-2 xl:col-start-2 2xl:text-base -sm:self-end",
          EditorialOld.variable,
        )}
      >
        © 2023 Matthias Oppermann.
        <br />
        <span className="italic">All rights reserved.</span>
      </p>
    </div>
  )
}
