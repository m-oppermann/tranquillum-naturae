import Image from "next/image"
import { clsx } from "clsx"
import { EditorialOld } from "@/styles/fonts"

export default function IndexPage() {
  return (
    <div className="grid h-full grid-cols-12 grid-rows-5 gap-4">
      <section className="col-span-12 row-span-3 grid grid-cols-12 grid-rows-3 gap-4">
        <h1 className="col-span-5 col-start-5 row-start-1 text-6xl font-bold">
          tranquillum naturae
        </h1>
        <Image
          className="col-start-10 -mt-6"
          src="/images/circles.png"
          alt="Drawing of circles"
          width={104}
          height={104}
        />
        <p
          className={clsx(
            "col-span-12 row-start-2 font-serif text-xl font-normal",
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
      <section className="col-span-12 row-span-2 grid grid-cols-12 grid-rows-2 gap-4">
        <span className="row-start-1">IMG_0534</span>
        <Image
          className="col-span-3 col-start-6 row-start-1 opacity-[0.85]"
          src="/images/IMG_0977.png"
          alt="Photo of rocks"
          width={240}
          height={320}
        />
        <span className="col-start-11 row-start-1">28,10768° N</span>
        <span className="col-start-12 row-start-1">15,56390° W</span>
        <p
          className={clsx(
            "col-span-2 col-start-2 row-start-2 font-serif font-normal",
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
