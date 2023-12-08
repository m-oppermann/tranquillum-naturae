import { defineField, defineType } from "sanity"

const navigation = defineType({
  name: "navigation",
  title: "Navigation",
  type: "document",
  groups: [
    { name: "home", title: "Home" },
    { name: "info", title: "Info" },
  ],
  fields: [
    defineField({
      name: "homeLinkName",
      title: "Home page",
      description: `Define link name for the home page. Default route is "/".`,
      type: "string",
      group: "home",
      validation: rule => rule.required().max(15),
    }),
    defineField({
      name: "infoLinkName",
      title: "Info page",
      description: "Define link name for the info page.",
      type: "string",
      group: "info",
      validation: rule => rule.required().max(15),
    }),
    defineField({
      name: "infoRoute",
      title: "Info route",
      description: "Define route for the info page.",
      type: "slug",
      group: "info",
      validation: rule => rule.required(),
    }),
  ],
})

export default navigation
