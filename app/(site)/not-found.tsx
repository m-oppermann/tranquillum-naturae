import Link from "next/link"
import { clsx } from "clsx"
import { EditorialOld } from "@/styles/fonts"

export default function NotFound() {
  return (
    <div className="flex h-full flex-col justify-end gap-0.5">
      <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl 2xl:text-5xl">
        404
      </h2>
      <p
        className={clsx(
          "font-serif text-sm sm:text-base 2xl:text-lg",
          EditorialOld.variable,
        )}
      >
        Could not find requested resource.&nbsp;
        <Link href="/">
          <em>Return home ↩</em>
        </Link>
      </p>
    </div>
  )
}
