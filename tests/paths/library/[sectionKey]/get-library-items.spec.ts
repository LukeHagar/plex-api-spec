import { validateResponseSpec } from "@utils"
import { describe, it } from "vitest"

describe("GET /library/sections", () => {
  it("should validate the 200 response without includeGuids and includeMeta queryParam when the API spec is valid", () => {
    // Response from the API endpoint
    // {{baseUrl}}/library/sections/1/all?X-Plex-Container-Start=1&X-Plex-Container-Size=5
    const response = {
      MediaContainer: {
        size: 5,
        totalSize: 357,
        offset: 1,
        allowSync: true,
        art: "/:/resources/movie-fanart.jpg",
        content: "secondary",
        identifier: "com.plexapp.plugins.library",
        librarySectionID: 1,
        librarySectionTitle: "Movies",
        librarySectionUUID: "0e71027d-88bc-4413-9927-5aad992d3d19",
        mediaTagPrefix: "/system/bundle/media/flags/",
        mediaTagVersion: 1724161316,
        thumb: "/:/resources/movie.png",
        title1: "Movies",
        title2: "All Movies",
        viewGroup: "movie",
        Metadata: [
          {
            ratingKey: "9881",
            key: "/library/metadata/9881",
            guid: "plex://movie/5d776834961905001eb939ac",
            slug: "91-2-weeks",
            studio: "Jonesfilm",
            type: "movie",
            title: "9½ Weeks",
            originalTitle: "Nine 1/2 Weeks",
            contentRating: "nl/12",
            summary:
              "An erotic story about a woman, the assistant of an art gallery, who gets involved in an impersonal affair with a man. She barely knows about his life, only about the sex games they play, so the relationship begins to get complicated.",
            rating: 6.0,
            audienceRating: 5.6,
            year: 1986,
            tagline: "They Broke Every Rule.",
            thumb: "/library/metadata/9881/thumb/1723182007",
            art: "/library/metadata/9881/art/1723182007",
            duration: 7011007,
            originallyAvailableAt: "1986-02-09",
            addedAt: 1560801795,
            updatedAt: 1723182007,
            audienceRatingImage: "rottentomatoes://image.rating.spilled",
            chapterSource: "media",
            ratingImage: "rottentomatoes://image.rating.ripe",
            Media: [
              {
                id: 12306,
                duration: 7011007,
                bitrate: 13003,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 6,
                audioCodec: "dca",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "24p",
                audioProfile: "dts",
                videoProfile: "high",
                Part: [
                  {
                    id: 41930,
                    key: "/library/parts/41930/1501053187/file.mkv",
                    duration: 7011007,
                    file: "/Movies/Nine 1+2 Weeks (1986)/Nine.and.a.Half.Weeks.1986.1080p.BluRay.DTS.x264-HDMaNiAcS.mkv",
                    size: 11394952434,
                    audioProfile: "dts",
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "high"
                  }
                ]
              }
            ],
            UltraBlurColors: {
              topLeft: "452410",
              topRight: "0d0202",
              bottomRight: "0d0202",
              bottomLeft: "272223"
            },
            Genre: [
              {
                tag: "Drama"
              },
              {
                tag: "Romance"
              }
            ],
            Country: [
              {
                tag: "United States of America"
              }
            ],
            Director: [
              {
                tag: "Adrian Lyne"
              }
            ],
            Writer: [
              {
                tag: "Sarah Kernochan"
              },
              {
                tag: "Zalman King"
              }
            ],
            Role: [
              {
                tag: "Mickey Rourke"
              },
              {
                tag: "Kim Basinger"
              },
              {
                tag: "Margaret Whitton"
              }
            ]
          },
          {
            ratingKey: "20936",
            key: "/library/metadata/20936",
            guid: "plex://movie/5d776831a091de001f2e7756",
            slug: "10000-bc",
            studio: "Centropolis Entertainment",
            type: "movie",
            title: "10,000 BC",
            contentRating: "nl/12",
            summary:
              "In the prehistoric past, D'Leh is a mammoth hunter who bonds with the beautiful Evolet. When warriors on horseback capture Evolet and the tribesmen, D'Leh must embark on an odyssey to save his true love.",
            rating: 0.9,
            audienceRating: 3.7,
            viewOffset: 3866000,
            lastViewedAt: 1563831721,
            year: 2008,
            tagline: "The legend. The battle. The first hero.",
            thumb: "/library/metadata/20936/thumb/1721967792",
            art: "/library/metadata/20936/art/1721967792",
            duration: 6535680,
            originallyAvailableAt: "2008-03-05",
            addedAt: 1558940057,
            updatedAt: 1721967792,
            audienceRatingImage: "rottentomatoes://image.rating.spilled",
            chapterSource: "media",
            ratingImage: "rottentomatoes://image.rating.rotten",
            Media: [
              {
                id: 21335,
                duration: 6535680,
                bitrate: 18740,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 6,
                audioCodec: "truehd",
                videoCodec: "vc1",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "24p",
                videoProfile: "advanced",
                Part: [
                  {
                    id: 41744,
                    key: "/library/parts/41744/1563131036/file.mkv",
                    duration: 6535680,
                    file: "/Movies/10,000 BC (2008)/10000.BC.2008.1080p.BluRay.REMUX.VC-1.TrueHD.5.1-EPSiLON.mkv",
                    size: 15359810466,
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "advanced"
                  }
                ]
              }
            ],
            UltraBlurColors: {
              topLeft: "173524",
              topRight: "8e471e",
              bottomRight: "734124",
              bottomLeft: "864e20"
            },
            Genre: [
              {
                tag: "Action"
              },
              {
                tag: "Adventure"
              }
            ],
            Country: [
              {
                tag: "United States of America"
              },
              {
                tag: "South Africa"
              }
            ],
            Collection: [
              {
                tag: "Working NL Subs"
              }
            ],
            Director: [
              {
                tag: "Roland Emmerich"
              }
            ],
            Writer: [
              {
                tag: "Harald Kloser"
              },
              {
                tag: "Roland Emmerich"
              }
            ],
            Role: [
              {
                tag: "Steven Strait"
              },
              {
                tag: "Camilla Belle"
              },
              {
                tag: "Cliff Curtis"
              }
            ]
          },
          {
            ratingKey: "47175",
            key: "/library/metadata/47175",
            guid: "plex://movie/5d776d6c23d5a3001f5230e4",
            slug: "22-july",
            studio: "Scott Rudin Productions",
            type: "movie",
            title: "22 July",
            contentRating: "nl/16",
            summary:
              "A three-part story of Norway's worst terrorist attack in which over seventy people were killed. 22 July looks at the disaster itself, the survivors, Norway's political system and the lawyers who worked on this horrific case.",
            rating: 8.1,
            audienceRating: 7.0,
            year: 2018,
            tagline: "The true story of a day that started like any other",
            thumb: "/library/metadata/47175/thumb/1721705174",
            art: "/library/metadata/47175/art/1721705174",
            duration: 8640416,
            originallyAvailableAt: "2018-10-04",
            addedAt: 1657821161,
            updatedAt: 1721705174,
            audienceRatingImage: "rottentomatoes://image.rating.upright",
            ratingImage: "rottentomatoes://image.rating.ripe",
            Media: [
              {
                id: 50492,
                duration: 8640416,
                bitrate: 15942,
                width: 3840,
                height: 2160,
                aspectRatio: 1.78,
                audioChannels: 6,
                audioCodec: "eac3",
                videoCodec: "hevc",
                videoResolution: "4k",
                container: "mkv",
                videoFrameRate: "24p",
                videoProfile: "main 10",
                Part: [
                  {
                    id: 79867,
                    key: "/library/parts/79867/1595149163/file.mkv",
                    duration: 8640416,
                    file: "/Movies/22 July (2018)/22 July (2018) WEBDL-2160p.mkv",
                    size: 17221974810,
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "main 10"
                  }
                ]
              }
            ],
            UltraBlurColors: {
              topLeft: "243032",
              topRight: "245968",
              bottomRight: "113140",
              bottomLeft: "1b1d1f"
            },
            Genre: [
              {
                tag: "Drama"
              },
              {
                tag: "History"
              }
            ],
            Country: [
              {
                tag: "Iceland"
              },
              {
                tag: "Norway"
              }
            ],
            Director: [
              {
                tag: "Paul Greengrass"
              }
            ],
            Writer: [
              {
                tag: "Åsne Seierstad"
              },
              {
                tag: "Paul Greengrass"
              }
            ],
            Role: [
              {
                tag: "Jonas Strand Gravli"
              },
              {
                tag: "Anders Danielsen Lie"
              },
              {
                tag: "Jon Øigarden"
              }
            ]
          },
          {
            ratingKey: "21488",
            key: "/library/metadata/21488",
            guid: "plex://movie/5d776bd9fb0d55001f574e73",
            slug: "the-24-hour-war",
            studio: "Chassy Media",
            type: "movie",
            title: "The 24 Hour War",
            titleSort: "24 Hour War",
            summary:
              "In the early 1960s, Henry Ford II and Enzo Ferrari went to war on the battlefield of Le Mans(TM). This epic battle saw drivers lose their lives, family dynasties nearly collapse and the development of a new race car that changed racing.",
            rating: 10.0,
            audienceRating: 8.6,
            skipCount: 1,
            year: 2016,
            thumb: "/library/metadata/21488/thumb/1721967875",
            art: "/library/metadata/21488/art/1721967875",
            duration: 5997792,
            originallyAvailableAt: "2016-11-22",
            addedAt: 1565072391,
            updatedAt: 1721967875,
            audienceRatingImage: "rottentomatoes://image.rating.upright",
            chapterSource: "media",
            ratingImage: "rottentomatoes://image.rating.ripe",
            Media: [
              {
                id: 21822,
                duration: 5997792,
                bitrate: 11730,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 6,
                audioCodec: "ac3",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "24p",
                videoProfile: "high",
                Part: [
                  {
                    id: 41819,
                    key: "/library/parts/41819/1492372630/file.mkv",
                    duration: 5997792,
                    file: "/Movies/The 24 Hour War (2016)/The.24.Hour.War.2016.1080p.BluRay.DD5.1.x264-HiFi.mkv",
                    size: 8796183796,
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "high"
                  }
                ]
              }
            ],
            UltraBlurColors: {
              topLeft: "511811",
              topRight: "692a1e",
              bottomRight: "2d0f0b",
              bottomLeft: "551c17"
            },
            Genre: [
              {
                tag: "Documentary"
              },
              {
                tag: "History"
              }
            ],
            Country: [
              {
                tag: "United States of America"
              }
            ],
            Director: [
              {
                tag: "Adam Carolla"
              },
              {
                tag: "Nate Adams"
              }
            ],
            Role: [
              {
                tag: "Mario Andretti"
              },
              {
                tag: "Bob Bondurant"
              },
              {
                tag: "Ralph Nader"
              }
            ]
          },
          {
            ratingKey: "21050",
            key: "/library/metadata/21050",
            guid: "plex://movie/5d776824f54112001f5bbdd7",
            slug: "28-days-later",
            studio: "DNA Films",
            type: "movie",
            title: "28 Days Later",
            originalTitle: "28 Days Later...",
            contentRating: "nl/16",
            summary:
              "Twenty-eight days after a killer virus was accidentally unleashed from a British research facility, a small group of London survivors are caught in a desperate struggle to protect themselves from the infected. Carried by animals and humans, the virus turns those it infects into homicidal maniacs -- and it's absolutely impossible to contain.",
            rating: 8.7,
            audienceRating: 8.5,
            viewOffset: 3421000,
            lastViewedAt: 1554844099,
            year: 2002,
            tagline:
              "His fear began when he woke up alone. His terror began when he realised he wasn't.",
            thumb: "/library/metadata/21050/thumb/1721967834",
            art: "/library/metadata/21050/art/1721967834",
            duration: 6787605,
            originallyAvailableAt: "2002-11-01",
            addedAt: 1563846686,
            updatedAt: 1721967834,
            audienceRatingImage: "rottentomatoes://image.rating.upright",
            ratingImage: "rottentomatoes://image.rating.ripe",
            Media: [
              {
                id: 21442,
                duration: 6787605,
                bitrate: 10056,
                width: 1920,
                height: 1040,
                aspectRatio: 1.85,
                audioChannels: 6,
                audioCodec: "dca",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "24p",
                audioProfile: "dts",
                videoProfile: "high",
                Part: [
                  {
                    id: 41881,
                    key: "/library/parts/41881/1540562456/file.mkv",
                    duration: 6787605,
                    file: "/Movies/28 Days Later (2002)/28.Days.Later.2002.1080p.REPACK.BluRay.x264-AVCHD.mkv",
                    size: 8534411908,
                    audioProfile: "dts",
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "high"
                  }
                ]
              }
            ],
            UltraBlurColors: {
              topLeft: "571002",
              topRight: "6e190f",
              bottomRight: "9f1a03",
              bottomLeft: "430b04"
            },
            Genre: [
              {
                tag: "Horror"
              },
              {
                tag: "Thriller"
              }
            ],
            Country: [
              {
                tag: "United Kingdom"
              }
            ],
            Director: [
              {
                tag: "Danny Boyle"
              }
            ],
            Writer: [
              {
                tag: "Alex Garland"
              }
            ],
            Role: [
              {
                tag: "Cillian Murphy"
              },
              {
                tag: "Naomie Harris"
              },
              {
                tag: "Brendan Gleeson"
              }
            ]
          }
        ]
      }
    }

    validateResponseSpec(
      "/library/sections/{sectionKey}/{tag}",
      "get",
      200,
      response
    )
  })

  it("should validate the 200 response with includeGuids and includeMeta queryParam when the API spec is valid", () => {
    // {{baseUrl}}/library/sections/1/all?type=2&includeGuids=1&includeMeta=1&X-Plex-Container-Start=1&X-Plex-Container-Size=5
    const response = {
      MediaContainer: {
        size: 5,
        totalSize: 357,
        offset: 1,
        allowSync: true,
        art: "/:/resources/movie-fanart.jpg",
        content: "secondary",
        identifier: "com.plexapp.plugins.library",
        librarySectionID: 1,
        librarySectionTitle: "Movies",
        librarySectionUUID: "0e71027d-88bc-4413-9927-5aad992d3d19",
        mediaTagPrefix: "/system/bundle/media/flags/",
        mediaTagVersion: 1724161316,
        thumb: "/:/resources/movie.png",
        title1: "Movies",
        title2: "All Movies",
        viewGroup: "movie",
        Meta: {
          Type: [
            {
              key: "/library/sections/1/all?type=1",
              type: "movie",
              title: "Movies",
              active: true,
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
                  active: true,
                  activeDirection: "asc",
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
            },
            {
              key: "/library/sections/1/folder",
              type: "folder",
              title: "Folders",
              active: false
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
        },
        Metadata: [
          {
            ratingKey: "9881",
            key: "/library/metadata/9881",
            guid: "plex://movie/5d776834961905001eb939ac",
            slug: "91-2-weeks",
            studio: "Jonesfilm",
            type: "movie",
            title: "9½ Weeks",
            originalTitle: "Nine 1/2 Weeks",
            contentRating: "nl/12",
            summary:
              "An erotic story about a woman, the assistant of an art gallery, who gets involved in an impersonal affair with a man. She barely knows about his life, only about the sex games they play, so the relationship begins to get complicated.",
            rating: 6.0,
            audienceRating: 5.6,
            year: 1986,
            tagline: "They Broke Every Rule.",
            thumb: "/library/metadata/9881/thumb/1723182007",
            art: "/library/metadata/9881/art/1723182007",
            duration: 7011007,
            originallyAvailableAt: "1986-02-09",
            addedAt: 1560801795,
            updatedAt: 1723182007,
            audienceRatingImage: "rottentomatoes://image.rating.spilled",
            chapterSource: "media",
            ratingImage: "rottentomatoes://image.rating.ripe",
            Media: [
              {
                id: 12306,
                duration: 7011007,
                bitrate: 13003,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 6,
                audioCodec: "dca",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "24p",
                audioProfile: "dts",
                videoProfile: "high",
                Part: [
                  {
                    id: 41930,
                    key: "/library/parts/41930/1501053187/file.mkv",
                    duration: 7011007,
                    file: "/Movies/Nine 1+2 Weeks (1986)/Nine.and.a.Half.Weeks.1986.1080p.BluRay.DTS.x264-HDMaNiAcS.mkv",
                    size: 11394952434,
                    audioProfile: "dts",
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "high"
                  }
                ]
              }
            ],
            UltraBlurColors: {
              topLeft: "452410",
              topRight: "0d0202",
              bottomRight: "0d0202",
              bottomLeft: "272223"
            },
            Guid: [
              {
                id: "imdb://tt0091635"
              },
              {
                id: "tmdb://10068"
              },
              {
                id: "tvdb://1165"
              }
            ],
            Genre: [
              {
                tag: "Drama"
              },
              {
                tag: "Romance"
              }
            ],
            Country: [
              {
                tag: "United States of America"
              }
            ],
            Director: [
              {
                tag: "Adrian Lyne"
              }
            ],
            Writer: [
              {
                tag: "Sarah Kernochan"
              },
              {
                tag: "Zalman King"
              }
            ],
            Role: [
              {
                tag: "Mickey Rourke"
              },
              {
                tag: "Kim Basinger"
              },
              {
                tag: "Margaret Whitton"
              }
            ]
          },
          {
            ratingKey: "20936",
            key: "/library/metadata/20936",
            guid: "plex://movie/5d776831a091de001f2e7756",
            slug: "10000-bc",
            studio: "Centropolis Entertainment",
            type: "movie",
            title: "10,000 BC",
            contentRating: "nl/12",
            summary:
              "In the prehistoric past, D'Leh is a mammoth hunter who bonds with the beautiful Evolet. When warriors on horseback capture Evolet and the tribesmen, D'Leh must embark on an odyssey to save his true love.",
            rating: 0.9,
            audienceRating: 3.7,
            viewOffset: 3866000,
            lastViewedAt: 1563831721,
            year: 2008,
            tagline: "The legend. The battle. The first hero.",
            thumb: "/library/metadata/20936/thumb/1721967792",
            art: "/library/metadata/20936/art/1721967792",
            duration: 6535680,
            originallyAvailableAt: "2008-03-05",
            addedAt: 1558940057,
            updatedAt: 1721967792,
            audienceRatingImage: "rottentomatoes://image.rating.spilled",
            chapterSource: "media",
            ratingImage: "rottentomatoes://image.rating.rotten",
            Media: [
              {
                id: 21335,
                duration: 6535680,
                bitrate: 18740,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 6,
                audioCodec: "truehd",
                videoCodec: "vc1",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "24p",
                videoProfile: "advanced",
                Part: [
                  {
                    id: 41744,
                    key: "/library/parts/41744/1563131036/file.mkv",
                    duration: 6535680,
                    file: "/Movies/10,000 BC (2008)/10000.BC.2008.1080p.BluRay.REMUX.VC-1.TrueHD.5.1-EPSiLON.mkv",
                    size: 15359810466,
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "advanced"
                  }
                ]
              }
            ],
            UltraBlurColors: {
              topLeft: "173524",
              topRight: "8e471e",
              bottomRight: "734124",
              bottomLeft: "864e20"
            },
            Guid: [
              {
                id: "imdb://tt0443649"
              },
              {
                id: "tmdb://7840"
              },
              {
                id: "tvdb://1913"
              }
            ],
            Genre: [
              {
                tag: "Action"
              },
              {
                tag: "Adventure"
              }
            ],
            Country: [
              {
                tag: "United States of America"
              },
              {
                tag: "South Africa"
              }
            ],
            Collection: [
              {
                tag: "Working NL Subs"
              }
            ],
            Director: [
              {
                tag: "Roland Emmerich"
              }
            ],
            Writer: [
              {
                tag: "Harald Kloser"
              },
              {
                tag: "Roland Emmerich"
              }
            ],
            Role: [
              {
                tag: "Steven Strait"
              },
              {
                tag: "Camilla Belle"
              },
              {
                tag: "Cliff Curtis"
              }
            ]
          },
          {
            ratingKey: "47175",
            key: "/library/metadata/47175",
            guid: "plex://movie/5d776d6c23d5a3001f5230e4",
            slug: "22-july",
            studio: "Scott Rudin Productions",
            type: "movie",
            title: "22 July",
            contentRating: "nl/16",
            summary:
              "A three-part story of Norway's worst terrorist attack in which over seventy people were killed. 22 July looks at the disaster itself, the survivors, Norway's political system and the lawyers who worked on this horrific case.",
            rating: 8.1,
            audienceRating: 7.0,
            year: 2018,
            tagline: "The true story of a day that started like any other",
            thumb: "/library/metadata/47175/thumb/1721705174",
            art: "/library/metadata/47175/art/1721705174",
            duration: 8640416,
            originallyAvailableAt: "2018-10-04",
            addedAt: 1657821161,
            updatedAt: 1721705174,
            audienceRatingImage: "rottentomatoes://image.rating.upright",
            ratingImage: "rottentomatoes://image.rating.ripe",
            Media: [
              {
                id: 50492,
                duration: 8640416,
                bitrate: 15942,
                width: 3840,
                height: 2160,
                aspectRatio: 1.78,
                audioChannels: 6,
                audioCodec: "eac3",
                videoCodec: "hevc",
                videoResolution: "4k",
                container: "mkv",
                videoFrameRate: "24p",
                videoProfile: "main 10",
                Part: [
                  {
                    id: 79867,
                    key: "/library/parts/79867/1595149163/file.mkv",
                    duration: 8640416,
                    file: "/Movies/22 July (2018)/22 July (2018) WEBDL-2160p.mkv",
                    size: 17221974810,
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "main 10"
                  }
                ]
              }
            ],
            UltraBlurColors: {
              topLeft: "243032",
              topRight: "245968",
              bottomRight: "113140",
              bottomLeft: "1b1d1f"
            },
            Guid: [
              {
                id: "imdb://tt7280898"
              },
              {
                id: "tmdb://474354"
              },
              {
                id: "tvdb://968"
              }
            ],
            Genre: [
              {
                tag: "Drama"
              },
              {
                tag: "History"
              }
            ],
            Country: [
              {
                tag: "Iceland"
              },
              {
                tag: "Norway"
              }
            ],
            Director: [
              {
                tag: "Paul Greengrass"
              }
            ],
            Writer: [
              {
                tag: "Åsne Seierstad"
              },
              {
                tag: "Paul Greengrass"
              }
            ],
            Role: [
              {
                tag: "Jonas Strand Gravli"
              },
              {
                tag: "Anders Danielsen Lie"
              },
              {
                tag: "Jon Øigarden"
              }
            ]
          },
          {
            ratingKey: "21488",
            key: "/library/metadata/21488",
            guid: "plex://movie/5d776bd9fb0d55001f574e73",
            slug: "the-24-hour-war",
            studio: "Chassy Media",
            type: "movie",
            title: "The 24 Hour War",
            titleSort: "24 Hour War",
            summary:
              "In the early 1960s, Henry Ford II and Enzo Ferrari went to war on the battlefield of Le Mans(TM). This epic battle saw drivers lose their lives, family dynasties nearly collapse and the development of a new race car that changed racing.",
            rating: 10.0,
            audienceRating: 8.6,
            skipCount: 1,
            year: 2016,
            thumb: "/library/metadata/21488/thumb/1721967875",
            art: "/library/metadata/21488/art/1721967875",
            duration: 5997792,
            originallyAvailableAt: "2016-11-22",
            addedAt: 1565072391,
            updatedAt: 1721967875,
            audienceRatingImage: "rottentomatoes://image.rating.upright",
            chapterSource: "media",
            ratingImage: "rottentomatoes://image.rating.ripe",
            Media: [
              {
                id: 21822,
                duration: 5997792,
                bitrate: 11730,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 6,
                audioCodec: "ac3",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "24p",
                videoProfile: "high",
                Part: [
                  {
                    id: 41819,
                    key: "/library/parts/41819/1492372630/file.mkv",
                    duration: 5997792,
                    file: "/Movies/The 24 Hour War (2016)/The.24.Hour.War.2016.1080p.BluRay.DD5.1.x264-HiFi.mkv",
                    size: 8796183796,
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "high"
                  }
                ]
              }
            ],
            UltraBlurColors: {
              topLeft: "511811",
              topRight: "692a1e",
              bottomRight: "2d0f0b",
              bottomLeft: "551c17"
            },
            Guid: [
              {
                id: "imdb://tt4875844"
              },
              {
                id: "tmdb://359093"
              },
              {
                id: "tvdb://132451"
              }
            ],
            Genre: [
              {
                tag: "Documentary"
              },
              {
                tag: "History"
              }
            ],
            Country: [
              {
                tag: "United States of America"
              }
            ],
            Director: [
              {
                tag: "Adam Carolla"
              },
              {
                tag: "Nate Adams"
              }
            ],
            Role: [
              {
                tag: "Mario Andretti"
              },
              {
                tag: "Bob Bondurant"
              },
              {
                tag: "Ralph Nader"
              }
            ]
          },
          {
            ratingKey: "21050",
            key: "/library/metadata/21050",
            guid: "plex://movie/5d776824f54112001f5bbdd7",
            slug: "28-days-later",
            studio: "DNA Films",
            type: "movie",
            title: "28 Days Later",
            originalTitle: "28 Days Later...",
            contentRating: "nl/16",
            summary:
              "Twenty-eight days after a killer virus was accidentally unleashed from a British research facility, a small group of London survivors are caught in a desperate struggle to protect themselves from the infected. Carried by animals and humans, the virus turns those it infects into homicidal maniacs -- and it's absolutely impossible to contain.",
            rating: 8.7,
            audienceRating: 8.5,
            viewOffset: 3421000,
            lastViewedAt: 1554844099,
            year: 2002,
            tagline:
              "His fear began when he woke up alone. His terror began when he realised he wasn't.",
            thumb: "/library/metadata/21050/thumb/1721967834",
            art: "/library/metadata/21050/art/1721967834",
            duration: 6787605,
            originallyAvailableAt: "2002-11-01",
            addedAt: 1563846686,
            updatedAt: 1721967834,
            audienceRatingImage: "rottentomatoes://image.rating.upright",
            ratingImage: "rottentomatoes://image.rating.ripe",
            Media: [
              {
                id: 21442,
                duration: 6787605,
                bitrate: 10056,
                width: 1920,
                height: 1040,
                aspectRatio: 1.85,
                audioChannels: 6,
                audioCodec: "dca",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "24p",
                audioProfile: "dts",
                videoProfile: "high",
                Part: [
                  {
                    id: 41881,
                    key: "/library/parts/41881/1540562456/file.mkv",
                    duration: 6787605,
                    file: "/Movies/28 Days Later (2002)/28.Days.Later.2002.1080p.REPACK.BluRay.x264-AVCHD.mkv",
                    size: 8534411908,
                    audioProfile: "dts",
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "high"
                  }
                ]
              }
            ],
            UltraBlurColors: {
              topLeft: "571002",
              topRight: "6e190f",
              bottomRight: "9f1a03",
              bottomLeft: "430b04"
            },
            Guid: [
              {
                id: "imdb://tt0289043"
              },
              {
                id: "tmdb://170"
              },
              {
                id: "tvdb://871"
              }
            ],
            Genre: [
              {
                tag: "Horror"
              },
              {
                tag: "Thriller"
              }
            ],
            Country: [
              {
                tag: "United Kingdom"
              }
            ],
            Director: [
              {
                tag: "Danny Boyle"
              }
            ],
            Writer: [
              {
                tag: "Alex Garland"
              }
            ],
            Role: [
              {
                tag: "Cillian Murphy"
              },
              {
                tag: "Naomie Harris"
              },
              {
                tag: "Brendan Gleeson"
              }
            ]
          }
        ]
      }
    }

    validateResponseSpec(
      "/library/sections/{sectionKey}/{tag}",
      "get",
      200,
      response
    )
  })

  it("should validate the 200 response with type 4 and includeGuids queryParam when the API spec is valid", () => {
    // {{baseUrl}}/library/sections/1/all?type=4&includeGuids=1&includeMeta=1&X-Plex-Container-Start=1&X-Plex-Container-Size=5
    const response = {
      MediaContainer: {
        size: 10,
        totalSize: 3438,
        offset: 0,
        allowSync: true,
        art: "/:/resources/show-fanart.jpg",
        content: "secondary",
        identifier: "com.plexapp.plugins.library",
        librarySectionID: 2,
        librarySectionTitle: "TV Series ",
        librarySectionUUID: "c33ef369-636a-4ad7-b5a7-6e384aa87a14",
        mediaTagPrefix: "/system/bundle/media/flags/",
        mediaTagVersion: 1726069332,
        nocache: true,
        thumb: "/:/resources/show.png",
        title1: "TV Series ",
        title2: "All Shows",
        viewGroup: "show",
        Metadata: [
          {
            ratingKey: "45522",
            key: "/library/metadata/45522",
            parentRatingKey: "45521",
            grandparentRatingKey: "45520",
            guid: "plex://episode/5f68d2a93109960041ef8aed",
            parentGuid: "plex://season/602e7872c47d69002c8ce7b3",
            grandparentGuid: "plex://show/5e16253691c20300412003a8",
            grandparentSlug: "alice-in-borderland-2020",
            type: "episode",
            title: "Episode 1",
            grandparentKey: "/library/metadata/45520",
            parentKey: "/library/metadata/45521",
            grandparentTitle: "Alice in Borderland",
            parentTitle: "Season 1",
            originalTitle: "エピソード１",
            contentRating: "TV-MA",
            summary:
              "Arisu and his friends run into a public bathroom to hide from the police, but when they reemerge, the streets of Tokyo are suddenly completely empty.",
            index: 1,
            parentIndex: 1,
            audienceRating: 6.9,
            viewCount: 1,
            lastViewedAt: 1633889060,
            year: 2020,
            thumb: "/library/metadata/45522/thumb/1633811171",
            art: "/library/metadata/45520/art/1724304813",
            parentThumb: "/library/metadata/45521/thumb/1644710589",
            grandparentThumb: "/library/metadata/45520/thumb/1724304813",
            grandparentArt: "/library/metadata/45520/art/1724304813",
            duration: 2911520,
            originallyAvailableAt: "2020-12-10",
            addedAt: 1633811171,
            audienceRatingImage: "themoviedb://image.rating",
            Media: [
              {
                id: 49519,
                duration: 2911520,
                bitrate: 11961,
                width: 3840,
                height: 2160,
                aspectRatio: 1.78,
                audioChannels: 6,
                audioCodec: "eac3",
                videoCodec: "hevc",
                videoResolution: "4k",
                container: "mkv",
                videoFrameRate: "24p",
                videoProfile: "main 10",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 78862,
                    key: "/library/parts/78862/1644697576/file.mkv",
                    duration: 2911520,
                    file: "/TV Shows/Alice in Borderland (2020)/Season 01/Alice in Borderland (2020) - S01E01 - Episode 1 WEBDL-2160p.mkv",
                    size: 4354485068,
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "main 10"
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Episode 1",
                type: "coverPoster",
                url: "/library/metadata/45521/thumb/1644710589"
              },
              {
                alt: "Episode 1",
                type: "snapshot",
                url: "/library/metadata/45522/thumb/1633811171"
              },
              {
                alt: "Episode 1",
                type: "background",
                url: "/library/metadata/45520/art/1724304813"
              }
            ],
            UltraBlurColors: {
              topLeft: "11333b",
              topRight: "0a232d",
              bottomRight: "073958",
              bottomLeft: "1f5066"
            },
            Guid: [
              {
                id: "imdb://tt13015952"
              },
              {
                id: "tmdb://2434012"
              },
              {
                id: "tvdb://7945991"
              }
            ],
            Director: [
              {
                tag: "Shinsuke Sato"
              }
            ],
            Writer: [
              {
                tag: "Yoshiki Watabe"
              },
              {
                tag: "Yasuko Kuramitsu"
              }
            ]
          },
          {
            ratingKey: "45530",
            key: "/library/metadata/45530",
            parentRatingKey: "45521",
            grandparentRatingKey: "45520",
            guid: "plex://episode/5fc977a559365b002fe74016",
            parentGuid: "plex://season/602e7872c47d69002c8ce7b3",
            grandparentGuid: "plex://show/5e16253691c20300412003a8",
            grandparentSlug: "alice-in-borderland-2020",
            type: "episode",
            title: "Episode 2",
            grandparentKey: "/library/metadata/45520",
            parentKey: "/library/metadata/45521",
            grandparentTitle: "Alice in Borderland",
            parentTitle: "Season 1",
            originalTitle: "エピソード２",
            contentRating: "TV-MA",
            summary:
              "Leaving an injured Chota, Arisu and Karube head out to gain more experience. They come to a sprawling apartment, where a deadly game of tag awaits.",
            index: 2,
            parentIndex: 1,
            audienceRating: 7.6,
            viewCount: 1,
            lastViewedAt: 1633892225,
            year: 2020,
            thumb: "/library/metadata/45530/thumb/1633811716",
            art: "/library/metadata/45520/art/1724304813",
            parentThumb: "/library/metadata/45521/thumb/1644710589",
            grandparentThumb: "/library/metadata/45520/thumb/1724304813",
            grandparentArt: "/library/metadata/45520/art/1724304813",
            duration: 3039776,
            originallyAvailableAt: "2020-12-10",
            addedAt: 1633811716,
            audienceRatingImage: "themoviedb://image.rating",
            Media: [
              {
                id: 49521,
                duration: 3039776,
                bitrate: 12046,
                width: 3840,
                height: 2160,
                aspectRatio: 1.78,
                audioChannels: 6,
                audioCodec: "eac3",
                videoCodec: "hevc",
                videoResolution: "4k",
                container: "mkv",
                videoFrameRate: "24p",
                videoProfile: "main 10",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 78864,
                    key: "/library/parts/78864/1644721302/file.mkv",
                    duration: 3039776,
                    file: "/TV Shows/Alice in Borderland (2020)/Season 01/Alice in Borderland (2020) - S01E02 - Episode 2 WEBDL-2160p.mkv",
                    size: 4578487305,
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "main 10"
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Episode 2",
                type: "coverPoster",
                url: "/library/metadata/45521/thumb/1644710589"
              },
              {
                alt: "Episode 2",
                type: "snapshot",
                url: "/library/metadata/45530/thumb/1633811716"
              },
              {
                alt: "Episode 2",
                type: "background",
                url: "/library/metadata/45520/art/1724304813"
              }
            ],
            UltraBlurColors: {
              topLeft: "113337",
              topRight: "184149",
              bottomRight: "12343c",
              bottomLeft: "0e4751"
            },
            Guid: [
              {
                id: "imdb://tt13618826"
              },
              {
                id: "tmdb://2552012"
              },
              {
                id: "tvdb://8073634"
              }
            ],
            Director: [
              {
                tag: "Shinsuke Sato"
              }
            ],
            Writer: [
              {
                tag: "Yoshiki Watabe"
              },
              {
                tag: "Yasuko Kuramitsu"
              }
            ],
            Role: [
              {
                tag: "Kanon Hanakage"
              },
              {
                tag: "Chigusa Yasuzawa"
              },
              {
                tag: "Riku Matsuda"
              }
            ]
          },
          {
            ratingKey: "45523",
            key: "/library/metadata/45523",
            parentRatingKey: "45521",
            grandparentRatingKey: "45520",
            guid: "plex://episode/5fc977a759365b002fe7402e",
            parentGuid: "plex://season/602e7872c47d69002c8ce7b3",
            grandparentGuid: "plex://show/5e16253691c20300412003a8",
            grandparentSlug: "alice-in-borderland-2020",
            type: "episode",
            title: "Episode 3",
            grandparentKey: "/library/metadata/45520",
            parentKey: "/library/metadata/45521",
            grandparentTitle: "Alice in Borderland",
            parentTitle: "Season 1",
            originalTitle: "エピソード３",
            contentRating: "TV-MA",
            summary:
              "With Chota and Shibuki’s visas fast expiring, the four enter a vast botanical garden in Shinjuku, where they take part in a cruel game of betrayal.",
            index: 3,
            parentIndex: 1,
            audienceRating: 7.6,
            viewCount: 1,
            lastViewedAt: 1643663885,
            year: 2020,
            thumb: "/library/metadata/45523/thumb/1633811541",
            art: "/library/metadata/45520/art/1724304813",
            parentThumb: "/library/metadata/45521/thumb/1644710589",
            grandparentThumb: "/library/metadata/45520/thumb/1724304813",
            grandparentArt: "/library/metadata/45520/art/1724304813",
            duration: 2549024,
            originallyAvailableAt: "2020-12-10",
            addedAt: 1633811541,
            audienceRatingImage: "themoviedb://image.rating",
            Media: [
              {
                id: 49520,
                duration: 2549024,
                bitrate: 11992,
                width: 3840,
                height: 2160,
                aspectRatio: 1.78,
                audioChannels: 6,
                audioCodec: "eac3",
                videoCodec: "hevc",
                videoResolution: "4k",
                container: "mkv",
                videoFrameRate: "24p",
                videoProfile: "main 10",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 78863,
                    key: "/library/parts/78863/1644721444/file.mkv",
                    duration: 2549024,
                    file: "/TV Shows/Alice in Borderland (2020)/Season 01/Alice in Borderland (2020) - S01E03 - Episode 3 WEBDL-2160p.mkv",
                    size: 3821961043,
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "main 10"
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Episode 3",
                type: "coverPoster",
                url: "/library/metadata/45521/thumb/1644710589"
              },
              {
                alt: "Episode 3",
                type: "snapshot",
                url: "/library/metadata/45523/thumb/1633811541"
              },
              {
                alt: "Episode 3",
                type: "background",
                url: "/library/metadata/45520/art/1724304813"
              }
            ],
            UltraBlurColors: {
              topLeft: "043344",
              topRight: "031b1a",
              bottomRight: "8f4524",
              bottomLeft: "174453"
            },
            Guid: [
              {
                id: "imdb://tt13618828"
              },
              {
                id: "tmdb://2552013"
              },
              {
                id: "tvdb://8073638"
              }
            ],
            Director: [
              {
                tag: "Shinsuke Sato"
              }
            ],
            Writer: [
              {
                tag: "Yoshiki Watabe"
              },
              {
                tag: "Yasuko Kuramitsu"
              }
            ],
            Role: [
              {
                tag: "Yuya Matsuura"
              },
              {
                tag: "Chizuko Akiba"
              },
              {
                tag: "Tetsuya Nakanishi"
              }
            ]
          },
          {
            ratingKey: "45531",
            key: "/library/metadata/45531",
            parentRatingKey: "45521",
            grandparentRatingKey: "45520",
            guid: "plex://episode/5fc977a859365b002fe74031",
            parentGuid: "plex://season/602e7872c47d69002c8ce7b3",
            grandparentGuid: "plex://show/5e16253691c20300412003a8",
            grandparentSlug: "alice-in-borderland-2020",
            type: "episode",
            title: "Episode 4",
            grandparentKey: "/library/metadata/45520",
            parentKey: "/library/metadata/45521",
            grandparentTitle: "Alice in Borderland",
            parentTitle: "Season 1",
            originalTitle: "エピソード４",
            contentRating: "TV-MA",
            summary:
              "Arisu is overwhelmed with guilt and ready to give up, but Usagi urges him to keep going. Next up is a game of endurance in an underground highway.",
            index: 4,
            parentIndex: 1,
            audienceRating: 7.2,
            year: 2020,
            thumb: "/library/metadata/45531/thumb/1633811716",
            art: "/library/metadata/45520/art/1724304813",
            parentThumb: "/library/metadata/45521/thumb/1644710589",
            grandparentThumb: "/library/metadata/45520/thumb/1724304813",
            grandparentArt: "/library/metadata/45520/art/1724304813",
            duration: 2829344,
            originallyAvailableAt: "2020-12-10",
            addedAt: 1633811716,
            audienceRatingImage: "themoviedb://image.rating",
            Media: [
              {
                id: 49522,
                duration: 2829344,
                bitrate: 12036,
                width: 3840,
                height: 2160,
                aspectRatio: 1.78,
                audioChannels: 6,
                audioCodec: "eac3",
                videoCodec: "hevc",
                videoResolution: "4k",
                container: "mkv",
                videoFrameRate: "24p",
                videoProfile: "main 10",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 78865,
                    key: "/library/parts/78865/1644698196/file.mkv",
                    duration: 2829344,
                    file: "/TV Shows/Alice in Borderland (2020)/Season 01/Alice in Borderland (2020) - S01E04 - Episode 4 WEBDL-2160p.mkv",
                    size: 4257792611,
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "main 10"
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Episode 4",
                type: "coverPoster",
                url: "/library/metadata/45521/thumb/1644710589"
              },
              {
                alt: "Episode 4",
                type: "snapshot",
                url: "/library/metadata/45531/thumb/1633811716"
              },
              {
                alt: "Episode 4",
                type: "background",
                url: "/library/metadata/45520/art/1724304813"
              }
            ],
            UltraBlurColors: {
              topLeft: "0c3435",
              topRight: "7c531b",
              bottomRight: "24280d",
              bottomLeft: "275e58"
            },
            Guid: [
              {
                id: "imdb://tt13618830"
              },
              {
                id: "tmdb://2552014"
              },
              {
                id: "tvdb://8073641"
              }
            ],
            Director: [
              {
                tag: "Shinsuke Sato"
              }
            ],
            Writer: [
              {
                tag: "Yoshiki Watabe"
              },
              {
                tag: "Yasuko Kuramitsu"
              }
            ],
            Role: [
              {
                tag: "Kazuma Sano"
              },
              {
                tag: "Kazuma Yamane"
              },
              {
                tag: "Yusuke Hirayama"
              }
            ]
          },
          {
            ratingKey: "45524",
            key: "/library/metadata/45524",
            parentRatingKey: "45521",
            grandparentRatingKey: "45520",
            guid: "plex://episode/5fc977a859365b002fe74034",
            parentGuid: "plex://season/602e7872c47d69002c8ce7b3",
            grandparentGuid: "plex://show/5e16253691c20300412003a8",
            grandparentSlug: "alice-in-borderland-2020",
            type: "episode",
            title: "Episode 5",
            grandparentKey: "/library/metadata/45520",
            parentKey: "/library/metadata/45521",
            grandparentTitle: "Alice in Borderland",
            parentTitle: "Season 1",
            originalTitle: "エピソード５",
            contentRating: "TV-MA",
            summary:
              "After Arisu and Usagi find their way to the Beach, the king of the so-called utopian haven forces them to help gather the remaining playing cards.",
            index: 5,
            parentIndex: 1,
            audienceRating: 6.7,
            year: 2020,
            thumb: "/library/metadata/45524/thumb/1644710590",
            art: "/library/metadata/45520/art/1724304813",
            parentThumb: "/library/metadata/45521/thumb/1644710589",
            grandparentThumb: "/library/metadata/45520/thumb/1724304813",
            grandparentArt: "/library/metadata/45520/art/1724304813",
            duration: 3101600,
            originallyAvailableAt: "2020-12-10",
            addedAt: 1633811541,
            updatedAt: 1644710590,
            audienceRatingImage: "themoviedb://image.rating",
            Media: [
              {
                id: 49512,
                duration: 3101600,
                bitrate: 11733,
                width: 3840,
                height: 2160,
                aspectRatio: 1.78,
                audioChannels: 6,
                audioCodec: "eac3",
                videoCodec: "hevc",
                videoResolution: "4k",
                container: "mkv",
                videoFrameRate: "24p",
                videoProfile: "main 10",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 78855,
                    key: "/library/parts/78855/1644697248/file.mkv",
                    duration: 3101600,
                    file: "/TV Shows/Alice in Borderland (2020)/Season 01/Alice in Borderland (2020) - S01E05 - Episode 5 WEBDL-2160p.mkv",
                    size: 4550234744,
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "main 10"
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Episode 5",
                type: "coverPoster",
                url: "/library/metadata/45521/thumb/1644710589"
              },
              {
                alt: "Episode 5",
                type: "snapshot",
                url: "/library/metadata/45524/thumb/1644710590"
              },
              {
                alt: "Episode 5",
                type: "background",
                url: "/library/metadata/45520/art/1724304813"
              }
            ],
            UltraBlurColors: {
              topLeft: "3f1a10",
              topRight: "5b2817",
              bottomRight: "54271a",
              bottomLeft: "161313"
            },
            Guid: [
              {
                id: "imdb://tt13618832"
              },
              {
                id: "tmdb://2552015"
              },
              {
                id: "tvdb://8073643"
              }
            ],
            Director: [
              {
                tag: "Shinsuke Sato"
              }
            ],
            Writer: [
              {
                tag: "Yoshiki Watabe"
              },
              {
                tag: "Yasuko Kuramitsu"
              }
            ],
            Role: [
              {
                tag: "Natsumi Eto"
              },
              {
                tag: "Masato Ijiri"
              },
              {
                tag: "Yua Fuwari"
              }
            ]
          },
          {
            ratingKey: "45525",
            key: "/library/metadata/45525",
            parentRatingKey: "45521",
            grandparentRatingKey: "45520",
            guid: "plex://episode/5fc977a859365b002fe74035",
            parentGuid: "plex://season/602e7872c47d69002c8ce7b3",
            grandparentGuid: "plex://show/5e16253691c20300412003a8",
            grandparentSlug: "alice-in-borderland-2020",
            type: "episode",
            title: "Episode 6",
            grandparentKey: "/library/metadata/45520",
            parentKey: "/library/metadata/45521",
            grandparentTitle: "Alice in Borderland",
            parentTitle: "Season 1",
            originalTitle: "エピソード６",
            contentRating: "TV-MA",
            summary:
              "Chishiya recruits Arisu and Usagi to help him change the status quo. An unforeseen event rocks the fragile power dynamics of the Beach.",
            index: 6,
            parentIndex: 1,
            audienceRating: 7.3,
            year: 2020,
            thumb: "/library/metadata/45525/thumb/1633811541",
            art: "/library/metadata/45520/art/1724304813",
            parentThumb: "/library/metadata/45521/thumb/1644710589",
            grandparentThumb: "/library/metadata/45520/thumb/1724304813",
            grandparentArt: "/library/metadata/45520/art/1724304813",
            duration: 2492960,
            originallyAvailableAt: "2020-12-10",
            addedAt: 1633811541,
            audienceRatingImage: "themoviedb://image.rating",
            Media: [
              {
                id: 49523,
                duration: 2492960,
                bitrate: 11946,
                width: 3840,
                height: 2160,
                aspectRatio: 1.78,
                audioChannels: 6,
                audioCodec: "eac3",
                videoCodec: "hevc",
                videoResolution: "4k",
                container: "mkv",
                videoFrameRate: "24p",
                videoProfile: "main 10",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 78866,
                    key: "/library/parts/78866/1644698881/file.mkv",
                    duration: 2492960,
                    file: "/TV Shows/Alice in Borderland (2020)/Season 01/Alice in Borderland (2020) - S01E06 - Episode 6 WEBDL-2160p.mkv",
                    size: 3723808490,
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "main 10"
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Episode 6",
                type: "coverPoster",
                url: "/library/metadata/45521/thumb/1644710589"
              },
              {
                alt: "Episode 6",
                type: "snapshot",
                url: "/library/metadata/45525/thumb/1633811541"
              },
              {
                alt: "Episode 6",
                type: "background",
                url: "/library/metadata/45520/art/1724304813"
              }
            ],
            UltraBlurColors: {
              topLeft: "093242",
              topRight: "045474",
              bottomRight: "2b6776",
              bottomLeft: "2c6679"
            },
            Guid: [
              {
                id: "imdb://tt13618834"
              },
              {
                id: "tmdb://2552016"
              },
              {
                id: "tvdb://8073645"
              }
            ],
            Director: [
              {
                tag: "Shinsuke Sato"
              }
            ],
            Writer: [
              {
                tag: "Yoshiki Watabe"
              },
              {
                tag: "Yasuko Kuramitsu"
              }
            ],
            Role: [
              {
                tag: "Daisuke Suzuki"
              },
              {
                tag: "Haro Aso"
              },
              {
                tag: "Takumi Iwasaka"
              }
            ]
          },
          {
            ratingKey: "45539",
            key: "/library/metadata/45539",
            parentRatingKey: "45521",
            grandparentRatingKey: "45520",
            guid: "plex://episode/5fc977a959365b002fe74039",
            parentGuid: "plex://season/602e7872c47d69002c8ce7b3",
            grandparentGuid: "plex://show/5e16253691c20300412003a8",
            grandparentSlug: "alice-in-borderland-2020",
            type: "episode",
            title: "Episode 7",
            grandparentKey: "/library/metadata/45520",
            parentKey: "/library/metadata/45521",
            grandparentTitle: "Alice in Borderland",
            parentTitle: "Season 1",
            originalTitle: "エピソード７",
            contentRating: "TV-MA",
            summary:
              "Once a safe haven, the Beach becomes the arena for the next stage, where an epic witch hunt turns everyone against each other in a hostile showdown.",
            index: 7,
            parentIndex: 1,
            audienceRating: 7.7,
            year: 2020,
            thumb: "/library/metadata/45539/thumb/1633812575",
            art: "/library/metadata/45520/art/1724304813",
            parentThumb: "/library/metadata/45521/thumb/1644710589",
            grandparentThumb: "/library/metadata/45520/thumb/1724304813",
            grandparentArt: "/library/metadata/45520/art/1724304813",
            duration: 2893472,
            originallyAvailableAt: "2020-12-10",
            addedAt: 1633812575,
            audienceRatingImage: "themoviedb://image.rating",
            Media: [
              {
                id: 49524,
                duration: 2893472,
                bitrate: 12077,
                width: 3840,
                height: 2160,
                aspectRatio: 1.78,
                audioChannels: 6,
                audioCodec: "eac3",
                videoCodec: "hevc",
                videoResolution: "4k",
                container: "mkv",
                videoFrameRate: "24p",
                videoProfile: "main 10",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 78867,
                    key: "/library/parts/78867/1644698863/file.mkv",
                    duration: 2893472,
                    file: "/TV Shows/Alice in Borderland (2020)/Season 01/Alice in Borderland (2020) - S01E07 - Episode 7 WEBDL-2160p.mkv",
                    size: 4369277863,
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "main 10"
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Episode 7",
                type: "coverPoster",
                url: "/library/metadata/45521/thumb/1644710589"
              },
              {
                alt: "Episode 7",
                type: "snapshot",
                url: "/library/metadata/45539/thumb/1633812575"
              },
              {
                alt: "Episode 7",
                type: "background",
                url: "/library/metadata/45520/art/1724304813"
              }
            ],
            UltraBlurColors: {
              topLeft: "4a1f17",
              topRight: "7e3f15",
              bottomRight: "7c2b07",
              bottomLeft: "8a4422"
            },
            Guid: [
              {
                id: "imdb://tt13618836"
              },
              {
                id: "tmdb://2552017"
              },
              {
                id: "tvdb://8073647"
              }
            ],
            Director: [
              {
                tag: "Shinsuke Sato"
              }
            ],
            Writer: [
              {
                tag: "Yoshiki Watabe"
              },
              {
                tag: "Yasuko Kuramitsu"
              }
            ],
            Role: [
              {
                tag: "Shohei Abe"
              },
              {
                tag: "Kosuke Kubota"
              },
              {
                tag: "Yukina Fukushima"
              }
            ]
          },
          {
            ratingKey: "45526",
            key: "/library/metadata/45526",
            parentRatingKey: "45521",
            grandparentRatingKey: "45520",
            guid: "plex://episode/5fc977aa59365b002fe7403b",
            parentGuid: "plex://season/602e7872c47d69002c8ce7b3",
            grandparentGuid: "plex://show/5e16253691c20300412003a8",
            grandparentSlug: "alice-in-borderland-2020",
            type: "episode",
            title: "Episode 8",
            grandparentKey: "/library/metadata/45520",
            parentKey: "/library/metadata/45521",
            grandparentTitle: "Alice in Borderland",
            parentTitle: "Season 1",
            originalTitle: "エピソード８",
            contentRating: "TV-MA",
            summary:
              "Tensions inside the resort reach a boiling point. As the game clock nears zero, those who’ve survived the onslaught now face an uncertain future.",
            index: 8,
            parentIndex: 1,
            audienceRating: 8.4,
            year: 2020,
            thumb: "/library/metadata/45526/thumb/1633811541",
            art: "/library/metadata/45520/art/1724304813",
            parentThumb: "/library/metadata/45521/thumb/1644710589",
            grandparentThumb: "/library/metadata/45520/thumb/1724304813",
            grandparentArt: "/library/metadata/45520/art/1724304813",
            duration: 3175712,
            originallyAvailableAt: "2020-12-10",
            addedAt: 1633811541,
            audienceRatingImage: "themoviedb://image.rating",
            Media: [
              {
                id: 49516,
                duration: 3175712,
                bitrate: 11974,
                width: 3840,
                height: 2160,
                aspectRatio: 1.78,
                audioChannels: 6,
                audioCodec: "eac3",
                videoCodec: "hevc",
                videoResolution: "4k",
                container: "mkv",
                videoFrameRate: "24p",
                videoProfile: "main 10",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 78859,
                    key: "/library/parts/78859/1644697257/file.mkv",
                    duration: 3175712,
                    file: "/TV Shows/Alice in Borderland (2020)/Season 01/Alice in Borderland (2020) - S01E08 - Episode 8 WEBDL-2160p.mkv",
                    size: 4754593020,
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "main 10"
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Episode 8",
                type: "coverPoster",
                url: "/library/metadata/45521/thumb/1644710589"
              },
              {
                alt: "Episode 8",
                type: "snapshot",
                url: "/library/metadata/45526/thumb/1633811541"
              },
              {
                alt: "Episode 8",
                type: "background",
                url: "/library/metadata/45520/art/1724304813"
              }
            ],
            UltraBlurColors: {
              topLeft: "402809",
              topRight: "704817",
              bottomRight: "764e11",
              bottomLeft: "481f0b"
            },
            Guid: [
              {
                id: "imdb://tt13618838"
              },
              {
                id: "tmdb://2552018"
              },
              {
                id: "tvdb://8073649"
              }
            ],
            Director: [
              {
                tag: "Shinsuke Sato"
              }
            ],
            Writer: [
              {
                tag: "Yoshiki Watabe"
              },
              {
                tag: "Yasuko Kuramitsu"
              }
            ],
            Role: [
              {
                tag: "Kina Yazaki"
              },
              {
                tag: "Kento Shibuya"
              },
              {
                tag: "Takashi Kitadai"
              }
            ]
          },
          {
            ratingKey: "48049",
            key: "/library/metadata/48049",
            parentRatingKey: "48047",
            grandparentRatingKey: "45520",
            guid: "plex://episode/6332ef1e8848240ba522f9df",
            parentGuid: "plex://season/618b89208dde18df707ad15c",
            grandparentGuid: "plex://show/5e16253691c20300412003a8",
            grandparentSlug: "alice-in-borderland-2020",
            type: "episode",
            title: "Episode 1",
            grandparentKey: "/library/metadata/45520",
            parentKey: "/library/metadata/48047",
            grandparentTitle: "Alice in Borderland",
            parentTitle: "Season 2",
            originalTitle: "Alice in Borderland (2020)",
            contentRating: "TV-MA",
            summary:
              "Arisu, Usagi, Kuina and Chishiya have been waiting for over an hour in Shibuya crossing for the next stage to start, but nothing seems to be happening.",
            index: 1,
            parentIndex: 2,
            audienceRating: 9.2,
            year: 2020,
            thumb: "/library/metadata/48049/thumb/1672202197",
            art: "/library/metadata/45520/art/1724304813",
            parentThumb: "/library/metadata/48047/thumb/1671800243",
            grandparentThumb: "/library/metadata/45520/thumb/1724304813",
            grandparentArt: "/library/metadata/45520/art/1724304813",
            duration: 2915744,
            originallyAvailableAt: "2022-12-22",
            addedAt: 1671801218,
            updatedAt: 1672202197,
            audienceRatingImage: "themoviedb://image.rating",
            chapterSource: "media",
            Media: [
              {
                id: 51375,
                duration: 2915744,
                bitrate: 6109,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 6,
                audioCodec: "eac3",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "24p",
                videoProfile: "main",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 80750,
                    key: "/library/parts/80750/1671790200/file.mkv",
                    duration: 2915744,
                    file: "/TV Shows/Alice in Borderland (2020)/Season 02/Alice in Borderland (2020) - S02E01 - Episode 1 WEBDL-1080p.mkv",
                    size: 2227846737,
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "main"
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Episode 1",
                type: "coverPoster",
                url: "/library/metadata/48047/thumb/1671800243"
              },
              {
                alt: "Episode 1",
                type: "snapshot",
                url: "/library/metadata/48049/thumb/1672202197"
              },
              {
                alt: "Episode 1",
                type: "background",
                url: "/library/metadata/45520/art/1724304813"
              }
            ],
            UltraBlurColors: {
              topLeft: "1a1d1a",
              topRight: "030403",
              bottomRight: "90423a",
              bottomLeft: "0f2c39"
            },
            Guid: [
              {
                id: "imdb://tt13702212"
              },
              {
                id: "tmdb://3975867"
              },
              {
                id: "tvdb://8830735"
              }
            ]
          },
          {
            ratingKey: "48050",
            key: "/library/metadata/48050",
            parentRatingKey: "48047",
            grandparentRatingKey: "45520",
            guid: "plex://episode/63853f646063789db0efe845",
            parentGuid: "plex://season/618b89208dde18df707ad15c",
            grandparentGuid: "plex://show/5e16253691c20300412003a8",
            grandparentSlug: "alice-in-borderland-2020",
            type: "episode",
            title: "Episode 2",
            grandparentKey: "/library/metadata/45520",
            parentKey: "/library/metadata/48047",
            grandparentTitle: "Alice in Borderland",
            parentTitle: "Season 2",
            originalTitle: "Alice in Borderland (2020)",
            contentRating: "TV-MA",
            summary:
              "Now that the King of Clubs has revealed himself in his full glory, the game finally begins. Much to Arisu's surprise, things are going pretty well.",
            index: 2,
            parentIndex: 2,
            audienceRating: 8.0,
            year: 2020,
            thumb: "/library/metadata/48050/thumb/1672202197",
            art: "/library/metadata/45520/art/1724304813",
            parentThumb: "/library/metadata/48047/thumb/1671800243",
            grandparentThumb: "/library/metadata/45520/thumb/1724304813",
            grandparentArt: "/library/metadata/45520/art/1724304813",
            duration: 3616544,
            originallyAvailableAt: "2022-12-22",
            addedAt: 1671801219,
            updatedAt: 1672202197,
            audienceRatingImage: "themoviedb://image.rating",
            chapterSource: "media",
            Media: [
              {
                id: 51376,
                duration: 3616544,
                bitrate: 6188,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 6,
                audioCodec: "eac3",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "24p",
                videoProfile: "main",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 80751,
                    key: "/library/parts/80751/1671790197/file.mkv",
                    duration: 3616544,
                    file: "/TV Shows/Alice in Borderland (2020)/Season 02/Alice in Borderland (2020) - S02E02 - Episode 2 WEBDL-1080p.mkv",
                    size: 2799175661,
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "main"
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Episode 2",
                type: "coverPoster",
                url: "/library/metadata/48047/thumb/1671800243"
              },
              {
                alt: "Episode 2",
                type: "snapshot",
                url: "/library/metadata/48050/thumb/1672202197"
              },
              {
                alt: "Episode 2",
                type: "background",
                url: "/library/metadata/45520/art/1724304813"
              }
            ],
            UltraBlurColors: {
              topLeft: "123240",
              topRight: "91413e",
              bottomRight: "753230",
              bottomLeft: "91413d"
            },
            Guid: [
              {
                id: "imdb://tt22865046"
              },
              {
                id: "tmdb://4110585"
              },
              {
                id: "tvdb://9476213"
              }
            ]
          }
        ]
      }
    }

    validateResponseSpec(
      "/library/sections/{sectionKey}/{tag}",
      "get",
      200,
      response
    )
  })
})
