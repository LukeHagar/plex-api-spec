import { validateResponseSpec } from "@utils"
import { describe, it } from "vitest"

describe("GET /hubs/home/recentlyAdded", () => {
  it("should validate the 200 response when the API spec is valid", () => {
    // /hubs/home/recentlyAdded?type=2&sectionID=10&contentDirectoryID=10&pinnedContentDirectoryID=3%2C5%2C7%2C13%2C12%2C1%2C6%2C14%2C2%2C10%2C16%2C17&includeMeta=1
    const response = {
      MediaContainer: {
        size: 50,
        allowSync: true,
        identifier: "com.plexapp.plugins.library",
        Meta: {
          Type: [
            {
              key: "/hubs/home/recentlyAdded?contentDirectoryID=10&pinnedContentDirectoryID=3%2C5%2C7%2C13%2C12%2C1%2C6%2C14%2C2%2C10%2C16%2C17&sectionID=10&type=2",
              type: "mixed",
              title: "Recently Added",
              active: false
            }
          ]
        },
        Metadata: [
          {
            ratingKey: "57303",
            key: "/library/metadata/57303",
            parentRatingKey: "57228",
            grandparentRatingKey: "28063",
            guid: "plex://episode/679514342f3de73155bc5a1e",
            parentGuid: "plex://season/673f0c07a69cea6bd5fe1b6d",
            grandparentGuid: "plex://show/5d9c08674eefaa001f5dc642",
            grandparentSlug: "penn-and-teller-fool-us",
            type: "episode",
            title: "Magic Is in the Air",
            grandparentKey: "/library/metadata/28063",
            parentKey: "/library/metadata/57228",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "Penn & Teller: Fool Us",
            parentTitle: "Season 11",
            contentRating: "TV-14",
            summary:
              "Magicians Magic Singh, Nikolai Striebel, Dreygon, and Sara Rodriguez try to fool the veteran duo with their illusions.",
            index: 3,
            parentIndex: 11,
            year: 2025,
            thumb: "/library/metadata/57303/thumb/1739014461",
            art: "/library/metadata/28063/art/1737869751",
            grandparentThumb: "/library/metadata/28063/thumb/1737869751",
            grandparentArt: "/library/metadata/28063/art/1737869751",
            grandparentTheme: "/library/metadata/28063/theme/1737869751",
            duration: 2511041,
            originallyAvailableAt: "2025-02-07",
            addedAt: 1739014455,
            updatedAt: 1739014461,
            Media: [
              {
                id: 61629,
                duration: 2511041,
                bitrate: 15928,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 2,
                audioCodec: "aac",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "NTSC",
                audioProfile: "he-aac",
                videoProfile: "high",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 92677,
                    key: "/library/parts/92677/1738981240/file.mkv",
                    duration: 2511041,
                    file: "/TV Shows (Reality)/Penn & Teller - Fool Us/Season 11/Penn & Teller - Fool Us - S11E03 - Magic Is in the Air WEBDL-1080p.mkv",
                    size: 2510518525,
                    audioProfile: "he-aac",
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "high",
                    Stream: [
                      {
                        id: 309299,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 7932,
                        bitDepth: 8,
                        chromaLocation: "left",
                        chromaSubsampling: "4:2:0",
                        closedCaptions: true,
                        codedHeight: 1088,
                        codedWidth: 1920,
                        frameRate: 29.97,
                        hasScalingMatrix: false,
                        height: 1080,
                        level: 40,
                        profile: "high",
                        refFrames: 3,
                        scanType: "progressive",
                        width: 1920,
                        displayTitle: "1080p",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 309301,
                        streamType: 2,
                        selected: true,
                        default: true,
                        codec: "aac",
                        index: 1,
                        channels: 2,
                        bitrate: 64,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        audioChannelLayout: "stereo",
                        profile: "he-aac",
                        samplingRate: 44100,
                        displayTitle: "English (HE-AAC Stereo)",
                        extendedDisplayTitle: "English (HE-AAC Stereo)"
                      },
                      {
                        id: 309300,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "eia_608",
                        index: 0,
                        bitrate: 7932,
                        embeddedInVideo: "1",
                        displayTitle: "Unknown",
                        extendedDisplayTitle: "Unknown (Closed Captions)"
                      },
                      {
                        id: 309302,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        title: "English",
                        displayTitle: "English",
                        extendedDisplayTitle: "English (SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Magic Is in the Air",
                type: "coverPoster",
                url: "/library/metadata/28063/thumb/1737869751"
              },
              {
                alt: "Magic Is in the Air",
                type: "snapshot",
                url: "/library/metadata/57303/thumb/1739014461"
              },
              {
                alt: "Magic Is in the Air",
                type: "background",
                url: "/library/metadata/28063/art/1737869751"
              },
              {
                alt: "Magic Is in the Air",
                type: "clearLogo",
                url: "/library/metadata/28063/clearLogo/1737869751"
              }
            ],
            UltraBlurColors: {
              topLeft: "481a38",
              topRight: "1b6c5a",
              bottomRight: "2d6b57",
              bottomLeft: "9e351e"
            },
            Guid: [
              {
                id: "imdb://tt35549599"
              },
              {
                id: "tmdb://5940375"
              },
              {
                id: "tvdb://10919899"
              }
            ],
            Role: [
              {
                id: 123116,
                filter: "actor=123116",
                tag: "Penn Jillette",
                tagKey: "5d776828880197001ec90e7e",
                role: "Self - Judge",
                thumb:
                  "https://metadata-static.plex.tv/a/people/a4bcaa8de644336313d01cde55e71f96.jpg"
              },
              {
                id: 126522,
                filter: "actor=126522",
                tag: "Teller",
                tagKey: "5d77683d85719b001f3a535e",
                role: "Self - Judge",
                thumb:
                  "https://metadata-static.plex.tv/7/people/708568fd018d7aa8b1032dcf867747e8.jpg"
              }
            ]
          },
          {
            ratingKey: "57302",
            key: "/library/metadata/57302",
            parentRatingKey: "55071",
            grandparentRatingKey: "30009",
            guid: "plex://episode/678ba4b6afba586e749b36d5",
            parentGuid: "plex://season/6697ba330f4923e3427c9f39",
            grandparentGuid: "plex://show/5d9c0874705e7a001e6ddc85",
            grandparentSlug: "hells-kitchen-us",
            type: "episode",
            title: "Hell's Finish Line",
            grandparentKey: "/library/metadata/30009",
            parentKey: "/library/metadata/55071",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "Hell's Kitchen (US)",
            parentTitle: "Season 23",
            contentRating: "TV-14",
            summary:
              "It is the season finale of 'Hell's Kitchen: Head Chef's Only', and it is down to the finale two head chefs. With the help of some old friends, the finalists will compete in a final dinner service with their very own custom menu tailored to their unique tastes and signature dishes.",
            index: 16,
            parentIndex: 23,
            year: 2025,
            thumb: "/library/metadata/57302/thumb/1738918120",
            art: "/library/metadata/30009/art/1738995285",
            grandparentThumb: "/library/metadata/30009/thumb/1738995285",
            grandparentArt: "/library/metadata/30009/art/1738995285",
            grandparentTheme: "/library/metadata/30009/theme/1738995285",
            duration: 2592032,
            originallyAvailableAt: "2025-02-06",
            addedAt: 1738918112,
            updatedAt: 1738918120,
            Media: [
              {
                id: 61628,
                duration: 2592032,
                bitrate: 7704,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 6,
                audioCodec: "eac3",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "NTSC",
                videoProfile: "high",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 92676,
                    key: "/library/parts/92676/1738917244/file.mkv",
                    duration: 2592032,
                    file: "/TV Shows (Reality)/Gordan Ramsay - Hells Kitchen US/Season 23/Hell's Kitchen (US) - S23E16 - Hell's Finish Line WEBDL-1080p.mkv",
                    size: 2496774788,
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "high",
                    Stream: [
                      {
                        id: 309287,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 7447,
                        bitDepth: 8,
                        chromaLocation: "left",
                        chromaSubsampling: "4:2:0",
                        codedHeight: 1088,
                        codedWidth: 1920,
                        colorPrimaries: "bt709",
                        colorRange: "tv",
                        colorSpace: "bt709",
                        colorTrc: "bt709",
                        frameRate: 29.97,
                        hasScalingMatrix: false,
                        height: 1080,
                        level: 40,
                        profile: "high",
                        refFrames: 4,
                        scanType: "progressive",
                        width: 1920,
                        displayTitle: "1080p",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 309288,
                        streamType: 2,
                        selected: true,
                        default: true,
                        codec: "eac3",
                        index: 1,
                        channels: 6,
                        bitrate: 256,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        audioChannelLayout: "5.1(side)",
                        samplingRate: 48000,
                        displayTitle: "English (EAC3 5.1)",
                        extendedDisplayTitle: "English (EAC3 5.1)"
                      },
                      {
                        id: 309289,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        title: "English",
                        displayTitle: "English",
                        extendedDisplayTitle: "English (SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Hell's Finish Line",
                type: "coverPoster",
                url: "/library/metadata/30009/thumb/1738995285"
              },
              {
                alt: "Hell's Finish Line",
                type: "snapshot",
                url: "/library/metadata/57302/thumb/1738918120"
              },
              {
                alt: "Hell's Finish Line",
                type: "background",
                url: "/library/metadata/30009/art/1738995285"
              },
              {
                alt: "Hell's Finish Line",
                type: "clearLogo",
                url: "/library/metadata/30009/clearLogo/1738995285"
              }
            ],
            UltraBlurColors: {
              topLeft: "1f1a1b",
              topRight: "09182e",
              bottomRight: "2a2a2e",
              bottomLeft: "564c49"
            },
            Guid: [
              {
                id: "imdb://tt35635318"
              },
              {
                id: "tmdb://5917636"
              },
              {
                id: "tvdb://10938288"
              }
            ],
            Role: [
              {
                id: 106830,
                filter: "actor=106830",
                tag: "Gordon Ramsay",
                tagKey: "5d7768aa374a5b001fecc9c4",
                role: "Self - Chef",
                thumb:
                  "https://metadata-static.plex.tv/d/people/dd20a681247c97c89d9aa32747028ba3.jpg"
              },
              {
                id: 194259,
                filter: "actor=194259",
                tag: "James Avery",
                tagKey: "6233480e2e411962942d1edd",
                role: "Self - Sous Chef"
              },
              {
                id: 216200,
                filter: "actor=216200",
                tag: "Marino Monferrato",
                tagKey: "644d077c7b10820176a91641",
                role: "Self - Maître D'",
                thumb:
                  "https://metadata-static.plex.tv/7/people/79dba3a86ae936fe2f070439e364a4ea.jpg"
              },
              {
                id: 228469,
                filter: "actor=228469",
                tag: "Michelle Tribble",
                tagKey: "64da17c5fb911c69374a96a6",
                role: "Self - Sous Chef"
              }
            ],
            Producer: [
              {
                id: 325340,
                filter: "producer=325340",
                tag: "Amelia Knapp",
                tagKey: "5f4019e91ae71000410484ce"
              },
              {
                id: 336569,
                filter: "producer=336569",
                tag: "Gordon Ramsay",
                tagKey: "5d7768aa374a5b001fecc9c4",
                thumb:
                  "https://metadata-static.plex.tv/d/people/dd20a681247c97c89d9aa32747028ba3.jpg"
              }
            ]
          },
          {
            ratingKey: "57300",
            key: "/library/metadata/57300",
            parentRatingKey: "55668",
            grandparentRatingKey: "28641",
            guid: "plex://episode/6793d265ac9d033055487fb7",
            parentGuid: "plex://season/675b9ad1c64e985d097b5757",
            grandparentGuid: "plex://show/5d9c086affd9ef001e994192",
            grandparentSlug: "dragons-den-1",
            type: "episode",
            title: "Episode 5",
            grandparentKey: "/library/metadata/28641",
            parentKey: "/library/metadata/55668",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "Dragons' Den",
            parentTitle: "Season 22",
            contentRating: "TV-PG",
            summary:
              "A dog-loving duo with their plant-based pet food, an instant coffee entrepreneur, a bee-loving business and a husband and wife with a bidet innovation hope to secure investments from the Dragons.",
            index: 5,
            parentIndex: 22,
            year: 2025,
            thumb: "/library/metadata/57300/thumb/1738995231",
            art: "/library/metadata/28641/art/1738995277",
            grandparentThumb: "/library/metadata/28641/thumb/1738995277",
            grandparentArt: "/library/metadata/28641/art/1738995277",
            grandparentTheme: "/library/metadata/28641/theme/1738995277",
            duration: 3561120,
            originallyAvailableAt: "2025-02-06",
            addedAt: 1738877333,
            updatedAt: 1738995231,
            Media: [
              {
                id: 61626,
                duration: 3561120,
                bitrate: 5566,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 2,
                audioCodec: "aac",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                audioProfile: "lc",
                videoProfile: "high",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 92674,
                    key: "/library/parts/92674/1738844015/file.mkv",
                    duration: 3561120,
                    file: "/TV Shows (Reality)/Dragons' Den/Season 22/Dragons' Den - S22E05 - Episode 5 WEBDL-1080p.mkv",
                    size: 2479329085,
                    audioProfile: "lc",
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "high",
                    Stream: [
                      {
                        id: 309280,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 5438,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        bitDepth: 8,
                        chromaLocation: "left",
                        chromaSubsampling: "4:2:0",
                        codedHeight: 1088,
                        codedWidth: 1920,
                        colorPrimaries: "bt709",
                        colorRange: "tv",
                        colorSpace: "bt709",
                        colorTrc: "bt709",
                        frameRate: 50.0,
                        hasScalingMatrix: false,
                        height: 1080,
                        level: 42,
                        original: true,
                        profile: "high",
                        refFrames: 4,
                        scanType: "progressive",
                        width: 1920,
                        displayTitle: "1080p",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 309281,
                        streamType: 2,
                        selected: true,
                        default: true,
                        codec: "aac",
                        index: 1,
                        channels: 2,
                        bitrate: 128,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        audioChannelLayout: "stereo",
                        dub: true,
                        profile: "lc",
                        samplingRate: 48000,
                        displayTitle: "English (AAC Stereo)",
                        extendedDisplayTitle: "English (AAC Stereo)"
                      },
                      {
                        id: 309282,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        original: true,
                        displayTitle: "English",
                        extendedDisplayTitle: "English (SRT)"
                      },
                      {
                        id: 309283,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 3,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        hearingImpaired: true,
                        original: true,
                        title: "SDH",
                        displayTitle: "English SDH",
                        extendedDisplayTitle: "SDH (English SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Episode 5",
                type: "coverPoster",
                url: "/library/metadata/28641/thumb/1738995277"
              },
              {
                alt: "Episode 5",
                type: "snapshot",
                url: "/library/metadata/57300/thumb/1738995231"
              },
              {
                alt: "Episode 5",
                type: "background",
                url: "/library/metadata/28641/art/1738995277"
              },
              {
                alt: "Episode 5",
                type: "clearLogo",
                url: "/library/metadata/28641/clearLogo/1738995277"
              }
            ],
            UltraBlurColors: {
              topLeft: "2b2355",
              topRight: "583c9a",
              bottomRight: "1b2751",
              bottomLeft: "92403f"
            },
            Guid: [
              {
                id: "tvdb://10922465"
              }
            ]
          },
          {
            ratingKey: "57282",
            key: "/library/metadata/57282",
            parentRatingKey: "55599",
            grandparentRatingKey: "38320",
            guid: "local://57282",
            parentGuid: "plex://season/677720d0e9f315c4f6109f66",
            grandparentGuid: "plex://show/5d9c08182192ba001f307411",
            grandparentSlug: "my-600-lb-life",
            type: "episode",
            title: "Episode 6",
            grandparentKey: "/library/metadata/38320",
            parentKey: "/library/metadata/55599",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "My 600-lb Life",
            parentTitle: "Season 13",
            contentRating: "TV-14",
            summary: "",
            index: 6,
            parentIndex: 13,
            parentYear: 2025,
            thumb: "/library/metadata/57282/thumb/1738847146",
            art: "/library/metadata/38320/art/1735190665",
            grandparentThumb: "/library/metadata/38320/thumb/1735190665",
            grandparentArt: "/library/metadata/38320/art/1735190665",
            duration: 5011391,
            addedAt: 1738847138,
            updatedAt: 1738847146,
            Media: [
              {
                id: 61591,
                duration: 5011391,
                bitrate: 5022,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 2,
                audioCodec: "aac",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "NTSC",
                audioProfile: "lc",
                videoProfile: "main",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 92639,
                    key: "/library/parts/92639/1738843880/file.mkv",
                    duration: 5011391,
                    file: "/TV Shows (Reality)/My 600-lb Life/Season 13/My 600-lb Life - S13E06 - Deshaun's Journey WEBDL-1080p.mkv",
                    size: 3147873020,
                    audioProfile: "lc",
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "main",
                    Stream: [
                      {
                        id: 309180,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 4897,
                        bitDepth: 8,
                        chromaLocation: "left",
                        chromaSubsampling: "4:2:0",
                        codedHeight: 1088,
                        codedWidth: 1920,
                        frameRate: 29.97,
                        hasScalingMatrix: false,
                        height: 1080,
                        level: 40,
                        profile: "main",
                        refFrames: 4,
                        scanType: "progressive",
                        width: 1920,
                        displayTitle: "1080p",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 309181,
                        streamType: 2,
                        selected: true,
                        default: true,
                        codec: "aac",
                        index: 1,
                        channels: 2,
                        bitrate: 125,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        audioChannelLayout: "stereo",
                        profile: "lc",
                        samplingRate: 48000,
                        displayTitle: "English (AAC Stereo)",
                        extendedDisplayTitle: "English (AAC Stereo)"
                      },
                      {
                        id: 309182,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        displayTitle: "English",
                        extendedDisplayTitle: "English (SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Episode 6",
                type: "coverPoster",
                url: "/library/metadata/38320/thumb/1735190665"
              },
              {
                alt: "Episode 6",
                type: "snapshot",
                url: "/library/metadata/57282/thumb/1738847146"
              },
              {
                alt: "Episode 6",
                type: "background",
                url: "/library/metadata/38320/art/1735190665"
              },
              {
                alt: "Episode 6",
                type: "clearLogo",
                url: "/library/metadata/38320/clearLogo/1735190665"
              }
            ],
            UltraBlurColors: {
              topLeft: "1d2a55",
              topRight: "4d555d",
              bottomRight: "1b1f1c",
              bottomLeft: "292d2a"
            }
          },
          {
            ratingKey: "57276",
            key: "/library/metadata/57276",
            parentRatingKey: "55006",
            grandparentRatingKey: "29621",
            guid: "plex://episode/677eef3c683cfbd881880a41",
            parentGuid: "plex://season/66c3b6f87f6b3620cb902f6c",
            grandparentGuid: "plex://show/5d9c08daffd9ef001e99b8f5",
            grandparentSlug: "90-day-fiance-before-the-90-days",
            type: "episode",
            title: "Tell All, Part 4",
            grandparentKey: "/library/metadata/29621",
            parentKey: "/library/metadata/55006",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "90 Day Fiancé: Before the 90 Days",
            parentTitle: "Season 7",
            contentRating: "TV-14",
            summary:
              "On the epic conclusion to the Tell All, more secrets are uncovered. Loren breaks down in tears. Brian's girlfriend reveals concerns about lies and jealousy. Joey comes clean after some never before seen footage comes to light leaving everyone shocked.",
            index: 23,
            parentIndex: 7,
            year: 2025,
            thumb: "/library/metadata/57276/thumb/1738995221",
            art: "/library/metadata/29621/art/1738128632",
            grandparentThumb: "/library/metadata/29621/thumb/1738128632",
            grandparentArt: "/library/metadata/29621/art/1738128632",
            duration: 2371093,
            originallyAvailableAt: "2025-02-02",
            addedAt: 1738547196,
            updatedAt: 1738995221,
            Media: [
              {
                id: 61581,
                duration: 2371093,
                bitrate: 6255,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 2,
                audioCodec: "aac",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "NTSC",
                audioProfile: "lc",
                videoProfile: "main",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 92629,
                    key: "/library/parts/92629/1738547130/file.mkv",
                    duration: 2371093,
                    file: "/TV Shows (Reality)/90 Day Fiancé - Before The 90 Days/Season 07/90 Day Fiancé - Before the 90 Days - S07E23 - Tell All, Part 4 WEBDL-1080p.mkv",
                    size: 1854590674,
                    audioProfile: "lc",
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "main",
                    Stream: [
                      {
                        id: 309127,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 6129,
                        bitDepth: 8,
                        chromaLocation: "left",
                        chromaSubsampling: "4:2:0",
                        codedHeight: 1088,
                        codedWidth: 1920,
                        frameRate: 29.97,
                        hasScalingMatrix: false,
                        height: 1080,
                        level: 40,
                        profile: "main",
                        refFrames: 4,
                        scanType: "progressive",
                        width: 1920,
                        displayTitle: "1080p",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 309128,
                        streamType: 2,
                        selected: true,
                        default: true,
                        codec: "aac",
                        index: 1,
                        channels: 2,
                        bitrate: 125,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        audioChannelLayout: "stereo",
                        profile: "lc",
                        samplingRate: 48000,
                        displayTitle: "English (AAC Stereo)",
                        extendedDisplayTitle: "English (AAC Stereo)"
                      },
                      {
                        id: 309129,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        displayTitle: "English",
                        extendedDisplayTitle: "English (SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Tell All, Part 4",
                type: "coverPoster",
                url: "/library/metadata/29621/thumb/1738128632"
              },
              {
                alt: "Tell All, Part 4",
                type: "snapshot",
                url: "/library/metadata/57276/thumb/1738995221"
              },
              {
                alt: "Tell All, Part 4",
                type: "background",
                url: "/library/metadata/29621/art/1738128632"
              },
              {
                alt: "Tell All, Part 4",
                type: "clearLogo",
                url: "/library/metadata/29621/clearLogo/1738128632"
              }
            ],
            UltraBlurColors: {
              topLeft: "53121f",
              topRight: "924040",
              bottomRight: "581d13",
              bottomLeft: "933e48"
            },
            Guid: [
              {
                id: "imdb://tt35310679"
              },
              {
                id: "tmdb://5956932"
              },
              {
                id: "tvdb://10917320"
              }
            ],
            Role: [
              {
                id: 321488,
                filter: "actor=321488",
                tag: "Tigerlily Abdelfattah",
                tagKey: "675655a080661d35c494df79",
                role: "Self"
              },
              {
                id: 321013,
                filter: "actor=321013",
                tag: "Loren Allen",
                tagKey: "5f3fb952bf3e560040af3efa",
                role: "Self"
              },
              {
                id: 321489,
                filter: "actor=321489",
                tag: "Vanja Grbic",
                tagKey: "675655a06b70a8f1a4a80c91",
                role: "Self"
              },
              {
                id: 193961,
                filter: "actor=193961",
                tag: "Shaun Robinson",
                tagKey: "5d776833f59e5800218987dd",
                role: "Self - Host",
                thumb:
                  "https://metadata-static.plex.tv/a/people/ae19431faa3523cc1baff23e15d2b738.jpg"
              },
              {
                id: 321491,
                filter: "actor=321491",
                tag: "Faith Gatoc Tulod",
                tagKey: "6756559e6b70a8f1a4a80c87",
                role: "Self"
              },
              {
                id: 321492,
                filter: "actor=321492",
                tag: "Niles Valentine",
                tagKey: "6756559e34acc71bd2ac6880",
                role: "Self"
              },
              {
                id: 321490,
                filter: "actor=321490",
                tag: "Bozo Vrdoljak",
                tagKey: "675655a0729f1bff838b3436",
                role: "Self"
              }
            ],
            Producer: [
              {
                id: 317646,
                filter: "producer=317646",
                tag: "David Burch",
                tagKey: "5f4013721ae710004103e5fd"
              }
            ]
          },
          {
            ratingKey: "57275",
            key: "/library/metadata/57275",
            parentRatingKey: "55668",
            grandparentRatingKey: "28641",
            guid: "plex://episode/675b9affc64e985d097b5956",
            parentGuid: "plex://season/675b9ad1c64e985d097b5757",
            grandparentGuid: "plex://show/5d9c086affd9ef001e994192",
            grandparentSlug: "dragons-den-1",
            type: "episode",
            title: "Episode 1",
            grandparentKey: "/library/metadata/28641",
            parentKey: "/library/metadata/55668",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "Dragons' Den",
            parentTitle: "Season 22",
            contentRating: "TV-PG",
            summary:
              "Dragons’ Den returns with an exciting new line-up of celebrity guests. Joe Wicks joins Peter Jones, Deborah Meaden, Sara Davies, Steven Bartlett and Touker Suleyman.",
            index: 1,
            parentIndex: 22,
            year: 2025,
            thumb: "/library/metadata/57275/thumb/1738530427",
            art: "/library/metadata/28641/art/1738995277",
            grandparentThumb: "/library/metadata/28641/thumb/1738995277",
            grandparentArt: "/library/metadata/28641/art/1738995277",
            grandparentTheme: "/library/metadata/28641/theme/1738995277",
            duration: 3499341,
            originallyAvailableAt: "2025-01-09",
            addedAt: 1738530421,
            updatedAt: 1738530427,
            Media: [
              {
                id: 61580,
                duration: 3499341,
                bitrate: 3685,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 2,
                audioCodec: "ac3",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "PAL",
                videoProfile: "high",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 92628,
                    key: "/library/parts/92628/1738530339/file.mkv",
                    duration: 3499341,
                    file: "/TV Shows (Reality)/Dragons' Den/Season 22/Dragons' Den - S22E01 - Episode 1 HDTV-1080p.mkv",
                    size: 1607592423,
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "high",
                    Stream: [
                      {
                        id: 309124,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 3472,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        bitDepth: 8,
                        chromaLocation: "left",
                        chromaSubsampling: "4:2:0",
                        codedHeight: 1088,
                        codedWidth: 1920,
                        colorPrimaries: "bt709",
                        colorRange: "tv",
                        colorSpace: "bt709",
                        colorTrc: "bt709",
                        frameRate: 25.0,
                        hasScalingMatrix: true,
                        height: 1080,
                        level: 40,
                        profile: "high",
                        refFrames: 4,
                        scanType: "interlaced",
                        width: 1920,
                        displayTitle: "1080i",
                        extendedDisplayTitle: "1080i (H.264)"
                      },
                      {
                        id: 309125,
                        streamType: 2,
                        selected: true,
                        default: true,
                        codec: "ac3",
                        index: 1,
                        channels: 2,
                        bitrate: 192,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        audioChannelLayout: "stereo",
                        samplingRate: 48000,
                        displayTitle: "English (AC3 Stereo)",
                        extendedDisplayTitle: "English (AC3 Stereo)"
                      },
                      {
                        id: 309126,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "dvb_subtitle",
                        index: 2,
                        bitrate: 22,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        headerCompression: true,
                        displayTitle: "English",
                        extendedDisplayTitle: "English (DVB_SUBTITLE)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Episode 1",
                type: "coverPoster",
                url: "/library/metadata/28641/thumb/1738995277"
              },
              {
                alt: "Episode 1",
                type: "snapshot",
                url: "/library/metadata/57275/thumb/1738530427"
              },
              {
                alt: "Episode 1",
                type: "background",
                url: "/library/metadata/28641/art/1738995277"
              },
              {
                alt: "Episode 1",
                type: "clearLogo",
                url: "/library/metadata/28641/clearLogo/1738995277"
              }
            ],
            UltraBlurColors: {
              topLeft: "2a225f",
              topRight: "2c1303",
              bottomRight: "16171c",
              bottomLeft: "2a1b48"
            },
            Guid: [
              {
                id: "tvdb://10850912"
              }
            ],
            Role: [
              {
                id: 336692,
                filter: "actor=336692",
                tag: "Joe Wicks",
                tagKey: "640daa8b5567394f52da3688",
                role: "Guest Star"
              }
            ]
          },
          {
            ratingKey: "42046",
            key: "/library/metadata/42046/children",
            guid: "plex://show/5d9c083de98e47001eb0af53",
            slug: "sex-sent-me-to-the-er",
            studio: "GRB Entertainment",
            type: "show",
            title: "Sex Sent Me to the ER",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            contentRating: "TV-14",
            summary:
              "Couples, friends, and ER doctors reminisce about hilariously horrifying injuries that stemmed from sexual escapades.",
            index: 1,
            audienceRating: 6.8,
            lastViewedAt: 1611356554,
            year: 2013,
            thumb: "/library/metadata/42046/thumb/1736487939",
            art: "/library/metadata/42046/art/1736487939",
            duration: 3600000,
            originallyAvailableAt: "2013-12-28",
            leafCount: 56,
            viewedLeafCount: 0,
            childCount: 4,
            addedAt: 1738442047,
            updatedAt: 1736487939,
            audienceRatingImage: "themoviedb://image.rating",
            Image: [
              {
                alt: "Sex Sent Me to the ER",
                type: "coverPoster",
                url: "/library/metadata/42046/thumb/1736487939"
              },
              {
                alt: "Sex Sent Me to the ER",
                type: "background",
                url: "/library/metadata/42046/art/1736487939"
              },
              {
                alt: "Sex Sent Me to the ER",
                type: "clearLogo",
                url: "/library/metadata/42046/clearLogo/1736487939"
              }
            ],
            UltraBlurColors: {
              topLeft: "4b1e1a",
              topRight: "98374c",
              bottomRight: "9f2564",
              bottomLeft: "813537"
            },
            Genre: [
              {
                id: 2268,
                filter: "genre=2268",
                tag: "Documentary"
              },
              {
                id: 19,
                filter: "genre=19",
                tag: "Comedy"
              },
              {
                id: 91,
                filter: "genre=91",
                tag: "Drama"
              },
              {
                id: 86,
                filter: "genre=86",
                tag: "Reality"
              }
            ],
            Country: [
              {
                id: 58591,
                filter: "country=58591",
                tag: "United States of America"
              }
            ],
            Guid: [
              {
                id: "imdb://tt3415250"
              },
              {
                id: "tmdb://60950"
              },
              {
                id: "tvdb://276726"
              }
            ],
            Rating: [
              {
                image: "imdb://image.rating",
                value: 5.1,
                type: "audience"
              },
              {
                image: "themoviedb://image.rating",
                value: 6.8,
                type: "audience"
              }
            ],
            Role: [
              {
                id: 114977,
                filter: "actor=114977",
                tag: "Emily Fonda",
                tagKey: "5d7768e1594b2b001e6973d5",
                role: "Daisy",
                thumb:
                  "https://metadata-static.plex.tv/f/people/fb2580a37af39e27a15cb744d7b4de06.jpg"
              },
              {
                id: 194855,
                filter: "actor=194855",
                tag: "Paris Dylan",
                tagKey: "5d776ae77a53e9001e71325e",
                role: "Randy",
                thumb:
                  "https://metadata-static.plex.tv/a/people/a11ae3d0a3d0f66e2912b9425345c3e3.jpg"
              },
              {
                id: 194856,
                filter: "actor=194856",
                tag: "Timothy Prindle",
                tagKey: "5d776a4a23d5a3001f502adc",
                role: "Dr. Jason"
              },
              {
                id: 194857,
                filter: "actor=194857",
                tag: "Tabitha Brown",
                tagKey: "5d7768821999bc0020dc73be",
                role: "Dr. Mary Manson",
                thumb:
                  "https://metadata-static.plex.tv/e/people/e340bdcea427fddd8dd6ba83d26bbab2.jpg"
              },
              {
                id: 194858,
                filter: "actor=194858",
                tag: "Cat LaCohie",
                tagKey: "6327363e1f5bd5c1441c235c",
                role: "Laura",
                thumb:
                  "https://metadata-static.plex.tv/d/people/d31a5158f9ab6f83e86ecd81a8b6f08a.jpg"
              },
              {
                id: 194859,
                filter: "actor=194859",
                tag: "Leah Caruana",
                tagKey: "5d776b42fb0d55001f561baf",
                role: "Alyssa",
                thumb:
                  "https://metadata-static.plex.tv/f/people/f3afa1bfc2d9f80c9d12edd97728b8f3.jpg"
              }
            ],
            Similar: [
              {
                id: 259,
                filter: "similar=259",
                tag: "Criss Angel Mindfreak"
              }
            ],
            Location: [
              {
                path: "/TV Shows (Reality)/Sex Sent Me to the ER"
              }
            ]
          },
          {
            ratingKey: "57243",
            key: "/library/metadata/57243",
            parentRatingKey: "57228",
            grandparentRatingKey: "28063",
            guid: "plex://episode/678e6183db921d44e5ec9d54",
            parentGuid: "plex://season/673f0c07a69cea6bd5fe1b6d",
            grandparentGuid: "plex://show/5d9c08674eefaa001f5dc642",
            grandparentSlug: "penn-and-teller-fool-us",
            type: "episode",
            title: "A Magician Gives Brooke the Bird",
            titleSort: "Magician Gives Brooke the Bird",
            grandparentKey: "/library/metadata/28063",
            parentKey: "/library/metadata/57228",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "Penn & Teller: Fool Us",
            parentTitle: "Season 11",
            contentRating: "TV-14",
            summary:
              "Featured magicians include Blake Vogt, Hernan Maccagno, Ella Nicholson and Friedrich Roitzsch.",
            index: 2,
            parentIndex: 11,
            year: 2025,
            thumb: "/library/metadata/57243/thumb/1739014459",
            art: "/library/metadata/28063/art/1737869751",
            grandparentThumb: "/library/metadata/28063/thumb/1737869751",
            grandparentArt: "/library/metadata/28063/art/1737869751",
            grandparentTheme: "/library/metadata/28063/theme/1737869751",
            duration: 2423020,
            originallyAvailableAt: "2025-01-31",
            addedAt: 1738409629,
            updatedAt: 1739014459,
            Media: [
              {
                id: 61537,
                duration: 2423020,
                bitrate: 15935,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 2,
                audioCodec: "aac",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "NTSC",
                audioProfile: "he-aac",
                videoProfile: "high",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 92585,
                    key: "/library/parts/92585/1738408640/file.mkv",
                    duration: 2423020,
                    file: "/TV Shows (Reality)/Penn & Teller - Fool Us/Season 11/Penn & Teller - Fool Us - S11E02 - A Magician Gives Brooke the Bird WEBDL-1080p.mkv",
                    size: 2423691669,
                    audioProfile: "he-aac",
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "high",
                    Stream: [
                      {
                        id: 308208,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 7936,
                        bitDepth: 8,
                        chromaLocation: "left",
                        chromaSubsampling: "4:2:0",
                        closedCaptions: true,
                        codedHeight: 1088,
                        codedWidth: 1920,
                        frameRate: 29.97,
                        hasScalingMatrix: false,
                        height: 1080,
                        level: 40,
                        profile: "high",
                        refFrames: 3,
                        scanType: "progressive",
                        width: 1920,
                        displayTitle: "1080p",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 308210,
                        streamType: 2,
                        selected: true,
                        default: true,
                        codec: "aac",
                        index: 1,
                        channels: 2,
                        bitrate: 64,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        audioChannelLayout: "stereo",
                        profile: "he-aac",
                        samplingRate: 44100,
                        displayTitle: "English (HE-AAC Stereo)",
                        extendedDisplayTitle: "English (HE-AAC Stereo)"
                      },
                      {
                        id: 308209,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "eia_608",
                        index: 0,
                        bitrate: 7936,
                        embeddedInVideo: "1",
                        displayTitle: "Unknown",
                        extendedDisplayTitle: "Unknown (Closed Captions)"
                      },
                      {
                        id: 308211,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        title: "English",
                        displayTitle: "English",
                        extendedDisplayTitle: "English (SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "A Magician Gives Brooke the Bird",
                type: "coverPoster",
                url: "/library/metadata/28063/thumb/1737869751"
              },
              {
                alt: "A Magician Gives Brooke the Bird",
                type: "snapshot",
                url: "/library/metadata/57243/thumb/1739014459"
              },
              {
                alt: "A Magician Gives Brooke the Bird",
                type: "background",
                url: "/library/metadata/28063/art/1737869751"
              },
              {
                alt: "A Magician Gives Brooke the Bird",
                type: "clearLogo",
                url: "/library/metadata/28063/clearLogo/1737869751"
              }
            ],
            UltraBlurColors: {
              topLeft: "293301",
              topRight: "293e14",
              bottomRight: "294217",
              bottomLeft: "4b690a"
            },
            Guid: [
              {
                id: "imdb://tt35549437"
              },
              {
                id: "tmdb://5920812"
              },
              {
                id: "tvdb://10903120"
              }
            ],
            Rating: [
              {
                image: "imdb://image.rating",
                value: 6.6,
                type: "audience"
              }
            ],
            Role: [
              {
                id: 123116,
                filter: "actor=123116",
                tag: "Penn Jillette",
                tagKey: "5d776828880197001ec90e7e",
                role: "Self - Judge",
                thumb:
                  "https://metadata-static.plex.tv/a/people/a4bcaa8de644336313d01cde55e71f96.jpg"
              },
              {
                id: 126522,
                filter: "actor=126522",
                tag: "Teller",
                tagKey: "5d77683d85719b001f3a535e",
                role: "Self - Judge",
                thumb:
                  "https://metadata-static.plex.tv/7/people/708568fd018d7aa8b1032dcf867747e8.jpg"
              }
            ]
          },
          {
            ratingKey: "57240",
            key: "/library/metadata/57240",
            parentRatingKey: "55071",
            grandparentRatingKey: "30009",
            guid: "plex://episode/678ba4b6afba586e749b36da",
            parentGuid: "plex://season/6697ba330f4923e3427c9f39",
            grandparentGuid: "plex://show/5d9c0874705e7a001e6ddc85",
            grandparentSlug: "hells-kitchen-us",
            type: "episode",
            title: "One Hell of a Ride",
            grandparentKey: "/library/metadata/30009",
            parentKey: "/library/metadata/55071",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "Hell's Kitchen (US)",
            parentTitle: "Season 23",
            contentRating: "TV-14",
            summary:
              "The three finalists are visited by their loved ones, receive a makeover, and visit Hell's Kitchen Foxwoods for the first time; each of the finalists is assigned to a sous chef to help curate a personalized and showstopping five-course meal.",
            index: 15,
            parentIndex: 23,
            audienceRating: 7.0,
            year: 2025,
            thumb: "/library/metadata/57240/thumb/1738918119",
            art: "/library/metadata/30009/art/1738995285",
            grandparentThumb: "/library/metadata/30009/thumb/1738995285",
            grandparentArt: "/library/metadata/30009/art/1738995285",
            grandparentTheme: "/library/metadata/30009/theme/1738995285",
            duration: 2592032,
            originallyAvailableAt: "2025-01-30",
            addedAt: 1738314142,
            updatedAt: 1738918119,
            audienceRatingImage: "themoviedb://image.rating",
            Media: [
              {
                id: 61534,
                duration: 2592032,
                bitrate: 7689,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 6,
                audioCodec: "eac3",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "NTSC",
                videoProfile: "high",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 92582,
                    key: "/library/parts/92582/1738314075/file.mkv",
                    duration: 2592032,
                    file: "/TV Shows (Reality)/Gordan Ramsay - Hells Kitchen US/Season 23/Hell's Kitchen (US) - S23E15 - One Hell of a Ride WEBDL-1080p.mkv",
                    size: 2492025680,
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "high",
                    Stream: [
                      {
                        id: 308194,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 7433,
                        bitDepth: 8,
                        chromaLocation: "left",
                        chromaSubsampling: "4:2:0",
                        codedHeight: 1088,
                        codedWidth: 1920,
                        colorPrimaries: "bt709",
                        colorRange: "tv",
                        colorSpace: "bt709",
                        colorTrc: "bt709",
                        frameRate: 29.97,
                        hasScalingMatrix: false,
                        height: 1080,
                        level: 40,
                        profile: "high",
                        refFrames: 4,
                        scanType: "progressive",
                        width: 1920,
                        displayTitle: "1080p",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 308195,
                        streamType: 2,
                        selected: true,
                        default: true,
                        codec: "eac3",
                        index: 1,
                        channels: 6,
                        bitrate: 256,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        audioChannelLayout: "5.1(side)",
                        samplingRate: 48000,
                        displayTitle: "English (EAC3 5.1)",
                        extendedDisplayTitle: "English (EAC3 5.1)"
                      },
                      {
                        id: 308196,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        title: "English",
                        displayTitle: "English",
                        extendedDisplayTitle: "English (SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "One Hell of a Ride",
                type: "coverPoster",
                url: "/library/metadata/30009/thumb/1738995285"
              },
              {
                alt: "One Hell of a Ride",
                type: "snapshot",
                url: "/library/metadata/57240/thumb/1738918119"
              },
              {
                alt: "One Hell of a Ride",
                type: "background",
                url: "/library/metadata/30009/art/1738995285"
              },
              {
                alt: "One Hell of a Ride",
                type: "clearLogo",
                url: "/library/metadata/30009/clearLogo/1738995285"
              }
            ],
            UltraBlurColors: {
              topLeft: "4c1a2a",
              topRight: "992b43",
              bottomRight: "381126",
              bottomLeft: "9c3344"
            },
            Guid: [
              {
                id: "imdb://tt35527173"
              },
              {
                id: "tmdb://5917630"
              },
              {
                id: "tvdb://10924465"
              }
            ],
            Rating: [
              {
                image: "imdb://image.rating",
                value: 7.3,
                type: "audience"
              },
              {
                image: "themoviedb://image.rating",
                value: 7.0,
                type: "audience"
              }
            ],
            Role: [
              {
                id: 106830,
                filter: "actor=106830",
                tag: "Gordon Ramsay",
                tagKey: "5d7768aa374a5b001fecc9c4",
                role: "Self - Chef",
                thumb:
                  "https://metadata-static.plex.tv/d/people/dd20a681247c97c89d9aa32747028ba3.jpg"
              },
              {
                id: 194259,
                filter: "actor=194259",
                tag: "James Avery",
                tagKey: "6233480e2e411962942d1edd",
                role: "Self - Sous Chef"
              },
              {
                id: 216200,
                filter: "actor=216200",
                tag: "Marino Monferrato",
                tagKey: "644d077c7b10820176a91641",
                role: "Self - Maître D'",
                thumb:
                  "https://metadata-static.plex.tv/7/people/79dba3a86ae936fe2f070439e364a4ea.jpg"
              },
              {
                id: 228469,
                filter: "actor=228469",
                tag: "Michelle Tribble",
                tagKey: "64da17c5fb911c69374a96a6",
                role: "Self - Sous Chef"
              }
            ],
            Producer: [
              {
                id: 325340,
                filter: "producer=325340",
                tag: "Amelia Knapp",
                tagKey: "5f4019e91ae71000410484ce"
              },
              {
                id: 336569,
                filter: "producer=336569",
                tag: "Gordon Ramsay",
                tagKey: "5d7768aa374a5b001fecc9c4",
                thumb:
                  "https://metadata-static.plex.tv/d/people/dd20a681247c97c89d9aa32747028ba3.jpg"
              }
            ]
          },
          {
            ratingKey: "57239",
            key: "/library/metadata/57239",
            parentRatingKey: "55668",
            grandparentRatingKey: "28641",
            guid: "plex://episode/6791e0b6eae5d635176f752b",
            parentGuid: "plex://season/675b9ad1c64e985d097b5757",
            grandparentGuid: "plex://show/5d9c086affd9ef001e994192",
            grandparentSlug: "dragons-den-1",
            type: "episode",
            title: "Episode 4",
            grandparentKey: "/library/metadata/28641",
            parentKey: "/library/metadata/55668",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "Dragons' Den",
            parentTitle: "Season 22",
            contentRating: "TV-PG",
            summary:
              "Fashion expert, TV presenter and entrepreneur Trinny Woodall aims to add new investments to her portfolio as she joins the ferocious five.",
            index: 4,
            parentIndex: 22,
            year: 2025,
            thumb: "/library/metadata/57239/thumb/1738995231",
            art: "/library/metadata/28641/art/1738995277",
            grandparentThumb: "/library/metadata/28641/thumb/1738995277",
            grandparentArt: "/library/metadata/28641/art/1738995277",
            grandparentTheme: "/library/metadata/28641/theme/1738995277",
            duration: 3561720,
            originallyAvailableAt: "2025-01-30",
            addedAt: 1738272374,
            updatedAt: 1738995231,
            Media: [
              {
                id: 61533,
                duration: 3561720,
                bitrate: 5838,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 2,
                audioCodec: "aac",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                audioProfile: "lc",
                videoProfile: "high",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 92580,
                    key: "/library/parts/92580/1738239136/file.mkv",
                    duration: 3561720,
                    file: "/TV Shows (Reality)/Dragons' Den/Season 22/Dragons' Den - S22E04 - Episode 4 WEBDL-1080p.mkv",
                    size: 2601168520,
                    audioProfile: "lc",
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "high",
                    Stream: [
                      {
                        id: 308187,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 5710,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        bitDepth: 8,
                        chromaLocation: "left",
                        chromaSubsampling: "4:2:0",
                        codedHeight: 1088,
                        codedWidth: 1920,
                        colorPrimaries: "bt709",
                        colorRange: "tv",
                        colorSpace: "bt709",
                        colorTrc: "bt709",
                        frameRate: 50.0,
                        hasScalingMatrix: false,
                        height: 1080,
                        level: 42,
                        original: true,
                        profile: "high",
                        refFrames: 4,
                        scanType: "progressive",
                        width: 1920,
                        displayTitle: "1080p",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 308188,
                        streamType: 2,
                        selected: true,
                        default: true,
                        codec: "aac",
                        index: 1,
                        channels: 2,
                        bitrate: 128,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        audioChannelLayout: "stereo",
                        dub: true,
                        profile: "lc",
                        samplingRate: 48000,
                        displayTitle: "English (AAC Stereo)",
                        extendedDisplayTitle: "English (AAC Stereo)"
                      },
                      {
                        id: 308189,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        original: true,
                        displayTitle: "English",
                        extendedDisplayTitle: "English (SRT)"
                      },
                      {
                        id: 308190,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 3,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        hearingImpaired: true,
                        original: true,
                        title: "SDH",
                        displayTitle: "English SDH",
                        extendedDisplayTitle: "SDH (English SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Episode 4",
                type: "coverPoster",
                url: "/library/metadata/28641/thumb/1738995277"
              },
              {
                alt: "Episode 4",
                type: "snapshot",
                url: "/library/metadata/57239/thumb/1738995231"
              },
              {
                alt: "Episode 4",
                type: "background",
                url: "/library/metadata/28641/art/1738995277"
              },
              {
                alt: "Episode 4",
                type: "clearLogo",
                url: "/library/metadata/28641/clearLogo/1738995277"
              }
            ],
            UltraBlurColors: {
              topLeft: "231c47",
              topRight: "131637",
              bottomRight: "020c16",
              bottomLeft: "77571e"
            },
            Guid: [
              {
                id: "tvdb://10912128"
              }
            ],
            Role: [
              {
                id: 336867,
                filter: "actor=336867",
                tag: "Trinny Woodall",
                tagKey: "614105258d89e383475c4650",
                role: "Guest Star"
              }
            ]
          },
          {
            ratingKey: "57238",
            key: "/library/metadata/57238",
            parentRatingKey: "55599",
            grandparentRatingKey: "38320",
            guid: "local://57238",
            parentGuid: "plex://season/677720d0e9f315c4f6109f66",
            grandparentGuid: "plex://show/5d9c08182192ba001f307411",
            grandparentSlug: "my-600-lb-life",
            type: "episode",
            title: "Episode 5",
            grandparentKey: "/library/metadata/38320",
            parentKey: "/library/metadata/55599",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "My 600-lb Life",
            parentTitle: "Season 13",
            contentRating: "TV-14",
            summary: "",
            index: 5,
            parentIndex: 13,
            parentYear: 2025,
            thumb: "/library/metadata/57238/thumb/1738201651",
            art: "/library/metadata/38320/art/1735190665",
            grandparentThumb: "/library/metadata/38320/thumb/1735190665",
            grandparentArt: "/library/metadata/38320/art/1735190665",
            duration: 5142080,
            addedAt: 1738201642,
            updatedAt: 1738201651,
            Media: [
              {
                id: 61526,
                duration: 5142080,
                bitrate: 9653,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 2,
                audioCodec: "eac3",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "24p",
                videoProfile: "high",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 92573,
                    key: "/library/parts/92573/1738201545/file.mkv",
                    duration: 5142080,
                    file: "/TV Shows (Reality)/My 600-lb Life/Season 13/My 600-lb Life - S13E05 - Jacky's Journey WEBDL-1080p.mkv",
                    size: 6205756131,
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "high",
                    Stream: [
                      {
                        id: 308159,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 9429,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        bitDepth: 8,
                        chromaLocation: "left",
                        chromaSubsampling: "4:2:0",
                        codedHeight: 1088,
                        codedWidth: 1920,
                        colorPrimaries: "bt709",
                        colorRange: "tv",
                        colorSpace: "bt709",
                        colorTrc: "bt709",
                        frameRate: 23.976,
                        hasScalingMatrix: false,
                        height: 1080,
                        level: 40,
                        original: true,
                        profile: "high",
                        refFrames: 4,
                        scanType: "progressive",
                        width: 1920,
                        displayTitle: "1080p",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 308160,
                        streamType: 2,
                        selected: true,
                        default: true,
                        codec: "eac3",
                        index: 1,
                        channels: 2,
                        bitrate: 224,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        audioChannelLayout: "stereo",
                        original: true,
                        samplingRate: 48000,
                        displayTitle: "English (EAC3 Stereo)",
                        extendedDisplayTitle: "English (EAC3 Stereo)"
                      },
                      {
                        id: 308161,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        dub: true,
                        title: "United States",
                        displayTitle: "English",
                        extendedDisplayTitle: "United States (English SRT)"
                      },
                      {
                        id: 308162,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 3,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        dub: true,
                        hearingImpaired: true,
                        title: "United States (SDH)",
                        displayTitle: "English SDH",
                        extendedDisplayTitle:
                          "United States (SDH) (English SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Episode 5",
                type: "coverPoster",
                url: "/library/metadata/38320/thumb/1735190665"
              },
              {
                alt: "Episode 5",
                type: "snapshot",
                url: "/library/metadata/57238/thumb/1738201651"
              },
              {
                alt: "Episode 5",
                type: "background",
                url: "/library/metadata/38320/art/1735190665"
              },
              {
                alt: "Episode 5",
                type: "clearLogo",
                url: "/library/metadata/38320/clearLogo/1735190665"
              }
            ],
            UltraBlurColors: {
              topLeft: "113338",
              topRight: "2d6963",
              bottomRight: "19240d",
              bottomLeft: "212523"
            }
          },
          {
            ratingKey: "57232",
            key: "/library/metadata/57232",
            parentRatingKey: "55006",
            grandparentRatingKey: "29621",
            guid: "plex://episode/677eef3c683cfbd881880a40",
            parentGuid: "plex://season/66c3b6f87f6b3620cb902f6c",
            grandparentGuid: "plex://show/5d9c08daffd9ef001e99b8f5",
            grandparentSlug: "90-day-fiance-before-the-90-days",
            type: "episode",
            title: "Tell All, Part 3",
            grandparentKey: "/library/metadata/29621",
            parentKey: "/library/metadata/55006",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "90 Day Fiancé: Before the 90 Days",
            parentTitle: "Season 7",
            contentRating: "TV-14",
            summary:
              "On part 3 of the Before the 90 Days Tell All, Veah comes under fire for her decision to bring Rory, Faith struggles to put a label on her and Loren's relationship, and Vanja reveals a shocking betrayal.",
            index: 22,
            parentIndex: 7,
            year: 2025,
            thumb: "/library/metadata/57232/thumb/1738995221",
            art: "/library/metadata/29621/art/1738128632",
            grandparentThumb: "/library/metadata/29621/thumb/1738128632",
            grandparentArt: "/library/metadata/29621/art/1738128632",
            duration: 2550805,
            originallyAvailableAt: "2025-01-26",
            addedAt: 1737942843,
            updatedAt: 1738995221,
            Media: [
              {
                id: 61519,
                duration: 2550805,
                bitrate: 6347,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 2,
                audioCodec: "aac",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "NTSC",
                audioProfile: "lc",
                videoProfile: "main",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 92566,
                    key: "/library/parts/92566/1737909904/file.mkv",
                    duration: 2550805,
                    file: "/TV Shows (Reality)/90 Day Fiancé - Before The 90 Days/Season 07/90 Day Fiancé - Before the 90 Days - S07E22 - Tell All, Part 3 WEBDL-1080p.mkv",
                    size: 2024534062,
                    audioProfile: "lc",
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "main",
                    Stream: [
                      {
                        id: 308115,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 6221,
                        bitDepth: 8,
                        chromaLocation: "left",
                        chromaSubsampling: "4:2:0",
                        codedHeight: 1088,
                        codedWidth: 1920,
                        frameRate: 29.97,
                        hasScalingMatrix: false,
                        height: 1080,
                        level: 40,
                        profile: "main",
                        refFrames: 4,
                        scanType: "progressive",
                        width: 1920,
                        displayTitle: "1080p",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 308116,
                        streamType: 2,
                        selected: true,
                        default: true,
                        codec: "aac",
                        index: 1,
                        channels: 2,
                        bitrate: 125,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        audioChannelLayout: "stereo",
                        profile: "lc",
                        samplingRate: 48000,
                        displayTitle: "English (AAC Stereo)",
                        extendedDisplayTitle: "English (AAC Stereo)"
                      },
                      {
                        id: 308117,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        displayTitle: "English",
                        extendedDisplayTitle: "English (SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Tell All, Part 3",
                type: "coverPoster",
                url: "/library/metadata/29621/thumb/1738128632"
              },
              {
                alt: "Tell All, Part 3",
                type: "snapshot",
                url: "/library/metadata/57232/thumb/1738995221"
              },
              {
                alt: "Tell All, Part 3",
                type: "background",
                url: "/library/metadata/29621/art/1738128632"
              },
              {
                alt: "Tell All, Part 3",
                type: "clearLogo",
                url: "/library/metadata/29621/clearLogo/1738128632"
              }
            ],
            UltraBlurColors: {
              topLeft: "52180b",
              topRight: "9b3545",
              bottomRight: "1f4e6e",
              bottomLeft: "77201d"
            },
            Guid: [
              {
                id: "imdb://tt35309363"
              },
              {
                id: "tmdb://5935146"
              },
              {
                id: "tvdb://10917317"
              }
            ],
            Rating: [
              {
                image: "imdb://image.rating",
                value: 5.6,
                type: "audience"
              }
            ],
            Role: [
              {
                id: 321488,
                filter: "actor=321488",
                tag: "Tigerlily Abdelfattah",
                tagKey: "675655a080661d35c494df79",
                role: "Self"
              },
              {
                id: 321013,
                filter: "actor=321013",
                tag: "Loren Allen",
                tagKey: "5f3fb952bf3e560040af3efa",
                role: "Self"
              },
              {
                id: 321489,
                filter: "actor=321489",
                tag: "Vanja Grbic",
                tagKey: "675655a06b70a8f1a4a80c91",
                role: "Self"
              },
              {
                id: 193961,
                filter: "actor=193961",
                tag: "Shaun Robinson",
                tagKey: "5d776833f59e5800218987dd",
                role: "Self - Host",
                thumb:
                  "https://metadata-static.plex.tv/a/people/ae19431faa3523cc1baff23e15d2b738.jpg"
              },
              {
                id: 321491,
                filter: "actor=321491",
                tag: "Faith Gatoc Tulod",
                tagKey: "6756559e6b70a8f1a4a80c87",
                role: "Self"
              },
              {
                id: 321492,
                filter: "actor=321492",
                tag: "Niles Valentine",
                tagKey: "6756559e34acc71bd2ac6880",
                role: "Self"
              },
              {
                id: 321490,
                filter: "actor=321490",
                tag: "Bozo Vrdoljak",
                tagKey: "675655a0729f1bff838b3436",
                role: "Self"
              }
            ],
            Producer: [
              {
                id: 317646,
                filter: "producer=317646",
                tag: "David Burch",
                tagKey: "5f4013721ae710004103e5fd"
              }
            ]
          },
          {
            ratingKey: "57229",
            key: "/library/metadata/57229",
            parentRatingKey: "57228",
            grandparentRatingKey: "28063",
            guid: "plex://episode/6787ab142fbd7052f4902673",
            parentGuid: "plex://season/673f0c07a69cea6bd5fe1b6d",
            grandparentGuid: "plex://show/5d9c08674eefaa001f5dc642",
            grandparentSlug: "penn-and-teller-fool-us",
            type: "episode",
            title: "The Penn & Teller 50th Anniversary Special",
            titleSort: "Penn & Teller 50th Anniversary Special",
            grandparentKey: "/library/metadata/28063",
            parentKey: "/library/metadata/57228",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "Penn & Teller: Fool Us",
            parentTitle: "Season 11",
            contentRating: "TV-14",
            summary:
              "Magicians include Young & Strange, Piff and Piero Venesia; an amazing two-act trick by Penn and Teller.",
            index: 1,
            parentIndex: 11,
            year: 2025,
            thumb: "/library/metadata/57229/thumb/1739014459",
            art: "/library/metadata/28063/art/1737869751",
            grandparentThumb: "/library/metadata/28063/thumb/1737869751",
            grandparentArt: "/library/metadata/28063/art/1737869751",
            grandparentTheme: "/library/metadata/28063/theme/1737869751",
            duration: 2545009,
            originallyAvailableAt: "2025-01-24",
            addedAt: 1737804979,
            updatedAt: 1739014459,
            Media: [
              {
                id: 61502,
                duration: 2545009,
                bitrate: 15996,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 2,
                audioCodec: "aac",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "NTSC",
                audioProfile: "lc",
                videoProfile: "high",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 92549,
                    key: "/library/parts/92549/1737804939/file.mkv",
                    duration: 2545009,
                    file: "/TV Shows (Reality)/Penn & Teller - Fool Us/Season 11/Penn & Teller - Fool Us - S11E01 - The Penn & Teller 50th Anniversary Special WEBDL-1080p.mkv",
                    size: 2565343993,
                    audioProfile: "lc",
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "high",
                    Stream: [
                      {
                        id: 307669,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 7935,
                        bitDepth: 8,
                        chromaLocation: "left",
                        chromaSubsampling: "4:2:0",
                        closedCaptions: true,
                        codedHeight: 1088,
                        codedWidth: 1920,
                        frameRate: 29.97,
                        hasScalingMatrix: false,
                        height: 1080,
                        level: 40,
                        profile: "high",
                        refFrames: 3,
                        scanType: "progressive",
                        width: 1920,
                        displayTitle: "1080p",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 307671,
                        streamType: 2,
                        selected: true,
                        default: true,
                        codec: "aac",
                        index: 1,
                        channels: 2,
                        bitrate: 126,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        audioChannelLayout: "stereo",
                        profile: "lc",
                        samplingRate: 44100,
                        displayTitle: "English (AAC Stereo)",
                        extendedDisplayTitle: "English (AAC Stereo)"
                      },
                      {
                        id: 307670,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "eia_608",
                        index: 0,
                        bitrate: 7935,
                        embeddedInVideo: "1",
                        displayTitle: "Unknown",
                        extendedDisplayTitle: "Unknown (Closed Captions)"
                      },
                      {
                        id: 307672,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        title: "English",
                        displayTitle: "English",
                        extendedDisplayTitle: "English (SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "The Penn & Teller 50th Anniversary Special",
                type: "coverPoster",
                url: "/library/metadata/28063/thumb/1737869751"
              },
              {
                alt: "The Penn & Teller 50th Anniversary Special",
                type: "snapshot",
                url: "/library/metadata/57229/thumb/1739014459"
              },
              {
                alt: "The Penn & Teller 50th Anniversary Special",
                type: "background",
                url: "/library/metadata/28063/art/1737869751"
              },
              {
                alt: "The Penn & Teller 50th Anniversary Special",
                type: "clearLogo",
                url: "/library/metadata/28063/clearLogo/1737869751"
              }
            ],
            UltraBlurColors: {
              topLeft: "012f53",
              topRight: "163d61",
              bottomRight: "040317",
              bottomLeft: "ae1028"
            },
            Guid: [
              {
                id: "imdb://tt32534511"
              },
              {
                id: "tmdb://5902447"
              },
              {
                id: "tvdb://10817707"
              }
            ],
            Rating: [
              {
                image: "imdb://image.rating",
                value: 7.8,
                type: "audience"
              }
            ],
            Role: [
              {
                id: 123116,
                filter: "actor=123116",
                tag: "Penn Jillette",
                tagKey: "5d776828880197001ec90e7e",
                role: "Self - Judge",
                thumb:
                  "https://metadata-static.plex.tv/a/people/a4bcaa8de644336313d01cde55e71f96.jpg"
              },
              {
                id: 126522,
                filter: "actor=126522",
                tag: "Teller",
                tagKey: "5d77683d85719b001f3a535e",
                role: "Self - Judge",
                thumb:
                  "https://metadata-static.plex.tv/7/people/708568fd018d7aa8b1032dcf867747e8.jpg"
              }
            ]
          },
          {
            ratingKey: "57227",
            key: "/library/metadata/57227",
            parentRatingKey: "55071",
            grandparentRatingKey: "30009",
            guid: "plex://episode/67852fe8b023dc12ceb57034",
            parentGuid: "plex://season/6697ba330f4923e3427c9f39",
            grandparentGuid: "plex://show/5d9c0874705e7a001e6ddc85",
            grandparentSlug: "hells-kitchen-us",
            type: "episode",
            title: "Hell at the Pass",
            grandparentKey: "/library/metadata/30009",
            parentKey: "/library/metadata/55071",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "Hell's Kitchen (US)",
            parentTitle: "Season 23",
            contentRating: "TV-14",
            summary:
              "The remaining four chefs are challenged to cook and present a tableside dish; a cutthroat dinner service determines who advances to the final three.",
            index: 14,
            parentIndex: 23,
            audienceRating: 7.0,
            year: 2025,
            thumb: "/library/metadata/57227/thumb/1738918119",
            art: "/library/metadata/30009/art/1738995285",
            grandparentThumb: "/library/metadata/30009/thumb/1738995285",
            grandparentArt: "/library/metadata/30009/art/1738995285",
            grandparentTheme: "/library/metadata/30009/theme/1738995285",
            duration: 2591989,
            originallyAvailableAt: "2025-01-23",
            addedAt: 1737703037,
            updatedAt: 1738918119,
            audienceRatingImage: "themoviedb://image.rating",
            chapterSource: "media",
            Media: [
              {
                id: 61501,
                duration: 2591989,
                bitrate: 10392,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 6,
                audioCodec: "eac3",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "NTSC",
                videoProfile: "high",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 92548,
                    key: "/library/parts/92548/1737703003/file.mkv",
                    duration: 2591989,
                    file: "/TV Shows (Reality)/Gordan Ramsay - Hells Kitchen US/Season 23/Hell's Kitchen (US) - S23E14 - Hell At The Pass WEBDL-1080p.mkv",
                    size: 3367887428,
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "high",
                    Stream: [
                      {
                        id: 307636,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 9752,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        bitDepth: 8,
                        chromaLocation: "left",
                        chromaSubsampling: "4:2:0",
                        codedHeight: 1088,
                        codedWidth: 1920,
                        colorPrimaries: "bt709",
                        colorRange: "tv",
                        colorSpace: "bt709",
                        colorTrc: "bt709",
                        frameRate: 29.97,
                        hasScalingMatrix: false,
                        height: 1080,
                        level: 40,
                        original: true,
                        profile: "high",
                        refFrames: 4,
                        scanType: "progressive",
                        width: 1920,
                        displayTitle: "1080p",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 307637,
                        streamType: 2,
                        selected: true,
                        default: true,
                        codec: "eac3",
                        index: 1,
                        channels: 6,
                        bitrate: 640,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        audioChannelLayout: "5.1(side)",
                        original: true,
                        samplingRate: 48000,
                        displayTitle: "English (EAC3 5.1)",
                        extendedDisplayTitle: "English (EAC3 5.1)"
                      },
                      {
                        id: 307638,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        original: true,
                        displayTitle: "English",
                        extendedDisplayTitle: "English (SRT)"
                      },
                      {
                        id: 307639,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 3,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        hearingImpaired: true,
                        original: true,
                        title: "SDH",
                        displayTitle: "English SDH",
                        extendedDisplayTitle: "SDH (English SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Hell at the Pass",
                type: "coverPoster",
                url: "/library/metadata/30009/thumb/1738995285"
              },
              {
                alt: "Hell at the Pass",
                type: "snapshot",
                url: "/library/metadata/57227/thumb/1738918119"
              },
              {
                alt: "Hell at the Pass",
                type: "background",
                url: "/library/metadata/30009/art/1738995285"
              },
              {
                alt: "Hell at the Pass",
                type: "clearLogo",
                url: "/library/metadata/30009/clearLogo/1738995285"
              }
            ],
            UltraBlurColors: {
              topLeft: "162e4f",
              topRight: "173251",
              bottomRight: "6f3c1e",
              bottomLeft: "1c1d1e"
            },
            Guid: [
              {
                id: "imdb://tt35407699"
              },
              {
                id: "tmdb://5896400"
              },
              {
                id: "tvdb://10910598"
              }
            ],
            Rating: [
              {
                image: "imdb://image.rating",
                value: 7.5,
                type: "audience"
              },
              {
                image: "themoviedb://image.rating",
                value: 7.0,
                type: "audience"
              }
            ],
            Role: [
              {
                id: 106830,
                filter: "actor=106830",
                tag: "Gordon Ramsay",
                tagKey: "5d7768aa374a5b001fecc9c4",
                role: "Self - Chef",
                thumb:
                  "https://metadata-static.plex.tv/d/people/dd20a681247c97c89d9aa32747028ba3.jpg"
              },
              {
                id: 194259,
                filter: "actor=194259",
                tag: "James Avery",
                tagKey: "6233480e2e411962942d1edd",
                role: "Self - Sous Chef"
              },
              {
                id: 216200,
                filter: "actor=216200",
                tag: "Marino Monferrato",
                tagKey: "644d077c7b10820176a91641",
                role: "Self - Maître D'",
                thumb:
                  "https://metadata-static.plex.tv/7/people/79dba3a86ae936fe2f070439e364a4ea.jpg"
              },
              {
                id: 228469,
                filter: "actor=228469",
                tag: "Michelle Tribble",
                tagKey: "64da17c5fb911c69374a96a6",
                role: "Self - Sous Chef"
              }
            ],
            Producer: [
              {
                id: 317407,
                filter: "producer=317407",
                tag: "Gautam Badgujar",
                tagKey: "5f402bd086422500428408d1"
              },
              {
                id: 317408,
                filter: "producer=317408",
                tag: "Ashley Callirgos",
                tagKey: "6538cdd3079d385acb2a6985"
              },
              {
                id: 317409,
                filter: "producer=317409",
                tag: "Rob Dodd",
                tagKey: "5d776cbcf617c90020184b82"
              },
              {
                id: 317410,
                filter: "producer=317410",
                tag: "Michael Leavitt",
                tagKey: "5f404171cae2c60042f34c34"
              },
              {
                id: 317411,
                filter: "producer=317411",
                tag: "Tahjanae Montgomery",
                tagKey: "670134552674d7c225455bc5"
              },
              {
                id: 317412,
                filter: "producer=317412",
                tag: "Jeffrey Pakosta",
                tagKey: "5d776aa67a53e9001e70b5f0"
              },
              {
                id: 317413,
                filter: "producer=317413",
                tag: "Gina Gonzalez Scallon",
                tagKey: "60c31a199a32d6002c9b1986"
              },
              {
                id: 317414,
                filter: "producer=317414",
                tag: "Heather Rose Wagner",
                tagKey: "5f3fe318ce2564003f880326"
              }
            ]
          },
          {
            ratingKey: "57226",
            key: "/library/metadata/57226",
            parentRatingKey: "55668",
            grandparentRatingKey: "28641",
            guid: "plex://episode/6787c81e92995b6accdf07a9",
            parentGuid: "plex://season/675b9ad1c64e985d097b5757",
            grandparentGuid: "plex://show/5d9c086affd9ef001e994192",
            grandparentSlug: "dragons-den-1",
            type: "episode",
            title: "Episode 3",
            grandparentKey: "/library/metadata/28641",
            parentKey: "/library/metadata/55668",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "Dragons' Den",
            parentTitle: "Season 22",
            contentRating: "TV-PG",
            summary:
              "A Ukrainian entrepreneur presents her fashion business, cafe owners serve up bubble tea, an entrepreneur pitches a doggie swimming franchise, and a designer demonstrates his bathroom invention.",
            index: 3,
            parentIndex: 22,
            year: 2025,
            thumb: "/library/metadata/57226/thumb/1737869710",
            art: "/library/metadata/28641/art/1738995277",
            grandparentThumb: "/library/metadata/28641/thumb/1738995277",
            grandparentArt: "/library/metadata/28641/art/1738995277",
            grandparentTheme: "/library/metadata/28641/theme/1738995277",
            duration: 3525840,
            originallyAvailableAt: "2025-01-23",
            addedAt: 1737667599,
            updatedAt: 1737869710,
            Media: [
              {
                id: 61490,
                duration: 3525840,
                bitrate: 5879,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 2,
                audioCodec: "aac",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                audioProfile: "lc",
                videoProfile: "high",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 92537,
                    key: "/library/parts/92537/1737634568/file.mkv",
                    duration: 3525840,
                    file: "/TV Shows (Reality)/Dragons' Den/Season 22/Dragons' Den - S22E03 - Episode 3 WEBDL-1080p.mkv",
                    size: 2592931091,
                    audioProfile: "lc",
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "high",
                    Stream: [
                      {
                        id: 307392,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 5751,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        bitDepth: 8,
                        chromaLocation: "left",
                        chromaSubsampling: "4:2:0",
                        codedHeight: 1088,
                        codedWidth: 1920,
                        colorPrimaries: "bt709",
                        colorRange: "tv",
                        colorSpace: "bt709",
                        colorTrc: "bt709",
                        frameRate: 50.0,
                        hasScalingMatrix: false,
                        height: 1080,
                        level: 42,
                        original: true,
                        profile: "high",
                        refFrames: 4,
                        scanType: "progressive",
                        width: 1920,
                        displayTitle: "1080p",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 307393,
                        streamType: 2,
                        selected: true,
                        default: true,
                        codec: "aac",
                        index: 1,
                        channels: 2,
                        bitrate: 128,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        audioChannelLayout: "stereo",
                        dub: true,
                        profile: "lc",
                        samplingRate: 48000,
                        displayTitle: "English (AAC Stereo)",
                        extendedDisplayTitle: "English (AAC Stereo)"
                      },
                      {
                        id: 307394,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        original: true,
                        displayTitle: "English",
                        extendedDisplayTitle: "English (SRT)"
                      },
                      {
                        id: 307395,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 3,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        hearingImpaired: true,
                        original: true,
                        title: "SDH",
                        displayTitle: "English SDH",
                        extendedDisplayTitle: "SDH (English SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Episode 3",
                type: "coverPoster",
                url: "/library/metadata/28641/thumb/1738995277"
              },
              {
                alt: "Episode 3",
                type: "snapshot",
                url: "/library/metadata/57226/thumb/1737869710"
              },
              {
                alt: "Episode 3",
                type: "background",
                url: "/library/metadata/28641/art/1738995277"
              },
              {
                alt: "Episode 3",
                type: "clearLogo",
                url: "/library/metadata/28641/clearLogo/1738995277"
              }
            ],
            UltraBlurColors: {
              topLeft: "471a3b",
              topRight: "6f2b4a",
              bottomRight: "6e2f2b",
              bottomLeft: "632119"
            },
            Guid: [
              {
                id: "tvdb://10899854"
              }
            ]
          },
          {
            ratingKey: "57224",
            key: "/library/metadata/57224",
            parentRatingKey: "55599",
            grandparentRatingKey: "38320",
            guid: "plex://episode/6778431165bf55f203ce1bc2",
            parentGuid: "plex://season/677720d0e9f315c4f6109f66",
            grandparentGuid: "plex://show/5d9c08182192ba001f307411",
            grandparentSlug: "my-600-lb-life",
            type: "episode",
            title: "Gary's Journey",
            grandparentKey: "/library/metadata/38320",
            parentKey: "/library/metadata/55599",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "My 600-lb Life",
            parentTitle: "Season 13",
            contentRating: "TV-14",
            summary:
              "Gary doesn't leave the bed anymore, he has his mom and a bevy of caretakers to get him what he needs; but his life is slipping away from him; he is so overweight that just getting to Houston may be out of the question.",
            index: 4,
            parentIndex: 13,
            year: 2025,
            thumb: "/library/metadata/57224/thumb/1738201649",
            art: "/library/metadata/38320/art/1735190665",
            grandparentThumb: "/library/metadata/38320/thumb/1735190665",
            grandparentArt: "/library/metadata/38320/art/1735190665",
            duration: 5141728,
            originallyAvailableAt: "2025-01-22",
            addedAt: 1737596802,
            updatedAt: 1738201649,
            Media: [
              {
                id: 61487,
                duration: 5141728,
                bitrate: 9749,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 2,
                audioCodec: "eac3",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "24p",
                videoProfile: "high",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 92534,
                    key: "/library/parts/92534/1737563222/file.mkv",
                    duration: 5141728,
                    file: "/TV Shows (Reality)/My 600-lb Life/Season 13/My 600-lb Life - S13E04 - Gary's Journey WEBDL-1080p.mkv",
                    size: 6267013889,
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "high",
                    Stream: [
                      {
                        id: 307375,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 9524,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        bitDepth: 8,
                        chromaLocation: "left",
                        chromaSubsampling: "4:2:0",
                        codedHeight: 1088,
                        codedWidth: 1920,
                        colorPrimaries: "bt709",
                        colorRange: "tv",
                        colorSpace: "bt709",
                        colorTrc: "bt709",
                        frameRate: 23.976,
                        hasScalingMatrix: false,
                        height: 1080,
                        level: 40,
                        original: true,
                        profile: "high",
                        refFrames: 4,
                        scanType: "progressive",
                        width: 1920,
                        displayTitle: "1080p",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 307376,
                        streamType: 2,
                        selected: true,
                        default: true,
                        codec: "eac3",
                        index: 1,
                        channels: 2,
                        bitrate: 224,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        audioChannelLayout: "stereo",
                        original: true,
                        samplingRate: 48000,
                        displayTitle: "English (EAC3 Stereo)",
                        extendedDisplayTitle: "English (EAC3 Stereo)"
                      },
                      {
                        id: 307377,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        dub: true,
                        title: "United States",
                        displayTitle: "English",
                        extendedDisplayTitle: "United States (English SRT)"
                      },
                      {
                        id: 307378,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 3,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        dub: true,
                        hearingImpaired: true,
                        title: "United States (SDH)",
                        displayTitle: "English SDH",
                        extendedDisplayTitle:
                          "United States (SDH) (English SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Gary's Journey",
                type: "coverPoster",
                url: "/library/metadata/38320/thumb/1735190665"
              },
              {
                alt: "Gary's Journey",
                type: "snapshot",
                url: "/library/metadata/57224/thumb/1738201649"
              },
              {
                alt: "Gary's Journey",
                type: "background",
                url: "/library/metadata/38320/art/1735190665"
              },
              {
                alt: "Gary's Journey",
                type: "clearLogo",
                url: "/library/metadata/38320/clearLogo/1735190665"
              }
            ],
            UltraBlurColors: {
              topLeft: "55120e",
              topRight: "226587",
              bottomRight: "8d4631",
              bottomLeft: "712724"
            },
            Guid: [
              {
                id: "imdb://tt35261956"
              },
              {
                id: "tmdb://5879183"
              },
              {
                id: "tvdb://10921464"
              }
            ],
            Role: [
              {
                id: 237095,
                filter: "actor=237095",
                tag: "Younan Nowzaradan",
                tagKey: "5f3fffeecae2c60042ecb495",
                role: "As Himself",
                thumb:
                  "https://metadata-static.plex.tv/d/people/d641f12373ae2a3e74180a572aaa9437.jpg"
              }
            ]
          },
          {
            ratingKey: "57113",
            key: "/library/metadata/57113",
            parentRatingKey: "55006",
            grandparentRatingKey: "29621",
            guid: "plex://episode/677eef3c683cfbd881880a3f",
            parentGuid: "plex://season/66c3b6f87f6b3620cb902f6c",
            grandparentGuid: "plex://show/5d9c08daffd9ef001e99b8f5",
            grandparentSlug: "90-day-fiance-before-the-90-days",
            type: "episode",
            title: "Tell All, Part 2",
            grandparentKey: "/library/metadata/29621",
            parentKey: "/library/metadata/55006",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "90 Day Fiancé: Before the 90 Days",
            parentTitle: "Season 7",
            contentRating: "TV-14",
            summary:
              "In part two of the ultimate Tell All event, we find out the truth about why Joey almost missed his flight. Veah and Adnan clash over religion, Brian drops a bombshell about Ingrid, and a heated Niles walks off. Later, a fight breaks out backstage.",
            index: 21,
            parentIndex: 7,
            year: 2025,
            thumb: "/library/metadata/57113/thumb/1738995221",
            art: "/library/metadata/29621/art/1738128632",
            grandparentThumb: "/library/metadata/29621/thumb/1738128632",
            grandparentArt: "/library/metadata/29621/art/1738128632",
            duration: 5040384,
            originallyAvailableAt: "2025-01-19",
            addedAt: 1737338225,
            updatedAt: 1738995221,
            Media: [
              {
                id: 61138,
                duration: 5040384,
                bitrate: 4575,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 2,
                audioCodec: "aac",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "NTSC",
                audioProfile: "lc",
                videoProfile: "main",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 92183,
                    key: "/library/parts/92183/1737337039/file.mkv",
                    duration: 5040384,
                    file: "/TV Shows (Reality)/90 Day Fiancé - Before The 90 Days/Season 07/90 Day Fiancé - Before the 90 Days - S07E21 - Tell All, Part 2 WEBDL-1080p.mkv",
                    size: 2884429686,
                    audioProfile: "lc",
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "main",
                    Stream: [
                      {
                        id: 304688,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 4450,
                        bitDepth: 8,
                        chromaLocation: "left",
                        chromaSubsampling: "4:2:0",
                        codedHeight: 1088,
                        codedWidth: 1920,
                        frameRate: 29.97,
                        hasScalingMatrix: false,
                        height: 1080,
                        level: 40,
                        profile: "main",
                        refFrames: 4,
                        scanType: "progressive",
                        width: 1920,
                        displayTitle: "1080p",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 304689,
                        streamType: 2,
                        selected: true,
                        default: true,
                        codec: "aac",
                        index: 1,
                        channels: 2,
                        bitrate: 125,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        audioChannelLayout: "stereo",
                        profile: "lc",
                        samplingRate: 48000,
                        displayTitle: "English (AAC Stereo)",
                        extendedDisplayTitle: "English (AAC Stereo)"
                      },
                      {
                        id: 304690,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        displayTitle: "English",
                        extendedDisplayTitle: "English (SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Tell All, Part 2",
                type: "coverPoster",
                url: "/library/metadata/29621/thumb/1738128632"
              },
              {
                alt: "Tell All, Part 2",
                type: "snapshot",
                url: "/library/metadata/57113/thumb/1738995221"
              },
              {
                alt: "Tell All, Part 2",
                type: "background",
                url: "/library/metadata/29621/art/1738128632"
              },
              {
                alt: "Tell All, Part 2",
                type: "clearLogo",
                url: "/library/metadata/29621/clearLogo/1738128632"
              }
            ],
            UltraBlurColors: {
              topLeft: "570c1a",
              topRight: "a03224",
              bottomRight: "93421a",
              bottomLeft: "7e0b2d"
            },
            Guid: [
              {
                id: "imdb://tt35309300"
              },
              {
                id: "tmdb://5898115"
              },
              {
                id: "tvdb://10900806"
              }
            ],
            Role: [
              {
                id: 321488,
                filter: "actor=321488",
                tag: "Tigerlily Abdelfattah",
                tagKey: "675655a080661d35c494df79",
                role: "Self"
              },
              {
                id: 321013,
                filter: "actor=321013",
                tag: "Loren Allen",
                tagKey: "5f3fb952bf3e560040af3efa",
                role: "Self"
              },
              {
                id: 321489,
                filter: "actor=321489",
                tag: "Vanja Grbic",
                tagKey: "675655a06b70a8f1a4a80c91",
                role: "Self"
              },
              {
                id: 193961,
                filter: "actor=193961",
                tag: "Shaun Robinson",
                tagKey: "5d776833f59e5800218987dd",
                role: "Self - Host",
                thumb:
                  "https://metadata-static.plex.tv/a/people/ae19431faa3523cc1baff23e15d2b738.jpg"
              },
              {
                id: 321491,
                filter: "actor=321491",
                tag: "Faith Gatoc Tulod",
                tagKey: "6756559e6b70a8f1a4a80c87",
                role: "Self"
              },
              {
                id: 321492,
                filter: "actor=321492",
                tag: "Niles Valentine",
                tagKey: "6756559e34acc71bd2ac6880",
                role: "Self"
              },
              {
                id: 321490,
                filter: "actor=321490",
                tag: "Bozo Vrdoljak",
                tagKey: "675655a0729f1bff838b3436",
                role: "Self"
              }
            ],
            Producer: [
              {
                id: 317646,
                filter: "producer=317646",
                tag: "David Burch",
                tagKey: "5f4013721ae710004103e5fd"
              },
              {
                id: 318015,
                filter: "producer=318015",
                tag: "Jenni Gilroy",
                tagKey: "5f3fe0eafea1a1003f99240d"
              }
            ]
          },
          {
            ratingKey: "56920",
            key: "/library/metadata/56920/children",
            guid: "plex://show/5d9c091ce264b7001fc4f320",
            slug: "james-may-our-man-in",
            studio: "Plum Pictures",
            type: "show",
            title: "James May: Our Man In...",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            contentRating: "TV-14",
            summary:
              "James May embarks on a remarkable journey across Japan, from its icy north to its balmy south. He'll see the sights, meet the locals, and eat the noodles in a bid to truly understand the Land of the Rising Sun.",
            index: 1,
            audienceRating: 7.6,
            year: 2020,
            thumb: "/library/metadata/56920/thumb/1737311882",
            art: "/library/metadata/56920/art/1737311882",
            duration: 3000000,
            originallyAvailableAt: "2020-01-02",
            leafCount: 15,
            viewedLeafCount: 0,
            childCount: 3,
            addedAt: 1737312615,
            updatedAt: 1737311882,
            audienceRatingImage: "themoviedb://image.rating",
            Image: [
              {
                alt: "James May: Our Man In...",
                type: "coverPoster",
                url: "/library/metadata/56920/thumb/1737311882"
              },
              {
                alt: "James May: Our Man In...",
                type: "background",
                url: "/library/metadata/56920/art/1737311882"
              },
              {
                alt: "James May: Our Man In...",
                type: "clearLogo",
                url: "/library/metadata/56920/clearLogo/1737311882"
              }
            ],
            UltraBlurColors: {
              topLeft: "0d251a",
              topRight: "5c3c14",
              bottomRight: "3e473a",
              bottomLeft: "7b551a"
            },
            Genre: [
              {
                id: 2268,
                filter: "genre=2268",
                tag: "Documentary"
              },
              {
                id: 19,
                filter: "genre=19",
                tag: "Comedy"
              },
              {
                id: 17,
                filter: "genre=17",
                tag: "Adventure"
              },
              {
                id: 57093,
                filter: "genre=57093",
                tag: "Travel"
              }
            ],
            Country: [
              {
                id: 1761,
                filter: "country=1761",
                tag: "United Kingdom"
              }
            ],
            Guid: [
              {
                id: "imdb://tt11302324"
              },
              {
                id: "tmdb://96723"
              },
              {
                id: "tvdb://360888"
              }
            ],
            Rating: [
              {
                image: "imdb://image.rating",
                value: 8.2,
                type: "audience"
              },
              {
                image: "rottentomatoes://image.rating.upright",
                value: 7.9,
                type: "audience"
              },
              {
                image: "themoviedb://image.rating",
                value: 7.6,
                type: "audience"
              }
            ],
            Role: [
              {
                id: 106896,
                filter: "actor=106896",
                tag: "James May",
                tagKey: "5d776848103a2d001f56c0b6",
                role: "Self",
                thumb:
                  "https://metadata-static.plex.tv/e/people/eb0fcd2738f2d6ed40f780faa975af2f.jpg"
              },
              {
                id: 333493,
                filter: "actor=333493",
                tag: "Yojiro Taniyama",
                tagKey: "65d8947ba4fba7d42aba058d",
                role: "Self"
              }
            ],
            Location: [
              {
                path: "/TV Shows (Reality)/James May Our Man In"
              }
            ]
          },
          {
            ratingKey: "56903",
            key: "/library/metadata/56903/children",
            guid: "plex://show/5f262b80a5886a0040d36dac",
            slug: "james-may-oh-cook",
            studio: "Plum Pictures",
            type: "show",
            title: "James May: Oh Cook!",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            summary:
              "James May is not a chef. But that's the whole point: you don't need to be a gastronomic wizard to make delicious food. This series sees him grow from kitchen klutz to capable cook as he takes on the world's most mouth-watering dishes and masters the tricks that can make good food great, using ingredients you can buy from your local shop and all without the usual television cooking format trickery.",
            index: 1,
            audienceRating: 6.3,
            year: 2020,
            thumb: "/library/metadata/56903/thumb/1737311421",
            art: "/library/metadata/56903/art/1737311421",
            duration: 1800000,
            originallyAvailableAt: "2020-11-12",
            leafCount: 14,
            viewedLeafCount: 0,
            childCount: 2,
            addedAt: 1737311810,
            updatedAt: 1737311421,
            audienceRatingImage: "themoviedb://image.rating",
            Image: [
              {
                alt: "James May: Oh Cook!",
                type: "coverPoster",
                url: "/library/metadata/56903/thumb/1737311421"
              },
              {
                alt: "James May: Oh Cook!",
                type: "background",
                url: "/library/metadata/56903/art/1737311421"
              },
              {
                alt: "James May: Oh Cook!",
                type: "clearLogo",
                url: "/library/metadata/56903/clearLogo/1737311421"
              }
            ],
            UltraBlurColors: {
              topLeft: "2e2e2e",
              topRight: "592c1b",
              bottomRight: "83373d",
              bottomLeft: "874c2d"
            },
            Genre: [
              {
                id: 2268,
                filter: "genre=2268",
                tag: "Documentary"
              },
              {
                id: 8438,
                filter: "genre=8438",
                tag: "Food"
              }
            ],
            Country: [
              {
                id: 1761,
                filter: "country=1761",
                tag: "United Kingdom"
              }
            ],
            Guid: [
              {
                id: "imdb://tt12546678"
              },
              {
                id: "tmdb://106694"
              },
              {
                id: "tvdb://384721"
              }
            ],
            Rating: [
              {
                image: "imdb://image.rating",
                value: 7.5,
                type: "audience"
              },
              {
                image: "rottentomatoes://image.rating.ripe",
                value: 10.0,
                type: "critic"
              },
              {
                image: "rottentomatoes://image.rating.upright",
                value: 8.8,
                type: "audience"
              },
              {
                image: "themoviedb://image.rating",
                value: 6.3,
                type: "audience"
              }
            ],
            Role: [
              {
                id: 333404,
                filter: "actor=333404",
                tag: "Nikki Morgan",
                tagKey: "60105282241d1a002b2bc06b",
                role: "Self",
                thumb:
                  "https://metadata-static.plex.tv/4/people/4032427723eaa086316adad2fbd75c8c.jpg"
              },
              {
                id: 106896,
                filter: "actor=106896",
                tag: "James May",
                tagKey: "5d776848103a2d001f56c0b6",
                role: "Self",
                thumb:
                  "https://metadata-static.plex.tv/e/people/eb0fcd2738f2d6ed40f780faa975af2f.jpg"
              }
            ],
            Location: [
              {
                path: "/TV Shows (Reality)/James May Oh Cook"
              }
            ]
          },
          {
            ratingKey: "56704",
            key: "/library/metadata/56704/children",
            parentRatingKey: "56703",
            guid: "plex://season/602e58aafdd281002cdd8939",
            parentGuid: "plex://show/5d9c07ece98e47001eb0324a",
            parentSlug: "comedians-in-cars-getting-coffee",
            parentStudio: "Sony Pictures Television",
            type: "season",
            title: "Season 10",
            parentKey: "/library/metadata/56703",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            parentTitle: "Comedians in Cars Getting Coffee",
            summary: "",
            index: 10,
            parentIndex: 1,
            parentYear: 2012,
            thumb: "/library/metadata/56704/thumb/1737296531",
            art: "/library/metadata/56703/art/1737296529",
            parentThumb: "/library/metadata/56703/thumb/1737296529",
            parentTheme: "/library/metadata/56703/theme/1737296529",
            leafCount: 12,
            viewedLeafCount: 0,
            addedAt: 1737300210,
            updatedAt: 1737296531,
            Image: [
              {
                alt: "Season 10",
                type: "coverPoster",
                url: "/library/metadata/56704/thumb/1737296531"
              },
              {
                alt: "Season 10",
                type: "background",
                url: "/library/metadata/56703/art/1737296529"
              },
              {
                alt: "Season 10",
                type: "clearLogo",
                url: "/library/metadata/56703/clearLogo/1737296529"
              }
            ],
            UltraBlurColors: {
              topLeft: "1f1c1b",
              topRight: "585b21",
              bottomRight: "ac1928",
              bottomLeft: "562515"
            },
            Guid: [
              {
                id: "tvdb://767627"
              }
            ]
          },
          {
            ratingKey: "55144",
            key: "/library/metadata/55144/children",
            guid: "plex://show/601349233bdc7c0030dca455",
            slug: "clarksons-farm",
            studio: "Expectation Entertainment",
            type: "show",
            title: "Clarkson's Farm",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            contentRating: "TV-PG",
            summary:
              "Follow Jeremy Clarkson as he embarks on his latest adventure, farming. The man who on several occasions claims to be allergic to manual labour takes on the most manually labour intensive job there is. What could possibly go wrong?",
            index: 1,
            audienceRating: 8.4,
            viewCount: 8,
            skipCount: 2,
            lastViewedAt: 1737402512,
            year: 2021,
            tagline: "It's the pig one.",
            thumb: "/library/metadata/55144/thumb/1736488032",
            art: "/library/metadata/55144/art/1736488032",
            theme: "/library/metadata/55144/theme/1736488032",
            duration: 3000000,
            originallyAvailableAt: "2021-06-10",
            leafCount: 24,
            viewedLeafCount: 8,
            childCount: 3,
            addedAt: 1737290841,
            updatedAt: 1736488032,
            audienceRatingImage: "themoviedb://image.rating",
            Image: [
              {
                alt: "Clarkson's Farm",
                type: "coverPoster",
                url: "/library/metadata/55144/thumb/1736488032"
              },
              {
                alt: "Clarkson's Farm",
                type: "background",
                url: "/library/metadata/55144/art/1736488032"
              },
              {
                alt: "Clarkson's Farm",
                type: "clearLogo",
                url: "/library/metadata/55144/clearLogo/1736488032"
              }
            ],
            UltraBlurColors: {
              topLeft: "0d3241",
              topRight: "2c657f",
              bottomRight: "8e471e",
              bottomLeft: "95401e"
            },
            Genre: [
              {
                id: 86,
                filter: "genre=86",
                tag: "Reality"
              },
              {
                id: 19,
                filter: "genre=19",
                tag: "Comedy"
              },
              {
                id: 2268,
                filter: "genre=2268",
                tag: "Documentary"
              },
              {
                id: 17,
                filter: "genre=17",
                tag: "Adventure"
              }
            ],
            Country: [
              {
                id: 1761,
                filter: "country=1761",
                tag: "United Kingdom"
              }
            ],
            Guid: [
              {
                id: "imdb://tt10541088"
              },
              {
                id: "tmdb://117648"
              },
              {
                id: "tvdb://378165"
              }
            ],
            Rating: [
              {
                image: "imdb://image.rating",
                value: 9.0,
                type: "audience"
              },
              {
                image: "rottentomatoes://image.rating.ripe",
                value: 10.0,
                type: "critic"
              },
              {
                image: "rottentomatoes://image.rating.upright",
                value: 9.8,
                type: "audience"
              },
              {
                image: "themoviedb://image.rating",
                value: 8.4,
                type: "audience"
              }
            ],
            Role: [
              {
                id: 315390,
                filter: "actor=315390",
                tag: "Jeremy Clarkson",
                tagKey: "5d7768285af944001f1f7207",
                role: "Self - Host",
                thumb:
                  "https://metadata-static.plex.tv/3/people/3384009c426fa8f865a75e5699350884.jpg"
              },
              {
                id: 315391,
                filter: "actor=315391",
                tag: "Kaleb Cooper",
                tagKey: "60c78260d3ed17002e668761",
                role: "Self - Farmer",
                thumb:
                  "https://metadata-static.plex.tv/c/people/c0621e01272b6484375c047eba4b9e39.jpg"
              },
              {
                id: 315392,
                filter: "actor=315392",
                tag: "Charlie Ireland",
                tagKey: "60c78260d3ed17002e668762",
                role: "Self - Land Agent",
                thumb:
                  "https://metadata-static.plex.tv/6/people/631d08e58318caed56cc1cb72f77477c.jpg"
              },
              {
                id: 315393,
                filter: "actor=315393",
                tag: "Lisa Hogan",
                tagKey: "5d7768384de0ee001fccc2f9",
                role: "Self",
                thumb:
                  "https://metadata-static.plex.tv/c/people/c72a52452bbf3e38e40dada581962daa.jpg"
              },
              {
                id: 315394,
                filter: "actor=315394",
                tag: "Gerald Cooper",
                tagKey: "60c78260d3ed17002e668764",
                role: "Self - Head of security",
                thumb:
                  "https://metadata-static.plex.tv/b/people/bbf853b437213f60013736096598c2d7.jpg"
              },
              {
                id: 315395,
                filter: "actor=315395",
                tag: "Alan Townsend",
                tagKey: "664899118c17a31ab170bf81",
                role: "Self - Builder"
              },
              {
                id: 315396,
                filter: "actor=315396",
                tag: "Dilwyn Evans",
                tagKey: "664b3c3175d11572ff8f7731",
                role: "Self - Vet"
              },
              {
                id: 315397,
                filter: "actor=315397",
                tag: "Ellen Helliwell",
                tagKey: "60d8a16ab49765002c6a84b1",
                role: "Self - Shepherdess",
                thumb:
                  "https://metadata-static.plex.tv/b/people/be9475d6a6cfd32bced184c19484dbb1.jpg"
              },
              {
                id: 315398,
                filter: "actor=315398",
                tag: "Kevin Harrison",
                tagKey: "60d8a16af1c7de002d0b5993",
                role: "Self - NSA Representative",
                thumb:
                  "https://metadata-static.plex.tv/c/people/cfec728ab31f006d83b7299d3c1bd00d.jpg"
              },
              {
                id: 315399,
                filter: "actor=315399",
                tag: "Tim Coles",
                tagKey: "664b3c32eb4e8afc7aa0d9dc",
                role: "Self - Cow breeder"
              },
              {
                id: 315400,
                filter: "actor=315400",
                tag: "Paddy Bourns",
                tagKey: "664b3c310da1540058ee93d5",
                role: "Self - Cackleberry farm owner"
              },
              {
                id: 315401,
                filter: "actor=315401",
                tag: "Andrew Cato",
                tagKey: "664899115a62df3557bdea4a",
                role: "Self"
              },
              {
                id: 315402,
                filter: "actor=315402",
                tag: "Georgia Craig",
                tagKey: "60d8a16a1b95f9002d5feedf",
                role: "Self - NFU's county advisor",
                thumb:
                  "https://metadata-static.plex.tv/0/people/0190007615846511fa9afe7940937458.jpg"
              },
              {
                id: 315403,
                filter: "actor=315403",
                tag: "Katy Coles",
                tagKey: "664b3c31b101b36b9b65a998",
                role: "Self - Cow breeder"
              },
              {
                id: 315404,
                filter: "actor=315404",
                tag: "Steph Bourns",
                tagKey: "664b3c31822c7624d629ebc9",
                role: "Self - Cackleberry farm owner"
              },
              {
                id: 315405,
                filter: "actor=315405",
                tag: "Emma Ledbury",
                tagKey: "664b3c33603f1533cb0d7039",
                role: "Self - Dairy farmer"
              },
              {
                id: 315406,
                filter: "actor=315406",
                tag: "Annie Gray",
                tagKey: "66489910c7295c6c4d613193",
                role: "Self"
              },
              {
                id: 315407,
                filter: "actor=315407",
                tag: "Henry Lawrence",
                tagKey: "66489910644b05826f527bd0",
                role: "Self - Butcher"
              },
              {
                id: 315408,
                filter: "actor=315408",
                tag: "Lizzie Dyer",
                tagKey: "66489911004a9858513a6cb6",
                role: "Self"
              },
              {
                id: 315409,
                filter: "actor=315409",
                tag: "Richard Keene",
                tagKey: "664899109fa28a118a1aaf4a",
                role: "Self - Brewer"
              },
              {
                id: 315410,
                filter: "actor=315410",
                tag: "Viktor Zaichenko",
                tagKey: "66489910004a9858513a6ca1",
                role: "Self - Bee Farmer"
              },
              {
                id: 315411,
                filter: "actor=315411",
                tag: "Bradley Townsend",
                tagKey: "664b3c31727e14a04ffff0c0",
                role: "Self - Alan's son"
              },
              {
                id: 315412,
                filter: "actor=315412",
                tag: "Jenny Ryan",
                tagKey: "66659abde0962a8b653e2330",
                role: "Self - Vet",
                thumb:
                  "https://metadata-static.plex.tv/6/people/60c1c3cb48647bf0f830d64ee606df2e.jpg"
              },
              {
                id: 315413,
                filter: "actor=315413",
                tag: "George Lamb",
                tagKey: "5d9c08423c3f87001f34b324",
                role: "Self",
                thumb:
                  "https://metadata-static.plex.tv/2/people/2cb9ef54c721fa1798601026aa0f0c02.jpg"
              },
              {
                id: 315414,
                filter: "actor=315414",
                tag: "Jeremy Sealy",
                tagKey: "66489911004a9858513a6ca7",
                role: "Self"
              },
              {
                id: 315415,
                filter: "actor=315415",
                tag: "Rupert Arneil",
                tagKey: "66489910e84424bc8a1e5343",
                role: "Self"
              },
              {
                id: 315416,
                filter: "actor=315416",
                tag: "Michaela Giles",
                tagKey: "664899100211f64fa91478cf",
                role: "Self"
              },
              {
                id: 315417,
                filter: "actor=315417",
                tag: "Thomas Haynes",
                tagKey: "664899103561469d785c4be8",
                role: "Self"
              },
              {
                id: 315418,
                filter: "actor=315418",
                tag: "Robert Reece",
                tagKey: "664899119fa28a118a1aaf78",
                role: "Self"
              },
              {
                id: 315419,
                filter: "actor=315419",
                tag: "Lucca Allen",
                tagKey: "66489910004a9858513a6c93",
                role: "Self"
              },
              {
                id: 315420,
                filter: "actor=315420",
                tag: "Oscar Clutterbuck Jones",
                tagKey: "66489910004a9858513a6c91",
                role: "Self"
              },
              {
                id: 315421,
                filter: "actor=315421",
                tag: "Rafe Williams",
                tagKey: "66489910edd005e8ba37f5ed",
                role: "Self"
              },
              {
                id: 315422,
                filter: "actor=315422",
                tag: "Rishi Sunak",
                tagKey: "5f40446ccae2c60042f39478",
                role: "Self",
                thumb:
                  "https://metadata-static.plex.tv/b/people/b8d2bee3f5acdadfd0cf5de5d8a4c94b.jpg"
              },
              {
                id: 315423,
                filter: "actor=315423",
                tag: "Hugh Van Cutsem",
                tagKey: "6648991058d68a1cfa423158",
                role: "Self"
              },
              {
                id: 315424,
                filter: "actor=315424",
                tag: "Simon Strong",
                tagKey: "664b3c31eb4e8afc7aa0d9d6",
                role: "Self - Neighbouring farmer"
              },
              {
                id: 315425,
                filter: "actor=315425",
                tag: "Kieron Cooper",
                tagKey: "664b3c31ead100d43b63daf7",
                role: "Self - Kaleb's brother"
              },
              {
                id: 315426,
                filter: "actor=315426",
                tag: "Vernon Kay",
                tagKey: "664b3c31727e14a04ffff0bc",
                role: "Self - British Farming Awards host"
              },
              {
                id: 315427,
                filter: "actor=315427",
                tag: "Hamish Dewar",
                tagKey: "664b3c31e76b038773f747f3",
                role: "Self - Jeremy's nemesis"
              },
              {
                id: 315428,
                filter: "actor=315428",
                tag: "Jeff Haine",
                tagKey: "664b3c313fe8e58b221d658e",
                role: "Self - Uplands Area Planning Committee chairman"
              },
              {
                id: 315429,
                filter: "actor=315429",
                tag: "Charles Streeton",
                tagKey: "664b3c32603f1533cb0d7031",
                role: "Self - London barrister"
              },
              {
                id: 315430,
                filter: "actor=315430",
                tag: "Robin Dale",
                tagKey: "664b3c32ead100d43b63dafd",
                role: "Self - Hedgelaying expert"
              },
              {
                id: 315431,
                filter: "actor=315431",
                tag: "Pip Lacey",
                tagKey: "664b3c32603f1533cb0d702f",
                role: "Self - Chef"
              },
              {
                id: 315432,
                filter: "actor=315432",
                tag: "Charles Hoare",
                tagKey: "664b3c32727e14a04ffff0ce",
                role: "Self - Landscraper"
              },
              {
                id: 315433,
                filter: "actor=315433",
                tag: "Patrick Edwards",
                tagKey: "664b3c45ead100d43b63dbd6",
                role: "Self - Tractor dealer"
              }
            ],
            Location: [
              {
                path: "/TV Shows (Reality)/Clarkson's Farm"
              }
            ]
          },
          {
            ratingKey: "55671",
            key: "/library/metadata/55671",
            parentRatingKey: "55071",
            grandparentRatingKey: "30009",
            guid: "plex://episode/677984510b54685081e20be3",
            parentGuid: "plex://season/6697ba330f4923e3427c9f39",
            grandparentGuid: "plex://show/5d9c0874705e7a001e6ddc85",
            grandparentSlug: "hells-kitchen-us",
            type: "episode",
            title: "Five Comedians Walk Into Hell...",
            grandparentKey: "/library/metadata/30009",
            parentKey: "/library/metadata/55071",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "Hell's Kitchen (US)",
            parentTitle: "Season 23",
            contentRating: "TV-14",
            summary:
              "Each chef must teach a comedian how to prepare a signature chef Ramsay recipe; the final five must prove they have what it takes to proceed to the final four.",
            index: 13,
            parentIndex: 23,
            audienceRating: 7.0,
            year: 2025,
            thumb: "/library/metadata/55671/thumb/1738314148",
            art: "/library/metadata/30009/art/1738995285",
            grandparentThumb: "/library/metadata/30009/thumb/1738995285",
            grandparentArt: "/library/metadata/30009/art/1738995285",
            grandparentTheme: "/library/metadata/30009/theme/1738995285",
            duration: 2591989,
            originallyAvailableAt: "2025-01-16",
            addedAt: 1737097901,
            updatedAt: 1738314148,
            audienceRatingImage: "themoviedb://image.rating",
            chapterSource: "media",
            Media: [
              {
                id: 58742,
                duration: 2591989,
                bitrate: 10416,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 6,
                audioCodec: "eac3",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "NTSC",
                videoProfile: "high",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 88828,
                    key: "/library/parts/88828/1737060333/file.mkv",
                    duration: 2591989,
                    file: "/TV Shows (Reality)/Gordan Ramsay - Hells Kitchen US/Season 23/Hell's Kitchen (US) - S23E13 - Five Comedians Walk Into Hell WEBDL-1080p.mkv",
                    size: 3375788894,
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "high",
                    Stream: [
                      {
                        id: 290150,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 9776,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        bitDepth: 8,
                        chromaLocation: "left",
                        chromaSubsampling: "4:2:0",
                        codedHeight: 1088,
                        codedWidth: 1920,
                        colorPrimaries: "bt709",
                        colorRange: "tv",
                        colorSpace: "bt709",
                        colorTrc: "bt709",
                        frameRate: 29.97,
                        hasScalingMatrix: false,
                        height: 1080,
                        level: 40,
                        original: true,
                        profile: "high",
                        refFrames: 4,
                        scanType: "progressive",
                        width: 1920,
                        displayTitle: "1080p",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 290151,
                        streamType: 2,
                        selected: true,
                        default: true,
                        codec: "eac3",
                        index: 1,
                        channels: 6,
                        bitrate: 640,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        audioChannelLayout: "5.1(side)",
                        original: true,
                        samplingRate: 48000,
                        displayTitle: "English (EAC3 5.1)",
                        extendedDisplayTitle: "English (EAC3 5.1)"
                      },
                      {
                        id: 290152,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        original: true,
                        displayTitle: "English",
                        extendedDisplayTitle: "English (SRT)"
                      },
                      {
                        id: 290153,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 3,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        hearingImpaired: true,
                        original: true,
                        title: "SDH",
                        displayTitle: "English SDH",
                        extendedDisplayTitle: "SDH (English SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Five Comedians Walk Into Hell...",
                type: "coverPoster",
                url: "/library/metadata/30009/thumb/1738995285"
              },
              {
                alt: "Five Comedians Walk Into Hell...",
                type: "snapshot",
                url: "/library/metadata/55671/thumb/1738314148"
              },
              {
                alt: "Five Comedians Walk Into Hell...",
                type: "background",
                url: "/library/metadata/30009/art/1738995285"
              },
              {
                alt: "Five Comedians Walk Into Hell...",
                type: "clearLogo",
                url: "/library/metadata/30009/clearLogo/1738995285"
              }
            ],
            UltraBlurColors: {
              topLeft: "2d282e",
              topRight: "14183a",
              bottomRight: "2b2b31",
              bottomLeft: "191539"
            },
            Guid: [
              {
                id: "imdb://tt35269397"
              },
              {
                id: "tmdb://5896399"
              },
              {
                id: "tvdb://10900827"
              }
            ],
            Rating: [
              {
                image: "imdb://image.rating",
                value: 7.3,
                type: "audience"
              },
              {
                image: "themoviedb://image.rating",
                value: 7.0,
                type: "audience"
              }
            ],
            Role: [
              {
                id: 106830,
                filter: "actor=106830",
                tag: "Gordon Ramsay",
                tagKey: "5d7768aa374a5b001fecc9c4",
                role: "Self - Chef",
                thumb:
                  "https://metadata-static.plex.tv/d/people/dd20a681247c97c89d9aa32747028ba3.jpg"
              },
              {
                id: 194259,
                filter: "actor=194259",
                tag: "James Avery",
                tagKey: "6233480e2e411962942d1edd",
                role: "Self - Sous Chef"
              },
              {
                id: 216200,
                filter: "actor=216200",
                tag: "Marino Monferrato",
                tagKey: "644d077c7b10820176a91641",
                role: "Self - Maître D'",
                thumb:
                  "https://metadata-static.plex.tv/7/people/79dba3a86ae936fe2f070439e364a4ea.jpg"
              },
              {
                id: 228469,
                filter: "actor=228469",
                tag: "Michelle Tribble",
                tagKey: "64da17c5fb911c69374a96a6",
                role: "Self - Sous Chef"
              }
            ],
            Producer: [
              {
                id: 317407,
                filter: "producer=317407",
                tag: "Gautam Badgujar",
                tagKey: "5f402bd086422500428408d1"
              },
              {
                id: 317408,
                filter: "producer=317408",
                tag: "Ashley Callirgos",
                tagKey: "6538cdd3079d385acb2a6985"
              },
              {
                id: 317409,
                filter: "producer=317409",
                tag: "Rob Dodd",
                tagKey: "5d776cbcf617c90020184b82"
              },
              {
                id: 317410,
                filter: "producer=317410",
                tag: "Michael Leavitt",
                tagKey: "5f404171cae2c60042f34c34"
              },
              {
                id: 317411,
                filter: "producer=317411",
                tag: "Tahjanae Montgomery",
                tagKey: "670134552674d7c225455bc5"
              },
              {
                id: 317412,
                filter: "producer=317412",
                tag: "Jeffrey Pakosta",
                tagKey: "5d776aa67a53e9001e70b5f0"
              },
              {
                id: 317413,
                filter: "producer=317413",
                tag: "Gina Gonzalez Scallon",
                tagKey: "60c31a199a32d6002c9b1986"
              },
              {
                id: 317414,
                filter: "producer=317414",
                tag: "Heather Rose Wagner",
                tagKey: "5f3fe318ce2564003f880326"
              }
            ]
          },
          {
            ratingKey: "55669",
            key: "/library/metadata/55669",
            parentRatingKey: "55668",
            grandparentRatingKey: "28641",
            guid: "plex://episode/6774ed0b71b7b8c74803c7e5",
            parentGuid: "plex://season/675b9ad1c64e985d097b5757",
            grandparentGuid: "plex://show/5d9c086affd9ef001e994192",
            grandparentSlug: "dragons-den-1",
            type: "episode",
            title: "Episode 2",
            grandparentKey: "/library/metadata/28641",
            parentKey: "/library/metadata/55668",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "Dragons' Den",
            parentTitle: "Season 22",
            contentRating: "TV-PG",
            summary:
              "Aspiring entrepreneurs have one chance to make their dreams come true when they pitch their business idea to five multimillionaire investors. It's make-or-break time.",
            index: 2,
            parentIndex: 22,
            year: 2025,
            thumb: "/library/metadata/55669/thumb/1737178247",
            art: "/library/metadata/28641/art/1738995277",
            grandparentThumb: "/library/metadata/28641/thumb/1738995277",
            grandparentArt: "/library/metadata/28641/art/1738995277",
            grandparentTheme: "/library/metadata/28641/theme/1738995277",
            duration: 3445840,
            originallyAvailableAt: "2025-01-16",
            addedAt: 1737062254,
            updatedAt: 1737178247,
            Media: [
              {
                id: 58740,
                duration: 3445840,
                bitrate: 5758,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 2,
                audioCodec: "aac",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                audioProfile: "lc",
                videoProfile: "high",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 88825,
                    key: "/library/parts/88825/1737029473/file.mkv",
                    duration: 3445840,
                    file: "/TV Shows (Reality)/Dragons' Den/Season 22/Dragons' Den - S22E02 - Episode 2 WEBDL-1080p.mkv",
                    size: 2481805437,
                    audioProfile: "lc",
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "high",
                    Stream: [
                      {
                        id: 290145,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 5630,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        bitDepth: 8,
                        chromaLocation: "left",
                        chromaSubsampling: "4:2:0",
                        codedHeight: 1088,
                        codedWidth: 1920,
                        colorPrimaries: "bt709",
                        colorRange: "tv",
                        colorSpace: "bt709",
                        colorTrc: "bt709",
                        frameRate: 50.0,
                        hasScalingMatrix: false,
                        height: 1080,
                        level: 42,
                        original: true,
                        profile: "high",
                        refFrames: 4,
                        scanType: "progressive",
                        width: 1920,
                        displayTitle: "1080p",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 290146,
                        streamType: 2,
                        selected: true,
                        default: true,
                        codec: "aac",
                        index: 1,
                        channels: 2,
                        bitrate: 128,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        audioChannelLayout: "stereo",
                        dub: true,
                        profile: "lc",
                        samplingRate: 48000,
                        displayTitle: "English (AAC Stereo)",
                        extendedDisplayTitle: "English (AAC Stereo)"
                      },
                      {
                        id: 290147,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        original: true,
                        displayTitle: "English",
                        extendedDisplayTitle: "English (SRT)"
                      },
                      {
                        id: 290148,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 3,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        hearingImpaired: true,
                        original: true,
                        title: "SDH",
                        displayTitle: "English SDH",
                        extendedDisplayTitle: "SDH (English SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Episode 2",
                type: "coverPoster",
                url: "/library/metadata/28641/thumb/1738995277"
              },
              {
                alt: "Episode 2",
                type: "snapshot",
                url: "/library/metadata/55669/thumb/1737178247"
              },
              {
                alt: "Episode 2",
                type: "background",
                url: "/library/metadata/28641/art/1738995277"
              },
              {
                alt: "Episode 2",
                type: "clearLogo",
                url: "/library/metadata/28641/clearLogo/1738995277"
              }
            ],
            UltraBlurColors: {
              topLeft: "1b2468",
              topRight: "192b52",
              bottomRight: "131a3b",
              bottomLeft: "302458"
            },
            Guid: [
              {
                id: "tvdb://10880841"
              }
            ]
          },
          {
            ratingKey: "55665",
            key: "/library/metadata/55665",
            parentRatingKey: "55599",
            grandparentRatingKey: "38320",
            guid: "plex://episode/6778431165bf55f203ce1bc1",
            parentGuid: "plex://season/677720d0e9f315c4f6109f66",
            grandparentGuid: "plex://show/5d9c08182192ba001f307411",
            grandparentSlug: "my-600-lb-life",
            type: "episode",
            title: "Karen's Journey",
            grandparentKey: "/library/metadata/38320",
            parentKey: "/library/metadata/55599",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "My 600-lb Life",
            parentTitle: "Season 13",
            contentRating: "TV-14",
            summary:
              "Karen has gotten so out of control with her eating that she's developed a fear of leaving the house; she needs Dr. Now's help, but can Karen ever qualify for weight loss surgery if she won't leave the house?",
            index: 3,
            parentIndex: 13,
            year: 2025,
            thumb: "/library/metadata/55665/thumb/1738847142",
            art: "/library/metadata/38320/art/1735190665",
            grandparentThumb: "/library/metadata/38320/thumb/1735190665",
            grandparentArt: "/library/metadata/38320/art/1735190665",
            duration: 5135680,
            originallyAvailableAt: "2025-01-15",
            addedAt: 1737017971,
            updatedAt: 1738847142,
            Media: [
              {
                id: 58736,
                duration: 5135680,
                bitrate: 9152,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 2,
                audioCodec: "eac3",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "24p",
                videoProfile: "high",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 88821,
                    key: "/library/parts/88821/1737017859/file.mkv",
                    duration: 5135680,
                    file: "/TV Shows (Reality)/My 600-lb Life/Season 13/My 600-lb Life - S13E03 - Karen's Journey WEBDL-1080p.mkv",
                    size: 5876321513,
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "high",
                    Stream: [
                      {
                        id: 290136,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 8927,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        bitDepth: 8,
                        chromaLocation: "left",
                        chromaSubsampling: "4:2:0",
                        codedHeight: 1088,
                        codedWidth: 1920,
                        colorPrimaries: "bt709",
                        colorRange: "tv",
                        colorSpace: "bt709",
                        colorTrc: "bt709",
                        frameRate: 23.976,
                        hasScalingMatrix: false,
                        height: 1080,
                        level: 40,
                        original: true,
                        profile: "high",
                        refFrames: 4,
                        scanType: "progressive",
                        width: 1920,
                        displayTitle: "1080p",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 290137,
                        streamType: 2,
                        selected: true,
                        default: true,
                        codec: "eac3",
                        index: 1,
                        channels: 2,
                        bitrate: 224,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        audioChannelLayout: "stereo",
                        original: true,
                        samplingRate: 48000,
                        displayTitle: "English (EAC3 Stereo)",
                        extendedDisplayTitle: "English (EAC3 Stereo)"
                      },
                      {
                        id: 290138,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        dub: true,
                        title: "United States",
                        displayTitle: "English",
                        extendedDisplayTitle: "United States (English SRT)"
                      },
                      {
                        id: 290139,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 3,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        dub: true,
                        hearingImpaired: true,
                        title: "United States (SDH)",
                        displayTitle: "English SDH",
                        extendedDisplayTitle:
                          "United States (SDH) (English SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Karen's Journey",
                type: "coverPoster",
                url: "/library/metadata/38320/thumb/1735190665"
              },
              {
                alt: "Karen's Journey",
                type: "snapshot",
                url: "/library/metadata/55665/thumb/1738847142"
              },
              {
                alt: "Karen's Journey",
                type: "background",
                url: "/library/metadata/38320/art/1735190665"
              },
              {
                alt: "Karen's Journey",
                type: "clearLogo",
                url: "/library/metadata/38320/clearLogo/1735190665"
              }
            ],
            UltraBlurColors: {
              topLeft: "2c2d33",
              topRight: "34200c",
              bottomRight: "685e2a",
              bottomLeft: "6d4f24"
            },
            Guid: [
              {
                id: "imdb://tt35261951"
              },
              {
                id: "tmdb://5879181"
              },
              {
                id: "tvdb://10909472"
              }
            ],
            Rating: [
              {
                image: "imdb://image.rating",
                value: 4.2,
                type: "audience"
              }
            ],
            Role: [
              {
                id: 237095,
                filter: "actor=237095",
                tag: "Younan Nowzaradan",
                tagKey: "5f3fffeecae2c60042ecb495",
                role: "As Himself",
                thumb:
                  "https://metadata-static.plex.tv/d/people/d641f12373ae2a3e74180a572aaa9437.jpg"
              }
            ]
          },
          {
            ratingKey: "55654",
            key: "/library/metadata/55654",
            parentRatingKey: "55006",
            grandparentRatingKey: "29621",
            guid: "plex://episode/677b932dca3cea9096e1303d",
            parentGuid: "plex://season/66c3b6f87f6b3620cb902f6c",
            grandparentGuid: "plex://show/5d9c08daffd9ef001e99b8f5",
            grandparentSlug: "90-day-fiance-before-the-90-days",
            type: "episode",
            title: "Tell All, Part 1",
            grandparentKey: "/library/metadata/29621",
            parentKey: "/library/metadata/55006",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "90 Day Fiancé: Before the 90 Days",
            parentTitle: "Season 7",
            contentRating: "TV-14",
            summary:
              "Tonight, we catch up with the couples of Before the 90 Days and learn where their relationships stand. It's one shocking moment after the next; as we find out who is broken up, who is back together and whose ex reached out with a shocking revelation.",
            index: 20,
            parentIndex: 7,
            year: 2025,
            thumb: "/library/metadata/55654/thumb/1738995221",
            art: "/library/metadata/29621/art/1738128632",
            grandparentThumb: "/library/metadata/29621/thumb/1738128632",
            grandparentArt: "/library/metadata/29621/art/1738128632",
            duration: 5131370,
            originallyAvailableAt: "2025-01-12",
            addedAt: 1736734424,
            updatedAt: 1738995221,
            Media: [
              {
                id: 58724,
                duration: 5131370,
                bitrate: 7018,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 2,
                audioCodec: "aac",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "NTSC",
                audioProfile: "lc",
                videoProfile: "main",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 88809,
                    key: "/library/parts/88809/1736734299/file.mkv",
                    duration: 5131370,
                    file: "/TV Shows (Reality)/90 Day Fiancé - Before The 90 Days/Season 07/90 Day Fiancé - Before the 90 Days - S07E20 - Tell All, Part 1 WEBDL-1080p.mkv",
                    size: 4503556735,
                    audioProfile: "lc",
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "main",
                    Stream: [
                      {
                        id: 290111,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 6893,
                        bitDepth: 8,
                        chromaLocation: "left",
                        chromaSubsampling: "4:2:0",
                        codedHeight: 1088,
                        codedWidth: 1920,
                        frameRate: 29.97,
                        hasScalingMatrix: false,
                        height: 1080,
                        level: 40,
                        profile: "main",
                        refFrames: 4,
                        scanType: "progressive",
                        width: 1920,
                        displayTitle: "1080p",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 290112,
                        streamType: 2,
                        selected: true,
                        default: true,
                        codec: "aac",
                        index: 1,
                        channels: 2,
                        bitrate: 125,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        audioChannelLayout: "stereo",
                        profile: "lc",
                        samplingRate: 48000,
                        displayTitle: "English (AAC Stereo)",
                        extendedDisplayTitle: "English (AAC Stereo)"
                      },
                      {
                        id: 290113,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        displayTitle: "English",
                        extendedDisplayTitle: "English (SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Tell All, Part 1",
                type: "coverPoster",
                url: "/library/metadata/29621/thumb/1738128632"
              },
              {
                alt: "Tell All, Part 1",
                type: "snapshot",
                url: "/library/metadata/55654/thumb/1738995221"
              },
              {
                alt: "Tell All, Part 1",
                type: "background",
                url: "/library/metadata/29621/art/1738128632"
              },
              {
                alt: "Tell All, Part 1",
                type: "clearLogo",
                url: "/library/metadata/29621/clearLogo/1738128632"
              }
            ],
            UltraBlurColors: {
              topLeft: "590a06",
              topRight: "353f3b",
              bottomRight: "924042",
              bottomLeft: "8b261c"
            },
            Guid: [
              {
                id: "imdb://tt35283850"
              },
              {
                id: "tmdb://5895959"
              },
              {
                id: "tvdb://10900805"
              }
            ],
            Rating: [
              {
                image: "imdb://image.rating",
                value: 7.2,
                type: "audience"
              }
            ],
            Role: [
              {
                id: 321488,
                filter: "actor=321488",
                tag: "Tigerlily Abdelfattah",
                tagKey: "675655a080661d35c494df79",
                role: "Self"
              },
              {
                id: 321013,
                filter: "actor=321013",
                tag: "Loren Allen",
                tagKey: "5f3fb952bf3e560040af3efa",
                role: "Self"
              },
              {
                id: 321489,
                filter: "actor=321489",
                tag: "Vanja Grbic",
                tagKey: "675655a06b70a8f1a4a80c91",
                role: "Self"
              },
              {
                id: 193961,
                filter: "actor=193961",
                tag: "Shaun Robinson",
                tagKey: "5d776833f59e5800218987dd",
                role: "Self - Host",
                thumb:
                  "https://metadata-static.plex.tv/a/people/ae19431faa3523cc1baff23e15d2b738.jpg"
              },
              {
                id: 321491,
                filter: "actor=321491",
                tag: "Faith Gatoc Tulod",
                tagKey: "6756559e6b70a8f1a4a80c87",
                role: "Self"
              },
              {
                id: 321492,
                filter: "actor=321492",
                tag: "Niles Valentine",
                tagKey: "6756559e34acc71bd2ac6880",
                role: "Self"
              },
              {
                id: 321490,
                filter: "actor=321490",
                tag: "Bozo Vrdoljak",
                tagKey: "675655a0729f1bff838b3436",
                role: "Self"
              }
            ],
            Producer: [
              {
                id: 317646,
                filter: "producer=317646",
                tag: "David Burch",
                tagKey: "5f4013721ae710004103e5fd"
              },
              {
                id: 318015,
                filter: "producer=318015",
                tag: "Jenni Gilroy",
                tagKey: "5f3fe0eafea1a1003f99240d"
              }
            ]
          },
          {
            ratingKey: "55620",
            key: "/library/metadata/55620",
            parentRatingKey: "55071",
            grandparentRatingKey: "30009",
            guid: "plex://episode/676bd80fc47c496acc021b17",
            parentGuid: "plex://season/6697ba330f4923e3427c9f39",
            grandparentGuid: "plex://show/5d9c0874705e7a001e6ddc85",
            grandparentSlug: "hells-kitchen-us",
            type: "episode",
            title: "Black Jacket Time",
            grandparentKey: "/library/metadata/30009",
            parentKey: "/library/metadata/55071",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "Hell's Kitchen (US)",
            parentTitle: "Season 23",
            contentRating: "TV-14",
            summary:
              "Gordon Ramsay announces this week determines which chefs will receive one of the coveted black jackets; the chefs must use their creativity and pull out all the stops to attempt to stand out from the pack.",
            index: 12,
            parentIndex: 23,
            year: 2025,
            thumb: "/library/metadata/55620/thumb/1738918117",
            art: "/library/metadata/30009/art/1738995285",
            grandparentThumb: "/library/metadata/30009/thumb/1738995285",
            grandparentArt: "/library/metadata/30009/art/1738995285",
            grandparentTheme: "/library/metadata/30009/theme/1738995285",
            duration: 2591989,
            originallyAvailableAt: "2025-01-09",
            addedAt: 1736512516,
            updatedAt: 1738918117,
            chapterSource: "media",
            Media: [
              {
                id: 58689,
                duration: 2591989,
                bitrate: 10306,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 6,
                audioCodec: "eac3",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "NTSC",
                videoProfile: "high",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 88750,
                    key: "/library/parts/88750/1736543788/file.mkv",
                    duration: 2591989,
                    file: "/TV Shows (Reality)/Gordan Ramsay - Hells Kitchen US/Season 23/Hell's Kitchen (US) - S23E12 - Black Jacket Time WEBDL-1080p.mkv",
                    size: 3340000673,
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "high",
                    Stream: [
                      {
                        id: 289937,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 9666,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        bitDepth: 8,
                        chromaLocation: "left",
                        chromaSubsampling: "4:2:0",
                        codedHeight: 1088,
                        codedWidth: 1920,
                        colorPrimaries: "bt709",
                        colorRange: "tv",
                        colorSpace: "bt709",
                        colorTrc: "bt709",
                        frameRate: 29.97,
                        hasScalingMatrix: false,
                        height: 1080,
                        level: 40,
                        original: true,
                        profile: "high",
                        refFrames: 4,
                        scanType: "progressive",
                        width: 1920,
                        displayTitle: "1080p",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 289938,
                        streamType: 2,
                        selected: true,
                        default: true,
                        codec: "eac3",
                        index: 1,
                        channels: 6,
                        bitrate: 640,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        audioChannelLayout: "5.1(side)",
                        original: true,
                        samplingRate: 48000,
                        displayTitle: "English (EAC3 5.1)",
                        extendedDisplayTitle: "English (EAC3 5.1)"
                      },
                      {
                        id: 289939,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        original: true,
                        displayTitle: "English",
                        extendedDisplayTitle: "English (SRT)"
                      },
                      {
                        id: 289940,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 3,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        hearingImpaired: true,
                        original: true,
                        title: "SDH",
                        displayTitle: "English SDH",
                        extendedDisplayTitle: "SDH (English SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Black Jacket Time",
                type: "coverPoster",
                url: "/library/metadata/30009/thumb/1738995285"
              },
              {
                alt: "Black Jacket Time",
                type: "snapshot",
                url: "/library/metadata/55620/thumb/1738918117"
              },
              {
                alt: "Black Jacket Time",
                type: "background",
                url: "/library/metadata/30009/art/1738995285"
              },
              {
                alt: "Black Jacket Time",
                type: "clearLogo",
                url: "/library/metadata/30009/clearLogo/1738995285"
              }
            ],
            UltraBlurColors: {
              topLeft: "081b31",
              topRight: "132243",
              bottomRight: "032238",
              bottomLeft: "265477"
            },
            Guid: [
              {
                id: "imdb://tt35264550"
              },
              {
                id: "tmdb://5868544"
              },
              {
                id: "tvdb://10869538"
              }
            ],
            Rating: [
              {
                image: "imdb://image.rating",
                value: 7.6,
                type: "audience"
              }
            ],
            Role: [
              {
                id: 106830,
                filter: "actor=106830",
                tag: "Gordon Ramsay",
                tagKey: "5d7768aa374a5b001fecc9c4",
                role: "Self - Chef",
                thumb:
                  "https://metadata-static.plex.tv/d/people/dd20a681247c97c89d9aa32747028ba3.jpg"
              },
              {
                id: 194259,
                filter: "actor=194259",
                tag: "James Avery",
                tagKey: "6233480e2e411962942d1edd",
                role: "Self - Sous Chef"
              },
              {
                id: 216200,
                filter: "actor=216200",
                tag: "Marino Monferrato",
                tagKey: "644d077c7b10820176a91641",
                role: "Self - Maître D'",
                thumb:
                  "https://metadata-static.plex.tv/7/people/79dba3a86ae936fe2f070439e364a4ea.jpg"
              },
              {
                id: 228469,
                filter: "actor=228469",
                tag: "Michelle Tribble",
                tagKey: "64da17c5fb911c69374a96a6",
                role: "Self - Sous Chef"
              }
            ],
            Producer: [
              {
                id: 317407,
                filter: "producer=317407",
                tag: "Gautam Badgujar",
                tagKey: "5f402bd086422500428408d1"
              },
              {
                id: 317408,
                filter: "producer=317408",
                tag: "Ashley Callirgos",
                tagKey: "6538cdd3079d385acb2a6985"
              },
              {
                id: 317409,
                filter: "producer=317409",
                tag: "Rob Dodd",
                tagKey: "5d776cbcf617c90020184b82"
              },
              {
                id: 317410,
                filter: "producer=317410",
                tag: "Michael Leavitt",
                tagKey: "5f404171cae2c60042f34c34"
              },
              {
                id: 317411,
                filter: "producer=317411",
                tag: "Tahjanae Montgomery",
                tagKey: "670134552674d7c225455bc5"
              },
              {
                id: 317412,
                filter: "producer=317412",
                tag: "Jeffrey Pakosta",
                tagKey: "5d776aa67a53e9001e70b5f0"
              },
              {
                id: 317413,
                filter: "producer=317413",
                tag: "Gina Gonzalez Scallon",
                tagKey: "60c31a199a32d6002c9b1986"
              },
              {
                id: 317414,
                filter: "producer=317414",
                tag: "Heather Rose Wagner",
                tagKey: "5f3fe318ce2564003f880326"
              }
            ]
          },
          {
            ratingKey: "55618",
            key: "/library/metadata/55618",
            parentRatingKey: "55599",
            grandparentRatingKey: "38320",
            guid: "plex://episode/6778431165bf55f203ce1bc0",
            parentGuid: "plex://season/677720d0e9f315c4f6109f66",
            grandparentGuid: "plex://show/5d9c08182192ba001f307411",
            grandparentSlug: "my-600-lb-life",
            type: "episode",
            title: "Krystal A's Journey",
            grandparentKey: "/library/metadata/38320",
            parentKey: "/library/metadata/55599",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "My 600-lb Life",
            parentTitle: "Season 13",
            contentRating: "TV-14",
            summary:
              "Krystal has never let her weight get in the way, but the truth is her weight has really started getting in the way; she has the husband of her dreams who supports her unconditionally, but she has to get weight loss surgery.",
            index: 2,
            parentIndex: 13,
            year: 2025,
            thumb: "/library/metadata/55618/thumb/1738847142",
            art: "/library/metadata/38320/art/1735190665",
            grandparentThumb: "/library/metadata/38320/thumb/1735190665",
            grandparentArt: "/library/metadata/38320/art/1735190665",
            duration: 5141824,
            originallyAvailableAt: "2025-01-08",
            addedAt: 1736408898,
            updatedAt: 1738847142,
            Media: [
              {
                id: 58673,
                duration: 5141824,
                bitrate: 9718,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 2,
                audioCodec: "eac3",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "24p",
                videoProfile: "high",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 88733,
                    key: "/library/parts/88733/1736408803/file.mkv",
                    duration: 5141824,
                    file: "/TV Shows (Reality)/My 600-lb Life/Season 13/My 600-lb Life - S13E02 - Krystal A's Journey WEBDL-1080p.mkv",
                    size: 6247255609,
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "high",
                    Stream: [
                      {
                        id: 289822,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 9494,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        bitDepth: 8,
                        chromaLocation: "left",
                        chromaSubsampling: "4:2:0",
                        codedHeight: 1088,
                        codedWidth: 1920,
                        colorPrimaries: "bt709",
                        colorRange: "tv",
                        colorSpace: "bt709",
                        colorTrc: "bt709",
                        frameRate: 23.976,
                        hasScalingMatrix: false,
                        height: 1080,
                        level: 40,
                        original: true,
                        profile: "high",
                        refFrames: 4,
                        scanType: "progressive",
                        width: 1920,
                        displayTitle: "1080p",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 289823,
                        streamType: 2,
                        selected: true,
                        default: true,
                        codec: "eac3",
                        index: 1,
                        channels: 2,
                        bitrate: 224,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        audioChannelLayout: "stereo",
                        original: true,
                        samplingRate: 48000,
                        displayTitle: "English (EAC3 Stereo)",
                        extendedDisplayTitle: "English (EAC3 Stereo)"
                      },
                      {
                        id: 289824,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        dub: true,
                        title: "United States",
                        displayTitle: "English",
                        extendedDisplayTitle: "United States (English SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Krystal A's Journey",
                type: "coverPoster",
                url: "/library/metadata/38320/thumb/1735190665"
              },
              {
                alt: "Krystal A's Journey",
                type: "snapshot",
                url: "/library/metadata/55618/thumb/1738847142"
              },
              {
                alt: "Krystal A's Journey",
                type: "background",
                url: "/library/metadata/38320/art/1735190665"
              },
              {
                alt: "Krystal A's Journey",
                type: "clearLogo",
                url: "/library/metadata/38320/clearLogo/1735190665"
              }
            ],
            UltraBlurColors: {
              topLeft: "530f28",
              topRight: "395c9b",
              bottomRight: "a22651",
              bottomLeft: "77263e"
            },
            Guid: [
              {
                id: "imdb://tt35261948"
              },
              {
                id: "tmdb://5879179"
              },
              {
                id: "tvdb://10897362"
              }
            ],
            Rating: [
              {
                image: "imdb://image.rating",
                value: 6.0,
                type: "audience"
              }
            ],
            Role: [
              {
                id: 237095,
                filter: "actor=237095",
                tag: "Younan Nowzaradan",
                tagKey: "5f3fffeecae2c60042ecb495",
                role: "As Himself",
                thumb:
                  "https://metadata-static.plex.tv/d/people/d641f12373ae2a3e74180a572aaa9437.jpg"
              }
            ]
          },
          {
            ratingKey: "55613",
            key: "/library/metadata/55613",
            parentRatingKey: "27605",
            grandparentRatingKey: "27548",
            guid: "plex://episode/5d9c107a4eefaa001f62e431",
            parentGuid: "plex://season/602e638188e0a9002df82408",
            grandparentGuid: "plex://show/5d9c0846705e7a001e6d7b28",
            grandparentSlug: "bar-rescue",
            type: "episode",
            title: "Struck Out at the Dugout",
            grandparentKey: "/library/metadata/27548",
            parentKey: "/library/metadata/27605",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "Bar Rescue",
            parentTitle: "Season 5",
            contentRating: "TV-PG",
            summary:
              "After evicting a tenant who refused to pay rent, a drunken owner degrades his sports bar, allows flies to scour the establishment. His ego, constant drinking, and excuses push the staff to their breaking point.",
            index: 15,
            parentIndex: 5,
            year: 2017,
            thumb: "/library/metadata/55613/thumb/1736325798",
            art: "/library/metadata/27548/art/1737001734",
            parentThumb: "/library/metadata/27605/thumb/1736325791",
            grandparentThumb: "/library/metadata/27548/thumb/1737001734",
            grandparentArt: "/library/metadata/27548/art/1737001734",
            grandparentTheme: "/library/metadata/27548/theme/1737001734",
            duration: 2475781,
            originallyAvailableAt: "2017-03-05",
            addedAt: 1736325788,
            updatedAt: 1736325798,
            Media: [
              {
                id: 58668,
                duration: 2475781,
                bitrate: 4979,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 2,
                audioCodec: "aac",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "24p",
                audioProfile: "lc",
                videoProfile: "high",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 88728,
                    key: "/library/parts/88728/1488167896/file.mkv",
                    duration: 2475781,
                    file: "/TV Shows (Reality)/Bar Rescue/Season 05/Bar Rescue - S05E15 - Struck Out at the Dugout WEBDL-1080p.mkv",
                    size: 1541740645,
                    audioProfile: "lc",
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "high",
                    Stream: [
                      {
                        id: 289801,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 4851,
                        bitDepth: 8,
                        chromaLocation: "left",
                        chromaSubsampling: "4:2:0",
                        codedHeight: 1088,
                        codedWidth: 1920,
                        frameRate: 23.976,
                        hasScalingMatrix: false,
                        height: 1080,
                        level: 40,
                        profile: "high",
                        refFrames: 4,
                        scanType: "progressive",
                        width: 1920,
                        displayTitle: "1080p",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 289802,
                        streamType: 2,
                        selected: true,
                        default: true,
                        codec: "aac",
                        index: 1,
                        channels: 2,
                        bitrate: 128,
                        audioChannelLayout: "stereo",
                        profile: "lc",
                        samplingRate: 48000,
                        displayTitle: "Unknown (AAC Stereo)",
                        extendedDisplayTitle: "Unknown (AAC Stereo)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Struck Out at the Dugout",
                type: "coverPoster",
                url: "/library/metadata/27605/thumb/1736325791"
              },
              {
                alt: "Struck Out at the Dugout",
                type: "snapshot",
                url: "/library/metadata/55613/thumb/1736325798"
              },
              {
                alt: "Struck Out at the Dugout",
                type: "background",
                url: "/library/metadata/27548/art/1737001734"
              }
            ],
            UltraBlurColors: {
              topLeft: "432611",
              topRight: "342b0f",
              bottomRight: "61301e",
              bottomLeft: "7a4228"
            },
            Guid: [
              {
                id: "imdb://tt6561992"
              },
              {
                id: "tmdb://1282163"
              },
              {
                id: "tvdb://6004076"
              }
            ],
            Rating: [
              {
                image: "imdb://image.rating",
                value: 7.1,
                type: "audience"
              }
            ],
            Writer: [
              {
                id: 328065,
                filter: "writer=328065",
                tag: "Jamie P. Hanson",
                tagKey: "5f403d9b52f2000041535332"
              }
            ],
            Role: [
              {
                id: 237087,
                filter: "actor=237087",
                tag: "Jon Taffer",
                tagKey: "5d9c0846705e7a001e6d7b4a",
                role: "Self",
                thumb:
                  "https://metadata-static.plex.tv/e/people/e31788eb57a2151ddfd365dfc2de6008.jpg"
              }
            ],
            Producer: [
              {
                id: 320186,
                filter: "producer=320186",
                tag: "Matthew C. Allyn",
                tagKey: "5ec41018254ba70038dae165"
              },
              {
                id: 320195,
                filter: "producer=320195",
                tag: "Sarah Blair",
                tagKey: "5f406d9752f200004159b25c"
              },
              {
                id: 328060,
                filter: "producer=328060",
                tag: "Neil Coleman",
                tagKey: "5f3fec4a5a76a80042d0a26a"
              },
              {
                id: 320191,
                filter: "producer=320191",
                tag: "Katy Dierks",
                tagKey: "5e624cfbf188ac003a8df544"
              },
              {
                id: 320189,
                filter: "producer=320189",
                tag: "James Gingold",
                tagKey: "5f400f8d58b26e00425f51f4"
              }
            ]
          },
          {
            ratingKey: "55608",
            key: "/library/metadata/55608",
            parentRatingKey: "55006",
            grandparentRatingKey: "29621",
            guid: "plex://episode/676382a08e2ed1e059018dbb",
            parentGuid: "plex://season/66c3b6f87f6b3620cb902f6c",
            grandparentGuid: "plex://show/5d9c08daffd9ef001e99b8f5",
            grandparentSlug: "90-day-fiance-before-the-90-days",
            type: "episode",
            title: "Never Let Me Go",
            grandparentKey: "/library/metadata/29621",
            parentKey: "/library/metadata/55006",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "90 Day Fiancé: Before the 90 Days",
            parentTitle: "Season 7",
            contentRating: "TV-14",
            summary:
              "Matilda and Niles share an emotional goodbye. Vanja reaches out to Josko and wants answers. Sunny's dad issues an ultimatum. Magda hopes for a proposal. Tigerlily shares troubling news about her relationship with Adnan.",
            index: 19,
            parentIndex: 7,
            year: 2025,
            thumb: "/library/metadata/55608/thumb/1738995220",
            art: "/library/metadata/29621/art/1738128632",
            grandparentThumb: "/library/metadata/29621/thumb/1738128632",
            grandparentArt: "/library/metadata/29621/art/1738128632",
            duration: 5288447,
            originallyAvailableAt: "2025-01-05",
            addedAt: 1736128606,
            updatedAt: 1738995220,
            Media: [
              {
                id: 58596,
                duration: 5288447,
                bitrate: 8356,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 2,
                audioCodec: "aac",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "24p",
                audioProfile: "lc",
                videoProfile: "main",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 88656,
                    key: "/library/parts/88656/1736128481/file.mkv",
                    duration: 5288447,
                    file: "/TV Shows (Reality)/90 Day Fiancé - Before The 90 Days/Season 07/90 Day Fiancé - Before the 90 Days - S07E19 - Never Let Me Go WEBDL-1080p.mkv",
                    size: 5525115399,
                    audioProfile: "lc",
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "main",
                    Stream: [
                      {
                        id: 289398,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 8230,
                        bitDepth: 8,
                        chromaLocation: "left",
                        chromaSubsampling: "4:2:0",
                        codedHeight: 1088,
                        codedWidth: 1920,
                        frameRate: 23.976,
                        hasScalingMatrix: false,
                        height: 1080,
                        level: 40,
                        profile: "main",
                        refFrames: 4,
                        scanType: "progressive",
                        width: 1920,
                        displayTitle: "1080p",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 289399,
                        streamType: 2,
                        selected: true,
                        default: true,
                        codec: "aac",
                        index: 1,
                        channels: 2,
                        bitrate: 125,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        audioChannelLayout: "stereo",
                        profile: "lc",
                        samplingRate: 48000,
                        displayTitle: "English (AAC Stereo)",
                        extendedDisplayTitle: "English (AAC Stereo)"
                      },
                      {
                        id: 289400,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        displayTitle: "English",
                        extendedDisplayTitle: "English (SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Never Let Me Go",
                type: "coverPoster",
                url: "/library/metadata/29621/thumb/1738128632"
              },
              {
                alt: "Never Let Me Go",
                type: "snapshot",
                url: "/library/metadata/55608/thumb/1738995220"
              },
              {
                alt: "Never Let Me Go",
                type: "background",
                url: "/library/metadata/29621/art/1738128632"
              },
              {
                alt: "Never Let Me Go",
                type: "clearLogo",
                url: "/library/metadata/29621/clearLogo/1738128632"
              }
            ],
            UltraBlurColors: {
              topLeft: "392b10",
              topRight: "4c4b1f",
              bottomRight: "352c10",
              bottomLeft: "26211e"
            },
            Guid: [
              {
                id: "imdb://tt35050877"
              },
              {
                id: "tmdb://5869236"
              },
              {
                id: "tvdb://10877664"
              }
            ],
            Rating: [
              {
                image: "imdb://image.rating",
                value: 7.8,
                type: "audience"
              }
            ],
            Role: [
              {
                id: 321488,
                filter: "actor=321488",
                tag: "Tigerlily Abdelfattah",
                tagKey: "675655a080661d35c494df79",
                role: "Self"
              },
              {
                id: 321489,
                filter: "actor=321489",
                tag: "Vanja Grbic",
                tagKey: "675655a06b70a8f1a4a80c91",
                role: "Self"
              },
              {
                id: 321492,
                filter: "actor=321492",
                tag: "Niles Valentine",
                tagKey: "6756559e34acc71bd2ac6880",
                role: "Self"
              }
            ]
          },
          {
            ratingKey: "42236",
            key: "/library/metadata/42236/children",
            guid: "plex://show/5d9c084608fddd001f2965b5",
            slug: "hoarders",
            studio: "Screaming Flea Productions",
            type: "show",
            title: "Hoarders",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            contentRating: "TV-PG",
            summary:
              "Each episode of Hoarders is a fascinating look inside the lives of two different people whose inability to part with their belongings is so out of control that they are on the verge of a personal crisis.",
            index: 1,
            audienceRating: 6.4,
            viewCount: 29,
            skipCount: 8,
            lastViewedAt: 1677707559,
            year: 2009,
            thumb: "/library/metadata/42236/thumb/1735017731",
            art: "/library/metadata/42236/art/1735017731",
            theme: "/library/metadata/42236/theme/1735017731",
            duration: 2580000,
            originallyAvailableAt: "2009-08-17",
            leafCount: 185,
            viewedLeafCount: 29,
            childCount: 17,
            seasonCount: 16,
            addedAt: 1736015559,
            updatedAt: 1735017731,
            audienceRatingImage: "themoviedb://image.rating",
            Image: [
              {
                alt: "Hoarders",
                type: "coverPoster",
                url: "/library/metadata/42236/thumb/1735017731"
              },
              {
                alt: "Hoarders",
                type: "background",
                url: "/library/metadata/42236/art/1735017731"
              },
              {
                alt: "Hoarders",
                type: "clearLogo",
                url: "/library/metadata/42236/clearLogo/1735017731"
              }
            ],
            UltraBlurColors: {
              topLeft: "2c0d0f",
              topRight: "933e49",
              bottomRight: "1c181c",
              bottomLeft: "1d0b04"
            },
            Genre: [
              {
                id: 2268,
                filter: "genre=2268",
                tag: "Documentary"
              },
              {
                id: 86,
                filter: "genre=86",
                tag: "Reality"
              },
              {
                id: 91,
                filter: "genre=91",
                tag: "Drama"
              }
            ],
            Country: [
              {
                id: 58591,
                filter: "country=58591",
                tag: "United States of America"
              }
            ],
            Guid: [
              {
                id: "imdb://tt1497563"
              },
              {
                id: "tmdb://30946"
              },
              {
                id: "tvdb://109621"
              }
            ],
            Rating: [
              {
                image: "imdb://image.rating",
                value: 6.5,
                type: "audience"
              },
              {
                image: "themoviedb://image.rating",
                value: 6.4,
                type: "audience"
              }
            ],
            Role: [
              {
                id: 217168,
                filter: "actor=217168",
                tag: "Melva Green",
                tagKey: "64709fc75b26745efb9c5b84",
                role: "Self - Psychiatrist"
              },
              {
                id: 217170,
                filter: "actor=217170",
                tag: "Robin Zasio",
                tagKey: "64709fc7411e92eead585793",
                role: "Self - Psychologist"
              },
              {
                id: 217163,
                filter: "actor=217163",
                tag: "Corey Chalmers",
                tagKey: "5ddbaa0989b4ed001f7c0514",
                role: "Self - Extreme Cleanup Expert"
              },
              {
                id: 217164,
                filter: "actor=217164",
                tag: "Brandon Bronaugh",
                tagKey: "64709fc70eb68aef74565395",
                role: "Brandon Bronaugh"
              },
              {
                id: 217165,
                filter: "actor=217165",
                tag: "Caroline Harvey",
                tagKey: "63235dabce37dd2faa6e41b9",
                role: "Carolina Harvey"
              },
              {
                id: 301149,
                filter: "actor=301149",
                tag: "David Tolin",
                tagKey: "66c77c0fae2033769c137e21",
                role: ""
              },
              {
                id: 217167,
                filter: "actor=217167",
                tag: "Suzanne Chabaud",
                tagKey: "64709fc7461f6568213a5b2a",
                role: ""
              },
              {
                id: 217169,
                filter: "actor=217169",
                tag: "Michael Tompkins",
                tagKey: "64709fc7f308f8287308c85b",
                role: ""
              },
              {
                id: 217171,
                filter: "actor=217171",
                tag: "Matt Paxton",
                tagKey: "642185e66e0772bf4836b84d",
                role: "Self - Extreme Cleanup Expert"
              },
              {
                id: 217172,
                filter: "actor=217172",
                tag: "Scott Hannan",
                tagKey: "64709fc7f308f8287308c859",
                role: "Self - Clinical Psychologist"
              },
              {
                id: 217173,
                filter: "actor=217173",
                tag: "Standolyn Robertson",
                tagKey: "64709fc78beeb93c29b6cb80",
                role: "Self"
              }
            ],
            Similar: [
              {
                id: 64358,
                filter: "similar=64358",
                tag: "Hoarding: Buried Alive"
              },
              {
                id: 36866,
                filter: "similar=36866",
                tag: "60 Minutes"
              },
              {
                id: 46760,
                filter: "similar=46760",
                tag: "Mermaid Melody: Pichi Pichi Pitch"
              },
              {
                id: 43552,
                filter: "similar=43552",
                tag: "Toddlers & Tiaras"
              },
              {
                id: 13996,
                filter: "similar=13996",
                tag: "Trail of Lies"
              },
              {
                id: 13982,
                filter: "similar=13982",
                tag: "MasterChef Latino"
              },
              {
                id: 64359,
                filter: "similar=64359",
                tag: "The Jay Leno Show"
              },
              {
                id: 60989,
                filter: "similar=60989",
                tag: "20/20"
              },
              {
                id: 64361,
                filter: "similar=64361",
                tag: "Extreme Couponing"
              },
              {
                id: 64363,
                filter: "similar=64363",
                tag: "Nightline"
              },
              {
                id: 64366,
                filter: "similar=64366",
                tag: "Wicked Attraction"
              },
              {
                id: 64364,
                filter: "similar=64364",
                tag: "True Crime with Aphrodite Jones"
              },
              {
                id: 64365,
                filter: "similar=64365",
                tag: "Grave Secrets"
              },
              {
                id: 64362,
                filter: "similar=64362",
                tag: "Deadly Women"
              },
              {
                id: 64368,
                filter: "similar=64368",
                tag: "Cold Case Files"
              },
              {
                id: 32626,
                filter: "similar=32626",
                tag: "Tattoo Nightmares"
              },
              {
                id: 64677,
                filter: "similar=64677",
                tag: "Maury"
              },
              {
                id: 51189,
                filter: "similar=51189",
                tag: "Extreme Makeover: Home Edition"
              },
              {
                id: 64678,
                filter: "similar=64678",
                tag: "Nightmare Next Door"
              },
              {
                id: 64664,
                filter: "similar=64664",
                tag: "The Conquest"
              }
            ],
            Location: [
              {
                path: "/TV Shows (Reality)/Hoarders"
              }
            ]
          },
          {
            ratingKey: "55601",
            key: "/library/metadata/55601",
            parentRatingKey: "55071",
            grandparentRatingKey: "30009",
            guid: "plex://episode/673cab699f7318c38aa5eb00",
            parentGuid: "plex://season/6697ba330f4923e3427c9f39",
            grandparentGuid: "plex://show/5d9c0874705e7a001e6ddc85",
            grandparentSlug: "hells-kitchen-us",
            type: "episode",
            title: "A Soap Opera in Hell",
            titleSort: "Soap Opera in Hell",
            grandparentKey: "/library/metadata/30009",
            parentKey: "/library/metadata/55071",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "Hell's Kitchen (US)",
            parentTitle: "Season 23",
            contentRating: "TV-14",
            summary:
              "The top eight chefs begin the week with an international cuisine challenge; a dinner service honoring guests from charity organizations.",
            index: 11,
            parentIndex: 23,
            audienceRating: 7.0,
            year: 2025,
            thumb: "/library/metadata/55601/thumb/1738314148",
            art: "/library/metadata/30009/art/1738995285",
            grandparentThumb: "/library/metadata/30009/thumb/1738995285",
            grandparentArt: "/library/metadata/30009/art/1738995285",
            grandparentTheme: "/library/metadata/30009/theme/1738995285",
            duration: 2591989,
            originallyAvailableAt: "2025-01-02",
            addedAt: 1735883971,
            updatedAt: 1738314148,
            audienceRatingImage: "themoviedb://image.rating",
            chapterSource: "media",
            Media: [
              {
                id: 58531,
                duration: 2591989,
                bitrate: 10357,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 6,
                audioCodec: "eac3",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "NTSC",
                videoProfile: "high",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 88591,
                    key: "/library/parts/88591/1735850655/file.mkv",
                    duration: 2591989,
                    file: "/TV Shows (Reality)/Gordan Ramsay - Hells Kitchen US/Season 23/Hell's Kitchen (US) - S23E11 - A Soap Opera in Hell WEBDL-1080p.mkv",
                    size: 3356555609,
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "high",
                    Stream: [
                      {
                        id: 289052,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 9717,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        bitDepth: 8,
                        chromaLocation: "left",
                        chromaSubsampling: "4:2:0",
                        codedHeight: 1088,
                        codedWidth: 1920,
                        colorPrimaries: "bt709",
                        colorRange: "tv",
                        colorSpace: "bt709",
                        colorTrc: "bt709",
                        frameRate: 29.97,
                        hasScalingMatrix: false,
                        height: 1080,
                        level: 40,
                        original: true,
                        profile: "high",
                        refFrames: 4,
                        scanType: "progressive",
                        width: 1920,
                        displayTitle: "1080p",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 289053,
                        streamType: 2,
                        selected: true,
                        default: true,
                        codec: "eac3",
                        index: 1,
                        channels: 6,
                        bitrate: 640,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        audioChannelLayout: "5.1(side)",
                        original: true,
                        samplingRate: 48000,
                        displayTitle: "English (EAC3 5.1)",
                        extendedDisplayTitle: "English (EAC3 5.1)"
                      },
                      {
                        id: 289054,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        original: true,
                        displayTitle: "English",
                        extendedDisplayTitle: "English (SRT)"
                      },
                      {
                        id: 289055,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 3,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        hearingImpaired: true,
                        original: true,
                        title: "SDH",
                        displayTitle: "English SDH",
                        extendedDisplayTitle: "SDH (English SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "A Soap Opera in Hell",
                type: "coverPoster",
                url: "/library/metadata/30009/thumb/1738995285"
              },
              {
                alt: "A Soap Opera in Hell",
                type: "snapshot",
                url: "/library/metadata/55601/thumb/1738314148"
              },
              {
                alt: "A Soap Opera in Hell",
                type: "background",
                url: "/library/metadata/30009/art/1738995285"
              },
              {
                alt: "A Soap Opera in Hell",
                type: "clearLogo",
                url: "/library/metadata/30009/clearLogo/1738995285"
              }
            ],
            UltraBlurColors: {
              topLeft: "551017",
              topRight: "91413e",
              bottomRight: "232023",
              bottomLeft: "91423b"
            },
            Guid: [
              {
                id: "imdb://tt34761020"
              },
              {
                id: "tmdb://5767862"
              },
              {
                id: "tvdb://10831651"
              }
            ],
            Rating: [
              {
                image: "imdb://image.rating",
                value: 7.9,
                type: "audience"
              },
              {
                image: "themoviedb://image.rating",
                value: 7.0,
                type: "audience"
              }
            ],
            Role: [
              {
                id: 106830,
                filter: "actor=106830",
                tag: "Gordon Ramsay",
                tagKey: "5d7768aa374a5b001fecc9c4",
                role: "Self - Chef",
                thumb:
                  "https://metadata-static.plex.tv/d/people/dd20a681247c97c89d9aa32747028ba3.jpg"
              },
              {
                id: 194259,
                filter: "actor=194259",
                tag: "James Avery",
                tagKey: "6233480e2e411962942d1edd",
                role: "Self - Sous Chef"
              },
              {
                id: 216200,
                filter: "actor=216200",
                tag: "Marino Monferrato",
                tagKey: "644d077c7b10820176a91641",
                role: "Self - Maître D'",
                thumb:
                  "https://metadata-static.plex.tv/7/people/79dba3a86ae936fe2f070439e364a4ea.jpg"
              },
              {
                id: 228469,
                filter: "actor=228469",
                tag: "Michelle Tribble",
                tagKey: "64da17c5fb911c69374a96a6",
                role: "Self - Sous Chef"
              }
            ],
            Producer: [
              {
                id: 317407,
                filter: "producer=317407",
                tag: "Gautam Badgujar",
                tagKey: "5f402bd086422500428408d1"
              },
              {
                id: 317408,
                filter: "producer=317408",
                tag: "Ashley Callirgos",
                tagKey: "6538cdd3079d385acb2a6985"
              },
              {
                id: 317409,
                filter: "producer=317409",
                tag: "Rob Dodd",
                tagKey: "5d776cbcf617c90020184b82"
              },
              {
                id: 317410,
                filter: "producer=317410",
                tag: "Michael Leavitt",
                tagKey: "5f404171cae2c60042f34c34"
              },
              {
                id: 317411,
                filter: "producer=317411",
                tag: "Tahjanae Montgomery",
                tagKey: "670134552674d7c225455bc5"
              },
              {
                id: 317412,
                filter: "producer=317412",
                tag: "Jeffrey Pakosta",
                tagKey: "5d776aa67a53e9001e70b5f0"
              },
              {
                id: 317413,
                filter: "producer=317413",
                tag: "Gina Gonzalez Scallon",
                tagKey: "60c31a199a32d6002c9b1986"
              },
              {
                id: 317414,
                filter: "producer=317414",
                tag: "Heather Rose Wagner",
                tagKey: "5f3fe318ce2564003f880326"
              }
            ]
          },
          {
            ratingKey: "55600",
            key: "/library/metadata/55600",
            parentRatingKey: "55599",
            grandparentRatingKey: "38320",
            guid: "plex://episode/67772132e9f315c4f6109fce",
            parentGuid: "plex://season/677720d0e9f315c4f6109f66",
            grandparentGuid: "plex://show/5d9c08182192ba001f307411",
            grandparentSlug: "my-600-lb-life",
            type: "episode",
            title: "Jonathan's Journey",
            grandparentKey: "/library/metadata/38320",
            parentKey: "/library/metadata/55599",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "My 600-lb Life",
            parentTitle: "Season 13",
            contentRating: "TV-14",
            summary:
              "Jonathan had his dream job, and he ate himself out of it; once an EMT first responder, he rarely leaves the room; his wife works full time to pay their bills; Jonathan must break the cycle of eating if he wants to keep his wife and his life.",
            index: 1,
            parentIndex: 13,
            year: 2025,
            thumb: "/library/metadata/55600/thumb/1738847142",
            art: "/library/metadata/38320/art/1735190665",
            grandparentThumb: "/library/metadata/38320/thumb/1735190665",
            grandparentArt: "/library/metadata/38320/art/1735190665",
            duration: 5146080,
            originallyAvailableAt: "2025-01-01",
            addedAt: 1735843150,
            updatedAt: 1738847142,
            Media: [
              {
                id: 58529,
                duration: 5146080,
                bitrate: 9668,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 2,
                audioCodec: "eac3",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "24p",
                videoProfile: "high",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 88589,
                    key: "/library/parts/88589/1735748596/file.mkv",
                    duration: 5146080,
                    file: "/TV Shows (Reality)/My 600-lb Life/Season 13/My 600-lb Life - S13E01 - Jonathan's Journey WEBDL-1080p.mkv",
                    size: 6220159998,
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "high",
                    Stream: [
                      {
                        id: 289042,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 9443,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        bitDepth: 8,
                        chromaLocation: "left",
                        chromaSubsampling: "4:2:0",
                        codedHeight: 1088,
                        codedWidth: 1920,
                        colorPrimaries: "bt709",
                        colorRange: "tv",
                        colorSpace: "bt709",
                        colorTrc: "bt709",
                        frameRate: 23.976,
                        hasScalingMatrix: false,
                        height: 1080,
                        level: 40,
                        original: true,
                        profile: "high",
                        refFrames: 4,
                        scanType: "progressive",
                        width: 1920,
                        displayTitle: "1080p",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 289043,
                        streamType: 2,
                        selected: true,
                        default: true,
                        codec: "eac3",
                        index: 1,
                        channels: 2,
                        bitrate: 224,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        audioChannelLayout: "stereo",
                        original: true,
                        samplingRate: 48000,
                        displayTitle: "English (EAC3 Stereo)",
                        extendedDisplayTitle: "English (EAC3 Stereo)"
                      },
                      {
                        id: 289044,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        dub: true,
                        title: "United States",
                        displayTitle: "English",
                        extendedDisplayTitle: "United States (English SRT)"
                      },
                      {
                        id: 289045,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 3,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        dub: true,
                        hearingImpaired: true,
                        title: "United States (SDH)",
                        displayTitle: "English SDH",
                        extendedDisplayTitle:
                          "United States (SDH) (English SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Jonathan's Journey",
                type: "coverPoster",
                url: "/library/metadata/38320/thumb/1735190665"
              },
              {
                alt: "Jonathan's Journey",
                type: "snapshot",
                url: "/library/metadata/55600/thumb/1738847142"
              },
              {
                alt: "Jonathan's Journey",
                type: "background",
                url: "/library/metadata/38320/art/1735190665"
              },
              {
                alt: "Jonathan's Journey",
                type: "clearLogo",
                url: "/library/metadata/38320/clearLogo/1735190665"
              }
            ],
            UltraBlurColors: {
              topLeft: "0c020a",
              topRight: "553519",
              bottomRight: "1d1a18",
              bottomLeft: "6b2607"
            },
            Guid: [
              {
                id: "imdb://tt35261877"
              },
              {
                id: "tmdb://5873804"
              },
              {
                id: "tvdb://10883888"
              }
            ],
            Rating: [
              {
                image: "imdb://image.rating",
                value: 6.5,
                type: "audience"
              }
            ],
            Role: [
              {
                id: 237095,
                filter: "actor=237095",
                tag: "Younan Nowzaradan",
                tagKey: "5f3fffeecae2c60042ecb495",
                role: "As Himself",
                thumb:
                  "https://metadata-static.plex.tv/d/people/d641f12373ae2a3e74180a572aaa9437.jpg"
              }
            ]
          },
          {
            ratingKey: "55586",
            key: "/library/metadata/55586",
            parentRatingKey: "55006",
            grandparentRatingKey: "29621",
            guid: "plex://episode/675529e8453fccc0c8433603",
            parentGuid: "plex://season/66c3b6f87f6b3620cb902f6c",
            grandparentGuid: "plex://show/5d9c08daffd9ef001e99b8f5",
            grandparentSlug: "90-day-fiance-before-the-90-days",
            type: "episode",
            title: "Before We Say Goodbye",
            grandparentKey: "/library/metadata/29621",
            parentKey: "/library/metadata/55006",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "90 Day Fiancé: Before the 90 Days",
            parentTitle: "Season 7",
            contentRating: "TV-14",
            summary:
              "Madga threatens to eat Joey's eyeballs after he reveals a secret. Loren tries to patch things up with Faith. Vanja and Josko share an emotional goodbye. Niles gets some interesting advice before his wedding. Sunny is stuck between religion and love.",
            index: 18,
            parentIndex: 7,
            year: 2024,
            thumb: "/library/metadata/55586/thumb/1738995220",
            art: "/library/metadata/29621/art/1738128632",
            grandparentThumb: "/library/metadata/29621/thumb/1738128632",
            grandparentArt: "/library/metadata/29621/art/1738128632",
            duration: 5132181,
            originallyAvailableAt: "2024-12-29",
            addedAt: 1735522737,
            updatedAt: 1738995220,
            Media: [
              {
                id: 58415,
                duration: 5132181,
                bitrate: 9176,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 2,
                audioCodec: "aac",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "24p",
                audioProfile: "lc",
                videoProfile: "main",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 88474,
                    key: "/library/parts/88474/1735489698/file.mkv",
                    duration: 5132181,
                    file: "/TV Shows (Reality)/90 Day Fiancé - Before The 90 Days/Season 07/90 Day Fiancé - Before the 90 Days - S07E18 - Before We Say Goodbye WEBDL-1080p.mkv",
                    size: 5887912628,
                    audioProfile: "lc",
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "main",
                    Stream: [
                      {
                        id: 288168,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 9050,
                        bitDepth: 8,
                        chromaLocation: "left",
                        chromaSubsampling: "4:2:0",
                        codedHeight: 1088,
                        codedWidth: 1920,
                        frameRate: 23.976,
                        hasScalingMatrix: false,
                        height: 1080,
                        level: 40,
                        profile: "main",
                        refFrames: 4,
                        scanType: "progressive",
                        width: 1920,
                        displayTitle: "1080p",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 288169,
                        streamType: 2,
                        selected: true,
                        default: true,
                        codec: "aac",
                        index: 1,
                        channels: 2,
                        bitrate: 125,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        audioChannelLayout: "stereo",
                        profile: "lc",
                        samplingRate: 48000,
                        displayTitle: "English (AAC Stereo)",
                        extendedDisplayTitle: "English (AAC Stereo)"
                      },
                      {
                        id: 288170,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        displayTitle: "English",
                        extendedDisplayTitle: "English (SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Before We Say Goodbye",
                type: "coverPoster",
                url: "/library/metadata/29621/thumb/1738128632"
              },
              {
                alt: "Before We Say Goodbye",
                type: "snapshot",
                url: "/library/metadata/55586/thumb/1738995220"
              },
              {
                alt: "Before We Say Goodbye",
                type: "background",
                url: "/library/metadata/29621/art/1738128632"
              },
              {
                alt: "Before We Say Goodbye",
                type: "clearLogo",
                url: "/library/metadata/29621/clearLogo/1738128632"
              }
            ],
            UltraBlurColors: {
              topLeft: "17030a",
              topRight: "3d141f",
              bottomRight: "1a0407",
              bottomLeft: "3c1613"
            },
            Guid: [
              {
                id: "imdb://tt34905474"
              },
              {
                id: "tmdb://5838268"
              },
              {
                id: "tvdb://10856120"
              }
            ],
            Rating: [
              {
                image: "imdb://image.rating",
                value: 7.2,
                type: "audience"
              }
            ],
            Role: [
              {
                id: 321013,
                filter: "actor=321013",
                tag: "Loren Allen",
                tagKey: "5f3fb952bf3e560040af3efa",
                role: "Self"
              },
              {
                id: 321489,
                filter: "actor=321489",
                tag: "Vanja Grbic",
                tagKey: "675655a06b70a8f1a4a80c91",
                role: "Self"
              },
              {
                id: 321491,
                filter: "actor=321491",
                tag: "Faith Gatoc Tulod",
                tagKey: "6756559e6b70a8f1a4a80c87",
                role: "Self"
              },
              {
                id: 321492,
                filter: "actor=321492",
                tag: "Niles Valentine",
                tagKey: "6756559e34acc71bd2ac6880",
                role: "Self"
              }
            ]
          },
          {
            ratingKey: "55552",
            key: "/library/metadata/55552",
            parentRatingKey: "55006",
            grandparentRatingKey: "29621",
            guid: "plex://episode/674c58343f395c930032958d",
            parentGuid: "plex://season/66c3b6f87f6b3620cb902f6c",
            grandparentGuid: "plex://show/5d9c08daffd9ef001e99b8f5",
            grandparentSlug: "90-day-fiance-before-the-90-days",
            type: "episode",
            title: "The Choice",
            titleSort: "Choice",
            grandparentKey: "/library/metadata/29621",
            parentKey: "/library/metadata/55006",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "90 Day Fiancé: Before the 90 Days",
            parentTitle: "Season 7",
            contentRating: "TV-14",
            summary:
              "Vanja asks Josko if they are official. Loren's behavior pushes Faith away, possibly for good. Joe tries to win over Magda's mom after learning she knows about his past. Tigerlily takes a pregnancy test. Sunny shocks Veah with an ultimatum.",
            index: 17,
            parentIndex: 7,
            year: 2024,
            thumb: "/library/metadata/55552/thumb/1738995220",
            art: "/library/metadata/29621/art/1738128632",
            grandparentThumb: "/library/metadata/29621/thumb/1738128632",
            grandparentArt: "/library/metadata/29621/art/1738128632",
            duration: 5131797,
            originallyAvailableAt: "2024-12-22",
            addedAt: 1734917901,
            updatedAt: 1738995220,
            Media: [
              {
                id: 58361,
                duration: 5131797,
                bitrate: 8532,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 2,
                audioCodec: "aac",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "24p",
                audioProfile: "lc",
                videoProfile: "main",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 88419,
                    key: "/library/parts/88419/1734884339/file.mkv",
                    duration: 5131797,
                    file: "/TV Shows (Reality)/90 Day Fiancé - Before The 90 Days/Season 07/90 Day Fiancé - Before the 90 Days - S07E17 - The Choice WEBDL-1080p.mkv",
                    size: 5474695437,
                    audioProfile: "lc",
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "main",
                    Stream: [
                      {
                        id: 287477,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 8407,
                        bitDepth: 8,
                        chromaLocation: "left",
                        chromaSubsampling: "4:2:0",
                        codedHeight: 1088,
                        codedWidth: 1920,
                        frameRate: 23.976,
                        hasScalingMatrix: false,
                        height: 1080,
                        level: 40,
                        profile: "main",
                        refFrames: 4,
                        scanType: "progressive",
                        width: 1920,
                        displayTitle: "1080p",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 287478,
                        streamType: 2,
                        selected: true,
                        default: true,
                        codec: "aac",
                        index: 1,
                        channels: 2,
                        bitrate: 125,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        audioChannelLayout: "stereo",
                        profile: "lc",
                        samplingRate: 48000,
                        displayTitle: "English (AAC Stereo)",
                        extendedDisplayTitle: "English (AAC Stereo)"
                      },
                      {
                        id: 287479,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        displayTitle: "English",
                        extendedDisplayTitle: "English (SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "The Choice",
                type: "coverPoster",
                url: "/library/metadata/29621/thumb/1738128632"
              },
              {
                alt: "The Choice",
                type: "snapshot",
                url: "/library/metadata/55552/thumb/1738995220"
              },
              {
                alt: "The Choice",
                type: "background",
                url: "/library/metadata/29621/art/1738128632"
              },
              {
                alt: "The Choice",
                type: "clearLogo",
                url: "/library/metadata/29621/clearLogo/1738128632"
              }
            ],
            UltraBlurColors: {
              topLeft: "4a1f17",
              topRight: "323a78",
              bottomRight: "672d26",
              bottomLeft: "732b28"
            },
            Guid: [
              {
                id: "imdb://tt34791377"
              },
              {
                id: "tmdb://5802597"
              },
              {
                id: "tvdb://10835814"
              }
            ],
            Rating: [
              {
                image: "imdb://image.rating",
                value: 7.5,
                type: "audience"
              }
            ],
            Role: [
              {
                id: 321488,
                filter: "actor=321488",
                tag: "Tigerlily Abdelfattah",
                tagKey: "675655a080661d35c494df79",
                role: "Self"
              },
              {
                id: 321013,
                filter: "actor=321013",
                tag: "Loren Allen",
                tagKey: "5f3fb952bf3e560040af3efa",
                role: "Self"
              },
              {
                id: 321489,
                filter: "actor=321489",
                tag: "Vanja Grbic",
                tagKey: "675655a06b70a8f1a4a80c91",
                role: "Self"
              },
              {
                id: 321491,
                filter: "actor=321491",
                tag: "Faith Gatoc Tulod",
                tagKey: "6756559e6b70a8f1a4a80c87",
                role: "Self"
              }
            ]
          },
          {
            ratingKey: "55533",
            key: "/library/metadata/55533",
            parentRatingKey: "48068",
            grandparentRatingKey: "28641",
            guid: "plex://episode/639bbd29523de97608929879",
            parentGuid: "plex://season/639bbd12523de97608929854",
            grandparentGuid: "plex://show/5d9c086affd9ef001e994192",
            grandparentSlug: "dragons-den-1",
            type: "episode",
            title: "Episode 12",
            grandparentKey: "/library/metadata/28641",
            parentKey: "/library/metadata/48068",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "Dragons' Den",
            parentTitle: "Season 20",
            contentRating: "TV-PG",
            summary:
              "A wizard-inspired pair believe magical drinks and mini golf can cast a spell over the Dragons, and there’s a sweet pitch from chocolate makers who’ve spotted a gap in the market.",
            index: 12,
            parentIndex: 20,
            year: 2023,
            thumb: "/library/metadata/55533/thumb/1734721337",
            art: "/library/metadata/28641/art/1738995277",
            grandparentThumb: "/library/metadata/28641/thumb/1738995277",
            grandparentArt: "/library/metadata/28641/art/1738995277",
            grandparentTheme: "/library/metadata/28641/theme/1738995277",
            duration: 3535040,
            originallyAvailableAt: "2023-03-23",
            addedAt: 1734721330,
            updatedAt: 1734721337,
            Media: [
              {
                id: 58327,
                duration: 3535040,
                bitrate: 5528,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 2,
                audioCodec: "aac",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                audioProfile: "lc",
                videoProfile: "high",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 88235,
                    key: "/library/parts/88235/1708909442/file.mkv",
                    duration: 3535040,
                    file: "/TV Shows (Reality)/Dragons' Den/Season 20/Dragons' Den - S20E12 - Episode 12 WEBDL-1080p.mkv",
                    size: 2444696986,
                    audioProfile: "lc",
                    container: "mkv",
                    hasThumbnail: "1",
                    indexes: "sd",
                    videoProfile: "high",
                    Stream: [
                      {
                        id: 286810,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 1,
                        bitrate: 5400,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        bitDepth: 8,
                        chromaLocation: "left",
                        chromaSubsampling: "4:2:0",
                        codedHeight: 1088,
                        codedWidth: 1920,
                        colorPrimaries: "bt709",
                        colorRange: "tv",
                        colorSpace: "bt709",
                        colorTrc: "bt709",
                        frameRate: 50.0,
                        hasScalingMatrix: false,
                        height: 1080,
                        level: 42,
                        profile: "high",
                        refFrames: 4,
                        scanType: "progressive",
                        width: 1920,
                        displayTitle: "1080p",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 286809,
                        streamType: 2,
                        selected: true,
                        default: true,
                        codec: "aac",
                        index: 0,
                        channels: 2,
                        bitrate: 128,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        audioChannelLayout: "stereo",
                        profile: "lc",
                        samplingRate: 48000,
                        displayTitle: "English (AAC Stereo)",
                        extendedDisplayTitle: "English (AAC Stereo)"
                      },
                      {
                        id: 286811,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        title: "English plain srt",
                        displayTitle: "English",
                        extendedDisplayTitle: "English plain srt"
                      },
                      {
                        id: 286812,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 3,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        title: "English srt",
                        displayTitle: "English",
                        extendedDisplayTitle: "English srt"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Episode 12",
                type: "coverPoster",
                url: "/library/metadata/28641/thumb/1738995277"
              },
              {
                alt: "Episode 12",
                type: "snapshot",
                url: "/library/metadata/55533/thumb/1734721337"
              },
              {
                alt: "Episode 12",
                type: "background",
                url: "/library/metadata/28641/art/1738995277"
              },
              {
                alt: "Episode 12",
                type: "clearLogo",
                url: "/library/metadata/28641/clearLogo/1738995277"
              }
            ],
            UltraBlurColors: {
              topLeft: "182566",
              topRight: "200906",
              bottomRight: "2c3a94",
              bottomLeft: "454fa2"
            },
            Guid: [
              {
                id: "tvdb://9507974"
              }
            ]
          },
          {
            ratingKey: "55513",
            key: "/library/metadata/55513",
            parentRatingKey: "55092",
            grandparentRatingKey: "29690",
            guid: "local://55513",
            parentGuid: "plex://season/66ef41318693dbe3e33d8d91",
            grandparentGuid: "plex://show/5e1719012d4d84003e516eeb",
            grandparentSlug: "1000-lb-sisters",
            type: "episode",
            title: "Episode 10",
            grandparentKey: "/library/metadata/29690",
            parentKey: "/library/metadata/55092",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "1000-lb Sisters",
            parentTitle: "Season 6",
            contentRating: "TV-14",
            summary: "",
            index: 10,
            parentIndex: 6,
            thumb: "/library/metadata/55513/thumb/1734496878",
            art: "/library/metadata/29690/art/1736487886",
            grandparentThumb: "/library/metadata/29690/thumb/1736487886",
            grandparentArt: "/library/metadata/29690/art/1736487886",
            duration: 2647103,
            addedAt: 1734496870,
            updatedAt: 1734496878,
            Media: [
              {
                id: 58254,
                duration: 2647103,
                bitrate: 6872,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 2,
                audioCodec: "aac",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "24p",
                audioProfile: "lc",
                videoProfile: "main",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 88162,
                    key: "/library/parts/88162/1734496798/file.mkv",
                    duration: 2647103,
                    file: "/TV Shows (Reality)/1000-lb Sisters/Season 06/1000-lb Sisters - S06E10 - Nothing is Impastable WEBDL-1080p.mkv",
                    size: 2274574919,
                    audioProfile: "lc",
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "main",
                    Stream: [
                      {
                        id: 286158,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 6746,
                        bitDepth: 8,
                        chromaLocation: "left",
                        chromaSubsampling: "4:2:0",
                        codedHeight: 1088,
                        codedWidth: 1920,
                        frameRate: 23.976,
                        hasScalingMatrix: false,
                        height: 1080,
                        level: 40,
                        profile: "main",
                        refFrames: 4,
                        scanType: "progressive",
                        width: 1920,
                        displayTitle: "1080p",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 286159,
                        streamType: 2,
                        selected: true,
                        default: true,
                        codec: "aac",
                        index: 1,
                        channels: 2,
                        bitrate: 125,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        audioChannelLayout: "stereo",
                        profile: "lc",
                        samplingRate: 48000,
                        displayTitle: "English (AAC Stereo)",
                        extendedDisplayTitle: "English (AAC Stereo)"
                      },
                      {
                        id: 286160,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        displayTitle: "English",
                        extendedDisplayTitle: "English (SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Episode 10",
                type: "coverPoster",
                url: "/library/metadata/29690/thumb/1736487886"
              },
              {
                alt: "Episode 10",
                type: "snapshot",
                url: "/library/metadata/55513/thumb/1734496878"
              },
              {
                alt: "Episode 10",
                type: "background",
                url: "/library/metadata/29690/art/1736487886"
              },
              {
                alt: "Episode 10",
                type: "clearLogo",
                url: "/library/metadata/29690/clearLogo/1736487886"
              }
            ],
            UltraBlurColors: {
              topLeft: "4c1d1b",
              topRight: "1a151b",
              bottomRight: "0a0706",
              bottomLeft: "331012"
            }
          },
          {
            ratingKey: "55498",
            key: "/library/metadata/55498",
            parentRatingKey: "55006",
            grandparentRatingKey: "29621",
            guid: "plex://episode/67488d6a6d0f22cf085f7773",
            parentGuid: "plex://season/66c3b6f87f6b3620cb902f6c",
            grandparentGuid: "plex://show/5d9c08daffd9ef001e99b8f5",
            grandparentSlug: "90-day-fiance-before-the-90-days",
            type: "episode",
            title: "The Razor's Edge",
            titleSort: "Razor's Edge",
            grandparentKey: "/library/metadata/29621",
            parentKey: "/library/metadata/55006",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "90 Day Fiancé: Before the 90 Days",
            parentTitle: "Season 7",
            contentRating: "TV-14",
            summary:
              "Brian and Ingrid share an emotional goodbye. Loren and Faith make some big decisions. Mr. Arc is Nile's last hope to make his wedding happen. Tigerlily tries to impress Adnan's family. Veah meets Sunny's father and Sunny's worst fears come true.",
            index: 16,
            parentIndex: 7,
            year: 2024,
            thumb: "/library/metadata/55498/thumb/1738995218",
            art: "/library/metadata/29621/art/1738128632",
            grandparentThumb: "/library/metadata/29621/thumb/1738128632",
            grandparentArt: "/library/metadata/29621/art/1738128632",
            duration: 5131796,
            originallyAvailableAt: "2024-12-15",
            addedAt: 1734313590,
            updatedAt: 1738995218,
            Media: [
              {
                id: 58233,
                duration: 5131796,
                bitrate: 8470,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 2,
                audioCodec: "aac",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "24p",
                audioProfile: "lc",
                videoProfile: "main",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 88141,
                    key: "/library/parts/88141/1734313490/file.mkv",
                    duration: 5131796,
                    file: "/TV Shows (Reality)/90 Day Fiancé - Before The 90 Days/Season 07/90 Day Fiancé - Before the 90 Days - S07E16 - The Razor's Edge WEBDL-1080p.mkv",
                    size: 5434831924,
                    audioProfile: "lc",
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "main",
                    Stream: [
                      {
                        id: 286097,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 8344,
                        bitDepth: 8,
                        chromaLocation: "left",
                        chromaSubsampling: "4:2:0",
                        codedHeight: 1088,
                        codedWidth: 1920,
                        frameRate: 23.976,
                        hasScalingMatrix: false,
                        height: 1080,
                        level: 40,
                        profile: "main",
                        refFrames: 4,
                        scanType: "progressive",
                        width: 1920,
                        displayTitle: "1080p",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 286098,
                        streamType: 2,
                        selected: true,
                        default: true,
                        codec: "aac",
                        index: 1,
                        channels: 2,
                        bitrate: 125,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        audioChannelLayout: "stereo",
                        profile: "lc",
                        samplingRate: 48000,
                        displayTitle: "English (AAC Stereo)",
                        extendedDisplayTitle: "English (AAC Stereo)"
                      },
                      {
                        id: 286099,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        displayTitle: "English",
                        extendedDisplayTitle: "English (SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "The Razor's Edge",
                type: "coverPoster",
                url: "/library/metadata/29621/thumb/1738128632"
              },
              {
                alt: "The Razor's Edge",
                type: "snapshot",
                url: "/library/metadata/55498/thumb/1738995218"
              },
              {
                alt: "The Razor's Edge",
                type: "background",
                url: "/library/metadata/29621/art/1738128632"
              },
              {
                alt: "The Razor's Edge",
                type: "clearLogo",
                url: "/library/metadata/29621/clearLogo/1738128632"
              }
            ],
            UltraBlurColors: {
              topLeft: "0b2273",
              topRight: "4f47c0",
              bottomRight: "ac1043",
              bottomLeft: "2c100a"
            },
            Guid: [
              {
                id: "imdb://tt34769682"
              },
              {
                id: "tmdb://5802596"
              },
              {
                id: "tvdb://10835813"
              }
            ],
            Rating: [
              {
                image: "imdb://image.rating",
                value: 7.5,
                type: "audience"
              }
            ],
            Role: [
              {
                id: 321488,
                filter: "actor=321488",
                tag: "Tigerlily Abdelfattah",
                tagKey: "675655a080661d35c494df79",
                role: "Self"
              },
              {
                id: 321013,
                filter: "actor=321013",
                tag: "Loren Allen",
                tagKey: "5f3fb952bf3e560040af3efa",
                role: "Self"
              },
              {
                id: 321491,
                filter: "actor=321491",
                tag: "Faith Gatoc Tulod",
                tagKey: "6756559e6b70a8f1a4a80c87",
                role: "Self"
              },
              {
                id: 321492,
                filter: "actor=321492",
                tag: "Niles Valentine",
                tagKey: "6756559e34acc71bd2ac6880",
                role: "Self"
              }
            ]
          },
          {
            ratingKey: "55475",
            key: "/library/metadata/55475",
            parentRatingKey: "54843",
            grandparentRatingKey: "27613",
            guid: "plex://episode/669f52685c2579875eec6728",
            parentGuid: "plex://season/6659055ddd27970dd48c1b7d",
            grandparentGuid: "plex://show/5d9c09240aaccd001f8f45b3",
            grandparentSlug: "90-day-fiance-the-other-way",
            type: "episode",
            title: "Much Ado About Everything",
            grandparentKey: "/library/metadata/27613",
            parentKey: "/library/metadata/54843",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "90 Day Fiancé: The Other Way",
            parentTitle: "Season 6",
            contentRating: "TV-14",
            summary:
              "Joanne reveals the truth to her mom before leaving for Ireland. James and Tatha end up in tears when things get lost in translation. Lily's sister presses Josh on his lack of income. Statler and Dempsey face a frigid first night in their van.",
            index: 8,
            parentIndex: 6,
            year: 2024,
            thumb: "/library/metadata/55475/thumb/1733920575",
            art: "/library/metadata/27613/art/1737869748",
            grandparentThumb: "/library/metadata/27613/thumb/1737869748",
            grandparentArt: "/library/metadata/27613/art/1737869748",
            duration: 2558013,
            originallyAvailableAt: "2024-08-19",
            addedAt: 1733920563,
            updatedAt: 1733920575,
            Media: [
              {
                id: 58205,
                duration: 2558013,
                bitrate: 9988,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 2,
                audioCodec: "eac3",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "24p",
                videoProfile: "high",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 88113,
                    key: "/library/parts/88113/1733920528/file.mkv",
                    duration: 2558013,
                    file: "/TV Shows (Reality)/90 Day Fiancé - The Other Way/Season 06/90 Day Fiancé - The Other Way - S06E08 - Much Ado About Everything WEBDL-1080p.mkv",
                    size: 3194306511,
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "high",
                    Stream: [
                      {
                        id: 285984,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 9764,
                        bitDepth: 8,
                        chromaLocation: "left",
                        chromaSubsampling: "4:2:0",
                        codedHeight: 1088,
                        codedWidth: 1920,
                        colorPrimaries: "bt709",
                        colorRange: "tv",
                        colorSpace: "bt709",
                        colorTrc: "bt709",
                        frameRate: 23.976,
                        hasScalingMatrix: false,
                        height: 1080,
                        level: 40,
                        profile: "high",
                        refFrames: 4,
                        scanType: "progressive",
                        width: 1920,
                        displayTitle: "1080p",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 285985,
                        streamType: 2,
                        selected: true,
                        default: true,
                        codec: "eac3",
                        index: 1,
                        channels: 2,
                        bitrate: 224,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        audioChannelLayout: "stereo",
                        samplingRate: 48000,
                        displayTitle: "English (EAC3 Stereo)",
                        extendedDisplayTitle: "English (EAC3 Stereo)"
                      },
                      {
                        id: 285986,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        displayTitle: "English",
                        extendedDisplayTitle: "English (SRT)"
                      },
                      {
                        id: 285987,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 3,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        hearingImpaired: true,
                        title: "SDH",
                        displayTitle: "English SDH",
                        extendedDisplayTitle: "SDH (English SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Much Ado About Everything",
                type: "coverPoster",
                url: "/library/metadata/27613/thumb/1737869748"
              },
              {
                alt: "Much Ado About Everything",
                type: "snapshot",
                url: "/library/metadata/55475/thumb/1733920575"
              },
              {
                alt: "Much Ado About Everything",
                type: "background",
                url: "/library/metadata/27613/art/1737869748"
              },
              {
                alt: "Much Ado About Everything",
                type: "clearLogo",
                url: "/library/metadata/27613/clearLogo/1737869748"
              }
            ],
            UltraBlurColors: {
              topLeft: "4b1e16",
              topRight: "31372f",
              bottomRight: "9f3039",
              bottomLeft: "8e3b47"
            },
            Guid: [
              {
                id: "imdb://tt33007852"
              },
              {
                id: "tmdb://5504890"
              },
              {
                id: "tvdb://10599227"
              }
            ],
            Rating: [
              {
                image: "imdb://image.rating",
                value: 6.4,
                type: "audience"
              }
            ],
            Role: [
              {
                id: 321423,
                filter: "actor=321423",
                tag: "Corona Blakey",
                tagKey: "67548d3cf1d144a2a41843cb",
                role: "Self"
              },
              {
                id: 321430,
                filter: "actor=321430",
                tag: "Joanne DiGesu",
                tagKey: "67548d3c7f1113c796598627",
                role: "Self"
              },
              {
                id: 321429,
                filter: "actor=321429",
                tag: "Ingi Hilmar",
                tagKey: "67548d3cda483fdd763a91f5",
                role: "Self"
              },
              {
                id: 321424,
                filter: "actor=321424",
                tag: "Lily Huang",
                tagKey: "67548d3d28632801215dd6bf",
                role: "Self"
              },
              {
                id: 321425,
                filter: "actor=321425",
                tag: "Josh McGuffey",
                tagKey: "67548d3cf1cbf397f499f5fa",
                role: "Self"
              },
              {
                id: 296583,
                filter: "actor=296583",
                tag: "Statler Riley",
                tagKey: "651fcb7d83d5dcad27c8eded",
                role: "Self"
              },
              {
                id: 321426,
                filter: "actor=321426",
                tag: "James Solis",
                tagKey: "67548d3d7f5b18211a53c43d",
                role: "Self"
              },
              {
                id: 321427,
                filter: "actor=321427",
                tag: "Meitalia Tantri Solis",
                tagKey: "67548d3cf1cbf397f499f5f8",
                role: "Self"
              },
              {
                id: 321428,
                filter: "actor=321428",
                tag: "Dempsey Wilkinson",
                tagKey: "651fcb7d67a554c14320af1d",
                role: "Self"
              }
            ],
            Producer: [
              {
                id: 317625,
                filter: "producer=317625",
                tag: "Guilad Kahn",
                tagKey: "5dce6b078318f0001ff9e473"
              }
            ]
          },
          {
            ratingKey: "55474",
            key: "/library/metadata/55474",
            parentRatingKey: "55116",
            grandparentRatingKey: "39873",
            guid: "plex://episode/673f271aac744d906b8f9869",
            parentGuid: "plex://season/67017455ecd8889ab842fbcc",
            grandparentGuid: "plex://show/5d9c083308fddd001f294fb3",
            grandparentSlug: "ink-master",
            type: "episode",
            title: "OGs vs Young Gun",
            grandparentKey: "/library/metadata/39873",
            parentKey: "/library/metadata/55116",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "Ink Master",
            parentTitle: "Season 16",
            contentRating: "TV-14",
            summary:
              "The 3 Finalists reveal their Master Canvas tattoos Familiar faces return in a final twist, and an unexpected surprise leaves the Artists in tears. One Artist will win $250,000 and the title of Ink Master.",
            index: 10,
            parentIndex: 16,
            year: 2024,
            thumb: "/library/metadata/55474/thumb/1734151394",
            art: "/library/metadata/39873/art/1737085931",
            parentThumb: "/library/metadata/55116/thumb/1733030802",
            grandparentThumb: "/library/metadata/39873/thumb/1737085931",
            grandparentArt: "/library/metadata/39873/art/1737085931",
            grandparentTheme: "/library/metadata/39873/theme/1737085931",
            duration: 2670688,
            originallyAvailableAt: "2024-12-11",
            addedAt: 1733901979,
            updatedAt: 1734151394,
            Media: [
              {
                id: 58204,
                duration: 2670688,
                bitrate: 8033,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 2,
                audioCodec: "eac3",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "24p",
                videoProfile: "high",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 88112,
                    key: "/library/parts/88112/1733868902/file.mkv",
                    duration: 2670688,
                    file: "/TV Shows (Reality)/Ink Master/Season 16/Ink Master - S16E10 - Episode 10 WEBDL-1080p.mkv",
                    size: 2682233993,
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "high",
                    Stream: [
                      {
                        id: 285981,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 7808,
                        bitDepth: 8,
                        chromaLocation: "left",
                        chromaSubsampling: "4:2:0",
                        codedHeight: 1088,
                        codedWidth: 1920,
                        colorPrimaries: "bt709",
                        colorRange: "tv",
                        colorSpace: "bt709",
                        colorTrc: "bt709",
                        frameRate: 23.976,
                        hasScalingMatrix: false,
                        height: 1080,
                        level: 40,
                        profile: "high",
                        refFrames: 4,
                        scanType: "progressive",
                        width: 1920,
                        displayTitle: "1080p",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 285982,
                        streamType: 2,
                        selected: true,
                        default: true,
                        codec: "eac3",
                        index: 1,
                        channels: 2,
                        bitrate: 224,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        audioChannelLayout: "stereo",
                        samplingRate: 48000,
                        displayTitle: "English (EAC3 Stereo)",
                        extendedDisplayTitle: "English (EAC3 Stereo)"
                      },
                      {
                        id: 285983,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        title: "English (SDH)",
                        displayTitle: "English",
                        extendedDisplayTitle: "English (SDH) (SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "OGs vs Young Gun",
                type: "coverPoster",
                url: "/library/metadata/55116/thumb/1733030802"
              },
              {
                alt: "OGs vs Young Gun",
                type: "snapshot",
                url: "/library/metadata/55474/thumb/1734151394"
              },
              {
                alt: "OGs vs Young Gun",
                type: "background",
                url: "/library/metadata/39873/art/1737085931"
              },
              {
                alt: "OGs vs Young Gun",
                type: "clearLogo",
                url: "/library/metadata/39873/clearLogo/1737085931"
              }
            ],
            UltraBlurColors: {
              topLeft: "142d53",
              topRight: "0a2353",
              bottomRight: "933e49",
              bottomLeft: "9e3528"
            },
            Guid: [
              {
                id: "tmdb://5774720"
              },
              {
                id: "tvdb://10730490"
              }
            ],
            Role: [
              {
                id: 301229,
                filter: "actor=301229",
                tag: "Joel Madden",
                tagKey: "5d77689dad5437001f74ad78",
                role: "Self - Host",
                thumb:
                  "https://metadata-static.plex.tv/c/people/c3bf5cd6a2c7e89f338bb9d91b35443a.jpg"
              }
            ]
          },
          {
            ratingKey: "55473",
            key: "/library/metadata/55473",
            parentRatingKey: "55092",
            grandparentRatingKey: "29690",
            guid: "plex://episode/673f47e6df4a55d416b00849",
            parentGuid: "plex://season/66ef41318693dbe3e33d8d91",
            grandparentGuid: "plex://show/5e1719012d4d84003e516eeb",
            grandparentSlug: "1000-lb-sisters",
            type: "episode",
            title: "Bangers and Clash",
            grandparentKey: "/library/metadata/29690",
            parentKey: "/library/metadata/55092",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "1000-lb Sisters",
            parentTitle: "Season 6",
            contentRating: "TV-14",
            summary:
              "The family arrives in London for their first international vacation and learns even more surprising news about their ancestry. Tammy is pushed to her physical limits and a major meltdown puts the rest of the trip in jeopardy.",
            index: 9,
            parentIndex: 6,
            year: 2024,
            thumb: "/library/metadata/55473/thumb/1734496876",
            art: "/library/metadata/29690/art/1736487886",
            grandparentThumb: "/library/metadata/29690/thumb/1736487886",
            grandparentArt: "/library/metadata/29690/art/1736487886",
            duration: 2851178,
            originallyAvailableAt: "2024-12-10",
            addedAt: 1733888926,
            updatedAt: 1734496876,
            Media: [
              {
                id: 58203,
                duration: 2851178,
                bitrate: 9343,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 2,
                audioCodec: "aac",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "24p",
                audioProfile: "lc",
                videoProfile: "main",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 88111,
                    key: "/library/parts/88111/1733886760/file.mkv",
                    duration: 2851178,
                    file: "/TV Shows (Reality)/1000-lb Sisters/Season 06/1000-lb Sisters - S06E09 - Bangers and Clash WEBDL-1080p.mkv",
                    size: 3330746893,
                    audioProfile: "lc",
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "main",
                    Stream: [
                      {
                        id: 285978,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 9218,
                        bitDepth: 8,
                        chromaLocation: "left",
                        chromaSubsampling: "4:2:0",
                        codedHeight: 1088,
                        codedWidth: 1920,
                        frameRate: 23.976,
                        hasScalingMatrix: false,
                        height: 1080,
                        level: 40,
                        profile: "main",
                        refFrames: 4,
                        scanType: "progressive",
                        width: 1920,
                        displayTitle: "1080p",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 285979,
                        streamType: 2,
                        selected: true,
                        default: true,
                        codec: "aac",
                        index: 1,
                        channels: 2,
                        bitrate: 125,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        audioChannelLayout: "stereo",
                        profile: "lc",
                        samplingRate: 48000,
                        displayTitle: "English (AAC Stereo)",
                        extendedDisplayTitle: "English (AAC Stereo)"
                      },
                      {
                        id: 285980,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        displayTitle: "English",
                        extendedDisplayTitle: "English (SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Bangers and Clash",
                type: "coverPoster",
                url: "/library/metadata/29690/thumb/1736487886"
              },
              {
                alt: "Bangers and Clash",
                type: "snapshot",
                url: "/library/metadata/55473/thumb/1734496876"
              },
              {
                alt: "Bangers and Clash",
                type: "background",
                url: "/library/metadata/29690/art/1736487886"
              },
              {
                alt: "Bangers and Clash",
                type: "clearLogo",
                url: "/library/metadata/29690/clearLogo/1736487886"
              }
            ],
            UltraBlurColors: {
              topLeft: "432511",
              topRight: "181003",
              bottomRight: "2e401d",
              bottomLeft: "533318"
            },
            Guid: [
              {
                id: "imdb://tt34603446"
              },
              {
                id: "tmdb://5824944"
              },
              {
                id: "tvdb://10837997"
              }
            ],
            Rating: [
              {
                image: "imdb://image.rating",
                value: 7.4,
                type: "audience"
              }
            ],
            Role: [
              {
                id: 194244,
                filter: "actor=194244",
                tag: "Amy Slaton",
                tagKey: "60a7dbe45bde57002c2991f1",
                role: "Self"
              },
              {
                id: 194245,
                filter: "actor=194245",
                tag: "Tammy Slaton",
                tagKey: "60a7dbe45bde57002c2991f2",
                role: "Self"
              }
            ],
            Producer: [
              {
                id: 317670,
                filter: "producer=317670",
                tag: "Neil Bowman",
                tagKey: "5f3fe60dfea1a1003f99969d"
              }
            ]
          },
          {
            ratingKey: "55456",
            key: "/library/metadata/55456",
            parentRatingKey: "55006",
            grandparentRatingKey: "29621",
            guid: "plex://episode/673db15b12d044a6eeb7e7ad",
            parentGuid: "plex://season/66c3b6f87f6b3620cb902f6c",
            grandparentGuid: "plex://show/5d9c08daffd9ef001e99b8f5",
            grandparentSlug: "90-day-fiance-before-the-90-days",
            type: "episode",
            title: "The Call Of The Wild",
            titleSort: "Call Of The Wild",
            grandparentKey: "/library/metadata/29621",
            parentKey: "/library/metadata/55006",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "90 Day Fiancé: Before the 90 Days",
            parentTitle: "Season 7",
            originalTitle: "The Call of the Wild",
            contentRating: "TV-14",
            summary:
              "Vanja is single and ready to mingle! Brian makes big accusations against Ingrid. Sunny and Rory try to make peace. Magda accuses Joe of going back on his word. Niles calls his parents to tell them about the wedding. Loren is in hot water with Faith.",
            index: 15,
            parentIndex: 7,
            year: 2024,
            thumb: "/library/metadata/55456/thumb/1738995218",
            art: "/library/metadata/29621/art/1738128632",
            grandparentThumb: "/library/metadata/29621/thumb/1738128632",
            grandparentArt: "/library/metadata/29621/art/1738128632",
            duration: 5131605,
            originallyAvailableAt: "2024-12-08",
            addedAt: 1733709236,
            updatedAt: 1738995218,
            Media: [
              {
                id: 58185,
                duration: 5131605,
                bitrate: 7089,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 2,
                audioCodec: "aac",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "NTSC",
                audioProfile: "lc",
                videoProfile: "main",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 88052,
                    key: "/library/parts/88052/1733709109/file.mkv",
                    duration: 5131605,
                    file: "/TV Shows (Reality)/90 Day Fiancé - Before The 90 Days/Season 07/90 Day Fiancé - Before the 90 Days - S07E15 - The Call Of The Wild WEBDL-1080p.mkv",
                    size: 4549227685,
                    audioProfile: "lc",
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "main",
                    Stream: [
                      {
                        id: 285687,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 6964,
                        bitDepth: 8,
                        chromaLocation: "left",
                        chromaSubsampling: "4:2:0",
                        codedHeight: 1088,
                        codedWidth: 1920,
                        frameRate: 29.97,
                        hasScalingMatrix: false,
                        height: 1080,
                        level: 40,
                        profile: "main",
                        refFrames: 4,
                        scanType: "progressive",
                        width: 1920,
                        displayTitle: "1080p",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 285688,
                        streamType: 2,
                        selected: true,
                        default: true,
                        codec: "aac",
                        index: 1,
                        channels: 2,
                        bitrate: 125,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        audioChannelLayout: "stereo",
                        profile: "lc",
                        samplingRate: 48000,
                        displayTitle: "English (AAC Stereo)",
                        extendedDisplayTitle: "English (AAC Stereo)"
                      },
                      {
                        id: 285689,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        displayTitle: "English",
                        extendedDisplayTitle: "English (SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "The Call Of The Wild",
                type: "coverPoster",
                url: "/library/metadata/29621/thumb/1738128632"
              },
              {
                alt: "The Call Of The Wild",
                type: "snapshot",
                url: "/library/metadata/55456/thumb/1738995218"
              },
              {
                alt: "The Call Of The Wild",
                type: "background",
                url: "/library/metadata/29621/art/1738128632"
              },
              {
                alt: "The Call Of The Wild",
                type: "clearLogo",
                url: "/library/metadata/29621/clearLogo/1738128632"
              }
            ],
            UltraBlurColors: {
              topLeft: "11333a",
              topRight: "933d4c",
              bottomRight: "7a252b",
              bottomLeft: "744d26"
            },
            Guid: [
              {
                id: "imdb://tt34622787"
              },
              {
                id: "tmdb://5766874"
              },
              {
                id: "tvdb://10823892"
              }
            ],
            Rating: [
              {
                image: "imdb://image.rating",
                value: 8.2,
                type: "audience"
              }
            ],
            Role: [
              {
                id: 321013,
                filter: "actor=321013",
                tag: "Loren Allen",
                tagKey: "5f3fb952bf3e560040af3efa",
                role: "Self"
              },
              {
                id: 321489,
                filter: "actor=321489",
                tag: "Vanja Grbic",
                tagKey: "675655a06b70a8f1a4a80c91",
                role: "Self"
              },
              {
                id: 321491,
                filter: "actor=321491",
                tag: "Faith Gatoc Tulod",
                tagKey: "6756559e6b70a8f1a4a80c87",
                role: "Self"
              },
              {
                id: 321492,
                filter: "actor=321492",
                tag: "Niles Valentine",
                tagKey: "6756559e34acc71bd2ac6880",
                role: "Self"
              }
            ]
          },
          {
            ratingKey: "55452",
            key: "/library/metadata/55452",
            parentRatingKey: "55071",
            grandparentRatingKey: "30009",
            guid: "plex://episode/673cab699f7318c38aa5eb05",
            parentGuid: "plex://season/6697ba330f4923e3427c9f39",
            grandparentGuid: "plex://show/5d9c0874705e7a001e6ddc85",
            grandparentSlug: "hells-kitchen-us",
            type: "episode",
            title: "A Sticky Situation",
            titleSort: "Sticky Situation",
            grandparentKey: "/library/metadata/30009",
            parentKey: "/library/metadata/55071",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "Hell's Kitchen (US)",
            parentTitle: "Season 23",
            contentRating: "TV-14",
            summary:
              "The chefs face a blind taste test; in a special dinner service, both teams must prove they have what it takes to stay in the competition.",
            index: 10,
            parentIndex: 23,
            audienceRating: 7.0,
            year: 2024,
            thumb: "/library/metadata/55452/thumb/1737260344",
            art: "/library/metadata/30009/art/1738995285",
            grandparentThumb: "/library/metadata/30009/thumb/1738995285",
            grandparentArt: "/library/metadata/30009/art/1738995285",
            grandparentTheme: "/library/metadata/30009/theme/1738995285",
            duration: 2591989,
            originallyAvailableAt: "2024-12-05",
            addedAt: 1733465248,
            updatedAt: 1737260344,
            audienceRatingImage: "themoviedb://image.rating",
            chapterSource: "media",
            Media: [
              {
                id: 58180,
                duration: 2591989,
                bitrate: 10384,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 6,
                audioCodec: "eac3",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "NTSC",
                videoProfile: "high",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 88047,
                    key: "/library/parts/88047/1733465196/file.mkv",
                    duration: 2591989,
                    file: "/TV Shows (Reality)/Gordan Ramsay - Hells Kitchen US/Season 23/Hell's Kitchen (US) - S23E10 - A Sticky Situation WEBDL-1080p.mkv",
                    size: 3365442980,
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "high",
                    Stream: [
                      {
                        id: 285672,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 9744,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        bitDepth: 8,
                        chromaLocation: "left",
                        chromaSubsampling: "4:2:0",
                        codedHeight: 1088,
                        codedWidth: 1920,
                        colorPrimaries: "bt709",
                        colorRange: "tv",
                        colorSpace: "bt709",
                        colorTrc: "bt709",
                        frameRate: 29.97,
                        hasScalingMatrix: false,
                        height: 1080,
                        level: 40,
                        original: true,
                        profile: "high",
                        refFrames: 4,
                        scanType: "progressive",
                        width: 1920,
                        displayTitle: "1080p",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 285673,
                        streamType: 2,
                        selected: true,
                        default: true,
                        codec: "eac3",
                        index: 1,
                        channels: 6,
                        bitrate: 640,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        audioChannelLayout: "5.1(side)",
                        original: true,
                        samplingRate: 48000,
                        displayTitle: "English (EAC3 5.1)",
                        extendedDisplayTitle: "English (EAC3 5.1)"
                      },
                      {
                        id: 285674,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        original: true,
                        displayTitle: "English",
                        extendedDisplayTitle: "English (SRT)"
                      },
                      {
                        id: 285675,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 3,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        hearingImpaired: true,
                        original: true,
                        title: "SDH",
                        displayTitle: "English SDH",
                        extendedDisplayTitle: "SDH (English SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "A Sticky Situation",
                type: "coverPoster",
                url: "/library/metadata/30009/thumb/1738995285"
              },
              {
                alt: "A Sticky Situation",
                type: "snapshot",
                url: "/library/metadata/55452/thumb/1737260344"
              },
              {
                alt: "A Sticky Situation",
                type: "background",
                url: "/library/metadata/30009/art/1738995285"
              },
              {
                alt: "A Sticky Situation",
                type: "clearLogo",
                url: "/library/metadata/30009/clearLogo/1738995285"
              }
            ],
            UltraBlurColors: {
              topLeft: "1b2467",
              topRight: "3c111b",
              bottomRight: "42161e",
              bottomLeft: "211d4e"
            },
            Guid: [
              {
                id: "imdb://tt34723107"
              },
              {
                id: "tmdb://5767861"
              },
              {
                id: "tvdb://10831650"
              }
            ],
            Rating: [
              {
                image: "imdb://image.rating",
                value: 7.5,
                type: "audience"
              },
              {
                image: "themoviedb://image.rating",
                value: 7.0,
                type: "audience"
              }
            ],
            Role: [
              {
                id: 106830,
                filter: "actor=106830",
                tag: "Gordon Ramsay",
                tagKey: "5d7768aa374a5b001fecc9c4",
                role: "Self - Chef",
                thumb:
                  "https://metadata-static.plex.tv/d/people/dd20a681247c97c89d9aa32747028ba3.jpg"
              },
              {
                id: 194259,
                filter: "actor=194259",
                tag: "James Avery",
                tagKey: "6233480e2e411962942d1edd",
                role: "Self - Sous Chef"
              },
              {
                id: 216200,
                filter: "actor=216200",
                tag: "Marino Monferrato",
                tagKey: "644d077c7b10820176a91641",
                role: "Self - Maître D'",
                thumb:
                  "https://metadata-static.plex.tv/7/people/79dba3a86ae936fe2f070439e364a4ea.jpg"
              },
              {
                id: 228469,
                filter: "actor=228469",
                tag: "Michelle Tribble",
                tagKey: "64da17c5fb911c69374a96a6",
                role: "Self - Sous Chef"
              },
              {
                id: 123116,
                filter: "actor=123116",
                tag: "Penn Jillette",
                tagKey: "5d776828880197001ec90e7e",
                role: "Self - Restaurant Patron",
                thumb:
                  "https://metadata-static.plex.tv/a/people/a4bcaa8de644336313d01cde55e71f96.jpg"
              },
              {
                id: 126522,
                filter: "actor=126522",
                tag: "Teller",
                tagKey: "5d77683d85719b001f3a535e",
                role: "Self - Restaurant Patron",
                thumb:
                  "https://metadata-static.plex.tv/7/people/708568fd018d7aa8b1032dcf867747e8.jpg"
              },
              {
                id: 325336,
                filter: "actor=325336",
                tag: "Lamar Odom",
                tagKey: "5d77683e85719b001f3a5565",
                role: "Self - Restaurant Patron",
                thumb:
                  "https://metadata-static.plex.tv/people/5d77683e85719b001f3a5565.jpg"
              }
            ],
            Producer: [
              {
                id: 317407,
                filter: "producer=317407",
                tag: "Gautam Badgujar",
                tagKey: "5f402bd086422500428408d1"
              },
              {
                id: 317408,
                filter: "producer=317408",
                tag: "Ashley Callirgos",
                tagKey: "6538cdd3079d385acb2a6985"
              },
              {
                id: 317409,
                filter: "producer=317409",
                tag: "Rob Dodd",
                tagKey: "5d776cbcf617c90020184b82"
              },
              {
                id: 317410,
                filter: "producer=317410",
                tag: "Michael Leavitt",
                tagKey: "5f404171cae2c60042f34c34"
              },
              {
                id: 317411,
                filter: "producer=317411",
                tag: "Tahjanae Montgomery",
                tagKey: "670134552674d7c225455bc5"
              },
              {
                id: 317412,
                filter: "producer=317412",
                tag: "Jeffrey Pakosta",
                tagKey: "5d776aa67a53e9001e70b5f0"
              },
              {
                id: 317413,
                filter: "producer=317413",
                tag: "Gina Gonzalez Scallon",
                tagKey: "60c31a199a32d6002c9b1986"
              },
              {
                id: 317414,
                filter: "producer=317414",
                tag: "Heather Rose Wagner",
                tagKey: "5f3fe318ce2564003f880326"
              }
            ]
          },
          {
            ratingKey: "55437",
            key: "/library/metadata/55437",
            parentRatingKey: "55116",
            grandparentRatingKey: "39873",
            guid: "plex://episode/673f271bac744d906b8f986b",
            parentGuid: "plex://season/67017455ecd8889ab842fbcc",
            grandparentGuid: "plex://show/5d9c083308fddd001f294fb3",
            grandparentSlug: "ink-master",
            type: "episode",
            title: "Mash Up Mayhem",
            grandparentKey: "/library/metadata/39873",
            parentKey: "/library/metadata/55116",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "Ink Master",
            parentTitle: "Season 16",
            contentRating: "TV-14",
            summary:
              "In the epic fight to the finale, the final five Artists battle it out with mash up tattoos. A jaw-dropping twist puts their versatility to the test. Who will be the last three artists standing in the Ink Master Finale?",
            index: 9,
            parentIndex: 16,
            year: 2024,
            thumb: "/library/metadata/55437/thumb/1733633579",
            art: "/library/metadata/39873/art/1737085931",
            parentThumb: "/library/metadata/55116/thumb/1733030802",
            grandparentThumb: "/library/metadata/39873/thumb/1737085931",
            grandparentArt: "/library/metadata/39873/art/1737085931",
            grandparentTheme: "/library/metadata/39873/theme/1737085931",
            duration: 2677088,
            originallyAvailableAt: "2024-12-04",
            addedAt: 1733297624,
            updatedAt: 1733633579,
            Media: [
              {
                id: 58166,
                duration: 2677088,
                bitrate: 7506,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 2,
                audioCodec: "eac3",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "24p",
                videoProfile: "high",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 88033,
                    key: "/library/parts/88033/1733264188/file.mkv",
                    duration: 2677088,
                    file: "/TV Shows (Reality)/Ink Master/Season 16/Ink Master - S16E09 - Episode 9 WEBDL-1080p.mkv",
                    size: 2512365557,
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "high",
                    Stream: [
                      {
                        id: 285596,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 7282,
                        bitDepth: 8,
                        chromaLocation: "left",
                        chromaSubsampling: "4:2:0",
                        codedHeight: 1088,
                        codedWidth: 1920,
                        colorPrimaries: "bt709",
                        colorRange: "tv",
                        colorSpace: "bt709",
                        colorTrc: "bt709",
                        frameRate: 23.976,
                        hasScalingMatrix: false,
                        height: 1080,
                        level: 40,
                        profile: "high",
                        refFrames: 4,
                        scanType: "progressive",
                        width: 1920,
                        displayTitle: "1080p",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 285597,
                        streamType: 2,
                        selected: true,
                        default: true,
                        codec: "eac3",
                        index: 1,
                        channels: 2,
                        bitrate: 224,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        audioChannelLayout: "stereo",
                        samplingRate: 48000,
                        displayTitle: "English (EAC3 Stereo)",
                        extendedDisplayTitle: "English (EAC3 Stereo)"
                      },
                      {
                        id: 285598,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        title: "English (SDH)",
                        displayTitle: "English",
                        extendedDisplayTitle: "English (SDH) (SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Mash Up Mayhem",
                type: "coverPoster",
                url: "/library/metadata/55116/thumb/1733030802"
              },
              {
                alt: "Mash Up Mayhem",
                type: "snapshot",
                url: "/library/metadata/55437/thumb/1733633579"
              },
              {
                alt: "Mash Up Mayhem",
                type: "background",
                url: "/library/metadata/39873/art/1737085931"
              },
              {
                alt: "Mash Up Mayhem",
                type: "clearLogo",
                url: "/library/metadata/39873/clearLogo/1737085931"
              }
            ],
            UltraBlurColors: {
              topLeft: "1d2a55",
              topRight: "653220",
              bottomRight: "98364e",
              bottomLeft: "3a1536"
            },
            Guid: [
              {
                id: "tmdb://5774719"
              },
              {
                id: "tvdb://10730489"
              }
            ],
            Role: [
              {
                id: 301229,
                filter: "actor=301229",
                tag: "Joel Madden",
                tagKey: "5d77689dad5437001f74ad78",
                role: "Self - Host",
                thumb:
                  "https://metadata-static.plex.tv/c/people/c3bf5cd6a2c7e89f338bb9d91b35443a.jpg"
              }
            ]
          },
          {
            ratingKey: "55436",
            key: "/library/metadata/55436",
            parentRatingKey: "55092",
            grandparentRatingKey: "29690",
            guid: "plex://episode/673f47e6df4a55d416b00843",
            parentGuid: "plex://season/66ef41318693dbe3e33d8d91",
            grandparentGuid: "plex://show/5e1719012d4d84003e516eeb",
            grandparentSlug: "1000-lb-sisters",
            type: "episode",
            title: "Peas Out, Yo!",
            grandparentKey: "/library/metadata/29690",
            parentKey: "/library/metadata/55092",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "1000-lb Sisters",
            parentTitle: "Season 6",
            contentRating: "TV-14",
            summary:
              "Everyone prepares for London amid another flare up between Tammy and Amanda. Chris and Tammy visit Dr. Turner hoping to get approved for skin removal surgery. The family participates in a 5K and Amanda makes her move to Florida.",
            index: 8,
            parentIndex: 6,
            year: 2024,
            thumb: "/library/metadata/55436/thumb/1734496876",
            art: "/library/metadata/29690/art/1736487886",
            grandparentThumb: "/library/metadata/29690/thumb/1736487886",
            grandparentArt: "/library/metadata/29690/art/1736487886",
            duration: 2550847,
            originallyAvailableAt: "2024-12-03",
            addedAt: 1733282806,
            updatedAt: 1734496876,
            Media: [
              {
                id: 58165,
                duration: 2550847,
                bitrate: 6055,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 2,
                audioCodec: "aac",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "24p",
                audioProfile: "lc",
                videoProfile: "main",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 88032,
                    key: "/library/parts/88032/1733250369/file.mkv",
                    duration: 2550847,
                    file: "/TV Shows (Reality)/1000-lb Sisters/Season 06/1000-lb Sisters - S06E08 - Peas Out, Yo! WEBDL-1080p.mkv",
                    size: 1931516075,
                    audioProfile: "lc",
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "main",
                    Stream: [
                      {
                        id: 285593,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 5930,
                        bitDepth: 8,
                        chromaLocation: "left",
                        chromaSubsampling: "4:2:0",
                        codedHeight: 1088,
                        codedWidth: 1920,
                        frameRate: 23.976,
                        hasScalingMatrix: false,
                        height: 1080,
                        level: 40,
                        profile: "main",
                        refFrames: 4,
                        scanType: "progressive",
                        width: 1920,
                        displayTitle: "1080p",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 285594,
                        streamType: 2,
                        selected: true,
                        default: true,
                        codec: "aac",
                        index: 1,
                        channels: 2,
                        bitrate: 125,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        audioChannelLayout: "stereo",
                        profile: "lc",
                        samplingRate: 48000,
                        displayTitle: "English (AAC Stereo)",
                        extendedDisplayTitle: "English (AAC Stereo)"
                      },
                      {
                        id: 285595,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        displayTitle: "English",
                        extendedDisplayTitle: "English (SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Peas Out, Yo!",
                type: "coverPoster",
                url: "/library/metadata/29690/thumb/1736487886"
              },
              {
                alt: "Peas Out, Yo!",
                type: "snapshot",
                url: "/library/metadata/55436/thumb/1734496876"
              },
              {
                alt: "Peas Out, Yo!",
                type: "background",
                url: "/library/metadata/29690/art/1736487886"
              },
              {
                alt: "Peas Out, Yo!",
                type: "clearLogo",
                url: "/library/metadata/29690/clearLogo/1736487886"
              }
            ],
            UltraBlurColors: {
              topLeft: "58091b",
              topRight: "91413e",
              bottomRight: "92413f",
              bottomLeft: "854d2a"
            },
            Guid: [
              {
                id: "imdb://tt34603444"
              },
              {
                id: "tmdb://5812194"
              },
              {
                id: "tvdb://10837995"
              }
            ],
            Rating: [
              {
                image: "imdb://image.rating",
                value: 8.6,
                type: "audience"
              }
            ],
            Role: [
              {
                id: 194244,
                filter: "actor=194244",
                tag: "Amy Slaton",
                tagKey: "60a7dbe45bde57002c2991f1",
                role: "Self"
              },
              {
                id: 194245,
                filter: "actor=194245",
                tag: "Tammy Slaton",
                tagKey: "60a7dbe45bde57002c2991f2",
                role: "Self"
              }
            ],
            Producer: [
              {
                id: 317670,
                filter: "producer=317670",
                tag: "Neil Bowman",
                tagKey: "5f3fe60dfea1a1003f99969d"
              }
            ]
          },
          {
            ratingKey: "47851",
            key: "/library/metadata/47851/children",
            parentRatingKey: "47836",
            guid: "plex://season/61b75c7a4333ef84604eac8c",
            parentGuid: "plex://show/5d9c08172192ba001f307329",
            parentSlug: "60-days-in",
            parentStudio: "Lucky 8 TV",
            type: "season",
            title: "Season 2",
            parentKey: "/library/metadata/47836",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            parentTitle: "60 Days In",
            summary: "",
            index: 2,
            parentIndex: 1,
            viewCount: 7,
            lastViewedAt: 1668969475,
            parentYear: 2016,
            thumb: "/library/metadata/47851/thumb/1733146777",
            art: "/library/metadata/47836/art/1736656766",
            parentThumb: "/library/metadata/47836/thumb/1736656766",
            parentTheme: "/library/metadata/47836/theme/1736656766",
            leafCount: 13,
            viewedLeafCount: 6,
            addedAt: 1733178435,
            updatedAt: 1733146777,
            Image: [
              {
                alt: "Season 2",
                type: "coverPoster",
                url: "/library/metadata/47851/thumb/1733146777"
              },
              {
                alt: "Season 2",
                type: "background",
                url: "/library/metadata/47836/art/1736656766"
              },
              {
                alt: "Season 2",
                type: "clearLogo",
                url: "/library/metadata/47836/clearLogo/1736656766"
              }
            ],
            UltraBlurColors: {
              topLeft: "121213",
              topRight: "3d403d",
              bottomRight: "0b0d0b",
              bottomLeft: "030902"
            },
            Guid: [
              {
                id: "tvdb://669479"
              }
            ]
          },
          {
            ratingKey: "55430",
            key: "/library/metadata/55430",
            parentRatingKey: "55006",
            grandparentRatingKey: "29621",
            guid: "plex://episode/673645c44adcaf16eb634947",
            parentGuid: "plex://season/66c3b6f87f6b3620cb902f6c",
            grandparentGuid: "plex://show/5d9c08daffd9ef001e99b8f5",
            grandparentSlug: "90-day-fiance-before-the-90-days",
            type: "episode",
            title: "A Separate Peace",
            titleSort: "Separate Peace",
            grandparentKey: "/library/metadata/29621",
            parentKey: "/library/metadata/55006",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "90 Day Fiancé: Before the 90 Days",
            parentTitle: "Season 7",
            contentRating: "TV-14",
            summary:
              "Loren tries to win over Faith's friends. Niles makes a shocking decision. Tigerlily has a sobering realization. Vanja is surprised by an unexpected dinner guest. Joe learns that this isn't the first time Magda moved abroad for a boyfriend.",
            index: 14,
            parentIndex: 7,
            year: 2024,
            thumb: "/library/metadata/55430/thumb/1738995218",
            art: "/library/metadata/29621/art/1738128632",
            grandparentThumb: "/library/metadata/29621/thumb/1738128632",
            grandparentArt: "/library/metadata/29621/art/1738128632",
            duration: 5131796,
            originallyAvailableAt: "2024-12-01",
            addedAt: 1733104022,
            updatedAt: 1738995218,
            Media: [
              {
                id: 58153,
                duration: 5131796,
                bitrate: 7326,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 2,
                audioCodec: "aac",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "24p",
                audioProfile: "lc",
                videoProfile: "main",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 88020,
                    key: "/library/parts/88020/1733071014/file.mkv",
                    duration: 5131796,
                    file: "/TV Shows (Reality)/90 Day Fiancé - Before The 90 Days/Season 07/90 Day Fiancé - Before the 90 Days - S07E14 - A Separate Peace WEBDL-1080p.mkv",
                    size: 4701327823,
                    audioProfile: "lc",
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "main",
                    Stream: [
                      {
                        id: 285447,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 7201,
                        bitDepth: 8,
                        chromaLocation: "left",
                        chromaSubsampling: "4:2:0",
                        codedHeight: 1088,
                        codedWidth: 1920,
                        frameRate: 23.976,
                        hasScalingMatrix: false,
                        height: 1080,
                        level: 40,
                        profile: "main",
                        refFrames: 4,
                        scanType: "progressive",
                        width: 1920,
                        displayTitle: "1080p",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 285448,
                        streamType: 2,
                        selected: true,
                        default: true,
                        codec: "aac",
                        index: 1,
                        channels: 2,
                        bitrate: 125,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        audioChannelLayout: "stereo",
                        profile: "lc",
                        samplingRate: 48000,
                        displayTitle: "English (AAC Stereo)",
                        extendedDisplayTitle: "English (AAC Stereo)"
                      },
                      {
                        id: 285449,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        displayTitle: "English",
                        extendedDisplayTitle: "English (SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "A Separate Peace",
                type: "coverPoster",
                url: "/library/metadata/29621/thumb/1738128632"
              },
              {
                alt: "A Separate Peace",
                type: "snapshot",
                url: "/library/metadata/55430/thumb/1738995218"
              },
              {
                alt: "A Separate Peace",
                type: "background",
                url: "/library/metadata/29621/art/1738128632"
              },
              {
                alt: "A Separate Peace",
                type: "clearLogo",
                url: "/library/metadata/29621/clearLogo/1738128632"
              }
            ],
            UltraBlurColors: {
              topLeft: "3f2810",
              topRight: "211a1a",
              bottomRight: "7f5226",
              bottomLeft: "50201e"
            },
            Guid: [
              {
                id: "imdb://tt34475364"
              },
              {
                id: "tmdb://5755641"
              },
              {
                id: "tvdb://10823891"
              }
            ],
            Rating: [
              {
                image: "imdb://image.rating",
                value: 7.2,
                type: "audience"
              }
            ],
            Role: [
              {
                id: 321488,
                filter: "actor=321488",
                tag: "Tigerlily Abdelfattah",
                tagKey: "675655a080661d35c494df79",
                role: "Self"
              },
              {
                id: 321013,
                filter: "actor=321013",
                tag: "Loren Allen",
                tagKey: "5f3fb952bf3e560040af3efa",
                role: "Self"
              },
              {
                id: 321489,
                filter: "actor=321489",
                tag: "Vanja Grbic",
                tagKey: "675655a06b70a8f1a4a80c91",
                role: "Self"
              },
              {
                id: 321491,
                filter: "actor=321491",
                tag: "Faith Gatoc Tulod",
                tagKey: "6756559e6b70a8f1a4a80c87",
                role: "Self"
              },
              {
                id: 321492,
                filter: "actor=321492",
                tag: "Niles Valentine",
                tagKey: "6756559e34acc71bd2ac6880",
                role: "Self"
              }
            ]
          },
          {
            ratingKey: "55333",
            key: "/library/metadata/55333",
            parentRatingKey: "55116",
            grandparentRatingKey: "39873",
            guid: "plex://episode/673f271bac744d906b8f9876",
            parentGuid: "plex://season/67017455ecd8889ab842fbcc",
            grandparentGuid: "plex://show/5d9c083308fddd001f294fb3",
            grandparentSlug: "ink-master",
            type: "episode",
            title: "Face Your Fears",
            grandparentKey: "/library/metadata/39873",
            parentKey: "/library/metadata/55116",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "Ink Master",
            parentTitle: "Season 16",
            contentRating: "TV-14",
            summary:
              "The Artists' loyalties become transparent in a glass painting Flash Challenge. There is nowhere to hide when the Artists must tattoo faces in a high stakes Elimination Tattoo. The battle for $250,000 continues.",
            index: 8,
            parentIndex: 16,
            year: 2024,
            thumb: "/library/metadata/55333/thumb/1733030803",
            art: "/library/metadata/39873/art/1737085931",
            parentThumb: "/library/metadata/55116/thumb/1733030802",
            grandparentThumb: "/library/metadata/39873/thumb/1737085931",
            grandparentArt: "/library/metadata/39873/art/1737085931",
            grandparentTheme: "/library/metadata/39873/theme/1737085931",
            duration: 2636672,
            originallyAvailableAt: "2024-11-27",
            addedAt: 1732692318,
            updatedAt: 1733030803,
            Media: [
              {
                id: 57549,
                duration: 2636672,
                bitrate: 7647,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 2,
                audioCodec: "eac3",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "24p",
                videoProfile: "high"
              }
            ],
            Image: [
              {
                alt: "Face Your Fears",
                type: "coverPoster",
                url: "/library/metadata/55116/thumb/1733030802"
              },
              {
                alt: "Face Your Fears",
                type: "snapshot",
                url: "/library/metadata/55333/thumb/1733030803"
              },
              {
                alt: "Face Your Fears",
                type: "background",
                url: "/library/metadata/39873/art/1737085931"
              },
              {
                alt: "Face Your Fears",
                type: "clearLogo",
                url: "/library/metadata/39873/clearLogo/1737085931"
              }
            ],
            UltraBlurColors: {
              topLeft: "541311",
              topRight: "2f316c",
              bottomRight: "1c4ac9",
              bottomLeft: "2a479e"
            },
            Guid: [
              {
                id: "tmdb://5774718"
              },
              {
                id: "tvdb://10730488"
              }
            ],
            Role: [
              {
                id: 301229,
                filter: "actor=301229",
                tag: "Joel Madden",
                tagKey: "5d77689dad5437001f74ad78",
                role: "Self - Host",
                thumb:
                  "https://metadata-static.plex.tv/c/people/c3bf5cd6a2c7e89f338bb9d91b35443a.jpg"
              }
            ]
          },
          {
            ratingKey: "55332",
            key: "/library/metadata/55332",
            parentRatingKey: "55092",
            grandparentRatingKey: "29690",
            guid: "plex://episode/6736b2ad5b733a3d539df774",
            parentGuid: "plex://season/66ef41318693dbe3e33d8d91",
            grandparentGuid: "plex://show/5e1719012d4d84003e516eeb",
            grandparentSlug: "1000-lb-sisters",
            type: "episode",
            title: "Turning a New Beef",
            grandparentKey: "/library/metadata/29690",
            parentKey: "/library/metadata/55092",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "1000-lb Sisters",
            parentTitle: "Season 6",
            contentRating: "TV-14",
            summary: "Tammy and Amy beef over their big night out.",
            index: 7,
            parentIndex: 6,
            year: 2024,
            thumb: "/library/metadata/55332/thumb/1734496876",
            art: "/library/metadata/29690/art/1736487886",
            grandparentThumb: "/library/metadata/29690/thumb/1736487886",
            grandparentArt: "/library/metadata/29690/art/1736487886",
            duration: 2550890,
            originallyAvailableAt: "2024-11-26",
            addedAt: 1732681135,
            updatedAt: 1734496876,
            Media: [
              {
                id: 57548,
                duration: 2550890,
                bitrate: 8404,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 2,
                audioCodec: "aac",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "24p",
                audioProfile: "lc",
                videoProfile: "main"
              }
            ],
            Image: [
              {
                alt: "Turning a New Beef",
                type: "coverPoster",
                url: "/library/metadata/29690/thumb/1736487886"
              },
              {
                alt: "Turning a New Beef",
                type: "snapshot",
                url: "/library/metadata/55332/thumb/1734496876"
              },
              {
                alt: "Turning a New Beef",
                type: "background",
                url: "/library/metadata/29690/art/1736487886"
              },
              {
                alt: "Turning a New Beef",
                type: "clearLogo",
                url: "/library/metadata/29690/clearLogo/1736487886"
              }
            ],
            UltraBlurColors: {
              topLeft: "580913",
              topRight: "612525",
              bottomRight: "120206",
              bottomLeft: "772626"
            },
            Guid: [
              {
                id: "imdb://tt34493905"
              },
              {
                id: "tmdb://5773114"
              },
              {
                id: "tvdb://10800789"
              }
            ],
            Rating: [
              {
                image: "imdb://image.rating",
                value: 8.6,
                type: "audience"
              }
            ],
            Role: [
              {
                id: 194244,
                filter: "actor=194244",
                tag: "Amy Slaton",
                tagKey: "60a7dbe45bde57002c2991f1",
                role: "Self"
              },
              {
                id: 194245,
                filter: "actor=194245",
                tag: "Tammy Slaton",
                tagKey: "60a7dbe45bde57002c2991f2",
                role: "Self"
              }
            ],
            Producer: [
              {
                id: 317670,
                filter: "producer=317670",
                tag: "Neil Bowman",
                tagKey: "5f3fe60dfea1a1003f99969d"
              }
            ]
          },
          {
            ratingKey: "55282",
            key: "/library/metadata/55282",
            parentRatingKey: "54843",
            grandparentRatingKey: "27613",
            guid: "plex://episode/673646026a32a901c2e84b14",
            parentGuid: "plex://season/6659055ddd27970dd48c1b7d",
            grandparentGuid: "plex://show/5d9c09240aaccd001f8f45b3",
            grandparentSlug: "90-day-fiance-the-other-way",
            type: "episode",
            title: "Tell All Part 2",
            grandparentKey: "/library/metadata/27613",
            parentKey: "/library/metadata/54843",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "90 Day Fiancé: The Other Way",
            parentTitle: "Season 6",
            contentRating: "TV-14",
            summary:
              "The Tell All continues with more drama and reveals from this season's couples. Corona shares details about her breakup with Ingi, things get heated between Shekinah and Joanne's mom, Donna, and Tatha accuses James of cheating.",
            index: 22,
            parentIndex: 6,
            year: 2024,
            thumb: "/library/metadata/55282/thumb/1733920575",
            art: "/library/metadata/27613/art/1737869748",
            grandparentThumb: "/library/metadata/27613/thumb/1737869748",
            grandparentArt: "/library/metadata/27613/art/1737869748",
            duration: 5087402,
            originallyAvailableAt: "2024-11-25",
            addedAt: 1732585284,
            updatedAt: 1733920575,
            Media: [
              {
                id: 57506,
                duration: 5087402,
                bitrate: 6511,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 2,
                audioCodec: "aac",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "NTSC",
                audioProfile: "lc",
                videoProfile: "main"
              }
            ],
            Image: [
              {
                alt: "Tell All Part 2",
                type: "coverPoster",
                url: "/library/metadata/27613/thumb/1737869748"
              },
              {
                alt: "Tell All Part 2",
                type: "snapshot",
                url: "/library/metadata/55282/thumb/1733920575"
              },
              {
                alt: "Tell All Part 2",
                type: "background",
                url: "/library/metadata/27613/art/1737869748"
              },
              {
                alt: "Tell All Part 2",
                type: "clearLogo",
                url: "/library/metadata/27613/clearLogo/1737869748"
              }
            ],
            UltraBlurColors: {
              topLeft: "0f304b",
              topRight: "184464",
              bottomRight: "2e6289",
              bottomLeft: "2e6387"
            },
            Guid: [
              {
                id: "imdb://tt34385089"
              },
              {
                id: "tmdb://5755642"
              },
              {
                id: "tvdb://10813240"
              }
            ],
            Rating: [
              {
                image: "imdb://image.rating",
                value: 6.3,
                type: "audience"
              }
            ],
            Role: [
              {
                id: 321423,
                filter: "actor=321423",
                tag: "Corona Blakey",
                tagKey: "67548d3cf1d144a2a41843cb",
                role: "Self"
              },
              {
                id: 321430,
                filter: "actor=321430",
                tag: "Joanne DiGesu",
                tagKey: "67548d3c7f1113c796598627",
                role: "Self"
              },
              {
                id: 235857,
                filter: "actor=235857",
                tag: "Shekinah Garner",
                tagKey: "5f401f0cfea1a1003f9e90ea",
                role: "Self"
              },
              {
                id: 263286,
                filter: "actor=263286",
                tag: "Sarper Güven",
                tagKey: "65955292170826e83d4783a7",
                role: "Self"
              },
              {
                id: 321431,
                filter: "actor=321431",
                tag: "Sean Heffernan",
                tagKey: "67548d3df1cbf397f499f602",
                role: "Self"
              },
              {
                id: 321429,
                filter: "actor=321429",
                tag: "Ingi Hilmar",
                tagKey: "67548d3cda483fdd763a91f5",
                role: "Self"
              },
              {
                id: 321424,
                filter: "actor=321424",
                tag: "Lily Huang",
                tagKey: "67548d3d28632801215dd6bf",
                role: "Self"
              },
              {
                id: 321425,
                filter: "actor=321425",
                tag: "Josh McGuffey",
                tagKey: "67548d3cf1cbf397f499f5fa",
                role: "Self"
              },
              {
                id: 193961,
                filter: "actor=193961",
                tag: "Shaun Robinson",
                tagKey: "5d776833f59e5800218987dd",
                role: "Self - Host",
                thumb:
                  "https://metadata-static.plex.tv/a/people/ae19431faa3523cc1baff23e15d2b738.jpg"
              },
              {
                id: 321426,
                filter: "actor=321426",
                tag: "James Solis",
                tagKey: "67548d3d7f5b18211a53c43d",
                role: "Self"
              },
              {
                id: 321427,
                filter: "actor=321427",
                tag: "Meitalia Tantri Solis",
                tagKey: "67548d3cf1cbf397f499f5f8",
                role: "Self"
              }
            ],
            Producer: [
              {
                id: 317646,
                filter: "producer=317646",
                tag: "David Burch",
                tagKey: "5f4013721ae710004103e5fd"
              },
              {
                id: 318015,
                filter: "producer=318015",
                tag: "Jenni Gilroy",
                tagKey: "5f3fe0eafea1a1003f99240d"
              }
            ]
          },
          {
            ratingKey: "55281",
            key: "/library/metadata/55281",
            parentRatingKey: "55006",
            grandparentRatingKey: "29621",
            guid: "plex://episode/673645c54adcaf16eb634948",
            parentGuid: "plex://season/66c3b6f87f6b3620cb902f6c",
            grandparentGuid: "plex://show/5d9c08daffd9ef001e99b8f5",
            grandparentSlug: "90-day-fiance-before-the-90-days",
            type: "episode",
            title: "The Dark Is Rising",
            titleSort: "Dark Is Rising",
            grandparentKey: "/library/metadata/29621",
            parentKey: "/library/metadata/55006",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "90 Day Fiancé: Before the 90 Days",
            parentTitle: "Season 7",
            contentRating: "TV-14",
            summary:
              "Magda interrogates Joe about his last sexcapade. Niles wonders if Matilda misled him. Loren proposes a plan to marry Faith's mom. Ingrid learns Brian has been married four times. Sunny gives Veah an ultimatum.",
            index: 13,
            parentIndex: 7,
            year: 2024,
            thumb: "/library/metadata/55281/thumb/1738995218",
            art: "/library/metadata/29621/art/1738128632",
            grandparentThumb: "/library/metadata/29621/thumb/1738128632",
            grandparentArt: "/library/metadata/29621/art/1738128632",
            duration: 5131797,
            originallyAvailableAt: "2024-11-24",
            addedAt: 1732498596,
            updatedAt: 1738995218,
            Media: [
              {
                id: 57500,
                duration: 5131797,
                bitrate: 5830,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 2,
                audioCodec: "aac",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "24p",
                audioProfile: "lc",
                videoProfile: "main"
              }
            ],
            Image: [
              {
                alt: "The Dark Is Rising",
                type: "coverPoster",
                url: "/library/metadata/29621/thumb/1738128632"
              },
              {
                alt: "The Dark Is Rising",
                type: "snapshot",
                url: "/library/metadata/55281/thumb/1738995218"
              },
              {
                alt: "The Dark Is Rising",
                type: "background",
                url: "/library/metadata/29621/art/1738128632"
              },
              {
                alt: "The Dark Is Rising",
                type: "clearLogo",
                url: "/library/metadata/29621/clearLogo/1738128632"
              }
            ],
            UltraBlurColors: {
              topLeft: "332c2a",
              topRight: "58281d",
              bottomRight: "1f537d",
              bottomLeft: "2a6a60"
            },
            Guid: [
              {
                id: "imdb://tt34475357"
              },
              {
                id: "tmdb://5755640"
              },
              {
                id: "tvdb://10810671"
              }
            ],
            Rating: [
              {
                image: "imdb://image.rating",
                value: 7.1,
                type: "audience"
              }
            ],
            Role: [
              {
                id: 321013,
                filter: "actor=321013",
                tag: "Loren Allen",
                tagKey: "5f3fb952bf3e560040af3efa",
                role: "Self"
              },
              {
                id: 321489,
                filter: "actor=321489",
                tag: "Vanja Grbic",
                tagKey: "675655a06b70a8f1a4a80c91",
                role: "Self"
              },
              {
                id: 321491,
                filter: "actor=321491",
                tag: "Faith Gatoc Tulod",
                tagKey: "6756559e6b70a8f1a4a80c87",
                role: "Self"
              },
              {
                id: 321492,
                filter: "actor=321492",
                tag: "Niles Valentine",
                tagKey: "6756559e34acc71bd2ac6880",
                role: "Self"
              },
              {
                id: 321490,
                filter: "actor=321490",
                tag: "Bozo Vrdoljak",
                tagKey: "675655a0729f1bff838b3436",
                role: "Self"
              }
            ]
          }
        ]
      }
    }

    validateResponseSpec("/hubs/home/recentlyAdded", "get", 200, response)
  })

  it("should validate the 200 response with when the API spec is valid", () => {
    const response = {
      MediaContainer: {
        size: 20,
        totalSize: 446,
        offset: 0,
        allowSync: true,
        identifier: "com.plexapp.plugins.library",
        Metadata: [
          {
            ratingKey: "57301",
            key: "/library/metadata/57301",
            guid: "plex://movie/5d9f34ee4441b1001fa0cdff",
            slug: "taxi-3",
            studio: "EuropaCorp",
            type: "movie",
            title: "Taxi 3",
            librarySectionTitle: "Movies",
            librarySectionID: 1,
            librarySectionKey: "/library/sections/1",
            contentRating: "nl/12",
            summary:
              "A gang of thieves calling themselves the Santa Claus Gang are wreaking havoc, and the police can't keep up. Police Captain Gilbert is distracted by a Chinese reporter writing a story on his squad, and taxi driver Daniel is in the midst of a relationship crisis. After a string of mistakes in which the thieves outsmart the police time and time again, Daniel and his super-taxi pitch in.",
            audienceRating: 5.1,
            year: 2003,
            tagline: "No speed limits the next 90 min.",
            thumb: "/library/metadata/57301/thumb/1738890244",
            art: "/library/metadata/57301/art/1738890244",
            duration: 5237472,
            originallyAvailableAt: "2003-01-29",
            addedAt: 1738890239,
            updatedAt: 1738890244,
            audienceRatingImage: "rottentomatoes://image.rating.spilled",
            chapterSource: "media",
            Media: [
              {
                id: 61627,
                duration: 5237472,
                bitrate: 6757,
                width: 1920,
                height: 816,
                aspectRatio: 2.35,
                audioChannels: 6,
                audioCodec: "ac3",
                videoCodec: "hevc",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "24p",
                videoProfile: "main 10",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 92675,
                    key: "/library/parts/92675/1738856445/file.mkv",
                    duration: 5237472,
                    file: "/Movies/Taxi 3 (2003)/Taxi 3 (2003) WEBDL-1080p.mkv",
                    size: 4425021280,
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "main 10"
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Taxi 3",
                type: "coverPoster",
                url: "/library/metadata/57301/thumb/1738890244"
              },
              {
                alt: "Taxi 3",
                type: "background",
                url: "/library/metadata/57301/art/1738890244"
              },
              {
                alt: "Taxi 3",
                type: "clearLogo",
                url: "/library/metadata/57301/clearLogo/1738890244"
              }
            ],
            UltraBlurColors: {
              topLeft: "1e2a56",
              topRight: "9d371c",
              bottomRight: "7c481d",
              bottomLeft: "252454"
            },
            Genre: [
              {
                tag: "Action"
              },
              {
                tag: "Comedy"
              }
            ],
            Country: [
              {
                tag: "France"
              }
            ],
            Director: [
              {
                tag: "Gérard Krawczyk"
              }
            ],
            Writer: [
              {
                tag: "Luc Besson"
              }
            ],
            Role: [
              {
                tag: "Samy Naceri"
              },
              {
                tag: "Frédéric Diefenthal"
              },
              {
                tag: "Bernard Farcy"
              }
            ]
          },
          {
            ratingKey: "57244",
            key: "/library/metadata/57244",
            guid: "plex://movie/5d776c7096b655001fe30a64",
            slug: "what-the-health",
            studio: "Spark Media",
            type: "movie",
            title: "What the Health",
            librarySectionTitle: "Movies (Documentaries)",
            librarySectionID: 6,
            librarySectionKey: "/library/sections/6",
            contentRating: "nl/9",
            summary:
              "An intrepid filmmaker on a journey of discovery as he uncovers possibly the largest health secret of our time and the collusion between industry, government, pharmaceutical and health organizations keeping this information from us.",
            audienceRating: 6.2,
            year: 2017,
            tagline:
              "The health film that health organizations don't want you to see.",
            thumb: "/library/metadata/57244/thumb/1738421415",
            art: "/library/metadata/57244/art/1738421415",
            duration: 5520416,
            originallyAvailableAt: "2017-10-04",
            addedAt: 1738421406,
            updatedAt: 1738421415,
            audienceRatingImage: "rottentomatoes://image.rating.upright",
            Media: [
              {
                id: 61538,
                duration: 5520416,
                bitrate: 23761,
                width: 3840,
                height: 1640,
                aspectRatio: 2.35,
                audioChannels: 2,
                audioCodec: "eac3",
                videoCodec: "h264",
                videoResolution: "4k",
                container: "mkv",
                videoFrameRate: "24p",
                videoProfile: "high",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 92586,
                    key: "/library/parts/92586/1738421487/file.mkv",
                    duration: 5520416,
                    file: "/Movies (Documentaries)/What the Health/What the Health (2017) [WEBRip-2160p x264 8-bit EAC3 2.0]-TrollUHD.mkv",
                    size: 16399586602,
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "high"
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "What the Health",
                type: "coverPoster",
                url: "/library/metadata/57244/thumb/1738421415"
              },
              {
                alt: "What the Health",
                type: "background",
                url: "/library/metadata/57244/art/1738421415"
              },
              {
                alt: "What the Health",
                type: "clearLogo",
                url: "/library/metadata/57244/clearLogo/1738421415"
              }
            ],
            UltraBlurColors: {
              topLeft: "580c10",
              topRight: "ae150b",
              bottomRight: "1d6c5f",
              bottomLeft: "a32e26"
            },
            Genre: [
              {
                tag: "Documentary"
              }
            ],
            Country: [
              {
                tag: "United States of America"
              }
            ],
            Director: [
              {
                tag: "Kip Andersen"
              },
              {
                tag: "Keegan Kuhn"
              }
            ],
            Writer: [
              {
                tag: "Kip Andersen"
              },
              {
                tag: "Keegan Kuhn"
              }
            ],
            Role: [
              {
                tag: "Kip Andersen"
              },
              {
                tag: "Larry Baldwin"
              },
              {
                tag: "Neal Barnard"
              }
            ]
          },
          {
            ratingKey: "57225",
            key: "/library/metadata/57225",
            guid: "plex://movie/5d7770de31d95e001f1aba2e",
            slug: "sound-of-freedom",
            studio: "Santa Fe Films",
            type: "movie",
            title: "Sound of Freedom",
            librarySectionTitle: "Movies (Documentaries)",
            librarySectionID: 6,
            librarySectionKey: "/library/sections/6",
            contentRating: "nl/12",
            summary:
              '"Sound of Freedom", based on the incredible true story, shines a light on even the darkest of places. After rescuing a young boy from ruthless child-traffickers, a federal agent learns that the boy\'s sister is still a captive and decides to embark on a dangerous mission to save her. With time running out, he quits his job and journeys deep into the Colombian jungle, putting his life on the line to free her from a fate worse than death.',
            rating: 5.7,
            audienceRating: 9.9,
            year: 2023,
            tagline: "Fight for the light. Silence the darkness.",
            thumb: "/library/metadata/57225/thumb/1737645754",
            art: "/library/metadata/57225/art/1737645754",
            duration: 7896928,
            originallyAvailableAt: "2023-07-04",
            addedAt: 1737645751,
            updatedAt: 1737645754,
            audienceRatingImage: "rottentomatoes://image.rating.upright",
            chapterSource: "media",
            ratingImage: "rottentomatoes://image.rating.rotten",
            Media: [
              {
                id: 61489,
                duration: 7896928,
                bitrate: 18590,
                width: 3840,
                height: 1608,
                aspectRatio: 2.35,
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
                    id: 92536,
                    key: "/library/parts/92536/1737644005/file.mkv",
                    duration: 7896928,
                    file: "/Movies (Documentaries)/Sound of Freedom (2023)/Sound of Freedom (2023) Bluray-2160p.mkv",
                    size: 18337249680,
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "main 10"
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Sound of Freedom",
                type: "coverPoster",
                url: "/library/metadata/57225/thumb/1737645754"
              },
              {
                alt: "Sound of Freedom",
                type: "background",
                url: "/library/metadata/57225/art/1737645754"
              },
              {
                alt: "Sound of Freedom",
                type: "clearLogo",
                url: "/library/metadata/57225/clearLogo/1737645754"
              }
            ],
            UltraBlurColors: {
              topLeft: "312f0d",
              topRight: "37322c",
              bottomRight: "150821",
              bottomLeft: "020c15"
            },
            Genre: [
              {
                tag: "Drama"
              },
              {
                tag: "Thriller"
              }
            ],
            Country: [
              {
                tag: "United States of America"
              }
            ],
            Director: [
              {
                tag: "Alejandro Monteverde"
              }
            ],
            Writer: [
              {
                tag: "Rod Barr"
              },
              {
                tag: "Alejandro Monteverde"
              }
            ],
            Role: [
              {
                tag: "Jim Caviezel"
              },
              {
                tag: "Mira Sorvino"
              },
              {
                tag: "Bill Camp"
              }
            ]
          },
          {
            ratingKey: "57216",
            key: "/library/metadata/57216",
            guid: "plex://movie/5d776838961905001eb94a81",
            slug: "horton-hears-a-who-2008",
            studio: "Blue Sky Studios",
            type: "movie",
            title: "Horton",
            librarySectionTitle: "Movies NL (Kids)",
            librarySectionID: 7,
            librarySectionKey: "/library/sections/7",
            originalTitle: "Horton Hears a Who!",
            contentRating: "nl/AL",
            summary:
              "Diep in de jungle hoort een kleine olifant plots een stem uit een klein stofdeeltje. Het blijkt een minuscule planeet te zijn waar de stad Who-Ville op gelegen is. De Who's geven Horton de opdracht hun planeet te beschermen met behulp van zijn vrienden. Naar het verhaal van Dr. Seuss.",
            rating: 7.9,
            audienceRating: 7.3,
            year: 2008,
            tagline: "Horton hears more than anyone believes.",
            thumb: "/library/metadata/57216/thumb/1737377262",
            duration: 4956900,
            originallyAvailableAt: "2008-03-12",
            addedAt: 1737377258,
            updatedAt: 1737377262,
            audienceRatingImage: "rottentomatoes://image.rating.upright",
            ratingImage: "rottentomatoes://image.rating.ripe",
            Media: [
              {
                id: 61366,
                duration: 4956900,
                bitrate: 1679,
                width: 640,
                height: 352,
                aspectRatio: 1.85,
                audioChannels: 6,
                audioCodec: "ac3",
                videoCodec: "mpeg4",
                videoResolution: "sd",
                container: "avi",
                videoFrameRate: "PAL",
                videoProfile: "advanced simple",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 92412,
                    key: "/library/parts/92412/1223571748/file.avi",
                    duration: 4956900,
                    file: "/Movies NL (Kids)/Horton Hears A Who/Horton Hears A Who!(2008) NL gesproken.avi",
                    size: 1046626304,
                    container: "avi",
                    indexes: "sd",
                    videoProfile: "advanced simple"
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Horton",
                type: "coverPoster",
                url: "/library/metadata/57216/thumb/1737377262"
              }
            ],
            UltraBlurColors: {
              topLeft: "492200",
              topRight: "75581b",
              bottomRight: "8d4911",
              bottomLeft: "53211f"
            },
            Genre: [
              {
                tag: "Komedie"
              },
              {
                tag: "Animatie"
              }
            ],
            Country: [
              {
                tag: "United States of America"
              }
            ],
            Director: [
              {
                tag: "Jimmy Hayward"
              },
              {
                tag: "Steve Martino"
              }
            ],
            Writer: [
              {
                tag: "Ken Daurio"
              },
              {
                tag: "Cinco Paul"
              }
            ],
            Role: [
              {
                tag: "Jim Carrey"
              },
              {
                tag: "Steve Carell"
              },
              {
                tag: "Carol Burnett"
              }
            ]
          },
          {
            ratingKey: "57214",
            key: "/library/metadata/57214",
            guid: "plex://movie/5d77683aeb5d26001f1e1ccd",
            slug: "one-magic-christmas",
            studio: "Walt Disney Pictures",
            type: "movie",
            title: "One Magic Christmas",
            librarySectionTitle: "Movies (Kids)",
            librarySectionID: 13,
            librarySectionKey: "/library/sections/13",
            contentRating: "G",
            summary:
              "A Christmas angel named Gideon is sent by Santa Claus to help Ginny Grainger, who is a cynic and hates Christmas. She and her family have fallen on hard times, making it even harder to believe in anything that can't be seen. With help from her daughter, Abbie, and a trip to the North Pole to see Santa Claus himself, can Gideon find a way to make her believe again?",
            rating: 4.7,
            audienceRating: 6.8,
            year: 1985,
            tagline: "Miracles do happen!",
            thumb: "/library/metadata/57214/thumb/1737429264",
            art: "/library/metadata/57214/art/1737429264",
            duration: 5330176,
            originallyAvailableAt: "1985-11-22",
            addedAt: 1737376659,
            updatedAt: 1737429264,
            audienceRatingImage: "rottentomatoes://image.rating.upright",
            chapterSource: "media",
            ratingImage: "rottentomatoes://image.rating.rotten",
            Media: [
              {
                id: 61364,
                duration: 5330176,
                bitrate: 8753,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 6,
                audioCodec: "eac3",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "24p",
                videoProfile: "high",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 92410,
                    key: "/library/parts/92410/1709820515/file.mkv",
                    duration: 5330176,
                    file: "/Movies (Kids)/One Magic Christmas (1985)/One Magic Christmas (1985) WEBDL-1080p.mkv",
                    size: 5831757820,
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "high"
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "One Magic Christmas",
                type: "coverPoster",
                url: "/library/metadata/57214/thumb/1737429264"
              },
              {
                alt: "One Magic Christmas",
                type: "background",
                url: "/library/metadata/57214/art/1737429264"
              }
            ],
            UltraBlurColors: {
              topLeft: "1f2956",
              topRight: "273b7e",
              bottomRight: "9c3228",
              bottomLeft: "2c2b61"
            },
            Genre: [
              {
                tag: "Fantasy"
              },
              {
                tag: "Family"
              }
            ],
            Country: [
              {
                tag: "Canada"
              },
              {
                tag: "United States of America"
              }
            ],
            Director: [
              {
                tag: "Phillip Borsos"
              }
            ],
            Writer: [
              {
                tag: "Thomas Meehan"
              },
              {
                tag: "Phillip Borsos"
              }
            ],
            Role: [
              {
                tag: "Mary Steenburgen"
              },
              {
                tag: "Gary Basaraba"
              },
              {
                tag: "Elisabeth Harnois"
              }
            ]
          },
          {
            ratingKey: "57210",
            key: "/library/metadata/57210",
            guid: "plex://movie/5d776d37594b2b001e70420b",
            slug: "olafs-frozen-adventure",
            studio: "Walt Disney Pictures",
            type: "movie",
            title: "Olaf's Frozen Adventure",
            librarySectionTitle: "Movies (Kids)",
            librarySectionID: 13,
            librarySectionKey: "/library/sections/13",
            contentRating: "G",
            summary:
              'A Christmas-themed special featuring characters from Walt Disney Pictures\' 53rd full-length animated motion picture, "Frozen (2013)".',
            rating: 5.7,
            audienceRating: 4.3,
            year: 2017,
            tagline: "Let's go find a tradition!",
            thumb: "/library/metadata/57210/thumb/1737376528",
            art: "/library/metadata/57210/art/1737376528",
            duration: 1333582,
            originallyAvailableAt: "2017-10-27",
            addedAt: 1737376523,
            updatedAt: 1737376528,
            audienceRatingImage: "rottentomatoes://image.rating.spilled",
            chapterSource: "media",
            primaryExtraKey: "/library/metadata/57211",
            ratingImage: "rottentomatoes://image.rating.rotten",
            Media: [
              {
                id: 61354,
                duration: 1333582,
                bitrate: 6251,
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
                    id: 92400,
                    key: "/library/parts/92400/1710590934/file.mkv",
                    duration: 1333582,
                    file: "/Movies (Kids)/Olaf's Frozen Adventure (2017)/Olaf's Frozen Adventure (2017) WEBDL-1080p.mkv",
                    size: 1042551393,
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "high"
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Olaf's Frozen Adventure",
                type: "coverPoster",
                url: "/library/metadata/57210/thumb/1737376528"
              },
              {
                alt: "Olaf's Frozen Adventure",
                type: "background",
                url: "/library/metadata/57210/art/1737376528"
              },
              {
                alt: "Olaf's Frozen Adventure",
                type: "clearLogo",
                url: "/library/metadata/57210/clearLogo/1737376528"
              }
            ],
            UltraBlurColors: {
              topLeft: "142f4a",
              topRight: "370c04",
              bottomRight: "1a4a73",
              bottomLeft: "206875"
            },
            Genre: [
              {
                tag: "Comedy"
              },
              {
                tag: "Animation"
              }
            ],
            Country: [
              {
                tag: "United States of America"
              }
            ],
            Director: [
              {
                tag: "Stevie Wermers-Skelton"
              },
              {
                tag: "Kevin Deters"
              }
            ],
            Writer: [
              {
                tag: "Jac Schaeffer"
              }
            ],
            Role: [
              {
                tag: "Josh Gad"
              },
              {
                tag: "Kristen Bell"
              },
              {
                tag: "Idina Menzel"
              }
            ]
          },
          {
            ratingKey: "57209",
            key: "/library/metadata/57209",
            guid: "plex://movie/5d776b37ad5437001f797ccb",
            slug: "northpole",
            studio: "Muse Entertainment",
            type: "movie",
            title: "Northpole",
            librarySectionTitle: "Movies (Kids)",
            librarySectionID: 13,
            librarySectionKey: "/library/sections/13",
            contentRating: "G",
            summary:
              "When a loss of togetherness spreads across the globe and threatens the existence of Santa's Northpole, a little boy named Kevin is called upon to save the day.",
            audienceRating: 4.5,
            year: 2014,
            tagline: "Where happiness makes magic.",
            thumb: "/library/metadata/57209/thumb/1737376521",
            art: "/library/metadata/57209/art/1737376521",
            duration: 5074282,
            originallyAvailableAt: "2014-11-15",
            addedAt: 1737376517,
            updatedAt: 1737376521,
            audienceRatingImage: "rottentomatoes://image.rating.spilled",
            chapterSource: "media",
            Media: [
              {
                id: 61353,
                duration: 5074282,
                bitrate: 2635,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 6,
                audioCodec: "aac",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mp4",
                videoFrameRate: "24p",
                optimizedForStreaming: 1,
                audioProfile: "lc",
                has64bitOffsets: false,
                videoProfile: "high",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 92399,
                    key: "/library/parts/92399/1705524618/file.mp4",
                    duration: 5074282,
                    file: "/Movies (Kids)/Northpole (2014)/Northpole (2014) Bluray-1080p.mp4",
                    size: 1674331331,
                    audioProfile: "lc",
                    container: "mp4",
                    has64bitOffsets: false,
                    indexes: "sd",
                    optimizedForStreaming: true,
                    videoProfile: "high"
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Northpole",
                type: "coverPoster",
                url: "/library/metadata/57209/thumb/1737376521"
              },
              {
                alt: "Northpole",
                type: "background",
                url: "/library/metadata/57209/art/1737376521"
              },
              {
                alt: "Northpole",
                type: "clearLogo",
                url: "/library/metadata/57209/clearLogo/1737376521"
              }
            ],
            UltraBlurColors: {
              topLeft: "0d2f51",
              topRight: "2f1e4e",
              bottomRight: "9d343a",
              bottomLeft: "2d5a88"
            },
            Genre: [
              {
                tag: "Fantasy"
              },
              {
                tag: "Family"
              }
            ],
            Country: [
              {
                tag: "Canada"
              }
            ],
            Director: [
              {
                tag: "Douglas Barr"
              }
            ],
            Writer: [
              {
                tag: "Gregg Rossen"
              },
              {
                tag: "Brian Sawyer"
              }
            ],
            Role: [
              {
                tag: "Tiffani Thiessen"
              },
              {
                tag: "Josh Hopkins"
              },
              {
                tag: "Max Charles"
              }
            ]
          },
          {
            ratingKey: "57203",
            key: "/library/metadata/57203",
            guid: "plex://movie/5d776e7c96b655001fe690aa",
            slug: "noelle-2019",
            studio: "Walt Disney Pictures",
            type: "movie",
            title: "Noelle",
            librarySectionTitle: "Movies (Kids)",
            librarySectionID: 13,
            librarySectionKey: "/library/sections/13",
            contentRating: "G",
            summary:
              "Noelle has always had to support and encourage her brother Nick, who was ordained to take over as Santa. When Nick disappears right before Christmas, Noelle goes on a funny and heartfelt journey to find him and, ultimately, what Christmas is really about.",
            rating: 5.6,
            audienceRating: 5.9,
            year: 2019,
            tagline: "Saving Christmas together? Oh, joy.",
            thumb: "/library/metadata/57203/thumb/1737376503",
            art: "/library/metadata/57203/art/1737376503",
            duration: 6052416,
            originallyAvailableAt: "2019-11-12",
            addedAt: 1737376498,
            updatedAt: 1737376503,
            audienceRatingImage: "rottentomatoes://image.rating.spilled",
            primaryExtraKey: "/library/metadata/57204",
            ratingImage: "rottentomatoes://image.rating.rotten",
            Media: [
              {
                id: 61337,
                duration: 6052416,
                bitrate: 2523,
                width: 1920,
                height: 804,
                aspectRatio: 2.35,
                audioChannels: 6,
                audioCodec: "eac3",
                videoCodec: "hevc",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "24p",
                videoProfile: "main",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 92383,
                    key: "/library/parts/92383/1705430240/file.mkv",
                    duration: 6052416,
                    file: "/Movies (Kids)/Noelle (2019)/Noelle (2019) WEBRip-1080p.mkv",
                    size: 1911414256,
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "main"
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Noelle",
                type: "coverPoster",
                url: "/library/metadata/57203/thumb/1737376503"
              },
              {
                alt: "Noelle",
                type: "background",
                url: "/library/metadata/57203/art/1737376503"
              },
              {
                alt: "Noelle",
                type: "clearLogo",
                url: "/library/metadata/57203/clearLogo/1737376503"
              }
            ],
            UltraBlurColors: {
              topLeft: "561011",
              topRight: "ac0804",
              bottomRight: "a11e1b",
              bottomLeft: "a90509"
            },
            Genre: [
              {
                tag: "Family"
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
                tag: "Marc Lawrence"
              }
            ],
            Writer: [
              {
                tag: "Marc Lawrence"
              }
            ],
            Role: [
              {
                tag: "Anna Kendrick"
              },
              {
                tag: "Bill Hader"
              },
              {
                tag: "Kingsley Ben-Adir"
              }
            ]
          },
          {
            ratingKey: "57202",
            key: "/library/metadata/57202",
            guid: "plex://movie/5d7768751999bc0020dc55b9",
            slug: "noel",
            studio: "The Convex Group",
            type: "movie",
            title: "Noel",
            librarySectionTitle: "Movies (Kids)",
            librarySectionID: 13,
            librarySectionKey: "/library/sections/13",
            contentRating: "PG",
            summary:
              "Five New Yorkers come together on Christmas Eve, seeking a miracle.",
            rating: 2.8,
            audienceRating: 4.8,
            year: 2004,
            tagline: "Miracles are closer than you think",
            thumb: "/library/metadata/57202/thumb/1737376447",
            art: "/library/metadata/57202/art/1737376447",
            duration: 5804044,
            originallyAvailableAt: "2004-11-26",
            addedAt: 1737376442,
            updatedAt: 1737376447,
            audienceRatingImage: "rottentomatoes://image.rating.spilled",
            chapterSource: "media",
            ratingImage: "rottentomatoes://image.rating.rotten",
            Media: [
              {
                id: 61336,
                duration: 5804044,
                bitrate: 18034,
                width: 1916,
                height: 816,
                aspectRatio: 2.35,
                audioChannels: 2,
                audioCodec: "eac3",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "24p",
                videoProfile: "main",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 92382,
                    key: "/library/parts/92382/1734169321/file.mkv",
                    duration: 5804044,
                    file: "/Movies (Kids)/Noel (2004)/Noel (2004) Bluray-1080p.mkv",
                    size: 13085273333,
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "main"
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Noel",
                type: "coverPoster",
                url: "/library/metadata/57202/thumb/1737376447"
              },
              {
                alt: "Noel",
                type: "background",
                url: "/library/metadata/57202/art/1737376447"
              }
            ],
            UltraBlurColors: {
              topLeft: "4f1a18",
              topRight: "351211",
              bottomRight: "3b1417",
              bottomLeft: "963f2b"
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
                tag: "Canada"
              },
              {
                tag: "United States of America"
              }
            ],
            Director: [
              {
                tag: "Chazz Palminteri"
              }
            ],
            Writer: [
              {
                tag: "David Hubbard"
              }
            ],
            Role: [
              {
                tag: "Susan Sarandon"
              },
              {
                tag: "Paul Walker"
              },
              {
                tag: "Penélope Cruz"
              }
            ]
          },
          {
            ratingKey: "57200",
            key: "/library/metadata/57200",
            guid: "plex://movie/5d9f3584d5fd3f001ee17875",
            slug: "mister-magoos-christmas-carol",
            studio: "United Productions of America",
            type: "movie",
            title: "Mister Magoo's Christmas Carol",
            librarySectionTitle: "Movies (Kids)",
            librarySectionID: 13,
            librarySectionKey: "/library/sections/13",
            contentRating: "Not Rated",
            summary:
              "In this animated musical version of Charles Dickens' \"A Christmas Carol\", Ebenezer Scrooge - via Mr. Magoo's starring performance in a stage production of the classic - doesn't have a ghost of a chance unless he learns the true meaning of Christmas from the three spirits who haunt him one Christmas Eve.",
            audienceRating: 7.0,
            year: 1962,
            thumb: "/library/metadata/57200/thumb/1737376185",
            art: "/library/metadata/57200/art/1737376185",
            duration: 3135216,
            originallyAvailableAt: "1962-12-18",
            addedAt: 1737376181,
            updatedAt: 1737376185,
            audienceRatingImage: "rottentomatoes://image.rating.upright",
            chapterSource: "media",
            primaryExtraKey: "/library/metadata/57201",
            Media: [
              {
                id: 61333,
                duration: 3135216,
                bitrate: 2634,
                width: 1444,
                height: 1080,
                aspectRatio: 1.33,
                audioChannels: 6,
                audioCodec: "aac",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mp4",
                videoFrameRate: "24p",
                optimizedForStreaming: 1,
                audioProfile: "lc",
                has64bitOffsets: false,
                videoProfile: "high",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 92379,
                    key: "/library/parts/92379/1702213088/file.mp4",
                    duration: 3135216,
                    file: "/Movies (Kids)/Mr. Magoo's Christmas Carol (1962)/Mister Magoo's Christmas Carol (1962) Bluray-1080p.mp4",
                    size: 1034290558,
                    audioProfile: "lc",
                    container: "mp4",
                    has64bitOffsets: false,
                    indexes: "sd",
                    optimizedForStreaming: true,
                    videoProfile: "high"
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Mister Magoo's Christmas Carol",
                type: "coverPoster",
                url: "/library/metadata/57200/thumb/1737376185"
              },
              {
                alt: "Mister Magoo's Christmas Carol",
                type: "background",
                url: "/library/metadata/57200/art/1737376185"
              },
              {
                alt: "Mister Magoo's Christmas Carol",
                type: "clearLogo",
                url: "/library/metadata/57200/clearLogo/1737376185"
              }
            ],
            UltraBlurColors: {
              topLeft: "4b1f07",
              topRight: "8a4c0a",
              bottomRight: "160303",
              bottomLeft: "294d7e"
            },
            Genre: [
              {
                tag: "Animation"
              },
              {
                tag: "Comedy"
              }
            ],
            Country: [
              {
                tag: "United States of America"
              }
            ],
            Director: [
              {
                tag: "Abe Levitow"
              }
            ],
            Writer: [
              {
                tag: "Barbara Chain"
              },
              {
                tag: "Bob Merrill"
              }
            ],
            Role: [
              {
                tag: "Jim Backus"
              },
              {
                tag: "Morey Amsterdam"
              },
              {
                tag: "Jack Cassidy"
              }
            ]
          },
          {
            ratingKey: "57198",
            key: "/library/metadata/57198",
            guid: "plex://movie/5d77683d2e80df001ebdf300",
            slug: "mickeys-once-upon-a-christmas",
            studio: "Disney Television Animation",
            type: "movie",
            title: "Mickey's Once Upon a Christmas",
            librarySectionTitle: "Movies (Kids)",
            librarySectionID: 13,
            librarySectionKey: "/library/sections/13",
            contentRating: "G",
            summary:
              "Three tales of Christmas past about Donald's nephews reliving the day on repeat, Max Goof's belief in Santa being challenged, and Mickey and Minnie making ends meet.",
            rating: 5.0,
            audienceRating: 6.7,
            year: 1999,
            tagline: "Mickey, Donald & Goofy Star In An All-New Movie",
            thumb: "/library/metadata/57198/thumb/1737376157",
            art: "/library/metadata/57198/art/1737376157",
            duration: 3949952,
            originallyAvailableAt: "1999-11-02",
            addedAt: 1737376155,
            updatedAt: 1737376157,
            audienceRatingImage: "rottentomatoes://image.rating.upright",
            chapterSource: "media",
            ratingImage: "rottentomatoes://image.rating.rotten",
            Media: [
              {
                id: 61331,
                duration: 3949952,
                bitrate: 3631,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 6,
                audioCodec: "eac3",
                videoCodec: "hevc",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "24p",
                videoProfile: "main 10",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 92377,
                    key: "/library/parts/92377/1713303407/file.mkv",
                    duration: 3949952,
                    file: "/Movies (Kids)/Mickey's Once Upon a Christmas (1999)/Mickey's Once Upon a Christmas (1999) Bluray-1080p.mkv",
                    size: 1775335339,
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "main 10"
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Mickey's Once Upon a Christmas",
                type: "coverPoster",
                url: "/library/metadata/57198/thumb/1737376157"
              },
              {
                alt: "Mickey's Once Upon a Christmas",
                type: "background",
                url: "/library/metadata/57198/art/1737376157"
              },
              {
                alt: "Mickey's Once Upon a Christmas",
                type: "clearLogo",
                url: "/library/metadata/57198/clearLogo/1737376157"
              }
            ],
            UltraBlurColors: {
              topLeft: "501913",
              topRight: "a7271f",
              bottomRight: "a8251d",
              bottomLeft: "943f35"
            },
            Genre: [
              {
                tag: "Animation"
              },
              {
                tag: "Family"
              }
            ],
            Country: [
              {
                tag: "United States of America"
              }
            ],
            Director: [
              {
                tag: "Bill Speers"
              },
              {
                tag: "Toby Shelton"
              },
              {
                tag: "Jun Falkenstein"
              }
            ],
            Writer: [
              {
                tag: "Ross Hastings"
              }
            ],
            Role: [
              {
                tag: "Kelsey Grammer"
              },
              {
                tag: "Wayne Allwine"
              },
              {
                tag: "Russi Taylor"
              }
            ]
          },
          {
            ratingKey: "57195",
            key: "/library/metadata/57195",
            guid: "plex://movie/5d77683c3c3c2a001fbcf68f",
            slug: "mickeys-christmas-carol",
            studio: "Walt Disney Pictures",
            type: "movie",
            title: "Mickey's Christmas Carol",
            librarySectionTitle: "Movies (Kids)",
            librarySectionID: 13,
            librarySectionKey: "/library/sections/13",
            contentRating: "G",
            summary:
              "It's the same old classic Charles Dickens story with an all star Disney cast. Uncle Scrooge McDuck is appropriately enough Scrooge and is visited by his dead partner and 3 spirits one night to remember the joys of Christmas.",
            rating: 10.0,
            audienceRating: 9.1,
            year: 1983,
            tagline:
              "All your Disney pals star in this retelling of a Dickens Christmas classic.",
            thumb: "/library/metadata/57195/thumb/1737376102",
            art: "/library/metadata/57195/art/1737376102",
            duration: 1539626,
            originallyAvailableAt: "1983-10-20",
            addedAt: 1737376099,
            updatedAt: 1737376102,
            audienceRatingImage: "rottentomatoes://image.rating.upright",
            primaryExtraKey: "/library/metadata/57196",
            ratingImage: "rottentomatoes://image.rating.ripe",
            Media: [
              {
                id: 61326,
                duration: 1539626,
                bitrate: 2725,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 2,
                audioCodec: "aac",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mp4",
                videoFrameRate: "24p",
                optimizedForStreaming: 0,
                audioProfile: "lc",
                has64bitOffsets: false,
                videoProfile: "high",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 92372,
                    key: "/library/parts/92372/1702493099/file.mp4",
                    duration: 1539626,
                    file: "/Movies (Kids)/Mickey's Christmas Carol (1983)/Mickey's Christmas Carol (1983) Bluray-1080p.mp4",
                    size: 525422627,
                    audioProfile: "lc",
                    container: "mp4",
                    has64bitOffsets: false,
                    indexes: "sd",
                    optimizedForStreaming: false,
                    videoProfile: "high"
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Mickey's Christmas Carol",
                type: "coverPoster",
                url: "/library/metadata/57195/thumb/1737376102"
              },
              {
                alt: "Mickey's Christmas Carol",
                type: "background",
                url: "/library/metadata/57195/art/1737376102"
              },
              {
                alt: "Mickey's Christmas Carol",
                type: "clearLogo",
                url: "/library/metadata/57195/clearLogo/1737376102"
              }
            ],
            UltraBlurColors: {
              topLeft: "152957",
              topRight: "222d61",
              bottomRight: "296192",
              bottomLeft: "2e5789"
            },
            Genre: [
              {
                tag: "Family"
              },
              {
                tag: "Animation"
              }
            ],
            Country: [
              {
                tag: "United States of America"
              }
            ],
            Director: [
              {
                tag: "Burny Mattinson"
              }
            ],
            Writer: [
              {
                tag: "Burny Mattinson"
              },
              {
                tag: "Tony Marino"
              }
            ],
            Role: [
              {
                tag: "Alan Young"
              },
              {
                tag: "Wayne Allwine"
              },
              {
                tag: "Clarence Nash"
              }
            ]
          },
          {
            ratingKey: "57191",
            key: "/library/metadata/57191",
            guid: "plex://movie/5d7768285af944001f1f7092",
            slug: "meet-me-in-st-louis",
            studio: "Metro-Goldwyn-Mayer",
            type: "movie",
            title: "Meet Me in St. Louis",
            librarySectionTitle: "Movies (Kids)",
            librarySectionID: 13,
            librarySectionKey: "/library/sections/13",
            contentRating: "Not Rated",
            summary:
              "St. Louis 1903. The well-off Smith family has four beautiful daughters, including Esther and little Tootie. 17-year old Esther has fallen in love with the boy next door who has just moved in, John. He however barely notices her at first. The family is shocked when Mr. Smith reveals that he has been transfered to a nice position in New York, which means that the family has to leave St. Louis and the St. Louis Fair.",
            rating: 10.0,
            audienceRating: 8.7,
            year: 1944,
            tagline: "Glorious love story with music!",
            thumb: "/library/metadata/57191/thumb/1737376098",
            art: "/library/metadata/57191/art/1737376098",
            duration: 6778068,
            originallyAvailableAt: "1944-11-28",
            addedAt: 1737376095,
            updatedAt: 1737376098,
            audienceRatingImage: "rottentomatoes://image.rating.upright",
            primaryExtraKey: "/library/metadata/57192",
            ratingImage: "rottentomatoes://image.rating.ripe",
            Media: [
              {
                id: 61319,
                duration: 6778068,
                bitrate: 2724,
                width: 1488,
                height: 1080,
                aspectRatio: 1.33,
                audioChannels: 2,
                audioCodec: "aac",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mp4",
                videoFrameRate: "24p",
                optimizedForStreaming: 0,
                audioProfile: "lc",
                has64bitOffsets: false,
                videoProfile: "high",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 92365,
                    key: "/library/parts/92365/1702493117/file.mp4",
                    duration: 6778068,
                    file: "/Movies (Kids)/Meet Me in St. Louis (1944)/Meet Me in St. Louis (1944) Bluray-1080p.mp4",
                    size: 2313890011,
                    audioProfile: "lc",
                    container: "mp4",
                    has64bitOffsets: false,
                    indexes: "sd",
                    optimizedForStreaming: false,
                    videoProfile: "high"
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Meet Me in St. Louis",
                type: "coverPoster",
                url: "/library/metadata/57191/thumb/1737376098"
              },
              {
                alt: "Meet Me in St. Louis",
                type: "background",
                url: "/library/metadata/57191/art/1737376098"
              }
            ],
            UltraBlurColors: {
              topLeft: "570e10",
              topRight: "710403",
              bottomRight: "205e97",
              bottomLeft: "8a4b20"
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
            Director: [
              {
                tag: "Vincente Minnelli"
              }
            ],
            Writer: [
              {
                tag: "Irving Brecher"
              },
              {
                tag: "Fred F. Finklehoffe"
              }
            ],
            Role: [
              {
                tag: "Judy Garland"
              },
              {
                tag: "Margaret O'Brien"
              },
              {
                tag: "Mary Astor"
              }
            ]
          },
          {
            ratingKey: "57186",
            key: "/library/metadata/57186",
            guid: "plex://movie/5d776b1847dd6e001f6db0c5",
            slug: "jingle-all-the-way-2",
            studio: "WWE Studios",
            type: "movie",
            title: "Jingle All the Way 2",
            librarySectionTitle: "Movies (Kids)",
            librarySectionID: 13,
            librarySectionKey: "/library/sections/13",
            contentRating: "PG",
            summary:
              "Larry's daughter Noel wants only one thing for Christmas: a talking bear. Her stepdad Victor intends to make sure that Larry can't get one.",
            audienceRating: 3.1,
            year: 2014,
            tagline: "Two Dads. One Mission. Double the Holiday Fun!",
            thumb: "/library/metadata/57186/thumb/1737376027",
            art: "/library/metadata/57186/art/1737376027",
            duration: 5609608,
            originallyAvailableAt: "2014-10-29",
            addedAt: 1737376024,
            updatedAt: 1737376027,
            audienceRatingImage: "rottentomatoes://image.rating.spilled",
            chapterSource: "media",
            primaryExtraKey: "/library/metadata/57187",
            Media: [
              {
                id: 61306,
                duration: 5609608,
                bitrate: 3967,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 6,
                audioCodec: "eac3",
                videoCodec: "hevc",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "24p",
                videoProfile: "main",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 92352,
                    key: "/library/parts/92352/1705431235/file.mkv",
                    duration: 5609608,
                    file: "/Movies (Kids)/Jingle All the Way 2 (2014)/Jingle All the Way 2 (2014) Bluray-1080p.mkv",
                    size: 2784600510,
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "main"
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Jingle All the Way 2",
                type: "coverPoster",
                url: "/library/metadata/57186/thumb/1737376027"
              },
              {
                alt: "Jingle All the Way 2",
                type: "background",
                url: "/library/metadata/57186/art/1737376027"
              },
              {
                alt: "Jingle All the Way 2",
                type: "clearLogo",
                url: "/library/metadata/57186/clearLogo/1737376027"
              }
            ],
            UltraBlurColors: {
              topLeft: "54140e",
              topRight: "2d5888",
              bottomRight: "963b28",
              bottomLeft: "325821"
            },
            Genre: [
              {
                tag: "Comedy"
              },
              {
                tag: "Family"
              }
            ],
            Country: [
              {
                tag: "United States of America"
              }
            ],
            Director: [
              {
                tag: "Alex Zamm"
              }
            ],
            Writer: [
              {
                tag: "Stephen Mazur"
              }
            ],
            Role: [
              {
                tag: "Larry the Cable Guy"
              },
              {
                tag: "Brian Stepanek"
              },
              {
                tag: "Lauren K. Robek"
              }
            ]
          },
          {
            ratingKey: "57183",
            key: "/library/metadata/57183",
            guid: "plex://movie/5d776aa747dd6e001f6d57aa",
            slug: "toy-story-that-time-forgot",
            studio: "Pixar",
            type: "movie",
            title: "Toy Story That Time Forgot",
            librarySectionTitle: "Movies (Kids)",
            librarySectionID: 13,
            librarySectionKey: "/library/sections/13",
            contentRating: "G",
            summary:
              "The story takes place after a Christmas holiday with the regular toys finding themselves trapped in unusual territory with a group of new and delusional action figures. Together they must find their way back to their child's bedroom and to safety.",
            rating: 9.2,
            audienceRating: 8.2,
            year: 2014,
            thumb: "/library/metadata/57183/thumb/1737375480",
            art: "/library/metadata/57183/art/1737375480",
            duration: 1296587,
            originallyAvailableAt: "2014-12-02",
            addedAt: 1737375475,
            updatedAt: 1737375480,
            audienceRatingImage: "rottentomatoes://image.rating.upright",
            chapterSource: "media",
            primaryExtraKey: "/library/metadata/57184",
            ratingImage: "rottentomatoes://image.rating.ripe",
            Media: [
              {
                id: 61301,
                duration: 1296587,
                bitrate: 13225,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 6,
                audioCodec: "ac3",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mp4",
                videoFrameRate: "24p",
                optimizedForStreaming: 0,
                has64bitOffsets: false,
                videoProfile: "high",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 92347,
                    key: "/library/parts/92347/1497662265/file.mp4",
                    duration: 1296587,
                    file: "/Movies (Kids)/Toy Story That Time Forgot (2014)/Toy.Story.That.Time.Forgot.2014.1080p.BluRay.x264.AC3.mp4",
                    size: 2144296964,
                    container: "mp4",
                    has64bitOffsets: false,
                    hasThumbnail: "1",
                    indexes: "sd",
                    optimizedForStreaming: false,
                    videoProfile: "high"
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Toy Story That Time Forgot",
                type: "coverPoster",
                url: "/library/metadata/57183/thumb/1737375480"
              },
              {
                alt: "Toy Story That Time Forgot",
                type: "background",
                url: "/library/metadata/57183/art/1737375480"
              },
              {
                alt: "Toy Story That Time Forgot",
                type: "clearLogo",
                url: "/library/metadata/57183/clearLogo/1737375480"
              }
            ],
            UltraBlurColors: {
              topLeft: "14092a",
              topRight: "2d0a06",
              bottomRight: "2c2322",
              bottomLeft: "140305"
            },
            Genre: [
              {
                tag: "Animation"
              },
              {
                tag: "Family"
              }
            ],
            Country: [
              {
                tag: "United States of America"
              }
            ],
            Director: [
              {
                tag: "Steve Purcell"
              }
            ],
            Writer: [
              {
                tag: "Steve Purcell"
              }
            ],
            Role: [
              {
                tag: "Kristen Schaal"
              },
              {
                tag: "Kevin McKidd"
              },
              {
                tag: "Tom Hanks"
              }
            ]
          },
          {
            ratingKey: "57159",
            key: "/library/metadata/57159",
            guid: "plex://movie/5d9f3c7f6fc551001ef89219",
            slug: "toy-story-4",
            studio: "Walt Disney Pictures",
            type: "movie",
            title: "Toy Story 4",
            librarySectionTitle: "Movies (Kids)",
            librarySectionID: 13,
            librarySectionKey: "/library/sections/13",
            contentRating: "G",
            summary:
              "Woody, Buzz Lightyear and the rest of the gang embark on a road trip with Bonnie and a new toy named Forky. The adventurous journey turns into an unexpected reunion as Woody's slight detour leads him to his long-lost friend Bo Peep. As Woody and Bo discuss the old days, they soon start to realize that they're two worlds apart when it comes to what they want from life as a toy.",
            rating: 9.7,
            audienceRating: 9.4,
            year: 2019,
            tagline: "Get Ready to Hit the Road",
            thumb: "/library/metadata/57159/thumb/1737375452",
            art: "/library/metadata/57159/art/1737375452",
            duration: 6003465,
            originallyAvailableAt: "2019-06-20",
            addedAt: 1737375444,
            updatedAt: 1737375452,
            audienceRatingImage: "rottentomatoes://image.rating.upright",
            chapterSource: "media",
            primaryExtraKey: "/library/metadata/57160",
            ratingImage: "rottentomatoes://image.rating.ripe",
            Media: [
              {
                id: 61231,
                duration: 6003465,
                bitrate: 7816,
                width: 1920,
                height: 808,
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
                    id: 92277,
                    key: "/library/parts/92277/1569469633/file.mkv",
                    duration: 6003465,
                    file: "/Movies (Kids)/Toy Story 4 (2019)/Toy.Story.4.2019.1080p.BluRay.x264-SPARKS en.mkv",
                    size: 5867362099,
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
                alt: "Toy Story 4",
                type: "coverPoster",
                url: "/library/metadata/57159/thumb/1737375452"
              },
              {
                alt: "Toy Story 4",
                type: "background",
                url: "/library/metadata/57159/art/1737375452"
              },
              {
                alt: "Toy Story 4",
                type: "clearLogo",
                url: "/library/metadata/57159/clearLogo/1737375452"
              }
            ],
            UltraBlurColors: {
              topLeft: "361e4e",
              topRight: "9a3546",
              bottomRight: "aa2217",
              bottomLeft: "3b3b7e"
            },
            Genre: [
              {
                tag: "Family"
              },
              {
                tag: "Animation"
              }
            ],
            Country: [
              {
                tag: "United States of America"
              }
            ],
            Director: [
              {
                tag: "Josh Cooley"
              }
            ],
            Writer: [
              {
                tag: "Rashida Jones"
              },
              {
                tag: "Stephany Folsom"
              }
            ],
            Role: [
              {
                tag: "Tom Hanks"
              },
              {
                tag: "Tim Allen"
              },
              {
                tag: "Annie Potts"
              }
            ]
          },
          {
            ratingKey: "57141",
            key: "/library/metadata/57141",
            guid: "plex://movie/5d77683454f42c001f8c435e",
            slug: "toy-story-3",
            studio: "Pixar",
            type: "movie",
            title: "Toy Story 3",
            librarySectionTitle: "Movies (Kids)",
            librarySectionID: 13,
            librarySectionKey: "/library/sections/13",
            contentRating: "G",
            summary:
              "The toys are mistakenly delivered to a day-care center instead of the attic right before Andy leaves for college, and it's up to Woody to convince the other toys that they weren't abandoned and to return home.",
            rating: 9.8,
            audienceRating: 9.0,
            year: 2010,
            tagline: "No toy gets left behind.",
            thumb: "/library/metadata/57141/thumb/1737375359",
            art: "/library/metadata/57141/art/1737375359",
            duration: 6183360,
            originallyAvailableAt: "2010-06-16",
            addedAt: 1737375352,
            updatedAt: 1737375359,
            audienceRatingImage: "rottentomatoes://image.rating.upright",
            chapterSource: "media",
            primaryExtraKey: "/library/metadata/57142",
            ratingImage: "rottentomatoes://image.rating.ripe",
            Media: [
              {
                id: 61187,
                duration: 6183360,
                bitrate: 12225,
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
                    id: 92233,
                    key: "/library/parts/92233/1563643266/file.mkv",
                    duration: 6183360,
                    file: "/Movies (Kids)/Toy Story 3 (2010)/Toy.Story.3.2010.1080p.BluRay.HEBDUB.Also.English.DD5.1.x264-ZionHD.mkv",
                    size: 9450950905,
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "high"
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Toy Story 3",
                type: "coverPoster",
                url: "/library/metadata/57141/thumb/1737375359"
              },
              {
                alt: "Toy Story 3",
                type: "background",
                url: "/library/metadata/57141/art/1737375359"
              },
              {
                alt: "Toy Story 3",
                type: "clearLogo",
                url: "/library/metadata/57141/clearLogo/1737375359"
              }
            ],
            UltraBlurColors: {
              topLeft: "541313",
              topRight: "306091",
              bottomRight: "96394f",
              bottomLeft: "35306d"
            },
            Genre: [
              {
                tag: "Animation"
              },
              {
                tag: "Family"
              }
            ],
            Country: [
              {
                tag: "United States of America"
              }
            ],
            Director: [
              {
                tag: "Lee Unkrich"
              }
            ],
            Writer: [
              {
                tag: "Nick Sung"
              },
              {
                tag: "Michael Arndt"
              }
            ],
            Role: [
              {
                tag: "Tom Hanks"
              },
              {
                tag: "Tim Allen"
              },
              {
                tag: "Joan Cusack"
              }
            ]
          },
          {
            ratingKey: "57136",
            key: "/library/metadata/57136",
            guid: "plex://movie/5d77682885719b001f3a124d",
            slug: "toy-story-2",
            studio: "Pixar",
            type: "movie",
            title: "Toy Story 2",
            librarySectionTitle: "Movies (Kids)",
            librarySectionID: 13,
            librarySectionKey: "/library/sections/13",
            contentRating: "G",
            summary:
              "While Andy is away at summer camp Woody has been toynapped by Al McWiggin, a greedy collector and proprietor of \"Al's Toy Barn\". In this all-out rescue mission, Buzz and his friends Mr. Potato Head, Slinky Dog, Rex and Hamm spring into action to rescue Woody from winding up as a museum piece. They must find a way to save him before he gets sold in Japan forever and they'll never see him again.",
            rating: 10.0,
            audienceRating: 8.7,
            year: 1999,
            tagline: "The toys are back!",
            thumb: "/library/metadata/57136/thumb/1738466481",
            art: "/library/metadata/57136/art/1738466481",
            duration: 5895015,
            originallyAvailableAt: "1999-11-24",
            addedAt: 1737375284,
            updatedAt: 1738466481,
            audienceRatingImage: "rottentomatoes://image.rating.upright",
            chapterSource: "media",
            ratingImage: "rottentomatoes://image.rating.ripe",
            Media: [
              {
                id: 61174,
                duration: 5895015,
                bitrate: 12034,
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
                    id: 92220,
                    key: "/library/parts/92220/1563643261/file.mkv",
                    duration: 5895015,
                    file: "/Movies (Kids)/Toy Story 2 (1999)/Toy.Story.2.1999.1080p.BluRay.HEBDUB.Also.English.DTS-ES.x264-ZionHD.mkv",
                    size: 8869852529,
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "high"
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Toy Story 2",
                type: "coverPoster",
                url: "/library/metadata/57136/thumb/1738466481"
              },
              {
                alt: "Toy Story 2",
                type: "background",
                url: "/library/metadata/57136/art/1738466481"
              },
              {
                alt: "Toy Story 2",
                type: "clearLogo",
                url: "/library/metadata/57136/clearLogo/1738466481"
              }
            ],
            UltraBlurColors: {
              topLeft: "570f05",
              topRight: "65170b",
              bottomRight: "83210a",
              bottomLeft: "83471e"
            },
            Genre: [
              {
                tag: "Animation"
              },
              {
                tag: "Comedy"
              }
            ],
            Country: [
              {
                tag: "United States of America"
              }
            ],
            Director: [
              {
                tag: "John Lasseter"
              }
            ],
            Writer: [
              {
                tag: "Andrew Stanton"
              },
              {
                tag: "Doug Chamberlin"
              }
            ],
            Role: [
              {
                tag: "Tom Hanks"
              },
              {
                tag: "Tim Allen"
              },
              {
                tag: "Joan Cusack"
              }
            ]
          },
          {
            ratingKey: "57134",
            key: "/library/metadata/57134",
            guid: "plex://movie/5d776828880197001ec90d44",
            slug: "toy-story",
            studio: "Pixar",
            type: "movie",
            title: "Toy Story",
            librarySectionTitle: "Movies (Kids)",
            librarySectionID: 13,
            librarySectionKey: "/library/sections/13",
            contentRating: "G",
            summary:
              "Led by Woody, Andy's toys live happily in his room until Andy's birthday brings Buzz Lightyear onto the scene. Afraid of losing his place in Andy's heart, Woody plots against Buzz. But when circumstances separate Buzz and Woody from their owner, the duo eventually learns to put aside their differences.",
            rating: 10.0,
            audienceRating: 9.2,
            year: 1995,
            tagline: "Hang on for the comedy that goes to infinity and beyond!",
            thumb: "/library/metadata/57134/thumb/1737375227",
            art: "/library/metadata/57134/art/1737375227",
            duration: 4888092,
            originallyAvailableAt: "1995-11-22",
            addedAt: 1737375221,
            updatedAt: 1737375227,
            audienceRatingImage: "rottentomatoes://image.rating.upright",
            chapterSource: "media",
            primaryExtraKey: "/library/metadata/57135",
            ratingImage: "rottentomatoes://image.rating.ripe",
            Media: [
              {
                id: 61172,
                duration: 4888092,
                bitrate: 16749,
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
                    id: 92218,
                    key: "/library/parts/92218/1563643161/file.mkv",
                    duration: 4888092,
                    file: "/Movies (Kids)/Toy Story (1995)/Toy.Story.1995.1080p.BluRay.HEBDUB.Also.English.DTS-ES.x264-ZionHD.mkv",
                    size: 10235442134,
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "high"
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Toy Story",
                type: "coverPoster",
                url: "/library/metadata/57134/thumb/1737375227"
              },
              {
                alt: "Toy Story",
                type: "background",
                url: "/library/metadata/57134/art/1737375227"
              },
              {
                alt: "Toy Story",
                type: "clearLogo",
                url: "/library/metadata/57134/clearLogo/1737375227"
              }
            ],
            UltraBlurColors: {
              topLeft: "371110",
              topRight: "602119",
              bottomRight: "623ac5",
              bottomLeft: "6a2844"
            },
            Genre: [
              {
                tag: "Animation"
              },
              {
                tag: "Comedy"
              }
            ],
            Country: [
              {
                tag: "United States of America"
              }
            ],
            Director: [
              {
                tag: "John Lasseter"
              }
            ],
            Writer: [
              {
                tag: "Alec Sokolow"
              },
              {
                tag: "Joel Cohen"
              }
            ],
            Role: [
              {
                tag: "Tom Hanks"
              },
              {
                tag: "Tim Allen"
              },
              {
                tag: "Don Rickles"
              }
            ]
          },
          {
            ratingKey: "57132",
            key: "/library/metadata/57132",
            guid: "plex://movie/5d776852eb5d26001f1e5fde",
            slug: "jack-frost-1979",
            studio: "Rankin/Bass Productions",
            type: "movie",
            title: "Jack Frost",
            librarySectionTitle: "Movies (Kids)",
            librarySectionID: 13,
            librarySectionKey: "/library/sections/13",
            contentRating: "TV-G",
            summary:
              "Pardon-me Pete, the official groundhog of Groundhog Day, tells the story of Jack Frost, who falls in love with a beautiful young woman and begs Father Winter to make him human so that she can see him. His request is granted, but only on the condition that by the Spring he has a house, a bag of gold, a horse and a wife. But Jack finds that life as a human is more complicated than he thought.",
            rating: 5.7,
            audienceRating: 6.1,
            year: 1979,
            thumb: "/library/metadata/57132/thumb/1737375149",
            art: "/library/metadata/57132/art/1737375149",
            duration: 2904788,
            originallyAvailableAt: "1979-12-13",
            addedAt: 1737375146,
            updatedAt: 1737375149,
            audienceRatingImage: "rottentomatoes://image.rating.upright",
            chapterSource: "media",
            primaryExtraKey: "/library/metadata/57133",
            ratingImage: "rottentomatoes://image.rating.rotten",
            Media: [
              {
                id: 61169,
                duration: 2904788,
                bitrate: 16729,
                width: 1482,
                height: 1080,
                aspectRatio: 1.33,
                audioChannels: 2,
                audioCodec: "flac",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "24p",
                videoProfile: "high",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 92215,
                    key: "/library/parts/92215/1703409376/file.mkv",
                    duration: 2904788,
                    file: "/Movies (Kids)/Jack Frost (1979)/Jack Frost (1979) Bluray-1080p.mkv",
                    size: 6067612421,
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "high"
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Jack Frost",
                type: "coverPoster",
                url: "/library/metadata/57132/thumb/1737375149"
              },
              {
                alt: "Jack Frost",
                type: "background",
                url: "/library/metadata/57132/art/1737375149"
              },
              {
                alt: "Jack Frost",
                type: "clearLogo",
                url: "/library/metadata/57132/clearLogo/1737375149"
              }
            ],
            UltraBlurColors: {
              topLeft: "590617",
              topRight: "091c13",
              bottomRight: "2f628c",
              bottomLeft: "243f6e"
            },
            Genre: [
              {
                tag: "Family"
              },
              {
                tag: "Animation"
              }
            ],
            Country: [
              {
                tag: "United States of America"
              },
              {
                tag: "Japan"
              }
            ],
            Director: [
              {
                tag: "Jules Bass"
              },
              {
                tag: "Arthur Rankin, Jr."
              }
            ],
            Writer: [
              {
                tag: "Romeo Muller"
              }
            ],
            Role: [
              {
                tag: "Buddy Hackett"
              },
              {
                tag: "Robert Morse"
              },
              {
                tag: "Paul Frees"
              }
            ]
          }
        ]
      }
    }

    validateResponseSpec("/hubs/home/recentlyAdded", "get", 200, response)
  })
})
