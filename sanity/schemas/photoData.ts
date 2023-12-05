import { defineField, defineType } from "sanity"

const photoData = defineType({
  name: "photoData",
  title: "Photo",
  type: "document",
  fields: [
    defineField({
      name: "imageName",
      title: "Image Name",
      description: "Set the name of the image.",
      type: "string",
      validation: rule => rule.required().max(15),
    }),
    defineField({
      name: "coordinateNorth",
      title: "Coordinate North",
      description: "Set the north coordinate of location.",
      type: "string",
      validation: rule => rule.required().max(15),
    }),
    defineField({
      name: "coordinateWest",
      title: "Coordinate West",
      description: "Set the west coordinate of location.",
      type: "string",
      validation: rule => rule.required().max(15),
    }),
    {
      name: "photo",
      title: "Photo",
      type: "image",
      description: "Upload JPEG image <1MB. ",
      validation: rule => rule.required(),
      fields: [
        {
          name: "alt",
          title: "Alt",
          description: "Set alternative text for screen readers.",
          type: "string",
        },
      ],
    },
  ],
})

export default photoData
