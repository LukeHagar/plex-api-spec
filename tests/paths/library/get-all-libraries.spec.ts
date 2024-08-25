import {validateResponseSpec} from "../../utils/";
import {describe, it} from 'vitest'

describe('GET /library/sections', () => {
    it('should validate the 200 response when the API spec is valid', () => {
        const response = {
                "MediaContainer": {
                    "size": 14,
                    "allowSync": false,
                    "title1": "Plex Library",
                    "Directory": [
                        {
                            "allowSync": true,
                            "art": "/:/resources/movie-fanart.jpg",
                            "composite": "/library/sections/7/composite/1893047123",
                            "filters": true,
                            "refreshing": false,
                            "thumb": "/:/resources/movie.png",
                            "key": "7",
                            "type": "movie",
                            "title": "Kids Movies",
                            "agent": "tv.plex.agents.movie",
                            "scanner": "Plex Movie",
                            "language": "en-US",
                            "uuid": "a1b2c3d4e5f67890",
                            "updatedAt": 1728394001,
                            "createdAt": 1598476504,
                            "scannedAt": 1893047123,
                            "content": true,
                            "directory": true,
                            "contentChangedAt": 4738921,
                            "hidden": 0,
                            "Location": [
                                {
                                    "id": 25,
                                    "path": "/KidsMovies"
                                }
                            ]
                        },
                        {
                            "allowSync": true,
                            "art": "/:/resources/movie-fanart.jpg",
                            "composite": "/library/sections/13/composite/1893047124",
                            "filters": true,
                            "refreshing": false,
                            "thumb": "/:/resources/movie.png",
                            "key": "13",
                            "type": "movie",
                            "title": "Kids Movies NL",
                            "agent": "tv.plex.agents.movie",
                            "scanner": "Plex Movie",
                            "language": "nl-NL",
                            "uuid": "b2c3d4e5f67890a1",
                            "updatedAt": 1680007500,
                            "createdAt": 1680007500,
                            "scannedAt": 1893047124,
                            "content": true,
                            "directory": true,
                            "contentChangedAt": 5283714,
                            "hidden": 0,
                            "Location": [
                                {
                                    "id": 23,
                                    "path": "/KidsMoviesNL"
                                }
                            ]
                        },
                        {
                            "allowSync": true,
                            "art": "/:/resources/movie-fanart.jpg",
                            "composite": "/library/sections/1/composite/1893047130",
                            "filters": true,
                            "refreshing": false,
                            "thumb": "/:/resources/movie.png",
                            "key": "1",
                            "type": "movie",
                            "title": "Movies",
                            "agent": "tv.plex.agents.movie",
                            "scanner": "Plex Movie",
                            "language": "en-US",
                            "uuid": "c3d4e5f67890a1b2",
                            "updatedAt": 1728394005,
                            "createdAt": 1598476200,
                            "scannedAt": 1893047130,
                            "content": true,
                            "directory": true,
                            "contentChangedAt": 6379184,
                            "hidden": 0,
                            "Location": [
                                {
                                    "id": 18,
                                    "path": "/Movies"
                                }
                            ]
                        },
                        {
                            "allowSync": true,
                            "art": "/:/resources/movie-fanart.jpg",
                            "composite": "/library/sections/6/composite/1893047135",
                            "filters": true,
                            "refreshing": false,
                            "thumb": "/:/resources/movie.png",
                            "key": "6",
                            "type": "movie",
                            "title": "Movies (Documentaries)",
                            "agent": "tv.plex.agents.movie",
                            "scanner": "Plex Movie",
                            "language": "en-US",
                            "uuid": "d4e5f67890a1b2c3",
                            "updatedAt": 1728394010,
                            "createdAt": 1598476302,
                            "scannedAt": 1893047135,
                            "content": true,
                            "directory": true,
                            "contentChangedAt": 5293874,
                            "hidden": 0,
                            "Location": [
                                {
                                    "id": 29,
                                    "path": "/Movies (Documentaries)"
                                },
                                {
                                    "id": 15,
                                    "path": "/Plex Library/Documentaries"
                                }
                            ]
                        },
                        {
                            "allowSync": true,
                            "art": "/:/resources/movie-fanart.jpg",
                            "composite": "/library/sections/15/composite/1893047145",
                            "filters": true,
                            "refreshing": false,
                            "thumb": "/:/resources/movie.png",
                            "key": "15",
                            "type": "movie",
                            "title": "Test Media Movies",
                            "agent": "tv.plex.agents.movie",
                            "scanner": "Plex Movie",
                            "language": "en-US",
                            "uuid": "e5f67890a1b2c3d4",
                            "updatedAt": 1689075000,
                            "createdAt": 1689075000,
                            "scannedAt": 1893047145,
                            "content": true,
                            "directory": true,
                            "contentChangedAt": 5182738,
                            "hidden": 0,
                            "Location": [
                                {
                                    "id": 27,
                                    "path": "/TestMedia/Movies"
                                }
                            ]
                        },
                        {
                            "allowSync": true,
                            "art": "/:/resources/show-fanart.jpg",
                            "composite": "/library/sections/3/composite/1893047110",
                            "filters": true,
                            "refreshing": false,
                            "thumb": "/:/resources/show.png",
                            "key": "3",
                            "type": "show",
                            "title": "Anime",
                            "agent": "com.plexapp.agents.hama",
                            "scanner": "Plex Series Scanner",
                            "language": "en",
                            "uuid": "f67890a1b2c3d4e5",
                            "updatedAt": 1684970001,
                            "createdAt": 1598476000,
                            "scannedAt": 1893047110,
                            "content": true,
                            "directory": true,
                            "contentChangedAt": 8379201,
                            "hidden": 0,
                            "Location": [
                                {
                                    "id": 17,
                                    "path": "/Anime"
                                }
                            ]
                        },
                        {
                            "allowSync": true,
                            "art": "/:/resources/show-fanart.jpg",
                            "composite": "/library/sections/12/composite/1893047125",
                            "filters": true,
                            "refreshing": false,
                            "thumb": "/:/resources/show.png",
                            "key": "12",
                            "type": "show",
                            "title": "Kids Tv Shows NL",
                            "agent": "tv.plex.agents.series",
                            "scanner": "Plex TV Series",
                            "language": "nl-NL",
                            "uuid": "67890a1b2c3d4e5f",
                            "updatedAt": 1728394002,
                            "createdAt": 1680007400,
                            "scannedAt": 1893047125,
                            "content": true,
                            "directory": true,
                            "contentChangedAt": 5948203,
                            "hidden": 0,
                            "Location": [
                                {
                                    "id": 22,
                                    "path": "/KidsTvShowsNL"
                                }
                            ]
                        },
                        {
                            "allowSync": true,
                            "art": "/:/resources/show-fanart.jpg",
                            "composite": "/library/sections/14/composite/1893047145",
                            "filters": true,
                            "refreshing": false,
                            "thumb": "/:/resources/show.png",
                            "key": "14",
                            "type": "show",
                            "title": "Reality TV (NL)",
                            "agent": "tv.plex.agents.series",
                            "scanner": "Plex TV Series",
                            "language": "nl-NL",
                            "uuid": "890a1b2c3d4e5f67",
                            "updatedAt": 1728394007,
                            "createdAt": 1601860600,
                            "scannedAt": 1893047145,
                            "content": true,
                            "directory": true,
                            "contentChangedAt": 6283720,
                            "hidden": 0,
                            "Location": [
                                {
                                    "id": 26,
                                    "path": "/Reality TV NL"
                                }
                            ]
                        },
                        {
                            "allowSync": true,
                            "art": "/:/resources/show-fanart.jpg",
                            "composite": "/library/sections/2/composite/1893047150",
                            "filters": true,
                            "refreshing": false,
                            "thumb": "/:/resources/show.png",
                            "key": "2",
                            "type": "show",
                            "title": "TV Series ",
                            "agent": "tv.plex.agents.series",
                            "scanner": "Plex TV Series",
                            "language": "en-US",
                            "uuid": "a1b2c3d4e5f67890",
                            "updatedAt": 1728394003,
                            "createdAt": 1598476100,
                            "scannedAt": 1893047150,
                            "content": true,
                            "directory": true,
                            "contentChangedAt": 6472184,
                            "hidden": 0,
                            "Location": [
                                {
                                    "id": 32,
                                    "path": "/TV Shows"
                                }
                            ]
                        },
                        {
                            "allowSync": true,
                            "art": "/:/resources/show-fanart.jpg",
                            "composite": "/library/sections/16/composite/1893047155",
                            "filters": true,
                            "refreshing": false,
                            "thumb": "/:/resources/show.png",
                            "key": "16",
                            "type": "show",
                            "title": "TV Shows (Documentaries)",
                            "agent": "tv.plex.agents.series",
                            "scanner": "Plex TV Series",
                            "language": "en-US",
                            "uuid": "b2c3d4e5f67890a1",
                            "updatedAt": 1689076000,
                            "createdAt": 1689076000,
                            "scannedAt": 1893047155,
                            "content": true,
                            "directory": true,
                            "contentChangedAt": 4920835,
                            "hidden": 0,
                            "Location": [
                                {
                                    "id": 28,
                                    "path": "/TV Shows (Documentaries)"
                                }
                            ]
                        },
                        {
                            "allowSync": true,
                            "art": "/:/resources/show-fanart.jpg",
                            "composite": "/library/sections/17/composite/1893047155",
                            "filters": true,
                            "refreshing": false,
                            "thumb": "/:/resources/show.png",
                            "key": "17",
                            "type": "show",
                            "title": "TV Shows (Kids)",
                            "agent": "tv.plex.agents.series",
                            "scanner": "Plex TV Series",
                            "language": "en-US",
                            "uuid": "c3d4e5f67890a1b2",
                            "updatedAt": 1689077000,
                            "createdAt": 1689077000,
                            "scannedAt": 1893047155,
                            "content": true,
                            "directory": true,
                            "contentChangedAt": 5309283,
                            "hidden": 0,
                            "Location": [
                                {
                                    "id": 31,
                                    "path": "/TV Shows (Kids)"
                                }
                            ]
                        },
                        {
                            "allowSync": true,
                            "art": "/:/resources/show-fanart.jpg",
                            "composite": "/library/sections/10/composite/1893047170",
                            "filters": true,
                            "refreshing": false,
                            "thumb": "/:/resources/show.png",
                            "key": "10",
                            "type": "show",
                            "title": "TV Shows (Reality)",
                            "agent": "tv.plex.agents.series",
                            "scanner": "Plex TV Series",
                            "language": "en-US",
                            "uuid": "d4e5f67890a1b2c3",
                            "updatedAt": 1689078000,
                            "createdAt": 1626704821,
                            "scannedAt": 1893047170,
                            "content": true,
                            "directory": true,
                            "contentChangedAt": 7291885,
                            "hidden": 0,
                            "Location": [
                                {
                                    "id": 30,
                                    "path": "/TV Shows (Reality)"
                                }
                            ]
                        },
                        {
                            "allowSync": true,
                            "art": "/:/resources/artist-fanart.jpg",
                            "composite": "/library/sections/9/composite/1893047140",
                            "filters": true,
                            "refreshing": false,
                            "thumb": "/:/resources/artist.png",
                            "key": "9",
                            "type": "artist",
                            "title": "Music",
                            "agent": "tv.plex.agents.music",
                            "scanner": "Plex Music",
                            "language": "en-US",
                            "uuid": "e5f67890a1b2c3d4",
                            "updatedAt": 1684974922,
                            "createdAt": 1598476740,
                            "scannedAt": 1893047140,
                            "content": true,
                            "directory": true,
                            "contentChangedAt": 7204063,
                            "hidden": 0,
                            "Location": [
                                {
                                    "id": 24,
                                    "path": "/Music"
                                }
                            ]
                        },
                        {
                            "allowSync": true,
                            "art": "/:/resources/movie-fanart.jpg",
                            "composite": "/library/sections/5/composite/1893047123",
                            "filters": true,
                            "refreshing": false,
                            "thumb": "/:/resources/video.png",
                            "key": "5",
                            "type": "movie",
                            "title": "Graduation",
                            "agent": "com.plexapp.agents.none",
                            "scanner": "Plex Video Files Scanner",
                            "language": "xn",
                            "uuid": "f67890a1b2c3d4e5",
                            "updatedAt": 1684974733,
                            "createdAt": 1598475949,
                            "scannedAt": 1893047123,
                            "content": true,
                            "directory": true,
                            "contentChangedAt": 3828909,
                            "hidden": 0,
                            "Location": [
                                {
                                    "id": 14,
                                    "path": "/Plex Library/Conspiracy"
                                }
                            ]
                        }
                    ]
                }
            };

        validateResponseSpec("/library/sections", "get", 200, response)
    });
})
