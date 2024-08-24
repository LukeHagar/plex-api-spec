import PMSSpec from '../plex-media-server-spec-dereferenced.yaml'
import Ajv from "ajv";
import addFormats from "ajv-formats";
import {expect} from 'vitest'


export function validateResponseSpec(path: string, type: 'get' | 'post' | 'delete', statusCode: number, response: any): void {

    const ajv = new Ajv({allErrors: true, strict: false});
    ajv.addSchema(PMSSpec, "API.yaml");
    addFormats(ajv);


    // Convert JSONPath to JSON Pointer
    const pathPointer = `/paths/${path.replace(/\//g, `~1`)}/${type}/responses/${statusCode}/content/application~1json/schema`

    const validate = ajv.validate({$ref: "API.yaml#" + pathPointer}, response);

    if (!validate) {
        console.error(ajv.errors);
    }

    expect(validate).toBe(true);

}
