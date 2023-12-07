import { defineField, defineType } from "sanity"

const metaData = defineType({
  name: "metaData",
  title: "Meta Data",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description:
        "Define the site title. It will be consistent across all pages.",
      type: "string",
      validation: rule => rule.required().max(25),
    }),
    defineField({
      name: "description",
      title: "Description",
      description: "Define the site description. Keep it short and concise.",
      type: "text",
      validation: rule => rule.required().min(50).max(150),
    }),
    defineField({
      name: "url",
      title: "URL",
      description: "Set the URL of the site.",
      type: "url",
      validation: rule =>
        rule.required().uri({
          scheme: ["http", "https"],
        }),
    }),
    {
      name: "previewImage",
      title: "Preview Image",
      description:
        "This image will be used when sharing on social media. Upload a 1200x630 image.",
      type: "image",
      validation: rule => rule.required().assetRequired(),
    },
    {
      name: "icon",
      title: "Icon",
      description:
        "This icon will be used as the favicon. Upload a 32x32 SVG file.",
      type: "image",
      validation: rule => rule.required().assetRequired(),
    },
    {
      name: "appleTouchIcon",
      title: "Apple Touch Icon",
      description:
        "This icon will be used as the icon on iOS devices. Upload a 180x180 image.",
      type: "image",
      validation: rule => rule.required().assetRequired(),
    },
  ],
})

export default metaData
