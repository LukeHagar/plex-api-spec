import PMSSpec from "../../output/plex-media-server-spec-dereferenced.yaml"
import Ajv from "ajv"
import addFormats from "ajv-formats"
import { expect } from "vitest"
import { merge } from "lodash-es"
/**
 * Validate a response against the OpenAPI spec
 * NOTE: It accounts for the following scenarios:
 *  - properties that are not defined in the openAPI spec
 *  - properties that are defined in the openAPI spec but are not present in the response IF they are required
 *  - properties with conflicting types
 * @param path
 * @param type
 * @param statusCode
 * @param response
 */
export function validateResponseSpec(
  path: string,
  type: "get" | "post" | "delete",
  statusCode: number,
  response: any
): void {
  const ajv = new Ajv({ allErrors: true, strict: false })

  const schema = PMSSpec

  addAdditionalProperties(schema.paths)

  ajv.addSchema(schema, "API.yaml")
  addFormats(ajv)

  // Convert JSONPath to JSON Pointer
  const pathPointer = `/paths/${path.replace(/\//g, `~1`)}/${type}/responses/${statusCode}/content/application~1json/schema`

  const validate = ajv.validate({ $ref: "API.yaml#" + pathPointer }, response)

  if (!validate) {
    console.error(ajv.errors)
  }

  expect(ajv.errors).toBe(null)
}

/**
 * Recursively add additionalProperties: false to all objects in the schema and merge allOf schemas
 * This is necessary to ensure that the schema is strict and does not allow additional properties without explicitly defined in the openApi spec
 * DOC: https://ajv.js.org/json-schema.html#additionalproperties
 * @param schema
 */
function addAdditionalProperties(schema) {
  if (schema === null || typeof schema !== "object") {
    return
  }

  // If the current schema has allOf, merge the schemas because AJV handles mentions of allOf as separate schemas that all need to pass at the same time. We use it in the spec to combine multiple schemas into one.
  // DOC: https://ajv.js.org/json-schema.html#allof
  if (schema.hasOwnProperty("allOf")) {
    const merged = merge({}, ...schema.allOf)
    delete schema.allOf
    Object.assign(schema, merged)
  }

  // If the current schema defines an object, ensure additionalProperties is false
  if (schema.hasOwnProperty("type") && schema.type === "object") {
    if (!schema.hasOwnProperty("additionalProperties")) {
      schema.additionalProperties = false
    }
  }

  // Recursively handle properties if they exist
  for (const [_, value] of Object.entries(schema)) {
    if (Array.isArray(value)) {
      value.forEach((x) => addAdditionalProperties(x))
    }

    if (typeof value === "object") {
      addAdditionalProperties(value)
    }
  }
}
