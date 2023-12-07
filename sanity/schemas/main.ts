import { defineField, defineType } from "sanity"
import { textEditorConfig } from "../lib/config"

const main = defineType({
  name: "main",
  title: "Main",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "Set main heading title.",
      type: "string",
      validation: rule => rule.required().min(10).max(25),
    }),
    {
      name: "drawing",
      title: "Drawing",
      description: "Drawing to support message. Upload PNG image.",
      type: "image",
      validation: rule => rule.required().assetRequired(),
      fields: [
        {
          name: "alt",
          title: "Alt",
          description: "Set alternative text for screen readers.",
          type: "string",
          validation: rule => rule.required().max(50),
        },
      ],
    },
    {
      name: "contemplation",
      title: "Contemplation",
      description:
        "Share thoughts to inspire contemplation. Must be between 450-650 characters.",
      type: "array",
      of: [textEditorConfig],
      validation: rule => rule.required(),
    },
    {
      name: "about",
      title: "About",
      description:
        "Information about the project. Must be between 200-350 characters.",
      type: "array",
      of: [textEditorConfig],
      validation: rule => rule.required(),
    },
    {
      name: "credits",
      title: "Credits",
      description:
        "Project credits and links. Must be between 100-150 characters.",
      type: "array",
      of: [textEditorConfig],
      validation: rule => rule.required(),
    },
    {
      name: "copyright",
      title: "Copyright Notice",
      description:
        "Set copyright notice for the site. Must be between 35-85 characters.",
      type: "array",
      of: [textEditorConfig],
      validation: rule => rule.required(),
    },
    {
      name: "soundFile",
      title: "Sound File",
      type: "file",
      description: "Set ambient sound. Upload MP3 audio file.",
      validation: rule => rule.required().assetRequired(),
    },
  ],
})

export default main
