import { validateResponseSpec } from "@utils"
import { describe, it } from "vitest"

describe("GET /library/sections/[sectionKey]/country", () => {
  it("should validate the 200 response when the API spec is valid", () => {
    const response = {
      MediaContainer: {
        size: 6,
        allowSync: false,
        art: "/:/resources/show-fanart.jpg",
        content: "secondary",
        identifier: "com.plexapp.plugins.library",
        mediaTagPrefix: "/system/bundle/media/flags/",
        mediaTagVersion: 1734362201,
        nocache: true,
        thumb: "/:/resources/show.png",
        title1: "TV Series ",
        title2: "By Country",
        viewGroup: "secondary",
        Directory: [
          {
            fastKey: "/library/sections/2/all?country=15491",
            key: "15491",
            title: "Japan"
          },
          {
            fastKey: "/library/sections/2/all?country=3929",
            key: "3929",
            title: "Netherlands"
          },
          {
            fastKey: "/library/sections/2/all?country=119944",
            key: "119944",
            title: "Republic of Korea"
          },
          {
            fastKey: "/library/sections/2/all?country=8343",
            key: "8343",
            title: "Spain"
          },
          {
            fastKey: "/library/sections/2/all?country=1761",
            key: "1761",
            title: "United Kingdom"
          },
          {
            fastKey: "/library/sections/2/all?country=58591",
            key: "58591",
            title: "United States of America"
          }
        ]
      }
    }

    validateResponseSpec(
      "/library/sections/{sectionKey}/country",
      "get",
      200,
      response
    )
  })

  it("should validate the 200 response with no Directories when the API spec is valid", () => {
    const response = {
      MediaContainer: {
        size: 0,
        allowSync: false,
        art: "/:/resources/show-fanart.jpg",
        content: "secondary",
        identifier: "com.plexapp.plugins.library",
        mediaTagPrefix: "/system/bundle/media/flags/",
        mediaTagVersion: 1734362201,
        nocache: true,
        thumb: "/:/resources/show.png",
        title1: "Anime",
        title2: "By Country",
        viewGroup: "secondary"
      }
    }

    validateResponseSpec(
      "/library/sections/{sectionKey}/country",
      "get",
      200,
      response
    )
  })
})
