import {validateResponseSpec} from "@utils";
import {describe, it} from 'vitest'

describe('GET /media/providers', () => {
    it('should validate the 200 response when the API spec is valid', () => {
        const response = {
                "MediaContainer": {
                    "size": 7,
                    "allowCameraUpload": false,
                    "allowChannelAccess": false,
                    "allowSharing": true,
                    "allowSync": true,
                    "allowTuners": false,
                    "backgroundProcessing": true,
                    "certificate": true,
                    "companionProxy": true,
                    "countryCode": "uk",
                    "diagnostics": "streaminglogs,databases",
                    "eventStream": true,
                    "friendlyName": "desktop-titan",
                    "livetv": 12,
                    "machineIdentifier": "cf18e74b-7e92-403f-b95a-a99e1f83f77b",
                    "musicAnalysis": 3,
                    "myPlex": true,
                    "myPlexMappingState": "linked",
                    "myPlexSigninState": "active",
                    "myPlexSubscription": true,
                    "myPlexUsername": "random.jason@outlook.com",
                    "offlineTranscode": 4,
                    "ownerFeatures": "5f36ef7d-bf9e-48a4-9399-6fddf0ea47b8,2e5687c9-9e71-4712-aec5-0198a93ff56f,3b84a6a9-bcfa-438b-b732-62cb3fcb6732,7d197f42-dc48-4e7b-a758-b6d52ffb216d",
                    "platform": "Linux",
                    "platformVersion": "18.04 (Build 12345)",
                    "pluginHost": true,
                    "pushNotifications": true,
                    "readOnlyLibraries": true,
                    "streamingBrainABRVersion": 5,
                    "streamingBrainVersion": 4,
                    "sync": true,
                    "transcoderActiveVideoSessions": 2,
                    "transcoderAudio": true,
                    "transcoderLyrics": true,
                    "transcoderSubtitles": true,
                    "transcoderVideo": true,
                    "transcoderVideoBitrates": "150,250,350,500,1000,2000,4000",
                    "transcoderVideoQualities": "2,3,5,7,9",
                    "transcoderVideoResolutions": "160,320,480,720,1080",
                    "updatedAt": 1835421007,
                    "updater": true,
                    "version": "3.40.9.1536-745a67c45",
                    "voiceSearch": true,
                    "MediaProvider": [
                        {
                            "identifier": "com.plexapp.plugins.library",
                            "title": "Random Library",
                            "types": "photo,audio,video",
                            "protocols": "stream,http",
                            "Feature": [
                                {
                                    "key": "/library/sections/new",
                                    "type": "content",
                                    "Directory": [
                                        {
                                            "hubKey": "/hubs/home",
                                            "title": "Main Hub"
                                        },
                                        {
                                            "agent": "tv.plex.agents.movie",
                                            "language": "fr-FR",
                                            "refreshing": false,
                                            "scanner": "Random Movie Scanner",
                                            "uuid": "9b8e23c4-592c-4d3d-b2b6-7e5d1843c7a8",
                                            "id": "5",
                                            "key": "/library/sections/5",
                                            "hubKey": "/hubs/sections/5",
                                            "type": "movie",
                                            "title": "Films",
                                            "updatedAt": 1835420739,
                                            "scannedAt": 1835420123,
                                            "Pivot": [
                                                {
                                                    "id": "recommended",
                                                    "key": "/hubs/sections/5",
                                                    "type": "hub",
                                                    "title": "Popular",
                                                    "context": "content.popular",
                                                    "symbol": "star"
                                                },
                                                {
                                                    "id": "library",
                                                    "key": "/library/sections/5/all?type=5",
                                                    "type": "list",
                                                    "title": "Film Library",
                                                    "context": "content.library",
                                                    "symbol": "library"
                                                },
                                                {
                                                    "id": "categories",
                                                    "key": "/library/sections/5/categories",
                                                    "type": "list",
                                                    "title": "Film Categories",
                                                    "context": "content.categories",
                                                    "symbol": "stack"
                                                }
                                            ]
                                        },
                                        {
                                            "agent": "tv.plex.agents.series",
                                            "language": "de-DE",
                                            "refreshing": false,
                                            "scanner": "Random TV Series Scanner",
                                            "uuid": "af5832e1-3246-4e31-9f48-b24f670d95d7",
                                            "id": "6",
                                            "key": "/library/sections/6",
                                            "hubKey": "/hubs/sections/6",
                                            "type": "show",
                                            "title": "Shows",
                                            "updatedAt": 1835413943,
                                            "scannedAt": 1835413688,
                                            "Pivot": [
                                                {
                                                    "id": "trending",
                                                    "key": "/hubs/sections/6",
                                                    "type": "hub",
                                                    "title": "Trending Shows",
                                                    "context": "content.trending",
                                                    "symbol": "fire"
                                                },
                                                {
                                                    "id": "library",
                                                    "key": "/library/sections/6/all?type=6",
                                                    "type": "list",
                                                    "title": "TV Library",
                                                    "context": "content.library",
                                                    "symbol": "library"
                                                },
                                                {
                                                    "id": "categories",
                                                    "key": "/library/sections/6/categories",
                                                    "type": "list",
                                                    "title": "Show Categories",
                                                    "context": "content.categories",
                                                    "symbol": "stack"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "key": "/hubs/search/new",
                                    "type": "search"
                                },
                                {
                                    "key": "/library/matches/new",
                                    "type": "match"
                                },
                                {
                                    "key": "/library/metadata/new",
                                    "type": "metadata"
                                },
                                {
                                    "key": "/photo/:/transcode",
                                    "type": "imagetranscoder"
                                },
                                {
                                    "key": "/hubs/promoted/new",
                                    "type": "promoted"
                                },
                                {
                                    "key": "/hubs/continueWatching/new",
                                    "type": "continuewatching"
                                },
                                {
                                    "key": "/actions/new",
                                    "type": "actions",
                                    "Action": [
                                        {
                                            "id": "addToContinueWatching",
                                            "key": "/actions/addToContinueWatching"
                                        }
                                    ]
                                },
                                {
                                    "flavor": "global",
                                    "key": "/playlists/new",
                                    "type": "playlist"
                                },
                                {
                                    "flavor": "global",
                                    "key": "/playQueues/new",
                                    "type": "playqueue"
                                },
                                {
                                    "key": "/library/collections/new",
                                    "type": "collection"
                                },
                                {
                                    "scrobbleKey": "/:/scrobble/new",
                                    "unscrobbleKey": "/:/unscrobble/new",
                                    "key": "/:/timeline/new",
                                    "type": "timeline"
                                },
                                {
                                    "type": "queryParser"
                                },
                                {
                                    "flavor": "global",
                                    "type": "subscribe"
                                },
                                {
                                    "key": "/library/search/new",
                                    "type": "universalsearch"
                                }
                            ]
                        }
                    ]
                }
            }        ;

        validateResponseSpec("/media/providers", "get", 200, response)
    });
})
