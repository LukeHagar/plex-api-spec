import { validateResponseSpec } from "@utils"
import { describe, it } from "vitest"

describe("GET /library/metadata/[RatingKey]/", () => {
  it("should validate the 200 response when the response is from Tv-Show", () => {
    const response = {
      MediaContainer: {
        size: 1,
        allowSync: true,
        identifier: "com.plexapp.plugins.library",
        librarySectionID: 2,
        librarySectionTitle: "TV Series ",
        librarySectionUUID: "e69655a2-ef48-4aba-bb19-0cc34d1e7d36",
        mediaTagPrefix: "/system/bundle/media/flags/",
        mediaTagVersion: 1734362201,
        Metadata: [
          {
            ratingKey: "44288",
            key: "/library/metadata/44288/children",
            guid: "plex://show/5d9c08254eefaa001f5d6dcb",
            slug: "better-call-saul",
            studio: "Sony Pictures Television",
            type: "show",
            title: "Better Call Saul",
            librarySectionTitle: "TV Series ",
            librarySectionID: 2,
            librarySectionKey: "/library/sections/2",
            contentRating: "TV-MA",
            summary:
              "Before Saul Goodman, he was Jimmy McGill. And if you're calling Jimmy, you're in real trouble. The prequel to \"Breaking Bad\" follows small-time attorney, Jimmy McGill, as he transforms into Walter White's morally challenged lawyer, Saul Goodman.",
            index: 1,
            audienceRating: 8.7,
            viewCount: 4,
            skipCount: 1,
            lastViewedAt: 1625764795,
            year: 2015,
            tagline: "Make the call",
            thumb: "/library/metadata/44288/thumb/1736487993",
            art: "/library/metadata/44288/art/1736487993",
            theme: "/library/metadata/44288/theme/1736487993",
            duration: 2700000,
            originallyAvailableAt: "2015-02-08",
            leafCount: 63,
            viewedLeafCount: 4,
            childCount: 6,
            addedAt: 1625505101,
            updatedAt: 1736487993,
            audienceRatingImage: "themoviedb://image.rating",
            Image: [
              {
                alt: "Better Call Saul",
                type: "coverPoster",
                url: "/library/metadata/44288/thumb/1736487993"
              },
              {
                alt: "Better Call Saul",
                type: "background",
                url: "/library/metadata/44288/art/1736487993"
              },
              {
                alt: "Better Call Saul",
                type: "clearLogo",
                url: "/library/metadata/44288/clearLogo/1736487993"
              }
            ],
            UltraBlurColors: {
              topLeft: "11333a",
              topRight: "1d2721",
              bottomRight: "5c451d",
              bottomLeft: "372c10"
            },
            Genre: [
              { id: 1057, filter: "genre=1057", tag: "Crime" },
              { id: 91, filter: "genre=91", tag: "Drama" }
            ],
            Country: [
              {
                id: 58591,
                filter: "country=58591",
                tag: "United States of America"
              }
            ],
            Guid: [
              { id: "imdb://tt3032476" },
              { id: "tmdb://60059" },
              { id: "tvdb://273181" }
            ],
            Rating: [
              { image: "imdb://image.rating", value: 9.0, type: "audience" },
              {
                image: "rottentomatoes://image.rating.ripe",
                value: 9.8,
                type: "critic"
              },
              {
                image: "rottentomatoes://image.rating.upright",
                value: 9.6,
                type: "audience"
              },
              {
                image: "themoviedb://image.rating",
                value: 8.7,
                type: "audience"
              }
            ],
            Role: [
              {
                id: 109501,
                filter: "actor=109501",
                tag: "Bob Odenkirk",
                tagKey: "5d77683254f42c001f8c3f69",
                role: "Jimmy McGill",
                thumb:
                  "https://metadata-static.plex.tv/f/people/f2ca7b474cc984efbdd5c503a096285a.jpg"
              },
              {
                id: 109505,
                filter: "actor=109505",
                tag: "Jonathan Banks",
                tagKey: "5d776825999c64001ec2bf76",
                role: "Mike Ehrmantraut",
                thumb:
                  "https://metadata-static.plex.tv/a/people/a7d5cb022aba167c6da8a92dfc88c55b.jpg"
              },
              {
                id: 152495,
                filter: "actor=152495",
                tag: "Rhea Seehorn",
                tagKey: "5d776835961905001eb93d32",
                role: "Kim Wexler",
                thumb:
                  "https://metadata-static.plex.tv/6/people/61e9052c76950f3b3734c96c8ae861b7.jpg"
              },
              {
                id: 152496,
                filter: "actor=152496",
                tag: "Patrick Fabian",
                tagKey: "5d776834103a2d001f5679ce",
                role: "Howard Hamlin",
                thumb:
                  "https://metadata-static.plex.tv/6/people/68425a6ea3b32a9919b94cf5f9e3e3f5.jpg"
              },
              {
                id: 152497,
                filter: "actor=152497",
                tag: "Michael Mando",
                tagKey: "5d7768b8decfcd001f2f0e76",
                role: "Nacho Varga",
                thumb:
                  "https://metadata-static.plex.tv/7/people/709558015b64b0a56f865db20f83da35.jpg"
              },
              {
                id: 123310,
                filter: "actor=123310",
                tag: "Giancarlo Esposito",
                tagKey: "5d776826151a60001f24a725",
                role: "Gus Fring",
                thumb:
                  "https://metadata-static.plex.tv/e/people/e96f7cac181ec76b445b8ab024e1477c.jpg"
              },
              {
                id: 152498,
                filter: "actor=152498",
                tag: "Michael McKean",
                tagKey: "5d77682b3c3c2a001fbcc341",
                role: "Chuck McGill",
                thumb:
                  "https://metadata-static.plex.tv/6/people/66b4edbb30186501fa8003a0ee4b4fe3.jpg"
              },
              {
                id: 152499,
                filter: "actor=152499",
                tag: "Tony Dalton",
                tagKey: "5d77683c961905001eb95683",
                role: "Lalo Salamanca",
                thumb:
                  "https://metadata-static.plex.tv/0/people/0e7ef919426a6aa18e09c7fa6a710662.jpg"
              },
              {
                id: 116477,
                filter: "actor=116477",
                tag: "Mark Margolis",
                tagKey: "5d7768254de0ee001fcc81a1",
                role: "Hector Salamanca",
                thumb:
                  "https://metadata-static.plex.tv/5/people/56e17286b1b80c859cb359bdd7856a7e.jpg"
              },
              {
                id: 138467,
                filter: "actor=138467",
                tag: "Kerry Condon",
                tagKey: "5d77683454c0f0001f3035d1",
                role: "Stacey Ehrmantraut",
                thumb:
                  "https://metadata-static.plex.tv/1/people/1393de631a49fe69cc2c1331d73ff3be.jpg"
              },
              {
                id: 119562,
                filter: "actor=119562",
                tag: "Jeremiah Bitsui",
                tagKey: "5d776825880197001ec90534",
                role: "Victor",
                thumb:
                  "https://metadata-static.plex.tv/5/people/51970a65b98d7198e862276ada910809.jpg"
              },
              {
                id: 150511,
                filter: "actor=150511",
                tag: "Ray Campbell",
                tagKey: "5d776a7ff617c9002016dab4",
                role: "Tyrus Kitt",
                thumb:
                  "https://metadata-static.plex.tv/people/5d776a7ff617c9002016dab4.jpg"
              },
              {
                id: 119888,
                filter: "actor=119888",
                tag: "Cara Pifko",
                tagKey: "5d77683d54f42c001f8c5ebb",
                role: "Paige Novick",
                thumb:
                  "https://metadata-static.plex.tv/6/people/6602a6f533cc85ebfacaf28bcdf037e6.jpg"
              },
              {
                id: 144731,
                filter: "actor=144731",
                tag: "Dennis Boutsikaris",
                tagKey: "5d7768333c3c2a001fbcda06",
                role: "Rich Schweikart",
                thumb:
                  "https://metadata-static.plex.tv/5/people/59ef0dbcb4fe29b978afd495aa9b3cd9.jpg"
              },
              {
                id: 152507,
                filter: "actor=152507",
                tag: "Ed Begley Jr.",
                tagKey: "5d7768265af944001f1f6707",
                role: "Clifford Main",
                thumb:
                  "https://metadata-static.plex.tv/7/people/7c3ac0198e9c775a6df2fdb3640d9dee.jpg"
              },
              {
                id: 152531,
                filter: "actor=152531",
                tag: "Josh Fadem",
                tagKey: "5d7768767e5fa10020bf01be",
                role: "Camera Guy",
                thumb:
                  "https://metadata-static.plex.tv/c/people/c5e8241b506acd7c57a7fd475d9674c6.jpg"
              },
              {
                id: 152570,
                filter: "actor=152570",
                tag: "Julian Bonfiglio",
                tagKey: "5d77706c23d5a3001f5397d9",
                role: "Sound Guy",
                thumb:
                  "https://metadata-static.plex.tv/d/people/dc9662fc13e867f5dd8ca64b459ef27c.jpg"
              },
              {
                id: 115190,
                filter: "actor=115190",
                tag: "Tina Parker",
                tagKey: "5d77683b880197001ec948e3",
                role: "Francesca Liddy",
                thumb:
                  "https://metadata-static.plex.tv/b/people/bb8d3bb7452202c993b2cd48ced7e85f.jpg"
              },
              {
                id: 152602,
                filter: "actor=152602",
                tag: "Rex Linn",
                tagKey: "5d77682a85719b001f3a160b",
                role: "Kevin Wachtell",
                thumb:
                  "https://metadata-static.plex.tv/2/people/27f9e7b283c864b3b4bc6ac62a1aa6e0.jpg"
              },
              {
                id: 152533,
                filter: "actor=152533",
                tag: "Peter Diseth",
                tagKey: "5d77707051dd69001fe58365",
                role: "Bill Oakley",
                thumb:
                  "https://metadata-static.plex.tv/7/people/7b0fdf12ef3510bae206b6be07d8b9a3.jpg"
              },
              {
                id: 152638,
                filter: "actor=152638",
                tag: "Vincent Fuentes",
                tagKey: "5d7768254de0ee001fcc815e",
                role: "Arturo",
                thumb:
                  "https://metadata-static.plex.tv/3/people/36e41f279f394fa6048cc1c3d94fe700.jpg"
              },
              {
                id: 152546,
                filter: "actor=152546",
                tag: "John Christian Love",
                tagKey: "5d7768861999bc0020dc7e94",
                role: "Ernesto",
                thumb:
                  "https://metadata-static.plex.tv/1/people/182d645e7a09245d177001b8267706db.jpg"
              },
              {
                id: 150610,
                filter: "actor=150610",
                tag: "Javier Grajeda",
                tagKey: "5d776836880197001ec93904",
                role: "Juan Bolsa",
                thumb:
                  "https://metadata-static.plex.tv/3/people/33a3ef392e31fbd6c691dab8a785e9aa.jpg"
              },
              {
                id: 152540,
                filter: "actor=152540",
                tag: "Juan Carlos Cantu",
                tagKey: "5d77683c6f4521001ea9d503",
                role: "Manuel Varga",
                thumb:
                  "https://metadata-static.plex.tv/a/people/a757bfa0e8f1ddf7cf8df7965891ec2f.jpg"
              },
              {
                id: 152989,
                filter: "actor=152989",
                tag: "Eric Steinig",
                tagKey: "5d776a1a96b655001fde36e5",
                role: "Nick",
                thumb:
                  "https://metadata-static.plex.tv/7/people/779c93b90271e8217abc0dd9896f02bd.jpg"
              },
              {
                id: 150695,
                filter: "actor=150695",
                tag: "Luis Moncada",
                tagKey: "5d77683b8718ba001e315f51",
                role: "Marco Salamanca",
                thumb:
                  "https://metadata-static.plex.tv/a/people/afd41daa15b1d2da9fcaf058acc52b74.jpg"
              },
              {
                id: 152637,
                filter: "actor=152637",
                tag: "Daniel Moncada",
                tagKey: "5d7769b1fb0d55001f52d624",
                role: "Leonel Salamanca",
                thumb:
                  "https://metadata-static.plex.tv/3/people/348c4b9f8520b02158cca99c6602cf3e.jpg"
              },
              {
                id: 152523,
                filter: "actor=152523",
                tag: "Jessie Ennis",
                tagKey: "5d776a8151dd69001fe24449",
                role: "Erin Brill",
                thumb:
                  "https://metadata-static.plex.tv/4/cc68393fae/people/4894cdf3c017c02325e2e396469f1e19.jpg"
              },
              {
                id: 152532,
                filter: "actor=152532",
                tag: "Hayley Holmes",
                tagKey: "5d776871eb5d26001f1eb9a4",
                role: "Make-Up Girl",
                thumb:
                  "https://metadata-static.plex.tv/people/5d776871eb5d26001f1eb9a4.jpg"
              },
              {
                id: 152506,
                filter: "actor=152506",
                tag: "Eileen Fogarty",
                tagKey: "5d776b1cfb0d55001f55c45e",
                role: "Mrs. Nguyen",
                thumb:
                  "https://metadata-static.plex.tv/7/people/762512896a5a923a9bd2341de9dcc1c0.jpg"
              },
              {
                id: 152636,
                filter: "actor=152636",
                tag: "Audrey Moore",
                tagKey: "5d776d8afb0d55001f5a31db",
                role: "Julie",
                thumb:
                  "https://metadata-static.plex.tv/people/5d776d8afb0d55001f5a31db.jpg"
              },
              {
                id: 152615,
                filter: "actor=152615",
                tag: "Abigail Zoe Lewis",
                tagKey: "5d7769ecf617c90020166b55",
                role: "Kaylee Ehrmantraut",
                thumb:
                  "https://metadata-static.plex.tv/8/people/8fe28fb77abbf5e485a99d08a9a3e44a.jpg"
              },
              {
                id: 152545,
                filter: "actor=152545",
                tag: "James E. Dowling",
                tagKey: "625d7af14a33139de32bec18",
                role: "Francis",
                thumb:
                  "https://metadata-static.plex.tv/4/people/41fb647aa136d1487e6ebeacd9443dc0.jpg"
              },
              {
                id: 154555,
                filter: "actor=154555",
                tag: "Howard Ferguson Jr.",
                tagKey: "5d776b9ead5437001f7a5088",
                role: "Arthur",
                thumb:
                  "https://metadata-static.plex.tv/people/5d776b9ead5437001f7a5088.jpg"
              },
              {
                id: 152508,
                filter: "actor=152508",
                tag: "Omar Maskati",
                tagKey: "5d776ba9594b2b001e6e04a9",
                role: "Omar",
                thumb:
                  "https://metadata-static.plex.tv/6/people/6f89892e6e14d2baa49c39f269f77106.jpg"
              },
              {
                id: 150573,
                filter: "actor=150573",
                tag: "Max Arciniega",
                tagKey: "5d7768b023d5a3001f4f00e2",
                role: "Domingo Molina",
                thumb:
                  "https://metadata-static.plex.tv/8/people/8c9bd32b1c2cc87584f6e3fbad63b310.jpg"
              },
              {
                id: 152813,
                filter: "actor=152813",
                tag: "Joe DeRosa",
                tagKey: "5d776b70f617c900201760d2",
                role: "Dr. Caldera",
                thumb:
                  "https://metadata-static.plex.tv/d/people/d5cb51a75a0c93eefd9d5bd78f6ea9ef.jpg"
              },
              {
                id: 152563,
                filter: "actor=152563",
                tag: "Julie Pearl",
                tagKey: "5d7768387e9a3c0020c6d717",
                role: "ADA Suzanne Ericsen",
                thumb:
                  "https://metadata-static.plex.tv/0/people/036c8d0dc27d0df361f0a0f173035918.jpg"
              },
              {
                id: 150538,
                filter: "actor=150538",
                tag: "Sarah Minnich",
                tagKey: "5d776992fb0d55001f529bf5",
                role: "Brenda",
                thumb:
                  "https://metadata-static.plex.tv/4/people/4bb149e203d22f87856c500f7f98fa4f.jpg"
              },
              {
                id: 117293,
                filter: "actor=117293",
                tag: "Rainer Bock",
                tagKey: "5d7768328718ba001e313fc1",
                role: "Werner Ziegler",
                thumb:
                  "https://metadata-static.plex.tv/3/people/36ea68e35628c5f627246582bfc96d29.jpg"
              },
              {
                id: 150512,
                filter: "actor=150512",
                tag: "Lavell Crawford",
                tagKey: "5d7768783ab0e7001f5021b6",
                role: "Huell Babineaux",
                thumb:
                  "https://metadata-static.plex.tv/4/people/4e9468e3b5bacd12158b4d50462a4972.jpg"
              },
              {
                id: 144801,
                filter: "actor=144801",
                tag: "Keiko Agena",
                tagKey: "5d77682d3c3c2a001fbcc7a0",
                role: "Viola Goto",
                thumb:
                  "https://metadata-static.plex.tv/7/people/77d8fce0321c1a2946acec5617168d7a.jpg"
              },
              {
                id: 113989,
                filter: "actor=113989",
                tag: "Stefan Kapičić",
                tagKey: "5d77683f103a2d001f56a345",
                role: "Casper",
                thumb:
                  "https://metadata-static.plex.tv/1/people/1be084e21bca4a8ebf2ec46912015aa2.jpg"
              },
              {
                id: 152525,
                filter: "actor=152525",
                tag: "Victoria Pham-Gilchrist",
                tagKey: "625d7af14a33139de32bec1a",
                role: "Salon Employee #1"
              },
              {
                id: 152524,
                filter: "actor=152524",
                tag: "Luis Bordonada",
                tagKey: "5d7768462ec6b5001f6bec58",
                role: "Brian Archuleta",
                thumb:
                  "https://metadata-static.plex.tv/2/people/24e94a96aa0ad6ba792267c15526edd5.jpg"
              },
              {
                id: 152616,
                filter: "actor=152616",
                tag: "Ann Cusack",
                tagKey: "5d77682f2ec6b5001f6bb148",
                role: "Rebecca Bois",
                thumb:
                  "https://metadata-static.plex.tv/people/5d77682f2ec6b5001f6bb148.jpg"
              },
              {
                id: 152596,
                filter: "actor=152596",
                tag: "David DeLao",
                tagKey: "5d776a4cad5437001f778ea0",
                role: "Diego",
                thumb:
                  "https://metadata-static.plex.tv/1/people/1e49028eea9fd8270dabb0f251188a80.jpg"
              },
              {
                id: 195498,
                filter: "actor=195498",
                tag: "Hans Obma",
                tagKey: "5e163e4b1493cd003f0e57c8",
                role: "Adrian",
                thumb:
                  "https://metadata-static.plex.tv/b/people/bebc367c6e61b4b936ae57eac134e2e6.jpg"
              },
              {
                id: 195499,
                filter: "actor=195499",
                tag: "Jilon VanOver",
                tagKey: "5d776834eb5d26001f1e09fb",
                role: "Sebastian",
                thumb:
                  "https://metadata-static.plex.tv/e/people/efb2e1bca121fa76643528f29cb78342.jpg"
              },
              {
                id: 208343,
                filter: "actor=208343",
                tag: "Robin Ward Holloway",
                tagKey: "5f3fbbbbcae2c60042e6b8a4",
                role: "Udo",
                thumb:
                  "https://metadata-static.plex.tv/6/people/6f2ba92d16a538f213a071dd2d5ee659.jpg"
              },
              {
                id: 208344,
                filter: "actor=208344",
                tag: "Ian Goebel",
                tagKey: "5f3fff8f02101b0040f193f6",
                role: "Renke"
              },
              {
                id: 152572,
                filter: "actor=152572",
                tag: "Ammie Masterson",
                tagKey: "5d776be023d5a3001f5151fe",
                role: "Stef Carvaines",
                thumb:
                  "https://metadata-static.plex.tv/people/5d776be023d5a3001f5151fe.jpg"
              },
              {
                id: 136952,
                filter: "actor=136952",
                tag: "Katerina Tannenbaum",
                tagKey: "5e164ddb2d4d84003e4a5bd5",
                role: "Amber",
                thumb:
                  "https://metadata-static.plex.tv/3/people/3d3b3ea587b87e4c8fa9a9595de056d3.jpg"
              },
              {
                id: 152734,
                filter: "actor=152734",
                tag: "Julie Ann Emery",
                tagKey: "5d77683261141d001fb14e5a",
                role: "Betsy Kettleman",
                thumb:
                  "https://metadata-static.plex.tv/3/people/339a6cc1ac94c381b100eed80fd5f394.jpg"
              },
              {
                id: 152735,
                filter: "actor=152735",
                tag: "Jeremy Shamos",
                tagKey: "5d7768fef617c9002015ba84",
                role: "Craig Kettleman",
                thumb:
                  "https://metadata-static.plex.tv/b/people/bfaf6f7abf6a34aed3d458339282328c.jpg"
              },
              {
                id: 111020,
                filter: "actor=111020",
                tag: "Ben Bela Böhm",
                tagKey: "5d77683b880197001ec94d15",
                role: "Kai",
                thumb:
                  "https://metadata-static.plex.tv/0/people/0afd7ee1cc27afa440c6d415baa268a4.jpg"
              },
              {
                id: 145078,
                filter: "actor=145078",
                tag: "Harrison Thomas",
                tagKey: "5d776bbd96b655001fe1a57c",
                role: "Lyle",
                thumb:
                  "https://image.tmdb.org/t/p/original/trk1nf4oSSPXbOSV1cYVUqtqQ72.jpg"
              },
              {
                id: 152818,
                filter: "actor=152818",
                tag: "Jean Effron",
                tagKey: "5d776a0c7a53e9001e6f8b02",
                role: "Irene Landry",
                thumb:
                  "https://metadata-static.plex.tv/6/people/686b5fcebc61d9db068e67a2f3028b35.jpg"
              },
              {
                id: 152509,
                filter: "actor=152509",
                tag: "Mark Proksch",
                tagKey: "5d7769d696b655001fddaf5d",
                role: "Daniel 'Pryce' Wormald",
                thumb:
                  "https://metadata-static.plex.tv/a/people/a1d32aa74c1ee157a10300a950ea5d8e.jpg"
              },
              {
                id: 152521,
                filter: "actor=152521",
                tag: "Kim Lan T. Pham",
                tagKey: "625d7af14a33139de32bec1b",
                role: "Salon Employee #2"
              },
              {
                id: 152522,
                filter: "actor=152522",
                tag: "Bau Thi Duong",
                tagKey: "625d7af14a33139de32bec1d",
                role: "Salon Employee #4"
              },
              {
                id: 152526,
                filter: "actor=152526",
                tag: "Le Hai Dang",
                tagKey: "625d7af14a33139de32bec21",
                role: "Salon Employee #3"
              },
              {
                id: 152706,
                filter: "actor=152706",
                tag: "Manuel Uriza",
                tagKey: "5d776ac47a53e9001e70f1bd",
                role: "Ximenez Lecerda",
                thumb:
                  "https://metadata-static.plex.tv/b/people/bf446f9dd937a4bb1814b422b809846a.jpg"
              },
              {
                id: 144925,
                filter: "actor=144925",
                tag: "Carol Herman",
                tagKey: "5d7769e4594b2b001e6ad1f5",
                role: "Mrs. Strauss",
                thumb:
                  "https://metadata-static.plex.tv/6/people/66b4ad684613be01a4e5452b682fa612.jpg"
              },
              {
                id: 152591,
                filter: "actor=152591",
                tag: "Jose E. Pintor",
                tagKey: "625d7af14a33139de32bec37",
                role: "Manager"
              },
              {
                id: 150776,
                filter: "actor=150776",
                tag: "Laura Fraser",
                tagKey: "5d77682f6f4521001ea9aead",
                role: "Lydia Rodarte-Quayle",
                thumb:
                  "https://metadata-static.plex.tv/8/people/805a714d105f2bb81cea7e01387e21c8.jpg"
              },
              {
                id: 150785,
                filter: "actor=150785",
                tag: "Debrianna Mansini",
                tagKey: "5d77682e151a60001f24c373",
                role: "Fran",
                thumb:
                  "https://metadata-static.plex.tv/6/people/64a2c60d9b1164a071f96456570fa5c1.jpg"
              },
              {
                id: 152527,
                filter: "actor=152527",
                tag: "Racquel Pino",
                tagKey: "625d7af14a33139de32bec1f",
                role: "Raquel"
              },
              {
                id: 155783,
                filter: "actor=155783",
                tag: "Robert Douglas Washington",
                tagKey: "5d7768402ec6b5001f6bde46",
                role: "Gabriel"
              },
              {
                id: 155782,
                filter: "actor=155782",
                tag: "Matt Roszak",
                tagKey: "60353243b8e195002c6b0f75",
                role: "Thomas"
              },
              {
                id: 152562,
                filter: "actor=152562",
                tag: "Poppy Liu",
                tagKey: "5f40539403883a0040ba9c5c",
                role: "Jo",
                thumb:
                  "https://metadata-static.plex.tv/3/people/3788c020b60da3fd3e0b57e6917893a4.jpg"
              },
              {
                id: 173887,
                filter: "actor=173887",
                tag: "Nadine Marissa",
                tagKey: "5de4acf7550ce6001d222f8e",
                role: "Contract Counsel Administrator",
                thumb:
                  "https://metadata-static.plex.tv/a/people/a8b944ed2bd63a8cad0856c9e887fb22.jpg"
              },
              {
                id: 152561,
                filter: "actor=152561",
                tag: "Juliet Donenfeld",
                tagKey: "5d776d5d9ab544002151df0e",
                role: "Kaylee",
                thumb:
                  "https://metadata-static.plex.tv/3/people/3a0bd3ac7081e5190e0837f336458b75.jpg"
              },
              {
                id: 155785,
                filter: "actor=155785",
                tag: "Philip Fornah",
                tagKey: "5d776a637a53e9001e703d8a",
                role: "Sam",
                thumb:
                  "https://metadata-static.plex.tv/people/5d776a637a53e9001e703d8a.jpg"
              },
              {
                id: 109142,
                filter: "actor=109142",
                tag: "Carol Burnett",
                tagKey: "5d776829f54112001f5bc245",
                role: "Marion",
                thumb:
                  "https://metadata-static.plex.tv/5/people/5561343d993a0dda0355c2c28ab83ed6.jpg"
              },
              {
                id: 152686,
                filter: "actor=152686",
                tag: "Elisha Yaffe",
                tagKey: "5d776b60f617c900201754a3",
                role: "Lance",
                thumb:
                  "https://metadata-static.plex.tv/2/people/2f08c28ba302d72f2164fdf2d8674527.jpg"
              },
              {
                id: 150642,
                filter: "actor=150642",
                tag: "Raymond Cruz",
                tagKey: "5d7768285af944001f1f71d9",
                role: "Tuco Salamanca",
                thumb:
                  "https://metadata-static.plex.tv/d/people/db31bfa26b767d496953c9807b3ebe32.jpg"
              },
              {
                id: 152529,
                filter: "actor=152529",
                tag: "Morgan Krantz",
                tagKey: "5d7768a37e5fa10020bf30ce",
                role: "Ron",
                thumb:
                  "https://metadata-static.plex.tv/b/people/bc41287fa324efbdbb6801a0898cb3c7.jpg"
              },
              {
                id: 152530,
                filter: "actor=152530",
                tag: "Sasha Feldman",
                tagKey: "5d776ba496b655001fe17ca4",
                role: "Sticky",
                thumb:
                  "https://metadata-static.plex.tv/9/people/9703e6e0c234d94906938a9c91816aec.jpg"
              },
              {
                id: 152582,
                filter: "actor=152582",
                tag: "Barry Corbin",
                tagKey: "5d7768286f4521001ea9940e",
                role: "Everett Acker",
                thumb:
                  "https://metadata-static.plex.tv/6/people/6954dbd5d162270df61fc3cde477e7f4.jpg"
              },
              {
                id: 116263,
                filter: "actor=116263",
                tag: "Clea DuVall",
                tagKey: "5d7768263c3c2a001fbcafc2",
                role: "Dr. Lara Cruz",
                thumb:
                  "https://metadata-static.plex.tv/e/people/eebf6665848ec56cf6487d9fed6093b6.jpg"
              },
              {
                id: 122383,
                filter: "actor=122383",
                tag: "Barry Shabaka Henley",
                tagKey: "5d77682485719b001f3a04e4",
                role: "Detective Sanders",
                thumb:
                  "https://metadata-static.plex.tv/3/people/3de9bcc53fb5852596a72362953fc414.jpg"
              },
              {
                id: 152803,
                filter: "actor=152803",
                tag: "Omid Abtahi",
                tagKey: "5d776831103a2d001f566c89",
                role: "Detective Abbasi",
                thumb:
                  "https://metadata-static.plex.tv/3/people/34e78891ce62eeebb546172a921bc845.jpg"
              },
              {
                id: 152812,
                filter: "actor=152812",
                tag: "Faith Healey",
                tagKey: "625d7af14a33139de32bec25",
                role: "Kaylee",
                thumb:
                  "https://metadata-static.plex.tv/f/people/f79f50f7141485635ff3994542ecd4bd.jpg"
              },
              {
                id: 109656,
                filter: "actor=109656",
                tag: "Mel Rodriguez",
                tagKey: "5d776828961905001eb916fe",
                role: "Marco",
                thumb:
                  "https://metadata-static.plex.tv/people/5d776828961905001eb916fe.jpg"
              },
              {
                id: 195502,
                filter: "actor=195502",
                tag: "Jackamoe Buzzell",
                tagKey: "5d776a0c7a53e9001e6f8b07",
                role: "Private Investigator"
              },
              {
                id: 152819,
                filter: "actor=152819",
                tag: "Kelley Lewallen",
                tagKey: "5d776b8d51dd69001fe317c3",
                role: "Bingo Helper",
                thumb:
                  "https://metadata-static.plex.tv/6/people/6748eebb105836f2bcbba22ba785c2ed.jpg"
              },
              {
                id: 152549,
                filter: "actor=152549",
                tag: "Efrain Villa",
                tagKey: "5e165633275947003dc6ddfd",
                role: "Carlos",
                thumb:
                  "https://metadata-static.plex.tv/9/people/9eaf724107d1881b874cac27d5df6a22.jpg"
              },
              {
                id: 152593,
                filter: "actor=152593",
                tag: "Anthony Escobar",
                tagKey: "5d776abffb0d55001f54fb96",
                role: "Gesualdo",
                thumb:
                  "https://metadata-static.plex.tv/people/5d776abffb0d55001f54fb96.jpg"
              },
              {
                id: 195403,
                filter: "actor=195403",
                tag: "JB Blanc",
                tagKey: "5d776834103a2d001f5675f5",
                role: "Dr. Barry Goodman",
                thumb:
                  "https://metadata-static.plex.tv/6/people/69eedf3c81a371cee0ef9377d5cc83cd.jpg"
              },
              {
                id: 152881,
                filter: "actor=152881",
                tag: "Tamara Tunie",
                tagKey: "5d77682a7e9a3c0020c6b32e",
                role: "Anita",
                thumb:
                  "https://metadata-static.plex.tv/8/people/8344628573aed5b0187955cdd7c57189.jpg"
              },
              {
                id: 152882,
                filter: "actor=152882",
                tag: "Stephen Michael Ayers",
                tagKey: "5d77682ba091de001f2e6b13",
                role: "Group Leader",
                thumb:
                  "https://metadata-static.plex.tv/people/5d77682ba091de001f2e6b13.jpg"
              },
              {
                id: 195506,
                filter: "actor=195506",
                tag: "KeiLyn Durrel Jones",
                tagKey: "5e17c2a3275947003dcf6a0a",
                role: "Blingy",
                thumb:
                  "https://metadata-static.plex.tv/f/people/f6c1f036ef2cd16ce3911ad6c3e4dd8e.jpg"
              },
              {
                id: 129886,
                filter: "actor=129886",
                tag: "David Mattey",
                tagKey: "5d776833e6d55c002040cb37",
                role: "Man Mountain",
                thumb:
                  "https://metadata-static.plex.tv/c/people/c2d782580b9af6858f62a4183ff8c5c2.jpg"
              },
              {
                id: 114523,
                filter: "actor=114523",
                tag: "David Grant Wright",
                tagKey: "5d776852103a2d001f56d872",
                role: "Lynton",
                thumb:
                  "https://metadata-static.plex.tv/people/5d776852103a2d001f56d872.jpg"
              },
              {
                id: 208345,
                filter: "actor=208345",
                tag: "Samantha Benavides",
                tagKey: "5f4060fafea1a1003fa6a94e",
                role: "Sam"
              },
              {
                id: 152512,
                filter: "actor=152512",
                tag: "Krista Kendall",
                tagKey: "625d7af14a33139de32bec1e",
                role: "Krista"
              },
              {
                id: 114521,
                filter: "actor=114521",
                tag: "Nigel Gibbs",
                tagKey: "5d776828880197001ec90e6f",
                role: "Detective Tim Roberts",
                thumb:
                  "https://metadata-static.plex.tv/c/people/c11103bcdf4218c855327be50eaf979c.jpg"
              },
              {
                id: 152663,
                filter: "actor=152663",
                tag: "Saidah Arrika Ekulona",
                tagKey: "5d776833e6d55c002040c976",
                role: "ADA Gina Khalil",
                thumb:
                  "https://metadata-static.plex.tv/b/people/b089395828da87869c9223bea7f2aa58.jpg"
              },
              {
                id: 155784,
                filter: "actor=155784",
                tag: "Zach Rose",
                tagKey: "5d776a6196b655001fded409",
                role: "Andre",
                thumb:
                  "https://metadata-static.plex.tv/0/people/0a3f40622630c934853797de90a15c91.jpg"
              },
              {
                id: 174583,
                filter: "actor=174583",
                tag: "Max Bickelhaup",
                tagKey: "5e165a86316a39003efa7dca",
                role: "Buddy",
                thumb:
                  "https://image.tmdb.org/t/p/original/uYWpwuAp5pBfgvMnur9WEZpwraS.jpg"
              },
              {
                id: 120840,
                filter: "actor=120840",
                tag: "Lennie Loftin",
                tagKey: "5d7768284de0ee001fcc8ded",
                role: "Private Investigator",
                thumb:
                  "https://metadata-static.plex.tv/f/people/f74ab6fc7e81eed783eb3cf4079f24f9.jpg"
              },
              {
                id: 150611,
                filter: "actor=150611",
                tag: "Steven Bauer",
                tagKey: "5d7768262e80df001ebdce00",
                role: "Don Eladio",
                thumb:
                  "https://metadata-static.plex.tv/e/people/e9a0ef56284950aad4e618c8bfcc2541.jpg"
              },
              {
                id: 152631,
                filter: "actor=152631",
                tag: "Marty Lindsey",
                tagKey: "5d776838103a2d001f5684e6",
                role: "Alvin Reese",
                thumb:
                  "https://metadata-static.plex.tv/a/people/ae42edb9bf095b79d83a9fb65264d5f7.jpg"
              },
              {
                id: 212500,
                filter: "actor=212500",
                tag: "Emmett Hunter",
                tagKey: "5d776e0fad5437001f7e9578",
                role: "Bryan",
                thumb:
                  "https://metadata-static.plex.tv/f/cc68393fae/people/fa1c9ce9056a73f4c32ba3ebe33ee65e.jpg"
              },
              {
                id: 212501,
                filter: "actor=212501",
                tag: "Kolbe Jackson",
                tagKey: "5f3fc31852f2000041487165",
                role: "Jose"
              },
              {
                id: 158907,
                filter: "actor=158907",
                tag: "Sandrine Holt",
                tagKey: "5d77682a61141d001fb13ab5",
                role: "Cheryl Hamlin",
                thumb:
                  "https://metadata-static.plex.tv/d/people/dd2cbaa58d5ed93c46c705b671b0eeb4.jpg"
              },
              {
                id: 120133,
                filter: "actor=120133",
                tag: "Pat Healy",
                tagKey: "5d7768253c3c2a001fbcac69",
                role: "Jeff",
                thumb:
                  "https://metadata-static.plex.tv/4/people/472478e69a5a87d9da227a2abc1d760b.jpg"
              },
              {
                id: 122104,
                filter: "actor=122104",
                tag: "Jim Beaver",
                tagKey: "5d7768288718ba001e3121a6",
                role: "Lawson",
                thumb:
                  "https://metadata-static.plex.tv/people/5d7768288718ba001e3121a6.jpg"
              },
              {
                id: 150521,
                filter: "actor=150521",
                tag: "Dean Norris",
                tagKey: "5d7768258718ba001e3118e8",
                role: "Hank Schrader",
                thumb:
                  "https://metadata-static.plex.tv/e/people/e81f6b2a5a5ee5fcd9203207c183ad8d.jpg"
              },
              {
                id: 112273,
                filter: "actor=112273",
                tag: "Steven Michael Quezada",
                tagKey: "5d776835151a60001f24da4e",
                role: "Steven Gomez",
                thumb:
                  "https://metadata-static.plex.tv/f/people/fc794dafcc086734b7fc80f92604f1d5.jpg"
              },
              {
                id: 152581,
                filter: "actor=152581",
                tag: "Michael Morford",
                tagKey: "5e7e3e1fdbe82b0040e42e55",
                role: "Big Tough"
              },
              {
                id: 152580,
                filter: "actor=152580",
                tag: "La'Charles Trask",
                tagKey: "5ec422703173800041d5546d",
                role: "Chatty Tough"
              },
              {
                id: 152601,
                filter: "actor=152601",
                tag: "Dani Payne",
                tagKey: "5d7770c323d5a3001f53bb75",
                role: "Forque Waitress"
              },
              {
                id: 195508,
                filter: "actor=195508",
                tag: "Austin Boyce",
                tagKey: "5e624e1b2bbb96003ebc388e",
                role: "Marcie"
              },
              {
                id: 152723,
                filter: "actor=152723",
                tag: "Carlin James",
                tagKey: "5d776bc923d5a3001f5140e9",
                role: "Scooter",
                thumb:
                  "https://metadata-static.plex.tv/7/people/7888a26b03cf30d005a3155b2b258686.jpg"
              },
              {
                id: 195509,
                filter: "actor=195509",
                tag: "Miriam Colon",
                tagKey: "5d7768262e80df001ebdce04",
                role: "Abuelita",
                thumb:
                  "https://metadata-static.plex.tv/2/people/213d5b30fb795209504945b90ff44461.jpg"
              },
              {
                id: 152732,
                filter: "actor=152732",
                tag: "Steven Levine",
                tagKey: "5d7770d881ba41001faf9424",
                role: "Lars Lindholm",
                thumb:
                  "https://metadata-static.plex.tv/0/people/03fc58065c235a60d3210dface67469e.jpg"
              },
              {
                id: 195510,
                filter: "actor=195510",
                tag: "Daniel Spenser Levine",
                tagKey: "5f3ff7e23e5306003e577d2f",
                role: "Cal Lindholm",
                thumb:
                  "https://metadata-static.plex.tv/a/people/a4c1f333cd647dc9e976dbb8ac3ffe88.jpg"
              },
              {
                id: 152755,
                filter: "actor=152755",
                tag: "Dorian Missick",
                tagKey: "5d776826e6d55c002040b00d",
                role: "Detective #1",
                thumb:
                  "https://metadata-static.plex.tv/2/people/2b2b41946066a6d2f6cdd27436cd62b4.jpg"
              },
              {
                id: 152771,
                filter: "actor=152771",
                tag: "Rose Liotta",
                tagKey: "625d7af14a33139de32bec22",
                role: "Chuck's Neighbor"
              },
              {
                id: 290331,
                filter: "actor=290331",
                tag: "Caleb Burgess",
                tagKey: "5d776c0e96b655001fe24ab0",
                role: "Warren Kettleman",
                thumb:
                  "https://metadata-static.plex.tv/2/people/2103d76d9607a616bee4e97f3cb7218f.jpg"
              },
              {
                id: 152757,
                filter: "actor=152757",
                tag: "Sage Bell",
                tagKey: "5d776c6a23d5a3001f51b43f",
                role: "Jo Jo Kettleman"
              },
              {
                id: 152626,
                filter: "actor=152626",
                tag: "Steven Ogg",
                tagKey: "5d77685c594b2b001e689a6e",
                role: "Sobchak",
                thumb:
                  "https://metadata-static.plex.tv/a/people/a9bde8bb5766f50bea5a1c8838c232a0.jpg"
              },
              {
                id: 122684,
                filter: "actor=122684",
                tag: "Don Harvey",
                tagKey: "5d7768258718ba001e31171a",
                role: "Jeff",
                thumb:
                  "https://metadata-static.plex.tv/8/people/8116c0f19c51a5d0de68ec40f41673db.jpg"
              },
              {
                id: 152543,
                filter: "actor=152543",
                tag: "Lalo Flores",
                tagKey: "625d7af14a33139de32bec2a",
                role: "Nacho's Man #1"
              },
              {
                id: 152544,
                filter: "actor=152544",
                tag: "Victor A. Guajardo",
                tagKey: "625d7af14a33139de32bec2b",
                role: "Nacho's Man #2"
              },
              {
                id: 300355,
                filter: "actor=300355",
                tag: "Robert Grossman",
                tagKey: "5f3fe7b0bf3e560040b31e98",
                role: "Theodore 'Fudge' Talbot"
              },
              {
                id: 114995,
                filter: "actor=114995",
                tag: "Brendan Fehr",
                tagKey: "5d776833103a2d001f567556",
                role: "Captain Bauer",
                thumb:
                  "https://metadata-static.plex.tv/f/people/f47ef8b31662910889613e1a3bffda85.jpg"
              },
              {
                id: 152705,
                filter: "actor=152705",
                tag: "Allie Sundstrom",
                tagKey: "5d776c6a23d5a3001f51b442",
                role: "Copy Shop Customer #1",
                thumb:
                  "https://metadata-static.plex.tv/b/people/b486ba9fd74f7b3c9c715be19abf219d.jpg"
              },
              {
                id: 117808,
                filter: "actor=117808",
                tag: "Erika Erica",
                tagKey: "5d77692696b655001fdcba0d",
                role: "Copy Shop Customer #2",
                thumb:
                  "https://metadata-static.plex.tv/people/5d77692696b655001fdcba0d.jpg"
              },
              {
                id: 195513,
                filter: "actor=195513",
                tag: "Richard Bacca",
                tagKey: "625d7af14a33139de32bec3f",
                role: "Border Agent"
              },
              {
                id: 115275,
                filter: "actor=115275",
                tag: "Kimberly Hebert Gregory",
                tagKey: "5d7768d3fb0d55001f51a436",
                role: "Kyra Hay",
                thumb:
                  "https://metadata-static.plex.tv/1/people/1325c1726c7a60b39f24b1c161958f7a.jpg"
              },
              {
                id: 152855,
                filter: "actor=152855",
                tag: "Diana Rose",
                tagKey: "5d77687f3ab0e7001f502d99",
                role: "Pollos Employee"
              },
              {
                id: 152707,
                filter: "actor=152707",
                tag: "Michael Chieffo",
                tagKey: "5d77682b7e9a3c0020c6b6ac",
                role: "Mr. Ughetta",
                thumb:
                  "https://metadata-static.plex.tv/b/people/b1f3a9b7f85a5a3109fe9da66397f23e.jpg"
              },
              {
                id: 152870,
                filter: "actor=152870",
                tag: "John Getz",
                tagKey: "5d77682a5af944001f1f7905",
                role: "Chairman",
                thumb:
                  "https://metadata-static.plex.tv/4/people/40d2ba24f688d40e8cf4e784d0633a41.jpg"
              },
              {
                id: 152876,
                filter: "actor=152876",
                tag: "Quinn VanAntwerp",
                tagKey: "5e164211df4678003f525b2d",
                role: "Mr. Alley",
                thumb:
                  "https://metadata-static.plex.tv/1/people/1b0fe8d42197ed81adcf338aa40c5bfd.jpg"
              },
              {
                id: 152872,
                filter: "actor=152872",
                tag: "Cornell Womack",
                tagKey: "5d776832e6d55c002040c73b",
                role: "Male Committee Member",
                thumb:
                  "https://metadata-static.plex.tv/3/people/361b10fc7a743b71a77dedeaee7b6e7e.jpg"
              },
              {
                id: 152871,
                filter: "actor=152871",
                tag: "Jalene Mack",
                tagKey: "5d776881374a5b001fec7808",
                role: "Female Committee Member",
                thumb:
                  "https://metadata-static.plex.tv/f/people/f2b86d744c070885a3e80e5ee545630f.jpg"
              },
              {
                id: 152880,
                filter: "actor=152880",
                tag: "Arthur Glassman",
                tagKey: "625d7af14a33139de32bec47",
                role: "Mr. Collins"
              },
              {
                id: 152883,
                filter: "actor=152883",
                tag: "Grant James",
                tagKey: "5d776838961905001eb94afa",
                role: "Leonard",
                thumb:
                  "https://metadata-static.plex.tv/people/5d776838961905001eb94afa.jpg"
              },
              {
                id: 186151,
                filter: "actor=186151",
                tag: "Frank Deal",
                tagKey: "5d7768881999bc0020dc840f",
                role: "Parks Supervisor",
                thumb:
                  "https://metadata-static.plex.tv/people/5d7768881999bc0020dc840f.jpg"
              },
              {
                id: 195514,
                filter: "actor=195514",
                tag: "Jason Sklar",
                tagKey: "5d7768375af944001f1fa7b7",
                role: "Music Store Owner",
                thumb:
                  "https://metadata-static.plex.tv/people/5d7768375af944001f1fa7b7.jpg"
              },
              {
                id: 195515,
                filter: "actor=195515",
                tag: "Randy Sklar",
                tagKey: "5d7768375af944001f1fa7b8",
                role: "Music Store Owner",
                thumb:
                  "https://metadata-static.plex.tv/b/people/b71787ccfd211bdafeeebd590c49f629.jpg"
              },
              {
                id: 152897,
                filter: "actor=152897",
                tag: "Bonnie Bartlett",
                tagKey: "5d77682d7228e5001f1dd99a",
                role: "Helen",
                thumb:
                  "https://metadata-static.plex.tv/9/people/954ef5303bd7a553baf9074b17c65f65.jpg"
              },
              {
                id: 152898,
                filter: "actor=152898",
                tag: "Phyllis Applegate",
                tagKey: "5d776833961905001eb93845",
                role: "Myrtle",
                thumb:
                  "https://metadata-static.plex.tv/4/people/4e0409d2d73627ad0601274cca70d9ed.jpg"
              },
              {
                id: 152899,
                filter: "actor=152899",
                tag: "Carol Mansell",
                tagKey: "5d77682aeb5d26001f1de2ad",
                role: "Rose",
                thumb:
                  "https://metadata-static.plex.tv/e/people/e45a5785fcfbb2f0b0df8ddc64768efc.jpg"
              },
              {
                id: 152694,
                filter: "actor=152694",
                tag: "Breezy Sharp",
                tagKey: "5d776b10fb0d55001f55a8f6",
                role: "Hector's Nurse"
              },
              {
                id: 195516,
                filter: "actor=195516",
                tag: "Ernest Tsosie III",
                tagKey: "5d776a5547dd6e001f6d1881",
                role: "Carl"
              },
              {
                id: 194630,
                filter: "actor=194630",
                tag: "Andrew Friedman",
                tagKey: "5d77682a61141d001fb13b06",
                role: "Mr. Neff",
                thumb:
                  "https://metadata-static.plex.tv/people/5d77682a61141d001fb13b06.jpg"
              },
              {
                id: 150794,
                filter: "actor=150794",
                tag: "Franc Ross",
                tagKey: "5d77683b8718ba001e316044",
                role: "Ira",
                thumb:
                  "https://metadata-static.plex.tv/people/5d77683b8718ba001e316044.jpg"
              },
              {
                id: 296244,
                filter: "actor=296244",
                tag: "Kenneth Ruthardt",
                tagKey: "5f4021f8cae2c60042efc97d",
                role: "Bailiff",
                thumb:
                  "https://metadata-static.plex.tv/2/people/22cf4c6220d28c2c03f88ffabe73c95c.jpg"
              },
              {
                id: 195518,
                filter: "actor=195518",
                tag: "Don Williams",
                tagKey: "5e7913a05bb7570041cc4856",
                role: "Marty",
                thumb:
                  "https://metadata-static.plex.tv/6/people/683cf8525af56111df2b47c57f6e0b53.jpg"
              },
              {
                id: 195519,
                filter: "actor=195519",
                tag: "Tommy Nelson",
                tagKey: "5d77683a8a7581001f12dfe7",
                role: "Peewee",
                thumb:
                  "https://metadata-static.plex.tv/people/5d77683a8a7581001f12dfe7.jpg"
              },
              {
                id: 195520,
                filter: "actor=195520",
                tag: "Cory Chapman",
                tagKey: "5d776b7196b655001fe111d8",
                role: "Skippy",
                thumb:
                  "https://metadata-static.plex.tv/people/5d776b7196b655001fe111d8.jpg"
              },
              {
                id: 195521,
                filter: "actor=195521",
                tag: "Poorna Jagannathan",
                tagKey: "5d7768316f4521001ea9b58d",
                role: "Dr. Maureen Bruckner",
                thumb:
                  "https://metadata-static.plex.tv/f/people/f7494f465ff53ad1445d9498070898f6.jpg"
              },
              {
                id: 152667,
                filter: "actor=152667",
                tag: "Suzanne Savoy",
                tagKey: "5d7768445af944001f1fd0c5",
                role: "Perry Trivedi",
                thumb:
                  "https://metadata-static.plex.tv/d/people/d9502295b2741d5c7015e259f1092bab.jpg"
              },
              {
                id: 177835,
                filter: "actor=177835",
                tag: "Ethan Phillips",
                tagKey: "5d77682a151a60001f24b490",
                role: "Judge Benedict Munninger",
                thumb:
                  "https://metadata-static.plex.tv/people/5d77682a151a60001f24b490.jpg"
              },
              {
                id: 152513,
                filter: "actor=152513",
                tag: "Ruben Muller",
                tagKey: "625d7af14a33139de32bec2d",
                role: "Mall Janitor"
              },
              {
                id: 195522,
                filter: "actor=195522",
                tag: "Adam Rosenberg",
                tagKey: "62fb7cd3cc979dad53ed8a20",
                role: "Ben",
                thumb:
                  "https://metadata-static.plex.tv/d/people/dfdb2cfe7cdd2be4fe512c098ff4b5c6.jpg"
              },
              {
                id: 152704,
                filter: "actor=152704",
                tag: "Philip J. Shortell",
                tagKey: "625d7af14a33139de32bec41",
                role: "Bartender"
              },
              {
                id: 117997,
                filter: "actor=117997",
                tag: "David Costabile",
                tagKey: "5d776832eb5d26001f1dffce",
                role: "Gale Boetticher",
                thumb:
                  "https://metadata-static.plex.tv/f/people/f3cccbc5f0753a07e1734d920e6095c2.jpg"
              },
              {
                id: 152590,
                filter: "actor=152590",
                tag: "Lucinda Marker",
                tagKey: "5e16569991c2030041233b8b",
                role: "Cordova",
                thumb:
                  "https://metadata-static.plex.tv/people/5e16569991c2030041233b8b.jpg"
              },
              {
                id: 174584,
                filter: "actor=174584",
                tag: "Nathaniel Augustson",
                tagKey: "5d776ba1594b2b001e6df3e1",
                role: "Mall Security Guard",
                thumb:
                  "https://metadata-static.plex.tv/people/5d776ba1594b2b001e6df3e1.jpg"
              },
              {
                id: 195523,
                filter: "actor=195523",
                tag: "Sam Quinn",
                tagKey: "5d7768861999bc0020dc7e8d",
                role: "Burt",
                thumb:
                  "https://metadata-static.plex.tv/people/5d7768861999bc0020dc7e8d.jpg"
              },
              {
                id: 123858,
                filter: "actor=123858",
                tag: "Spenser Granese",
                tagKey: "5d77691c9ab54400214efd43",
                role: "Arlo",
                thumb:
                  "https://metadata-static.plex.tv/c/people/caf02ae3c68352b66d1925f0662194f3.jpg"
              },
              {
                id: 328241,
                filter: "actor=328241",
                tag: "Allison Gabriel",
                tagKey: "5d776a8af617c9002016e427",
                role: "Bar Association Clerk",
                thumb:
                  "https://metadata-static.plex.tv/people/5d776a8af617c9002016e427.jpg"
              },
              {
                id: 152621,
                filter: "actor=152621",
                tag: "Ashanti Cook",
                tagKey: "5e85ed8bc8154d003966712b",
                role: "Pat Malakovsky"
              },
              {
                id: 152992,
                filter: "actor=152992",
                tag: "Robert Paul Taylor",
                tagKey: "5d776c7696b655001fe3170a",
                role: "Wounded Experto",
                thumb:
                  "https://metadata-static.plex.tv/4/people/4be77a97db4ca881c6837361e0251796.jpg"
              },
              {
                id: 154556,
                filter: "actor=154556",
                tag: "Sophia Santi",
                tagKey: "5d77689a96b655001fdbcb4f",
                role: "Mrs. Ruiz",
                thumb:
                  "https://metadata-static.plex.tv/c/people/c2e91438787e1e3303e8bb3b94546d77.jpg"
              },
              {
                id: 154572,
                filter: "actor=154572",
                tag: "Sabrina Baca",
                tagKey: "6265672a8f2c3b0efd3158c9",
                role: "Diner Waitress"
              },
              {
                id: 152666,
                filter: "actor=152666",
                tag: "Esodie Geiger",
                tagKey: "5d776832151a60001f24d334",
                role: "Lynne Pierson",
                thumb:
                  "https://metadata-static.plex.tv/people/5d776832151a60001f24d334.jpg"
              },
              {
                id: 152551,
                filter: "actor=152551",
                tag: "Jordyn Aurora Aquino",
                tagKey: "5d776c45fb0d55001f582bd2",
                role: "Hannah",
                thumb:
                  "https://metadata-static.plex.tv/people/5d776c45fb0d55001f582bd2.jpg"
              },
              {
                id: 279631,
                filter: "actor=279631",
                tag: "Felix Quiñones",
                tagKey: "5e166bd2d92d86003d37e00d",
                role: "Cartel Gunman"
              },
              {
                id: 155779,
                filter: "actor=155779",
                tag: "Joni Bovill",
                tagKey: "5d77689e0ea56a001e2a7e2f",
                role: "Mrs. Ryman",
                thumb:
                  "https://metadata-static.plex.tv/e/people/e54de8bf192519eefef4c7ab3999790f.jpg"
              },
              {
                id: 204501,
                filter: "actor=204501",
                tag: "Colin A. Borden",
                tagKey: "5f3ffa052e2b260040ab0f55",
                role: "Gary Strote",
                thumb:
                  "https://metadata-static.plex.tv/5/people/54c5f5eb1d06d02dd3bf9b1ecff2e914.jpg"
              },
              {
                id: 152640,
                filter: "actor=152640",
                tag: "Katie Beth Hall",
                tagKey: "5d776d797a53e9001e75b05f",
                role: "Young Kim",
                thumb:
                  "https://metadata-static.plex.tv/0/people/0206e88531521c90f714bd5fc992684f.jpg"
              },
              {
                id: 152639,
                filter: "actor=152639",
                tag: "Beth Hoyt",
                tagKey: "5d776e4d7a53e9001e772bb5",
                role: "Mrs. Wexler",
                thumb:
                  "https://metadata-static.plex.tv/2/people/29701330eb1087a97b471cf55ba35e02.jpg"
              },
              {
                id: 157617,
                filter: "actor=157617",
                tag: "Micah Cole Reeves",
                tagKey: "628e3be9201bcd1188f33037",
                role: "Laundry Worker"
              },
              {
                id: 115374,
                filter: "actor=115374",
                tag: "Dylan Kenin",
                tagKey: "5d776843961905001eb96bae",
                role: "Greg",
                thumb:
                  "https://metadata-static.plex.tv/f/people/fd18e9d366c58d4b12fbd7ae1a8fd6bd.jpg"
              },
              {
                id: 228197,
                filter: "actor=228197",
                tag: "Case Matthews",
                tagKey: "5e1659b52d4d84003e4b42d3",
                role: "Keith"
              },
              {
                id: 157611,
                filter: "actor=157611",
                tag: "Geoffrey Pomeroy",
                tagKey: "5d7768326f4521001ea9b9fe",
                role: "Phil Jergens",
                thumb:
                  "https://metadata-static.plex.tv/people/5d7768326f4521001ea9b9fe.jpg"
              },
              {
                id: 157609,
                filter: "actor=157609",
                tag: "John Ennis",
                tagKey: "5d776831961905001eb931c7",
                role: "Lenny",
                thumb:
                  "https://metadata-static.plex.tv/people/5d776831961905001eb931c7.jpg"
              },
              {
                id: 121221,
                filter: "actor=121221",
                tag: "John Posey",
                tagKey: "5d776830103a2d001f5667a5",
                role: "Rand Casimiro",
                thumb:
                  "https://metadata-static.plex.tv/people/5d776830103a2d001f5667a5.jpg"
              },
              {
                id: 155786,
                filter: "actor=155786",
                tag: "John Robert Wylie",
                tagKey: "62728ef6bbcc3178ecdf5678",
                role: "Abe"
              },
              {
                id: 175935,
                filter: "actor=175935",
                tag: "Kevin Sussman",
                tagKey: "5d7768273c3c2a001fbcb27d",
                role: "Cancer Scam Victim",
                thumb:
                  "https://metadata-static.plex.tv/c/people/c0cdfac080aaef87d3755f9b44bfa4ff.jpg"
              },
              {
                id: 134671,
                filter: "actor=134671",
                tag: "Aaron Paul",
                tagKey: "5d7768277228e5001f1dd058",
                role: "Jesse Pinkman",
                thumb:
                  "https://metadata-static.plex.tv/e/people/e2a915b537ef720252b6d408bc1f91b3.jpg"
              },
              {
                id: 121393,
                filter: "actor=121393",
                tag: "Bryan Cranston",
                tagKey: "5d776828961905001eb916ef",
                role: "Walter White",
                thumb:
                  "https://metadata-static.plex.tv/b/people/b756f53c71b2188a6bd08dff82408090.jpg"
              },
              {
                id: 114272,
                filter: "actor=114272",
                tag: "Julia Lashae",
                tagKey: "5d7768317e9a3c0020c6bfc9",
                role: "June",
                thumb:
                  "https://metadata-static.plex.tv/people/5d7768317e9a3c0020c6bfc9.jpg"
              },
              {
                id: 212503,
                filter: "actor=212503",
                tag: "Brittanie Sheree",
                tagKey: "5f40506302101b0040fae513",
                role: "Claudia"
              },
              {
                id: 178282,
                filter: "actor=178282",
                tag: "Colleen Elizabeth Miller",
                tagKey: "5d7768d2594b2b001e695e57",
                role: "Karly",
                thumb:
                  "https://metadata-static.plex.tv/c/people/cfc8b99a9240a429e978e2dc1ce6ba72.jpg"
              },
              {
                id: 212504,
                filter: "actor=212504",
                tag: "Hillary Zinks",
                tagKey: "5f400d56c63b480040dcbb64",
                role: "Tammy"
              },
              {
                id: 150789,
                filter: "actor=150789",
                tag: "Stoney Westmoreland",
                tagKey: "5d7768285af944001f1f7259",
                role: "Officer Saxton",
                thumb:
                  "https://metadata-static.plex.tv/b/people/bd4814c83d942909d65640d6aa74f9cd.jpg"
              },
              {
                id: 107892,
                filter: "actor=107892",
                tag: "Alex Désert",
                tagKey: "5d77682661141d001fb135a0",
                role: "Officer Baker",
                thumb:
                  "https://metadata-static.plex.tv/b/people/b0a8e0e850318e55bd2c96e0961b219b.jpg"
              },
              {
                id: 152893,
                filter: "actor=152893",
                tag: "Chris Mulkey",
                tagKey: "5d776825999c64001ec2bf88",
                role: "Billy Gatwood",
                thumb:
                  "https://metadata-static.plex.tv/d/people/db86244191db4e851cfa137d77506a95.jpg"
              },
              {
                id: 195526,
                filter: "actor=195526",
                tag: "Teddy Eggleston",
                tagKey: "5f4055ce5a76a80042dc44d7",
                role: "Mrs. Siemasko",
                thumb:
                  "https://metadata-static.plex.tv/6/people/60357e48e16199e4c0e4257c31e9ea3c.jpg"
              },
              {
                id: 152842,
                filter: "actor=152842",
                tag: "Stafford Douglas",
                tagKey: "5d7768861999bc0020dc7e91",
                role: "Pierce",
                thumb:
                  "https://metadata-static.plex.tv/people/5d7768861999bc0020dc7e91.jpg"
              },
              {
                id: 152825,
                filter: "actor=152825",
                tag: "Dylan Riley Snyder",
                tagKey: "5d77687151dd69001fe0c525",
                role: "Young Skeev",
                thumb:
                  "https://metadata-static.plex.tv/people/5d77687151dd69001fe0c525.jpg"
              },
              {
                id: 152610,
                filter: "actor=152610",
                tag: "Tasos Hernandez",
                tagKey: "5d9f3cfd68e4c8001fb68791",
                role: "Rudolpho",
                thumb:
                  "https://metadata-static.plex.tv/people/5d9f3cfd68e4c8001fb68791.jpg"
              },
              {
                id: 152722,
                filter: "actor=152722",
                tag: "Johnathan Nieves",
                tagKey: "5d77706d23d5a3001f5397f8",
                role: "David",
                thumb:
                  "https://metadata-static.plex.tv/4/people/4e6fccb2fc5739ce98279159722754d1.jpg"
              }
            ],
            Similar: [
              { id: 26, filter: "similar=26", tag: "Breaking Bad" },
              { id: 462, filter: "similar=462", tag: "Fargo" },
              { id: 310, filter: "similar=310", tag: "House of Cards" },
              { id: 37656, filter: "similar=37656", tag: "Narcos" },
              { id: 321, filter: "similar=321", tag: "True Detective" },
              { id: 467, filter: "similar=467", tag: "Mr. Robot" },
              { id: 308, filter: "similar=308", tag: "Dexter" },
              { id: 35, filter: "similar=35", tag: "Sherlock" },
              { id: 318, filter: "similar=318", tag: "The Sopranos" },
              { id: 32, filter: "similar=32", tag: "Marvel's Daredevil" },
              { id: 36, filter: "similar=36", tag: "Silicon Valley" },
              { id: 23, filter: "similar=23", tag: "Black Mirror" },
              { id: 465, filter: "similar=465", tag: "Homeland" },
              { id: 40, filter: "similar=40", tag: "Westworld" },
              { id: 312, filter: "similar=312", tag: "Lost" },
              { id: 320, filter: "similar=320", tag: "The Wire" },
              { id: 1059, filter: "similar=1059", tag: "Ozark" },
              { id: 22, filter: "similar=22", tag: "Arrested Development" },
              { id: 39, filter: "similar=39", tag: "The Office" },
              {
                id: 561,
                filter: "similar=561",
                tag: "Orange Is the New Black"
              },
              { id: 468, filter: "similar=468", tag: "Prison Break" }
            ],
            Location: [{ path: "/TV Shows/Better Call Saul" }]
          }
        ]
      }
    }

    validateResponseSpec("/library/metadata/{ratingKey}", "get", 200, response)
  })

  it("should validate the 200 response when the response is from Movie", () => {
    const response = {
      MediaContainer: {
        size: 1,
        allowSync: true,
        librarySectionID: 3,
        librarySectionTitle: "Movies",
        librarySectionUUID: "09ea0090-e802-428d-ae83-f90bb49f4ac8",
        Metadata: [
          {
            ratingKey: "134703",
            key: "/library/metadata/134703",
            guid: "plex://movie/5d776c4efb0d55001f583c38",
            slug: "wicked-2024",
            studio: "Universal Pictures",
            type: "movie",
            title: "Wicked",
            librarySectionTitle: "Movies",
            librarySectionID: 3,
            librarySectionKey: "/library/sections/3",
            originalTitle: "Wicked: Part I",
            contentRating: "PG",
            summary:
              "Elphaba, a misunderstood young woman because of her green skin, and Galinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads.",
            audienceRating: 6.9,
            year: 2024,
            tagline: "Everyone deserves the chance to fly.",
            thumb: "/library/metadata/134703/thumb/1738403771",
            art: "/library/metadata/134703/art/1738403771",
            duration: 9610350,
            originallyAvailableAt: "2024-11-20",
            addedAt: 1735865761,
            updatedAt: 1738403771,
            audienceRatingImage: "themoviedb://image.rating",
            chapterSource: "media",
            primaryExtraKey: "/library/metadata/134704",
            Media: [
              {
                id: 387322,
                duration: 9610350,
                bitrate: 25512,
                width: 3840,
                height: 1602,
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
                    accessible: true,
                    exists: true,
                    id: 418385,
                    key: "/library/parts/418385/1735864239/file.mkv",
                    duration: 9610350,
                    file: "/mnt/Movies_1/W/Wicked (2024).mkv",
                    size: 30649952104,
                    container: "mkv",
                    videoProfile: "main 10",
                    Stream: [
                      {
                        id: 1002625,
                        streamType: 1,
                        default: true,
                        codec: "hevc",
                        index: 0,
                        bitrate: 24743,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        DOVIBLCompatID: 1,
                        DOVIBLPresent: true,
                        DOVIELPresent: false,
                        DOVILevel: 6,
                        DOVIPresent: true,
                        DOVIProfile: 8,
                        DOVIRPUPresent: true,
                        DOVIVersion: "1.0",
                        bitDepth: 10,
                        chromaLocation: "topleft",
                        chromaSubsampling: "4:2:0",
                        codedHeight: 1608,
                        codedWidth: 3840,
                        colorPrimaries: "bt2020",
                        colorRange: "tv",
                        colorSpace: "bt2020nc",
                        colorTrc: "smpte2084",
                        frameRate: 23.976,
                        height: 1602,
                        level: 150,
                        original: true,
                        profile: "main 10",
                        refFrames: 1,
                        width: 3840,
                        displayTitle: "4K DoVi/HDR10 (HEVC Main 10)",
                        extendedDisplayTitle: "4K DoVi/HDR10 (HEVC Main 10)"
                      },
                      {
                        id: 1002626,
                        streamType: 2,
                        selected: true,
                        default: true,
                        codec: "eac3",
                        index: 1,
                        channels: 6,
                        bitrate: 768,
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
                        id: 1002627,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 2,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        original: true,
                        displayTitle: "English (SRT)",
                        extendedDisplayTitle: "English (SRT)"
                      },
                      {
                        id: 1002628,
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
                        displayTitle: "English SDH (SRT)",
                        extendedDisplayTitle: "SDH (English SRT)"
                      },
                      {
                        id: 1002629,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 4,
                        bitrate: 0,
                        language: "Spanish",
                        languageTag: "es",
                        languageCode: "spa",
                        dub: true,
                        title: "Latin American",
                        displayTitle: "Spanish (SRT)",
                        extendedDisplayTitle: "Latin American (Spanish SRT)"
                      },
                      {
                        id: 1002630,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 5,
                        bitrate: 0,
                        language: "French",
                        languageTag: "fr",
                        languageCode: "fra",
                        dub: true,
                        title: "Canadian",
                        displayTitle: "French (SRT)",
                        extendedDisplayTitle: "Canadian (French SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Wicked",
                type: "coverPoster",
                url: "/library/metadata/134703/thumb/1738403771"
              },
              {
                alt: "Wicked",
                type: "background",
                url: "/library/metadata/134703/art/1738403771"
              },
              {
                alt: "Wicked",
                type: "clearLogo",
                url: "/library/metadata/134703/clearLogo/1738403771"
              }
            ],
            UltraBlurColors: {
              topLeft: "4b1d1b",
              topRight: "7a372e",
              bottomRight: "84383c",
              bottomLeft: "3d6a41"
            },
            Genre: [
              {
                id: 2726,
                filter: "genre=2726",
                tag: "Romance"
              },
              {
                id: 7489,
                filter: "genre=7489",
                tag: "Musical"
              },
              {
                id: 722,
                filter: "genre=722",
                tag: "Fantasy"
              },
              {
                id: 122,
                filter: "genre=122",
                tag: "Drama"
              },
              {
                id: 970,
                filter: "genre=970",
                tag: "Family"
              }
            ],
            Country: [
              {
                id: 90178,
                filter: "country=90178",
                tag: "United States of America"
              }
            ],
            Guid: [
              {
                id: "imdb://tt1262426"
              },
              {
                id: "tmdb://402431"
              },
              {
                id: "tvdb://136493"
              }
            ],
            Rating: [
              {
                image: "imdb://image.rating",
                value: 7.7,
                type: "audience"
              },
              {
                image: "rottentomatoes://image.rating.ripe",
                value: 8.8,
                type: "critic"
              },
              {
                image: "rottentomatoes://image.rating.upright",
                value: 9.5,
                type: "audience"
              },
              {
                image: "themoviedb://image.rating",
                value: 6.9,
                type: "audience"
              }
            ],
            Director: [
              {
                id: 235876,
                filter: "director=235876",
                tag: "Jon M. Chu",
                tagKey: "5d776831151a60001f24d031",
                thumb:
                  "https://metadata-static.plex.tv/8/people/8d65fa96804802e08f2de09fe014408e.jpg"
              }
            ],
            Writer: [
              {
                id: 319754,
                filter: "writer=319754",
                tag: "Gregory Maguire",
                tagKey: "5dd86c0d72ee10001d3b0645",
                thumb:
                  "https://metadata-static.plex.tv/1/people/1c99e44b99424819922df0704fbb1f07.jpg"
              },
              {
                id: 319755,
                filter: "writer=319755",
                tag: "Winnie Holzman",
                tagKey: "5d776c4efb0d55001f583d12",
                thumb:
                  "https://metadata-static.plex.tv/5/people/5b2d862d998c96bfb4b0e87714b66a51.jpg"
              },
              {
                id: 239050,
                filter: "writer=239050",
                tag: "Dana Fox",
                tagKey: "5d776832151a60001f24d33e",
                thumb:
                  "https://metadata-static.plex.tv/e/people/e35433031967ab3d7f4e0c062b6c0d5e.jpg"
              },
              {
                id: 319756,
                filter: "writer=319756",
                tag: "Stephen Schwartz",
                tagKey: "5d776c4efb0d55001f583d13",
                thumb:
                  "https://metadata-static.plex.tv/d/people/d93c02b0545bc8ed75eebfa4aa38417a.jpg"
              }
            ],
            Role: [
              {
                id: 252566,
                filter: "actor=252566",
                tag: "Cynthia Erivo",
                tagKey: "5d776c4b7a53e9001e73f56d",
                role: "Elphaba",
                thumb:
                  "https://metadata-static.plex.tv/1/people/1e022bf2260855d7ab6e60c9f4b1f477.jpg"
              },
              {
                id: 197911,
                filter: "actor=197911",
                tag: "Ariana Grande",
                tagKey: "5d7768dbebdf2200209c9bda",
                role: "Galinda / Glinda",
                thumb:
                  "https://metadata-static.plex.tv/2/people/2cb1c43475cc97c979ce4efae1a7bddf.jpg"
              },
              {
                id: 201537,
                filter: "actor=201537",
                tag: "Jeff Goldblum",
                tagKey: "5d7768258718ba001e31191c",
                role: "The Wonderful Wizard of Oz",
                thumb:
                  "https://metadata-static.plex.tv/d/people/d28cfbe36ce8c64ce3fd418fc63093ec.jpg"
              },
              {
                id: 224759,
                filter: "actor=224759",
                tag: "Michelle Yeoh",
                tagKey: "5d77682654f42c001f8c2697",
                role: "Madame Morrible",
                thumb:
                  "https://metadata-static.plex.tv/4/people/487865d5bccc086137f0dc5d4fb5e61a.jpg"
              },
              {
                id: 319757,
                filter: "actor=319757",
                tag: "Jonathan Bailey",
                tagKey: "5d77683d54f42c001f8c5cf3",
                role: "Fiyero",
                thumb:
                  "https://metadata-static.plex.tv/e/people/e27426039c4f4e0d2afe334dbff6005e.jpg"
              },
              {
                id: 319758,
                filter: "actor=319758",
                tag: "Ethan Slater",
                tagKey: "5dd8797b2247ae001d766b13",
                role: "Boq",
                thumb:
                  "https://image.tmdb.org/t/p/original/xIgqyrM78FPt7Pb2Vv3IvJcnOWS.jpg"
              },
              {
                id: 319759,
                filter: "actor=319759",
                tag: "Marissa Bode",
                tagKey: "5f402f4fbf3e560040ba1ac7",
                role: "Nessarose",
                thumb:
                  "https://metadata-static.plex.tv/9/people/9a08f23aa2a865eed886c54dc507b32f.jpg"
              },
              {
                id: 198546,
                filter: "actor=198546",
                tag: "Peter Dinklage",
                tagKey: "5d77682685719b001f3a0b35",
                role: "Dr. Dillamond (voice)",
                thumb:
                  "https://metadata-static.plex.tv/a/people/a2d9403ac67fd65439ddea39633698f3.jpg"
              },
              {
                id: 217347,
                filter: "actor=217347",
                tag: "Andy Nyman",
                tagKey: "5d77682f7228e5001f1ddd17",
                role: "Governor Thropp",
                thumb:
                  "https://metadata-static.plex.tv/d/people/db70d4b96379cb7ef13d01d97e98995d.jpg"
              },
              {
                id: 319760,
                filter: "actor=319760",
                tag: "Courtney-Mae Briggs",
                tagKey: "65168656981994682f2b3771",
                role: "Mrs. Thropp",
                thumb:
                  "https://metadata-static.plex.tv/d/people/d4383490c74ef139d690dcfa5554826c.jpg"
              },
              {
                id: 272085,
                filter: "actor=272085",
                tag: "Bowen Yang",
                tagKey: "5d776c0e7a53e9001e738307",
                role: "Pfannee",
                thumb:
                  "https://metadata-static.plex.tv/3/people/3b8d77fb035484e91f24a9d79f293af0.jpg"
              },
              {
                id: 319761,
                filter: "actor=319761",
                tag: "Bronwyn James",
                tagKey: "5d776c4596b655001fe2b8e8",
                role: "Shenshen",
                thumb:
                  "https://metadata-static.plex.tv/5/people/50f58fc1d575d0ce82061e092f9a9940.jpg"
              },
              {
                id: 319762,
                filter: "actor=319762",
                tag: "Aaron Teoh",
                tagKey: "5f3fbf60cae2c60042e70dcb",
                role: "Avaric",
                thumb:
                  "https://metadata-static.plex.tv/f/people/f2117ee9023df560ee9618106aa814ad.jpg"
              },
              {
                id: 319763,
                filter: "actor=319763",
                tag: "Shaun Prendergast",
                tagKey: "5d77682c5af944001f1f7ee1",
                role: "Shiz President",
                thumb:
                  "https://metadata-static.plex.tv/7/people/768d00ceb38f4b5253c0db0d624235a3.jpg"
              },
              {
                id: 319764,
                filter: "actor=319764",
                tag: "Keala Settle",
                tagKey: "5d776aec594b2b001e6c9aef",
                role: "Miss Coddle",
                thumb:
                  "https://metadata-static.plex.tv/8/people/85359ac058141425c63eb3b28b954e37.jpg"
              },
              {
                id: 319765,
                filter: "actor=319765",
                tag: "Sharon D. Clarke",
                tagKey: "5d7768927e5fa10020bf2080",
                role: "Dulcibear (voice)",
                thumb:
                  "https://metadata-static.plex.tv/1/people/131c8e2e298f51473b502c6920e7e396.jpg"
              },
              {
                id: 319766,
                filter: "actor=319766",
                tag: "Jenna Boyd",
                tagKey: "5d7768ca0ea56a001e2aa44c",
                role: "Wolf Doctor (voice)",
                thumb:
                  "https://metadata-static.plex.tv/1/people/1cd9669e8a3f60e5564988071d78e595.jpg"
              },
              {
                id: 319767,
                filter: "actor=319767",
                tag: "Colin Michael Carmichael",
                tagKey: "5d77682e5af944001f1f872e",
                role: "Professor Nikidik",
                thumb:
                  "https://metadata-static.plex.tv/4/people/4946072035c74d2dfb78ee8bedcf24aa.jpg"
              },
              {
                id: 320351,
                filter: "actor=320351",
                tag: "Lexi Lancaster",
                tagKey: "63e38fab450797411319d207",
                role: "Munchkinland Kid",
                thumb:
                  "https://metadata-static.plex.tv/6/people/6d6375b81f9aff3fdb5e6d09010a7aef.jpg"
              },
              {
                id: 320352,
                filter: "actor=320352",
                tag: "Arlo Turner",
                tagKey: "67403d0da43c779b2c31efd6",
                role: "Munchkinland Kid",
                thumb:
                  "https://metadata-static.plex.tv/8/people/8576d27f2be1cef4c1ad47dbeebb9911.jpg"
              },
              {
                id: 320970,
                filter: "actor=320970",
                tag: "Joey Unitt",
                tagKey: "67403d0d9866ffd2cf7f3ba2",
                role: "Munchkinland Kid"
              },
              {
                id: 320354,
                filter: "actor=320354",
                tag: "Bea Ward",
                tagKey: "6687bb920098a343ce0dc3d5",
                role: "Munchkinland Kid",
                thumb:
                  "https://metadata-static.plex.tv/5/people/547a8ce13d49c932d5c3f1393f5d79d4.jpg"
              },
              {
                id: 320355,
                filter: "actor=320355",
                tag: "Dereke Oladele",
                tagKey: "5fee83a35789fb002dae7591",
                role: "Munchkinland Kid",
                thumb:
                  "https://metadata-static.plex.tv/5/people/5a702ced4d46586659bedd04e9943f0f.jpg"
              },
              {
                id: 320356,
                filter: "actor=320356",
                tag: "Sienna-Rose Amer",
                tagKey: "67403d0d6c18ffa43bc76079",
                role: "Munchkinland Kid",
                thumb:
                  "https://metadata-static.plex.tv/9/people/92856f3d7837c12199abfa0ebbfcb31b.jpg"
              },
              {
                id: 320357,
                filter: "actor=320357",
                tag: "Tarik Frimpong",
                tagKey: "5f40634ccae2c60042f85a6d",
                role: "Munchkinland Crier",
                thumb:
                  "https://metadata-static.plex.tv/4/people/43c5d9124b5dd5b5a5138c00005335cb.jpg"
              },
              {
                id: 232576,
                filter: "actor=232576",
                tag: "James Dryden",
                tagKey: "5d776a8af617c9002016e417",
                role: "No One Mourns Munchkin",
                thumb:
                  "https://metadata-static.plex.tv/7/people/77638ec289f292004ab001aa3a0a4a6b.jpg"
              },
              {
                id: 320358,
                filter: "actor=320358",
                tag: "Malinda Parris",
                tagKey: "5ec416a4508ee60041648fc4",
                role: "No One Cries Munchkin / Chorus",
                thumb:
                  "https://metadata-static.plex.tv/d/people/dba3249cbe1883e5c2a8f8a0bd7c0546.jpg"
              },
              {
                id: 320971,
                filter: "actor=320971",
                tag: "Noah Prempeh",
                tagKey: "67403d0dee7ec73fe8cd3a12",
                role: "The Good Man Munchkin / Dancer"
              },
              {
                id: 320360,
                filter: "actor=320360",
                tag: "Vicki Noon",
                tagKey: "67403d0dac3f68d41ffc82cc",
                role: "Winkie Mother",
                thumb:
                  "https://metadata-static.plex.tv/b/people/b4fcc45aebdd83ae430900eaab9dd60f.jpg"
              },
              {
                id: 218076,
                filter: "actor=218076",
                tag: "Debbie Kurup",
                tagKey: "5d77682a3c3c2a001fbcbd86",
                role: "Winkie Mother",
                thumb:
                  "https://metadata-static.plex.tv/people/5d77682a3c3c2a001fbcbd86.jpg"
              },
              {
                id: 320361,
                filter: "actor=320361",
                tag: "Jasmine McIvor",
                tagKey: "62d5158bc6dc1ca9b1e27f56",
                role: "Winkie Mother",
                thumb:
                  "https://metadata-static.plex.tv/c/people/c10d8d307c2d00302b793d13b88a3b56.jpg"
              },
              {
                id: 320362,
                filter: "actor=320362",
                tag: "Hattie Ryan",
                tagKey: "636e039a62c6f24a3cd2807f",
                role: "Curious Munchkin",
                thumb:
                  "https://metadata-static.plex.tv/0/people/0df6b799976e11d257066db20e29f95b.jpg"
              },
              {
                id: 320363,
                filter: "actor=320363",
                tag: "Kirsty Anne Shaw",
                tagKey: "5f401120cc4920003b2e5d48",
                role: "Skeptical Munchkin",
                thumb:
                  "https://metadata-static.plex.tv/a/people/ac3b263c9cffc645769c3d92589a7727.jpg"
              },
              {
                id: 319770,
                filter: "actor=319770",
                tag: "Karis Musongole",
                tagKey: "64294855fb55d3620fbc1e31",
                role: "Young Elphaba",
                thumb:
                  "https://metadata-static.plex.tv/5/people/5c2d7dbd70ffb33cb0dea05931821cd8.jpg"
              },
              {
                id: 295488,
                filter: "actor=295488",
                tag: "Cesily Collette Taylor",
                tagKey: "66003793485a49a4e8cc32b6",
                role: "Young Nessarose",
                thumb:
                  "https://metadata-static.plex.tv/3/people/34026bff0d02a8fd42ab6d5453306aaf.jpg"
              },
              {
                id: 320364,
                filter: "actor=320364",
                tag: "Jarlan Bogolubov",
                tagKey: "601bb0b31fb108002b923fb6",
                role: "Munchkin Bully",
                thumb:
                  "https://metadata-static.plex.tv/8/people/86ebdb2685431a937bb0ca9b5a3ec3aa.jpg"
              },
              {
                id: 320365,
                filter: "actor=320365",
                tag: "Isaac Bishop",
                tagKey: "66d8522764f1ed7da86794af",
                role: "Munchkin Bully",
                thumb:
                  "https://metadata-static.plex.tv/7/people/7ebe23260c4bc99a9391ab5c1b9c533d.jpg"
              },
              {
                id: 319768,
                filter: "actor=319768",
                tag: "Adam James",
                tagKey: "5d776830961905001eb92ff9",
                role: "Galinda's Popsicle",
                thumb:
                  "https://metadata-static.plex.tv/people/5d776830961905001eb92ff9.jpg"
              },
              {
                id: 319769,
                filter: "actor=319769",
                tag: "Alice Fearn",
                tagKey: "5d7768ca0ea56a001e2aa44d",
                role: "Galinda's Momsie",
                thumb:
                  "https://metadata-static.plex.tv/2/people/26fbbfd6641b5cc8e72f0ad0b82d0fde.jpg"
              },
              {
                id: 320366,
                filter: "actor=320366",
                tag: "Clive Kneller",
                tagKey: "5d7768a31999bc0020dcc0a8",
                role: "Emerald City Train Conductor"
              },
              {
                id: 320367,
                filter: "actor=320367",
                tag: "Michael McCorry Rose",
                tagKey: "5f406410fea1a1003fa6f37d",
                role: "Wiz-O-Mania Narrator",
                thumb:
                  "https://metadata-static.plex.tv/3/people/3ff6728e58097848c17ea2e4dce32209.jpg"
              },
              {
                id: 229890,
                filter: "actor=229890",
                tag: "Idina Menzel",
                tagKey: "5d77682aeb5d26001f1de4b0",
                role: "Wiz-O-Mania Super Star",
                thumb:
                  "https://metadata-static.plex.tv/6/people/6e24934f37025d7f72426d5e804c95a3.jpg"
              },
              {
                id: 189078,
                filter: "actor=189078",
                tag: "Kristin Chenoweth",
                tagKey: "5d776829151a60001f24b174",
                role: "Wiz-O-Mania Super Star",
                thumb:
                  "https://metadata-static.plex.tv/6/people/6887a44b6ae4152b61e672685dd5bc80.jpg"
              },
              {
                id: 320368,
                filter: "actor=320368",
                tag: "Robin Berry",
                tagKey: "62fb7ce8aa71b877e94f7b1f",
                role: "Palace Guard",
                thumb:
                  "https://metadata-static.plex.tv/9/people/92accfe5a1acdbf06fb4492941a36464.jpg"
              },
              {
                id: 320369,
                filter: "actor=320369",
                tag: "Bobby Windebank",
                tagKey: "5ec4119590c7f6004080c823",
                role: "Shiz Security",
                thumb:
                  "https://metadata-static.plex.tv/0/people/0cbd84a8f3cf1a94bf24670b31aa006c.jpg"
              },
              {
                id: 320370,
                filter: "actor=320370",
                tag: "Cherida Strallen",
                tagKey: "5ec422173b12ac0041fb5756",
                role: "Shiz Librarian",
                thumb:
                  "https://metadata-static.plex.tv/a/people/a7c2de072bef9ac88db6be89277a9c84.jpg"
              },
              {
                id: 320972,
                filter: "actor=320972",
                tag: "Tom Kitely",
                tagKey: "67403d0dc8380061d61694d4",
                role: "Snow Leopard (voice)"
              },
              {
                id: 319773,
                filter: "actor=319773",
                tag: "Elizabeth Dulau",
                tagKey: "5f3fcd8dcae2c60042e83087",
                role: "Piebald Deer (voice)",
                thumb:
                  "https://metadata-static.plex.tv/f/people/f184b52171b96b2c731363faa7a5a34c.jpg"
              },
              {
                id: 320973,
                filter: "actor=320973",
                tag: "Kim Durham",
                tagKey: "677ff35da504efcf51cc1214",
                role: "Tamarin / Owl (voice)"
              },
              {
                id: 319772,
                filter: "actor=319772",
                tag: "Jennifer Woodward",
                tagKey: "5f3fb8d4cae2c60042e67d6a",
                role: "Birds (voice)",
                thumb:
                  "https://metadata-static.plex.tv/c/people/c3117ea09d7fa51f2b14abf926fb81b7.jpg"
              },
              {
                id: 197319,
                filter: "actor=197319",
                tag: "Stephen Stanton",
                tagKey: "5d77683685719b001f3a3faa",
                role: "Fiyero’s Horse (voice)",
                thumb:
                  "https://metadata-static.plex.tv/people/5d77683685719b001f3a3faa.jpg"
              },
              {
                id: 320373,
                filter: "actor=320373",
                tag: "Aaliyah Baker",
                tagKey: "6776fb22c3334aafa3b3095b",
                role: "Dancer",
                thumb:
                  "https://metadata-static.plex.tv/0/people/069e8e5857d7ba9bccd71927d50c995f.jpg"
              },
              {
                id: 320374,
                filter: "actor=320374",
                tag: "Aaron Bryan",
                tagKey: "64b28ae873d776f1af4da288",
                role: "Dancer",
                thumb:
                  "https://metadata-static.plex.tv/8/people/8735a86f49834815d50e5080e3908c83.jpg"
              },
              {
                id: 320375,
                filter: "actor=320375",
                tag: "Aaron Witter",
                tagKey: "6776fb2390d902104d35a889",
                role: "Dancer",
                thumb:
                  "https://image.tmdb.org/t/p/original/8eW60KfJigHwGRNrwS0gajYC2yP.jpg"
              },
              {
                id: 320376,
                filter: "actor=320376",
                tag: "Abbie Brown",
                tagKey: "64a7fefc995cfec1a85f60fc",
                role: "Dancer",
                thumb:
                  "https://metadata-static.plex.tv/0/people/026ce32f9fe56c6cddfd8cdfa9a8a572.jpg"
              },
              {
                id: 276321,
                filter: "actor=276321",
                tag: "Adam Crossley",
                tagKey: "64c25cc68c66a1d88558c10d",
                role: "Dancer",
                thumb:
                  "https://image.tmdb.org/t/p/original/7kzg8Nt0oiaQuBhfAaOOa5BRhtC.jpg"
              },
              {
                id: 320377,
                filter: "actor=320377",
                tag: "Ainsley Ricketts",
                tagKey: "6776fb29cb07158b19375944",
                role: "Dancer",
                thumb:
                  "https://metadata-static.plex.tv/c/people/c87d7d3a857910be6d29204d8206abf6.jpg"
              },
              {
                id: 320378,
                filter: "actor=320378",
                tag: "Aleshia Williams",
                tagKey: "64cf8bf14a92f555e42b4d10",
                role: "Dancer",
                thumb:
                  "https://metadata-static.plex.tv/e/people/e37d53fcd4956d0e4779bdd8f5fe91b1.jpg"
              },
              {
                id: 320379,
                filter: "actor=320379",
                tag: "Alex Hatt",
                tagKey: "6776fb24c80653d869322eee",
                role: "Dancer"
              },
              {
                id: 320380,
                filter: "actor=320380",
                tag: "Alexander Thompson",
                tagKey: "6776fb25cb07158b193758c7",
                role: "Dancer"
              },
              {
                id: 320381,
                filter: "actor=320381",
                tag: "Ama Rouge",
                tagKey: "6776fb23da5457e2b2449b08",
                role: "Dancer"
              },
              {
                id: 227962,
                filter: "actor=227962",
                tag: "Amber Doyle",
                tagKey: "5d776b32ad5437001f79712b",
                role: "Dancer",
                thumb:
                  "https://metadata-static.plex.tv/people/5d776b32ad5437001f79712b.jpg"
              },
              {
                id: 320382,
                filter: "actor=320382",
                tag: "Anders Deeno",
                tagKey: "5f4059a3bf3e560040c094a7",
                role: "Dancer"
              },
              {
                id: 320383,
                filter: "actor=320383",
                tag: "Andi Vega",
                tagKey: "6776fb2319955773d2d670fc",
                role: "Dancer"
              },
              {
                id: 245245,
                filter: "actor=245245",
                tag: "Andrew Kyrzyk",
                tagKey: "5fb93a203b5484002de12eae",
                role: "Dancer",
                thumb:
                  "https://metadata-static.plex.tv/7/people/7387c063ad57f845fe0cfac734251d95.jpg"
              },
              {
                id: 320384,
                filter: "actor=320384",
                tag: "Andrew Parfitt",
                tagKey: "6776fb25cbc03eacf38c3e19",
                role: "Dancer"
              },
              {
                id: 320385,
                filter: "actor=320385",
                tag: "Angela Andrew",
                tagKey: "6776fb24e9f315c4f60ff9d7",
                role: "Dancer"
              },
              {
                id: 320386,
                filter: "actor=320386",
                tag: "Angelica Gayle",
                tagKey: "6776fb2b06f68d90bfa6a081",
                role: "Dancer"
              },
              {
                id: 276333,
                filter: "actor=276333",
                tag: "Anna-Kay Gayle",
                tagKey: "64c25cc79fc12690cf3823ae",
                role: "Dancer",
                thumb:
                  "https://metadata-static.plex.tv/2/people/21e2887c151b2962c4cc6f3e2c5380b3.jpg"
              },
              {
                id: 320387,
                filter: "actor=320387",
                tag: "Anthony James Bartlett",
                tagKey: "6776fb25cbc03eacf38c3e17",
                role: "Dancer"
              },
              {
                id: 320388,
                filter: "actor=320388",
                tag: "Antoinette Harrison",
                tagKey: "6776fb25e9f315c4f60ff9db",
                role: "Dancer"
              },
              {
                id: 320389,
                filter: "actor=320389",
                tag: "Arben GiGa Kapidani",
                tagKey: "6776fb23cbc03eacf38c3e0f",
                role: "Dancer"
              },
              {
                id: 320390,
                filter: "actor=320390",
                tag: "Aristide Lyons",
                tagKey: "6776fb23cbc03eacf38c3e09",
                role: "Dancer"
              },
              {
                id: 316390,
                filter: "actor=316390",
                tag: "Armando Cruz",
                tagKey: "61fe87458220968eeff63883",
                role: "Dancer"
              },
              {
                id: 320391,
                filter: "actor=320391",
                tag: "Ashleigh Honeyghan",
                tagKey: "6776fb2590d902104d35a897",
                role: "Dancer"
              },
              {
                id: 301211,
                filter: "actor=301211",
                tag: "Ashley Young",
                tagKey: "64bce149532ee4458c623b7c",
                role: "Dancer",
                thumb:
                  "https://metadata-static.plex.tv/6/people/668c36be1d63992c3ee1db07aa09db16.jpg"
              },
              {
                id: 320392,
                filter: "actor=320392",
                tag: "Aysia Trinity Ianiero",
                tagKey: "6776fb25c3334aafa3b30969",
                role: "Dancer"
              },
              {
                id: 320393,
                filter: "actor=320393",
                tag: "Becky Wong",
                tagKey: "6776fb24535a2f99dc996f04",
                role: "Dancer"
              },
              {
                id: 320394,
                filter: "actor=320394",
                tag: "Benjamin Williams",
                tagKey: "5f3fbaef02101b0040eb8548",
                role: "Dancer"
              },
              {
                id: 320395,
                filter: "actor=320395",
                tag: "Beth Hinton",
                tagKey: "5f4066b45a76a80042dddb1a",
                role: "Dancer"
              },
              {
                id: 320396,
                filter: "actor=320396",
                tag: "Beth John",
                tagKey: "6776fb249897dac64e53a94d",
                role: "Dancer"
              },
              {
                id: 213825,
                filter: "actor=213825",
                tag: "Bianca Melchior",
                tagKey: "5d776d58ad5437001f7d37c3",
                role: "Dancer",
                thumb:
                  "https://metadata-static.plex.tv/b/people/b5c56955d9cac4a1af660343c79a0423.jpg"
              },
              {
                id: 320397,
                filter: "actor=320397",
                tag: "Billy Sawyer",
                tagKey: "6776fb2590d902104d35a893",
                role: "Dancer"
              },
              {
                id: 320398,
                filter: "actor=320398",
                tag: "Bismark Anobah",
                tagKey: "6776fb26201026a905e23fcd",
                role: "Dancer"
              },
              {
                id: 320399,
                filter: "actor=320399",
                tag: "Blue Makwana",
                tagKey: "63cfc8a2d819ccb33a115d44",
                role: "Dancer",
                thumb:
                  "https://metadata-static.plex.tv/4/people/429a2c27eb8d2284898409f39c0326b6.jpg"
              },
              {
                id: 320400,
                filter: "actor=320400",
                tag: "Bogdan Pascal",
                tagKey: "6776fb25cb07158b193758cd",
                role: "Dancer"
              },
              {
                id: 320401,
                filter: "actor=320401",
                tag: "Bradley Salter",
                tagKey: "6776fb26e9f315c4f60ff9df",
                role: "Dancer"
              },
              {
                id: 320402,
                filter: "actor=320402",
                tag: "Bradley Charles",
                tagKey: "5e1655281493cd003f0fda6c",
                role: "Dancer"
              },
              {
                id: 320403,
                filter: "actor=320403",
                tag: "Brittani Ferneyhough",
                tagKey: "6776fb26716ac3cedf86d5f4",
                role: "Dancer"
              },
              {
                id: 320404,
                filter: "actor=320404",
                tag: "Brooke Milliner",
                tagKey: "66be38358259fb72cdee3ac8",
                role: "Dancer"
              },
              {
                id: 320405,
                filter: "actor=320405",
                tag: "Busola Peters",
                tagKey: "674c51225ab8e6f201fffe60",
                role: "Dancer"
              },
              {
                id: 276318,
                filter: "actor=276318",
                tag: "Callum Clack",
                tagKey: "64c25cc41e4dcbe54753b4aa",
                role: "Dancer",
                thumb:
                  "https://metadata-static.plex.tv/3/people/3f6a9ba7b177a093e0e23de6d2fd7e0b.jpg"
              },
              {
                id: 320406,
                filter: "actor=320406",
                tag: "Camone Bleu Gordon",
                tagKey: "6776fb25cbc03eacf38c3e23",
                role: "Dancer"
              },
              {
                id: 320407,
                filter: "actor=320407",
                tag: "Carl Parris",
                tagKey: "6323b2efb58b22a83b824b05",
                role: "Dancer"
              },
              {
                id: 320408,
                filter: "actor=320408",
                tag: "Cece Nama",
                tagKey: "614353c75ab7b3e9cb8ac1da",
                role: "Dancer"
              },
              {
                id: 320409,
                filter: "actor=320409",
                tag: "Chanelle Anthony",
                tagKey: "6776fb27cb07158b1937592c",
                role: "Dancer"
              },
              {
                id: 276334,
                filter: "actor=276334",
                tag: "Charlie Goddard",
                tagKey: "64c25cc61f69f8991f197049",
                role: "Dancer",
                thumb:
                  "https://metadata-static.plex.tv/4/people/4d299e500f149718f0ac5357673a032d.jpg"
              },
              {
                id: 320410,
                filter: "actor=320410",
                tag: "Charlie Waddell",
                tagKey: "673f431edb44b375d684b037",
                role: "Dancer"
              },
              {
                id: 320411,
                filter: "actor=320411",
                tag: "Charlotte Dickinson",
                tagKey: "6776fb26201026a905e23fd1",
                role: "Dancer"
              },
              {
                id: 320412,
                filter: "actor=320412",
                tag: "Charlotte Wildrianne",
                tagKey: "6776fb26cbc03eacf38c3e39",
                role: "Dancer"
              },
              {
                id: 320413,
                filter: "actor=320413",
                tag: "Charlotte Wilmott",
                tagKey: "64b28ae8690e27946e5c339a",
                role: "Dancer"
              },
              {
                id: 320414,
                filter: "actor=320414",
                tag: "Che Barrett-Davis",
                tagKey: "6776fb269897dac64e53a953",
                role: "Dancer"
              },
              {
                id: 320415,
                filter: "actor=320415",
                tag: "Chima Akenzua",
                tagKey: "6776fb2586bccb8926aaa74c",
                role: "Dancer"
              },
              {
                id: 313448,
                filter: "actor=313448",
                tag: "Chloe Kibble",
                tagKey: "6336b6b44fd1e85ab869fd93",
                role: "Dancer",
                thumb:
                  "https://metadata-static.plex.tv/4/people/415a3980f464acba57cd6f69a5e72253.jpg"
              },
              {
                id: 320416,
                filter: "actor=320416",
                tag: "Chris Arias",
                tagKey: "5f4027055a76a80042d5d588",
                role: "Dancer"
              },
              {
                id: 320417,
                filter: "actor=320417",
                tag: "Christie Lee Manning",
                tagKey: "6776fb26cb07158b19375920",
                role: "Dancer"
              },
              {
                id: 320418,
                filter: "actor=320418",
                tag: "Christopher Donnelly",
                tagKey: "5f40498602101b0040f8e4dd",
                role: "Dancer"
              },
              {
                id: 320419,
                filter: "actor=320419",
                tag: "Christopher Matthews",
                tagKey: "5f406af703883a0040bcf0e1",
                role: "Dancer"
              },
              {
                id: 320420,
                filter: "actor=320420",
                tag: "Christopher Scott",
                tagKey: "5d776831151a60001f24d042",
                role: "Dancer",
                thumb:
                  "https://image.tmdb.org/t/p/original/lns36CGr9csnSvDdDdnji62BUZE.jpg"
              },
              {
                id: 320421,
                filter: "actor=320421",
                tag: "Clarissa Hagan",
                tagKey: "63209148c44cd8a371157abc",
                role: "Dancer"
              },
              {
                id: 320422,
                filter: "actor=320422",
                tag: "Cleve September",
                tagKey: "5fe4d65a39d122002d322df8",
                role: "Dancer"
              },
              {
                id: 320423,
                filter: "actor=320423",
                tag: "Colleen Joseph",
                tagKey: "6776fb26cbc03eacf38c3e3b",
                role: "Dancer"
              },
              {
                id: 320424,
                filter: "actor=320424",
                tag: "Collette Guitart",
                tagKey: "60d35bb8b00261002d74b4c3",
                role: "Dancer"
              },
              {
                id: 320425,
                filter: "actor=320425",
                tag: "Comfort Fedoke",
                tagKey: "5d7768ad1999bc0020dcd787",
                role: "Dancer",
                thumb:
                  "https://metadata-static.plex.tv/1/people/1e2658703e29f76ceb94ed38ec8a128c.jpg"
              },
              {
                id: 276376,
                filter: "actor=276376",
                tag: "Connor Tidman",
                tagKey: "64c25cc6988b0628630797a3",
                role: "Dancer",
                thumb:
                  "https://image.tmdb.org/t/p/original/eOyQ08v15q6J5n4V6gbRyQH181U.jpg"
              },
              {
                id: 320426,
                filter: "actor=320426",
                tag: "Corrinne Bougaard",
                tagKey: "6776fb27cb07158b19375932",
                role: "Dancer"
              },
              {
                id: 320427,
                filter: "actor=320427",
                tag: "Craig Stein",
                tagKey: "5d776bc196b655001fe1ad52",
                role: "Dancer",
                thumb:
                  "https://metadata-static.plex.tv/2/people/266bb81e45b6bc14e8bcbe85e55184c0.jpg"
              },
              {
                id: 320428,
                filter: "actor=320428",
                tag: "Cruze Philip",
                tagKey: "6776fb277a52c7d31a9eb724",
                role: "Dancer"
              },
              {
                id: 320429,
                filter: "actor=320429",
                tag: "Crystal Jones",
                tagKey: "5f406b3852f2000041597a42",
                role: "Dancer"
              },
              {
                id: 320430,
                filter: "actor=320430",
                tag: "Daisy Reynolds",
                tagKey: "6776fb279c59ba1325b5cd52",
                role: "Dancer"
              },
              {
                id: 320431,
                filter: "actor=320431",
                tag: "Dalvin Sollberger",
                tagKey: "6776fb27cb07158b19375930",
                role: "Dancer"
              },
              {
                id: 320432,
                filter: "actor=320432",
                tag: "Daniel Rae",
                tagKey: "6776fb27cb07158b19375922",
                role: "Dancer"
              },
              {
                id: 320433,
                filter: "actor=320433",
                tag: "Daniela Monteiro",
                tagKey: "67500f751bee5dd7552d06c4",
                role: "Dancer"
              },
              {
                id: 320434,
                filter: "actor=320434",
                tag: "Daniella Beltrami",
                tagKey: "5f40151ebe690b0043119ab3",
                role: "Dancer"
              },
              {
                id: 320435,
                filter: "actor=320435",
                tag: "Darron Gifty",
                tagKey: "6776fb27cb07158b19375928",
                role: "Dancer"
              },
              {
                id: 320436,
                filter: "actor=320436",
                tag: "David Cottle",
                tagKey: "64d8c64f44689507306f80ec",
                role: "Dancer"
              },
              {
                id: 308814,
                filter: "actor=308814",
                tag: "Dean Street",
                tagKey: "5f3fe4bf52f20000414b6cc8",
                role: "Dancer",
                thumb:
                  "https://metadata-static.plex.tv/e/people/edfbb938f8bf3f79e35a2c4fc10bf99a.jpg"
              },
              {
                id: 320437,
                filter: "actor=320437",
                tag: "Demitri Lampra",
                tagKey: "6776fb27e9f315c4f60ff9e5",
                role: "Dancer"
              },
              {
                id: 320438,
                filter: "actor=320438",
                tag: "Denzil Sampson",
                tagKey: "6776fb279897dac64e53a957",
                role: "Dancer"
              },
              {
                id: 320439,
                filter: "actor=320439",
                tag: "Dollie Henry",
                tagKey: "5f402bc5768fc70040561e28",
                role: "Dancer"
              },
              {
                id: 320440,
                filter: "actor=320440",
                tag: "Ed Munro",
                tagKey: "5d776974f617c9002015fe18",
                role: "Dancer",
                thumb:
                  "https://metadata-static.plex.tv/e/people/e35cb45274d7ff3ac403f73f9fcabe22.jpg"
              },
              {
                id: 307707,
                filter: "actor=307707",
                tag: "Eddie Saleem",
                tagKey: "641976b85dcb794090f47204",
                role: "Dancer"
              },
              {
                id: 320441,
                filter: "actor=320441",
                tag: "Ediz Ibrahim",
                tagKey: "5d776d31594b2b001e7037a7",
                role: "Dancer",
                thumb:
                  "https://metadata-static.plex.tv/e/people/eba8c57060aaf24fb7826628e0ff1623.jpg"
              },
              {
                id: 320442,
                filter: "actor=320442",
                tag: "Edward Scott",
                tagKey: "61ebbb95bf5b31a3fbbf91e0",
                role: "Dancer"
              },
              {
                id: 320443,
                filter: "actor=320443",
                tag: "Elise Bickley",
                tagKey: "668bfde70ca2ddad2ec7ef19",
                role: "Dancer"
              },
              {
                id: 320444,
                filter: "actor=320444",
                tag: "Eliza Hart",
                tagKey: "6776fb28cbc03eacf38c3e47",
                role: "Dancer"
              },
              {
                id: 320445,
                filter: "actor=320445",
                tag: "Ella Goodwin",
                tagKey: "6776fb27cbc03eacf38c3e43",
                role: "Dancer"
              },
              {
                id: 276357,
                filter: "actor=276357",
                tag: "Ella Nonini",
                tagKey: "64c25cc69fc12690cf3823a2",
                role: "Dancer",
                thumb:
                  "https://metadata-static.plex.tv/e/people/eb5cf837c8413fa93d1b96915908d935.jpg"
              },
              {
                id: 320446,
                filter: "actor=320446",
                tag: "Emer Walsh",
                tagKey: "6776fb27da5457e2b2449c26",
                role: "Dancer"
              },
              {
                id: 320447,
                filter: "actor=320447",
                tag: "Emi Ichikawa",
                tagKey: "64005a01c796a8e324f8b75d",
                role: "Dancer",
                thumb:
                  "https://metadata-static.plex.tv/5/people/552c3629f97b822323f86ef4654bec6a.jpg"
              },
              {
                id: 320448,
                filter: "actor=320448",
                tag: "Emilio Dosal",
                tagKey: "5d776a8596b655001fdf0e38",
                role: "Dancer"
              },
              {
                id: 320449,
                filter: "actor=320449",
                tag: "Emily Haygarth",
                tagKey: "63394798ad135b391d190ba7",
                role: "Dancer"
              },
              {
                id: 320450,
                filter: "actor=320450",
                tag: "Emily Kenwright",
                tagKey: "6776fb2886bccb8926aaa752",
                role: "Dancer"
              },
              {
                id: 320451,
                filter: "actor=320451",
                tag: "Emily Plews",
                tagKey: "6776fb29996af7147d557135",
                role: "Dancer"
              },
              {
                id: 320452,
                filter: "actor=320452",
                tag: "Emma Leigh-Rose",
                tagKey: "6776fb29cbc03eacf38c3e49",
                role: "Dancer"
              },
              {
                id: 320453,
                filter: "actor=320453",
                tag: "Erica Stubbs",
                tagKey: "64b28ae7064449397d305e5a",
                role: "Dancer"
              },
              {
                id: 320454,
                filter: "actor=320454",
                tag: "Fabiane Leame",
                tagKey: "6776fb287a52c7d31a9eb728",
                role: "Dancer"
              },
              {
                id: 320455,
                filter: "actor=320455",
                tag: "Fatou Bah",
                tagKey: "5f3fcbe7c63b480040d72a69",
                role: "Dancer",
                thumb:
                  "https://metadata-static.plex.tv/a/people/afc14fdad6572820624e7d86ad668680.jpg"
              },
              {
                id: 320456,
                filter: "actor=320456",
                tag: "Faye Stoeser",
                tagKey: "603a6dd7374d04002c443bbf",
                role: "Dancer"
              },
              {
                id: 320457,
                filter: "actor=320457",
                tag: "Federica Somma",
                tagKey: "65366095327cac7fd96a405e",
                role: "Dancer"
              },
              {
                id: 320458,
                filter: "actor=320458",
                tag: "Fortune Jordan",
                tagKey: "6776fb29e9f315c4f60ff9eb",
                role: "Dancer"
              },
              {
                id: 320459,
                filter: "actor=320459",
                tag: "Frankie Johnson",
                tagKey: "6776fb28c80653d869322efb",
                role: "Dancer"
              },
              {
                id: 320460,
                filter: "actor=320460",
                tag: "Fred Folkes",
                tagKey: "6776fb28e9f315c4f60ff9e9",
                role: "Dancer"
              },
              {
                id: 320461,
                filter: "actor=320461",
                tag: "Frederike Gerstner",
                tagKey: "6776fb28716ac3cedf86d5f8",
                role: "Dancer"
              },
              {
                id: 320462,
                filter: "actor=320462",
                tag: "Fumy Opeyemi",
                tagKey: "5d776b09ad5437001f790b1a",
                role: "Dancer"
              },
              {
                id: 320463,
                filter: "actor=320463",
                tag: "Garry Lee",
                tagKey: "6776fb2d1ee5f1be51b4c6f6",
                role: "Dancer"
              },
              {
                id: 320464,
                filter: "actor=320464",
                tag: "Genevieve Heron",
                tagKey: "6776fb29201026a905e23fee",
                role: "Dancer"
              },
              {
                id: 320465,
                filter: "actor=320465",
                tag: "Glenn Hudson",
                tagKey: "6776fb299897dac64e53a95f",
                role: "Dancer"
              },
              {
                id: 320466,
                filter: "actor=320466",
                tag: "Grace Hooper",
                tagKey: "6776fb2906668157dfefb2b3",
                role: "Dancer"
              },
              {
                id: 320467,
                filter: "actor=320467",
                tag: "Grace Hope",
                tagKey: "6776fb2905aeb10fba106e1d",
                role: "Dancer"
              },
              {
                id: 276323,
                filter: "actor=276323",
                tag: "Gustave Die",
                tagKey: "64c25cc5858fc67f06293daf",
                role: "Dancer",
                thumb:
                  "https://metadata-static.plex.tv/e/people/e46273f6123c76d68fb98e3ab8547b8e.jpg"
              },
              {
                id: 320468,
                filter: "actor=320468",
                tag: "Hannah Arbury",
                tagKey: "6776fb29c80653d869322efd",
                role: "Dancer"
              },
              {
                id: 320469,
                filter: "actor=320469",
                tag: "Hannah Bodenham",
                tagKey: "5f3fb998fea1a1003f958b72",
                role: "Dancer",
                thumb:
                  "https://metadata-static.plex.tv/b/people/b766a6625062965dd65dab03c0a9c874.jpg"
              },
              {
                id: 320470,
                filter: "actor=320470",
                tag: "Hannah Kenna-Thomas",
                tagKey: "5f404fea52f200004156a187",
                role: "Dancer",
                thumb:
                  "https://metadata-static.plex.tv/9/people/9d9bb529845e1eda66e4af50bd3ac4fe.jpg"
              },
              {
                id: 320471,
                filter: "actor=320471",
                tag: "Hannah Levitt-Collins",
                tagKey: "6776fb29cb07158b1937593c",
                role: "Dancer"
              },
              {
                id: 320472,
                filter: "actor=320472",
                tag: "Hannah Millott",
                tagKey: "6776fb28e9f315c4f60ff9e7",
                role: "Dancer"
              },
              {
                id: 320473,
                filter: "actor=320473",
                tag: "Hannah Raynor",
                tagKey: "6776fb2919955773d2d67109",
                role: "Dancer"
              },
              {
                id: 320474,
                filter: "actor=320474",
                tag: "Hannah Veerapen",
                tagKey: "5f403b5404a8650040a1a377",
                role: "Dancer",
                thumb:
                  "https://metadata-static.plex.tv/6/people/66798863e3cfd1df5099fe6bbcff11a2.jpg"
              },
              {
                id: 320475,
                filter: "actor=320475",
                tag: "Harry Barnes",
                tagKey: "6776fb29201026a905e23fec",
                role: "Dancer"
              },
              {
                id: 320476,
                filter: "actor=320476",
                tag: "Hayley Jones",
                tagKey: "5f402cab5a76a80042d65d2f",
                role: "Dancer"
              },
              {
                id: 320477,
                filter: "actor=320477",
                tag: "Helen Siveter",
                tagKey: "5fa421dbc57b2a002e53d01e",
                role: "Dancer"
              },
              {
                id: 320478,
                filter: "actor=320478",
                tag: "Hollie Dorman",
                tagKey: "6776fb29cb07158b19375940",
                role: "Dancer"
              },
              {
                id: 320479,
                filter: "actor=320479",
                tag: "Honey Makwana",
                tagKey: "64d62350db3c66c335ba354d",
                role: "Dancer"
              },
              {
                id: 320480,
                filter: "actor=320480",
                tag: "Ian Harris",
                tagKey: "67614172fe5faf225c17146e",
                role: "Dancer"
              },
              {
                id: 320481,
                filter: "actor=320481",
                tag: "Ian Oswald",
                tagKey: "63eb782bb3106b5850faa494",
                role: "Dancer"
              },
              {
                id: 320482,
                filter: "actor=320482",
                tag: "Idney De'Almeida",
                tagKey: "6776fb29cbc03eacf38c3e4f",
                role: "Dancer"
              },
              {
                id: 320483,
                filter: "actor=320483",
                tag: "Irene Salvi",
                tagKey: "64cf8bf142f6c5341cf07bd5",
                role: "Dancer",
                thumb:
                  "https://metadata-static.plex.tv/1/people/1345bc511b11742e5c9091640b5afb90.jpg"
              },
              {
                id: 320484,
                filter: "actor=320484",
                tag: "Issac Baptiste",
                tagKey: "5f27903ca9616300403322c7",
                role: "Dancer"
              },
              {
                id: 320485,
                filter: "actor=320485",
                tag: "Jack Horner",
                tagKey: "5f40074cce2564003f8b7b56",
                role: "Dancer"
              },
              {
                id: 320486,
                filter: "actor=320486",
                tag: "Jack Whitehead",
                tagKey: "6776fb29201026a905e23ff4",
                role: "Dancer"
              },
              {
                id: 320487,
                filter: "actor=320487",
                tag: "Jacqui Jameson",
                tagKey: "5d776b6cfb0d55001f567984",
                role: "Dancer"
              },
              {
                id: 320488,
                filter: "actor=320488",
                tag: "Jade Joan",
                tagKey: "6776fb29716ac3cedf86d5fc",
                role: "Dancer"
              },
              {
                id: 320489,
                filter: "actor=320489",
                tag: "Jaih Betote",
                tagKey: "5e747e8e7e06270040993b75",
                role: "Dancer",
                thumb:
                  "https://metadata-static.plex.tv/4/people/4ca0bcb7a6dc9cbae9c0c26c22c8db49.jpg"
              },
              {
                id: 320490,
                filter: "actor=320490",
                tag: "Jakub Franasowicz",
                tagKey: "64cf8bf279a0b93c1af2991f",
                role: "Dancer",
                thumb:
                  "https://image.tmdb.org/t/p/original/4LUNGDan4OkbnmfLSuUxBXTT8SP.jpg"
              },
              {
                id: 320491,
                filter: "actor=320491",
                tag: "Jal Joshua",
                tagKey: "6776fb2906668157dfefb2bb",
                role: "Dancer"
              },
              {
                id: 320492,
                filter: "actor=320492",
                tag: "James Collins",
                tagKey: "5f4044f602101b0040f864a7",
                role: "Dancer"
              },
              {
                id: 320493,
                filter: "actor=320493",
                tag: "James Davies-Williams",
                tagKey: "6776fb2a06668157dfefb2c1",
                role: "Dancer"
              },
              {
                id: 320494,
                filter: "actor=320494",
                tag: "James Lambert",
                tagKey: "6776fb291ee5f1be51b4c6c4",
                role: "Dancer"
              },
              {
                id: 216296,
                filter: "actor=216296",
                tag: "Jane Fowler",
                tagKey: "5d7769c1ad5437001f7671a2",
                role: "Dancer",
                thumb:
                  "https://metadata-static.plex.tv/people/5d7769c1ad5437001f7671a2.jpg"
              },
              {
                id: 301210,
                filter: "actor=301210",
                tag: "Janine Somcio",
                tagKey: "64bce148d11b7854c94e84b9",
                role: "Dancer",
                thumb:
                  "https://metadata-static.plex.tv/3/people/39252a94aec4341b8ad05a2c3787a10b.jpg"
              },
              {
                id: 320495,
                filter: "actor=320495",
                tag: "Jasmin Saulo",
                tagKey: "6776fb2a19955773d2d6710b",
                role: "Dancer"
              },
              {
                id: 320496,
                filter: "actor=320496",
                tag: "Jasmine Eccles",
                tagKey: "6776fb2a100875bc60182ce7",
                role: "Dancer"
              },
              {
                id: 320497,
                filter: "actor=320497",
                tag: "Jason Gilkison",
                tagKey: "5ec411b837cda300408fd6d7",
                role: "Dancer"
              },
              {
                id: 320498,
                filter: "actor=320498",
                tag: "Thanh Jason Nguyen",
                tagKey: "614353c7326c75cff5e186b3",
                role: "Dancer"
              },
              {
                id: 320499,
                filter: "actor=320499",
                tag: "Jaye Marshall",
                tagKey: "5fe4d65a8c198b002d378eba",
                role: "Dancer"
              },
              {
                id: 320500,
                filter: "actor=320500",
                tag: "Jennifer Mitchell",
                tagKey: "6776fb30996af7147d55714b",
                role: "Dancer"
              },
              {
                id: 320501,
                filter: "actor=320501",
                tag: "Jevan Howard-Jones",
                tagKey: "6776fb2a996af7147d557147",
                role: "Dancer"
              },
              {
                id: 320502,
                filter: "actor=320502",
                tag: "Joanna Goodwin",
                tagKey: "5ff06fd7f9f01e002dd99f79",
                role: "Dancer"
              },
              {
                id: 320503,
                filter: "actor=320503",
                tag: "Joel Gooding",
                tagKey: "6776fb2ada5457e2b2449c2d",
                role: "Dancer"
              },
              {
                id: 320504,
                filter: "actor=320504",
                tag: "Johnny Bishop",
                tagKey: "5e1643cfdf4678003f5262a9",
                role: "Dancer"
              }
            ],
            Producer: [
              {
                id: 217871,
                filter: "producer=217871",
                tag: "Marc Platt",
                tagKey: "5d77682b8718ba001e31280a",
                thumb:
                  "https://metadata-static.plex.tv/b/people/bb2e2238a7c438ca1acf749b1640824a.jpg"
              },
              {
                id: 319791,
                filter: "producer=319791",
                tag: "David Stone",
                tagKey: "5dce6b578ff0cf0020201ef1",
                thumb:
                  "https://metadata-static.plex.tv/c/people/c3b6c6d677a5e3513e9924f1f874d9f8.jpg"
              },
              {
                id: 321656,
                filter: "producer=321656",
                tag: "Luke Mendes",
                tagKey: "6730a116684794b9880996ee"
              }
            ]
          }
        ]
      }
    }

    validateResponseSpec("/library/metadata/{ratingKey}", "get", 200, response)
  })

  it("should validate the 200 response when the response is from Episode", () => {
    const response = {
      MediaContainer: {
        size: 1,
        allowSync: true,
        librarySectionID: 2,
        librarySectionTitle: "TV Series ",
        librarySectionUUID: "c33ef369-636a-4ad7-b5a7-6e384aa87a14",
        Metadata: [
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
            librarySectionTitle: "TV Series ",
            librarySectionID: 2,
            librarySectionKey: "/library/sections/2",
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
            art: "/library/metadata/45520/art/1736488003",
            parentThumb: "/library/metadata/48047/thumb/1671800243",
            grandparentThumb: "/library/metadata/45520/thumb/1736488003",
            grandparentArt: "/library/metadata/45520/art/1736488003",
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
                bitrate: 6113,
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
                    videoProfile: "main",
                    Stream: [
                      {
                        id: 243531,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 6113,
                        language: "Japanese",
                        languageTag: "ja",
                        languageCode: "jpn",
                        bitDepth: 8,
                        chromaLocation: "left",
                        chromaSubsampling: "4:2:0",
                        codedHeight: 1088,
                        codedWidth: 1920,
                        frameRate: 23.976,
                        hasScalingMatrix: false,
                        height: 1080,
                        level: 40,
                        original: true,
                        profile: "main",
                        refFrames: 3,
                        scanType: "progressive",
                        width: 1920,
                        displayTitle: "1080p (H.264)",
                        extendedDisplayTitle: "1080p (H.264)"
                      },
                      {
                        id: 243532,
                        streamType: 2,
                        selected: true,
                        default: true,
                        codec: "eac3",
                        index: 1,
                        channels: 6,
                        bitrate: 768,
                        language: "Japanese",
                        languageTag: "ja",
                        languageCode: "jpn",
                        audioChannelLayout: "5.1(side)",
                        original: true,
                        samplingRate: 48000,
                        displayTitle: "Japanese (EAC3 5.1)",
                        extendedDisplayTitle: "Japanese (EAC3 5.1)"
                      },
                      {
                        id: 243533,
                        streamType: 2,
                        codec: "eac3",
                        index: 2,
                        channels: 6,
                        bitrate: 640,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        audioChannelLayout: "5.1(side)",
                        dub: true,
                        samplingRate: 48000,
                        displayTitle: "English (EAC3 5.1)",
                        extendedDisplayTitle: "English (EAC3 5.1)"
                      },
                      {
                        id: 243534,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 3,
                        bitrate: 0,
                        language: "Japanese",
                        languageTag: "ja",
                        languageCode: "jpn",
                        original: true,
                        displayTitle: "Japanese (SRT)",
                        extendedDisplayTitle: "Japanese (SRT)"
                      },
                      {
                        id: 243535,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 4,
                        bitrate: 0,
                        language: "Japanese",
                        languageTag: "ja",
                        languageCode: "jpn",
                        hearingImpaired: true,
                        original: true,
                        title: "SDH",
                        displayTitle: "Japanese SDH (SRT)",
                        extendedDisplayTitle: "SDH (Japanese SRT)"
                      },
                      {
                        id: 243536,
                        streamType: 3,
                        canAutoSync: false,
                        forced: true,
                        codec: "srt",
                        index: 5,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        dub: true,
                        title: "Forced",
                        displayTitle: "English Forced (SRT)",
                        extendedDisplayTitle: "Forced (English SRT)"
                      },
                      {
                        id: 243537,
                        streamType: 3,
                        canAutoSync: false,
                        selected: true,
                        codec: "srt",
                        index: 6,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        dub: true,
                        displayTitle: "English (SRT)",
                        extendedDisplayTitle: "English (SRT)"
                      },
                      {
                        id: 243538,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 7,
                        bitrate: 0,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        dub: true,
                        hearingImpaired: true,
                        title: "SDH",
                        displayTitle: "English SDH (SRT)",
                        extendedDisplayTitle: "SDH (English SRT)"
                      },
                      {
                        id: 243539,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 8,
                        bitrate: 0,
                        language: "Arabic",
                        languageTag: "ar",
                        languageCode: "ara",
                        dub: true,
                        displayTitle: "Arabic (SRT)",
                        extendedDisplayTitle: "Arabic (SRT)"
                      },
                      {
                        id: 243540,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 9,
                        bitrate: 0,
                        language: "Czech",
                        languageTag: "cs",
                        languageCode: "ces",
                        dub: true,
                        displayTitle: "Czech (SRT)",
                        extendedDisplayTitle: "Czech (SRT)"
                      },
                      {
                        id: 243541,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 10,
                        bitrate: 0,
                        language: "Danish",
                        languageTag: "da",
                        languageCode: "dan",
                        dub: true,
                        displayTitle: "Danish (SRT)",
                        extendedDisplayTitle: "Danish (SRT)"
                      },
                      {
                        id: 243542,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 11,
                        bitrate: 0,
                        language: "German",
                        languageTag: "de",
                        languageCode: "deu",
                        dub: true,
                        displayTitle: "German (SRT)",
                        extendedDisplayTitle: "German (SRT)"
                      },
                      {
                        id: 243543,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 12,
                        bitrate: 0,
                        language: "Greek",
                        languageTag: "el",
                        languageCode: "ell",
                        dub: true,
                        displayTitle: "Greek (SRT)",
                        extendedDisplayTitle: "Greek (SRT)"
                      },
                      {
                        id: 243544,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 13,
                        bitrate: 0,
                        language: "Spanish",
                        languageTag: "es",
                        languageCode: "spa",
                        dub: true,
                        title: "Latin American",
                        displayTitle: "Spanish (SRT)",
                        extendedDisplayTitle: "Latin American (Spanish SRT)"
                      },
                      {
                        id: 243545,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 14,
                        bitrate: 0,
                        language: "Spanish",
                        languageTag: "es",
                        languageCode: "spa",
                        dub: true,
                        displayTitle: "Spanish (SRT)",
                        extendedDisplayTitle: "Spanish (SRT)"
                      },
                      {
                        id: 243546,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 15,
                        bitrate: 0,
                        language: "Finnish",
                        languageTag: "fi",
                        languageCode: "fin",
                        dub: true,
                        displayTitle: "Finnish (SRT)",
                        extendedDisplayTitle: "Finnish (SRT)"
                      },
                      {
                        id: 243547,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 16,
                        bitrate: 0,
                        language: "Filipino",
                        languageTag: "fil",
                        languageCode: "fil",
                        dub: true,
                        displayTitle: "Filipino (SRT)",
                        extendedDisplayTitle: "Filipino (SRT)"
                      },
                      {
                        id: 243548,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 17,
                        bitrate: 0,
                        language: "French",
                        languageTag: "fr",
                        languageCode: "fra",
                        dub: true,
                        displayTitle: "French (SRT)",
                        extendedDisplayTitle: "French (SRT)"
                      },
                      {
                        id: 243549,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 18,
                        bitrate: 0,
                        language: "Hebrew",
                        languageTag: "he",
                        languageCode: "heb",
                        dub: true,
                        displayTitle: "Hebrew (SRT)",
                        extendedDisplayTitle: "Hebrew (SRT)"
                      },
                      {
                        id: 243550,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 19,
                        bitrate: 0,
                        language: "Croatian",
                        languageTag: "hr",
                        languageCode: "hrv",
                        dub: true,
                        displayTitle: "Croatian (SRT)",
                        extendedDisplayTitle: "Croatian (SRT)"
                      },
                      {
                        id: 243551,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 20,
                        bitrate: 0,
                        language: "Hungarian",
                        languageTag: "hu",
                        languageCode: "hun",
                        dub: true,
                        displayTitle: "Hungarian (SRT)",
                        extendedDisplayTitle: "Hungarian (SRT)"
                      },
                      {
                        id: 243552,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 21,
                        bitrate: 0,
                        language: "Indonesian",
                        languageTag: "id",
                        languageCode: "ind",
                        dub: true,
                        displayTitle: "Indonesian (SRT)",
                        extendedDisplayTitle: "Indonesian (SRT)"
                      },
                      {
                        id: 243553,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 22,
                        bitrate: 0,
                        language: "Italian",
                        languageTag: "it",
                        languageCode: "ita",
                        dub: true,
                        displayTitle: "Italian (SRT)",
                        extendedDisplayTitle: "Italian (SRT)"
                      },
                      {
                        id: 243554,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 23,
                        bitrate: 0,
                        language: "Korean",
                        languageTag: "ko",
                        languageCode: "kor",
                        dub: true,
                        displayTitle: "Korean (SRT)",
                        extendedDisplayTitle: "Korean (SRT)"
                      },
                      {
                        id: 243555,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 24,
                        bitrate: 0,
                        language: "Malay",
                        languageTag: "ms",
                        languageCode: "msa",
                        dub: true,
                        displayTitle: "Malay (SRT)",
                        extendedDisplayTitle: "Malay (SRT)"
                      },
                      {
                        id: 243556,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 25,
                        bitrate: 0,
                        language: "Norwegian Bokmål",
                        languageTag: "nb",
                        languageCode: "nob",
                        dub: true,
                        displayTitle: "Norwegian Bokmål (SRT)",
                        extendedDisplayTitle: "Norwegian Bokmål (SRT)"
                      },
                      {
                        id: 243557,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 26,
                        bitrate: 0,
                        language: "Dutch",
                        languageTag: "nl",
                        languageCode: "nld",
                        dub: true,
                        displayTitle: "Dutch (SRT)",
                        extendedDisplayTitle: "Dutch (SRT)"
                      },
                      {
                        id: 243558,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 27,
                        bitrate: 0,
                        language: "Polish",
                        languageTag: "pl",
                        languageCode: "pol",
                        dub: true,
                        displayTitle: "Polish (SRT)",
                        extendedDisplayTitle: "Polish (SRT)"
                      },
                      {
                        id: 243559,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 28,
                        bitrate: 0,
                        language: "Portuguese",
                        languageTag: "pt",
                        languageCode: "por",
                        dub: true,
                        title: "Brazilian",
                        displayTitle: "Portuguese (SRT)",
                        extendedDisplayTitle: "Brazilian (Portuguese SRT)"
                      },
                      {
                        id: 243560,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 29,
                        bitrate: 0,
                        language: "Portuguese",
                        languageTag: "pt",
                        languageCode: "por",
                        dub: true,
                        displayTitle: "Portuguese (SRT)",
                        extendedDisplayTitle: "Portuguese (SRT)"
                      },
                      {
                        id: 243561,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 30,
                        bitrate: 0,
                        language: "Romanian",
                        languageTag: "ro",
                        languageCode: "ron",
                        dub: true,
                        displayTitle: "Romanian (SRT)",
                        extendedDisplayTitle: "Romanian (SRT)"
                      },
                      {
                        id: 243562,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 31,
                        bitrate: 0,
                        language: "Russian",
                        languageTag: "ru",
                        languageCode: "rus",
                        dub: true,
                        displayTitle: "Russian (SRT)",
                        extendedDisplayTitle: "Russian (SRT)"
                      },
                      {
                        id: 243563,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 32,
                        bitrate: 0,
                        language: "Swedish",
                        languageTag: "sv",
                        languageCode: "swe",
                        dub: true,
                        displayTitle: "Swedish (SRT)",
                        extendedDisplayTitle: "Swedish (SRT)"
                      },
                      {
                        id: 243564,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 33,
                        bitrate: 0,
                        language: "Thai",
                        languageTag: "th",
                        languageCode: "tha",
                        dub: true,
                        displayTitle: "Thai (SRT)",
                        extendedDisplayTitle: "Thai (SRT)"
                      },
                      {
                        id: 243565,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 34,
                        bitrate: 0,
                        language: "Turkish",
                        languageTag: "tr",
                        languageCode: "tur",
                        dub: true,
                        displayTitle: "Turkish (SRT)",
                        extendedDisplayTitle: "Turkish (SRT)"
                      },
                      {
                        id: 243566,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 35,
                        bitrate: 0,
                        language: "Ukrainian",
                        languageTag: "uk",
                        languageCode: "ukr",
                        dub: true,
                        displayTitle: "Ukrainian (SRT)",
                        extendedDisplayTitle: "Ukrainian (SRT)"
                      },
                      {
                        id: 243567,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 36,
                        bitrate: 0,
                        language: "Vietnamese",
                        languageTag: "vi",
                        languageCode: "vie",
                        dub: true,
                        displayTitle: "Vietnamese (SRT)",
                        extendedDisplayTitle: "Vietnamese (SRT)"
                      },
                      {
                        id: 243568,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 37,
                        bitrate: 0,
                        language: "Chinese",
                        languageTag: "zh",
                        languageCode: "zho",
                        dub: true,
                        title: "Simplified",
                        displayTitle: "Chinese (SRT)",
                        extendedDisplayTitle: "Simplified (Chinese SRT)"
                      },
                      {
                        id: 243569,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 38,
                        bitrate: 0,
                        language: "Chinese",
                        languageTag: "zh",
                        languageCode: "zho",
                        dub: true,
                        title: "Traditional",
                        displayTitle: "Chinese (SRT)",
                        extendedDisplayTitle: "Traditional (Chinese SRT)"
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
                url: "/library/metadata/45520/art/1736488003"
              },
              {
                alt: "Episode 1",
                type: "clearLogo",
                url: "/library/metadata/45520/clearLogo/1736488003"
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
            ],
            Rating: [
              {
                image: "themoviedb://image.rating",
                value: 9.2,
                type: "audience"
              }
            ]
          }
        ]
      }
    }

    validateResponseSpec("/library/metadata/{ratingKey}", "get", 200, response)
  })

  it("should validate the 200 response when the response is from Episode", () => {
    const response = {
      MediaContainer: {
        size: 1,
        allowSync: true,
        identifier: "com.plexapp.plugins.library",
        librarySectionID: 1,
        librarySectionTitle: "Movies",
        librarySectionUUID: "0e71027d-88bc-4413-9927-5aad992d3d19",
        mediaTagPrefix: "/system/bundle/media/flags/",
        mediaTagVersion: 1734362201,
        Metadata: [
          {
            ratingKey: "9881",
            key: "/library/metadata/9881",
            guid: "plex://movie/5d776834961905001eb939ac",
            slug: "91-2-weeks",
            studio: "Jonesfilm",
            type: "movie",
            title: "9½ Weeks",
            librarySectionTitle: "Movies",
            librarySectionID: 1,
            librarySectionKey: "/library/sections/1",
            originalTitle: "Nine 1/2 Weeks",
            contentRating: "nl/12",
            summary:
              "An erotic story about a woman, the assistant of an art gallery, who gets involved in an impersonal affair with a man. She barely knows about his life, only about the sex games they play, so the relationship begins to get complicated.",
            rating: 6.0,
            audienceRating: 5.5,
            year: 1986,
            tagline: "They Broke Every Rule.",
            thumb: "/library/metadata/9881/thumb/1732511607",
            art: "/library/metadata/9881/art/1732511607",
            duration: 7011007,
            originallyAvailableAt: "1986-02-09",
            addedAt: 1560801795,
            updatedAt: 1732511607,
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
                    videoProfile: "high",
                    Stream: [
                      {
                        id: 100031,
                        streamType: 1,
                        default: true,
                        codec: "h264",
                        index: 0,
                        bitrate: 11494,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        bitDepth: 8,
                        chromaLocation: "left",
                        chromaSubsampling: "4:2:0",
                        codedHeight: 1088,
                        codedWidth: 1920,
                        frameRate: 23.976,
                        hasScalingMatrix: false,
                        headerCompression: true,
                        height: 1080,
                        level: 41,
                        profile: "high",
                        refFrames: 4,
                        scanType: "progressive",
                        title:
                          "Nine.Half.Weeks.1986.1080p.BluRay.DTS.x264-HDMaNiAcS",
                        width: 1920,
                        displayTitle: "1080p",
                        extendedDisplayTitle:
                          "Nine.Half.Weeks.1986.1080p.BluRay.DTS.x264-HDMaNiAcS (1080p H.264)"
                      },
                      {
                        id: 100032,
                        streamType: 2,
                        selected: true,
                        default: true,
                        codec: "dca",
                        index: 1,
                        channels: 6,
                        bitrate: 1509,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        audioChannelLayout: "5.1(side)",
                        bitDepth: 24,
                        headerCompression: true,
                        profile: "dts",
                        samplingRate: 48000,
                        displayTitle: "English (DTS 5.1)",
                        extendedDisplayTitle: "English (DTS 5.1)"
                      },
                      {
                        id: 100033,
                        streamType: 3,
                        canAutoSync: false,
                        default: true,
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
                        id: 100034,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 3,
                        bitrate: 0,
                        language: "Greek",
                        languageTag: "el",
                        languageCode: "ell",
                        displayTitle: "Greek",
                        extendedDisplayTitle: "Greek (SRT)"
                      },
                      {
                        id: 100035,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 4,
                        bitrate: 0,
                        language: "Dutch",
                        languageTag: "nl",
                        languageCode: "nld",
                        displayTitle: "Dutch",
                        extendedDisplayTitle: "Dutch (SRT)"
                      },
                      {
                        id: 100036,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 5,
                        bitrate: 0,
                        language: "French",
                        languageTag: "fr",
                        languageCode: "fra",
                        displayTitle: "French",
                        extendedDisplayTitle: "French (SRT)"
                      },
                      {
                        id: 100037,
                        streamType: 3,
                        canAutoSync: false,
                        codec: "srt",
                        index: 6,
                        bitrate: 0,
                        language: "Spanish",
                        languageTag: "es",
                        languageCode: "spa",
                        displayTitle: "Spanish",
                        extendedDisplayTitle: "Spanish (SRT)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "9½ Weeks",
                type: "coverPoster",
                url: "/library/metadata/9881/thumb/1732511607"
              },
              {
                alt: "9½ Weeks",
                type: "background",
                url: "/library/metadata/9881/art/1732511607"
              },
              {
                alt: "9½ Weeks",
                type: "clearLogo",
                url: "/library/metadata/9881/clearLogo/1732511607"
              }
            ],
            UltraBlurColors: {
              topLeft: "452410",
              topRight: "0d0202",
              bottomRight: "0d0202",
              bottomLeft: "272223"
            },
            Genre: [
              { id: 91, filter: "genre=91", tag: "Drama" },
              { id: 2313, filter: "genre=2313", tag: "Romance" }
            ],
            Country: [
              {
                id: 58591,
                filter: "country=58591",
                tag: "United States of America"
              }
            ],
            Guid: [
              { id: "imdb://tt0091635" },
              { id: "tmdb://10068" },
              { id: "tvdb://1165" }
            ],
            Rating: [
              { image: "imdb://image.rating", value: 5.9, type: "audience" },
              {
                image: "rottentomatoes://image.rating.ripe",
                value: 6.0,
                type: "critic"
              },
              {
                image: "rottentomatoes://image.rating.spilled",
                value: 5.5,
                type: "audience"
              },
              {
                image: "themoviedb://image.rating",
                value: 6.1,
                type: "audience"
              }
            ],
            Director: [
              {
                id: 115243,
                filter: "director=115243",
                tag: "Adrian Lyne",
                tagKey: "5d776827151a60001f24aac6",
                thumb:
                  "https://metadata-static.plex.tv/6/people/6f6d8e5aefcae45e3ccb7843de68c905.jpg"
              }
            ],
            Writer: [
              {
                id: 119473,
                filter: "writer=119473",
                tag: "Sarah Kernochan",
                tagKey: "5d776829eb5d26001f1ddfcd",
                thumb:
                  "https://metadata-static.plex.tv/9/people/96dfb2020c32ddae0345c4a0aee59414.jpg"
              },
              {
                id: 119474,
                filter: "writer=119474",
                tag: "Zalman King",
                tagKey: "5d77682ff54112001f5bcc2e",
                thumb:
                  "https://metadata-static.plex.tv/5/people/57a351f9a4343dca762ee432544bf34e.jpg"
              },
              {
                id: 119475,
                filter: "writer=119475",
                tag: "Patricia Louisianna Knop",
                tagKey: "5d77682ff54112001f5bcc3f",
                thumb:
                  "https://metadata-static.plex.tv/4/people/46956d0e94d2446fb7c1e46d247d645a.jpg"
              },
              {
                id: 119476,
                filter: "writer=119476",
                tag: "Elizabeth McNeill",
                tagKey: "5dcd37dc27f42b001fe2a264"
              }
            ],
            Role: [
              {
                id: 112471,
                filter: "actor=112471",
                tag: "Mickey Rourke",
                tagKey: "5d7768254de0ee001fcc8142",
                role: "John",
                thumb:
                  "https://metadata-static.plex.tv/9/people/957b644e5f8a141ae9715d7208ed11c7.jpg"
              },
              {
                id: 114907,
                filter: "actor=114907",
                tag: "Kim Basinger",
                tagKey: "5d776826e6d55c002040af92",
                role: "Elizabeth",
                thumb:
                  "https://metadata-static.plex.tv/4/people/4b7cdc723474d2effa3e53e37db88f0b.jpg"
              },
              {
                id: 119477,
                filter: "actor=119477",
                tag: "Margaret Whitton",
                tagKey: "5d77683454f42c001f8c42c9",
                role: "Molly",
                thumb:
                  "https://metadata-static.plex.tv/b/people/ba5f44eec74e0c12e4cb8924e88bb688.jpg"
              },
              {
                id: 119478,
                filter: "actor=119478",
                tag: "David Margulies",
                tagKey: "5d7768273c3c2a001fbcb1ca",
                role: "Harvey",
                thumb:
                  "https://metadata-static.plex.tv/people/5d7768273c3c2a001fbcb1ca.jpg"
              },
              {
                id: 118305,
                filter: "actor=118305",
                tag: "Christine Baranski",
                tagKey: "5d776828151a60001f24af12",
                role: "Thea",
                thumb:
                  "https://metadata-static.plex.tv/f/people/f9f3e932357029ab6ec4bf0c128c2cb4.jpg"
              },
              {
                id: 119479,
                filter: "actor=119479",
                tag: "Karen Young",
                tagKey: "5d77682754f42c001f8c2a3c",
                role: "Sue",
                thumb:
                  "https://metadata-static.plex.tv/3/people/36d0e412b0d58d6939d1976d306c10c4.jpg"
              },
              {
                id: 119480,
                filter: "actor=119480",
                tag: "Dwight Weist",
                tagKey: "5d776835961905001eb93cd7",
                role: "Farnsworth",
                thumb:
                  "https://metadata-static.plex.tv/4/people/4cf65442c74948fcd6758c6b77165019.jpg"
              },
              {
                id: 119481,
                filter: "actor=119481",
                tag: "Roderick Cook",
                tagKey: "5d776825151a60001f24a6d2",
                role: "Sinclair - the Critic",
                thumb:
                  "https://metadata-static.plex.tv/people/5d776825151a60001f24a6d2.jpg"
              },
              {
                id: 119482,
                filter: "actor=119482",
                tag: "Victor Truro",
                tagKey: "5d7768278718ba001e311e97",
                role: "Gallery Client",
                thumb:
                  "https://metadata-static.plex.tv/a/people/ac35e61b7f92d7e71f676c5742972a6f.jpg"
              },
              {
                id: 119483,
                filter: "actor=119483",
                tag: "Justine Johnston",
                tagKey: "5d776835961905001eb93cd8",
                role: "Bedding Saleswoman",
                thumb:
                  "https://metadata-static.plex.tv/people/5d776835961905001eb93cd8.jpg"
              },
              {
                id: 119484,
                filter: "actor=119484",
                tag: "Julian Beck",
                tagKey: "5d776835961905001eb93cd9",
                role: "Dinner Guest",
                thumb:
                  "https://metadata-static.plex.tv/people/5d776835961905001eb93cd9.jpg"
              },
              {
                id: 203253,
                filter: "actor=203253",
                tag: "Michael Margotta",
                tagKey: "5d776835961905001eb93cda",
                role: "Michael",
                thumb:
                  "https://metadata-static.plex.tv/people/5d776835961905001eb93cda.jpg"
              },
              {
                id: 203254,
                filter: "actor=203254",
                tag: "Petina Cole",
                tagKey: "5dd2c65235afd6001e030cf2",
                role: "Woman on Stage at Porno House",
                thumb:
                  "https://metadata-static.plex.tv/f/people/f9ab0a292d3d5d2a59a99bd80341a11d.jpg"
              },
              {
                id: 119487,
                filter: "actor=119487",
                tag: "Joey Silvera",
                tagKey: "5d776835961905001eb93cdc",
                role: "Man on Stage at Porno House",
                thumb:
                  "https://metadata-static.plex.tv/8/people/8c4772b1fb3490c51e723d7aa8a1ed27.jpg"
              },
              {
                id: 119488,
                filter: "actor=119488",
                tag: "Sarah Kernochan",
                tagKey: "5d776829eb5d26001f1ddfcd",
                role: "Gallery Guest",
                thumb:
                  "https://metadata-static.plex.tv/9/people/96dfb2020c32ddae0345c4a0aee59414.jpg"
              },
              {
                id: 113440,
                filter: "actor=113440",
                tag: "Helen Hanft",
                tagKey: "5d7768278718ba001e311e99",
                role: "Flea Market Shawl Seller",
                thumb:
                  "https://metadata-static.plex.tv/5/people/5f0b6b7603e7201abc7ae7a178dd7a3b.jpg"
              },
              {
                id: 203255,
                filter: "actor=203255",
                tag: "William De Acutis",
                tagKey: "5d77683185719b001f3a2bb3",
                role: "Ted",
                thumb:
                  "https://metadata-static.plex.tv/e/people/ebf48881699b18061c49cea38d8a8768.jpg"
              },
              {
                id: 203256,
                filter: "actor=203256",
                tag: "Cintia Cruz",
                tagKey: "5d776835961905001eb93cdd",
                role: "Whore"
              },
              {
                id: 119491,
                filter: "actor=119491",
                tag: "Kim Chan",
                tagKey: "5d776824103a2d001f563ad5",
                role: "Chinatown Butcher",
                thumb:
                  "https://metadata-static.plex.tv/people/5d776824103a2d001f563ad5.jpg"
              },
              {
                id: 181883,
                filter: "actor=181883",
                tag: "Lee Lai Sing",
                tagKey: "632092957b6301b7f349c8d4",
                role: "Angry Chinese Customer"
              },
              {
                id: 119493,
                filter: "actor=119493",
                tag: "Rudolph Willrich",
                tagKey: "5d776835961905001eb93cdf",
                role: "Chinatown Shopper",
                thumb:
                  "https://metadata-static.plex.tv/8/people/82fa468de3861338bfe4959523a8cb0a.jpg"
              },
              {
                id: 119494,
                filter: "actor=119494",
                tag: "Michael P. Moran",
                tagKey: "5d7768262e80df001ebdce0b",
                role: "Flea Market Chicken Seller",
                thumb:
                  "https://metadata-static.plex.tv/f/people/fd5f72c277bcd9935d3e29241e220714.jpg"
              },
              {
                id: 118024,
                filter: "actor=118024",
                tag: "Raynor Scheine",
                tagKey: "5d776827880197001ec90a05",
                role: "Flower Delivery Boy",
                thumb:
                  "https://metadata-static.plex.tv/5/people/58ba341047a2498f2eb90ffef11c29b4.jpg"
              },
              {
                id: 119495,
                filter: "actor=119495",
                tag: "Olek Krupa",
                tagKey: "5d7768265af944001f1f6658",
                role: "Bruce",
                thumb:
                  "https://metadata-static.plex.tv/d/people/db7a5a43bba485d18322846dc2f37bf4.jpg"
              },
              {
                id: 119496,
                filter: "actor=119496",
                tag: "John P. Connolly",
                tagKey: "5d776835961905001eb93ce0",
                role: "Dinner Guest"
              },
              {
                id: 119497,
                filter: "actor=119497",
                tag: "Cassandra Danz",
                tagKey: "5d776835961905001eb93ce1",
                role: "Dinner Guest"
              },
              {
                id: 119498,
                filter: "actor=119498",
                tag: "Beata Jachulski",
                tagKey: "5d776835961905001eb93ce2",
                role: "Dinner Guest"
              },
              {
                id: 119499,
                filter: "actor=119499",
                tag: "Peter Pagan",
                tagKey: "5d776835961905001eb93ce3",
                role: "Riding Crop Salesman"
              },
              {
                id: 119500,
                filter: "actor=119500",
                tag: "Terri Perri",
                tagKey: "5d776826a091de001f2e61f9",
                role: "Italian Singer"
              },
              {
                id: 119501,
                filter: "actor=119501",
                tag: "Charles Malota",
                tagKey: "5d776835961905001eb93ce4",
                role: "Coney Island Boy"
              },
              {
                id: 119502,
                filter: "actor=119502",
                tag: "Daniel E. Amrich",
                tagKey: "5d776835961905001eb93ce5",
                role: "Coney Island Boy"
              },
              {
                id: 119503,
                filter: "actor=119503",
                tag: "Salvatore Sciangula",
                tagKey: "5d776835961905001eb93ce6",
                role: "Coney Island Boy"
              },
              {
                id: 119504,
                filter: "actor=119504",
                tag: "Kim Michel",
                tagKey: "5d776835961905001eb93ce7",
                role: "Soap Opera Woman"
              },
              {
                id: 119505,
                filter: "actor=119505",
                tag: "Jeff Severson",
                tagKey: "5d776835961905001eb93ce8",
                role: "Soap Opera Man"
              },
              {
                id: 119506,
                filter: "actor=119506",
                tag: "Dan Lauria",
                tagKey: "5d77682cf59e580021897bee",
                role: "Janitor",
                thumb:
                  "https://metadata-static.plex.tv/d/people/d222064496a31fbcaa8992db0d2283dc.jpg"
              },
              {
                id: 119507,
                filter: "actor=119507",
                tag: "Corey Parker",
                tagKey: "5d776835961905001eb93ce9",
                role: "Janitor",
                thumb:
                  "https://metadata-static.plex.tv/3/people/3f539205130ec7b6729a7b4af0de2db9.jpg"
              },
              {
                id: 119508,
                filter: "actor=119508",
                tag: "Joe Maruzzo",
                tagKey: "5d776835961905001eb93cea",
                role: "Garbageman",
                thumb:
                  "https://metadata-static.plex.tv/people/5d776835961905001eb93cea.jpg"
              },
              {
                id: 119509,
                filter: "actor=119509",
                tag: "Tom Traino",
                tagKey: "5d776835961905001eb93ceb",
                role: "Garbageman"
              },
              {
                id: 119510,
                filter: "actor=119510",
                tag: "Corvova Choy Lee",
                tagKey: "5d776835961905001eb93cec",
                role: "Clothing Saleswoman"
              },
              {
                id: 119511,
                filter: "actor=119511",
                tag: "Ellen Barber",
                tagKey: "5d776835961905001eb93ced",
                role: "John's Secretary",
                thumb:
                  "https://metadata-static.plex.tv/8/people/8c94f4c0c043cdcbfb1ebdfdd5c3b7cc.jpg"
              },
              {
                id: 119512,
                filter: "actor=119512",
                tag: "Ethel Ayler",
                tagKey: "5d7768276f4521001ea99134",
                role: "Jewelry Saleswoman",
                thumb:
                  "https://metadata-static.plex.tv/6/people/6455789c1c3f3e7225a1274637a2d279.jpg"
              },
              {
                id: 119513,
                filter: "actor=119513",
                tag: "Elisabeth Senn",
                tagKey: "5d776835961905001eb93cee",
                role: "Perfume Lady"
              },
              {
                id: 119514,
                filter: "actor=119514",
                tag: "Gittan Goding",
                tagKey: "5d776835961905001eb93cef",
                role: "Dancer at Porno House"
              },
              {
                id: 119515,
                filter: "actor=119515",
                tag: "David M. Everard",
                tagKey: "5d776835961905001eb93cf0",
                role: "Bearded Man at Porno House"
              },
              {
                id: 119516,
                filter: "actor=119516",
                tag: "Luther Rucker",
                tagKey: "5d776835961905001eb93cf1",
                role: "Barker at Porno House"
              },
              {
                id: 119517,
                filter: "actor=119517",
                tag: "Merry Clayton",
                tagKey: "5d77682b999c64001ec2d6c9",
                role: "Background Vocal at Porno House",
                thumb:
                  "https://metadata-static.plex.tv/1/people/1a4a170d5cf2ba3eecacb9e54002e5c0.jpg"
              },
              {
                id: 119518,
                filter: "actor=119518",
                tag: "Kim Isaacson",
                tagKey: "5d776835961905001eb93cf2",
                role: "Gallery Guest"
              },
              {
                id: 255665,
                filter: "actor=255665",
                tag: "David Tabor",
                tagKey: "5d776835961905001eb93cf3",
                role: "Leon Berger"
              }
            ],
            Producer: [
              {
                id: 203257,
                filter: "producer=203257",
                tag: "Alan M. Harris",
                tagKey: "5d77682f151a60001f24c92f",
                thumb:
                  "https://metadata-static.plex.tv/c/people/cb6864282bb169e153b82f642af74010.jpg"
              },
              {
                id: 119521,
                filter: "producer=119521",
                tag: "Sidney Kimmel",
                tagKey: "5d776831103a2d001f566d79",
                thumb:
                  "https://metadata-static.plex.tv/5/people/533a50f9436f9ba20ecd5b0d164c374c.jpg"
              },
              {
                id: 119522,
                filter: "producer=119522",
                tag: "Zalman King",
                tagKey: "5d77682ff54112001f5bcc2e",
                thumb:
                  "https://metadata-static.plex.tv/5/people/57a351f9a4343dca762ee432544bf34e.jpg"
              },
              {
                id: 119523,
                filter: "producer=119523",
                tag: "Antony Rufus-Isaacs",
                tagKey: "5d776835961905001eb93cd6"
              }
            ],
            Similar: [
              { id: 16619, filter: "similar=16619", tag: "Wild Orchid" },
              { id: 16521, filter: "similar=16521", tag: "Fatal Attraction" },
              { id: 16522, filter: "similar=16522", tag: "Indecent Proposal" },
              { id: 16485, filter: "similar=16485", tag: "Striptease" },
              { id: 5014, filter: "similar=5014", tag: "Disclosure" },
              { id: 16434, filter: "similar=16434", tag: "Tequila Sunrise" },
              { id: 16614, filter: "similar=16614", tag: "No Way Out" },
              {
                id: 5641,
                filter: "similar=5641",
                tag: "The Jewel of the Nile"
              },
              {
                id: 16617,
                filter: "similar=16617",
                tag: "The Witches of Eastwick"
              },
              {
                id: 16616,
                filter: "similar=16616",
                tag: "The Bonfire of the Vanities"
              },
              { id: 16436, filter: "similar=16436", tag: "The Getaway" },
              { id: 16610, filter: "similar=16610", tag: "Cocktail" },
              { id: 12196, filter: "similar=12196", tag: "Working Girl" },
              { id: 16609, filter: "similar=16609", tag: "Blind Date" },
              {
                id: 46198,
                filter: "similar=46198",
                tag: "The War of the Roses"
              },
              { id: 16484, filter: "similar=16484", tag: "Sliver" },
              {
                id: 46199,
                filter: "similar=46199",
                tag: "The Postman Always Rings Twice"
              },
              { id: 5639, filter: "similar=5639", tag: "Romancing the Stone" },
              { id: 16615, filter: "similar=16615", tag: "Sea of Love" },
              { id: 16611, filter: "similar=16611", tag: "Frankie and Johnny" }
            ]
          }
        ]
      }
    }

    validateResponseSpec("/library/metadata/{ratingKey}", "get", 200, response)
  })
  it("should validate the 200 response when the response is from Episode", () => {
    const response = {
      MediaContainer: {
        size: 1,
        allowSync: true,
        identifier: "com.plexapp.plugins.library",
        librarySectionID: 6,
        librarySectionTitle: "Movies (Documentaries)",
        librarySectionUUID: "d6a09f3a-3027-4a2f-bb0d-14d6d2b93533",
        mediaTagPrefix: "/system/bundle/media/flags/",
        mediaTagVersion: 1734362201,
        Metadata: [
          {
            ratingKey: "56939",
            key: "/library/metadata/56939",
            guid: "local://56939",
            type: "movie",
            title: "Boiling Point",
            librarySectionTitle: "Movies (Documentaries)",
            librarySectionID: 6,
            librarySectionKey: "/library/sections/6",
            summary: "",
            year: 1999,
            thumb: "/library/metadata/56939/thumb/1737312638",
            art: "/library/metadata/56939/art/1737312638",
            duration: 8109499,
            addedAt: 1622054437,
            updatedAt: 1737312638,
            Media: [
              {
                id: 60981,
                duration: 8109499,
                bitrate: 11710,
                width: 2880,
                height: 2160,
                aspectRatio: 1.33,
                audioChannels: 2,
                audioCodec: "aac",
                videoCodec: "vp9",
                videoResolution: "4k",
                container: "mkv",
                videoFrameRate: "PAL",
                audioProfile: "lc",
                videoProfile: "profile 0",
                hasVoiceActivity: false,
                Part: [
                  {
                    id: 92023,
                    key: "/library/parts/92023/1602116112/file.mkv",
                    duration: 8109499,
                    file: "/Movies (Documentaries)/Boiling Point (1999)/Boiling Point (1999) WEBDL-2160p.mkv",
                    size: 11874057616,
                    audioProfile: "lc",
                    container: "mkv",
                    indexes: "sd",
                    videoProfile: "profile 0",
                    Stream: [
                      {
                        id: 304223,
                        streamType: 1,
                        default: true,
                        codec: "vp9",
                        index: 0,
                        bitrate: 11582,
                        language: "English",
                        languageTag: "en",
                        languageCode: "eng",
                        bitDepth: 8,
                        chromaSubsampling: "4:2:0",
                        codedHeight: 2160,
                        codedWidth: 2880,
                        colorPrimaries: "bt709",
                        colorRange: "tv",
                        colorSpace: "bt709",
                        colorTrc: "bt709",
                        frameRate: 25.0,
                        height: 2160,
                        profile: "profile 0",
                        refFrames: 1,
                        width: 2880,
                        displayTitle: "4K",
                        extendedDisplayTitle: "4K (VP9)"
                      },
                      {
                        id: 304224,
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
                        profile: "lc",
                        samplingRate: 44100,
                        displayTitle: "English (AAC Stereo)",
                        extendedDisplayTitle: "English (AAC Stereo)"
                      }
                    ]
                  }
                ]
              }
            ],
            Image: [
              {
                alt: "Boiling Point",
                type: "coverPoster",
                url: "/library/metadata/56939/thumb/1737312638"
              },
              {
                alt: "Boiling Point",
                type: "background",
                url: "/library/metadata/56939/art/1737312638"
              }
            ],
            UltraBlurColors: {
              topLeft: "421b15",
              topRight: "170405",
              bottomRight: "2a174e",
              bottomLeft: "6f5b24"
            }
          }
        ]
      }
    }

    validateResponseSpec("/library/metadata/{ratingKey}", "get", 200, response)
  })
})
