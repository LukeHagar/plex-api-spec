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
    // {{baseUrl}}/library/sections/1/all?includeGuids=1&includeMeta=1&X-Plex-Container-Start=1&X-Plex-Container-Size=5
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
})
