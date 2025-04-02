import { validateResponseSpec } from "@utils"
import { describe, it } from "vitest"

describe("GET /library/metadata/[RatingKey]/posters", () => {
  it("should have a valid spec for a 200 response", () => {
    const response = {
      MediaContainer: {
        Metadata: [
          {
            key: "/library/metadata/16099/file?url=metadata%3A%2F%2Fposters%2Ftv%2Eplex%2Eagents%2Eseries_a2cd5269d40e3c70189b7e7b1143e872570a5eaa",
            provider: "tmdb",
            ratingKey: "metadata://posters/tv.plex.agents.series_a2cd5269d40e3c70189b7e7b1143e872570a5eaa",
            selected: true,
            thumb: "/library/metadata/16099/file?url=metadata%3A%2F%2Fposters%2Ftv%2Eplex%2Eagents%2Eseries_a2cd5269d40e3c70189b7e7b1143e872570a5eaa"
          },
          {
            key: "https://image.tmdb.org/t/p/original/hntBJjqbv4m0Iyniqaztv9xaudI.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/hntBJjqbv4m0Iyniqaztv9xaudI.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=336&width=225&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2FhntBJjqbv4m0Iyniqaztv9xaudI%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/lFf6LLrQjYldcZItzOkGmMMigP7.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/lFf6LLrQjYldcZItzOkGmMMigP7.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=336&width=225&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2FlFf6LLrQjYldcZItzOkGmMMigP7%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/Rb7sga832Cyqvafd7CqOzbwdK4.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/Rb7sga832Cyqvafd7CqOzbwdK4.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=336&width=225&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2FRb7sga832Cyqvafd7CqOzbwdK4%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/4z0ywuL3btruvjDaWm5nR86BoR5.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/4z0ywuL3btruvjDaWm5nR86BoR5.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=336&width=225&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2F4z0ywuL3btruvjDaWm5nR86BoR5%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/16x97H9o5q4pfdipsutaNHIylhT.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/16x97H9o5q4pfdipsutaNHIylhT.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=336&width=225&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2F16x97H9o5q4pfdipsutaNHIylhT%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/fEuS3tP97jhE0AnJPv54VUzTmRw.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/fEuS3tP97jhE0AnJPv54VUzTmRw.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=336&width=225&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2FfEuS3tP97jhE0AnJPv54VUzTmRw%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/zoIJh4wTfnoIeKl8qzZRIIrNmKD.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/zoIJh4wTfnoIeKl8qzZRIIrNmKD.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=336&width=225&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2FzoIJh4wTfnoIeKl8qzZRIIrNmKD%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/jKDYNC9cW0bvctV4JNzwkIN6rj6.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/jKDYNC9cW0bvctV4JNzwkIN6rj6.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=336&width=225&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2FjKDYNC9cW0bvctV4JNzwkIN6rj6%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/rDFpBfO70Z8UyXDvmXeGy486NLm.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/rDFpBfO70Z8UyXDvmXeGy486NLm.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=336&width=225&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2FrDFpBfO70Z8UyXDvmXeGy486NLm%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/w5O3VVeG3jIR62IVbNMvFKY0p1Q.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/w5O3VVeG3jIR62IVbNMvFKY0p1Q.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=336&width=225&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2Fw5O3VVeG3jIR62IVbNMvFKY0p1Q%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/yMEJr7LBZcwOSR0S3VHa23cmEJ8.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/yMEJr7LBZcwOSR0S3VHa23cmEJ8.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=336&width=225&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2FyMEJr7LBZcwOSR0S3VHa23cmEJ8%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/4Jc2JT1oB1mB0FLhi3axhpdxs6w.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/4Jc2JT1oB1mB0FLhi3axhpdxs6w.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=336&width=225&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2F4Jc2JT1oB1mB0FLhi3axhpdxs6w%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/1yFd096gA4Q0WGlczWTZOSrRgH6.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/1yFd096gA4Q0WGlczWTZOSrRgH6.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=336&width=225&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2F1yFd096gA4Q0WGlczWTZOSrRgH6%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/ywr2xAMFCT3spqdsumRhm9RdWx9.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/ywr2xAMFCT3spqdsumRhm9RdWx9.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=336&width=225&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2Fywr2xAMFCT3spqdsumRhm9RdWx9%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/cGX8ELIx2USdm0xBnoqKxCRiAo1.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/cGX8ELIx2USdm0xBnoqKxCRiAo1.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=336&width=225&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2FcGX8ELIx2USdm0xBnoqKxCRiAo1%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/5KzBlAtnc3gcVGhyPzQx8ILPJLu.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/5KzBlAtnc3gcVGhyPzQx8ILPJLu.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=336&width=225&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2F5KzBlAtnc3gcVGhyPzQx8ILPJLu%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/bcu0M7tbUoALuNVM3TdWf9SxMgr.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/bcu0M7tbUoALuNVM3TdWf9SxMgr.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=336&width=225&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2Fbcu0M7tbUoALuNVM3TdWf9SxMgr%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/cVeI2AdVWm2MwhEAHGSgUHBzosK.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/cVeI2AdVWm2MwhEAHGSgUHBzosK.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=336&width=225&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2FcVeI2AdVWm2MwhEAHGSgUHBzosK%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/kS9X2otUuFnEh7fwlbf1N9fmGd9.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/kS9X2otUuFnEh7fwlbf1N9fmGd9.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=336&width=225&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2FkS9X2otUuFnEh7fwlbf1N9fmGd9%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/e8fi93S1ZOdne7bJLX0Lqeh9xjp.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/e8fi93S1ZOdne7bJLX0Lqeh9xjp.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=336&width=225&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2Fe8fi93S1ZOdne7bJLX0Lqeh9xjp%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/8qIBf4bMIi4nCnfe76IJ8SH8pPt.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/8qIBf4bMIi4nCnfe76IJ8SH8pPt.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=336&width=225&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2F8qIBf4bMIi4nCnfe76IJ8SH8pPt%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/bIvSGN51OCnHJd4rPvudjccN6rj.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/bIvSGN51OCnHJd4rPvudjccN6rj.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=336&width=225&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2FbIvSGN51OCnHJd4rPvudjccN6rj%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/bRVWAMzeS0YO5qAg3GMPLAmCFw5.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/bRVWAMzeS0YO5qAg3GMPLAmCFw5.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=336&width=225&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2FbRVWAMzeS0YO5qAg3GMPLAmCFw5%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/quhj8sxn8tpbXovYB6TAbSUUva9.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/quhj8sxn8tpbXovYB6TAbSUUva9.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=336&width=225&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2Fquhj8sxn8tpbXovYB6TAbSUUva9%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/xxDrJdtdMGpnxDBo0UInLVvVXGS.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/xxDrJdtdMGpnxDBo0UInLVvVXGS.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=336&width=225&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2FxxDrJdtdMGpnxDBo0UInLVvVXGS%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/zKgPRcXiJZph1gU4dA7WQLlSbS.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/zKgPRcXiJZph1gU4dA7WQLlSbS.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=336&width=225&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2FzKgPRcXiJZph1gU4dA7WQLlSbS%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/yeHCzn9K7g9NzPUpEmPnGCZyrtd.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/yeHCzn9K7g9NzPUpEmPnGCZyrtd.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=336&width=225&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2FyeHCzn9K7g9NzPUpEmPnGCZyrtd%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/x3B7SjmBSuCiXGwB7JEm1tYDg7m.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/x3B7SjmBSuCiXGwB7JEm1tYDg7m.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=336&width=225&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2Fx3B7SjmBSuCiXGwB7JEm1tYDg7m%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/jmDq8z3tI8E1W3vGeNu3OACW0mH.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/jmDq8z3tI8E1W3vGeNu3OACW0mH.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=336&width=225&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2FjmDq8z3tI8E1W3vGeNu3OACW0mH%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/8DxAqOPaHGVPd9dHCcYU8NBrO7U.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/8DxAqOPaHGVPd9dHCcYU8NBrO7U.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=336&width=225&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2F8DxAqOPaHGVPd9dHCcYU8NBrO7U%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/g3qlMCAeBZTJvUaA2SKRlTnXiem.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/g3qlMCAeBZTJvUaA2SKRlTnXiem.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=336&width=225&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2Fg3qlMCAeBZTJvUaA2SKRlTnXiem%2Ejpg"
          },
          {
            key: "https://m.media-amazon.com/images/M/MV5BZDI5YzJhODQtMzQyNy00YWNmLWIxMjUtNDBjNjA5YWRjMzExXkEyXkFqcGc@._V1_.jpg",
            provider: "imdb",
            ratingKey: "https://m.media-amazon.com/images/M/MV5BZDI5YzJhODQtMzQyNy00YWNmLWIxMjUtNDBjNjA5YWRjMzExXkEyXkFqcGc@._V1_.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=336&width=225&minSize=1&upscale=1&url=https%3A%2F%2Fm%2Emedia-amazon%2Ecom%2Fimages%2FM%2FMV5BZDI5YzJhODQtMzQyNy00YWNmLWIxMjUtNDBjNjA5YWRjMzExXkEyXkFqcGc%40%2E_V1_%2Ejpg"
          },
          {
            key: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/61bc6bbbea3f4.jpg",
            provider: "tvdb",
            ratingKey: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/61bc6bbbea3f4.jpg",
            selected: false,
            thumb: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/61bc6bbbea3f4_t.jpg"
          },
          {
            key: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/621096b26f0e2.jpg",
            provider: "tvdb",
            ratingKey: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/621096b26f0e2.jpg",
            selected: false,
            thumb: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/621096b26f0e2_t.jpg"
          },
          {
            key: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/6789c55a1aca8.jpg",
            provider: "tvdb",
            ratingKey: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/6789c55a1aca8.jpg",
            selected: false,
            thumb: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/6789c55a1aca8_t.jpg"
          },
          {
            key: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/61f96b06c49b1.jpg",
            provider: "tvdb",
            ratingKey: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/61f96b06c49b1.jpg",
            selected: false,
            thumb: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/61f96b06c49b1_t.jpg"
          },
          {
            key: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/6754a1fd5838f.jpg",
            provider: "tvdb",
            ratingKey: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/6754a1fd5838f.jpg",
            selected: false,
            thumb: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/6754a1fd5838f_t.jpg"
          },
          {
            key: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/67549f903bfa6.jpg",
            provider: "tvdb",
            ratingKey: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/67549f903bfa6.jpg",
            selected: false,
            thumb: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/67549f903bfa6_t.jpg"
          },
          {
            key: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/621095a04d1d0.jpg",
            provider: "tvdb",
            ratingKey: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/621095a04d1d0.jpg",
            selected: false,
            thumb: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/621095a04d1d0_t.jpg"
          },
          {
            key: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/6262c5c20b970.jpg",
            provider: "tvdb",
            ratingKey: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/6262c5c20b970.jpg",
            selected: false,
            thumb: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/6262c5c20b970_t.jpg"
          },
          {
            key: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/6262c5e9487b9.jpg",
            provider: "tvdb",
            ratingKey: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/6262c5e9487b9.jpg",
            selected: false,
            thumb: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/6262c5e9487b9_t.jpg"
          },
          {
            key: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/6262c6202f5e9.jpg",
            provider: "tvdb",
            ratingKey: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/6262c6202f5e9.jpg",
            selected: false,
            thumb: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/6262c6202f5e9_t.jpg"
          },
          {
            key: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/64366ef99195f.jpg",
            provider: "tvdb",
            ratingKey: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/64366ef99195f.jpg",
            selected: false,
            thumb: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/64366ef99195f_t.jpg"
          },
          {
            key: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/67660d6a30f05.jpg",
            provider: "tvdb",
            ratingKey: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/67660d6a30f05.jpg",
            selected: false,
            thumb: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/67660d6a30f05_t.jpg"
          },
          {
            key: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/6789bac7996e4.jpg",
            provider: "tvdb",
            ratingKey: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/6789bac7996e4.jpg",
            selected: false,
            thumb: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/6789bac7996e4_t.jpg"
          },
          {
            key: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/678ab4b256383.jpg",
            provider: "tvdb",
            ratingKey: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/678ab4b256383.jpg",
            selected: false,
            thumb: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/678ab4b256383_t.jpg"
          },
          {
            key: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/67a3aec3909c5.jpg",
            provider: "tvdb",
            ratingKey: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/67a3aec3909c5.jpg",
            selected: false,
            thumb: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/67a3aec3909c5_t.jpg"
          },
          {
            key: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/67a3aee647f20.jpg",
            provider: "tvdb",
            ratingKey: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/67a3aee647f20.jpg",
            selected: false,
            thumb: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/67a3aee647f20_t.jpg"
          },
          {
            key: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/67a3af3484e65.jpg",
            provider: "tvdb",
            ratingKey: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/67a3af3484e65.jpg",
            selected: false,
            thumb: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/67a3af3484e65_t.jpg"
          },
          {
            key: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/67a89473974e2.jpg",
            provider: "tvdb",
            ratingKey: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/67a89473974e2.jpg",
            selected: false,
            thumb: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/67a89473974e2_t.jpg"
          },
          {
            key: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/67a894a1d5e5e.jpg",
            provider: "tvdb",
            ratingKey: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/67a894a1d5e5e.jpg",
            selected: false,
            thumb: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/67a894a1d5e5e_t.jpg"
          },
          {
            key: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/67ac6c9aa57b2.jpg",
            provider: "tvdb",
            ratingKey: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/67ac6c9aa57b2.jpg",
            selected: false,
            thumb: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/67ac6c9aa57b2_t.jpg"
          },
          {
            key: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/67b1738977675.jpg",
            provider: "tvdb",
            ratingKey: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/67b1738977675.jpg",
            selected: false,
            thumb: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/67b1738977675_t.jpg"
          },
          {
            key: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/67c21eb42b776.jpg",
            provider: "tvdb",
            ratingKey: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/67c21eb42b776.jpg",
            selected: false,
            thumb: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/67c21eb42b776_t.jpg"
          },
          {
            key: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/67cb4645c99fe.jpg",
            provider: "tvdb",
            ratingKey: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/67cb4645c99fe.jpg",
            selected: false,
            thumb: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/67cb4645c99fe_t.jpg"
          },
          {
            key: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/67e21eefe815a.jpg",
            provider: "tvdb",
            ratingKey: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/67e21eefe815a.jpg",
            selected: false,
            thumb: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/67e21eefe815a_t.jpg"
          },
          {
            key: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/677f0edbe1ef1.jpg",
            provider: "tvdb",
            ratingKey: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/677f0edbe1ef1.jpg",
            selected: false,
            thumb: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/677f0edbe1ef1_t.jpg"
          },
          {
            key: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/677f0f54457b9.jpg",
            provider: "tvdb",
            ratingKey: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/677f0f54457b9.jpg",
            selected: false,
            thumb: "https://artworks.thetvdb.com/banners/v4/series/371980/posters/677f0f54457b9_t.jpg"
          },
          {
            key: "http://assets.fanart.tv/fanart/tv/371980/tvposter/severance-6250816dc4374.jpg",
            provider: "fanarttv",
            ratingKey: "http://assets.fanart.tv/fanart/tv/371980/tvposter/severance-6250816dc4374.jpg",
            selected: false,
            thumb: "http://assets.fanart.tv/preview/tv/371980/tvposter/severance-6250816dc4374.jpg"
          },
          {
            key: "http://assets.fanart.tv/fanart/tv/371980/tvposter/severance-678bc7c692456.jpg",
            provider: "fanarttv",
            ratingKey: "http://assets.fanart.tv/fanart/tv/371980/tvposter/severance-678bc7c692456.jpg",
            selected: false,
            thumb: "http://assets.fanart.tv/preview/tv/371980/tvposter/severance-678bc7c692456.jpg"
          },
          {
            key: "http://assets.fanart.tv/fanart/tv/371980/tvposter/severance-67bf38c17586b.jpg",
            provider: "fanarttv",
            ratingKey: "http://assets.fanart.tv/fanart/tv/371980/tvposter/severance-67bf38c17586b.jpg",
            selected: false,
            thumb: "http://assets.fanart.tv/preview/tv/371980/tvposter/severance-67bf38c17586b.jpg"
          },
          {
            key: "http://assets.fanart.tv/fanart/tv/371980/tvposter/severance-67c071ab44d2f.jpg",
            provider: "fanarttv",
            ratingKey: "http://assets.fanart.tv/fanart/tv/371980/tvposter/severance-67c071ab44d2f.jpg",
            selected: false,
            thumb: "http://assets.fanart.tv/preview/tv/371980/tvposter/severance-67c071ab44d2f.jpg"
          },
          {
            key: "http://assets.fanart.tv/fanart/tv/371980/tvposter/severance-62548e5033bec.jpg",
            provider: "fanarttv",
            ratingKey: "http://assets.fanart.tv/fanart/tv/371980/tvposter/severance-62548e5033bec.jpg",
            selected: false,
            thumb: "http://assets.fanart.tv/preview/tv/371980/tvposter/severance-62548e5033bec.jpg"
          },
          {
            key: "http://assets.fanart.tv/fanart/tv/371980/tvposter/severance-67c398f8361f4.jpg",
            provider: "fanarttv",
            ratingKey: "http://assets.fanart.tv/fanart/tv/371980/tvposter/severance-67c398f8361f4.jpg",
            selected: false,
            thumb: "http://assets.fanart.tv/preview/tv/371980/tvposter/severance-67c398f8361f4.jpg"
          },
          {
            key: "http://assets.fanart.tv/fanart/tv/371980/tvposter/severance-67c3990c0b654.jpg",
            provider: "fanarttv",
            ratingKey: "http://assets.fanart.tv/fanart/tv/371980/tvposter/severance-67c3990c0b654.jpg",
            selected: false,
            thumb: "http://assets.fanart.tv/preview/tv/371980/tvposter/severance-67c3990c0b654.jpg"
          },
          {
            key: "https://metadata-static.plex.tv/5/gracenote/538df6c08553929c2fbdbd06b48ed722.jpg",
            provider: "gracenote",
            ratingKey: "https://metadata-static.plex.tv/5/gracenote/538df6c08553929c2fbdbd06b48ed722.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=336&width=225&minSize=1&upscale=1&url=https%3A%2F%2Fmetadata-static%2Eplex%2Etv%2F5%2Fgracenote%2F538df6c08553929c2fbdbd06b48ed722%2Ejpg"
          },
          {
            key: "https://metadata-static.plex.tv/6/gracenote/64b164d9bf22bef2bd4a3e2d916707e2.jpg",
            provider: "gracenote",
            ratingKey: "https://metadata-static.plex.tv/6/gracenote/64b164d9bf22bef2bd4a3e2d916707e2.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=336&width=225&minSize=1&upscale=1&url=https%3A%2F%2Fmetadata-static%2Eplex%2Etv%2F6%2Fgracenote%2F64b164d9bf22bef2bd4a3e2d916707e2%2Ejpg"
          },
          {
            key: "https://metadata-static.plex.tv/0/gracenote/0a9e41720a2d7d01a644118ff7dd1d9a.jpg",
            provider: "gracenote",
            ratingKey: "https://metadata-static.plex.tv/0/gracenote/0a9e41720a2d7d01a644118ff7dd1d9a.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=336&width=225&minSize=1&upscale=1&url=https%3A%2F%2Fmetadata-static%2Eplex%2Etv%2F0%2Fgracenote%2F0a9e41720a2d7d01a644118ff7dd1d9a%2Ejpg"
          },
          {
            key: "https://metadata-static.plex.tv/2/gracenote/29a4808993b1acde4670fa06197df83f.jpg",
            provider: "gracenote",
            ratingKey: "https://metadata-static.plex.tv/2/gracenote/29a4808993b1acde4670fa06197df83f.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=336&width=225&minSize=1&upscale=1&url=https%3A%2F%2Fmetadata-static%2Eplex%2Etv%2F2%2Fgracenote%2F29a4808993b1acde4670fa06197df83f%2Ejpg"
          },
          {
            key: "https://metadata-static.plex.tv/8/gracenote/89190cec9b63f62654f573796f6d7fc7.jpg",
            provider: "gracenote",
            ratingKey: "https://metadata-static.plex.tv/8/gracenote/89190cec9b63f62654f573796f6d7fc7.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=336&width=225&minSize=1&upscale=1&url=https%3A%2F%2Fmetadata-static%2Eplex%2Etv%2F8%2Fgracenote%2F89190cec9b63f62654f573796f6d7fc7%2Ejpg"
          },
          {
            key: "https://metadata-static.plex.tv/9/gracenote/97b10c42ffd9e4c0c08795249eff56ac.jpg",
            provider: "gracenote",
            ratingKey: "https://metadata-static.plex.tv/9/gracenote/97b10c42ffd9e4c0c08795249eff56ac.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=336&width=225&minSize=1&upscale=1&url=https%3A%2F%2Fmetadata-static%2Eplex%2Etv%2F9%2Fgracenote%2F97b10c42ffd9e4c0c08795249eff56ac%2Ejpg"
          }
        ],
        identifier: "com.plexapp.plugins.library",
        mediaTagPrefix: "/system/bundle/media/flags/",
        mediaTagVersion: 1740148659,
        size: 72
      }
    }

    validateResponseSpec("/library/metadata/{ratingKey}/posters", "get", 200, response)
  })
})
