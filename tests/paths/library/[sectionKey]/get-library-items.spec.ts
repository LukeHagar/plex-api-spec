import { validateResponseSpec } from "@utils"
import { describe, it } from "vitest"

describe("GET /library/sections", () => {
  it("should validate the 200 response without includeGuids and includeMeta queryParam when the API spec is valid", () => {
    // Response from the API endpoint
    // Thu, 19 Sep 2024 12:08:46 GMT
    // {{baseUrl}}/library/sections/1/all?X-Plex-Container-Start=1&X-Plex-Container-Size=5
    const response = {
      MediaContainer: {
        size: 10,
        totalSize: 358,
        offset: 0,
        allowSync: true,
        art: "/:/resources/movie-fanart.jpg",
        content: "secondary",
        identifier: "com.plexapp.plugins.library",
        librarySectionID: 1,
        librarySectionTitle: "Movies",
        librarySectionUUID: "0e71027d-88bc-4413-9927-5aad992d3d19",
        mediaTagPrefix: "/system/bundle/media/flags/",
        mediaTagVersion: 1726069332,
        thumb: "/:/resources/movie.png",
        title1: "Movies",
        title2: "All Movies",
        viewGroup: "movie",
        Metadata: [
          {
            ratingKey: "28550",
            key: "/library/metadata/28550",
            guid: "plex://movie/5d776841103a2d001f56a97b",
            slug: "4-for-texas",
            studio: "The Sam Company",
            type: "movie",
            title: "4 for Texas",
            contentRating: "nl/14",
            summary:
              "In the 1870s, two rival businessmen, Zack Thomas and Joe Jarrett, on a stagecoach heading to Galveston, Texas, must pull together to protect $100,000 from an outlaw named Matson. Once in Galveston, however, their rivalry continues, as Thomas joins up with Elya Carlson and Jarret with Maxine Richter. But Matson is still on the loose, and a scheming banker threatens both Thomas and Jarrett.",
            rating: 1.1,
            audienceRating: 3.7,
            year: 1963,
            tagline: "The far out story of the far west",
            thumb: "/library/metadata/28550/thumb/1719370467",
            art: "/library/metadata/28550/art/1719370467",
            duration: 6908735,
            originallyAvailableAt: "1963-12-21",
            addedAt: 1586886369,
            updatedAt: 1719370467,
            audienceRatingImage: "rottentomatoes://image.rating.spilled",
            ratingImage: "rottentomatoes://image.rating.rotten",
            Media: [
              {
                id: 31687,
                duration: 6908735,
                bitrate: 1694,
                width: 640,
                height: 368,
                aspectRatio: 1.78,
                audioChannels: 1,
                audioCodec: "ac3",
                videoCodec: "mpeg4",
                videoResolution: "sd",
                container: "avi",
                videoFrameRate: "24p",
                videoProfile: "advanced simple",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 47070,
                    key: "/library/parts/47070/1586877036/file.avi",
                    duration: 6908735,
                    file: "/Movies/4 for Texas (1963)/4 for Texas (1963).avi",
                    size: 1468592128,
                    container: "avi",
                    indexes: "sd",
                    videoProfile: "advanced simple"
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "4 for Texas",
                type: "coverPoster",
                url: "/library/metadata/28550/thumb/1719370467"
              },
              {
                alt: "4 for Texas",
                type: "background",
                url: "/library/metadata/28550/art/1719370467"
              }
            ],
            UltraBlurColors: {
              topLeft: "0b0b0b",
              topRight: "232222",
              bottomRight: "030403",
              bottomLeft: "101110"
            },
            Genre: [
              {
                tag: "Comedy"
              },
              {
                tag: "Western"
              }
            ],
            Country: [
              {
                tag: "United States of America"
              }
            ],
            Director: [
              {
                tag: "Robert Aldrich"
              }
            ],
            Writer: [
              {
                tag: "W.R. Burnett"
              }
            ],
            Role: [
              {
                tag: "Frank Sinatra"
              },
              {
                tag: "Dean Martin"
              },
              {
                tag: "Anita Ekberg"
              }
            ]
          },
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
            thumb: "/library/metadata/9881/thumb/1726724715",
            art: "/library/metadata/9881/art/1726724715",
            duration: 7011007,
            originallyAvailableAt: "1986-02-09",
            addedAt: 1560801795,
            updatedAt: 1726724715,
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
                hasVoiceActivity: false,
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
            Image: [
              {
                alt: "9½ Weeks",
                type: "coverPoster",
                url: "/library/metadata/9881/thumb/1726724715"
              },
              {
                alt: "9½ Weeks",
                type: "background",
                url: "/library/metadata/9881/art/1726724715"
              },
              {
                alt: "9½ Weeks",
                type: "clearLogo",
                url: "/library/metadata/9881/clearLogo/1726724715"
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
            thumb: "/library/metadata/20936/thumb/1726724759",
            art: "/library/metadata/20936/art/1726724759",
            duration: 6535680,
            originallyAvailableAt: "2008-03-05",
            addedAt: 1558940057,
            updatedAt: 1726724759,
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
                hasVoiceActivity: false,
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
            Image: [
              {
                alt: "10,000 BC",
                type: "coverPoster",
                url: "/library/metadata/20936/thumb/1726724759"
              },
              {
                alt: "10,000 BC",
                type: "background",
                url: "/library/metadata/20936/art/1726724759"
              },
              {
                alt: "10,000 BC",
                type: "clearLogo",
                url: "/library/metadata/20936/clearLogo/1726724759"
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
                tag: "Roland Emmerich"
              },
              {
                tag: "Harald Kloser"
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
                hasVoiceActivity: false,
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
            Image: [
              {
                alt: "22 July",
                type: "coverPoster",
                url: "/library/metadata/47175/thumb/1721705174"
              },
              {
                alt: "22 July",
                type: "background",
                url: "/library/metadata/47175/art/1721705174"
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
                hasVoiceActivity: false,
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
            Image: [
              {
                alt: "The 24 Hour War",
                type: "coverPoster",
                url: "/library/metadata/21488/thumb/1721967875"
              },
              {
                alt: "The 24 Hour War",
                type: "background",
                url: "/library/metadata/21488/art/1721967875"
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
                hasVoiceActivity: false,
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
            Image: [
              {
                alt: "28 Days Later",
                type: "coverPoster",
                url: "/library/metadata/21050/thumb/1721967834"
              },
              {
                alt: "28 Days Later",
                type: "background",
                url: "/library/metadata/21050/art/1721967834"
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
          },
          {
            ratingKey: "8535",
            key: "/library/metadata/8535",
            guid: "plex://movie/5d77682aeb5d26001f1de2ba",
            slug: "50-first-dates",
            studio: "Columbia Pictures",
            type: "movie",
            title: "50 First Dates",
            contentRating: "nl/6",
            summary:
              "Henry Roth is a man afraid of commitment until he meets the beautiful Lucy. They hit it off and Henry think he's finally found the girl of his dreams until discovering she has short-term memory loss and forgets him the next day.",
            rating: 4.5,
            audienceRating: 6.5,
            year: 2004,
            tagline:
              "Imagine having to win over the girl of your dreams... every friggin' day.",
            thumb: "/library/metadata/8535/thumb/1726724604",
            art: "/library/metadata/8535/art/1726724604",
            duration: 5943968,
            originallyAvailableAt: "2004-02-13",
            addedAt: 1558937609,
            updatedAt: 1726724604,
            audienceRatingImage: "rottentomatoes://image.rating.upright",
            ratingImage: "rottentomatoes://image.rating.rotten",
            Media: [
              {
                id: 10660,
                duration: 5943968,
                bitrate: 11481,
                width: 1920,
                height: 800,
                aspectRatio: 2.35,
                audioChannels: 6,
                audioCodec: "ac3",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "24p",
                videoProfile: "high",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 41925,
                    key: "/library/parts/41925/1207831515/file.mkv",
                    duration: 5943968,
                    file: "/Movies/50 First Dates (2004)/50.first.dates.2004.1080p.bluray.x264-wpi.mkv",
                    size: 8533075307,
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "high"
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "50 First Dates",
                type: "coverPoster",
                url: "/library/metadata/8535/thumb/1726724604"
              },
              {
                alt: "50 First Dates",
                type: "background",
                url: "/library/metadata/8535/art/1726724604"
              },
              {
                alt: "50 First Dates",
                type: "clearLogo",
                url: "/library/metadata/8535/clearLogo/1726724604"
              }
            ],
            UltraBlurColors: {
              topLeft: "123145",
              topRight: "8c341f",
              bottomRight: "842e1d",
              bottomLeft: "9f332e"
            },
            Genre: [
              {
                tag: "Comedy"
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
            Collection: [
              {
                tag: "Working NL Subs"
              }
            ],
            Director: [
              {
                tag: "Peter Segal"
              }
            ],
            Writer: [
              {
                tag: "George Wing"
              }
            ],
            Role: [
              {
                tag: "Adam Sandler"
              },
              {
                tag: "Drew Barrymore"
              },
              {
                tag: "Rob Schneider"
              }
            ]
          },
          {
            ratingKey: "20995",
            key: "/library/metadata/20995",
            guid: "plex://movie/5d77687d7e5fa10020bf080d",
            slug: "127-hours",
            studio: "Fox Searchlight Pictures",
            type: "movie",
            title: "127 Hours",
            contentRating: "nl/16",
            summary:
              "A mountain climber becomes trapped under a boulder while canyoneering alone near Moab, Utah and resorts to desperate measures in order to survive.",
            rating: 9.3,
            audienceRating: 8.5,
            skipCount: 1,
            year: 2011,
            tagline: "There is no force more powerful than the will to live.",
            thumb: "/library/metadata/20995/thumb/1721967796",
            art: "/library/metadata/20995/art/1721967796",
            duration: 5621696,
            originallyAvailableAt: "2011-01-06",
            addedAt: 1563639698,
            updatedAt: 1721967796,
            audienceRatingImage: "rottentomatoes://image.rating.upright",
            chapterSource: "media",
            ratingImage: "rottentomatoes://image.rating.ripe",
            Media: [
              {
                id: 21391,
                duration: 5621696,
                bitrate: 15196,
                width: 1920,
                height: 1040,
                aspectRatio: 1.85,
                audioChannels: 6,
                audioCodec: "ac3",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "24p",
                videoProfile: "high",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 41899,
                    key: "/library/parts/41899/1299056035/file.mkv",
                    duration: 5621696,
                    file: "/Movies/127 Hours (2010)/127.Hours.2010.1080p.BluRay.x264-EbP.mkv",
                    size: 10680320550,
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "high"
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "127 Hours",
                type: "coverPoster",
                url: "/library/metadata/20995/thumb/1721967796"
              },
              {
                alt: "127 Hours",
                type: "background",
                url: "/library/metadata/20995/art/1721967796"
              }
            ],
            UltraBlurColors: {
              topLeft: "48210a",
              topRight: "92440f",
              bottomRight: "7d330c",
              bottomLeft: "4f1904"
            },
            Genre: [
              {
                tag: "Drama"
              },
              {
                tag: "Adventure"
              }
            ],
            Country: [
              {
                tag: "France"
              },
              {
                tag: "United Kingdom"
              }
            ],
            Collection: [
              {
                tag: "Working NL Subs"
              }
            ],
            Director: [
              {
                tag: "Danny Boyle"
              }
            ],
            Writer: [
              {
                tag: "Danny Boyle"
              },
              {
                tag: "Simon Beaufoy"
              }
            ],
            Role: [
              {
                tag: "James Franco"
              },
              {
                tag: "Amber Tamblyn"
              },
              {
                tag: "Kate Mara"
              }
            ]
          },
          {
            ratingKey: "44645",
            key: "/library/metadata/44645",
            guid: "plex://movie/5d7768296f4521001ea99959",
            slug: "300",
            studio: "Virtual Studios",
            type: "movie",
            title: "300",
            contentRating: "nl/16",
            summary:
              "Based on Frank Miller's graphic novel, \"300\" is very loosely based the 480 B.C. Battle of Thermopylae, where the King of Sparta led his army against the advancing Persians; the battle is said to have inspired all of Greece to band together against the Persians, and helped usher in the world's first democracy.",
            rating: 6.1,
            audienceRating: 8.9,
            year: 2007,
            tagline: "Prepare for glory!",
            thumb: "/library/metadata/44645/thumb/1722057391",
            art: "/library/metadata/44645/art/1722057391",
            duration: 6998208,
            originallyAvailableAt: "2007-03-07",
            addedAt: 1628685751,
            updatedAt: 1722057391,
            audienceRatingImage: "rottentomatoes://image.rating.upright",
            chapterSource: "media",
            ratingImage: "rottentomatoes://image.rating.ripe",
            Media: [
              {
                id: 47012,
                duration: 6998208,
                bitrate: 64719,
                width: 3840,
                height: 2160,
                aspectRatio: 1.78,
                audioChannels: 8,
                audioCodec: "truehd",
                videoCodec: "hevc",
                videoResolution: "4k",
                container: "mkv",
                videoFrameRate: "24p",
                videoProfile: "main 10",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 76355,
                    key: "/library/parts/76355/1601695383/file.mkv",
                    duration: 6998208,
                    file: "/Movies/300 (2007)/300 (2007) Remux-2160p.mkv",
                    size: 56679095113,
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "main 10"
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "300",
                type: "coverPoster",
                url: "/library/metadata/44645/thumb/1722057391"
              },
              {
                alt: "300",
                type: "background",
                url: "/library/metadata/44645/art/1722057391"
              }
            ],
            UltraBlurColors: {
              topLeft: "280405",
              topRight: "0d0202",
              bottomRight: "7a312c",
              bottomLeft: "120303"
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
                tag: "Bulgaria"
              },
              {
                tag: "Canada"
              }
            ],
            Director: [
              {
                tag: "Zack Snyder"
              }
            ],
            Writer: [
              {
                tag: "Zack Snyder"
              },
              {
                tag: "Kurt Johnstad"
              }
            ],
            Role: [
              {
                tag: "Gerard Butler"
              },
              {
                tag: "Lena Headey"
              },
              {
                tag: "Dominic West"
              }
            ]
          },
          {
            ratingKey: "23922",
            key: "/library/metadata/23922",
            guid: "plex://movie/5d77682c8718ba001e312aee",
            slug: "1408",
            studio: "Dimension Films",
            type: "movie",
            title: "1408",
            contentRating: "nl/16",
            summary:
              "Author Michael Enslin specializes in debunking paranormal occurrences, checks into the fabled room 1408 in the Dolphin Hotel in New York City, settles in, and soon confronts genuine terror.",
            rating: 8.0,
            audienceRating: 6.1,
            viewCount: 1,
            lastViewedAt: 1563149090,
            year: 2007,
            tagline:
              "The Dolphin Hotel invites you to stay in any of its stunning rooms. Except one.",
            thumb: "/library/metadata/23922/thumb/1721967895",
            art: "/library/metadata/23922/art/1721967895",
            duration: 6746516,
            originallyAvailableAt: "2007-06-22",
            addedAt: 1575713145,
            updatedAt: 1721967895,
            audienceRatingImage: "rottentomatoes://image.rating.upright",
            chapterSource: "media",
            ratingImage: "rottentomatoes://image.rating.ripe",
            Media: [
              {
                id: 25705,
                duration: 6746516,
                bitrate: 17466,
                width: 1920,
                height: 800,
                aspectRatio: 2.35,
                audioChannels: 6,
                audioCodec: "dca",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "24p",
                audioProfile: "dts",
                videoProfile: "high",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 41711,
                    key: "/library/parts/41711/1563893631/file.mkv",
                    duration: 6746516,
                    file: "/Movies/1408 (2007)/1408.2007.Directors.Cut.Hybrid.1080p.BluRay.DTS.x264-VietHD.mkv",
                    size: 14732413639,
                    audioProfile: "dts",
                    container: "mkv",
                    hasThumbnail: "1",
                    indexes: "sd",
                    videoProfile: "high"
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "1408",
                type: "coverPoster",
                url: "/library/metadata/23922/thumb/1721967895"
              },
              {
                alt: "1408",
                type: "background",
                url: "/library/metadata/23922/art/1721967895"
              }
            ],
            UltraBlurColors: {
              topLeft: "4b1e0f",
              topRight: "4b1b0b",
              bottomRight: "602313",
              bottomLeft: "89381e"
            },
            Genre: [
              {
                tag: "Horror"
              },
              {
                tag: "Fantasy"
              }
            ],
            Country: [
              {
                tag: "United States of America"
              }
            ],
            Director: [
              {
                tag: "Mikael Håfström"
              }
            ],
            Writer: [
              {
                tag: "Matt Greenberg"
              },
              {
                tag: "Scott Alexander"
              }
            ],
            Role: [
              {
                tag: "John Cusack"
              },
              {
                tag: "Samuel L. Jackson"
              },
              {
                tag: "Mary McCormack"
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

  it("should validate the 200 response with type 2 and with includeGuids and includeMeta queryParam when the API spec is valid", () => {
    // {{baseUrl}}/library/sections/1/all?type=4&includeGuids=1&includeMeta=1&X-Plex-Container-Start=1&X-Plex-Container-Size=5
    const response = {
      MediaContainer: {
        size: 26,
        totalSize: 26,
        offset: 0,
        allowSync: true,
        art: "/:/resources/show-fanart.jpg",
        content: "secondary",
        identifier: "com.plexapp.plugins.library",
        librarySectionID: 3,
        librarySectionTitle: "Anime",
        librarySectionUUID: "96204dfc-eabd-4328-8186-8330fda0b888",
        mediaTagPrefix: "/system/bundle/media/flags/",
        mediaTagVersion: 1726069332,
        nocache: true,
        thumb: "/:/resources/show.png",
        title1: "Anime",
        title2: "All Shows",
        viewGroup: "show",
        Metadata: [
          {
            ratingKey: "28580",
            key: "/library/metadata/28580/children",
            guid: "com.plexapp.agents.thetvdb://88651?lang=en",
            studio: "CTC (JA)",
            type: "show",
            title: "07-Ghost",
            contentRating: "TV-PG",
            summary:
              "Set in a gothic fantasy world, this is the story of Teito Klein, an orphaned slave who became the top military academy student. However, an unexpected turn of events left him pursued by the forces of the Barsburg Empire. Now an escaping convict, Teito's sheltered by the church and it’s law of sanctuary. Here, he discovered many mysteries surrounding himself, the church, and the Empire itself. The fact that he might be connected to a dethroned king and the mystical stone of god, 'The Eye of Mikhael' made him the target of the empire more than ever. Fortunately the church is under the mythical 7 Ghost protection. But who are the Ghosts really. Will Teito be free from the military's clutch, And what of his said mission to uncover the history. And who is the military's Chief-of-Staff Ayanami exactly. Teito's future seems to have spiraled into an unexpectedly perilous path.",
            index: 1,
            rating: 6.9,
            year: 2009,
            thumb: "/library/metadata/28580/thumb/1640367138",
            art: "/library/metadata/28580/art/1640367138",
            banner: "/library/metadata/28580/banner/1640367138",
            duration: 1500000,
            originallyAvailableAt: "2009-04-06",
            leafCount: 26,
            viewedLeafCount: 0,
            childCount: 1,
            addedAt: 1586886437,
            updatedAt: 1640367138,
            Image: [
              {
                alt: "07-Ghost",
                type: "coverPoster",
                url: "/library/metadata/28580/thumb/1640367138"
              },
              {
                alt: "07-Ghost",
                type: "background",
                url: "/library/metadata/28580/art/1640367138"
              }
            ],
            UltraBlurColors: {
              topLeft: "040404",
              topRight: "903b67",
              bottomRight: "18250e",
              bottomLeft: "923f43"
            },
            Genre: [
              {
                tag: "Fantasy"
              },
              {
                tag: "Animation"
              }
            ],
            Role: [
              {
                tag: "Mitsuki Saiga"
              },
              {
                tag: "Shou Hayami"
              },
              {
                tag: "Jun'ichi Suwabe"
              }
            ]
          },
          {
            ratingKey: "57",
            key: "/library/metadata/57/children",
            guid: "com.plexapp.agents.thetvdb://267440?lang=en",
            studio: "NHK",
            type: "show",
            title: "Attack on Titan",
            contentRating: "TV-14",
            summary:
              "After his hometown is destroyed and his mother is killed, young Eren Yeager vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.",
            index: 1,
            rating: 2049.0,
            viewCount: 95,
            skipCount: 6,
            lastViewedAt: 1723324718,
            year: 2013,
            thumb: "/library/metadata/57/thumb/1724061366",
            art: "/library/metadata/57/art/1724061366",
            banner: "/library/metadata/57/banner/1724061366",
            theme: "/library/metadata/57/theme/1724061366",
            duration: 1500000,
            originallyAvailableAt: "2013-04-06",
            leafCount: 99,
            viewedLeafCount: 89,
            childCount: 5,
            seasonCount: 4,
            addedAt: 1542821672,
            updatedAt: 1724061366,
            Image: [
              {
                alt: "Attack on Titan",
                type: "coverPoster",
                url: "/library/metadata/57/thumb/1724061366"
              },
              {
                alt: "Attack on Titan",
                type: "background",
                url: "/library/metadata/57/art/1724061366"
              }
            ],
            UltraBlurColors: {
              topLeft: "4e1c05",
              topRight: "4f1e0a",
              bottomRight: "993c1a",
              bottomLeft: "4b1709"
            },
            Genre: [
              {
                tag: "Horror"
              },
              {
                tag: "Fantasy"
              }
            ],
            Role: [
              {
                tag: "Yuki Kaji"
              },
              {
                tag: "Yui Ishikawa"
              },
              {
                tag: "Marina Inoue"
              }
            ]
          },
          {
            ratingKey: "3556",
            key: "/library/metadata/3556/children",
            guid: "com.plexapp.agents.thetvdb://78987?lang=en",
            studio: "Tokyo Broadcasting System",
            type: "show",
            title: "Black Cat",
            contentRating: "TV-14",
            summary:
              "A group of assasins are controled by Chronos. They all have a number on their neck. But number 13 which is Black Cat has the characteristics of a cat, because a witch cursed him. He is supposed to kill people but he also hates the thought of killing people.\r\nThe world is secretly controlled by a secret organizition, Chronos. Under the command of this mysterious organization, are the Chronos Numbers, a group of powerful assasins, taking orders to eliminate certain target secretly to keep the so-called `peace`. One of the most powerful is the Number XIII, Train Hartnett, or known as Black Cat. At first he seems to be a cruel killer, a meeting with a girl Sweeper changed him completely. Now as a Sweeper, Train travelled with his partner Sven Volfied to hunt down criminals.",
            index: 1,
            rating: 8.9,
            year: 2005,
            thumb: "/library/metadata/3556/thumb/1640367137",
            art: "/library/metadata/3556/art/1640367137",
            banner: "/library/metadata/3556/banner/1640367137",
            duration: 1500000,
            originallyAvailableAt: "2005-10-07",
            leafCount: 24,
            viewedLeafCount: 0,
            childCount: 1,
            addedAt: 1552930790,
            updatedAt: 1640367137,
            Image: [
              {
                alt: "Black Cat",
                type: "coverPoster",
                url: "/library/metadata/3556/thumb/1640367137"
              },
              {
                alt: "Black Cat",
                type: "background",
                url: "/library/metadata/3556/art/1640367137"
              }
            ],
            UltraBlurColors: {
              topLeft: "0c2f50",
              topRight: "113858",
              bottomRight: "3e57a8",
              bottomLeft: "245284"
            },
            Genre: [
              {
                tag: "Crime"
              },
              {
                tag: "Action"
              }
            ],
            Role: [
              {
                tag: "Keiji Fujiwara"
              },
              {
                tag: "Misato Fukuen"
              },
              {
                tag: "Takashi Kondou"
              }
            ]
          },
          {
            ratingKey: "1221",
            key: "/library/metadata/1221/children",
            guid: "com.plexapp.agents.thetvdb://79604?lang=en",
            studio: "Tokyo MX",
            type: "show",
            title: "Black Lagoon",
            contentRating: "TV-MA",
            summary:
              "Okajima Rokuro - now known almost exclusively as 'Rock' - was once a typical, put-upon Japanese businessman. Then, on a routine business trip, he was kidnapped and ransomed by the Lagoon Company: a band of mercenary pirates operating out of the crime-riddled city of Roanapur. Abandoned by his bosses, he joined the Lagoon Company. Now he must try and stay afloat amongst the ever-shifting politics of the criminal underworld, while simultaneously avoiding death at the hands of his quick-tempered, gun-toting co-worker, 'Two Hand' Revy. ",
            index: 1,
            rating: 8.0,
            year: 2006,
            thumb: "/library/metadata/1221/thumb/1640367168",
            art: "/library/metadata/1221/art/1640367168",
            banner: "/library/metadata/1221/banner/1640367168",
            theme: "/library/metadata/1221/theme/1640367168",
            duration: 1500000,
            originallyAvailableAt: "2006-04-09",
            leafCount: 29,
            viewedLeafCount: 0,
            childCount: 1,
            addedAt: 1552687240,
            updatedAt: 1640367168,
            Image: [
              {
                alt: "Black Lagoon",
                type: "coverPoster",
                url: "/library/metadata/1221/thumb/1640367168"
              },
              {
                alt: "Black Lagoon",
                type: "background",
                url: "/library/metadata/1221/art/1640367168"
              }
            ],
            UltraBlurColors: {
              topLeft: "162e4f",
              topRight: "9c3631",
              bottomRight: "1a4c96",
              bottomLeft: "182b54"
            },
            Genre: [
              {
                tag: "Animation"
              },
              {
                tag: "Adventure"
              }
            ],
            Role: [
              {
                tag: "Jun Karasawa"
              },
              {
                tag: "Daisuke Namikawa"
              },
              {
                tag: "Megumi Toyoguchi"
              }
            ]
          },
          {
            ratingKey: "5604",
            key: "/library/metadata/5604/children",
            guid: "com.plexapp.agents.thetvdb://74796?lang=en",
            studio: "TV Tokyo",
            type: "show",
            title: "Bleach",
            contentRating: "TV-MA",
            summary:
              "For as long as he can remember, Ichigo Kurosaki has been able to see ghosts. But when he meets Rukia, a Soul Reaper who battles evil spirits known as Hollows, he finds his life is changed forever when Rukia transfers most of her powers to him. Now a Soul Reaper himself with a newfound wealth of spiritual energy, Ichigo discovers his true calling: to protect the living and the dead from evil.",
            index: 1,
            rating: 7.9,
            viewCount: 5,
            skipCount: 1,
            lastViewedAt: 1720283316,
            year: 2004,
            thumb: "/library/metadata/5604/thumb/1726582203",
            art: "/library/metadata/5604/art/1726582203",
            banner: "/library/metadata/5604/banner/1726582203",
            theme: "/library/metadata/5604/theme/1726582203",
            duration: 1500000,
            originallyAvailableAt: "2004-10-04",
            leafCount: 393,
            viewedLeafCount: 2,
            childCount: 18,
            seasonCount: 17,
            addedAt: 1553396573,
            updatedAt: 1726582203,
            Image: [
              {
                alt: "Bleach",
                type: "coverPoster",
                url: "/library/metadata/5604/thumb/1726582203"
              },
              {
                alt: "Bleach",
                type: "background",
                url: "/library/metadata/5604/art/1726582203"
              }
            ],
            UltraBlurColors: {
              topLeft: "00314c",
              topRight: "770b37",
              bottomRight: "360c19",
              bottomLeft: "0b4a64"
            },
            Genre: [
              {
                tag: "Fantasy"
              },
              {
                tag: "Animation"
              }
            ],
            Role: [
              {
                tag: "Masakazu Morita"
              },
              {
                tag: "Fumiko Orikasa"
              },
              {
                tag: "Yuki Matsuoka"
              }
            ]
          },
          {
            ratingKey: "1733",
            key: "/library/metadata/1733/children",
            guid: "com.plexapp.agents.thetvdb://79995?lang=en",
            studio: "Nippon TV",
            type: "show",
            title: "Claymore",
            contentRating: "TV-MA",
            summary:
              "Based on a shounen manga by Yagi Norihiro serialised in Monthly Shounen Jump.\r\n\r\nThe setting of the story is a fictional world of abundant towns where humans coexist with demons called Yoma. These monsters feed on humans as their main source of food, hiding themselves in human society until they strike.\r\n\r\nA group of skilled warriors form a nameless organization to protect humans from these demons. These warriors are called Claymores, after their immense Claymore weapons. They willingly infuse themselves with demon flesh and blood to become powerful half-human hybrids. Villages in danger of attack hire warriors from the organisation for protection.\r\n\r\nThe story of Claymore follows the adventures of the beautiful Claymore warrior Claire, who fights demons and struggles to hold on to her humanity.\r\n\r\nLong ago, the Yoma, the shape changing demons, took human form to live in disguise among human society. They feed on human innards, and take possession of memories from the brains of people they eat. These acquired memories help them better disguise themselves within human society.\r\n\r\nIn recent years, a secret society discovers a way of implanting demon bodies and body parts into humans, to create hybrids more powerful than the original demons. A hybrid's standard abilities include faster healing, limited shape modification, the ability to detect other demons and hybrids, and overall enhanced physical prowess. Almost all hybrids are created against their will; they are typically survivors of families attacked by demons. The only exception is the lead character, who volunteered to become a hybrid to avenge her family. The society sends hybrids to towns that can afford their fares to kill demons, although not every hybrid does so willingly (this is implied in the manga.) The society is often strict and harsh; hybrids who break the rules risk being hunted down by their fellow hybrids.",
            index: 1,
            rating: 8.0,
            viewCount: 21,
            skipCount: 3,
            lastViewedAt: 1564758734,
            year: 2007,
            thumb: "/library/metadata/1733/thumb/1640367193",
            art: "/library/metadata/1733/art/1640367193",
            banner: "/library/metadata/1733/banner/1640367193",
            theme: "/library/metadata/1733/theme/1640367193",
            duration: 1500000,
            originallyAvailableAt: "2007-04-03",
            leafCount: 26,
            viewedLeafCount: 18,
            childCount: 1,
            addedAt: 1552727021,
            updatedAt: 1640367193,
            Image: [
              {
                alt: "Claymore",
                type: "coverPoster",
                url: "/library/metadata/1733/thumb/1640367193"
              },
              {
                alt: "Claymore",
                type: "background",
                url: "/library/metadata/1733/art/1640367193"
              }
            ],
            UltraBlurColors: {
              topLeft: "0c0b0d",
              topRight: "1a1716",
              bottomRight: "3e3a39",
              bottomLeft: "211f1f"
            },
            Genre: [
              {
                tag: "Fantasy"
              },
              {
                tag: "Animation"
              }
            ],
            Role: [
              {
                tag: "Houko Kuwashima"
              },
              {
                tag: "Motoki Takagi"
              },
              {
                tag: "Ai Orikasa"
              }
            ]
          },
          {
            ratingKey: "979",
            key: "/library/metadata/979/children",
            guid: "com.plexapp.agents.thetvdb://76885?lang=en",
            studio: "TV Tokyo",
            type: "show",
            title: "Cowboy Bebop",
            contentRating: "TV-MA",
            summary:
              'In the year 2071 humanity has colonized the entire Solar System through the use of "Phase Difference Space Gates". A catastrophic accident occurred during the development of the Gates, damaging both the Earth and the Moon, heavily irradiating the surface, and forcing most of mankind to evacuate to other planets of the Solar System.\r\n\r\nWherever humanity goes, so goes its criminal element, and thus the need for those who hunt criminals. The newly formed solar system police reinstated the bounty scheme of the Wild West. Cowboy Bebop is the story of the four inhabitants of the spaceship Bebop, and the living they barely make at bounty hunting.',
            index: 1,
            rating: 9.1,
            year: 1998,
            thumb: "/library/metadata/979/thumb/1640367200",
            art: "/library/metadata/979/art/1640367200",
            banner: "/library/metadata/979/banner/1640367200",
            theme: "/library/metadata/979/theme/1640367200",
            duration: 1500000,
            originallyAvailableAt: "1998-04-03",
            leafCount: 26,
            viewedLeafCount: 0,
            childCount: 1,
            addedAt: 1552685855,
            updatedAt: 1640367200,
            Image: [
              {
                alt: "Cowboy Bebop",
                type: "coverPoster",
                url: "/library/metadata/979/thumb/1640367200"
              },
              {
                alt: "Cowboy Bebop",
                type: "background",
                url: "/library/metadata/979/art/1640367200"
              }
            ],
            UltraBlurColors: {
              topLeft: "122d54",
              topRight: "29529a",
              bottomRight: "80521d",
              bottomLeft: "92413f"
            },
            Genre: [
              {
                tag: "Science Fiction"
              },
              {
                tag: "Adventure"
              }
            ],
            Role: [
              {
                tag: "Kouichi Yamadera"
              },
              {
                tag: "Unshou Ishizuka"
              },
              {
                tag: "Megumi Hayashibara"
              }
            ]
          },
          {
            ratingKey: "4269",
            key: "/library/metadata/4269/children",
            guid: "com.plexapp.agents.thetvdb://79481?lang=en",
            studio: "Nippon TV",
            type: "show",
            title: "Death Note",
            contentRating: "TV-MA",
            summary:
              "When a Japanese high schooler comes into possession of a mystical notebook, he finds he has the power to kill anybody whose name he enters in it.",
            index: 1,
            rating: 9.0,
            year: 2006,
            thumb: "/library/metadata/4269/thumb/1640367238",
            art: "/library/metadata/4269/art/1640367238",
            banner: "/library/metadata/4269/banner/1640367238",
            theme: "/library/metadata/4269/theme/1640367238",
            duration: 1320000,
            originallyAvailableAt: "2006-10-04",
            leafCount: 37,
            viewedLeafCount: 0,
            childCount: 1,
            addedAt: 1552931028,
            updatedAt: 1640367238,
            Image: [
              {
                alt: "Death Note",
                type: "coverPoster",
                url: "/library/metadata/4269/thumb/1640367238"
              },
              {
                alt: "Death Note",
                type: "background",
                url: "/library/metadata/4269/art/1640367238"
              }
            ],
            UltraBlurColors: {
              topLeft: "4a2013",
              topRight: "864e21",
              bottomRight: "1c1717",
              bottomLeft: "973a2f"
            },
            Genre: [
              {
                tag: "Fantasy"
              },
              {
                tag: "Drama"
              }
            ],
            Role: [
              {
                tag: "Mamoru Miyano"
              },
              {
                tag: "Nakamura Shidō II"
              },
              {
                tag: "Masaya Matsukaze"
              }
            ]
          },
          {
            ratingKey: "4386",
            key: "/library/metadata/4386/children",
            guid: "com.plexapp.agents.thetvdb://289177?lang=en",
            studio: "Nippon TV",
            type: "show",
            title: "Death Parade",
            contentRating: "TV-MA",
            summary:
              '"Welcome to QuinnDecim." What greets two unsuspecting guests is a strange bar, QuinnDecim, and the white-haired bartender, Decim. "From here you two shall begin a battle where your lives hang in the balance," he says to introduce the Death Game. Before long the guests\' true natures become apparent. As a matter of course, at the game\'s end Decim is revealed to be the "arbiter." Decim\'s judgement on the two guests is...',
            index: 1,
            rating: 8.1,
            year: 2015,
            thumb: "/library/metadata/4386/thumb/1640367215",
            art: "/library/metadata/4386/art/1640367215",
            banner: "/library/metadata/4386/banner/1640367215",
            theme: "/library/metadata/4386/theme/1640367215",
            duration: 1320000,
            originallyAvailableAt: "2015-01-10",
            leafCount: 12,
            viewedLeafCount: 0,
            childCount: 1,
            addedAt: 1552964652,
            updatedAt: 1640367215,
            Image: [
              {
                alt: "Death Parade",
                type: "coverPoster",
                url: "/library/metadata/4386/thumb/1640367215"
              },
              {
                alt: "Death Parade",
                type: "background",
                url: "/library/metadata/4386/art/1640367215"
              }
            ],
            UltraBlurColors: {
              topLeft: "0c0417",
              topRight: "331a44",
              bottomRight: "27163d",
              bottomLeft: "070312"
            },
            Genre: [
              {
                tag: "Drama"
              },
              {
                tag: "Animation"
              }
            ],
            Role: [
              {
                tag: "Ikuko Tani"
              },
              {
                tag: "Takahiro Sakurai"
              },
              {
                tag: "Keiji Fujiwara"
              }
            ]
          },
          {
            ratingKey: "27380",
            key: "/library/metadata/27380/children",
            guid: "com.plexapp.agents.thetvdb://88031?lang=en",
            studio: "Fuji TV",
            type: "show",
            title: "Dragon Ball Kai",
            contentRating: "TV-14",
            summary:
              "Rejoin Goku and his friends in a series of cosmic battles!  Toei has redubbed, recut, and cleaned up the animation of the original 1989 animated series.  The show's story arc has been refined to better follow the comic book series on which it is based.  The show also features a new opening and ending.\r\n\r\nIn the series, martial artist Goku, and his various friends, battle increasingly powerful enemies to defend the world against evil.  Can Earth's defender defeat demons, aliens, and other villains?  ",
            index: 1,
            rating: 8.9,
            year: 2009,
            thumb: "/library/metadata/27380/thumb/1640367321",
            art: "/library/metadata/27380/art/1640367321",
            banner: "/library/metadata/27380/banner/1640367321",
            duration: 1500000,
            originallyAvailableAt: "2009-04-05",
            leafCount: 105,
            viewedLeafCount: 0,
            childCount: 2,
            addedAt: 1586252029,
            updatedAt: 1640367321,
            Image: [
              {
                alt: "Dragon Ball Kai",
                type: "coverPoster",
                url: "/library/metadata/27380/thumb/1640367321"
              },
              {
                alt: "Dragon Ball Kai",
                type: "background",
                url: "/library/metadata/27380/art/1640367321"
              }
            ],
            UltraBlurColors: {
              topLeft: "0b3815",
              topRight: "8d4823",
              bottomRight: "4b54a4",
              bottomLeft: "2d6d3c"
            },
            Genre: [
              {
                tag: "Fantasy"
              },
              {
                tag: "Animation"
              }
            ],
            Role: [
              {
                tag: "Masako Nozawa"
              },
              {
                tag: "Ryo Horikawa"
              },
              {
                tag: "Toshio Furukawa"
              }
            ]
          },
          {
            ratingKey: "22398",
            key: "/library/metadata/22398/children",
            guid: "com.plexapp.agents.thetvdb://75941?lang=en",
            studio: "AT-X",
            type: "show",
            title: "Elfen Lied",
            contentRating: "TV-MA",
            summary:
              'The diclonius, otherwise known as a two-horned human, are mutants of the human species, and may well be the next step in human evolution. The diclonius have horns and strong telekinetic powers represented by "vectors". However with this great power, they can easily destroy the human race. Fearful of their power, humans quarantined the diclonius into secret research facilities to study. However, in a freak accident, a enraged female diclonius escaped, killing many guards in the process. While escaping, she is shot in the head, and falls into the ocean. As a result she has waves of amnesia. Later, she washes ashore. There, she meets two people named Kouta and Yuka, who name the female diclonius "Nyuu", after the only word she can say. They decide to watch after her, but of course, the research facility can\'t have this, and begin trying to retrieve her by any means necessary.',
            index: 1,
            rating: 8.2,
            viewCount: 1,
            skipCount: 1,
            lastViewedAt: 1586810201,
            year: 2004,
            thumb: "/library/metadata/22398/thumb/1640367247",
            art: "/library/metadata/22398/art/1640367247",
            banner: "/library/metadata/22398/banner/1640367247",
            duration: 1500000,
            originallyAvailableAt: "2004-07-25",
            leafCount: 13,
            viewedLeafCount: 1,
            childCount: 1,
            addedAt: 1566759226,
            updatedAt: 1640367247,
            Image: [
              {
                alt: "Elfen Lied",
                type: "coverPoster",
                url: "/library/metadata/22398/thumb/1640367247"
              },
              {
                alt: "Elfen Lied",
                type: "background",
                url: "/library/metadata/22398/art/1640367247"
              }
            ],
            UltraBlurColors: {
              topLeft: "570e10",
              topRight: "5f1619",
              bottomRight: "300808",
              bottomLeft: "751e22"
            },
            Genre: [
              {
                tag: "Horror"
              },
              {
                tag: "Drama"
              }
            ],
            Role: [
              {
                tag: "Eriko Ishihara"
              },
              {
                tag: "Hagiwara Emiko"
              },
              {
                tag: "Mamiko Noto"
              }
            ]
          },
          {
            ratingKey: "9359",
            key: "/library/metadata/9359/children",
            guid: "com.plexapp.agents.thetvdb://114801?lang=en",
            studio: "TV Tokyo",
            type: "show",
            title: "Fairy Tail",
            contentRating: "TV-14",
            summary:
              'In the land of Fiore, magic is everywhere. Sorcerers are like skilled tradesmen who band together in "guilds" and take on paying assignments for non-magic wielders, like hunting monsters, retrieving lost items or running odd errands. Lucy is an aspiring wizard who wants to hook up with the coolest guild around, Fairy Tail. One day, she meets a red-headed boy who saves her from a unscrupulous wizard, and before she knows it, she\'s introduced to the wild and wacky band of wizards of Fairy Tail and begins the adventure of a lifetime.',
            index: 1,
            rating: 7.9,
            year: 2009,
            thumb: "/library/metadata/9359/thumb/1640367377",
            art: "/library/metadata/9359/art/1640367377",
            banner: "/library/metadata/9359/banner/1640367377",
            duration: 1500000,
            originallyAvailableAt: "2009-10-12",
            leafCount: 179,
            viewedLeafCount: 0,
            childCount: 5,
            addedAt: 1560023608,
            updatedAt: 1640367377,
            Image: [
              {
                alt: "Fairy Tail",
                type: "coverPoster",
                url: "/library/metadata/9359/thumb/1640367377"
              },
              {
                alt: "Fairy Tail",
                type: "background",
                url: "/library/metadata/9359/art/1640367377"
              }
            ],
            UltraBlurColors: {
              topLeft: "561109",
              topRight: "332c65",
              bottomRight: "272e68",
              bottomLeft: "9c3727"
            },
            Genre: [
              {
                tag: "Fantasy"
              },
              {
                tag: "Comedy"
              }
            ],
            Role: [
              {
                tag: "Tetsuya Kakihara"
              },
              {
                tag: "Aya Hirano"
              },
              {
                tag: "Rie Kugimiya"
              }
            ]
          },
          {
            ratingKey: "9461",
            key: "/library/metadata/9461/children",
            guid: "com.plexapp.agents.thetvdb://75579?lang=en",
            studio: "Animax",
            type: "show",
            title: "Fullmetal Alchemist",
            contentRating: "TV-14",
            summary:
              "Two young brothers are raised as alchemists, but when they are severely injured trying to perform a forbidden act, they begin searching for the one thing that can save them; the fabled philosopher's stone.",
            index: 1,
            rating: 8.8,
            viewCount: 28,
            skipCount: 2,
            lastViewedAt: 1560528627,
            year: 2003,
            thumb: "/library/metadata/9461/thumb/1640367328",
            art: "/library/metadata/9461/art/1640367328",
            banner: "/library/metadata/9461/banner/1640367328",
            duration: 1500000,
            originallyAvailableAt: "2003-10-04",
            leafCount: 51,
            viewedLeafCount: 28,
            childCount: 1,
            addedAt: 1560025033,
            updatedAt: 1640367328,
            Image: [
              {
                alt: "Fullmetal Alchemist",
                type: "coverPoster",
                url: "/library/metadata/9461/thumb/1640367328"
              },
              {
                alt: "Fullmetal Alchemist",
                type: "background",
                url: "/library/metadata/9461/art/1640367328"
              }
            ],
            UltraBlurColors: {
              topLeft: "4c1b22",
              topRight: "893b3d",
              bottomRight: "973b3f",
              bottomLeft: "904529"
            },
            Genre: [
              {
                tag: "Fantasy"
              },
              {
                tag: "Drama"
              }
            ],
            Role: [
              {
                tag: "Romi Paku"
              },
              {
                tag: "Rie Kugimiya"
              },
              {
                tag: "Tooru Ookawa"
              }
            ]
          },
          {
            ratingKey: "8310",
            key: "/library/metadata/8310/children",
            guid: "com.plexapp.agents.thetvdb://307375?lang=en",
            studio: "Tokyo MX",
            type: "show",
            title: "Mob Psycho 100",
            contentRating: "TV-14",
            summary:
              'Kageyama Shigeo (a.k.a. "Mob") is a 8th grader with psychic abilities. He could bend spoons and lift objects with his mind from a young age, but he slowly began to withhold from using his abilities in public due to the negative attention he kept receiving. Now, the only thing he wants is to become friends with a girl in his class, Tsubomi. With his psychic "mentor" (who has no psychic powers), he continues his daily life, attempting to realize his purpose in life.',
            index: 1,
            rating: 9.0,
            year: 2016,
            thumb: "/library/metadata/8310/thumb/1671643061",
            art: "/library/metadata/8310/art/1671643061",
            banner: "/library/metadata/8310/banner/1671643061",
            duration: 1440000,
            originallyAvailableAt: "2016-07-11",
            leafCount: 38,
            viewedLeafCount: 0,
            childCount: 3,
            addedAt: 1557941187,
            updatedAt: 1671643061,
            Image: [
              {
                alt: "Mob Psycho 100",
                type: "coverPoster",
                url: "/library/metadata/8310/thumb/1671643061"
              },
              {
                alt: "Mob Psycho 100",
                type: "background",
                url: "/library/metadata/8310/art/1671643061"
              }
            ],
            UltraBlurColors: {
              topLeft: "282658",
              topRight: "5e4da2",
              bottomRight: "4d53a4",
              bottomLeft: "273064"
            },
            Genre: [
              {
                tag: "Science Fiction"
              },
              {
                tag: "Comedy"
              }
            ],
            Role: [
              {
                tag: "Setsuo Itou"
              },
              {
                tag: "Takahiro Sakurai"
              },
              {
                tag: "Akio Ootsuka"
              }
            ]
          },
          {
            ratingKey: "43906",
            key: "/library/metadata/43906/children",
            guid: "com.plexapp.agents.hama://anidb-2127?lang=en",
            studio: "Toei Animation",
            type: "show",
            title: "Mushrambo",
            summary:
              "Humanity is exterminated by a genetic race they created to fight a deadly virus. One of the scientist brings his young daughter in a cryogenic sleep, hoping that she will awaken one day and find surviving humans, so that she can bring peace between them and the genetic beings, the Enterrans. The girl, Yakumo received special powers at the impact of a meteorite, the impact after which the Enterrans went evil. When she awakens, 500 years later, she goes on her journey and meets three Enterrans who join her. Together with them she slowly finds from the secrets of the past, what happened to her home planet in reality.\nThere is a third season made by a smaller Japanese organisation, not by Toei. This season was half aired in Japan, under a new name. It aired in its entirety in Germany and a few other countries. There are also unverified rumours of a fourth season.",
            index: 1,
            rating: 4.4,
            lastViewedAt: 1622468470,
            year: 2000,
            thumb: "/library/metadata/43906/thumb/1622069087",
            duration: 1500000,
            originallyAvailableAt: "2000-02-05",
            leafCount: 32,
            viewedLeafCount: 0,
            childCount: 1,
            addedAt: 1622069051,
            updatedAt: 1622069087,
            Image: [
              {
                alt: "Mushrambo",
                type: "coverPoster",
                url: "/library/metadata/43906/thumb/1622069087"
              }
            ],
            UltraBlurColors: {
              topLeft: "4c1d1d",
              topRight: "7c1a1c",
              bottomRight: "af1317",
              bottomLeft: "ab1d1e"
            },
            Genre: [
              {
                tag: "Adventure"
              },
              {
                tag: "Angst"
              }
            ],
            Role: [
              {
                tag: "Minaguchi Yuuko"
              },
              {
                tag: "Takayama Minami"
              },
              {
                tag: "Kawazu Yasuhiko"
              }
            ]
          },
          {
            ratingKey: "9518",
            key: "/library/metadata/9518/children",
            guid: "com.plexapp.agents.thetvdb://305074?lang=en",
            studio: "Nippon TV",
            type: "show",
            title: "My Hero Academia",
            contentRating: "TV-14",
            summary:
              "A superhero-loving boy without any powers is determined to enroll in a prestigious hero academy and learn what it really means to be a hero.\r\n",
            index: 1,
            rating: 8.8,
            lastViewedAt: 1726348188,
            year: 2016,
            thumb: "/library/metadata/9518/thumb/1726307093",
            art: "/library/metadata/9518/art/1726307093",
            banner: "/library/metadata/9518/banner/1726307093",
            duration: 1380000,
            originallyAvailableAt: "2016-04-02",
            leafCount: 163,
            viewedLeafCount: 0,
            childCount: 8,
            seasonCount: 7,
            addedAt: 1560197575,
            updatedAt: 1726307093,
            Image: [
              {
                alt: "My Hero Academia",
                type: "coverPoster",
                url: "/library/metadata/9518/thumb/1726307093"
              },
              {
                alt: "My Hero Academia",
                type: "background",
                url: "/library/metadata/9518/art/1726307093"
              }
            ],
            UltraBlurColors: {
              topLeft: "4c1d14",
              topRight: "933d4e",
              bottomRight: "276d49",
              bottomLeft: "216b60"
            },
            Genre: [
              {
                tag: "Science Fiction"
              },
              {
                tag: "Fantasy"
              }
            ],
            Role: [
              {
                tag: "Daiki Yamashita"
              },
              {
                tag: "Nobuhiko Okamoto"
              },
              {
                tag: "Ayane Sakura"
              }
            ]
          },
          {
            ratingKey: "40081",
            key: "/library/metadata/40081/children",
            guid: "com.plexapp.agents.none://40081?lang=xn",
            type: "show",
            title: "Naruto Kai",
            summary: "",
            index: 1,
            viewCount: 12,
            skipCount: 2,
            lastViewedAt: 1674322575,
            leafCount: 72,
            viewedLeafCount: 59,
            childCount: 3,
            addedAt: 1604671304,
            updatedAt: 1605008899
          },
          {
            ratingKey: "40166",
            key: "/library/metadata/40166/children",
            skipChildren: true,
            guid: "com.plexapp.agents.hama://anidb-4880?lang=en",
            studio: "Studio Pierrot",
            type: "show",
            title: "Naruto: Shippuden",
            titleSort: "Naruto Shippuuden",
            contentRating: "TV-PG",
            summary:
              "Naruto Uzumaki, is a loud, hyperactive, adolescent ninja who constantly searches for approval and recognition, as well as to become Hokage, who is acknowledged as the leader and strongest of all ninja in the village.",
            index: 1,
            rating: 5.8,
            viewCount: 101,
            skipCount: 5,
            lastViewedAt: 1718737376,
            year: 2007,
            thumb: "/library/metadata/40166/thumb/1605009080",
            art: "/library/metadata/40166/art/1605009080",
            banner: "/library/metadata/40166/banner/1605009080",
            theme: "/library/metadata/40166/theme/1605009080",
            duration: 1380000,
            originallyAvailableAt: "2007-02-15",
            leafCount: 500,
            viewedLeafCount: 98,
            childCount: 1,
            addedAt: 1604971385,
            updatedAt: 1605009080,
            flattenSeasons: "1",
            showOrdering: "tvdbAbsolute",
            Image: [
              {
                alt: "Naruto: Shippuden",
                type: "coverPoster",
                url: "/library/metadata/40166/thumb/1605009080"
              },
              {
                alt: "Naruto: Shippuden",
                type: "background",
                url: "/library/metadata/40166/art/1605009080"
              }
            ],
            UltraBlurColors: {
              topLeft: "4e1a1d",
              topRight: "814729",
              bottomRight: "264f78",
              bottomLeft: "9d3245"
            },
            Genre: [
              {
                tag: "Action"
              },
              {
                tag: "Adventure"
              }
            ],
            Role: [
              {
                tag: "Takeuchi Junko"
              },
              {
                tag: "Ootsuka Houchuu"
              },
              {
                tag: "Inoue Kazuhiko"
              }
            ]
          },
          {
            ratingKey: "2905",
            key: "/library/metadata/2905/children",
            guid: "com.plexapp.agents.thetvdb://81797?lang=en",
            studio: "Fuji TV",
            type: "show",
            title: "One Piece",
            contentRating: "TV-Y7",
            summary:
              'The adventures of Monkey D. Luffy and his pirate crew in order to find the greatest treasure ever left by the legendary Pirate, Gold Roger. The famous mystery treasure named "One Piece".\r\n',
            index: 1,
            rating: 1521628.0,
            viewCount: 237,
            skipCount: 6,
            lastViewedAt: 1722875639,
            year: 1999,
            thumb: "/library/metadata/2905/thumb/1711868578",
            art: "/library/metadata/2905/art/1711868578",
            banner: "/library/metadata/2905/banner/1711868578",
            theme: "/library/metadata/2905/theme/1711868578",
            duration: 1500000,
            originallyAvailableAt: "1999-10-19",
            leafCount: 428,
            viewedLeafCount: 394,
            childCount: 12,
            addedAt: 1552907862,
            updatedAt: 1711868578,
            Image: [
              {
                alt: "One Piece",
                type: "coverPoster",
                url: "/library/metadata/2905/thumb/1711868578"
              },
              {
                alt: "One Piece",
                type: "background",
                url: "/library/metadata/2905/art/1711868578"
              }
            ],
            UltraBlurColors: {
              topLeft: "53160d",
              topRight: "7e5316",
              bottomRight: "8d3c29",
              bottomLeft: "813a33"
            },
            Genre: [
              {
                tag: "Fantasy"
              },
              {
                tag: "Drama"
              }
            ],
            Role: [
              {
                tag: "Mayumi Tanaka"
              },
              {
                tag: "Kazuya Nakai"
              },
              {
                tag: "Wakana Yamazaki"
              }
            ]
          },
          {
            ratingKey: "1252",
            key: "/library/metadata/1252/children",
            guid: "com.plexapp.agents.thetvdb://293088?lang=en",
            studio: "TV Tokyo",
            type: "show",
            title: "One-Punch Man",
            contentRating: "TV-14",
            summary:
              "Saitama is a superhero who has trained so hard that his hair has fallen out, and who can overcome any enemy with one punch. However, because he is so strong, he has become bored and frustrated that he wins all of his battles too easily.",
            index: 1,
            rating: 8.9,
            viewCount: 41,
            skipCount: 3,
            lastViewedAt: 1650482934,
            year: 2015,
            thumb: "/library/metadata/1252/thumb/1640367444",
            art: "/library/metadata/1252/art/1640367444",
            banner: "/library/metadata/1252/banner/1640367444",
            theme: "/library/metadata/1252/theme/1640367444",
            duration: 1500000,
            originallyAvailableAt: "2015-10-04",
            leafCount: 25,
            viewedLeafCount: 25,
            childCount: 3,
            seasonCount: 2,
            addedAt: 1552687243,
            updatedAt: 1640367444,
            Image: [
              {
                alt: "One-Punch Man",
                type: "coverPoster",
                url: "/library/metadata/1252/thumb/1640367444"
              },
              {
                alt: "One-Punch Man",
                type: "background",
                url: "/library/metadata/1252/art/1640367444"
              }
            ],
            UltraBlurColors: {
              topLeft: "501910",
              topRight: "28396e",
              bottomRight: "9d3621",
              bottomLeft: "346a50"
            },
            Genre: [
              {
                tag: "Science Fiction"
              },
              {
                tag: "Comedy"
              }
            ],
            Role: [
              {
                tag: "Kaito Ishikawa"
              },
              {
                tag: "Makoto Furukawa"
              },
              {
                tag: "Kenjirou Tsuda"
              }
            ]
          },
          {
            ratingKey: "9712",
            key: "/library/metadata/9712/children",
            guid: "com.plexapp.agents.thetvdb://79654?lang=en",
            studio: "TV Asahi",
            type: "show",
            title: "Shin Chan",
            contentRating: "TV-PG",
            summary:
              "Crayon Shin-chan is a popular yet controversial Japanese anime series. FUNimation made their dub more mature in content compared to the original. Shin is a 5-year-old boy who is constantly doing and saying inappropriate things, much to the dismay and annoyance of those around him, with hilarious results. Shin along with his family including his little sister Himawari and his dog Shiro, as well as his friends from kindergarten, ends up turning everyday situations into funny adventures.",
            index: 1,
            rating: 9.6,
            skipCount: 2,
            lastViewedAt: 1562173684,
            year: 1992,
            thumb: "/library/metadata/9712/thumb/1640367457",
            art: "/library/metadata/9712/art/1640367457",
            banner: "/library/metadata/9712/banner/1640367457",
            duration: 1500000,
            originallyAvailableAt: "1992-04-13",
            leafCount: 1,
            viewedLeafCount: 0,
            childCount: 1,
            addedAt: 1560580971,
            updatedAt: 1640367457,
            Image: [
              {
                alt: "Shin Chan",
                type: "coverPoster",
                url: "/library/metadata/9712/thumb/1640367457"
              },
              {
                alt: "Shin Chan",
                type: "background",
                url: "/library/metadata/9712/art/1640367457"
              }
            ],
            UltraBlurColors: {
              topLeft: "0d3243",
              topRight: "83501a",
              bottomRight: "24573a",
              bottomLeft: "1c6e44"
            },
            Genre: [
              {
                tag: "Family"
              },
              {
                tag: "Comedy"
              }
            ]
          },
          {
            ratingKey: "907",
            key: "/library/metadata/907/children",
            guid: "com.plexapp.agents.thetvdb://81751?lang=en",
            studio: "TV Tokyo",
            type: "show",
            title: "Soul Eater",
            contentRating: "TV-14",
            summary:
              "At the Death Weapon Meister Academy, humans known as Meisters study. Each Meister have their own partner, which is a weapon capable of taking on a human form. The story follows three of these Meisters and their Weapon. They are Maka Alban and her weapon Soul Eater, Black Star and his weapon Tsubaki, and Death the Kid and his weapons Patricia and Elizabeth Thompson. They attend school, do homework, fight evil souls, and most important, they try to help their weapons reach Death Scythe status, in which they are eligible for use by the leader of all the Meisters and Weapons, Death(The Grim Reaper) himself.",
            index: 1,
            rating: 7.7,
            viewCount: 52,
            skipCount: 2,
            lastViewedAt: 1575713332,
            year: 2008,
            thumb: "/library/metadata/907/thumb/1640367490",
            art: "/library/metadata/907/art/1640367490",
            banner: "/library/metadata/907/banner/1640367490",
            theme: "/library/metadata/907/theme/1640367490",
            duration: 1500000,
            originallyAvailableAt: "2008-04-07",
            leafCount: 51,
            viewedLeafCount: 51,
            childCount: 1,
            addedAt: 1552685841,
            updatedAt: 1640367490,
            Image: [
              {
                alt: "Soul Eater",
                type: "coverPoster",
                url: "/library/metadata/907/thumb/1640367490"
              },
              {
                alt: "Soul Eater",
                type: "background",
                url: "/library/metadata/907/art/1640367490"
              }
            ],
            UltraBlurColors: {
              topLeft: "0c343b",
              topRight: "9a3355",
              bottomRight: "983163",
              bottomLeft: "773997"
            },
            Genre: [
              {
                tag: "Fantasy"
              },
              {
                tag: "Comedy"
              }
            ],
            Role: [
              {
                tag: "Koike Izumi"
              },
              {
                tag: "Shouzou Iizuka"
              },
              {
                tag: "Tomie Kataoka"
              }
            ]
          },
          {
            ratingKey: "53972",
            key: "/library/metadata/53972/children",
            guid: "com.plexapp.agents.hama://anidb-17061?lang=en",
            studio: "Wit Studio",
            type: "show",
            title: "Spy x Family (2022)",
            summary:
              "World peace is at stake and secret agent Twilight must undergo his most difficult mission yet—pretend to be a family man. Posing as a loving husband and father, he’ll infiltrate an elite school to get close to a high-profile politician. He has the perfect cover, except his wife’s a deadly assassin and neither knows each other’s identity. But someone does, his adopted daughter who’s a telepath!",
            index: 1,
            rating: 7.8,
            year: 2022,
            thumb: "/library/metadata/53972/thumb/1703533045",
            banner: "/library/metadata/53972/banner/1703533045",
            duration: 1500000,
            originallyAvailableAt: "2022-09-30",
            leafCount: 37,
            viewedLeafCount: 0,
            childCount: 2,
            addedAt: 1703533009,
            updatedAt: 1703533045,
            Image: [
              {
                alt: "Spy x Family (2022)",
                type: "coverPoster",
                url: "/library/metadata/53972/thumb/1703533045"
              }
            ],
            UltraBlurColors: {
              topLeft: "003051",
              topRight: "25677b",
              bottomRight: "884c1d",
              bottomLeft: "864e1f"
            },
            Genre: [
              {
                tag: "Action"
              },
              {
                tag: "Comedy"
              }
            ],
            Role: [
              {
                tag: "Eguchi Takuya"
              },
              {
                tag: "Tanezaki Atsumi"
              },
              {
                tag: "Hayami Saori"
              }
            ]
          },
          {
            ratingKey: "54464",
            key: "/library/metadata/54464/children",
            guid: "com.plexapp.agents.hama://tvdb-347734?lang=en",
            studio: "Toei Animation",
            type: "show",
            title: "Super Dragon Ball Heroes",
            contentRating: "TV-Y7",
            summary:
              "Trunks returns from the future to train with Goku and Vegeta. However, he disappears without warning. Then the mysterious Fu bursts in, telling them that Trunks has been imprisoned in the Prison Planet, a mysterious complex in an unknown place in the universes. The group seeks the dragon balls to free Trunks, but an endless battle awaits them! Will Goku and the others rescue Trunks and escape the Prison Planet?",
            index: 1,
            rating: 2.2,
            year: 2018,
            thumb: "/library/metadata/54464/thumb/1723200736",
            art: "/library/metadata/54464/art/1723200736",
            banner: "/library/metadata/54464/banner/1723200736",
            duration: 600000,
            originallyAvailableAt: "2018-06-30",
            leafCount: 8,
            viewedLeafCount: 0,
            childCount: 2,
            addedAt: 1708341242,
            updatedAt: 1723200736,
            Image: [
              {
                alt: "Super Dragon Ball Heroes",
                type: "coverPoster",
                url: "/library/metadata/54464/thumb/1723200736"
              },
              {
                alt: "Super Dragon Ball Heroes",
                type: "background",
                url: "/library/metadata/54464/art/1723200736"
              }
            ],
            UltraBlurColors: {
              topLeft: "472304",
              topRight: "874d10",
              bottomRight: "874d14",
              bottomLeft: "8c4a0d"
            },
            Genre: [
              {
                tag: "Action"
              },
              {
                tag: "Adventure"
              }
            ],
            Role: [
              {
                tag: "Nozawa Masako"
              },
              {
                tag: "Horikawa Ryou"
              },
              {
                tag: "Kusao Takeshi"
              }
            ]
          },
          {
            ratingKey: "54979",
            key: "/library/metadata/54979/children",
            guid: "com.plexapp.agents.hama://anidb-673?lang=en",
            studio: "Madhouse",
            type: "show",
            title: "Texhnolyze",
            contentRating: "TV-MA",
            summary:
              "In the experimental underground city of Lux, the human spirit is crushed by a Hobbesian nightmare of tribal and ideological conflict. When ‘wild dog’ prize fighter Ichise is brutally maimed, a chance encounter with a rogue doctor of cybernetic Texhnolyze body parts draws him into a spiral of escalating chaos with consequences for the evolution and survival of humanity itself.",
            index: 1,
            rating: 7.1,
            year: 2003,
            thumb: "/library/metadata/54979/thumb/1725051561",
            art: "/library/metadata/54979/art/1725051561",
            banner: "/library/metadata/54979/banner/1725051561",
            theme: "/library/metadata/54979/theme/1725051561",
            duration: 1500000,
            originallyAvailableAt: "2003-04-16",
            leafCount: 22,
            viewedLeafCount: 0,
            childCount: 1,
            addedAt: 1725051486,
            updatedAt: 1725051561,
            Image: [
              {
                alt: "Texhnolyze",
                type: "coverPoster",
                url: "/library/metadata/54979/thumb/1725051561"
              },
              {
                alt: "Texhnolyze",
                type: "background",
                url: "/library/metadata/54979/art/1725051561"
              }
            ],
            Genre: [
              {
                tag: "Animation"
              },
              {
                tag: "Anime"
              }
            ],
            Role: [
              {
                tag: "Inoue Takashi"
              },
              {
                tag: "Tsuchida Hiroshi"
              },
              {
                tag: "Itou Shizuka"
              }
            ]
          },
          {
            ratingKey: "19388",
            key: "/library/metadata/19388/children",
            guid: "com.plexapp.agents.thetvdb://76894?lang=en",
            studio: "TV Tokyo",
            type: "show",
            title: "Yu-Gi-Oh! Duel Monsters",
            summary:
              "Follows the adventures of high school student Yugi, who has a magical secret that comes to life when he plays his favorite card game: 'Duel Monsters.",
            index: 1,
            rating: 9.5,
            year: 2000,
            thumb: "/library/metadata/19388/thumb/1640367593",
            art: "/library/metadata/19388/art/1640367593",
            banner: "/library/metadata/19388/banner/1640367593",
            duration: 1500000,
            originallyAvailableAt: "2000-04-18",
            leafCount: 190,
            viewedLeafCount: 0,
            childCount: 5,
            addedAt: 1562618943,
            updatedAt: 1640367593,
            Image: [
              {
                alt: "Yu-Gi-Oh! Duel Monsters",
                type: "coverPoster",
                url: "/library/metadata/19388/thumb/1640367593"
              },
              {
                alt: "Yu-Gi-Oh! Duel Monsters",
                type: "background",
                url: "/library/metadata/19388/art/1640367593"
              }
            ],
            UltraBlurColors: {
              topLeft: "231d69",
              topRight: "353ea3",
              bottomRight: "2b368e",
              bottomLeft: "0f104b"
            },
            Genre: [
              {
                tag: "Fantasy"
              },
              {
                tag: "Animation"
              }
            ],
            Role: [
              {
                tag: "KONTA"
              },
              {
                tag: "Nozomu Sasaki"
              },
              {
                tag: "Megumi Ogata"
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

  it("should validate the 200 response with type 2 and with includeGuids queryParam when the API spec is valid", () => {
    // {{baseUrl}}/library/sections/1/all?type=4&includeGuids=1&includeMeta=1&X-Plex-Container-Start=1&X-Plex-Container-Size=5
    const response = {
      MediaContainer: {
        size: 26,
        totalSize: 26,
        offset: 0,
        allowSync: true,
        art: "/:/resources/show-fanart.jpg",
        content: "secondary",
        identifier: "com.plexapp.plugins.library",
        librarySectionID: 3,
        librarySectionTitle: "Anime",
        librarySectionUUID: "96204dfc-eabd-4328-8186-8330fda0b888",
        mediaTagPrefix: "/system/bundle/media/flags/",
        mediaTagVersion: 1726069332,
        nocache: true,
        thumb: "/:/resources/show.png",
        title1: "Anime",
        title2: "All Shows",
        viewGroup: "show",
        Metadata: [
          {
            ratingKey: "28580",
            key: "/library/metadata/28580/children",
            guid: "com.plexapp.agents.thetvdb://88651?lang=en",
            studio: "CTC (JA)",
            type: "show",
            title: "07-Ghost",
            contentRating: "TV-PG",
            summary:
              "Set in a gothic fantasy world, this is the story of Teito Klein, an orphaned slave who became the top military academy student. However, an unexpected turn of events left him pursued by the forces of the Barsburg Empire. Now an escaping convict, Teito's sheltered by the church and it’s law of sanctuary. Here, he discovered many mysteries surrounding himself, the church, and the Empire itself. The fact that he might be connected to a dethroned king and the mystical stone of god, 'The Eye of Mikhael' made him the target of the empire more than ever. Fortunately the church is under the mythical 7 Ghost protection. But who are the Ghosts really. Will Teito be free from the military's clutch, And what of his said mission to uncover the history. And who is the military's Chief-of-Staff Ayanami exactly. Teito's future seems to have spiraled into an unexpectedly perilous path.",
            index: 1,
            rating: 6.9,
            year: 2009,
            thumb: "/library/metadata/28580/thumb/1640367138",
            art: "/library/metadata/28580/art/1640367138",
            banner: "/library/metadata/28580/banner/1640367138",
            duration: 1500000,
            originallyAvailableAt: "2009-04-06",
            leafCount: 26,
            viewedLeafCount: 0,
            childCount: 1,
            addedAt: 1586886437,
            updatedAt: 1640367138,
            Image: [
              {
                alt: "07-Ghost",
                type: "coverPoster",
                url: "/library/metadata/28580/thumb/1640367138"
              },
              {
                alt: "07-Ghost",
                type: "background",
                url: "/library/metadata/28580/art/1640367138"
              }
            ],
            UltraBlurColors: {
              topLeft: "040404",
              topRight: "903b67",
              bottomRight: "18250e",
              bottomLeft: "923f43"
            },
            Genre: [
              {
                tag: "Fantasy"
              },
              {
                tag: "Animation"
              }
            ],
            Role: [
              {
                tag: "Mitsuki Saiga"
              },
              {
                tag: "Shou Hayami"
              },
              {
                tag: "Jun'ichi Suwabe"
              }
            ]
          },
          {
            ratingKey: "57",
            key: "/library/metadata/57/children",
            guid: "com.plexapp.agents.thetvdb://267440?lang=en",
            studio: "NHK",
            type: "show",
            title: "Attack on Titan",
            contentRating: "TV-14",
            summary:
              "After his hometown is destroyed and his mother is killed, young Eren Yeager vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.",
            index: 1,
            rating: 2049.0,
            viewCount: 95,
            skipCount: 6,
            lastViewedAt: 1723324718,
            year: 2013,
            thumb: "/library/metadata/57/thumb/1724061366",
            art: "/library/metadata/57/art/1724061366",
            banner: "/library/metadata/57/banner/1724061366",
            theme: "/library/metadata/57/theme/1724061366",
            duration: 1500000,
            originallyAvailableAt: "2013-04-06",
            leafCount: 99,
            viewedLeafCount: 89,
            childCount: 5,
            seasonCount: 4,
            addedAt: 1542821672,
            updatedAt: 1724061366,
            Image: [
              {
                alt: "Attack on Titan",
                type: "coverPoster",
                url: "/library/metadata/57/thumb/1724061366"
              },
              {
                alt: "Attack on Titan",
                type: "background",
                url: "/library/metadata/57/art/1724061366"
              }
            ],
            UltraBlurColors: {
              topLeft: "4e1c05",
              topRight: "4f1e0a",
              bottomRight: "993c1a",
              bottomLeft: "4b1709"
            },
            Genre: [
              {
                tag: "Horror"
              },
              {
                tag: "Fantasy"
              }
            ],
            Role: [
              {
                tag: "Yuki Kaji"
              },
              {
                tag: "Yui Ishikawa"
              },
              {
                tag: "Marina Inoue"
              }
            ]
          },
          {
            ratingKey: "3556",
            key: "/library/metadata/3556/children",
            guid: "com.plexapp.agents.thetvdb://78987?lang=en",
            studio: "Tokyo Broadcasting System",
            type: "show",
            title: "Black Cat",
            contentRating: "TV-14",
            summary:
              "A group of assasins are controled by Chronos. They all have a number on their neck. But number 13 which is Black Cat has the characteristics of a cat, because a witch cursed him. He is supposed to kill people but he also hates the thought of killing people.\r\nThe world is secretly controlled by a secret organizition, Chronos. Under the command of this mysterious organization, are the Chronos Numbers, a group of powerful assasins, taking orders to eliminate certain target secretly to keep the so-called `peace`. One of the most powerful is the Number XIII, Train Hartnett, or known as Black Cat. At first he seems to be a cruel killer, a meeting with a girl Sweeper changed him completely. Now as a Sweeper, Train travelled with his partner Sven Volfied to hunt down criminals.",
            index: 1,
            rating: 8.9,
            year: 2005,
            thumb: "/library/metadata/3556/thumb/1640367137",
            art: "/library/metadata/3556/art/1640367137",
            banner: "/library/metadata/3556/banner/1640367137",
            duration: 1500000,
            originallyAvailableAt: "2005-10-07",
            leafCount: 24,
            viewedLeafCount: 0,
            childCount: 1,
            addedAt: 1552930790,
            updatedAt: 1640367137,
            Image: [
              {
                alt: "Black Cat",
                type: "coverPoster",
                url: "/library/metadata/3556/thumb/1640367137"
              },
              {
                alt: "Black Cat",
                type: "background",
                url: "/library/metadata/3556/art/1640367137"
              }
            ],
            UltraBlurColors: {
              topLeft: "0c2f50",
              topRight: "113858",
              bottomRight: "3e57a8",
              bottomLeft: "245284"
            },
            Genre: [
              {
                tag: "Crime"
              },
              {
                tag: "Action"
              }
            ],
            Role: [
              {
                tag: "Keiji Fujiwara"
              },
              {
                tag: "Misato Fukuen"
              },
              {
                tag: "Takashi Kondou"
              }
            ]
          },
          {
            ratingKey: "1221",
            key: "/library/metadata/1221/children",
            guid: "com.plexapp.agents.thetvdb://79604?lang=en",
            studio: "Tokyo MX",
            type: "show",
            title: "Black Lagoon",
            contentRating: "TV-MA",
            summary:
              "Okajima Rokuro - now known almost exclusively as 'Rock' - was once a typical, put-upon Japanese businessman. Then, on a routine business trip, he was kidnapped and ransomed by the Lagoon Company: a band of mercenary pirates operating out of the crime-riddled city of Roanapur. Abandoned by his bosses, he joined the Lagoon Company. Now he must try and stay afloat amongst the ever-shifting politics of the criminal underworld, while simultaneously avoiding death at the hands of his quick-tempered, gun-toting co-worker, 'Two Hand' Revy. ",
            index: 1,
            rating: 8.0,
            year: 2006,
            thumb: "/library/metadata/1221/thumb/1640367168",
            art: "/library/metadata/1221/art/1640367168",
            banner: "/library/metadata/1221/banner/1640367168",
            theme: "/library/metadata/1221/theme/1640367168",
            duration: 1500000,
            originallyAvailableAt: "2006-04-09",
            leafCount: 29,
            viewedLeafCount: 0,
            childCount: 1,
            addedAt: 1552687240,
            updatedAt: 1640367168,
            Image: [
              {
                alt: "Black Lagoon",
                type: "coverPoster",
                url: "/library/metadata/1221/thumb/1640367168"
              },
              {
                alt: "Black Lagoon",
                type: "background",
                url: "/library/metadata/1221/art/1640367168"
              }
            ],
            UltraBlurColors: {
              topLeft: "162e4f",
              topRight: "9c3631",
              bottomRight: "1a4c96",
              bottomLeft: "182b54"
            },
            Genre: [
              {
                tag: "Animation"
              },
              {
                tag: "Adventure"
              }
            ],
            Role: [
              {
                tag: "Jun Karasawa"
              },
              {
                tag: "Daisuke Namikawa"
              },
              {
                tag: "Megumi Toyoguchi"
              }
            ]
          },
          {
            ratingKey: "5604",
            key: "/library/metadata/5604/children",
            guid: "com.plexapp.agents.thetvdb://74796?lang=en",
            studio: "TV Tokyo",
            type: "show",
            title: "Bleach",
            contentRating: "TV-MA",
            summary:
              "For as long as he can remember, Ichigo Kurosaki has been able to see ghosts. But when he meets Rukia, a Soul Reaper who battles evil spirits known as Hollows, he finds his life is changed forever when Rukia transfers most of her powers to him. Now a Soul Reaper himself with a newfound wealth of spiritual energy, Ichigo discovers his true calling: to protect the living and the dead from evil.",
            index: 1,
            rating: 7.9,
            viewCount: 5,
            skipCount: 1,
            lastViewedAt: 1720283316,
            year: 2004,
            thumb: "/library/metadata/5604/thumb/1726582203",
            art: "/library/metadata/5604/art/1726582203",
            banner: "/library/metadata/5604/banner/1726582203",
            theme: "/library/metadata/5604/theme/1726582203",
            duration: 1500000,
            originallyAvailableAt: "2004-10-04",
            leafCount: 393,
            viewedLeafCount: 2,
            childCount: 18,
            seasonCount: 17,
            addedAt: 1553396573,
            updatedAt: 1726582203,
            Image: [
              {
                alt: "Bleach",
                type: "coverPoster",
                url: "/library/metadata/5604/thumb/1726582203"
              },
              {
                alt: "Bleach",
                type: "background",
                url: "/library/metadata/5604/art/1726582203"
              }
            ],
            UltraBlurColors: {
              topLeft: "00314c",
              topRight: "770b37",
              bottomRight: "360c19",
              bottomLeft: "0b4a64"
            },
            Genre: [
              {
                tag: "Fantasy"
              },
              {
                tag: "Animation"
              }
            ],
            Role: [
              {
                tag: "Masakazu Morita"
              },
              {
                tag: "Fumiko Orikasa"
              },
              {
                tag: "Yuki Matsuoka"
              }
            ]
          },
          {
            ratingKey: "1733",
            key: "/library/metadata/1733/children",
            guid: "com.plexapp.agents.thetvdb://79995?lang=en",
            studio: "Nippon TV",
            type: "show",
            title: "Claymore",
            contentRating: "TV-MA",
            summary:
              "Based on a shounen manga by Yagi Norihiro serialised in Monthly Shounen Jump.\r\n\r\nThe setting of the story is a fictional world of abundant towns where humans coexist with demons called Yoma. These monsters feed on humans as their main source of food, hiding themselves in human society until they strike.\r\n\r\nA group of skilled warriors form a nameless organization to protect humans from these demons. These warriors are called Claymores, after their immense Claymore weapons. They willingly infuse themselves with demon flesh and blood to become powerful half-human hybrids. Villages in danger of attack hire warriors from the organisation for protection.\r\n\r\nThe story of Claymore follows the adventures of the beautiful Claymore warrior Claire, who fights demons and struggles to hold on to her humanity.\r\n\r\nLong ago, the Yoma, the shape changing demons, took human form to live in disguise among human society. They feed on human innards, and take possession of memories from the brains of people they eat. These acquired memories help them better disguise themselves within human society.\r\n\r\nIn recent years, a secret society discovers a way of implanting demon bodies and body parts into humans, to create hybrids more powerful than the original demons. A hybrid's standard abilities include faster healing, limited shape modification, the ability to detect other demons and hybrids, and overall enhanced physical prowess. Almost all hybrids are created against their will; they are typically survivors of families attacked by demons. The only exception is the lead character, who volunteered to become a hybrid to avenge her family. The society sends hybrids to towns that can afford their fares to kill demons, although not every hybrid does so willingly (this is implied in the manga.) The society is often strict and harsh; hybrids who break the rules risk being hunted down by their fellow hybrids.",
            index: 1,
            rating: 8.0,
            viewCount: 21,
            skipCount: 3,
            lastViewedAt: 1564758734,
            year: 2007,
            thumb: "/library/metadata/1733/thumb/1640367193",
            art: "/library/metadata/1733/art/1640367193",
            banner: "/library/metadata/1733/banner/1640367193",
            theme: "/library/metadata/1733/theme/1640367193",
            duration: 1500000,
            originallyAvailableAt: "2007-04-03",
            leafCount: 26,
            viewedLeafCount: 18,
            childCount: 1,
            addedAt: 1552727021,
            updatedAt: 1640367193,
            Image: [
              {
                alt: "Claymore",
                type: "coverPoster",
                url: "/library/metadata/1733/thumb/1640367193"
              },
              {
                alt: "Claymore",
                type: "background",
                url: "/library/metadata/1733/art/1640367193"
              }
            ],
            UltraBlurColors: {
              topLeft: "0c0b0d",
              topRight: "1a1716",
              bottomRight: "3e3a39",
              bottomLeft: "211f1f"
            },
            Genre: [
              {
                tag: "Fantasy"
              },
              {
                tag: "Animation"
              }
            ],
            Role: [
              {
                tag: "Houko Kuwashima"
              },
              {
                tag: "Motoki Takagi"
              },
              {
                tag: "Ai Orikasa"
              }
            ]
          },
          {
            ratingKey: "979",
            key: "/library/metadata/979/children",
            guid: "com.plexapp.agents.thetvdb://76885?lang=en",
            studio: "TV Tokyo",
            type: "show",
            title: "Cowboy Bebop",
            contentRating: "TV-MA",
            summary:
              'In the year 2071 humanity has colonized the entire Solar System through the use of "Phase Difference Space Gates". A catastrophic accident occurred during the development of the Gates, damaging both the Earth and the Moon, heavily irradiating the surface, and forcing most of mankind to evacuate to other planets of the Solar System.\r\n\r\nWherever humanity goes, so goes its criminal element, and thus the need for those who hunt criminals. The newly formed solar system police reinstated the bounty scheme of the Wild West. Cowboy Bebop is the story of the four inhabitants of the spaceship Bebop, and the living they barely make at bounty hunting.',
            index: 1,
            rating: 9.1,
            year: 1998,
            thumb: "/library/metadata/979/thumb/1640367200",
            art: "/library/metadata/979/art/1640367200",
            banner: "/library/metadata/979/banner/1640367200",
            theme: "/library/metadata/979/theme/1640367200",
            duration: 1500000,
            originallyAvailableAt: "1998-04-03",
            leafCount: 26,
            viewedLeafCount: 0,
            childCount: 1,
            addedAt: 1552685855,
            updatedAt: 1640367200,
            Image: [
              {
                alt: "Cowboy Bebop",
                type: "coverPoster",
                url: "/library/metadata/979/thumb/1640367200"
              },
              {
                alt: "Cowboy Bebop",
                type: "background",
                url: "/library/metadata/979/art/1640367200"
              }
            ],
            UltraBlurColors: {
              topLeft: "122d54",
              topRight: "29529a",
              bottomRight: "80521d",
              bottomLeft: "92413f"
            },
            Genre: [
              {
                tag: "Science Fiction"
              },
              {
                tag: "Adventure"
              }
            ],
            Role: [
              {
                tag: "Kouichi Yamadera"
              },
              {
                tag: "Unshou Ishizuka"
              },
              {
                tag: "Megumi Hayashibara"
              }
            ]
          },
          {
            ratingKey: "4269",
            key: "/library/metadata/4269/children",
            guid: "com.plexapp.agents.thetvdb://79481?lang=en",
            studio: "Nippon TV",
            type: "show",
            title: "Death Note",
            contentRating: "TV-MA",
            summary:
              "When a Japanese high schooler comes into possession of a mystical notebook, he finds he has the power to kill anybody whose name he enters in it.",
            index: 1,
            rating: 9.0,
            year: 2006,
            thumb: "/library/metadata/4269/thumb/1640367238",
            art: "/library/metadata/4269/art/1640367238",
            banner: "/library/metadata/4269/banner/1640367238",
            theme: "/library/metadata/4269/theme/1640367238",
            duration: 1320000,
            originallyAvailableAt: "2006-10-04",
            leafCount: 37,
            viewedLeafCount: 0,
            childCount: 1,
            addedAt: 1552931028,
            updatedAt: 1640367238,
            Image: [
              {
                alt: "Death Note",
                type: "coverPoster",
                url: "/library/metadata/4269/thumb/1640367238"
              },
              {
                alt: "Death Note",
                type: "background",
                url: "/library/metadata/4269/art/1640367238"
              }
            ],
            UltraBlurColors: {
              topLeft: "4a2013",
              topRight: "864e21",
              bottomRight: "1c1717",
              bottomLeft: "973a2f"
            },
            Genre: [
              {
                tag: "Fantasy"
              },
              {
                tag: "Drama"
              }
            ],
            Role: [
              {
                tag: "Mamoru Miyano"
              },
              {
                tag: "Nakamura Shidō II"
              },
              {
                tag: "Masaya Matsukaze"
              }
            ]
          },
          {
            ratingKey: "4386",
            key: "/library/metadata/4386/children",
            guid: "com.plexapp.agents.thetvdb://289177?lang=en",
            studio: "Nippon TV",
            type: "show",
            title: "Death Parade",
            contentRating: "TV-MA",
            summary:
              '"Welcome to QuinnDecim." What greets two unsuspecting guests is a strange bar, QuinnDecim, and the white-haired bartender, Decim. "From here you two shall begin a battle where your lives hang in the balance," he says to introduce the Death Game. Before long the guests\' true natures become apparent. As a matter of course, at the game\'s end Decim is revealed to be the "arbiter." Decim\'s judgement on the two guests is...',
            index: 1,
            rating: 8.1,
            year: 2015,
            thumb: "/library/metadata/4386/thumb/1640367215",
            art: "/library/metadata/4386/art/1640367215",
            banner: "/library/metadata/4386/banner/1640367215",
            theme: "/library/metadata/4386/theme/1640367215",
            duration: 1320000,
            originallyAvailableAt: "2015-01-10",
            leafCount: 12,
            viewedLeafCount: 0,
            childCount: 1,
            addedAt: 1552964652,
            updatedAt: 1640367215,
            Image: [
              {
                alt: "Death Parade",
                type: "coverPoster",
                url: "/library/metadata/4386/thumb/1640367215"
              },
              {
                alt: "Death Parade",
                type: "background",
                url: "/library/metadata/4386/art/1640367215"
              }
            ],
            UltraBlurColors: {
              topLeft: "0c0417",
              topRight: "331a44",
              bottomRight: "27163d",
              bottomLeft: "070312"
            },
            Genre: [
              {
                tag: "Drama"
              },
              {
                tag: "Animation"
              }
            ],
            Role: [
              {
                tag: "Ikuko Tani"
              },
              {
                tag: "Takahiro Sakurai"
              },
              {
                tag: "Keiji Fujiwara"
              }
            ]
          },
          {
            ratingKey: "27380",
            key: "/library/metadata/27380/children",
            guid: "com.plexapp.agents.thetvdb://88031?lang=en",
            studio: "Fuji TV",
            type: "show",
            title: "Dragon Ball Kai",
            contentRating: "TV-14",
            summary:
              "Rejoin Goku and his friends in a series of cosmic battles!  Toei has redubbed, recut, and cleaned up the animation of the original 1989 animated series.  The show's story arc has been refined to better follow the comic book series on which it is based.  The show also features a new opening and ending.\r\n\r\nIn the series, martial artist Goku, and his various friends, battle increasingly powerful enemies to defend the world against evil.  Can Earth's defender defeat demons, aliens, and other villains?  ",
            index: 1,
            rating: 8.9,
            year: 2009,
            thumb: "/library/metadata/27380/thumb/1640367321",
            art: "/library/metadata/27380/art/1640367321",
            banner: "/library/metadata/27380/banner/1640367321",
            duration: 1500000,
            originallyAvailableAt: "2009-04-05",
            leafCount: 105,
            viewedLeafCount: 0,
            childCount: 2,
            addedAt: 1586252029,
            updatedAt: 1640367321,
            Image: [
              {
                alt: "Dragon Ball Kai",
                type: "coverPoster",
                url: "/library/metadata/27380/thumb/1640367321"
              },
              {
                alt: "Dragon Ball Kai",
                type: "background",
                url: "/library/metadata/27380/art/1640367321"
              }
            ],
            UltraBlurColors: {
              topLeft: "0b3815",
              topRight: "8d4823",
              bottomRight: "4b54a4",
              bottomLeft: "2d6d3c"
            },
            Genre: [
              {
                tag: "Fantasy"
              },
              {
                tag: "Animation"
              }
            ],
            Role: [
              {
                tag: "Masako Nozawa"
              },
              {
                tag: "Ryo Horikawa"
              },
              {
                tag: "Toshio Furukawa"
              }
            ]
          },
          {
            ratingKey: "22398",
            key: "/library/metadata/22398/children",
            guid: "com.plexapp.agents.thetvdb://75941?lang=en",
            studio: "AT-X",
            type: "show",
            title: "Elfen Lied",
            contentRating: "TV-MA",
            summary:
              'The diclonius, otherwise known as a two-horned human, are mutants of the human species, and may well be the next step in human evolution. The diclonius have horns and strong telekinetic powers represented by "vectors". However with this great power, they can easily destroy the human race. Fearful of their power, humans quarantined the diclonius into secret research facilities to study. However, in a freak accident, a enraged female diclonius escaped, killing many guards in the process. While escaping, she is shot in the head, and falls into the ocean. As a result she has waves of amnesia. Later, she washes ashore. There, she meets two people named Kouta and Yuka, who name the female diclonius "Nyuu", after the only word she can say. They decide to watch after her, but of course, the research facility can\'t have this, and begin trying to retrieve her by any means necessary.',
            index: 1,
            rating: 8.2,
            viewCount: 1,
            skipCount: 1,
            lastViewedAt: 1586810201,
            year: 2004,
            thumb: "/library/metadata/22398/thumb/1640367247",
            art: "/library/metadata/22398/art/1640367247",
            banner: "/library/metadata/22398/banner/1640367247",
            duration: 1500000,
            originallyAvailableAt: "2004-07-25",
            leafCount: 13,
            viewedLeafCount: 1,
            childCount: 1,
            addedAt: 1566759226,
            updatedAt: 1640367247,
            Image: [
              {
                alt: "Elfen Lied",
                type: "coverPoster",
                url: "/library/metadata/22398/thumb/1640367247"
              },
              {
                alt: "Elfen Lied",
                type: "background",
                url: "/library/metadata/22398/art/1640367247"
              }
            ],
            UltraBlurColors: {
              topLeft: "570e10",
              topRight: "5f1619",
              bottomRight: "300808",
              bottomLeft: "751e22"
            },
            Genre: [
              {
                tag: "Horror"
              },
              {
                tag: "Drama"
              }
            ],
            Role: [
              {
                tag: "Eriko Ishihara"
              },
              {
                tag: "Hagiwara Emiko"
              },
              {
                tag: "Mamiko Noto"
              }
            ]
          },
          {
            ratingKey: "9359",
            key: "/library/metadata/9359/children",
            guid: "com.plexapp.agents.thetvdb://114801?lang=en",
            studio: "TV Tokyo",
            type: "show",
            title: "Fairy Tail",
            contentRating: "TV-14",
            summary:
              'In the land of Fiore, magic is everywhere. Sorcerers are like skilled tradesmen who band together in "guilds" and take on paying assignments for non-magic wielders, like hunting monsters, retrieving lost items or running odd errands. Lucy is an aspiring wizard who wants to hook up with the coolest guild around, Fairy Tail. One day, she meets a red-headed boy who saves her from a unscrupulous wizard, and before she knows it, she\'s introduced to the wild and wacky band of wizards of Fairy Tail and begins the adventure of a lifetime.',
            index: 1,
            rating: 7.9,
            year: 2009,
            thumb: "/library/metadata/9359/thumb/1640367377",
            art: "/library/metadata/9359/art/1640367377",
            banner: "/library/metadata/9359/banner/1640367377",
            duration: 1500000,
            originallyAvailableAt: "2009-10-12",
            leafCount: 179,
            viewedLeafCount: 0,
            childCount: 5,
            addedAt: 1560023608,
            updatedAt: 1640367377,
            Image: [
              {
                alt: "Fairy Tail",
                type: "coverPoster",
                url: "/library/metadata/9359/thumb/1640367377"
              },
              {
                alt: "Fairy Tail",
                type: "background",
                url: "/library/metadata/9359/art/1640367377"
              }
            ],
            UltraBlurColors: {
              topLeft: "561109",
              topRight: "332c65",
              bottomRight: "272e68",
              bottomLeft: "9c3727"
            },
            Genre: [
              {
                tag: "Fantasy"
              },
              {
                tag: "Comedy"
              }
            ],
            Role: [
              {
                tag: "Tetsuya Kakihara"
              },
              {
                tag: "Aya Hirano"
              },
              {
                tag: "Rie Kugimiya"
              }
            ]
          },
          {
            ratingKey: "9461",
            key: "/library/metadata/9461/children",
            guid: "com.plexapp.agents.thetvdb://75579?lang=en",
            studio: "Animax",
            type: "show",
            title: "Fullmetal Alchemist",
            contentRating: "TV-14",
            summary:
              "Two young brothers are raised as alchemists, but when they are severely injured trying to perform a forbidden act, they begin searching for the one thing that can save them; the fabled philosopher's stone.",
            index: 1,
            rating: 8.8,
            viewCount: 28,
            skipCount: 2,
            lastViewedAt: 1560528627,
            year: 2003,
            thumb: "/library/metadata/9461/thumb/1640367328",
            art: "/library/metadata/9461/art/1640367328",
            banner: "/library/metadata/9461/banner/1640367328",
            duration: 1500000,
            originallyAvailableAt: "2003-10-04",
            leafCount: 51,
            viewedLeafCount: 28,
            childCount: 1,
            addedAt: 1560025033,
            updatedAt: 1640367328,
            Image: [
              {
                alt: "Fullmetal Alchemist",
                type: "coverPoster",
                url: "/library/metadata/9461/thumb/1640367328"
              },
              {
                alt: "Fullmetal Alchemist",
                type: "background",
                url: "/library/metadata/9461/art/1640367328"
              }
            ],
            UltraBlurColors: {
              topLeft: "4c1b22",
              topRight: "893b3d",
              bottomRight: "973b3f",
              bottomLeft: "904529"
            },
            Genre: [
              {
                tag: "Fantasy"
              },
              {
                tag: "Drama"
              }
            ],
            Role: [
              {
                tag: "Romi Paku"
              },
              {
                tag: "Rie Kugimiya"
              },
              {
                tag: "Tooru Ookawa"
              }
            ]
          },
          {
            ratingKey: "8310",
            key: "/library/metadata/8310/children",
            guid: "com.plexapp.agents.thetvdb://307375?lang=en",
            studio: "Tokyo MX",
            type: "show",
            title: "Mob Psycho 100",
            contentRating: "TV-14",
            summary:
              'Kageyama Shigeo (a.k.a. "Mob") is a 8th grader with psychic abilities. He could bend spoons and lift objects with his mind from a young age, but he slowly began to withhold from using his abilities in public due to the negative attention he kept receiving. Now, the only thing he wants is to become friends with a girl in his class, Tsubomi. With his psychic "mentor" (who has no psychic powers), he continues his daily life, attempting to realize his purpose in life.',
            index: 1,
            rating: 9.0,
            year: 2016,
            thumb: "/library/metadata/8310/thumb/1671643061",
            art: "/library/metadata/8310/art/1671643061",
            banner: "/library/metadata/8310/banner/1671643061",
            duration: 1440000,
            originallyAvailableAt: "2016-07-11",
            leafCount: 38,
            viewedLeafCount: 0,
            childCount: 3,
            addedAt: 1557941187,
            updatedAt: 1671643061,
            Image: [
              {
                alt: "Mob Psycho 100",
                type: "coverPoster",
                url: "/library/metadata/8310/thumb/1671643061"
              },
              {
                alt: "Mob Psycho 100",
                type: "background",
                url: "/library/metadata/8310/art/1671643061"
              }
            ],
            UltraBlurColors: {
              topLeft: "282658",
              topRight: "5e4da2",
              bottomRight: "4d53a4",
              bottomLeft: "273064"
            },
            Genre: [
              {
                tag: "Science Fiction"
              },
              {
                tag: "Comedy"
              }
            ],
            Role: [
              {
                tag: "Setsuo Itou"
              },
              {
                tag: "Takahiro Sakurai"
              },
              {
                tag: "Akio Ootsuka"
              }
            ]
          },
          {
            ratingKey: "43906",
            key: "/library/metadata/43906/children",
            guid: "com.plexapp.agents.hama://anidb-2127?lang=en",
            studio: "Toei Animation",
            type: "show",
            title: "Mushrambo",
            summary:
              "Humanity is exterminated by a genetic race they created to fight a deadly virus. One of the scientist brings his young daughter in a cryogenic sleep, hoping that she will awaken one day and find surviving humans, so that she can bring peace between them and the genetic beings, the Enterrans. The girl, Yakumo received special powers at the impact of a meteorite, the impact after which the Enterrans went evil. When she awakens, 500 years later, she goes on her journey and meets three Enterrans who join her. Together with them she slowly finds from the secrets of the past, what happened to her home planet in reality.\nThere is a third season made by a smaller Japanese organisation, not by Toei. This season was half aired in Japan, under a new name. It aired in its entirety in Germany and a few other countries. There are also unverified rumours of a fourth season.",
            index: 1,
            rating: 4.4,
            lastViewedAt: 1622468470,
            year: 2000,
            thumb: "/library/metadata/43906/thumb/1622069087",
            duration: 1500000,
            originallyAvailableAt: "2000-02-05",
            leafCount: 32,
            viewedLeafCount: 0,
            childCount: 1,
            addedAt: 1622069051,
            updatedAt: 1622069087,
            Image: [
              {
                alt: "Mushrambo",
                type: "coverPoster",
                url: "/library/metadata/43906/thumb/1622069087"
              }
            ],
            UltraBlurColors: {
              topLeft: "4c1d1d",
              topRight: "7c1a1c",
              bottomRight: "af1317",
              bottomLeft: "ab1d1e"
            },
            Genre: [
              {
                tag: "Adventure"
              },
              {
                tag: "Angst"
              }
            ],
            Role: [
              {
                tag: "Minaguchi Yuuko"
              },
              {
                tag: "Takayama Minami"
              },
              {
                tag: "Kawazu Yasuhiko"
              }
            ]
          },
          {
            ratingKey: "9518",
            key: "/library/metadata/9518/children",
            guid: "com.plexapp.agents.thetvdb://305074?lang=en",
            studio: "Nippon TV",
            type: "show",
            title: "My Hero Academia",
            contentRating: "TV-14",
            summary:
              "A superhero-loving boy without any powers is determined to enroll in a prestigious hero academy and learn what it really means to be a hero.\r\n",
            index: 1,
            rating: 8.8,
            lastViewedAt: 1726348188,
            year: 2016,
            thumb: "/library/metadata/9518/thumb/1726307093",
            art: "/library/metadata/9518/art/1726307093",
            banner: "/library/metadata/9518/banner/1726307093",
            duration: 1380000,
            originallyAvailableAt: "2016-04-02",
            leafCount: 163,
            viewedLeafCount: 0,
            childCount: 8,
            seasonCount: 7,
            addedAt: 1560197575,
            updatedAt: 1726307093,
            Image: [
              {
                alt: "My Hero Academia",
                type: "coverPoster",
                url: "/library/metadata/9518/thumb/1726307093"
              },
              {
                alt: "My Hero Academia",
                type: "background",
                url: "/library/metadata/9518/art/1726307093"
              }
            ],
            UltraBlurColors: {
              topLeft: "4c1d14",
              topRight: "933d4e",
              bottomRight: "276d49",
              bottomLeft: "216b60"
            },
            Genre: [
              {
                tag: "Science Fiction"
              },
              {
                tag: "Fantasy"
              }
            ],
            Role: [
              {
                tag: "Daiki Yamashita"
              },
              {
                tag: "Nobuhiko Okamoto"
              },
              {
                tag: "Ayane Sakura"
              }
            ]
          },
          {
            ratingKey: "40081",
            key: "/library/metadata/40081/children",
            guid: "com.plexapp.agents.none://40081?lang=xn",
            type: "show",
            title: "Naruto Kai",
            summary: "",
            index: 1,
            viewCount: 12,
            skipCount: 2,
            lastViewedAt: 1674322575,
            leafCount: 72,
            viewedLeafCount: 59,
            childCount: 3,
            addedAt: 1604671304,
            updatedAt: 1605008899
          },
          {
            ratingKey: "40166",
            key: "/library/metadata/40166/children",
            skipChildren: true,
            guid: "com.plexapp.agents.hama://anidb-4880?lang=en",
            studio: "Studio Pierrot",
            type: "show",
            title: "Naruto: Shippuden",
            titleSort: "Naruto Shippuuden",
            contentRating: "TV-PG",
            summary:
              "Naruto Uzumaki, is a loud, hyperactive, adolescent ninja who constantly searches for approval and recognition, as well as to become Hokage, who is acknowledged as the leader and strongest of all ninja in the village.",
            index: 1,
            rating: 5.8,
            viewCount: 101,
            skipCount: 5,
            lastViewedAt: 1718737376,
            year: 2007,
            thumb: "/library/metadata/40166/thumb/1605009080",
            art: "/library/metadata/40166/art/1605009080",
            banner: "/library/metadata/40166/banner/1605009080",
            theme: "/library/metadata/40166/theme/1605009080",
            duration: 1380000,
            originallyAvailableAt: "2007-02-15",
            leafCount: 500,
            viewedLeafCount: 98,
            childCount: 1,
            addedAt: 1604971385,
            updatedAt: 1605009080,
            flattenSeasons: "1",
            showOrdering: "tvdbAbsolute",
            Image: [
              {
                alt: "Naruto: Shippuden",
                type: "coverPoster",
                url: "/library/metadata/40166/thumb/1605009080"
              },
              {
                alt: "Naruto: Shippuden",
                type: "background",
                url: "/library/metadata/40166/art/1605009080"
              }
            ],
            UltraBlurColors: {
              topLeft: "4e1a1d",
              topRight: "814729",
              bottomRight: "264f78",
              bottomLeft: "9d3245"
            },
            Genre: [
              {
                tag: "Action"
              },
              {
                tag: "Adventure"
              }
            ],
            Role: [
              {
                tag: "Takeuchi Junko"
              },
              {
                tag: "Ootsuka Houchuu"
              },
              {
                tag: "Inoue Kazuhiko"
              }
            ]
          },
          {
            ratingKey: "2905",
            key: "/library/metadata/2905/children",
            guid: "com.plexapp.agents.thetvdb://81797?lang=en",
            studio: "Fuji TV",
            type: "show",
            title: "One Piece",
            contentRating: "TV-Y7",
            summary:
              'The adventures of Monkey D. Luffy and his pirate crew in order to find the greatest treasure ever left by the legendary Pirate, Gold Roger. The famous mystery treasure named "One Piece".\r\n',
            index: 1,
            rating: 1521628.0,
            viewCount: 237,
            skipCount: 6,
            lastViewedAt: 1722875639,
            year: 1999,
            thumb: "/library/metadata/2905/thumb/1711868578",
            art: "/library/metadata/2905/art/1711868578",
            banner: "/library/metadata/2905/banner/1711868578",
            theme: "/library/metadata/2905/theme/1711868578",
            duration: 1500000,
            originallyAvailableAt: "1999-10-19",
            leafCount: 428,
            viewedLeafCount: 394,
            childCount: 12,
            addedAt: 1552907862,
            updatedAt: 1711868578,
            Image: [
              {
                alt: "One Piece",
                type: "coverPoster",
                url: "/library/metadata/2905/thumb/1711868578"
              },
              {
                alt: "One Piece",
                type: "background",
                url: "/library/metadata/2905/art/1711868578"
              }
            ],
            UltraBlurColors: {
              topLeft: "53160d",
              topRight: "7e5316",
              bottomRight: "8d3c29",
              bottomLeft: "813a33"
            },
            Genre: [
              {
                tag: "Fantasy"
              },
              {
                tag: "Drama"
              }
            ],
            Role: [
              {
                tag: "Mayumi Tanaka"
              },
              {
                tag: "Kazuya Nakai"
              },
              {
                tag: "Wakana Yamazaki"
              }
            ]
          },
          {
            ratingKey: "1252",
            key: "/library/metadata/1252/children",
            guid: "com.plexapp.agents.thetvdb://293088?lang=en",
            studio: "TV Tokyo",
            type: "show",
            title: "One-Punch Man",
            contentRating: "TV-14",
            summary:
              "Saitama is a superhero who has trained so hard that his hair has fallen out, and who can overcome any enemy with one punch. However, because he is so strong, he has become bored and frustrated that he wins all of his battles too easily.",
            index: 1,
            rating: 8.9,
            viewCount: 41,
            skipCount: 3,
            lastViewedAt: 1650482934,
            year: 2015,
            thumb: "/library/metadata/1252/thumb/1640367444",
            art: "/library/metadata/1252/art/1640367444",
            banner: "/library/metadata/1252/banner/1640367444",
            theme: "/library/metadata/1252/theme/1640367444",
            duration: 1500000,
            originallyAvailableAt: "2015-10-04",
            leafCount: 25,
            viewedLeafCount: 25,
            childCount: 3,
            seasonCount: 2,
            addedAt: 1552687243,
            updatedAt: 1640367444,
            Image: [
              {
                alt: "One-Punch Man",
                type: "coverPoster",
                url: "/library/metadata/1252/thumb/1640367444"
              },
              {
                alt: "One-Punch Man",
                type: "background",
                url: "/library/metadata/1252/art/1640367444"
              }
            ],
            UltraBlurColors: {
              topLeft: "501910",
              topRight: "28396e",
              bottomRight: "9d3621",
              bottomLeft: "346a50"
            },
            Genre: [
              {
                tag: "Science Fiction"
              },
              {
                tag: "Comedy"
              }
            ],
            Role: [
              {
                tag: "Kaito Ishikawa"
              },
              {
                tag: "Makoto Furukawa"
              },
              {
                tag: "Kenjirou Tsuda"
              }
            ]
          },
          {
            ratingKey: "9712",
            key: "/library/metadata/9712/children",
            guid: "com.plexapp.agents.thetvdb://79654?lang=en",
            studio: "TV Asahi",
            type: "show",
            title: "Shin Chan",
            contentRating: "TV-PG",
            summary:
              "Crayon Shin-chan is a popular yet controversial Japanese anime series. FUNimation made their dub more mature in content compared to the original. Shin is a 5-year-old boy who is constantly doing and saying inappropriate things, much to the dismay and annoyance of those around him, with hilarious results. Shin along with his family including his little sister Himawari and his dog Shiro, as well as his friends from kindergarten, ends up turning everyday situations into funny adventures.",
            index: 1,
            rating: 9.6,
            skipCount: 2,
            lastViewedAt: 1562173684,
            year: 1992,
            thumb: "/library/metadata/9712/thumb/1640367457",
            art: "/library/metadata/9712/art/1640367457",
            banner: "/library/metadata/9712/banner/1640367457",
            duration: 1500000,
            originallyAvailableAt: "1992-04-13",
            leafCount: 1,
            viewedLeafCount: 0,
            childCount: 1,
            addedAt: 1560580971,
            updatedAt: 1640367457,
            Image: [
              {
                alt: "Shin Chan",
                type: "coverPoster",
                url: "/library/metadata/9712/thumb/1640367457"
              },
              {
                alt: "Shin Chan",
                type: "background",
                url: "/library/metadata/9712/art/1640367457"
              }
            ],
            UltraBlurColors: {
              topLeft: "0d3243",
              topRight: "83501a",
              bottomRight: "24573a",
              bottomLeft: "1c6e44"
            },
            Genre: [
              {
                tag: "Family"
              },
              {
                tag: "Comedy"
              }
            ]
          },
          {
            ratingKey: "907",
            key: "/library/metadata/907/children",
            guid: "com.plexapp.agents.thetvdb://81751?lang=en",
            studio: "TV Tokyo",
            type: "show",
            title: "Soul Eater",
            contentRating: "TV-14",
            summary:
              "At the Death Weapon Meister Academy, humans known as Meisters study. Each Meister have their own partner, which is a weapon capable of taking on a human form. The story follows three of these Meisters and their Weapon. They are Maka Alban and her weapon Soul Eater, Black Star and his weapon Tsubaki, and Death the Kid and his weapons Patricia and Elizabeth Thompson. They attend school, do homework, fight evil souls, and most important, they try to help their weapons reach Death Scythe status, in which they are eligible for use by the leader of all the Meisters and Weapons, Death(The Grim Reaper) himself.",
            index: 1,
            rating: 7.7,
            viewCount: 52,
            skipCount: 2,
            lastViewedAt: 1575713332,
            year: 2008,
            thumb: "/library/metadata/907/thumb/1640367490",
            art: "/library/metadata/907/art/1640367490",
            banner: "/library/metadata/907/banner/1640367490",
            theme: "/library/metadata/907/theme/1640367490",
            duration: 1500000,
            originallyAvailableAt: "2008-04-07",
            leafCount: 51,
            viewedLeafCount: 51,
            childCount: 1,
            addedAt: 1552685841,
            updatedAt: 1640367490,
            Image: [
              {
                alt: "Soul Eater",
                type: "coverPoster",
                url: "/library/metadata/907/thumb/1640367490"
              },
              {
                alt: "Soul Eater",
                type: "background",
                url: "/library/metadata/907/art/1640367490"
              }
            ],
            UltraBlurColors: {
              topLeft: "0c343b",
              topRight: "9a3355",
              bottomRight: "983163",
              bottomLeft: "773997"
            },
            Genre: [
              {
                tag: "Fantasy"
              },
              {
                tag: "Comedy"
              }
            ],
            Role: [
              {
                tag: "Koike Izumi"
              },
              {
                tag: "Shouzou Iizuka"
              },
              {
                tag: "Tomie Kataoka"
              }
            ]
          },
          {
            ratingKey: "53972",
            key: "/library/metadata/53972/children",
            guid: "com.plexapp.agents.hama://anidb-17061?lang=en",
            studio: "Wit Studio",
            type: "show",
            title: "Spy x Family (2022)",
            summary:
              "World peace is at stake and secret agent Twilight must undergo his most difficult mission yet—pretend to be a family man. Posing as a loving husband and father, he’ll infiltrate an elite school to get close to a high-profile politician. He has the perfect cover, except his wife’s a deadly assassin and neither knows each other’s identity. But someone does, his adopted daughter who’s a telepath!",
            index: 1,
            rating: 7.8,
            year: 2022,
            thumb: "/library/metadata/53972/thumb/1703533045",
            banner: "/library/metadata/53972/banner/1703533045",
            duration: 1500000,
            originallyAvailableAt: "2022-09-30",
            leafCount: 37,
            viewedLeafCount: 0,
            childCount: 2,
            addedAt: 1703533009,
            updatedAt: 1703533045,
            Image: [
              {
                alt: "Spy x Family (2022)",
                type: "coverPoster",
                url: "/library/metadata/53972/thumb/1703533045"
              }
            ],
            UltraBlurColors: {
              topLeft: "003051",
              topRight: "25677b",
              bottomRight: "884c1d",
              bottomLeft: "864e1f"
            },
            Genre: [
              {
                tag: "Action"
              },
              {
                tag: "Comedy"
              }
            ],
            Role: [
              {
                tag: "Eguchi Takuya"
              },
              {
                tag: "Tanezaki Atsumi"
              },
              {
                tag: "Hayami Saori"
              }
            ]
          },
          {
            ratingKey: "54464",
            key: "/library/metadata/54464/children",
            guid: "com.plexapp.agents.hama://tvdb-347734?lang=en",
            studio: "Toei Animation",
            type: "show",
            title: "Super Dragon Ball Heroes",
            contentRating: "TV-Y7",
            summary:
              "Trunks returns from the future to train with Goku and Vegeta. However, he disappears without warning. Then the mysterious Fu bursts in, telling them that Trunks has been imprisoned in the Prison Planet, a mysterious complex in an unknown place in the universes. The group seeks the dragon balls to free Trunks, but an endless battle awaits them! Will Goku and the others rescue Trunks and escape the Prison Planet?",
            index: 1,
            rating: 2.2,
            year: 2018,
            thumb: "/library/metadata/54464/thumb/1723200736",
            art: "/library/metadata/54464/art/1723200736",
            banner: "/library/metadata/54464/banner/1723200736",
            duration: 600000,
            originallyAvailableAt: "2018-06-30",
            leafCount: 8,
            viewedLeafCount: 0,
            childCount: 2,
            addedAt: 1708341242,
            updatedAt: 1723200736,
            Image: [
              {
                alt: "Super Dragon Ball Heroes",
                type: "coverPoster",
                url: "/library/metadata/54464/thumb/1723200736"
              },
              {
                alt: "Super Dragon Ball Heroes",
                type: "background",
                url: "/library/metadata/54464/art/1723200736"
              }
            ],
            UltraBlurColors: {
              topLeft: "472304",
              topRight: "874d10",
              bottomRight: "874d14",
              bottomLeft: "8c4a0d"
            },
            Genre: [
              {
                tag: "Action"
              },
              {
                tag: "Adventure"
              }
            ],
            Role: [
              {
                tag: "Nozawa Masako"
              },
              {
                tag: "Horikawa Ryou"
              },
              {
                tag: "Kusao Takeshi"
              }
            ]
          },
          {
            ratingKey: "54979",
            key: "/library/metadata/54979/children",
            guid: "com.plexapp.agents.hama://anidb-673?lang=en",
            studio: "Madhouse",
            type: "show",
            title: "Texhnolyze",
            contentRating: "TV-MA",
            summary:
              "In the experimental underground city of Lux, the human spirit is crushed by a Hobbesian nightmare of tribal and ideological conflict. When ‘wild dog’ prize fighter Ichise is brutally maimed, a chance encounter with a rogue doctor of cybernetic Texhnolyze body parts draws him into a spiral of escalating chaos with consequences for the evolution and survival of humanity itself.",
            index: 1,
            rating: 7.1,
            year: 2003,
            thumb: "/library/metadata/54979/thumb/1725051561",
            art: "/library/metadata/54979/art/1725051561",
            banner: "/library/metadata/54979/banner/1725051561",
            theme: "/library/metadata/54979/theme/1725051561",
            duration: 1500000,
            originallyAvailableAt: "2003-04-16",
            leafCount: 22,
            viewedLeafCount: 0,
            childCount: 1,
            addedAt: 1725051486,
            updatedAt: 1725051561,
            Image: [
              {
                alt: "Texhnolyze",
                type: "coverPoster",
                url: "/library/metadata/54979/thumb/1725051561"
              },
              {
                alt: "Texhnolyze",
                type: "background",
                url: "/library/metadata/54979/art/1725051561"
              }
            ],
            Genre: [
              {
                tag: "Animation"
              },
              {
                tag: "Anime"
              }
            ],
            Role: [
              {
                tag: "Inoue Takashi"
              },
              {
                tag: "Tsuchida Hiroshi"
              },
              {
                tag: "Itou Shizuka"
              }
            ]
          },
          {
            ratingKey: "19388",
            key: "/library/metadata/19388/children",
            guid: "com.plexapp.agents.thetvdb://76894?lang=en",
            studio: "TV Tokyo",
            type: "show",
            title: "Yu-Gi-Oh! Duel Monsters",
            summary:
              "Follows the adventures of high school student Yugi, who has a magical secret that comes to life when he plays his favorite card game: 'Duel Monsters.",
            index: 1,
            rating: 9.5,
            year: 2000,
            thumb: "/library/metadata/19388/thumb/1640367593",
            art: "/library/metadata/19388/art/1640367593",
            banner: "/library/metadata/19388/banner/1640367593",
            duration: 1500000,
            originallyAvailableAt: "2000-04-18",
            leafCount: 190,
            viewedLeafCount: 0,
            childCount: 5,
            addedAt: 1562618943,
            updatedAt: 1640367593,
            Image: [
              {
                alt: "Yu-Gi-Oh! Duel Monsters",
                type: "coverPoster",
                url: "/library/metadata/19388/thumb/1640367593"
              },
              {
                alt: "Yu-Gi-Oh! Duel Monsters",
                type: "background",
                url: "/library/metadata/19388/art/1640367593"
              }
            ],
            UltraBlurColors: {
              topLeft: "231d69",
              topRight: "353ea3",
              bottomRight: "2b368e",
              bottomLeft: "0f104b"
            },
            Genre: [
              {
                tag: "Fantasy"
              },
              {
                tag: "Animation"
              }
            ],
            Role: [
              {
                tag: "KONTA"
              },
              {
                tag: "Nozomu Sasaki"
              },
              {
                tag: "Megumi Ogata"
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
