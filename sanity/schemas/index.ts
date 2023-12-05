import type { SchemaTypeDefinition } from "sanity"
import metaData from "./metaData"
import navigation from "./navigation"
import main from "./main"
import photo from "./photoData"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [metaData, navigation, main, photo],
}
