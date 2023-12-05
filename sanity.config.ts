/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision"
import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env"
import { schema } from "./sanity/schemas"

// Define the actions that should be available for singleton documents
const singletonActions = new Set(["publish", "discardChanges", "restore"])

// Define the singleton document types
export const singletonTypes = new Set(["metaData", "navigation", "main"])

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema: {
    types: schema["types"],

    // Filter out singleton types from the global “New document” menu options
    templates: templates =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
  plugins: [
    deskTool({
      structure: S =>
        S.list()
          .title("Content")
          .items([
            // Our singleton type has a list item with a custom child
            S.listItem()
              .title("Meta Data")
              .id("metaData")
              .icon(() => "📝")
              .child(
                S.document()
                  .schemaType("metaData")
                  .documentId("metaData")
                  .title("Meta Data"),
              ),
            S.listItem()
              .title("Navigation")
              .id("navigation")
              .icon(() => "🧭")
              .child(
                S.document()
                  .schemaType("navigation")
                  .documentId("navigation")
                  .title("Navigation"),
              ),
            S.listItem()
              .title("Main")
              .id("main")
              .icon(() => "🏠")
              .child(
                S.document()
                  .schemaType("main")
                  .documentId("main")
                  .title("Main"),
              ),

            // Regular document types
            S.documentTypeListItem("photoData")
              .title("Photo")
              .icon(() => "📷"),
          ]),
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
