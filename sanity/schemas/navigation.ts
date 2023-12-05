import { defineField, defineType } from "sanity"

const navigation = defineType({
  name: "navigation",
  title: "Navigation",
  type: "document",
  fields: [
    defineField({
      name: "home",
      title: "Home page",
      description: "Define link name for the home page.",
      type: "string",
      validation: rule => rule.required().max(15),
    }),
    defineField({
      name: "info",
      title: "Info page",
      description: "Define link name for the info page.",
      type: "string",
      validation: rule => rule.required().max(15),
    }),
  ],
})

export default navigation
