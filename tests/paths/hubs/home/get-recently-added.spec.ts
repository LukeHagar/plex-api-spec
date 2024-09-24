import { validateResponseSpec } from "@utils"
import { describe, it } from "vitest"

describe("GET /hubs/home/recentlyAdded", () => {
  it("should validate the 200 response when the API spec is valid", () => {
    // /hubs/home/recentlyAdded?type=2&sectionID=10&contentDirectoryID=10&pinnedContentDirectoryID=3%2C5%2C7%2C13%2C12%2C1%2C6%2C14%2C2%2C10%2C16%2C17&includeMeta=1
    const response = {
      MediaContainer: {
        size: 24,
        totalSize: 50,
        offset: 12,
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
            ratingKey: "55007",
            key: "/library/metadata/55007",
            parentRatingKey: "55006",
            grandparentRatingKey: "29621",
            guid: "plex://episode/66b00083b4ffe0755969b654",
            parentGuid: "plex://season/66c3b6f87f6b3620cb902f6c",
            grandparentGuid: "plex://show/5d9c08daffd9ef001e99b8f5",
            grandparentSlug: "90-day-fiance-before-the-90-days",
            type: "episode",
            title: "Great Expectations",
            grandparentKey: "/library/metadata/29621",
            parentKey: "/library/metadata/55006",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "90 Day Fiancé: Before the 90 Days",
            parentTitle: "Season 7",
            contentRating: "TV-14",
            summary:
              "Rayne sees a future with a blind man in Nigeria. Tigerlily plans to marry her fiancé on the first day they meet. Loren prepares to meet the ladyboy of his dreams. Brian is keeping some details about his tragic accident from Ingrid.",
            index: 1,
            parentIndex: 7,
            year: 2024,
            thumb: "/library/metadata/55007/thumb/1726724493",
            art: "/library/metadata/29621/art/1726724813",
            grandparentThumb: "/library/metadata/29621/thumb/1726724813",
            grandparentArt: "/library/metadata/29621/art/1726724813",
            duration: 5174890,
            originallyAvailableAt: "2024-09-01",
            addedAt: 1725241429,
            updatedAt: 1726724493,
            Media: [
              {
                id: 56820,
                duration: 5174890,
                bitrate: 6398,
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
                    id: 86687,
                    key: "/library/parts/86687/1725241342/file.mkv",
                    duration: 5174890,
                    file: "/TV Shows (Reality)/90 Day Fiancé - Before The 90 Days/Season 07/90 Day Fiancé - Before the 90 Days - S07E01 - Great Expectations WEBDL-1080p.mkv",
                    size: 4140420651,
                    audioProfile: "lc",
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "main",
                    Stream: [
                      {
                        id: 272796,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 6273,
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
                        displayTitle: "1080p (H.264)",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 272797,
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
                        id: 272798,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        displayTitle: "English (SRT)",
                        extendedDisplayTitle: "English (SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Great Expectations",
                type: "coverPoster",
                url: "/library/metadata/29621/thumb/1726724813"
              },
              {
                alt: "Great Expectations",
                type: "snapshot",
                url: "/library/metadata/55007/thumb/1726724493"
              },
              {
                alt: "Great Expectations",
                type: "background",
                url: "/library/metadata/29621/art/1726724813"
              },
              {
                alt: "Great Expectations",
                type: "clearLogo",
                url: "/library/metadata/29621/clearLogo/1726724813"
              }
            ],
            UltraBlurColors: {
              topLeft: "4b1e19",
              topRight: "43181a",
              bottomRight: "73332c",
              bottomLeft: "714120"
            },
            Guid: [
              {
                id: "imdb://tt33052638"
              },
              {
                id: "tmdb://5514154"
              },
              {
                id: "tvdb://10644014"
              }
            ]
          },
          {
            ratingKey: "55005",
            key: "/library/metadata/55005",
            parentRatingKey: "54783",
            grandparentRatingKey: "47836",
            guid: "local://55005",
            parentGuid: "plex://season/6658498a925882d687b3e67d",
            grandparentGuid: "plex://show/5d9c08172192ba001f307329",
            grandparentSlug: "60-days-in",
            type: "episode",
            title: "Episode 14",
            grandparentKey: "/library/metadata/47836",
            parentKey: "/library/metadata/54783",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "60 Days In",
            parentTitle: "Season 9",
            contentRating: "TV-14",
            summary: "",
            index: 14,
            parentIndex: 9,
            thumb: "/library/metadata/55005/thumb/1725143726",
            art: "/library/metadata/47836/art/1724651438",
            grandparentThumb: "/library/metadata/47836/thumb/1724651438",
            grandparentArt: "/library/metadata/47836/art/1724651438",
            grandparentTheme: "/library/metadata/47836/theme/1724651438",
            duration: 4996266,
            addedAt: 1725143719,
            updatedAt: 1725143726,
            Media: [
              {
                id: 56819,
                duration: 4996266,
                bitrate: 5596,
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
                    id: 86686,
                    key: "/library/parts/86686/1725143645/file.mkv",
                    duration: 4996266,
                    file: "/TV Shows (Reality)/60 Days In/Season 09/60 Days In - S09E14 - Top 50 of 60 WEBDL-1080p.mkv",
                    size: 3496191654,
                    audioProfile: "he-aac",
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "high",
                    Stream: [
                      {
                        id: 272793,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 5532,
                        bitDepth: 8,
                        chromaLocation: "left",
                        chromaSubsampling: "4:2:0",
                        codedHeight: 1088,
                        codedWidth: 1920,
                        frameRate: 29.97,
                        hasScalingMatrix: false,
                        height: 1080,
                        level: 40,
                        profile: "high",
                        refFrames: 4,
                        scanType: "progressive",
                        width: 1920,
                        displayTitle: "1080p (H.264)",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 272794,
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
                        samplingRate: 48000,
                        displayTitle: "English (HE-AAC Stereo)",
                        extendedDisplayTitle: "English (HE-AAC Stereo)"
                      },
                      {
                        id: 272795,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        title: "English",
                        displayTitle: "English (SRT)",
                        extendedDisplayTitle: "English (SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Episode 14",
                type: "coverPoster",
                url: "/library/metadata/47836/thumb/1724651438"
              },
              {
                alt: "Episode 14",
                type: "snapshot",
                url: "/library/metadata/55005/thumb/1725143726"
              },
              {
                alt: "Episode 14",
                type: "background",
                url: "/library/metadata/47836/art/1724651438"
              }
            ],
            UltraBlurColors: {
              topLeft: "283213",
              topRight: "25211c",
              bottomRight: "35160d",
              bottomLeft: "3e5a9e"
            }
          },
          {
            ratingKey: "54974",
            key: "/library/metadata/54974",
            parentRatingKey: "54843",
            grandparentRatingKey: "27613",
            guid: "plex://episode/66c3c6574823daaa60957221",
            parentGuid: "plex://season/6659055ddd27970dd48c1b7d",
            grandparentGuid: "plex://show/5d9c09240aaccd001f8f45b3",
            grandparentSlug: "90-day-fiance-the-other-way",
            type: "episode",
            title: "Some Kind Of Awful",
            grandparentKey: "/library/metadata/27613",
            parentKey: "/library/metadata/54843",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "90 Day Fiancé: The Other Way",
            parentTitle: "Season 6",
            contentRating: "TV-14",
            summary:
              "Corona has a surprising first encounter with Ingi's parents. Joanne and her sons leave for Ireland to meet Sean. Statler and Dempsey hit the open road. An argument between Sarper and Shekinah ruins their birthday.",
            index: 9,
            parentIndex: 6,
            year: 2024,
            thumb: "/library/metadata/54974/thumb/1724815037",
            art: "/library/metadata/27613/art/1726724811",
            grandparentThumb: "/library/metadata/27613/thumb/1726724811",
            grandparentArt: "/library/metadata/27613/art/1726724811",
            duration: 2558048,
            originallyAvailableAt: "2024-08-26",
            addedAt: 1724718727,
            updatedAt: 1724815037,
            Media: [
              {
                id: 56790,
                duration: 2558048,
                bitrate: 9953,
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
                    id: 86657,
                    key: "/library/parts/86657/1724718679/file.mkv",
                    duration: 2558048,
                    file: "/TV Shows (Reality)/90 Day Fiancé - The Other Way/Season 06/90 Day Fiancé - The Other Way - S06E09 - Some Kind Of Awful WEBDL-1080p.mkv",
                    size: 3183311287,
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "high",
                    Stream: [
                      {
                        id: 272716,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 9729,
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
                        displayTitle: "1080p (H.264)",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 272717,
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
                        id: 272718,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        title: "English (SDH)",
                        displayTitle: "English (SRT)",
                        extendedDisplayTitle: "English (SDH) (SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Some Kind Of Awful",
                type: "coverPoster",
                url: "/library/metadata/27613/thumb/1726724811"
              },
              {
                alt: "Some Kind Of Awful",
                type: "snapshot",
                url: "/library/metadata/54974/thumb/1724815037"
              },
              {
                alt: "Some Kind Of Awful",
                type: "background",
                url: "/library/metadata/27613/art/1726724811"
              },
              {
                alt: "Some Kind Of Awful",
                type: "clearLogo",
                url: "/library/metadata/27613/clearLogo/1726724811"
              }
            ],
            UltraBlurColors: {
              topLeft: "3f2810",
              topRight: "5c2f1b",
              bottomRight: "6b4622",
              bottomLeft: "431d0b"
            },
            Guid: [
              {
                id: "tmdb://5536574"
              },
              {
                id: "tvdb://10644008"
              }
            ]
          },
          {
            ratingKey: "54972",
            key: "/library/metadata/54972",
            parentRatingKey: "54656",
            grandparentRatingKey: "43135",
            guid: "plex://episode/66a9022714d7926d61f57245",
            parentGuid: "plex://season/65cd200d0e3346d4db23e8db",
            grandparentGuid: "plex://show/5d9c0809e98e47001eb06046",
            grandparentSlug: "90-day-fiance-happily-ever-after",
            type: "episode",
            title: "Tell All: No Limits Part 5",
            grandparentKey: "/library/metadata/43135",
            parentKey: "/library/metadata/54656",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "90 Day Fiancé: Happily Ever After?",
            parentTitle: "Season 8",
            contentRating: "TV-14",
            summary:
              "The couples spend their last night together and Jasmine gives Gino an ultimatum, Manuel makes a surprising confession, and we get an exclusive update on Angela and Michael's relationship. Then, the couples take a lie detector test.",
            index: 24,
            parentIndex: 8,
            year: 2024,
            thumb: "/library/metadata/54972/thumb/1724730007",
            art: "/library/metadata/43135/art/1725070767",
            grandparentThumb: "/library/metadata/43135/thumb/1725070767",
            grandparentArt: "/library/metadata/43135/art/1725070767",
            grandparentTheme: "/library/metadata/43135/theme/1725070767",
            duration: 5131711,
            originallyAvailableAt: "2024-08-25",
            addedAt: 1724643827,
            updatedAt: 1724730007,
            Media: [
              {
                id: 56788,
                duration: 5131711,
                bitrate: 9953,
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
                    id: 86655,
                    key: "/library/parts/86655/1724643731/file.mkv",
                    duration: 5131711,
                    file: "/TV Shows (Reality)/90 Day Fiancé - Happily Ever After!/Season 08/90 Day Fiancé - Happily Ever After! - S08E24 - Tell All - No Limits Part 5 WEBDL-1080p.mkv",
                    size: 6386377187,
                    audioProfile: "lc",
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "main",
                    Stream: [
                      {
                        id: 272706,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 9828,
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
                        displayTitle: "1080p (H.264)",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 272707,
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
                        id: 272708,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        displayTitle: "English (SRT)",
                        extendedDisplayTitle: "English (SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Tell All: No Limits Part 5",
                type: "coverPoster",
                url: "/library/metadata/43135/thumb/1725070767"
              },
              {
                alt: "Tell All: No Limits Part 5",
                type: "snapshot",
                url: "/library/metadata/54972/thumb/1724730007"
              },
              {
                alt: "Tell All: No Limits Part 5",
                type: "background",
                url: "/library/metadata/43135/art/1725070767"
              }
            ],
            UltraBlurColors: {
              topLeft: "2f2221",
              topRight: "713528",
              bottomRight: "54221f",
              bottomLeft: "251c22"
            },
            Guid: [
              {
                id: "tmdb://5504879"
              },
              {
                id: "tvdb://10618041"
              }
            ]
          },
          {
            ratingKey: "54783",
            key: "/library/metadata/54783/children",
            parentRatingKey: "47836",
            guid: "plex://season/6658498a925882d687b3e67d",
            parentGuid: "plex://show/5d9c08172192ba001f307329",
            parentSlug: "60-days-in",
            parentStudio: "Lucky 8 TV",
            type: "season",
            title: "Season 9",
            parentKey: "/library/metadata/47836",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            parentTitle: "60 Days In",
            summary: "",
            index: 9,
            parentIndex: 1,
            parentYear: 2016,
            thumb: "/library/metadata/47836/thumb/1724651438",
            art: "/library/metadata/47836/art/1724651438",
            parentThumb: "/library/metadata/47836/thumb/1724651438",
            parentTheme: "/library/metadata/47836/theme/1724651438",
            leafCount: 14,
            viewedLeafCount: 0,
            addedAt: 1724400697,
            updatedAt: 1717759661,
            Image: [
              {
                alt: "Season 9",
                type: "coverPoster",
                url: "/library/metadata/47836/thumb/1724651438"
              },
              {
                alt: "Season 9",
                type: "background",
                url: "/library/metadata/47836/art/1724651438"
              }
            ],
            Guid: [
              {
                id: "tvdb://2130214"
              }
            ]
          },
          {
            ratingKey: "54943",
            key: "/library/metadata/54943",
            parentRatingKey: "54656",
            grandparentRatingKey: "43135",
            guid: "plex://episode/66a9022814d7926d61f57246",
            parentGuid: "plex://season/65cd200d0e3346d4db23e8db",
            grandparentGuid: "plex://show/5d9c0809e98e47001eb06046",
            grandparentSlug: "90-day-fiance-happily-ever-after",
            type: "episode",
            title: "Tell All: No Limits Part 4",
            grandparentKey: "/library/metadata/43135",
            parentKey: "/library/metadata/54656",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "90 Day Fiancé: Happily Ever After?",
            parentTitle: "Season 8",
            contentRating: "TV-14",
            summary:
              "Rob and Sophie's fight in the hot tub has the couples asking Sophie for receipts. Alexei shares his struggles with Loren's \"mommy makeover,\" Manuel is criticized for his secrecy, and Sophie and Thais confront Loren about her character.",
            index: 23,
            parentIndex: 8,
            year: 2024,
            thumb: "/library/metadata/54943/thumb/1724351627",
            art: "/library/metadata/43135/art/1725070767",
            grandparentThumb: "/library/metadata/43135/thumb/1725070767",
            grandparentArt: "/library/metadata/43135/art/1725070767",
            grandparentTheme: "/library/metadata/43135/theme/1725070767",
            duration: 5131476,
            originallyAvailableAt: "2024-08-18",
            addedAt: 1724351618,
            updatedAt: 1724351627,
            Media: [
              {
                id: 56742,
                duration: 5131476,
                bitrate: 6515,
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
                    id: 86609,
                    key: "/library/parts/86609/1724005607/file.mkv",
                    duration: 5131476,
                    file: "/TV Shows (Reality)/90 Day Fiancé - Happily Ever After!/Season 08/90 Day Fiancé - Happily Ever After! - S08E23 - Tell All - No Limits Part 4 WEBDL-1080p.mkv",
                    size: 4180988378,
                    audioProfile: "lc",
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "main",
                    Stream: [
                      {
                        id: 272434,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 6390,
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
                        displayTitle: "1080p (H.264)",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 272435,
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
                        id: 272436,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        displayTitle: "English (SRT)",
                        extendedDisplayTitle: "English (SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Tell All: No Limits Part 4",
                type: "coverPoster",
                url: "/library/metadata/43135/thumb/1725070767"
              },
              {
                alt: "Tell All: No Limits Part 4",
                type: "snapshot",
                url: "/library/metadata/54943/thumb/1724351627"
              },
              {
                alt: "Tell All: No Limits Part 4",
                type: "background",
                url: "/library/metadata/43135/art/1725070767"
              }
            ],
            UltraBlurColors: {
              topLeft: "2b0b0b",
              topRight: "2b1009",
              bottomRight: "8b4830",
              bottomLeft: "923f44"
            },
            Guid: [
              {
                id: "tmdb://5504877"
              },
              {
                id: "tvdb://10618040"
              }
            ]
          },
          {
            ratingKey: "54910",
            key: "/library/metadata/54910",
            parentRatingKey: "54843",
            grandparentRatingKey: "27613",
            guid: "plex://episode/669f52675c2579875eec6722",
            parentGuid: "plex://season/6659055ddd27970dd48c1b7d",
            grandparentGuid: "plex://show/5d9c09240aaccd001f8f45b3",
            grandparentSlug: "90-day-fiance-the-other-way",
            type: "episode",
            title: "A Risky Business",
            titleSort: "Risky Business",
            grandparentKey: "/library/metadata/27613",
            parentKey: "/library/metadata/54843",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "90 Day Fiancé: The Other Way",
            parentTitle: "Season 6",
            contentRating: "TV-14",
            summary:
              "Chaos ensues after James and Tatha tell her family they're staying in Indonesia. Joanne and Sean plan how to reveal they've been married for 2 years. Corona tells Ingi she's been hiding her anger from him. Statler is stunned by the look of the campervan.",
            index: 7,
            parentIndex: 6,
            year: 2024,
            thumb: "/library/metadata/54910/thumb/1723778919",
            art: "/library/metadata/27613/art/1726724811",
            grandparentThumb: "/library/metadata/27613/thumb/1726724811",
            grandparentArt: "/library/metadata/27613/art/1726724811",
            duration: 2558048,
            originallyAvailableAt: "2024-08-12",
            addedAt: 1723509962,
            updatedAt: 1723778919,
            Media: [
              {
                id: 56701,
                duration: 2558048,
                bitrate: 9819,
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
                    id: 86565,
                    key: "/library/parts/86565/1723509846/file.mkv",
                    duration: 2558048,
                    file: "/TV Shows (Reality)/90 Day Fiancé - The Other Way/Season 06/90 Day Fiancé - The Other Way - S06E07 - A Risky Business WEBDL-1080p.mkv",
                    size: 3139789673,
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "high",
                    Stream: [
                      {
                        id: 272155,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 9819,
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
                        displayTitle: "1080p (H.264)",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 272156,
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
                        id: 272157,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        title: "English (SDH)",
                        displayTitle: "English (SRT)",
                        extendedDisplayTitle: "English (SDH) (SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "A Risky Business",
                type: "coverPoster",
                url: "/library/metadata/27613/thumb/1726724811"
              },
              {
                alt: "A Risky Business",
                type: "snapshot",
                url: "/library/metadata/54910/thumb/1723778919"
              },
              {
                alt: "A Risky Business",
                type: "background",
                url: "/library/metadata/27613/art/1726724811"
              },
              {
                alt: "A Risky Business",
                type: "clearLogo",
                url: "/library/metadata/27613/clearLogo/1726724811"
              }
            ],
            UltraBlurColors: {
              topLeft: "472214",
              topRight: "1e1a18",
              bottomRight: "150405",
              bottomLeft: "381314"
            },
            Guid: [
              {
                id: "tmdb://5504889"
              },
              {
                id: "tvdb://10599226"
              }
            ]
          },
          {
            ratingKey: "54909",
            key: "/library/metadata/54909",
            parentRatingKey: "54656",
            grandparentRatingKey: "43135",
            guid: "plex://episode/66a9022814d7926d61f57247",
            parentGuid: "plex://season/65cd200d0e3346d4db23e8db",
            grandparentGuid: "plex://show/5d9c0809e98e47001eb06046",
            grandparentSlug: "90-day-fiance-happily-ever-after",
            type: "episode",
            title: "Tell All: No Limits Part 3",
            grandparentKey: "/library/metadata/43135",
            parentKey: "/library/metadata/54656",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "90 Day Fiancé: Happily Ever After?",
            parentTitle: "Season 8",
            contentRating: "TV-14",
            summary:
              "Angela invites a PI on set who reveals if Michael is scamming her, Patrick plays referee between Thais and John, and Rob and Sophie argue about flushing the toilet, and things get heated in the hot tub.",
            index: 22,
            parentIndex: 8,
            year: 2024,
            thumb: "/library/metadata/54909/thumb/1723517710",
            art: "/library/metadata/43135/art/1725070767",
            grandparentThumb: "/library/metadata/43135/thumb/1725070767",
            grandparentArt: "/library/metadata/43135/art/1725070767",
            grandparentTheme: "/library/metadata/43135/theme/1725070767",
            duration: 5131839,
            originallyAvailableAt: "2024-08-11",
            addedAt: 1723428101,
            updatedAt: 1723517710,
            Media: [
              {
                id: 56700,
                duration: 5131839,
                bitrate: 7055,
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
                    id: 86564,
                    key: "/library/parts/86564/1723427984/file.mkv",
                    duration: 5131839,
                    file: "/TV Shows (Reality)/90 Day Fiancé - Happily Ever After!/Season 08/90 Day Fiancé - Happily Ever After! - S08E22 - Tell All - No Limits Part 3 WEBDL-1080p.mkv",
                    size: 4527500047,
                    audioProfile: "lc",
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "main",
                    Stream: [
                      {
                        id: 272152,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 6930,
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
                        displayTitle: "1080p (H.264)",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 272153,
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
                        id: 272154,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        displayTitle: "English (SRT)",
                        extendedDisplayTitle: "English (SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Tell All: No Limits Part 3",
                type: "coverPoster",
                url: "/library/metadata/43135/thumb/1725070767"
              },
              {
                alt: "Tell All: No Limits Part 3",
                type: "snapshot",
                url: "/library/metadata/54909/thumb/1723517710"
              },
              {
                alt: "Tell All: No Limits Part 3",
                type: "background",
                url: "/library/metadata/43135/art/1725070767"
              }
            ],
            UltraBlurColors: {
              topLeft: "4b1e1b",
              topRight: "312e29",
              bottomRight: "91413e",
              bottomLeft: "673d17"
            },
            Guid: [
              {
                id: "tmdb://5504876"
              },
              {
                id: "tvdb://10618039"
              }
            ]
          },
          {
            ratingKey: "54907",
            key: "/library/metadata/54907",
            parentRatingKey: "54783",
            grandparentRatingKey: "47836",
            guid: "plex://episode/6692a3c80bd858e98e42b75e",
            parentGuid: "plex://season/6658498a925882d687b3e67d",
            grandparentGuid: "plex://show/5d9c08172192ba001f307329",
            grandparentSlug: "60-days-in",
            type: "episode",
            title: "I'm An Inmate Now",
            grandparentKey: "/library/metadata/47836",
            parentKey: "/library/metadata/54783",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "60 Days In",
            parentTitle: "Season 9",
            contentRating: "TV-14",
            summary:
              "The Sheriff's team takes unprecedented measures to protect Daniel when his true identity is discovered by the deputies, while Qwell discovers inmates are hiding substances in the greenhouse, and an incident in the women's pod causes Nina and Scarlett to sever their bond as teammates.",
            index: 10,
            parentIndex: 9,
            year: 2024,
            thumb: "/library/metadata/54907/thumb/1723430916",
            art: "/library/metadata/47836/art/1724651438",
            grandparentThumb: "/library/metadata/47836/thumb/1724651438",
            grandparentArt: "/library/metadata/47836/art/1724651438",
            grandparentTheme: "/library/metadata/47836/theme/1724651438",
            duration: 2552703,
            originallyAvailableAt: "2024-08-08",
            addedAt: 1723192333,
            updatedAt: 1723430916,
            Media: [
              {
                id: 56698,
                duration: 2552703,
                bitrate: 5796,
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
                    id: 86562,
                    key: "/library/parts/86562/1723192275/file.mkv",
                    duration: 2552703,
                    file: "/TV Shows (Reality)/60 Days In/Season 09/60 Days In - S09E10 - I'm An Inmate Now WEBDL-1080p.mkv",
                    size: 1850183227,
                    audioProfile: "he-aac",
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "high",
                    Stream: [
                      {
                        id: 272146,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 5732,
                        bitDepth: 8,
                        chromaLocation: "left",
                        chromaSubsampling: "4:2:0",
                        codedHeight: 1088,
                        codedWidth: 1920,
                        frameRate: 29.97,
                        hasScalingMatrix: false,
                        height: 1080,
                        level: 40,
                        profile: "high",
                        refFrames: 4,
                        scanType: "progressive",
                        width: 1920,
                        displayTitle: "1080p (H.264)",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 272147,
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
                        samplingRate: 48000,
                        displayTitle: "English (HE-AAC Stereo)",
                        extendedDisplayTitle: "English (HE-AAC Stereo)"
                      },
                      {
                        id: 272148,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        title: "English",
                        displayTitle: "English (SRT)",
                        extendedDisplayTitle: "English (SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "I'm An Inmate Now",
                type: "coverPoster",
                url: "/library/metadata/47836/thumb/1724651438"
              },
              {
                alt: "I'm An Inmate Now",
                type: "snapshot",
                url: "/library/metadata/54907/thumb/1723430916"
              },
              {
                alt: "I'm An Inmate Now",
                type: "background",
                url: "/library/metadata/47836/art/1724651438"
              }
            ],
            UltraBlurColors: {
              topLeft: "322d29",
              topRight: "3a474b",
              bottomRight: "272c28",
              bottomLeft: "171b1c"
            },
            Guid: [
              {
                id: "tmdb://5473638"
              },
              {
                id: "tvdb://10589564"
              }
            ],
            Role: [
              {
                id: 294129,
                filter: "actor=294129",
                tag: "Mike Smith",
                tagKey: "668e7e7b22bcad9064350c91",
                role: "Self"
              }
            ]
          },
          {
            ratingKey: "54906",
            key: "/library/metadata/54906",
            parentRatingKey: "54874",
            grandparentRatingKey: "44932",
            guid: "plex://episode/66b4a3d7668d22e953e9611e",
            parentGuid: "plex://season/669962051d4e0913b003ace4",
            grandparentGuid: "plex://show/5d9c082bef619b002047d6ae",
            grandparentSlug: "pawn-stars",
            type: "episode",
            title: "Dream Pawn",
            grandparentKey: "/library/metadata/44932",
            parentKey: "/library/metadata/54874",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "Pawn Stars",
            parentTitle: "Season 2024",
            contentRating: "TV-PG",
            summary:
              'In a pawn shop far away, Rick and Corey unbox a skateboard signed by Carrie Fisher. Then, Corey has a first-person encounter with "Halo: Combat Evolved." Will he be the Master Chief of this deal? Meanwhile, Chum is stunned by a colorful vintage Versace collection. Is this deal on brand, or out of style? And later, Corey goes crazy when a seller brings in a guitar signed by Aerosmith\'s Joe Perry. Can he make the guitar walk his way, or will the seller tell him to dream on?\r\n',
            index: 4,
            parentIndex: 2024,
            year: 2024,
            thumb: "/library/metadata/54906/thumb/1725578636",
            art: "/library/metadata/44932/art/1724304811",
            parentThumb: "/library/metadata/54874/thumb/1721444826",
            grandparentThumb: "/library/metadata/44932/thumb/1724304811",
            grandparentArt: "/library/metadata/44932/art/1724304811",
            grandparentTheme: "/library/metadata/44932/theme/1724304811",
            duration: 2461184,
            originallyAvailableAt: "2024-08-07",
            addedAt: 1723144620,
            updatedAt: 1725578636,
            Media: [
              {
                id: 56697,
                duration: 2461184,
                bitrate: 6000,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 2,
                audioCodec: "aac",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "24p",
                audioProfile: "he-aac",
                videoProfile: "high",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 86561,
                    key: "/library/parts/86561/1723115179/file.mkv",
                    duration: 2461184,
                    file: "/TV Shows (Reality)/Pawn Stars/Season 2024/Pawn Stars - S2024E04 - Dream Pawn WEBDL-1080p.mkv",
                    size: 1846559908,
                    audioProfile: "he-aac",
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "high",
                    Stream: [
                      {
                        id: 272143,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 5936,
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
                        displayTitle: "1080p (H.264)",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 272144,
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
                        samplingRate: 48000,
                        displayTitle: "English (HE-AAC Stereo)",
                        extendedDisplayTitle: "English (HE-AAC Stereo)"
                      },
                      {
                        id: 272145,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        title: "English",
                        displayTitle: "English (SRT)",
                        extendedDisplayTitle: "English (SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Dream Pawn",
                type: "coverPoster",
                url: "/library/metadata/54874/thumb/1721444826"
              },
              {
                alt: "Dream Pawn",
                type: "snapshot",
                url: "/library/metadata/54906/thumb/1725578636"
              },
              {
                alt: "Dream Pawn",
                type: "background",
                url: "/library/metadata/44932/art/1724304811"
              }
            ],
            UltraBlurColors: {
              topLeft: "382c10",
              topRight: "644e23",
              bottomRight: "030310",
              bottomLeft: "261903"
            },
            Guid: [
              {
                id: "tvdb://10626067"
              }
            ]
          },
          {
            ratingKey: "54904",
            key: "/library/metadata/54904",
            parentRatingKey: "54843",
            grandparentRatingKey: "27613",
            guid: "plex://episode/669f52675c2579875eec6721",
            parentGuid: "plex://season/6659055ddd27970dd48c1b7d",
            grandparentGuid: "plex://show/5d9c09240aaccd001f8f45b3",
            grandparentSlug: "90-day-fiance-the-other-way",
            type: "episode",
            title: "One Fine Bidet",
            grandparentKey: "/library/metadata/27613",
            parentKey: "/library/metadata/54843",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "90 Day Fiancé: The Other Way",
            parentTitle: "Season 6",
            contentRating: "TV-14",
            summary:
              "Shekinah confronts Sarper about his ex. The three promises James made to Meitalia's parents come back to haunt him. Josh's jealousy issues frustrate Lily. Statler and Dempsey's reunion is overshadowed by Statler's anxiety.",
            index: 6,
            parentIndex: 6,
            year: 2024,
            thumb: "/library/metadata/54904/thumb/1723091662",
            art: "/library/metadata/27613/art/1726724811",
            grandparentThumb: "/library/metadata/27613/thumb/1726724811",
            grandparentArt: "/library/metadata/27613/art/1726724811",
            duration: 2558144,
            originallyAvailableAt: "2024-08-05",
            addedAt: 1722904331,
            updatedAt: 1723091662,
            Media: [
              {
                id: 56695,
                duration: 2558144,
                bitrate: 9942,
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
                    id: 86559,
                    key: "/library/parts/86559/1722904286/file.mkv",
                    duration: 2558144,
                    file: "/TV Shows (Reality)/90 Day Fiancé - The Other Way/Season 06/90 Day Fiancé - The Other Way - S06E06 - One Fine Bidet WEBDL-1080p.mkv",
                    size: 3179781624,
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "high",
                    Stream: [
                      {
                        id: 272099,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 9718,
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
                        displayTitle: "1080p (H.264)",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 272100,
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
                        id: 272101,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        title: "English (SDH)",
                        displayTitle: "English (SRT)",
                        extendedDisplayTitle: "English (SDH) (SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "One Fine Bidet",
                type: "coverPoster",
                url: "/library/metadata/27613/thumb/1726724811"
              },
              {
                alt: "One Fine Bidet",
                type: "snapshot",
                url: "/library/metadata/54904/thumb/1723091662"
              },
              {
                alt: "One Fine Bidet",
                type: "background",
                url: "/library/metadata/27613/art/1726724811"
              },
              {
                alt: "One Fine Bidet",
                type: "clearLogo",
                url: "/library/metadata/27613/clearLogo/1726724811"
              }
            ],
            UltraBlurColors: {
              topLeft: "551014",
              topRight: "142d4a",
              bottomRight: "ab1b2c",
              bottomLeft: "9f3428"
            },
            Guid: [
              {
                id: "tmdb://5504888"
              },
              {
                id: "tvdb://10599225"
              }
            ]
          },
          {
            ratingKey: "54903",
            key: "/library/metadata/54903",
            parentRatingKey: "54480",
            grandparentRatingKey: "27548",
            guid: "plex://episode/667aecb44697b64ec6ce35dc",
            parentGuid: "plex://season/63f2cb9c04d9244e048ca69b",
            grandparentGuid: "plex://show/5d9c0846705e7a001e6d7b28",
            grandparentSlug: "bar-rescue",
            type: "episode",
            title: "Midtown Slump",
            grandparentKey: "/library/metadata/27548",
            parentKey: "/library/metadata/54480",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "Bar Rescue",
            parentTitle: "Season 9",
            contentRating: "TV-PG",
            summary:
              "Jon Taffer needs to rescue a failing bar in Houston, TX whose owner turned his life upside down to buy a bar near an ailing lifelong friend.",
            index: 22,
            parentIndex: 9,
            year: 2024,
            thumb: "/library/metadata/54903/thumb/1723091649",
            art: "/library/metadata/27548/art/1722317230",
            parentThumb: "/library/metadata/54480/thumb/1710185516",
            grandparentThumb: "/library/metadata/27548/thumb/1722317230",
            grandparentArt: "/library/metadata/27548/art/1722317230",
            grandparentTheme: "/library/metadata/27548/theme/1722317230",
            duration: 2510208,
            originallyAvailableAt: "2024-08-04",
            addedAt: 1722846934,
            updatedAt: 1723091649,
            Media: [
              {
                id: 56694,
                duration: 2510208,
                bitrate: 5420,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 2,
                audioCodec: "aac",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "24p",
                audioProfile: "he-aac",
                videoProfile: "high",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 86558,
                    key: "/library/parts/86558/1722845029/file.mkv",
                    duration: 2510208,
                    file: "/TV Shows (Reality)/Bar Rescue/Season 09/Bar Rescue - S09E22 - Midtown Slump WEBDL-1080p.mkv",
                    size: 1700705704,
                    audioProfile: "he-aac",
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "high",
                    Stream: [
                      {
                        id: 272102,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 5420,
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
                        displayTitle: "1080p (H.264)",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 272103,
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
                        samplingRate: 48000,
                        displayTitle: "English (HE-AAC Stereo)",
                        extendedDisplayTitle: "English (HE-AAC Stereo)"
                      },
                      {
                        id: 272104,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        title: "English",
                        displayTitle: "English (SRT)",
                        extendedDisplayTitle: "English (SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Midtown Slump",
                type: "coverPoster",
                url: "/library/metadata/54480/thumb/1710185516"
              },
              {
                alt: "Midtown Slump",
                type: "snapshot",
                url: "/library/metadata/54903/thumb/1723091649"
              },
              {
                alt: "Midtown Slump",
                type: "background",
                url: "/library/metadata/27548/art/1722317230"
              }
            ],
            UltraBlurColors: {
              topLeft: "4c1c1e",
              topRight: "46181f",
              bottomRight: "3a3a3e",
              bottomLeft: "211c1b"
            },
            Guid: [
              {
                id: "tmdb://5434145"
              },
              {
                id: "tvdb://10592879"
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
                  "https://metadata-static.plex.tv/2/people/27b85844536c39f3f9ac943aaad46608.jpg"
              }
            ]
          },
          {
            ratingKey: "54902",
            key: "/library/metadata/54902",
            parentRatingKey: "54656",
            grandparentRatingKey: "43135",
            guid: "plex://episode/660957c319df874e6fce9360",
            parentGuid: "plex://season/65cd200d0e3346d4db23e8db",
            grandparentGuid: "plex://show/5d9c0809e98e47001eb06046",
            grandparentSlug: "90-day-fiance-happily-ever-after",
            type: "episode",
            title: "Tell All: No Limits Part 2",
            grandparentKey: "/library/metadata/43135",
            parentKey: "/library/metadata/54656",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "90 Day Fiancé: Happily Ever After?",
            parentTitle: "Season 8",
            contentRating: "TV-14",
            summary:
              "On part two of the Tell All, Gino and Jasmine attempt to overcome their intimacy issues, Loren confronts Ed, and Emily and Kobe reach an impasse in their relationship. Then, tensions between Angela and Michael boil over.",
            index: 21,
            parentIndex: 8,
            year: 2024,
            thumb: "/library/metadata/54902/thumb/1723517710",
            art: "/library/metadata/43135/art/1725070767",
            grandparentThumb: "/library/metadata/43135/thumb/1725070767",
            grandparentArt: "/library/metadata/43135/art/1725070767",
            grandparentTheme: "/library/metadata/43135/theme/1725070767",
            duration: 5131370,
            originallyAvailableAt: "2024-08-04",
            addedAt: 1722818546,
            updatedAt: 1723517710,
            Media: [
              {
                id: 56692,
                duration: 5131370,
                bitrate: 10050,
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
                    id: 86556,
                    key: "/library/parts/86556/1722818444/file.mkv",
                    duration: 5131370,
                    file: "/TV Shows (Reality)/90 Day Fiancé - Happily Ever After!/Season 08/90 Day Fiancé - Happily Ever After! - S08E21 - Tell All - No Limits Part 2 WEBDL-1080p.mkv",
                    size: 6447915907,
                    audioProfile: "lc",
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "main",
                    Stream: [
                      {
                        id: 272059,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 9924,
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
                        displayTitle: "1080p (H.264)",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 272060,
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
                        id: 272061,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        displayTitle: "English (SRT)",
                        extendedDisplayTitle: "English (SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Tell All: No Limits Part 2",
                type: "coverPoster",
                url: "/library/metadata/43135/thumb/1725070767"
              },
              {
                alt: "Tell All: No Limits Part 2",
                type: "snapshot",
                url: "/library/metadata/54902/thumb/1723517710"
              },
              {
                alt: "Tell All: No Limits Part 2",
                type: "background",
                url: "/library/metadata/43135/art/1725070767"
              }
            ],
            UltraBlurColors: {
              topLeft: "4c1d15",
              topRight: "3e124e",
              bottomRight: "40183c",
              bottomLeft: "963d3b"
            },
            Guid: [
              {
                id: "imdb://tt32872778"
              },
              {
                id: "tmdb://5248375"
              },
              {
                id: "tvdb://10569232"
              }
            ]
          },
          {
            ratingKey: "54900",
            key: "/library/metadata/54900",
            parentRatingKey: "54783",
            grandparentRatingKey: "47836",
            guid: "plex://episode/6692a3c80bd858e98e42b760",
            parentGuid: "plex://season/6658498a925882d687b3e67d",
            grandparentGuid: "plex://show/5d9c08172192ba001f307329",
            grandparentSlug: "60-days-in",
            type: "episode",
            title: "Surging Suspicions",
            grandparentKey: "/library/metadata/47836",
            parentKey: "/library/metadata/54783",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "60 Days In",
            parentTitle: "Season 9",
            contentRating: "TV-14",
            summary:
              "As a new participant enters the jail, the rest of the team is at their breaking point, which leads to a dangerous discovery.",
            index: 9,
            parentIndex: 9,
            year: 2024,
            thumb: "/library/metadata/54900/thumb/1723430916",
            art: "/library/metadata/47836/art/1724651438",
            grandparentThumb: "/library/metadata/47836/thumb/1724651438",
            grandparentArt: "/library/metadata/47836/art/1724651438",
            grandparentTheme: "/library/metadata/47836/theme/1724651438",
            duration: 2591829,
            originallyAvailableAt: "2024-08-01",
            addedAt: 1722584371,
            updatedAt: 1723430916,
            Media: [
              {
                id: 56683,
                duration: 2591829,
                bitrate: 5600,
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
                    id: 86547,
                    key: "/library/parts/86547/1722584313/file.mkv",
                    duration: 2591829,
                    file: "/TV Shows (Reality)/60 Days In/Season 09/60 Days In - S09E09 - Surging Suspicions WEBDL-1080p.mkv",
                    size: 1815171336,
                    audioProfile: "he-aac",
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "high",
                    Stream: [
                      {
                        id: 271857,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 5536,
                        bitDepth: 8,
                        chromaLocation: "left",
                        chromaSubsampling: "4:2:0",
                        codedHeight: 1088,
                        codedWidth: 1920,
                        frameRate: 29.97,
                        hasScalingMatrix: false,
                        height: 1080,
                        level: 40,
                        profile: "high",
                        refFrames: 4,
                        scanType: "progressive",
                        width: 1920,
                        displayTitle: "1080p (H.264)",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 271858,
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
                        samplingRate: 48000,
                        displayTitle: "English (HE-AAC Stereo)",
                        extendedDisplayTitle: "English (HE-AAC Stereo)"
                      },
                      {
                        id: 271859,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        title: "English",
                        displayTitle: "English (SRT)",
                        extendedDisplayTitle: "English (SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Surging Suspicions",
                type: "coverPoster",
                url: "/library/metadata/47836/thumb/1724651438"
              },
              {
                alt: "Surging Suspicions",
                type: "snapshot",
                url: "/library/metadata/54900/thumb/1723430916"
              },
              {
                alt: "Surging Suspicions",
                type: "background",
                url: "/library/metadata/47836/art/1724651438"
              }
            ],
            UltraBlurColors: {
              topLeft: "262b28",
              topRight: "293738",
              bottomRight: "52662d",
              bottomLeft: "4f6630"
            },
            Guid: [
              {
                id: "tmdb://5473636"
              },
              {
                id: "tvdb://10589563"
              }
            ],
            Role: [
              {
                id: 294129,
                filter: "actor=294129",
                tag: "Mike Smith",
                tagKey: "668e7e7b22bcad9064350c91",
                role: "Self"
              }
            ]
          },
          {
            ratingKey: "54898",
            key: "/library/metadata/54898",
            parentRatingKey: "54843",
            grandparentRatingKey: "27613",
            guid: "plex://episode/668c5e8cfddbd6e2e707666f",
            parentGuid: "plex://season/6659055ddd27970dd48c1b7d",
            grandparentGuid: "plex://show/5d9c09240aaccd001f8f45b3",
            grandparentSlug: "90-day-fiance-the-other-way",
            type: "episode",
            title: "High Infidelity",
            grandparentKey: "/library/metadata/27613",
            parentKey: "/library/metadata/54843",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "90 Day Fiancé: The Other Way",
            parentTitle: "Season 6",
            contentRating: "TV-14",
            summary:
              "Shekinah meets up with Sarper's ex to learn the truth. Corona gets an icy welcome from Ingi. Lily takes Josh for a traditional ear massage. Tatha's parents pressure her about giving them grandchildren.",
            index: 5,
            parentIndex: 6,
            year: 2024,
            thumb: "/library/metadata/54898/thumb/1723091662",
            art: "/library/metadata/27613/art/1726724811",
            grandparentThumb: "/library/metadata/27613/thumb/1726724811",
            grandparentArt: "/library/metadata/27613/art/1726724811",
            duration: 2558048,
            originallyAvailableAt: "2024-07-29",
            addedAt: 1722299419,
            updatedAt: 1723091662,
            Media: [
              {
                id: 56672,
                duration: 2558048,
                bitrate: 9995,
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
                    id: 86536,
                    key: "/library/parts/86536/1722299378/file.mkv",
                    duration: 2558048,
                    file: "/TV Shows (Reality)/90 Day Fiancé - The Other Way/Season 06/90 Day Fiancé - The Other Way - S06E05 - High Infidelity WEBDL-1080p.mkv",
                    size: 3196640384,
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "high",
                    Stream: [
                      {
                        id: 271820,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 9771,
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
                        displayTitle: "1080p (H.264)",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 271821,
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
                        id: 271822,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        title: "English (SDH)",
                        displayTitle: "English (SRT)",
                        extendedDisplayTitle: "English (SDH) (SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "High Infidelity",
                type: "coverPoster",
                url: "/library/metadata/27613/thumb/1726724811"
              },
              {
                alt: "High Infidelity",
                type: "snapshot",
                url: "/library/metadata/54898/thumb/1723091662"
              },
              {
                alt: "High Infidelity",
                type: "background",
                url: "/library/metadata/27613/art/1726724811"
              },
              {
                alt: "High Infidelity",
                type: "clearLogo",
                url: "/library/metadata/27613/clearLogo/1726724811"
              }
            ],
            UltraBlurColors: {
              topLeft: "21070f",
              topRight: "1e4860",
              bottomRight: "551f2d",
              bottomLeft: "734e26"
            },
            Guid: [
              {
                id: "tmdb://5504887"
              },
              {
                id: "tvdb://10578766"
              }
            ]
          },
          {
            ratingKey: "54897",
            key: "/library/metadata/54897",
            parentRatingKey: "54480",
            grandparentRatingKey: "27548",
            guid: "plex://episode/6676f7d6454ee7b50a725605",
            parentGuid: "plex://season/63f2cb9c04d9244e048ca69b",
            grandparentGuid: "plex://show/5d9c0846705e7a001e6d7b28",
            grandparentSlug: "bar-rescue",
            type: "episode",
            title: "Till the Wagon Wheels Fall Off",
            grandparentKey: "/library/metadata/27548",
            parentKey: "/library/metadata/54480",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "Bar Rescue",
            parentTitle: "Season 9",
            contentRating: "TV-PG",
            summary:
              "Jon Taffer sends Phil Wills & Danny Trejo to Cleveland, TX to help a pair of friends rescue their bar and their friendship amidst family fights and dying cockroaches.",
            index: 21,
            parentIndex: 9,
            year: 2024,
            thumb: "/library/metadata/54897/thumb/1722846937",
            art: "/library/metadata/27548/art/1722317230",
            parentThumb: "/library/metadata/54480/thumb/1710185516",
            grandparentThumb: "/library/metadata/27548/thumb/1722317230",
            grandparentArt: "/library/metadata/27548/art/1722317230",
            grandparentTheme: "/library/metadata/27548/theme/1722317230",
            duration: 2510207,
            originallyAvailableAt: "2024-07-28",
            addedAt: 1722241224,
            updatedAt: 1722846937,
            Media: [
              {
                id: 56671,
                duration: 2510207,
                bitrate: 5713,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 2,
                audioCodec: "aac",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "24p",
                audioProfile: "he-aac",
                videoProfile: "high",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 86535,
                    key: "/library/parts/86535/1722241162/file.mkv",
                    duration: 2510207,
                    file: "/TV Shows (Reality)/Bar Rescue/Season 09/Bar Rescue - S09E21 - Till the Wagon Wheels Fall Off WEBDL-1080p.mkv",
                    size: 1793214342,
                    audioProfile: "he-aac",
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "high",
                    Stream: [
                      {
                        id: 271817,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 5649,
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
                        displayTitle: "1080p (H.264)",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 271818,
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
                        samplingRate: 48000,
                        displayTitle: "English (HE-AAC Stereo)",
                        extendedDisplayTitle: "English (HE-AAC Stereo)"
                      },
                      {
                        id: 271819,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        title: "English",
                        displayTitle: "English (SRT)",
                        extendedDisplayTitle: "English (SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Till the Wagon Wheels Fall Off",
                type: "coverPoster",
                url: "/library/metadata/54480/thumb/1710185516"
              },
              {
                alt: "Till the Wagon Wheels Fall Off",
                type: "snapshot",
                url: "/library/metadata/54897/thumb/1722846937"
              },
              {
                alt: "Till the Wagon Wheels Fall Off",
                type: "background",
                url: "/library/metadata/27548/art/1722317230"
              }
            ],
            UltraBlurColors: {
              topLeft: "501910",
              topRight: "7b382e",
              bottomRight: "792a21",
              bottomLeft: "602923"
            },
            Guid: [
              {
                id: "tmdb://5429730"
              },
              {
                id: "tvdb://10592878"
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
                  "https://metadata-static.plex.tv/2/people/27b85844536c39f3f9ac943aaad46608.jpg"
              }
            ]
          },
          {
            ratingKey: "54896",
            key: "/library/metadata/54896",
            parentRatingKey: "54656",
            grandparentRatingKey: "43135",
            guid: "plex://episode/660957c319df874e6fce9361",
            parentGuid: "plex://season/65cd200d0e3346d4db23e8db",
            grandparentGuid: "plex://show/5d9c0809e98e47001eb06046",
            grandparentSlug: "90-day-fiance-happily-ever-after",
            type: "episode",
            title: "Tell All: No Limits Part 1",
            grandparentKey: "/library/metadata/43135",
            parentKey: "/library/metadata/54656",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "90 Day Fiancé: Happily Ever After?",
            parentTitle: "Season 8",
            contentRating: "TV-14",
            summary:
              "For the first time, the couples will live under one roof for the Happily Ever After Tell All. Gino and Jasmine reach a stalemate in their marriage, Ed and Liz have a tearful reunion, and the cast speculate if Angela and Michael will show up at the studio.",
            index: 20,
            parentIndex: 8,
            audienceRating: 3.0,
            year: 2024,
            thumb: "/library/metadata/54896/thumb/1723091660",
            art: "/library/metadata/43135/art/1725070767",
            grandparentThumb: "/library/metadata/43135/thumb/1725070767",
            grandparentArt: "/library/metadata/43135/art/1725070767",
            grandparentTheme: "/library/metadata/43135/theme/1725070767",
            duration: 5131628,
            originallyAvailableAt: "2024-07-28",
            addedAt: 1722190453,
            updatedAt: 1723091660,
            audienceRatingImage: "themoviedb://image.rating",
            Media: [
              {
                id: 56670,
                duration: 5131628,
                bitrate: 1494,
                width: 1280,
                height: 720,
                aspectRatio: 1.78,
                audioChannels: 2,
                audioCodec: "aac",
                videoCodec: "h264",
                videoResolution: "720",
                container: "mp4",
                videoFrameRate: "NTSC",
                optimizedForStreaming: 1,
                audioProfile: "lc",
                has64bitOffsets: false,
                videoProfile: "main",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 86534,
                    key: "/library/parts/86534/1722186623/file.mp4",
                    duration: 5131628,
                    file: "/TV Shows (Reality)/90 Day Fiancé - Happily Ever After!/Season 08/90 Day Fiancé - Happily Ever After! - S08E20 - Episode 20 HDTV-720p.mp4",
                    size: 962467826,
                    audioProfile: "lc",
                    container: "mp4",
                    has64bitOffsets: false,
                    indexes: "sd",
                    optimizedForStreaming: true,
                    videoProfile: "main",
                    Stream: [
                      {
                        id: 271815,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 1365,
                        bitDepth: 8,
                        chromaLocation: "left",
                        chromaSubsampling: "4:2:0",
                        codedHeight: 720,
                        codedWidth: 1280,
                        frameRate: 29.97,
                        hasScalingMatrix: false,
                        height: 720,
                        level: 31,
                        profile: "main",
                        refFrames: 1,
                        scanType: "progressive",
                        streamIdentifier: "1",
                        width: 1280,
                        displayTitle: "720p (H.264)",
                        extendedDisplayTitle: "720p (H.264)"
                      },
                      {
                        id: 271816,
                        streamType: 2,
                        selected: true,
                        default: true,
                        codec: "aac",
                        index: 1,
                        channels: 2,
                        bitrate: 129,
                        audioChannelLayout: "stereo",
                        profile: "lc",
                        samplingRate: 44100,
                        streamIdentifier: "2",
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
                alt: "Tell All: No Limits Part 1",
                type: "coverPoster",
                url: "/library/metadata/43135/thumb/1725070767"
              },
              {
                alt: "Tell All: No Limits Part 1",
                type: "snapshot",
                url: "/library/metadata/54896/thumb/1723091660"
              },
              {
                alt: "Tell All: No Limits Part 1",
                type: "background",
                url: "/library/metadata/43135/art/1725070767"
              }
            ],
            UltraBlurColors: {
              topLeft: "492015",
              topRight: "6a3a21",
              bottomRight: "a22c35",
              bottomLeft: "854e1f"
            },
            Guid: [
              {
                id: "imdb://tt32872774"
              },
              {
                id: "tmdb://5248374"
              },
              {
                id: "tvdb://10569231"
              }
            ],
            Rating: [
              {
                image: "themoviedb://image.rating",
                value: 3.0,
                type: "audience"
              }
            ]
          },
          {
            ratingKey: "54895",
            key: "/library/metadata/54895",
            parentRatingKey: "54783",
            grandparentRatingKey: "47836",
            guid: "plex://episode/666f2af770880cc1925af093",
            parentGuid: "plex://season/6658498a925882d687b3e67d",
            grandparentGuid: "plex://show/5d9c08172192ba001f307329",
            grandparentSlug: "60-days-in",
            type: "episode",
            title: "Celly Suspicions",
            grandparentKey: "/library/metadata/47836",
            parentKey: "/library/metadata/54783",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "60 Days In",
            parentTitle: "Season 9",
            contentRating: "TV-14",
            summary:
              "Conflicts with inmates and growing suspicion spells trouble for the team, and one participant is moved out of the pod.",
            index: 8,
            parentIndex: 9,
            year: 2024,
            thumb: "/library/metadata/54895/thumb/1722392446",
            art: "/library/metadata/47836/art/1724651438",
            grandparentThumb: "/library/metadata/47836/thumb/1724651438",
            grandparentArt: "/library/metadata/47836/art/1724651438",
            grandparentTheme: "/library/metadata/47836/theme/1724651438",
            duration: 2567167,
            originallyAvailableAt: "2024-07-25",
            addedAt: 1721979960,
            updatedAt: 1722392446,
            Media: [
              {
                id: 56669,
                duration: 2567167,
                bitrate: 5550,
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
                    id: 86533,
                    key: "/library/parts/86533/1721979897/file.mkv",
                    duration: 2567167,
                    file: "/TV Shows (Reality)/60 Days In/Season 09/60 Days In - S09E08 - Celly Suspicions WEBDL-1080p.mkv",
                    size: 1781880462,
                    audioProfile: "he-aac",
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "high",
                    Stream: [
                      {
                        id: 271812,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 5486,
                        bitDepth: 8,
                        chromaLocation: "left",
                        chromaSubsampling: "4:2:0",
                        codedHeight: 1088,
                        codedWidth: 1920,
                        frameRate: 29.97,
                        hasScalingMatrix: false,
                        height: 1080,
                        level: 40,
                        profile: "high",
                        refFrames: 4,
                        scanType: "progressive",
                        width: 1920,
                        displayTitle: "1080p (H.264)",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 271813,
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
                        samplingRate: 48000,
                        displayTitle: "English (HE-AAC Stereo)",
                        extendedDisplayTitle: "English (HE-AAC Stereo)"
                      },
                      {
                        id: 271814,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        title: "English",
                        displayTitle: "English (SRT)",
                        extendedDisplayTitle: "English (SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Celly Suspicions",
                type: "coverPoster",
                url: "/library/metadata/47836/thumb/1724651438"
              },
              {
                alt: "Celly Suspicions",
                type: "snapshot",
                url: "/library/metadata/54895/thumb/1722392446"
              },
              {
                alt: "Celly Suspicions",
                type: "background",
                url: "/library/metadata/47836/art/1724651438"
              }
            ],
            UltraBlurColors: {
              topLeft: "251b08",
              topRight: "2c3034",
              bottomRight: "416b0c",
              bottomLeft: "446a17"
            },
            Guid: [
              {
                id: "tmdb://5418823"
              },
              {
                id: "tvdb://10546601"
              }
            ],
            Role: [
              {
                id: 294129,
                filter: "actor=294129",
                tag: "Mike Smith",
                tagKey: "668e7e7b22bcad9064350c91",
                role: "Self"
              }
            ]
          },
          {
            ratingKey: "54894",
            key: "/library/metadata/54894",
            parentRatingKey: "54874",
            grandparentRatingKey: "44932",
            guid: "plex://episode/66a366d406a6e16bbc68b7ec",
            parentGuid: "plex://season/669962051d4e0913b003ace4",
            grandparentGuid: "plex://show/5d9c082bef619b002047d6ae",
            grandparentSlug: "pawn-stars",
            type: "episode",
            title: "Where the Pawn Stars Roam",
            grandparentKey: "/library/metadata/44932",
            parentKey: "/library/metadata/54874",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "Pawn Stars",
            parentTitle: "Season 2024",
            contentRating: "TV-PG",
            summary:
              "When Rick reels in an antique glass fishing buoy made in Japan, he hopes the seller’s price floats his boat. Meanwhile, Chum checks out a rare dinosaur fossil. Can he dig up a good price, or will the seller have a bone to pick with him? Then, a customer brings in an original poster for the film “Where the Buffalo Roam.” Will Rick draw up a deal, or will he want it gonzo? And later, Rick and Corey head to the range to test out a 1580 German “puffer” pistol. Is it a wheely good deal, or a misfire?",
            index: 3,
            parentIndex: 2024,
            year: 2024,
            thumb: "/library/metadata/54894/thumb/1723144622",
            art: "/library/metadata/44932/art/1724304811",
            parentThumb: "/library/metadata/54874/thumb/1721444826",
            grandparentThumb: "/library/metadata/44932/thumb/1724304811",
            grandparentArt: "/library/metadata/44932/art/1724304811",
            grandparentTheme: "/library/metadata/44932/theme/1724304811",
            duration: 2460928,
            originallyAvailableAt: "2024-07-24",
            addedAt: 1721971209,
            updatedAt: 1723144622,
            Media: [
              {
                id: 56668,
                duration: 2460928,
                bitrate: 5985,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 2,
                audioCodec: "aac",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "24p",
                audioProfile: "he-aac",
                videoProfile: "high",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 86532,
                    key: "/library/parts/86532/1721922549/file.mkv",
                    duration: 2460928,
                    file: "/TV Shows (Reality)/Pawn Stars/Season 2024/Pawn Stars - S2024E03 - Where the Pawn Stars Roam WEBDL-1080p.mkv",
                    size: 1841803575,
                    audioProfile: "he-aac",
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "high",
                    Stream: [
                      {
                        id: 271809,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 5921,
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
                        displayTitle: "1080p (H.264)",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 271810,
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
                        samplingRate: 48000,
                        displayTitle: "English (HE-AAC Stereo)",
                        extendedDisplayTitle: "English (HE-AAC Stereo)"
                      },
                      {
                        id: 271811,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        title: "English",
                        displayTitle: "English (SRT)",
                        extendedDisplayTitle: "English (SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Where the Pawn Stars Roam",
                type: "coverPoster",
                url: "/library/metadata/54874/thumb/1721444826"
              },
              {
                alt: "Where the Pawn Stars Roam",
                type: "snapshot",
                url: "/library/metadata/54894/thumb/1723144622"
              },
              {
                alt: "Where the Pawn Stars Roam",
                type: "background",
                url: "/library/metadata/44932/art/1724304811"
              }
            ],
            UltraBlurColors: {
              topLeft: "0b0a21",
              topRight: "0b0b0b",
              bottomRight: "3a3333",
              bottomLeft: "0a0b0d"
            },
            Guid: [
              {
                id: "tvdb://10605740"
              }
            ]
          },
          {
            ratingKey: "54890",
            key: "/library/metadata/54890",
            parentRatingKey: "54843",
            grandparentRatingKey: "27613",
            guid: "plex://episode/669bb07ae61095827104a070",
            parentGuid: "plex://season/6659055ddd27970dd48c1b7d",
            grandparentGuid: "plex://show/5d9c09240aaccd001f8f45b3",
            grandparentSlug: "90-day-fiance-the-other-way",
            type: "episode",
            title: "10 Things I Hate About Moving",
            grandparentKey: "/library/metadata/27613",
            parentKey: "/library/metadata/54843",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "90 Day Fiancé: The Other Way",
            parentTitle: "Season 6",
            contentRating: "TV-14",
            summary:
              "Statler fears she's repeating mistakes of her past. Josh is frustrated when Lily keeps bringing up their money issues. Sarper has an unusual way of proving his love to Shekinah. Tatha's sister tells Tatha that she and James are making a mistake.",
            index: 4,
            parentIndex: 6,
            year: 2024,
            thumb: "/library/metadata/54890/thumb/1722299422",
            art: "/library/metadata/27613/art/1726724811",
            grandparentThumb: "/library/metadata/27613/thumb/1726724811",
            grandparentArt: "/library/metadata/27613/art/1726724811",
            duration: 2557972,
            originallyAvailableAt: "2024-07-22",
            addedAt: 1721700949,
            updatedAt: 1722299422,
            Media: [
              {
                id: 56666,
                duration: 2557972,
                bitrate: 9963,
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
                    id: 86530,
                    key: "/library/parts/86530/1721700674/file.mkv",
                    duration: 2557972,
                    file: "/TV Shows (Reality)/90 Day Fiancé - The Other Way/Season 06/90 Day Fiancé - The Other Way - S06E04 - 10 Things I Hate About Moving WEBDL-1080p.mkv",
                    size: 3185561867,
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "high",
                    Stream: [
                      {
                        id: 271804,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 9963,
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
                        displayTitle: "1080p (H.264)",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 271805,
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
                        id: 271806,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        displayTitle: "English (SRT)",
                        extendedDisplayTitle: "English (SRT)"
                      },
                      {
                        id: 271807,
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
                        displayTitle: "English SDH (SRT)",
                        extendedDisplayTitle: "SDH (English SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "10 Things I Hate About Moving",
                type: "coverPoster",
                url: "/library/metadata/27613/thumb/1726724811"
              },
              {
                alt: "10 Things I Hate About Moving",
                type: "snapshot",
                url: "/library/metadata/54890/thumb/1722299422"
              },
              {
                alt: "10 Things I Hate About Moving",
                type: "background",
                url: "/library/metadata/27613/art/1726724811"
              },
              {
                alt: "10 Things I Hate About Moving",
                type: "clearLogo",
                url: "/library/metadata/27613/clearLogo/1726724811"
              }
            ],
            UltraBlurColors: {
              topLeft: "3d290f",
              topRight: "7e522a",
              bottomRight: "7c4a26",
              bottomLeft: "6b5d26"
            },
            Guid: [
              {
                id: "tmdb://5484624"
              },
              {
                id: "tvdb://10578765"
              }
            ]
          },
          {
            ratingKey: "54889",
            key: "/library/metadata/54889",
            parentRatingKey: "54480",
            grandparentRatingKey: "27548",
            guid: "plex://episode/6676f7d6454ee7b50a725607",
            parentGuid: "plex://season/63f2cb9c04d9244e048ca69b",
            grandparentGuid: "plex://show/5d9c0846705e7a001e6d7b28",
            grandparentSlug: "bar-rescue",
            type: "episode",
            title: "Lost in the Sauce",
            grandparentKey: "/library/metadata/27548",
            parentKey: "/library/metadata/54480",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "Bar Rescue",
            parentTitle: "Season 9",
            contentRating: "TV-PG",
            summary:
              "Jon Taffer attempts to rescue a bar in Kingwood, Texas, whose owners have neglected both the business and the staff over the last several years.",
            index: 20,
            parentIndex: 9,
            year: 2024,
            thumb: "/library/metadata/54889/thumb/1722241228",
            art: "/library/metadata/27548/art/1722317230",
            parentThumb: "/library/metadata/54480/thumb/1710185516",
            grandparentThumb: "/library/metadata/27548/thumb/1722317230",
            grandparentArt: "/library/metadata/27548/art/1722317230",
            grandparentTheme: "/library/metadata/27548/theme/1722317230",
            duration: 2510207,
            originallyAvailableAt: "2024-07-21",
            addedAt: 1721636338,
            updatedAt: 1722241228,
            Media: [
              {
                id: 56664,
                duration: 2510207,
                bitrate: 5729,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 2,
                audioCodec: "aac",
                videoCodec: "h264",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "24p",
                audioProfile: "he-aac",
                videoProfile: "high",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 86528,
                    key: "/library/parts/86528/1721603252/file.mkv",
                    duration: 2510207,
                    file: "/TV Shows (Reality)/Bar Rescue/Season 09/Bar Rescue - S09E20 - Lost in the Sauce WEBDL-1080p.mkv",
                    size: 1798296939,
                    audioProfile: "he-aac",
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "high",
                    Stream: [
                      {
                        id: 271797,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 5665,
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
                        displayTitle: "1080p (H.264)",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 271798,
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
                        samplingRate: 48000,
                        displayTitle: "English (HE-AAC Stereo)",
                        extendedDisplayTitle: "English (HE-AAC Stereo)"
                      },
                      {
                        id: 271799,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        title: "English",
                        displayTitle: "English (SRT)",
                        extendedDisplayTitle: "English (SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Lost in the Sauce",
                type: "coverPoster",
                url: "/library/metadata/54480/thumb/1710185516"
              },
              {
                alt: "Lost in the Sauce",
                type: "snapshot",
                url: "/library/metadata/54889/thumb/1722241228"
              },
              {
                alt: "Lost in the Sauce",
                type: "background",
                url: "/library/metadata/27548/art/1722317230"
              }
            ],
            UltraBlurColors: {
              topLeft: "4c1c1f",
              topRight: "3f4241",
              bottomRight: "582223",
              bottomLeft: "135c55"
            },
            Guid: [
              {
                id: "tmdb://5429729"
              },
              {
                id: "tvdb://10592877"
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
                  "https://metadata-static.plex.tv/2/people/27b85844536c39f3f9ac943aaad46608.jpg"
              }
            ]
          },
          {
            ratingKey: "54656",
            key: "/library/metadata/54656/children",
            parentRatingKey: "43135",
            guid: "plex://season/65cd200d0e3346d4db23e8db",
            parentGuid: "plex://show/5d9c0809e98e47001eb06046",
            parentSlug: "90-day-fiance-happily-ever-after",
            parentStudio: "Sharp Entertainment",
            type: "season",
            title: "Season 8",
            parentKey: "/library/metadata/43135",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            parentTitle: "90 Day Fiancé: Happily Ever After?",
            summary: "",
            index: 8,
            parentIndex: 1,
            parentYear: 2016,
            thumb: "/library/metadata/43135/thumb/1725070767",
            art: "/library/metadata/43135/art/1725070767",
            parentThumb: "/library/metadata/43135/thumb/1725070767",
            parentTheme: "/library/metadata/43135/theme/1725070767",
            leafCount: 24,
            viewedLeafCount: 0,
            addedAt: 1721584815,
            updatedAt: 1710786977,
            Image: [
              {
                alt: "Season 8",
                type: "coverPoster",
                url: "/library/metadata/43135/thumb/1725070767"
              },
              {
                alt: "Season 8",
                type: "background",
                url: "/library/metadata/43135/art/1725070767"
              }
            ],
            Guid: [
              {
                id: "tvdb://2111389"
              }
            ]
          },
          {
            ratingKey: "54876",
            key: "/library/metadata/54876",
            parentRatingKey: "54783",
            grandparentRatingKey: "47836",
            guid: "plex://episode/666f2af770880cc1925af094",
            parentGuid: "plex://season/6658498a925882d687b3e67d",
            grandparentGuid: "plex://show/5d9c08172192ba001f307329",
            grandparentSlug: "60-days-in",
            type: "episode",
            title: "The Lost Clippers",
            titleSort: "Lost Clippers",
            grandparentKey: "/library/metadata/47836",
            parentKey: "/library/metadata/54783",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "60 Days In",
            parentTitle: "Season 9",
            contentRating: "TV-14",
            summary:
              "As the team continues its time in jail, some participants navigate their new surroundings while another finds it too much to handle.",
            index: 7,
            parentIndex: 9,
            year: 2024,
            thumb: "/library/metadata/54876/thumb/1721536013",
            art: "/library/metadata/47836/art/1724651438",
            grandparentThumb: "/library/metadata/47836/thumb/1724651438",
            grandparentArt: "/library/metadata/47836/art/1724651438",
            grandparentTheme: "/library/metadata/47836/theme/1724651438",
            duration: 2590080,
            originallyAvailableAt: "2024-07-18",
            addedAt: 1721401044,
            updatedAt: 1721536013,
            chapterSource: "media",
            Media: [
              {
                id: 56650,
                duration: 2590080,
                bitrate: 5060,
                width: 1280,
                height: 720,
                aspectRatio: 1.78,
                audioChannels: 2,
                audioCodec: "aac",
                videoCodec: "h264",
                videoResolution: "720",
                container: "mp4",
                videoFrameRate: "NTSC",
                optimizedForStreaming: 1,
                audioProfile: "lc",
                has64bitOffsets: false,
                videoProfile: "main",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 86514,
                    key: "/library/parts/86514/1721397625/file.mp4",
                    duration: 2590080,
                    file: "/TV Shows (Reality)/60 Days In/Season 09/60 Days In - S09E07 - The Lost Clippers WEBRip-720p.mp4",
                    size: 832781130,
                    audioProfile: "lc",
                    container: "mp4",
                    has64bitOffsets: false,
                    hasThumbnail: "1",
                    indexes: "sd",
                    optimizedForStreaming: true,
                    videoProfile: "main",
                    Stream: [
                      {
                        id: 271456,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 2499,
                        bitDepth: 8,
                        chromaLocation: "left",
                        chromaSubsampling: "4:2:0",
                        closedCaptions: true,
                        codedHeight: 720,
                        codedWidth: 1280,
                        frameRate: 29.97,
                        hasScalingMatrix: false,
                        height: 720,
                        level: 31,
                        profile: "main",
                        refFrames: 4,
                        scanType: "progressive",
                        streamIdentifier: "1",
                        width: 1280,
                        displayTitle: "720p (H.264)",
                        extendedDisplayTitle: "720p (H.264)"
                      },
                      {
                        id: 271458,
                        streamType: 2,
                        selected: true,
                        default: true,
                        codec: "aac",
                        index: 1,
                        channels: 2,
                        bitrate: 61,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        audioChannelLayout: "stereo",
                        profile: "lc",
                        samplingRate: 48000,
                        streamIdentifier: "2",
                        displayTitle: "English (AAC Stereo)",
                        extendedDisplayTitle: "English (AAC Stereo)"
                      },
                      {
                        id: 271457,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "eia_608",
                        index: 0,
                        bitrate: 2499,
                        embeddedInVideo: "1",
                        streamIdentifier: "1",
                        displayTitle: "Unknown (Closed Captions)",
                        extendedDisplayTitle: "Unknown (Closed Captions)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "The Lost Clippers",
                type: "coverPoster",
                url: "/library/metadata/47836/thumb/1724651438"
              },
              {
                alt: "The Lost Clippers",
                type: "snapshot",
                url: "/library/metadata/54876/thumb/1721536013"
              },
              {
                alt: "The Lost Clippers",
                type: "background",
                url: "/library/metadata/47836/art/1724651438"
              }
            ],
            UltraBlurColors: {
              topLeft: "2b2f2b",
              topRight: "933e47",
              bottomRight: "3c3213",
              bottomLeft: "464d45"
            },
            Guid: [
              {
                id: "tmdb://5418822"
              },
              {
                id: "tvdb://10546600"
              }
            ],
            Role: [
              {
                id: 294129,
                filter: "actor=294129",
                tag: "Mike Smith",
                tagKey: "668e7e7b22bcad9064350c91",
                role: "Self"
              }
            ]
          },
          {
            ratingKey: "54875",
            key: "/library/metadata/54875",
            parentRatingKey: "54874",
            grandparentRatingKey: "44932",
            guid: "plex://episode/669962411d4e0913b003addd",
            parentGuid: "plex://season/669962051d4e0913b003ace4",
            grandparentGuid: "plex://show/5d9c082bef619b002047d6ae",
            grandparentSlug: "pawn-stars",
            type: "episode",
            title: "Zigging and Zagging",
            grandparentKey: "/library/metadata/44932",
            parentKey: "/library/metadata/54874",
            librarySectionTitle: "TV Shows (Reality)",
            librarySectionID: 10,
            librarySectionKey: "/library/sections/10",
            grandparentTitle: "Pawn Stars",
            parentTitle: "Season 2024",
            contentRating: "TV-PG",
            summary:
              "Spencer brings in some new finds to the shop; Chum and Rick leave to meet a magician selling a zigzag box; Corey grapples with an expensive gold necklace made of ancient coins; and Chum attempts to negotiate a deal for a collection of Hollywood memorabilia.",
            index: 2,
            parentIndex: 2024,
            year: 2024,
            thumb: "/library/metadata/54875/thumb/1721442552",
            art: "/library/metadata/44932/art/1724304811",
            parentThumb: "/library/metadata/54874/thumb/1721444826",
            grandparentThumb: "/library/metadata/44932/thumb/1724304811",
            grandparentArt: "/library/metadata/44932/art/1724304811",
            grandparentTheme: "/library/metadata/44932/theme/1724304811",
            duration: 2448255,
            originallyAvailableAt: "2024-07-17",
            addedAt: 1721368726,
            updatedAt: 1721442552,
            Media: [
              {
                id: 56649,
                duration: 2448255,
                bitrate: 1184,
                width: 1920,
                height: 1080,
                aspectRatio: 1.78,
                audioChannels: 2,
                audioCodec: "aac",
                videoCodec: "hevc",
                videoResolution: "1080",
                container: "mkv",
                videoFrameRate: "24p",
                audioProfile: "he-aac",
                videoProfile: "main 10",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 86513,
                    key: "/library/parts/86513/1721335714/file.mkv",
                    duration: 2448255,
                    file: "/TV Shows (Reality)/Pawn Stars/Season 2024/Pawn Stars - S2024E02 - Zigging and Zagging HDTV-1080p.mkv",
                    size: 362247519,
                    audioProfile: "he-aac",
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "main 10",
                    Stream: [
                      {
                        id: 271721,
                        streamType: 1,
                        default: true,
                        codec: "hevc",
                        index: 0,
                        bitrate: 1184,
                        bitDepth: 10,
                        chromaLocation: "left",
                        chromaSubsampling: "4:2:0",
                        codedHeight: 1088,
                        codedWidth: 1920,
                        colorRange: "tv",
                        frameRate: 23.976,
                        height: 1080,
                        level: 120,
                        profile: "main 10",
                        refFrames: 1,
                        scanType: "progressive",
                        width: 1920,
                        displayTitle: "1080p (HEVC Main 10)",
                        extendedDisplayTitle: "1080p (HEVC Main 10)"
                      },
                      {
                        id: 271722,
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
                        samplingRate: 48000,
                        displayTitle: "English (HE-AAC Stereo)",
                        extendedDisplayTitle: "English (HE-AAC Stereo)"
                      },
                      {
                        id: 271723,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "ass",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        title: "English",
                        displayTitle: "English (ASS)",
                        extendedDisplayTitle: "English (ASS)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Zigging and Zagging",
                type: "coverPoster",
                url: "/library/metadata/54874/thumb/1721444826"
              },
              {
                alt: "Zigging and Zagging",
                type: "snapshot",
                url: "/library/metadata/54875/thumb/1721442552"
              },
              {
                alt: "Zigging and Zagging",
                type: "background",
                url: "/library/metadata/44932/art/1724304811"
              }
            ],
            UltraBlurColors: {
              topLeft: "111310",
              topRight: "292325",
              bottomRight: "943723",
              bottomLeft: "28201d"
            },
            Guid: [
              {
                id: "tvdb://10596235"
              }
            ]
          }
        ]
      }
    }

    validateResponseSpec("/hubs/home/recentlyAdded", "get", 200, response)
  })
})
