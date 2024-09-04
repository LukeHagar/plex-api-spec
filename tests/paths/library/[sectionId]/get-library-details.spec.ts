import { validateResponseSpec } from "@utils"
import { describe, it } from "vitest"

describe("GET /library/sections", () => {
  it("should validate the 200 response without includeDetails queryParam when the API spec is valid", () => {
    const response = {
      MediaContainer: {
        size: 20,
        allowSync: false,
        art: "/:/resources/movie-fanart.jpg",
        content: "secondary",
        identifier: "com.plexapp.plugins.library",
        librarySectionID: 1,
        mediaTagPrefix: "/system/bundle/media/flags/",
        mediaTagVersion: 1724161316,
        thumb: "/:/resources/movie.png",
        title1: "Movies",
        viewGroup: "secondary",
        Directory: [
          {
            key: "all",
            title: "All Movies"
          },
          {
            key: "unwatched",
            title: "Unwatched"
          },
          {
            key: "newest",
            title: "Recently Released"
          },
          {
            key: "recentlyAdded",
            title: "Recently Added"
          },
          {
            key: "recentlyViewed",
            title: "Recently Viewed"
          },
          {
            key: "onDeck",
            title: "Continue Watching"
          },
          {
            secondary: true,
            key: "collection",
            title: "By Collection"
          },
          {
            secondary: true,
            key: "edition",
            title: "By Edition"
          },
          {
            secondary: true,
            key: "genre",
            title: "By Genre"
          },
          {
            secondary: true,
            key: "year",
            title: "By Year"
          },
          {
            secondary: true,
            key: "decade",
            title: "By Decade"
          },
          {
            secondary: true,
            key: "director",
            title: "By Director"
          },
          {
            secondary: true,
            key: "actor",
            title: "By Starring Actor"
          },
          {
            secondary: true,
            key: "country",
            title: "By Country"
          },
          {
            secondary: true,
            key: "contentRating",
            title: "By Content Rating"
          },
          {
            secondary: true,
            key: "rating",
            title: "By Rating"
          },
          {
            secondary: true,
            key: "resolution",
            title: "By Resolution"
          },
          {
            secondary: true,
            key: "firstCharacter",
            title: "By First Letter"
          },
          {
            key: "folder",
            title: "By Folder"
          },
          {
            prompt: "Search Movies",
            search: true,
            key: "search?type=1",
            title: "Search..."
          }
        ]
      }
    }

    validateResponseSpec("/library/sections/{sectionKey}", "get", 200, response)
  })

  it("should validate the 200 response with includeDetails queryParam when the API spec is valid", () => {
    const response = {
      MediaContainer: {
        size: 29,
        allowSync: false,
        art: "/:/resources/movie-fanart.jpg",
        content: "secondary",
        identifier: "com.plexapp.plugins.library",
        librarySectionID: 1,
        mediaTagPrefix: "/system/bundle/media/flags/",
        mediaTagVersion: 1724161316,
        thumb: "/:/resources/movie.png",
        title1: "Movies",
        viewGroup: "secondary",
        Directory: [
          {
            key: "all",
            title: "All Movies"
          },
          {
            key: "unwatched",
            title: "Unwatched"
          },
          {
            key: "newest",
            title: "Recently Released"
          },
          {
            key: "recentlyAdded",
            title: "Recently Added"
          },
          {
            key: "recentlyViewed",
            title: "Recently Viewed"
          },
          {
            key: "onDeck",
            title: "Continue Watching"
          },
          {
            secondary: true,
            key: "collection",
            title: "By Collection"
          },
          {
            secondary: true,
            key: "edition",
            title: "By Edition"
          },
          {
            secondary: true,
            key: "genre",
            title: "By Genre"
          },
          {
            secondary: true,
            key: "year",
            title: "By Year"
          },
          {
            secondary: true,
            key: "decade",
            title: "By Decade"
          },
          {
            secondary: true,
            key: "director",
            title: "By Director"
          },
          {
            secondary: true,
            key: "actor",
            title: "By Starring Actor"
          },
          {
            secondary: true,
            key: "country",
            title: "By Country"
          },
          {
            secondary: true,
            key: "contentRating",
            title: "By Content Rating"
          },
          {
            secondary: true,
            key: "rating",
            title: "By Rating"
          },
          {
            secondary: true,
            key: "resolution",
            title: "By Resolution"
          },
          {
            secondary: true,
            key: "firstCharacter",
            title: "By First Letter"
          },
          {
            key: "folder",
            title: "By Folder"
          },
          {
            prompt: "Search Movies",
            search: true,
            key: "search?type=1",
            title: "Search..."
          }
        ],
        Type: [
          {
            key: "/library/sections/1/all?type=1",
            type: "movie",
            title: "Movies",
            active: false,
            Filter: [
              {
                filter: "genre",
                filterType: "string",
                key: "/library/sections/1/genre",
                title: "Genre",
                type: "filter"
              },
              {
                filter: "year",
                filterType: "integer",
                key: "/library/sections/1/year",
                title: "Year",
                type: "filter"
              },
              {
                filter: "decade",
                filterType: "integer",
                key: "/library/sections/1/decade",
                title: "Decade",
                type: "filter"
              },
              {
                filter: "contentRating",
                filterType: "string",
                key: "/library/sections/1/contentRating",
                title: "Content Rating",
                type: "filter"
              },
              {
                filter: "collection",
                filterType: "string",
                key: "/library/sections/1/collection",
                title: "Collection",
                type: "filter"
              },
              {
                filter: "director",
                filterType: "string",
                key: "/library/sections/1/director",
                title: "Director",
                type: "filter"
              },
              {
                filter: "actor",
                filterType: "string",
                key: "/library/sections/1/actor",
                title: "Actor",
                type: "filter"
              },
              {
                filter: "writer",
                filterType: "string",
                key: "/library/sections/1/writer",
                title: "Writer",
                type: "filter"
              },
              {
                filter: "producer",
                filterType: "string",
                key: "/library/sections/1/producer",
                title: "Producer",
                type: "filter"
              },
              {
                filter: "country",
                filterType: "string",
                key: "/library/sections/1/country",
                title: "Country",
                type: "filter"
              },
              {
                filter: "studio",
                filterType: "string",
                key: "/library/sections/1/studio",
                title: "Studio",
                type: "filter"
              },
              {
                filter: "resolution",
                filterType: "string",
                key: "/library/sections/1/resolution",
                title: "Resolution",
                type: "filter"
              },
              {
                filter: "hdr",
                filterType: "boolean",
                key: "/library/sections/1/hdr",
                title: "HDR",
                type: "filter"
              },
              {
                filter: "unwatched",
                filterType: "boolean",
                key: "/library/sections/1/unwatched",
                title: "Unwatched",
                type: "filter"
              },
              {
                filter: "inProgress",
                filterType: "boolean",
                key: "/library/sections/1/inProgress",
                title: "In Progress",
                type: "filter"
              },
              {
                filter: "unmatched",
                filterType: "boolean",
                key: "/library/sections/1/unmatched",
                title: "Unmatched",
                type: "filter"
              },
              {
                filter: "audioLanguage",
                filterType: "string",
                key: "/library/sections/1/audioLanguage",
                title: "Audio Language",
                type: "filter"
              },
              {
                filter: "subtitleLanguage",
                filterType: "string",
                key: "/library/sections/1/subtitleLanguage",
                title: "Subtitle Language",
                type: "filter"
              },
              {
                filter: "label",
                filterType: "string",
                key: "/library/sections/1/label",
                title: "Labels",
                type: "filter"
              }
            ],
            Sort: [
              {
                default: "asc",
                defaultDirection: "asc",
                descKey: "titleSort:desc",
                firstCharacterKey: "/library/sections/1/firstCharacter",
                key: "titleSort",
                title: "Title"
              },
              {
                defaultDirection: "desc",
                descKey: "originallyAvailableAt:desc",
                key: "originallyAvailableAt",
                title: "Release Date"
              },
              {
                defaultDirection: "desc",
                descKey: "rating:desc",
                key: "rating",
                title: "Critic Rating"
              },
              {
                defaultDirection: "desc",
                descKey: "audienceRating:desc",
                key: "audienceRating",
                title: "Audience Rating"
              },
              {
                defaultDirection: "desc",
                descKey: "duration:desc",
                key: "duration",
                title: "Duration"
              },
              {
                defaultDirection: "desc",
                descKey: "addedAt:desc",
                key: "addedAt",
                title: "Date Added"
              },
              {
                defaultDirection: "desc",
                descKey: "lastViewedAt:desc",
                key: "lastViewedAt",
                title: "Date Viewed"
              },
              {
                defaultDirection: "asc",
                descKey: "mediaHeight:desc",
                key: "mediaHeight",
                title: "Resolution"
              },
              {
                defaultDirection: "desc",
                descKey: "random:desc",
                key: "random",
                title: "Randomly"
              }
            ],
            Field: [
              {
                key: "title",
                title: "Title",
                type: "string"
              },
              {
                key: "studio",
                title: "Studio",
                type: "string"
              },
              {
                key: "userRating",
                subType: "rating",
                title: "Rating",
                type: "integer"
              },
              {
                key: "contentRating",
                title: "Content Rating",
                type: "tag"
              },
              {
                key: "year",
                subType: "year",
                title: "Year",
                type: "integer"
              },
              {
                key: "decade",
                subType: "decade",
                title: "Decade",
                type: "integer"
              },
              {
                key: "originallyAvailableAt",
                title: "Release Date",
                type: "date"
              },
              {
                key: "duration",
                subType: "duration",
                title: "Duration",
                type: "integer"
              },
              {
                key: "unmatched",
                title: "Unmatched",
                type: "boolean"
              },
              {
                key: "duplicate",
                title: "Duplicate",
                type: "boolean"
              },
              {
                key: "genre",
                title: "Genre",
                type: "tag"
              },
              {
                key: "collection",
                title: "Collection",
                type: "tag"
              },
              {
                key: "director",
                title: "Director",
                type: "tag"
              },
              {
                key: "writer",
                title: "Writer",
                type: "tag"
              },
              {
                key: "producer",
                title: "Producer",
                type: "tag"
              },
              {
                key: "actor",
                title: "Actor",
                type: "tag"
              },
              {
                key: "country",
                title: "Country",
                type: "tag"
              },
              {
                key: "addedAt",
                title: "Date Added",
                type: "date"
              },
              {
                key: "viewCount",
                title: "Plays",
                type: "integer"
              },
              {
                key: "lastViewedAt",
                title: "Last Watched",
                type: "date"
              },
              {
                key: "unwatched",
                title: "Unwatched",
                type: "boolean"
              },
              {
                key: "resolution",
                title: "Resolution",
                type: "resolution"
              },
              {
                key: "hdr",
                subType: "hdr",
                title: "HDR",
                type: "boolean"
              },
              {
                key: "mediaSize",
                subType: "fileSize",
                title: "File Size",
                type: "integer"
              },
              {
                key: "mediaBitrate",
                subType: "bitrate",
                title: "Bitrate",
                type: "integer"
              },
              {
                key: "subtitleLanguage",
                title: "Subtitle Language",
                type: "subtitleLanguage"
              },
              {
                key: "audioLanguage",
                title: "Audio Language",
                type: "audioLanguage"
              },
              {
                key: "inProgress",
                title: "In Progress",
                type: "boolean"
              },
              {
                key: "trash",
                title: "Trash",
                type: "boolean"
              },
              {
                key: "label",
                title: "Label",
                type: "tag"
              }
            ]
          }
        ],
        FieldType: [
          {
            type: "tag",
            Operator: [
              {
                key: "=",
                title: "is"
              },
              {
                key: "!=",
                title: "is not"
              }
            ]
          },
          {
            type: "integer",
            Operator: [
              {
                key: "=",
                title: "is"
              },
              {
                key: "!=",
                title: "is not"
              },
              {
                key: ">>=",
                title: "is greater than"
              },
              {
                key: "<<=",
                title: "is less than"
              }
            ]
          },
          {
            type: "string",
            Operator: [
              {
                key: "=",
                title: "contains"
              },
              {
                key: "!=",
                title: "does not contain"
              },
              {
                key: "==",
                title: "is"
              },
              {
                key: "!==",
                title: "is not"
              },
              {
                key: "<=",
                title: "begins with"
              },
              {
                key: ">=",
                title: "ends with"
              }
            ]
          },
          {
            type: "boolean",
            Operator: [
              {
                key: "=",
                title: "is true"
              },
              {
                key: "!=",
                title: "is false"
              }
            ]
          },
          {
            type: "date",
            Operator: [
              {
                key: "<<=",
                title: "is before"
              },
              {
                key: ">>=",
                title: "is after"
              }
            ]
          },
          {
            type: "subtitleLanguage",
            Operator: [
              {
                key: "=",
                title: "is"
              },
              {
                key: "!=",
                title: "is not"
              }
            ]
          },
          {
            type: "audioLanguage",
            Operator: [
              {
                key: "=",
                title: "is"
              },
              {
                key: "!=",
                title: "is not"
              }
            ]
          },
          {
            type: "resolution",
            Operator: [
              {
                key: "=",
                title: "is"
              }
            ]
          }
        ]
      }
    }

    validateResponseSpec("/library/sections/{sectionKey}", "get", 200, response)
  })
})
