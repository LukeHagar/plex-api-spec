import { validateResponseSpec } from "@utils"
import { describe, it } from "vitest"

describe("GET /library/sections/[sectionKey]/genre", () => {
  it("should validate the 200 response when the API spec is valid", () => {
    const response = {
      MediaContainer: {
        size: 23,
        allowSync: false,
        art: "/:/resources/show-fanart.jpg",
        content: "secondary",
        identifier: "com.plexapp.plugins.library",
        mediaTagPrefix: "/system/bundle/media/flags/",
        mediaTagVersion: 1734362201,
        nocache: true,
        thumb: "/:/resources/show.png",
        title1: "TV Shows (Reality)",
        title2: "By Genre",
        viewGroup: "secondary",
        Directory: [
          {
            fastKey: "/library/sections/10/all?genre=89",
            key: "89",
            title: "Action",
            type: "genre"
          },
          {
            fastKey: "/library/sections/10/all?genre=17",
            key: "17",
            title: "Adventure",
            type: "genre"
          },
          {
            fastKey: "/library/sections/10/all?genre=4025",
            key: "4025",
            title: "Biography",
            type: "genre"
          },
          {
            fastKey: "/library/sections/10/all?genre=19",
            key: "19",
            title: "Comedy",
            type: "genre"
          },
          {
            fastKey: "/library/sections/10/all?genre=1057",
            key: "1057",
            title: "Crime",
            type: "genre"
          },
          {
            fastKey: "/library/sections/10/all?genre=2268",
            key: "2268",
            title: "Documentary",
            type: "genre"
          },
          {
            fastKey: "/library/sections/10/all?genre=91",
            key: "91",
            title: "Drama",
            type: "genre"
          },
          {
            fastKey: "/library/sections/10/all?genre=1708",
            key: "1708",
            title: "Family",
            type: "genre"
          },
          {
            fastKey: "/library/sections/10/all?genre=8438",
            key: "8438",
            title: "Food",
            type: "genre"
          },
          {
            fastKey: "/library/sections/10/all?genre=8439",
            key: "8439",
            title: "Game Show",
            type: "genre"
          },
          {
            fastKey: "/library/sections/10/all?genre=30219",
            key: "30219",
            title: "Home and Garden",
            type: "genre"
          },
          {
            fastKey: "/library/sections/10/all?genre=551",
            key: "551",
            title: "Horror",
            type: "genre"
          },
          {
            fastKey: "/library/sections/10/all?genre=5114",
            key: "5114",
            title: "Music",
            type: "genre"
          },
          {
            fastKey: "/library/sections/10/all?genre=552",
            key: "552",
            title: "Mystery",
            type: "genre"
          },
          {
            fastKey: "/library/sections/10/all?genre=12439",
            key: "12439",
            title: "News",
            type: "genre"
          },
          {
            fastKey: "/library/sections/10/all?genre=96699",
            key: "96699",
            title: "Podcast",
            type: "genre"
          },
          {
            fastKey: "/library/sections/10/all?genre=86",
            key: "86",
            title: "Reality",
            type: "genre"
          },
          {
            fastKey: "/library/sections/10/all?genre=2313",
            key: "2313",
            title: "Romance",
            type: "genre"
          },
          {
            fastKey: "/library/sections/10/all?genre=7484",
            key: "7484",
            title: "Sport",
            type: "genre"
          },
          {
            fastKey: "/library/sections/10/all?genre=82171",
            key: "82171",
            title: "Talk",
            type: "genre"
          },
          {
            fastKey: "/library/sections/10/all?genre=82170",
            key: "82170",
            title: "Talk Show",
            type: "genre"
          },
          {
            fastKey: "/library/sections/10/all?genre=739",
            key: "739",
            title: "Thriller",
            type: "genre"
          },
          {
            fastKey: "/library/sections/10/all?genre=57093",
            key: "57093",
            title: "Travel",
            type: "genre"
          }
        ]
      }
    }

    validateResponseSpec(
      "/library/sections/{sectionKey}/genre",
      "get",
      200,
      response
    )
  })

  it("should validate the 200 response with no Directories when the API spec is valid", () => {
    const response = {
      MediaContainer: {
        size: 14,
        allowSync: false,
        art: "/:/resources/show-fanart.jpg",
        content: "secondary",
        identifier: "com.plexapp.plugins.library",
        mediaTagPrefix: "/system/bundle/media/flags/",
        mediaTagVersion: 1734362201,
        nocache: true,
        thumb: "/:/resources/show.png",
        title1: "TV Shows (Kids)",
        title2: "By Genre",
        viewGroup: "secondary"
      }
    }

    validateResponseSpec(
      "/library/sections/{sectionKey}/genre",
      "get",
      200,
      response
    )
  })
})
