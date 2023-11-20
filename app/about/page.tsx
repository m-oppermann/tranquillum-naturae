import Image from "next/image"
import { clsx } from "clsx"
import { EditorialOld } from "@/styles/fonts"

export default function AboutPage() {
  return (
    <div className="grid h-full grid-cols-12 grid-rows-5 gap-4">
      <p
        className={clsx(
          "col-span-9 col-start-3 row-start-1 font-serif text-xl font-normal",
          EditorialOld.variable,
        )}
      >
        <span className="italic">tranquillum naturae</span> is a collection of
        ethereal moments captured in Gran Canaria, accompanied by contemplative
        thoughts on the mystery of nature, exploring the essence they hold
        within. Hopefully serving as an inspiration to cultivate a sense of
        wonder for all of nature&apos;s expressions. <br /> Photography by{" "}
        <span className="italic">Matthias Oppermann.</span> Designed and
        developed by{" "}
        <a className="italic" href="https://mtths.co">
          mtths
        </a>
        .
      </p>
      <Image
        className="col-start-1 row-start-1 opacity-[0.85]"
        src="/IMG_1663.png"
        alt="Photo of clouds"
        width={84}
        height={112}
      />
      <Image
        className="col-start-12 row-start-3 opacity-[0.85]"
        src="/IMG_1663.png"
        alt="Photo of clouds"
        width={84}
        height={112}
      />
      <Image
        className="col-start-6 row-start-5 opacity-[0.85]"
        src="/IMG_1663.png"
        alt="Photo of clouds"
        width={84}
        height={112}
      />
      <p
        className={clsx(
          "col-span-2 col-start-2 row-start-5 font-serif font-normal",
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
