import Preview from "@/components/home/Preview"
import TextSection from "@/components/home/TextSection"
import ImageSection from "@/components/home/ImageSection"
import { getMain, getPhotoData } from "@/sanity/lib/query"
import { MainType, PhotoDataType } from "@/sanity/types"

export default async function IndexPage() {
  const [main]: MainType[] = await getMain()
  const photoData: PhotoDataType[] = await getPhotoData()

  return (
    <div className="grid h-full gap-y-16 sm:grid-rows-5 sm:gap-4">
      <Preview main={main} photoData={photoData} />
      <TextSection main={main} />
      <ImageSection main={main} photoData={photoData} />
    </div>
  )
}
