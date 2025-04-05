import {
  randPlexUnixEpoch,
  randRelativeSeconds,
  randUUID,
  validateResponseSpec
} from "@utils"
import { describe, it } from "vitest"

describe("GET /library/sections", () => {
  it("should validate the 200 response when the API spec is valid", () => {
    const response = {
      MediaContainer: {
        size: 14,
        allowSync: false,
        title1: "Plex Library",
        Directory: [
          {
            allowSync: true,
            art: "/:/resources/movie-fanart.jpg",
            composite: "/library/sections/7/composite/1893047123",
            filters: true,
            refreshing: false,
            thumb: "/:/resources/movie.png",
            key: "7",
            type: "movie",
            title: "Kids Movies",
            agent: "tv.plex.agents.movie",
            scanner: "Plex Movie",
            language: "en-US",
            uuid: randUUID(),
            updatedAt: randPlexUnixEpoch(),
            createdAt: randPlexUnixEpoch(),
            scannedAt: randPlexUnixEpoch(),
            content: true,
            directory: true,
            contentChangedAt: randRelativeSeconds(),
            hidden: 0,
            Location: [
              {
                id: 25,
                path: "/KidsMovies"
              }
            ]
          },
          {
            allowSync: true,
            art: "/:/resources/movie-fanart.jpg",
            composite: "/library/sections/13/composite/1893047124",
            filters: true,
            refreshing: false,
            thumb: "/:/resources/movie.png",
            key: "13",
            type: "movie",
            title: "Kids Movies NL",
            agent: "tv.plex.agents.movie",
            scanner: "Plex Movie",
            language: "nl-NL",
            uuid: randUUID(),
            updatedAt: randPlexUnixEpoch(),
            createdAt: randPlexUnixEpoch(),
            scannedAt: randPlexUnixEpoch(),
            content: true,
            directory: true,
            contentChangedAt: randRelativeSeconds(),
            hidden: 0,
            Location: [
              {
                id: 23,
                path: "/KidsMoviesNL"
              }
            ]
          },
          {
            allowSync: true,
            art: "/:/resources/movie-fanart.jpg",
            composite: "/library/sections/1/composite/1893047130",
            filters: true,
            refreshing: false,
            thumb: "/:/resources/movie.png",
            key: "1",
            type: "movie",
            title: "Movies",
            agent: "tv.plex.agents.movie",
            scanner: "Plex Movie",
            language: "en-US",
            uuid: randUUID(),
            updatedAt: randPlexUnixEpoch(),
            createdAt: randPlexUnixEpoch(),
            scannedAt: randPlexUnixEpoch(),
            content: true,
            directory: true,
            contentChangedAt: randRelativeSeconds(),
            hidden: 0,
            Location: [
              {
                id: 18,
                path: "/Movies"
              }
            ]
          },
          {
            allowSync: true,
            art: "/:/resources/movie-fanart.jpg",
            composite: "/library/sections/6/composite/1893047135",
            filters: true,
            refreshing: false,
            thumb: "/:/resources/movie.png",
            key: "6",
            type: "movie",
            title: "Movies (Documentaries)",
            agent: "tv.plex.agents.movie",
            scanner: "Plex Movie",
            language: "en-US",
            uuid: randUUID(),
            updatedAt: randPlexUnixEpoch(),
            createdAt: randPlexUnixEpoch(),
            scannedAt: randPlexUnixEpoch(),
            content: true,
            directory: true,
            contentChangedAt: randRelativeSeconds(),
            hidden: 0,
            Location: [
              {
                id: 29,
                path: "/Movies (Documentaries)"
              },
              {
                id: 15,
                path: "/Plex Library/Documentaries"
              }
            ]
          },
          {
            allowSync: true,
            art: "/:/resources/movie-fanart.jpg",
            composite: "/library/sections/15/composite/1893047145",
            filters: true,
            refreshing: false,
            thumb: "/:/resources/movie.png",
            key: "15",
            type: "movie",
            title: "Test Media Movies",
            agent: "tv.plex.agents.movie",
            scanner: "Plex Movie",
            language: "en-US",
            uuid: randUUID(),
            updatedAt: randPlexUnixEpoch(),
            createdAt: randPlexUnixEpoch(),
            scannedAt: randPlexUnixEpoch(),
            content: true,
            directory: true,
            contentChangedAt: randRelativeSeconds(),
            hidden: 0,
            Location: [
              {
                id: 27,
                path: "/TestMedia/Movies"
              }
            ]
          },
          {
            allowSync: true,
            art: "/:/resources/show-fanart.jpg",
            composite: "/library/sections/3/composite/1893047110",
            filters: true,
            refreshing: false,
            thumb: "/:/resources/show.png",
            key: "3",
            type: "show",
            title: "Anime",
            agent: "com.plexapp.agents.hama",
            scanner: "Plex Series Scanner",
            language: "en",
            uuid: randUUID(),
            updatedAt: randPlexUnixEpoch(),
            createdAt: randPlexUnixEpoch(),
            scannedAt: randPlexUnixEpoch(),
            content: true,
            directory: true,
            contentChangedAt: randRelativeSeconds(),
            hidden: 0,
            Location: [
              {
                id: 17,
                path: "/Anime"
              }
            ]
          },
          {
            allowSync: true,
            art: "/:/resources/show-fanart.jpg",
            composite: "/library/sections/12/composite/1893047125",
            filters: true,
            refreshing: false,
            thumb: "/:/resources/show.png",
            key: "12",
            type: "show",
            title: "Kids Tv Shows NL",
            agent: "tv.plex.agents.series",
            scanner: "Plex TV Series",
            language: "nl-NL",
            uuid: randUUID(),
            updatedAt: randPlexUnixEpoch(),
            createdAt: randPlexUnixEpoch(),
            scannedAt: randPlexUnixEpoch(),
            content: true,
            directory: true,
            contentChangedAt: randRelativeSeconds(),
            hidden: 0,
            Location: [
              {
                id: 22,
                path: "/KidsTvShowsNL"
              }
            ]
          },
          {
            allowSync: true,
            art: "/:/resources/show-fanart.jpg",
            composite: "/library/sections/14/composite/1893047145",
            filters: true,
            refreshing: false,
            thumb: "/:/resources/show.png",
            key: "14",
            type: "show",
            title: "Reality TV (NL)",
            agent: "tv.plex.agents.series",
            scanner: "Plex TV Series",
            language: "nl-NL",
            uuid: randUUID(),
            updatedAt: randPlexUnixEpoch(),
            createdAt: randPlexUnixEpoch(),
            scannedAt: randPlexUnixEpoch(),
            content: true,
            directory: true,
            contentChangedAt: randRelativeSeconds(),
            hidden: 0,
            Location: [
              {
                id: 26,
                path: "/Reality TV NL"
              }
            ]
          },
          {
            allowSync: true,
            art: "/:/resources/show-fanart.jpg",
            composite: "/library/sections/2/composite/1893047150",
            filters: true,
            refreshing: false,
            thumb: "/:/resources/show.png",
            key: "2",
            type: "show",
            title: "TV Series ",
            agent: "tv.plex.agents.series",
            scanner: "Plex TV Series",
            language: "en-US",
            uuid: randUUID(),
            updatedAt: randPlexUnixEpoch(),
            createdAt: randPlexUnixEpoch(),
            scannedAt: randPlexUnixEpoch(),
            content: true,
            directory: true,
            contentChangedAt: randRelativeSeconds(),
            hidden: 0,
            Location: [
              {
                id: 32,
                path: "/TV Shows"
              }
            ]
          },
          {
            allowSync: true,
            art: "/:/resources/show-fanart.jpg",
            composite: "/library/sections/16/composite/1893047155",
            filters: true,
            refreshing: false,
            thumb: "/:/resources/show.png",
            key: "16",
            type: "show",
            title: "TV Shows (Documentaries)",
            agent: "tv.plex.agents.series",
            scanner: "Plex TV Series",
            language: "en-US",
            uuid: randUUID(),
            updatedAt: randPlexUnixEpoch(),
            createdAt: randPlexUnixEpoch(),
            scannedAt: randPlexUnixEpoch(),
            content: true,
            directory: true,
            contentChangedAt: randRelativeSeconds(),
            hidden: 0,
            Location: [
              {
                id: 28,
                path: "/TV Shows (Documentaries)"
              }
            ]
          },
          {
            allowSync: true,
            art: "/:/resources/show-fanart.jpg",
            composite: "/library/sections/17/composite/1893047155",
            filters: true,
            refreshing: false,
            thumb: "/:/resources/show.png",
            key: "17",
            type: "show",
            title: "TV Shows (Kids)",
            agent: "tv.plex.agents.series",
            scanner: "Plex TV Series",
            language: "en-US",
            uuid: randUUID(),
            updatedAt: randPlexUnixEpoch(),
            createdAt: randPlexUnixEpoch(),
            scannedAt: randPlexUnixEpoch(),
            content: true,
            directory: true,
            contentChangedAt: randRelativeSeconds(),
            hidden: 0,
            Location: [
              {
                id: 31,
                path: "/TV Shows (Kids)"
              }
            ]
          },
          {
            allowSync: true,
            art: "/:/resources/show-fanart.jpg",
            composite: "/library/sections/10/composite/1893047170",
            filters: true,
            refreshing: false,
            thumb: "/:/resources/show.png",
            key: "10",
            type: "show",
            title: "TV Shows (Reality)",
            agent: "tv.plex.agents.series",
            scanner: "Plex TV Series",
            language: "en-US",
            uuid: randUUID(),
            updatedAt: randPlexUnixEpoch(),
            createdAt: randPlexUnixEpoch(),
            scannedAt: randPlexUnixEpoch(),
            content: true,
            directory: true,
            contentChangedAt: randRelativeSeconds(),
            hidden: 0,
            Location: [
              {
                id: 30,
                path: "/TV Shows (Reality)"
              }
            ]
          },
          {
            allowSync: true,
            art: "/:/resources/artist-fanart.jpg",
            composite: "/library/sections/9/composite/1893047140",
            filters: true,
            refreshing: false,
            thumb: "/:/resources/artist.png",
            key: "9",
            type: "artist",
            title: "Music",
            agent: "tv.plex.agents.music",
            scanner: "Plex Music",
            language: "en-US",
            uuid: randUUID(),
            updatedAt: randPlexUnixEpoch(),
            createdAt: randPlexUnixEpoch(),
            scannedAt: randPlexUnixEpoch(),
            content: true,
            directory: true,
            contentChangedAt: randRelativeSeconds(),
            hidden: 0,
            Location: [
              {
                id: 24,
                path: "/Music"
              }
            ]
          },
          {
            allowSync: true,
            art: "/:/resources/movie-fanart.jpg",
            composite: "/library/sections/5/composite/1893047123",
            filters: true,
            refreshing: false,
            thumb: "/:/resources/video.png",
            key: "5",
            type: "movie",
            title: "Graduation",
            agent: "com.plexapp.agents.none",
            scanner: "Plex Video Files Scanner",
            language: "xn",
            uuid: randUUID(),
            updatedAt: randPlexUnixEpoch(),
            createdAt: randPlexUnixEpoch(),
            scannedAt: randPlexUnixEpoch(),
            content: true,
            directory: true,
            contentChangedAt: randRelativeSeconds(),
            hidden: 0,
            Location: [
              {
                id: 14,
                path: "/Plex Library/Conspiracy"
              }
            ]
          }
        ]
      }
    }

    validateResponseSpec("/library/sections", "get", 200, response)
  })
  it("should validate the 200 response when the API spec is valid", () => {
    const response = {
      MediaContainer: {
        size: 5,
        allowSync: false,
        title1: "Plex Library",
        Directory: [
          {
            allowSync: false,
            art: "/:/resources/movie-fanart.jpg",
            composite: "/library/sections/4/composite/1743766611",
            filters: true,
            refreshing: false,
            thumb: "/:/resources/movie.png",
            key: "4",
            type: "movie",
            title: "Kids Movies",
            agent: "tv.plex.agents.movie",
            scanner: "Plex Movie",
            language: "en-US",
            uuid: randUUID(),
            updatedAt: randPlexUnixEpoch(),
            createdAt: randPlexUnixEpoch(),
            scannedAt: randPlexUnixEpoch(),
            content: true,
            directory: true,
            contentChangedAt: randRelativeSeconds(),
            hidden: 0,
            Location: [{ id: 50, path: "/mnt/Media/Kids/Movies" }]
          },
          {
            allowSync: false,
            art: "/:/resources/movie-fanart.jpg",
            composite: "/library/sections/3/composite/1743769012",
            filters: true,
            refreshing: false,
            thumb: "/:/resources/movie.png",
            key: "3",
            type: "movie",
            title: "Movies",
            agent: "tv.plex.agents.movie",
            scanner: "Plex Movie",
            language: "en-US",
            uuid: randUUID(),
            updatedAt: randPlexUnixEpoch(),
            createdAt: randPlexUnixEpoch(),
            scannedAt: randPlexUnixEpoch(),
            content: true,
            directory: true,
            contentChangedAt: randRelativeSeconds(),
            hidden: 0,
            Location: [{ id: 31, path: "/mnt/Movies_1" }]
          },
          {
            allowSync: false,
            art: "/:/resources/show-fanart.jpg",
            composite: "/library/sections/13/composite/1743768412",
            filters: true,
            refreshing: false,
            thumb: "/:/resources/show.png",
            key: "13",
            type: "show",
            title: "Kids TV Shows",
            agent: "tv.plex.agents.series",
            scanner: "Plex TV Series",
            language: "en-US",
            uuid: randUUID(),
            updatedAt: randPlexUnixEpoch(),
            createdAt: randPlexUnixEpoch(),
            scannedAt: randPlexUnixEpoch(),
            content: true,
            directory: true,
            contentChangedAt: randRelativeSeconds(),
            hidden: 0,
            Location: [{ id: 51, path: "/mnt/Media/Kids/TV Shows" }]
          },
          {
            allowSync: false,
            art: "/:/resources/show-fanart.jpg",
            composite: "/library/sections/1/composite/1743772322",
            filters: true,
            refreshing: false,
            thumb: "/:/resources/show.png",
            key: "1",
            type: "show",
            title: "TV Shows",
            agent: "tv.plex.agents.series",
            scanner: "Plex TV Series",
            language: "en-US",
            uuid: randUUID(),
            updatedAt: randPlexUnixEpoch(),
            createdAt: randPlexUnixEpoch(),
            scannedAt: randPlexUnixEpoch(),
            content: true,
            directory: true,
            contentChangedAt: randRelativeSeconds(),
            hidden: 0,
            Location: [
              { id: 59, path: "/mnt/TV_3" },
              { id: 19, path: "/mnt/TV_1" },
              { id: 20, path: "/mnt/TV_2" }
            ]
          },
          {
            allowSync: false,
            art: "/:/resources/artist-fanart.jpg",
            composite: "/library/sections/5/composite/1743766611",
            filters: true,
            refreshing: false,
            thumb: "/:/resources/artist.png",
            key: "5",
            type: "artist",
            title: "Audiobooks",
            agent: "tv.plex.agents.music",
            scanner: "Plex Music",
            language: "en-US",
            uuid: randUUID(),
            updatedAt: randPlexUnixEpoch(),
            createdAt: randPlexUnixEpoch(),
            scannedAt: randPlexUnixEpoch(),
            content: true,
            directory: true,
            contentChangedAt: randRelativeSeconds(),
            hidden: 1,
            Location: [{ id: 49, path: "/mnt/Media/Audiobooks" }]
          }
        ]
      }
    }

    validateResponseSpec("/library/sections", "get", 200, response)
  })
})
