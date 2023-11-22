import Image from "next/image"
import { clsx } from "clsx"
import { EditorialOld } from "@/styles/fonts"

export default function AboutPage() {
  return (
    <div className="grid h-full grid-cols-4 grid-rows-5 gap-4 sm:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12">
      <p
        className={clsx(
          "col-span-4 col-start-1 row-start-1 font-serif text-base font-normal sm:col-span-6 sm:text-lg lg:col-span-6 lg:col-start-3 xl:col-span-9 xl:col-start-3 2xl:text-xl",
          EditorialOld.variable,
        )}
      >
        <span className="italic">tranquillum naturae</span> is a collection of
        ethereal moments captured in Gran Canaria, accompanied by contemplative
        thoughts on the mystery of nature, exploring the essence they hold
        within. Hopefully serving as an inspiration to cultivate a sense of
        wonder for all of nature&apos;s expressions. Photography by{" "}
        <span className="italic">Matthias Oppermann.</span> Designed and
        developed by{" "}
        <a className="italic" href="https://mtths.co">
          mtths
        </a>
        .
      </p>
      <div className="col-start-1 row-start-2 aspect-[3/4] h-24 opacity-[0.85] lg:row-start-1 2xl:h-28 -sm:hidden">
        <Image
          className="h-full w-full"
          src="/IMG_1663.png"
          alt="Photo of clouds"
          width={72}
          height={96}
        />
      </div>
      <div className="col-start-6 row-start-3 aspect-[3/4] h-24 opacity-[0.85] lg:col-start-8 xl:col-start-12 2xl:h-28 -sm:hidden">
        <Image
          className="h-full w-full"
          src="/IMG_1663.png"
          alt="Photo of clouds"
          width={72}
          height={96}
        />
      </div>
      <div className="col-start-3 row-start-5 aspect-[3/4] h-24 opacity-[0.85] lg:col-start-5 xl:col-start-6 2xl:h-28 -sm:hidden">
        <Image
          className="h-full w-full"
          src="/IMG_1663.png"
          alt="Photo of clouds"
          width={72}
          height={96}
        />
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
