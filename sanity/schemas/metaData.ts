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
      validation: rule => rule.required().max(150),
    }),
    defineField({
      name: "url",
      title: "URL",
      description: "Set the site URL. Include the protocol (https://).",
      type: "string",
      validation: rule => rule.required(),
    }),
    {
      name: "previewImage",
      title: "Preview Image",
      description:
        "This image will be used when sharing on social media. Upload a 1200x630 image.",
      type: "image",
      validation: rule => rule.required(),
    },
    {
      name: "icon",
      title: "Icon",
      description:
        "This icon will be used as the favicon. Upload a 32x32 SVG file.",
      type: "file",
      validation: rule => rule.required(),
    },
    {
      name: "appleTouchIcon",
      title: "Apple Touch Icon",
      description:
        "This icon will be used as the icon on iOS devices. Upload a 180x180 image.",
      type: "image",
      validation: rule => rule.required(),
    },
  ],
})

export default metaData
