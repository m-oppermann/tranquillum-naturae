import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "tranquillum naturae | Not found",
}

export default function NotFound() {
  return (
    <div className="flex h-full flex-col justify-end">
      <p className="text-sm sm:text-base 2xl:text-lg">
        Could not find requested resource.
      </p>
    </div>
  )
}
