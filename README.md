# Plex Media Server OpenAPI Specification

An Open Source OpenAPI Specification for Plex Media Server

Automation and SDKs provided by [Speakeasy](https://speakeasyapi.dev/)

## Documentation

[API Documentation](https://plexapi.dev)

## SDKs

The following SDKs are generated from the OpenAPI Specification. They are automatically generated and may not be fully tested. If you find any issues, please open an issue on the respective repository.

| Language              | Repository                                        | Releases                                                                                         | Other                                                   |
| --------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------- |
| Python                | [GitHub](https://github.com/LukeHagar/plexpy)     | [PyPI](https://pypi.org/project/plex-api-client/)                                                | -                                                       |
| JavaScript/TypeScript | [GitHub](https://github.com/LukeHagar/plexjs)     | [NPM](https://www.npmjs.com/package/@lukehagar/plexjs) \ [JSR](https://jsr.io/@lukehagar/plexjs) | -                                                       |
| Go                    | [GitHub](https://github.com/LukeHagar/plexgo)     | [Releases](https://github.com/LukeHagar/plexgo/releases)                                         | [GoDoc](https://pkg.go.dev/github.com/LukeHagar/plexgo) |
| Ruby                  | [GitHub](https://github.com/LukeHagar/plexruby)   | [Releases](https://github.com/LukeHagar/plexruby/releases)                                       | -                                                       |
| Swift                 | [GitHub](https://github.com/LukeHagar/plexswift)  | [Releases](https://github.com/LukeHagar/plexswift/releases)                                      | -                                                       |
| PHP                   | [GitHub](https://github.com/LukeHagar/plexphp)    | [Releases](https://github.com/LukeHagar/plexphp/releases)                                        | -                                                       |
| Java                  | [GitHub](https://github.com/LukeHagar/plexjava)   | [Releases](https://github.com/LukeHagar/plexjava/releases)                                       | -                                                       |
| C#                    | [GitHub](https://github.com/LukeHagar/plexcsharp) | [Releases](https://github.com/LukeHagar/plexcsharp/releases)                                     | -                                                       |

## Project Structure

The main OpenAPI Specification is located in the root directory as [pms-spec.yaml](https://github.com/LukeHagar/plex-api-spec/blob/main/src/pms-spec.yaml). Which references 

- [**/paths**](https://github.com/LukeHagar/plex-api-spec/tree/main/paths): The endpoints for the Plex Media Server API. Each endpoint is defined in a separate file.
- [**/models**](https://github.com/LukeHagar/plex-api-spec/tree/main/models): The schema models used in the specification.
- [**/parameters**](https://github.com/LukeHagar/plex-api-spec/tree/main/parameters): The parameters used in the specification.
- [**/responses**](https://github.com/LukeHagar/plex-api-spec/tree/main/responses): The responses used in the specification.

In addition, there is a bundled single file OpenAPI Specification, [plex-media-server-spec-dereferenced.yaml](https://github.com/LukeHagar/plex-api-spec/blob/main/plex-media-server-spec-dereferenced.yaml) which is automatically bundled on any changes to the main specification.

## Style Guide

All spec files should adhere to the 3.1 OpenAPI Specification.

Reference documentation can be found [Here](https://www.speakeasy.com/openapi) and [Here](https://spec.openapis.org/oas/v3.1.0.html#openapi-specification).

Every endpoint is defined in the `/paths` directory, with Each endpoint defined in a separate file.
The file name should be the endpoint name with the method type. For example, the endpoint `/library/sections` is defined in the file `/paths/library_sections.get.yaml`.

The file should contain data in the following order:

```yaml
[get/post/put/delete]:
  servers: # only specify if the endpoint requires a different server than the users plex server
  security: # only specify if the endpoint requires authentication different from the global security
  tags: 
    - example # a list of tags that the endpoint belongs to, this is used for grouping in the documentation and SDKs
  summary: a brief description of the endpoint
  description: a more detailed description of the endpoint
  operationId: anExampleOperationId # camel case summarizing the action being performed.
  parameters: # parameters are defined in the /parameters directory, or inline if they are not reused very much
    - $ref: "../../parameters/..." # a reference to a parameter file in the /parameters directory
    - name: example # a parameter that is not a reference
      in: query # the location of the parameter, can be query, path, header, or cookie
      description: an example parameter
      required: true # whether the parameter is required or not, path parameters are always required. Only specify this key if the parameter is required
      schema:
        type: string
  responses:
    2XX:
      $ref: "../../responses/..." # a reference to a response file in the /responses directory
    4XX:
    5XX:
```

### Headers

Plex Media Server accept a variety of custom headers that follow the pattern `X-Plex-{name}`.

The full set of headers isn't enumerated here since some may only apply to certain endpoints, but common headers that can be included on all requests include:

| Header | Description | Sample |
| --- | --- | --- |
| X-Plex-Client-Identifier | An opaque identifier unique to the client | abc123 |
| X-Plex-Token | An authentication token, obtained from plex.tv | XXXXXXXXXXXX |
| X-Plex-Product | The name of the client product | Plex for Roku |
| X-Plex-Version | The version of the client application | 2.4.1 |
| X-Plex-Platform | The platform of the client | Roku |
| X-Plex-Platform-Version | The version of the platform | 4.3 build 1057 |
| X-Plex-Device | A relatively friendly name for the client device | Roku 3 |
| X-Plex-Model | A potentially less friendly identifier for the device model | 4200X |
| X-Plex-Device-Vendor | The device vendor | Roku |
| X-Plex-Device-Name | A friendly name for the client | Living Room TV |
| X-Plex-Marketplace | The marketplace on which the client application is distributed  | googlePlay |

X-Plex-Client-Identifier is typically required, as is X-Plex-Token for authentication.

### Rules

- A property in the response is only marked as required if it is always returned, regardless of the parameters sent with the request.
- Although Plex.tv API uses the `X-Plex-Token` as a query parameter, this specification will always define this as a header parameter where supported since this follows industry security standards.
- Though Plex does default return `XML` unless the `accept` header is set to `application/json`, this specification will not include the `accept` header in the endpoints. Assume it should always be included in the request.
- Parameters added to endpoints via reference should always be specified at the bottom of the paramters set, since there is a large set of common parameters that are used across all endpoints.

## Questions?

Reach out to me on the [Discord Server](https://discord.gg/mxqjsJHwUm)
