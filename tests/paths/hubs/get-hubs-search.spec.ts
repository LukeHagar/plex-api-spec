import { validateResponseSpec } from "@utils"
import { describe, it } from "vitest"

describe("GET /hubs/search", () => {
  it("should validate the 200 response when the API spec is valid", () => {
    // /hubs/search?query=action
    const response = {
        MediaContainer: {
            size: 17,
            Hub: [
            {
                title: "Genres",
                type: "genre",
                hubIdentifier: "genre",
                context: "",
                size: 3,
                more: false,
                style: "shelf",
                Directory: [
                {
                    key: "/library/sections/1/all?genre=146",
                    librarySectionID: 1,
                    librarySectionKey: "/library/sections/1",
                    librarySectionTitle: "Movies",
                    librarySectionType: 1,
                    reason: "section",
                    reasonID: 1,
                    reasonTitle: "Movies",
                    score: "0.92000",
                    type: "tag",
                    id: 146,
                    filter: "genre=146",
                    tag: "Action",
                    tagType: 1,
                    count: 467
                },
                {
                    key: "/library/sections/2/all?genre=146",
                    librarySectionID: 2,
                    librarySectionKey: "/library/sections/2",
                    librarySectionTitle: "TV shows",
                    librarySectionType: 2,
                    reason: "section",
                    reasonID: 2,
                    reasonTitle: "TV shows",
                    score: "0.92000",
                    type: "tag",
                    id: 146,
                    filter: "genre=146",
                    tag: "Action",
                    tagType: 1,
                    count: 32
                },
                {
                    key: "/library/sections/2/all?genre=56430",
                    librarySectionID: 2,
                    librarySectionKey: "/library/sections/2",
                    librarySectionTitle: "TV shows",
                    librarySectionType: 2,
                    reason: "section",
                    reasonID: 2,
                    reasonTitle: "TV shows",
                    score: "0.52000",
                    type: "tag",
                    id: 56430,
                    filter: "genre=56430",
                    tag: "Action/Adventure",
                    tagType: 1,
                    count: 1
                }
                ]
            },
            {
                title: "Shows",
                type: "show",
                hubIdentifier: "show",
                context: "",
                size: 0,
                more: false,
                style: "shelf"
            },
            {
                title: "Artists",
                type: "artist",
                hubIdentifier: "artist",
                context: "",
                size: 0,
                more: false,
                style: "shelf"
            },
            {
                title: "Albums",
                type: "album",
                hubIdentifier: "album",
                context: "",
                size: 0,
                more: false,
                style: "shelf"
            },
            {
                title: "Episodes",
                type: "episode",
                hubIdentifier: "episode",
                context: "",
                size: 1,
                more: false,
                style: "shelf",
                Metadata: [
                {
                    librarySectionTitle: "TV shows",
                    score: "0.31062",
                    ratingKey: "9126",
                    key: "/library/metadata/9126",
                    parentRatingKey: "9120",
                    grandparentRatingKey: "9119",
                    guid: "plex://episode/5d9c1216170e24001f2ce641",
                    parentGuid: "plex://season/602e67140f4bde002da399f2",
                    grandparentGuid: "plex://show/5d9c0868170e24001f2aa36e",
                    grandparentSlug: "supergirl",
                    type: "episode",
                    title: "Call to Action",
                    grandparentKey: "/library/metadata/9119",
                    parentKey: "/library/metadata/9120",
                    librarySectionID: 2,
                    librarySectionKey: "/library/sections/2",
                    grandparentTitle: "Supergirl",
                    parentTitle: "Season 4",
                    contentRating: "TV-14",
                    summary: "Everyone gathers for Thanksgiving but Kara is feeling down after her televised debate with Ben Lockwood about the anti-alien sentiment coursing through National City. Meanwhile, James and Lena argue about the best way to handle the Children of Liberty.",
                    index: 6,
                    parentIndex: 4,
                    audienceRating: 6.2,
                    thumb: "/library/metadata/9126/thumb/1695293834",
                    art: "/library/metadata/9119/art/1752170643",
                    parentThumb: "/library/metadata/9120/thumb/1695293824",
                    grandparentThumb: "/library/metadata/9119/thumb/1752170643",
                    grandparentArt: "/library/metadata/9119/art/1752170643",
                    grandparentTheme: "/library/metadata/9119/theme/1752170643",
                    duration: 2533384,
                    originallyAvailableAt: "2018-11-18",
                    addedAt: 1555942196,
                    updatedAt: 1695293834,
                    audienceRatingImage: "themoviedb://image.rating",
                    Media: [
                    {
                        id: 21418,
                        duration: 2533384,
                        bitrate: 728,
                        width: 1280,
                        height: 718,
                        aspectRatio: 1.78,
                        audioChannels: 2,
                        audioCodec: "aac",
                        videoCodec: "hevc",
                        videoResolution: "720",
                        container: "mkv",
                        videoFrameRate: "24p",
                        audioProfile: "lc",
                        videoProfile: "main",
                        Part: [
                        {
                            id: 21427,
                            key: "/library/parts/21427/1555942196/file.mkv",
                            duration: 2533384,
                            file: "/share/somewhere/TV Shows/Supergirl/Season 4/Supergirl.S04E06.720p.mkv",
                            size: 231703476,
                            audioProfile: "lc",
                            container: "mkv",
                            videoProfile: "main"
                        }
                        ]
                    }
                    ],
                    Director: [
                    {
                        tag: "Antonio Negret"
                    }
                    ],
                    Writer: [
                    {
                        tag: "Gabriel Llanas"
                    },
                    {
                        tag: "Daniel Beaty"
                    }
                    ],
                    Role: [
                    {
                        tag: "David Ajala"
                    },
                    {
                        tag: "Steve Byers"
                    },
                    {
                        tag: "Graham Verchere"
                    }
                    ]
                }
                ]
            },
            {
                title: "Tracks",
                type: "track",
                hubIdentifier: "track",
                context: "",
                size: 0,
                more: false,
                style: "shelf"
            },
            {
                title: "Photo Albums",
                type: "photoalbum",
                hubIdentifier: "photoalbum",
                context: "",
                size: 0,
                more: false,
                style: "shelf"
            },
            {
                title: "Automatic Tags",
                type: "autotag",
                hubIdentifier: "autotag",
                context: "",
                size: 0,
                more: false,
                style: "shelf"
            },
            {
                title: "Photos",
                type: "photo",
                hubIdentifier: "photo",
                context: "",
                size: 0,
                more: false,
                style: "shelf"
            },
            {
                title: "Tags",
                type: "tag",
                hubIdentifier: "tag",
                context: "",
                size: 0,
                more: false,
                style: "shelf"
            },
            {
                title: "Actors",
                type: "actor",
                hubIdentifier: "actor",
                context: "",
                size: 0,
                more: false,
                style: "shelf"
            },
            {
                title: "Directors",
                type: "director",
                hubIdentifier: "director",
                context: "",
                size: 0,
                more: false,
                style: "shelf"
            },
            {
                title: "Movies",
                type: "movie",
                hubIdentifier: "movie",
                context: "",
                size: 1,
                more: false,
                style: "shelf",
                Metadata: [
                {
                    librarySectionTitle: "Movies",
                    score: "0.33081",
                    ratingKey: "1578",
                    key: "/library/metadata/1578",
                    guid: "plex://movie/5e16336a1493cd003f0d9e99",
                    slug: "class-action-park",
                    studio: "Perennial Media",
                    type: "movie",
                    title: "Class Action Park",
                    librarySectionID: 1,
                    librarySectionKey: "/library/sections/1",
                    contentRating: "Not Rated",
                    summary: "A documentary that focuses on a dangerously legendary water park and its slew of injuries and crimes along with child safety concerns.",
                    rating: 9.6,
                    audienceRating: 8.1,
                    year: 2020,
                    tagline: "Explore the legend, legacy, and truth behind one of the most infamous action parks of the 1980s.",
                    thumb: "/library/metadata/1578/thumb/1749235761",
                    art: "/library/metadata/1578/art/1749235761",
                    duration: 5350133,
                    originallyAvailableAt: "2020-08-27",
                    addedAt: 1604747684,
                    updatedAt: 1749235761,
                    audienceRatingImage: "rottentomatoes://image.rating.upright",
                    primaryExtraKey: "/library/metadata/3056",
                    ratingImage: "rottentomatoes://image.rating.ripe",
                    Media: [
                    {
                        id: 4321,
                        duration: 5350133,
                        bitrate: 1040,
                        width: 1280,
                        height: 720,
                        aspectRatio: 1.78,
                        audioChannels: 2,
                        audioCodec: "aac",
                        videoCodec: "hevc",
                        videoResolution: "720",
                        container: "mkv",
                        videoFrameRate: "24p",
                        audioProfile: "lc",
                        videoProfile: "main",
                        Part: [
                        {
                            id: 4321,
                            key: "/library/parts/4321/1604747684/file.mkv",
                            duration: 5350133,
                            file: "/share/somewhere/Movies/class.action.park.2020.720p.x265.mkv",
                            size: 695844032,
                            audioProfile: "lc",
                            container: "mkv",
                            videoProfile: "main"
                        }
                        ]
                    }
                    ],
                    Genre: [
                    {
                        tag: "Documentary"
                    },
                    {
                        tag: "Crime"
                    }
                    ],
                    Country: [
                    {
                        tag: "United States of America"
                    }
                    ],
                    Director: [
                    {
                        tag: "Seth Porges"
                    },
                    {
                        tag: "Chris Charles Scott III"
                    }
                    ],
                    Writer: [
                    {
                        tag: "Chris Charles Scott III"
                    },
                    {
                        tag: "Seth Porges"
                    }
                    ],
                    Role: [
                    {
                        tag: "Chris Gethard"
                    },
                    {
                        tag: "Jason Scott"
                    },
                    {
                        tag: "Jimmy Kimmel"
                    }
                    ]
                }
                ]
            },
            {
                title: "Collections",
                type: "collection",
                hubIdentifier: "collection",
                context: "",
                size: 0,
                more: false,
                style: "shelf"
            },
            {
                title: "Playlists",
                type: "playlist",
                hubIdentifier: "playlist",
                context: "",
                size: 0,
                more: false,
                style: "shelf"
            },
            {
                title: "Shared",
                type: "shared",
                hubIdentifier: "shared",
                context: "",
                size: 0,
                more: false,
                style: "shelf"
            },
            {
                title: "Places",
                type: "place",
                hubIdentifier: "place",
                context: "",
                size: 0,
                more: false,
                style: "shelf"
            }
            ]
        }
    }

    validateResponseSpec("/hubs/search", "get", 200, response)
  })
})
