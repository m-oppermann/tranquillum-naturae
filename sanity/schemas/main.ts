import { defineField, defineType } from "sanity"

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
      validation: rule => rule.required().max(25),
    }),
    {
      name: "drawing",
      title: "Drawing",
      description: "Drawing to support message. Upload PNG image.",
      type: "image",
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
    {
      name: "contemplation",
      title: "Contemplation",
      description: "Share thoughts to inspire contemplation.",
      type: "array",
      of: [{ type: "block" }],
      validation: rule => rule.required().max(750),
    },
    {
      name: "about",
      title: "About",
      description: "Information about the project.",
      type: "array",
      of: [{ type: "block" }],
      validation: rule => rule.required().max(350),
    },
    {
      name: "credits",
      title: "Credits",
      description: "Project credits and links.",
      type: "array",
      of: [{ type: "block" }],
      validation: rule => rule.required().max(150),
    },
    {
      name: "copyright",
      title: "Copyright Notice",
      description: "Set copyright notice for the site.",
      type: "array",
      of: [{ type: "block" }],
      validation: rule => rule.required().max(75),
    },
    {
      name: "soundFile",
      title: "Sound File",
      type: "file",
      description: "Set ambient sound. Upload MP3 audio file.",
      validation: rule => rule.required(),
    },
  ],
})

export default main
