import { validateResponseSpec } from "@utils"
import { describe, it } from "vitest"

describe("GET /resources", () => {
  it("should validate the 200 response when includeHttps=1, includeRelay=1 and includeIPv6=1", () => {
    const response = [
      {
        name: "StreamMaster",
        product: "Plex Media Server",
        productVersion: "1.50.7.9541-913b34e21",
        platform: "Linux",
        platformVersion: "5.15.12-Unraid",
        device: "Docker Container",
        clientIdentifier: "8276c3fa6bc24e44b347e19c71fbb98b9287c1e9",
        createdAt: "2020-01-12T15:30:18Z",
        lastSeenAt: "2024-09-05T03:15:45Z",
        provides: "server",
        ownerId: null,
        sourceTitle: null,
        publicAddress: "54.231.109.34",
        accessToken: "Hg7FGK9xVGdWZRa_sj76",
        owned: true,
        home: false,
        synced: false,
        relay: true,
        presence: true,
        httpsRequired: false,
        publicAddressMatches: false,
        dnsRebindingProtection: true,
        natLoopbackSupported: false,
        connections: [
          {
            protocol: "https",
            address: "192.168.1.150",
            port: 32400,
            uri: "https://192-168-1-150.fc6b48db927de7394036856ade1760b9.plex.direct:32400",
            local: true,
            relay: false,
            IPv6: false
          },
          {
            protocol: "https",
            address: "www.streammaster.com",
            port: 45678,
            uri: "https://www.streammaster.com:45678",
            local: false,
            relay: false,
            IPv6: false
          },
          {
            protocol: "https",
            address: "54.231.109.34",
            port: 45678,
            uri: "https://54-231-109-34.fc6b48db927de7394036856ade1760b9.plex.direct:45678",
            local: false,
            relay: false,
            IPv6: false
          },
          {
            protocol: "https",
            address: "162.243.175.222",
            port: 8443,
            uri: "https://162-243-175-222.fc6b48db927de7394036856ade1760b9.plex.direct:8443",
            local: false,
            relay: true,
            IPv6: false
          }
        ]
      },
      {
        name: "PirateBay",
        product: "Plex Media Server",
        productVersion: "1.52.8.9931-936b74f82",
        platform: "Linux",
        platformVersion: "22.04 (Jammy Jellyfish)",
        device: "PC",
        clientIdentifier: "f76e7b49cd981f44e37f3128b6e9fca2db32bca1",
        createdAt: "2019-12-05T08:50:12Z",
        lastSeenAt: "2024-09-04T10:25:11Z",
        provides: "server",
        ownerId: 2639453,
        sourceTitle: "kingpirate123",
        publicAddress: "23.145.67.54",
        accessToken: "yB3uFR1GQgM2qS47LGtY",
        owned: false,
        home: false,
        synced: false,
        relay: true,
        presence: true,
        httpsRequired: false,
        publicAddressMatches: false,
        dnsRebindingProtection: true,
        natLoopbackSupported: true,
        connections: [
          {
            protocol: "https",
            address: "10.1.1.45",
            port: 32400,
            uri: "https://10-1-1-45.d5e7f86fcace84ce8e19c7fa25347ce.plex.direct:32400",
            local: true,
            relay: false,
            IPv6: false
          },
          {
            protocol: "https",
            address: "10.98.1.2",
            port: 32400,
            uri: "https://10-98-1-2.d5e7f86fcace84ce8e19c7fa25347ce.plex.direct:32400",
            local: true,
            relay: false,
            IPv6: false
          },
          {
            protocol: "https",
            address: "23.145.67.54",
            port: 32400,
            uri: "https://23-145-67-54.d5e7f86fcace84ce8e19c7fa25347ce.plex.direct:32400",
            local: false,
            relay: false,
            IPv6: false
          },
          {
            protocol: "https",
            address: "162.243.175.222",
            port: 8443,
            uri: "https://162-243-175-222.d5e7f86fcace84ce8e19c7fa25347ce.plex.direct:8443",
            local: false,
            relay: true,
            IPv6: false
          }
        ]
      },
      {
        name: "Plexify",
        product: "Plex Media Server",
        productVersion: "1.33.0.5930-7c2440c6",
        platform: null,
        platformVersion: null,
        device: null,
        clientIdentifier: "f4297e6a9bf4e642f41d33caabc7134d5634e078",
        createdAt: "2021-03-12T02:21:19Z",
        lastSeenAt: "2021-03-28T12:48:14Z",
        provides: "server",
        ownerId: 974224,
        sourceTitle: "PlayerOne",
        publicAddress: "87.64.72.96",
        accessToken: "e7JvGmnGHyF3kYxV8qs2",
        owned: false,
        home: false,
        synced: false,
        relay: true,
        presence: false,
        httpsRequired: false,
        publicAddressMatches: false,
        dnsRebindingProtection: false,
        natLoopbackSupported: false,
        connections: [
          {
            protocol: "http",
            address: "87.64.72.96",
            port: 23945,
            uri: "http://87.64.72.96:23945",
            local: false,
            relay: false,
            IPv6: false
          }
        ]
      },
      {
        name: "HouseOfFun",
        product: "Plex Media Server",
        productVersion: "1.42.0.8900-046c2e25",
        platform: "Linux",
        platformVersion:
          "5.12.82-Unraid (#1 SMP PREEMPT_DYNAMIC Fri May 10 14:10:09 PDT 2024)",
        device: "PC",
        clientIdentifier: "ae35f677ff5689c9a56f4331f107f77957ab7feb",
        createdAt: "2021-07-22T14:27:50Z",
        lastSeenAt: "2024-09-05T05:33:23Z",
        provides: "server",
        ownerId: 4568124,
        sourceTitle: "CoolUser201",
        publicAddress: "172.156.190.56",
        accessToken: "hIYSFzE3AOL8XrQT9r1w",
        owned: false,
        home: false,
        synced: false,
        relay: false,
        presence: true,
        httpsRequired: false,
        publicAddressMatches: false,
        dnsRebindingProtection: false,
        natLoopbackSupported: false,
        connections: [
          {
            protocol: "https",
            address: "192.168.0.123",
            port: 32400,
            uri: "https://192-168-0-123.7db256a875124f09cd9a9a4232bb2135.plex.direct:32400",
            local: true,
            relay: false,
            IPv6: false
          },
          {
            protocol: "https",
            address: "172.156.190.56",
            port: 32400,
            uri: "https://172-156-190-56.7db256a875124f09cd9a9a4232bb2135.plex.direct:32400",
            local: false,
            relay: false,
            IPv6: false
          }
        ]
      },
      {
        name: "StreamerMaster",
        product: "Plex Media Server",
        productVersion: "1.45.2.7239-b797c8a8d",
        platform: "Linux",
        platformVersion: "5.18.20-Unraid",
        device: "Docker Container",
        clientIdentifier: "f6c462d7dd81c2cf78b1d6120b768f3b8d5ab521",
        createdAt: "2022-08-23T11:08:49Z",
        lastSeenAt: "2024-06-12T11:22:47Z",
        provides: "server",
        ownerId: 9321659,
        sourceTitle: "AdminUser",
        publicAddress: "162.214.65.132",
        accessToken: "oGR9zJDwX5iQFZ7tE9zU",
        owned: false,
        home: false,
        synced: false,
        relay: true,
        presence: false,
        httpsRequired: false,
        publicAddressMatches: false,
        dnsRebindingProtection: false,
        natLoopbackSupported: false,
        connections: [
          {
            protocol: "https",
            address: "192.168.178.30",
            port: 32400,
            uri: "https://192-168-178-30.8bd4a832eea747d7aa569d2104f84f96.plex.direct:32400",
            local: true,
            relay: false,
            IPv6: false
          },
          {
            protocol: "https",
            address: "176.123.150.200",
            port: 10500,
            uri: "https://176-123-150-200.8bd4a832eea747d7aa569d2104f84f96.plex.direct:10500",
            local: false,
            relay: false,
            IPv6: false
          }
        ]
      },
      {
        name: "desktop-mars",
        product: "Plex Media Server",
        productVersion: "1.55.7.9431-837d54f91",
        platform: "Windows",
        platformVersion: "10.0 (Build 20340)",
        device: "PC",
        clientIdentifier: "e5f4749ba349b07623246d861f35e1dbd6a29bc7",
        createdAt: "2024-07-19T01:45:39Z",
        lastSeenAt: "2024-09-05T07:12:46Z",
        provides: "server",
        ownerId: 856194,
        sourceTitle: "AdminSuper",
        publicAddress: "146.122.146.200",
        accessToken: "sQ9weXnURfzLtLmnRz6q",
        owned: false,
        home: false,
        synced: false,
        relay: true,
        presence: true,
        httpsRequired: false,
        publicAddressMatches: false,
        dnsRebindingProtection: false,
        natLoopbackSupported: true,
        connections: [
          {
            protocol: "https",
            address: "192.168.2.21",
            port: 32400,
            uri: "https://192-168-2-21.9bd4a931f7b64b4b896f476f98b61d57.plex.direct:32400",
            local: true,
            relay: false,
            IPv6: false
          },
          {
            protocol: "https",
            address: "146.122.146.200",
            port: 10901,
            uri: "https://146-122-146-200.9bd4a931f7b64b4b896f476f98b61d57.plex.direct:10901",
            local: false,
            relay: false,
            IPv6: false
          },
          {
            protocol: "https",
            address: "162.243.175.222",
            port: 8443,
            uri: "https://162-243-175-222.9bd4a931f7b64b4b896f476f98b61d57.plex.direct:8443",
            local: false,
            relay: true,
            IPv6: false
          }
        ]
      },
      {
        name: "MEDIA-HUB",
        product: "Plex Media Server",
        productVersion: "1.45.7.8739-e9821b72",
        platform: "Windows",
        platformVersion: "10.0 (Build 20040)",
        device: "PC",
        clientIdentifier: "d4e449bd664b2b93d8966b78323483be260e16c7",
        createdAt: "2024-09-12T19:28:31Z",
        lastSeenAt: "2024-09-05T08:12:37Z",
        provides: "server",
        ownerId: 32968462,
        sourceTitle: "AdminHub",
        publicAddress: "152.104.26.202",
        accessToken: "-tH4rXWP91EDtrM7Mc5D",
        owned: false,
        home: false,
        synced: false,
        relay: true,
        presence: false,
        httpsRequired: false,
        publicAddressMatches: false,
        dnsRebindingProtection: true,
        natLoopbackSupported: false,
        connections: [
          {
            protocol: "https",
            address: "192.168.178.175",
            port: 32400,
            uri: "https://192-168-178-175.a5c471267784569e71505e1925ae56b6.plex.direct:32400",
            local: true,
            relay: false,
            IPv6: false
          },
          {
            protocol: "https",
            address: "152.104.26.202",
            port: 13010,
            uri: "https://152-104-26-202.a5c471267784569e71505e1925ae56b6.plex.direct:13010",
            local: false,
            relay: false,
            IPv6: false
          }
        ]
      }
    ]

    validateResponseSpec("/resources", "get", 200, response)
  })
})
