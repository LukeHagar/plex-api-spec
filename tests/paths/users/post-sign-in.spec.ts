import { validateResponseSpec } from "../../utils/"
import { describe, expect, it } from "vitest"

describe("POST /users/signin", () => {
  it("should validate the 201 response when the API spec is valid", () => {
    const response = {
      id: 62735028,
      uuid: "b9h6f3c8k1",
      username: "ZjFvKLCb",
      title: "ZjFvKLCb",
      email: "c9eMdShR@example.com",
      friendlyName: "",
      locale: null,
      confirmed: false,
      joinedAt: 1552593531,
      emailOnlyAuth: false,
      hasPassword: true,
      protected: false,
      thumb: "https://plex.tv/users/b9h6f3c8k1/avatar?c=1724402119",
      authToken: "jx9nTbVbHk1gM",
      mailingListStatus: "unsubscribed",
      mailingListActive: false,
      scrobbleTypes: "",
      country: "ES",
      subscription: {
        active: false,
        subscribedAt: "2019-03-16T15:20:12Z",
        status: "Inactive",
        paymentService: null,
        plan: null,
        features: [
          "guided-upgrade",
          "increase-password-complexity",
          "upgrade-3ds2",
          "ad-countdown-timer",
          "adaptive_bitrate",
          "amazon-loop-debug",
          "Android - Dolby Vision",
          "Android - PiP",
          "avod-ad-analysis",
          "avod-new-media",
          "blacklist_get_signin",
          "CU Sunset",
          "client-radio-stations",
          "cloudflare-turnstile-required",
          "comments_and_replies_push_notifications",
          "friend_request_push_notifications",
          "community_access_plex_tv",
          "companions_sonos",
          "custom-home-removal",
          "disable_home_user_friendships",
          "disable_sharing_friendships",
          "drm_support",
          "le_isrg_root_x1",
          "federated-auth",
          "home",
          "HRK_enable_EUR",
          "ios14-privacy-banner",
          "iterable-notification-tokens",
          "keep-payment-method",
          "kevin-bacon",
          "korea-consent",
          "lets_encrypt",
          "lightning-dvr-pivot",
          "livetv",
          "live-tv-support-incomplete-segments",
          "tuner-sharing",
          "metadata_search",
          "vod_cloudflare",
          "new_plex_pass_prices",
          "news-provider-sunset-modal",
          "photos-favorites",
          "photos-metadata-edition",
          "pms_health",
          "rate-limit-client-token",
          "shared_server_notification",
          "shared_source_notification",
          "scrobbling-service-plex-tv",
          "collections",
          "radio",
          "exclude restrictions",
          "signin_with_apple",
          "spring_serve_ad_provider",
          "transcoder_cache",
          "TREBLE-show-features",
          "two-factor-authentication",
          "unsupportedtuners",
          "vod-schema",
          "watch-together-invite",
          "web_server_dashboard"
        ]
      },
      subscriptionDescription: null,
      restricted: false,
      anonymous: false,
      home: false,
      guest: false,
      homeSize: 1,
      homeAdmin: false,
      maxHomeSize: 15,
      rememberExpiresAt: 1725611719,
      profile: {
        autoSelectAudio: true,
        defaultAudioLanguage: "ja",
        defaultSubtitleLanguage: "en",
        autoSelectSubtitle: 1,
        defaultSubtitleAccessibility: 0,
        defaultSubtitleForced: 0,
        watchedIndicator: 1,
        mediaReviewsVisibility: 0
      },
      entitlements: [],
      subscriptions: [],
      pastSubscriptions: [
        {
          id: null,
          mode: null,
          renewsAt: null,
          endsAt: 1556281940,
          billing: {
            paymentMethodId: null,
            internalPaymentMethod: {}
          },
          canceled: false,
          gracePeriod: false,
          onHold: false,
          canReactivate: false,
          canUpgrade: false,
          canDowngrade: false,
          canConvert: false,
          type: "plexpass",
          transfer: null,
          state: "ended"
        }
      ],
      trials: [],
      services: [
        {
          identifier: "epg",
          endpoint: "https://epg.provider.plex.tv",
          token: "d2h7zUjKgT5oLwQ3cQ6d",
          secret: null,
          status: "online"
        },
        {
          identifier: "epg-staging",
          endpoint: "https://epg-staging.provider.plex.tv",
          token: "r7m1nVfPhU4eRwM7eR5a",
          secret: null,
          status: "online"
        },
        {
          identifier: "epg-dev",
          endpoint: "https://epg-dev.provider.plex.tv",
          token: "z4w2sLxPbJ3iRkY2hN8f",
          secret: null,
          status: "online"
        },
        {
          identifier: "eyeq",
          endpoint: "https://c4412416.ipg.web.cddbp.net/webapi/xml/1.0/",
          token: "g1v9kWxHdT3jNiY6dF4b",
          secret: null,
          status: "online"
        },
        {
          identifier: "eyeq-channel-icons",
          endpoint: "http://akamai-b.cdn.cddbp.net/cds/2.0/image",
          token: null,
          secret: null,
          status: "online"
        },
        {
          identifier: "graph-dev",
          endpoint: "https://community-dev.plex.tv",
          token: null,
          secret: null,
          status: "online"
        },
        {
          identifier: "graph-staging",
          endpoint: "https://community-staging.plex.tv",
          token: null,
          secret: null,
          status: "online"
        },
        {
          identifier: "community-dev",
          endpoint: "https://community-dev.plex.tv",
          token: null,
          secret: null,
          status: "online"
        },
        {
          identifier: "community-staging",
          endpoint: "https://community-staging.plex.tv",
          token: null,
          secret: null,
          status: "online"
        },
        {
          identifier: "community",
          endpoint: "https://community.plex.tv",
          token: null,
          secret: null,
          status: "online"
        },
        {
          identifier: "metadata",
          endpoint: "https://metadata.provider.plex.tv",
          token: "h5z3rQxLhJ2lRyB4gN7v",
          secret: null,
          status: "online"
        },
        {
          identifier: "scrobbling",
          endpoint: "https://scrobbles.plex.tv",
          token: "s6y1wTxFpL7jMxC3nR8e",
          secret: null,
          status: "online"
        },
        {
          identifier: "metadata-dev",
          endpoint: "https://metadata-dev.provider.plex.tv",
          token: "j2h4tWmNpO3lRyD7vF9x",
          secret: null,
          status: "online"
        },
        {
          identifier: "metadata-provider",
          endpoint: "https://mpm.plex.tv/",
          token: null,
          secret: null,
          status: "online"
        },
        {
          identifier: "tmsapi",
          endpoint: "https://tmsapi.plex.tv/v1.1/",
          token: "p7c8xVhLpM5oTzQ1wR2b",
          secret: null,
          status: "online"
        },
        {
          identifier: "subtitles-search",
          endpoint: "https://metadata.provider.plex.tv/library/streams/matches",
          token: "t8f3kWqNhP6uLyX4mC2y",
          secret: null,
          status: "online"
        },
        {
          identifier: "acoustid",
          endpoint: "https://acoustid.plex.tv/",
          token: "l5n7rQxHpV2oRyD9gF6b",
          secret: null,
          status: "online"
        },
        {
          identifier: "lyricfind",
          endpoint: "https://lyricfind.plex.tv/",
          token: "m3y4tUjKlN8fMxC7oQ2b",
          secret: "a1d5vWxHpQ6oLyT4gR3c",
          status: "online"
        },
        {
          identifier: "lyricfind-search",
          endpoint: "https://lyricfind.plex.tv/",
          token: "q6c8wTxFpO9kLrZ2hV5b",
          secret: null,
          status: "online"
        },
        {
          identifier: "tvdb",
          endpoint: "https://api4.thetvdb.com/",
          token: "r4h7zUjMgL1fTzN3yP5x",
          secret: null,
          status: "online"
        }
      ],
      adsConsent: null,
      adsConsentSetAt: null,
      adsConsentReminderAt: null,
      experimentalFeatures: false,
      twoFactorEnabled: false,
      backupCodesCreated: false,
      attributionPartner: null
    }

    validateResponseSpec("/users/signin", "post", 201, response)
  })

  it("should validate the 201 response when the API spec is valid", () => {
    const response = {
      id: 475829302,
      uuid: "a1b2c3d4e5f67890",
      username: "user12345",
      title: "user12345",
      email: "user12345@example.com",
      friendlyName: "",
      locale: null,
      confirmed: false,
      joinedAt: 1633376532,
      emailOnlyAuth: false,
      hasPassword: true,
      protected: false,
      thumb: "https://plex.tv/users/a1b2c3d4e5f67890/avatar?c=1234567890",
      authToken: "gHjKlMnOpQrStUvWxYz",
      mailingListStatus: "active",
      mailingListActive: true,
      scrobbleTypes: "",
      country: "IT",
      subscription: {
        active: false,
        subscribedAt: null,
        status: "Inactive",
        paymentService: null,
        plan: null,
        features: [
          "guided-upgrade",
          "increase-password-complexity",
          "upgrade-3ds2",
          "ad-countdown-timer",
          "adaptive_bitrate",
          "amazon-loop-debug",
          "avod-ad-analysis",
          "avod-new-media",
          "blacklist_get_signin",
          "CU Sunset",
          "client-radio-stations",
          "cloudflare-turnstile-required",
          "comments_and_replies_push_notifications",
          "friend_request_push_notifications",
          "community_access_plex_tv",
          "companions_sonos",
          "custom-home-removal",
          "disable_home_user_friendships",
          "disable_sharing_friendships",
          "drm_support",
          "le_isrg_root_x1",
          "federated-auth",
          "home",
          "HRK_enable_EUR",
          "ios14-privacy-banner",
          "iterable-notification-tokens",
          "keep-payment-method",
          "kevin-bacon",
          "korea-consent",
          "lets_encrypt",
          "lightning-dvr-pivot",
          "livetv",
          "live-tv-support-incomplete-segments",
          "tuner-sharing",
          "metadata_search",
          "vod_cloudflare",
          "new_plex_pass_prices",
          "news-provider-sunset-modal",
          "photos-favorites",
          "photos-metadata-edition",
          "pms_health",
          "rate-limit-client-token",
          "shared_server_notification",
          "shared_source_notification",
          "scrobbling-service-plex-tv",
          "collections",
          "radio",
          "exclude restrictions",
          "signin_with_apple",
          "spring_serve_ad_provider",
          "transcoder_cache",
          "TREBLE-show-features",
          "two-factor-authentication",
          "unsupportedtuners",
          "vod-schema",
          "watch-together-invite",
          "web_server_dashboard"
        ]
      },
      subscriptionDescription: null,
      restricted: false,
      anonymous: null,
      home: false,
      guest: false,
      homeSize: 1,
      homeAdmin: false,
      maxHomeSize: 15,
      rememberExpiresAt: 1725684008,
      profile: {
        autoSelectAudio: true,
        defaultAudioLanguage: null,
        defaultSubtitleLanguage: null,
        autoSelectSubtitle: 1,
        defaultSubtitleAccessibility: 0,
        defaultSubtitleForced: 0,
        watchedIndicator: 1,
        mediaReviewsVisibility: 0
      },
      entitlements: [],
      subscriptions: [],
      pastSubscriptions: [],
      trials: [],
      services: [
        {
          identifier: "epg",
          endpoint: "https://epg.provider.plex.tv",
          token: "A1B2C3D4E5F6G7H8I9J0",
          secret: null,
          status: "online"
        },
        {
          identifier: "epg-staging",
          endpoint: "https://epg-staging.provider.plex.tv",
          token: "J9I8H7G6F5E4D3C2B1A0",
          secret: null,
          status: "online"
        },
        {
          identifier: "epg-dev",
          endpoint: "https://epg-dev.provider.plex.tv",
          token: "0J9I8H7G6F5E4D3C2B1A",
          secret: null,
          status: "online"
        },
        {
          identifier: "eyeq",
          endpoint: "https://c4412416.ipg.web.cddbp.net/webapi/xml/1.0/",
          token: "Z1X2C3V4B5N6M7Q8W9R0",
          secret: null,
          status: "online"
        },
        {
          identifier: "eyeq-channel-icons",
          endpoint: "http://akamai-b.cdn.cddbp.net/cds/2.0/image",
          token: null,
          secret: null,
          status: "online"
        },
        {
          identifier: "graph-dev",
          endpoint: "https://community-dev.plex.tv",
          token: null,
          secret: null,
          status: "online"
        },
        {
          identifier: "graph-staging",
          endpoint: "https://community-staging.plex.tv",
          token: null,
          secret: null,
          status: "online"
        },
        {
          identifier: "community-dev",
          endpoint: "https://community-dev.plex.tv",
          token: null,
          secret: null,
          status: "online"
        },
        {
          identifier: "community-staging",
          endpoint: "https://community-staging.plex.tv",
          token: null,
          secret: null,
          status: "online"
        },
        {
          identifier: "community",
          endpoint: "https://community.plex.tv",
          token: null,
          secret: null,
          status: "online"
        },
        {
          identifier: "metadata",
          endpoint: "https://metadata.provider.plex.tv",
          token: "K1L2M3N4O5P6Q7R8S9T0",
          secret: null,
          status: "online"
        },
        {
          identifier: "metadata-dev",
          endpoint: "https://metadata-dev.provider.plex.tv",
          token: "T0S9R8Q7P6O5N4M3L2K1",
          secret: null,
          status: "online"
        },
        {
          identifier: "metadata-provider",
          endpoint: "https://mpm.plex.tv/",
          token: null,
          secret: null,
          status: "online"
        },
        {
          identifier: "tmsapi",
          endpoint: "https://tmsapi.plex.tv/v1.1/",
          token: "F1G2H3J4K5L6M7N8O9P0",
          secret: null,
          status: "online"
        },
        {
          identifier: "subtitles-search",
          endpoint: "https://metadata.provider.plex.tv/library/streams/matches",
          token: "Q1W2E3R4T5Y6U7I8O9P0",
          secret: null,
          status: "online"
        },
        {
          identifier: "acoustid",
          endpoint: "https://acoustid.plex.tv/",
          token: "1A2S3D4F5G6H7J8K9L0",
          secret: null,
          status: "online"
        },
        {
          identifier: "lyricfind",
          endpoint: "https://lyricfind.plex.tv/",
          token: "Z9X8C7V6B5N4M3Q2W1E0",
          secret: "X1C2V3B4N5M6Q7W8E9R0",
          status: "online"
        },
        {
          identifier: "lyricfind-search",
          endpoint: "https://lyricfind.plex.tv/",
          token: "F6D5S4A3J2K1L8P7O9M0",
          secret: null,
          status: "online"
        },
        {
          identifier: "tvdb",
          endpoint: "https://api4.thetvdb.com/",
          token: "L1K2J3H4G5F6D7S8A9P0",
          secret: null,
          status: "online"
        }
      ],
      adsConsent: null,
      adsConsentSetAt: null,
      adsConsentReminderAt: null,
      experimentalFeatures: false,
      twoFactorEnabled: false,
      backupCodesCreated: false,
      attributionPartner: null
    }
    validateResponseSpec("/users/signin", "post", 201, response)
  })
})
