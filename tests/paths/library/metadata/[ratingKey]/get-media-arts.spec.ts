import { validateResponseSpec } from "@utils"
import { describe, it } from "vitest"

describe("GET /library/metadata/[RatingKey]/arts", () => {
  it("should have a valid spec for a 200 response", () => {
    const response = {
      MediaContainer: {
        Metadata: [
          {
            key: "https://image.tmdb.org/t/p/original/ixgFmf1X59PUZam2qbAfskx2gQr.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/ixgFmf1X59PUZam2qbAfskx2gQr.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=270&width=480&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2FixgFmf1X59PUZam2qbAfskx2gQr%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/nNt41AqlnyLMgtiyfiVuS2O8ES9.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/nNt41AqlnyLMgtiyfiVuS2O8ES9.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=270&width=480&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2FnNt41AqlnyLMgtiyfiVuS2O8ES9%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/npD65vPa4vvn1ZHpp3o05A5vdKT.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/npD65vPa4vvn1ZHpp3o05A5vdKT.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=270&width=480&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2FnpD65vPa4vvn1ZHpp3o05A5vdKT%2Ejpg"
          },
          {
            key: "/library/metadata/16099/file?url=metadata%3A%2F%2Fart%2Ftv%2Eplex%2Eagents%2Eseries_23b0f539f808ed931a85685f51fb440e44ed354f",
            provider: "tmdb",
            ratingKey: "metadata://art/tv.plex.agents.series_23b0f539f808ed931a85685f51fb440e44ed354f",
            selected: true,
            thumb: "/library/metadata/16099/file?url=metadata%3A%2F%2Fart%2Ftv%2Eplex%2Eagents%2Eseries_23b0f539f808ed931a85685f51fb440e44ed354f"
          },
          {
            key: "https://image.tmdb.org/t/p/original/r9KaBE7i4ovg8uSppQrCp6ZdPD9.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/r9KaBE7i4ovg8uSppQrCp6ZdPD9.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=270&width=480&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2Fr9KaBE7i4ovg8uSppQrCp6ZdPD9%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/5OsiT39OiZNdD0v2LiAcI2TpSYj.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/5OsiT39OiZNdD0v2LiAcI2TpSYj.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=270&width=480&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2F5OsiT39OiZNdD0v2LiAcI2TpSYj%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/8hQA04JLNolV9xfvMkaYg3Hg08w.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/8hQA04JLNolV9xfvMkaYg3Hg08w.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=270&width=480&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2F8hQA04JLNolV9xfvMkaYg3Hg08w%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/kcehRTOk6xwmcCqKBbbwB68Eo5z.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/kcehRTOk6xwmcCqKBbbwB68Eo5z.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=270&width=480&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2FkcehRTOk6xwmcCqKBbbwB68Eo5z%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/nFWN7E5n170YN8SdxekuDEv0qTE.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/nFWN7E5n170YN8SdxekuDEv0qTE.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=270&width=480&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2FnFWN7E5n170YN8SdxekuDEv0qTE%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/8TJnaPnSPkjQwwz07UgQcYEggVi.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/8TJnaPnSPkjQwwz07UgQcYEggVi.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=270&width=480&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2F8TJnaPnSPkjQwwz07UgQcYEggVi%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/bs7bXuCCI0cmSNounTs7tynj6wu.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/bs7bXuCCI0cmSNounTs7tynj6wu.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=270&width=480&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2Fbs7bXuCCI0cmSNounTs7tynj6wu%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/i0Dtlqn54sSiUhPPNgG8HZy7OoJ.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/i0Dtlqn54sSiUhPPNgG8HZy7OoJ.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=270&width=480&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2Fi0Dtlqn54sSiUhPPNgG8HZy7OoJ%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/lCFMJJ7SfjQLMJjkdcy6KOzqgZa.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/lCFMJJ7SfjQLMJjkdcy6KOzqgZa.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=270&width=480&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2FlCFMJJ7SfjQLMJjkdcy6KOzqgZa%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/nUhMmPHnLFr2583Qea2NF8uUQVH.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/nUhMmPHnLFr2583Qea2NF8uUQVH.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=270&width=480&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2FnUhMmPHnLFr2583Qea2NF8uUQVH%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/q0cj4AIOCFb1WS94bu7nfrcgDXY.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/q0cj4AIOCFb1WS94bu7nfrcgDXY.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=270&width=480&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2Fq0cj4AIOCFb1WS94bu7nfrcgDXY%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/ecl98P5f0S9rrZjTDHhuz1yEZA3.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/ecl98P5f0S9rrZjTDHhuz1yEZA3.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=270&width=480&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2Fecl98P5f0S9rrZjTDHhuz1yEZA3%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/nVooFYJZ7Ncxgz7gAKUop4dULXG.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/nVooFYJZ7Ncxgz7gAKUop4dULXG.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=270&width=480&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2FnVooFYJZ7Ncxgz7gAKUop4dULXG%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/9xDCTGhEWpz206PCiimRGmK67rV.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/9xDCTGhEWpz206PCiimRGmK67rV.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=270&width=480&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2F9xDCTGhEWpz206PCiimRGmK67rV%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/cgJAEz6JDLLVF6tKLo8igRZU5Oy.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/cgJAEz6JDLLVF6tKLo8igRZU5Oy.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=270&width=480&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2FcgJAEz6JDLLVF6tKLo8igRZU5Oy%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/qMyJkIcATHJxTOtjusX9E4hjoPJ.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/qMyJkIcATHJxTOtjusX9E4hjoPJ.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=270&width=480&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2FqMyJkIcATHJxTOtjusX9E4hjoPJ%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/k90HW0I203WXKZIDwt8RXGDYYmV.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/k90HW0I203WXKZIDwt8RXGDYYmV.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=270&width=480&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2Fk90HW0I203WXKZIDwt8RXGDYYmV%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/w6LnH9Och1wIaaApD48Q6CqjPCl.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/w6LnH9Och1wIaaApD48Q6CqjPCl.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=270&width=480&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2Fw6LnH9Och1wIaaApD48Q6CqjPCl%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/27g2roB8PK9V66eKoL9n9DTUdPL.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/27g2roB8PK9V66eKoL9n9DTUdPL.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=270&width=480&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2F27g2roB8PK9V66eKoL9n9DTUdPL%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/rjAQsvG6d07DXhBi6Gzk06EIIzP.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/rjAQsvG6d07DXhBi6Gzk06EIIzP.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=270&width=480&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2FrjAQsvG6d07DXhBi6Gzk06EIIzP%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/sWzkGeXML9qAHfzSHCxYoamcSeM.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/sWzkGeXML9qAHfzSHCxYoamcSeM.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=270&width=480&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2FsWzkGeXML9qAHfzSHCxYoamcSeM%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/wIXpTihVlolFMHWMi7qrj1gBudP.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/wIXpTihVlolFMHWMi7qrj1gBudP.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=270&width=480&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2FwIXpTihVlolFMHWMi7qrj1gBudP%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/vmnWRlrjdYjxPcq6pLLsQG1bEZ3.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/vmnWRlrjdYjxPcq6pLLsQG1bEZ3.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=270&width=480&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2FvmnWRlrjdYjxPcq6pLLsQG1bEZ3%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/iemgmESTakK5gYmTiZM3p8WIRXv.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/iemgmESTakK5gYmTiZM3p8WIRXv.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=270&width=480&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2FiemgmESTakK5gYmTiZM3p8WIRXv%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/dsMQSCOC9ReOUx0w6E1GMBMeLKS.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/dsMQSCOC9ReOUx0w6E1GMBMeLKS.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=270&width=480&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2FdsMQSCOC9ReOUx0w6E1GMBMeLKS%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/bkYO7aDVkGNBygTGLtwJA97Kif.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/bkYO7aDVkGNBygTGLtwJA97Kif.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=270&width=480&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2FbkYO7aDVkGNBygTGLtwJA97Kif%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/rsKj3i0zBXuTxciUAJg8LgdzdIy.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/rsKj3i0zBXuTxciUAJg8LgdzdIy.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=270&width=480&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2FrsKj3i0zBXuTxciUAJg8LgdzdIy%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/6PjOfFhUETUYhSPP8pxl1s8Fka5.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/6PjOfFhUETUYhSPP8pxl1s8Fka5.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=270&width=480&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2F6PjOfFhUETUYhSPP8pxl1s8Fka5%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/7Kx4BVOFnDsrjhpGtdLccD1oE7r.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/7Kx4BVOFnDsrjhpGtdLccD1oE7r.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=270&width=480&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2F7Kx4BVOFnDsrjhpGtdLccD1oE7r%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/9OYzrmgWduh7ovxs0TizKu4Aw3z.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/9OYzrmgWduh7ovxs0TizKu4Aw3z.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=270&width=480&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2F9OYzrmgWduh7ovxs0TizKu4Aw3z%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/9qL2sbPJPsGBjRRquv7Mvb05v9y.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/9qL2sbPJPsGBjRRquv7Mvb05v9y.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=270&width=480&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2F9qL2sbPJPsGBjRRquv7Mvb05v9y%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/mQYvRc31w26pDsdLOPwJ6YMiuxh.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/mQYvRc31w26pDsdLOPwJ6YMiuxh.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=270&width=480&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2FmQYvRc31w26pDsdLOPwJ6YMiuxh%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/oBGwwDIFg059uNmfxSQywCQQA8Y.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/oBGwwDIFg059uNmfxSQywCQQA8Y.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=270&width=480&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2FoBGwwDIFg059uNmfxSQywCQQA8Y%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/tRuNdLP2DmnHhwJfgF7MVD9dZJD.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/tRuNdLP2DmnHhwJfgF7MVD9dZJD.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=270&width=480&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2FtRuNdLP2DmnHhwJfgF7MVD9dZJD%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/2xTuX7uvouUt2oriSFNAGh55zCX.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/2xTuX7uvouUt2oriSFNAGh55zCX.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=270&width=480&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2F2xTuX7uvouUt2oriSFNAGh55zCX%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/3FsrNUHYwz1qU5x9D7vj4Mfely0.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/3FsrNUHYwz1qU5x9D7vj4Mfely0.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=270&width=480&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2F3FsrNUHYwz1qU5x9D7vj4Mfely0%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/6fvWjcfSYZMsuULueXNMeGFsu34.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/6fvWjcfSYZMsuULueXNMeGFsu34.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=270&width=480&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2F6fvWjcfSYZMsuULueXNMeGFsu34%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/96QoVgLU7AYjIpkidDCwQMxq8DW.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/96QoVgLU7AYjIpkidDCwQMxq8DW.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=270&width=480&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2F96QoVgLU7AYjIpkidDCwQMxq8DW%2Ejpg"
          },
          {
            key: "https://image.tmdb.org/t/p/original/Xap8MtJ8LN9NV9G9bYO7PMafxd.jpg",
            provider: "tmdb",
            ratingKey: "https://image.tmdb.org/t/p/original/Xap8MtJ8LN9NV9G9bYO7PMafxd.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=270&width=480&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2FXap8MtJ8LN9NV9G9bYO7PMafxd%2Ejpg"
          },
          {
            key: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/61bdee7c62d99.jpg",
            provider: "tvdb",
            ratingKey: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/61bdee7c62d99.jpg",
            selected: false,
            thumb: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/61bdee7c62d99_t.jpg"
          },
          {
            key: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/6210954239790.jpg",
            provider: "tvdb",
            ratingKey: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/6210954239790.jpg",
            selected: false,
            thumb: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/6210954239790_t.jpg"
          },
          {
            key: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/61bdee7812467.jpg",
            provider: "tvdb",
            ratingKey: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/61bdee7812467.jpg",
            selected: false,
            thumb: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/61bdee7812467_t.jpg"
          },
          {
            key: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/620f5694e2d68.jpg",
            provider: "tvdb",
            ratingKey: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/620f5694e2d68.jpg",
            selected: false,
            thumb: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/620f5694e2d68_t.jpg"
          },
          {
            key: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/6210951dc1a8f.jpg",
            provider: "tvdb",
            ratingKey: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/6210951dc1a8f.jpg",
            selected: false,
            thumb: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/6210951dc1a8f_t.jpg"
          },
          {
            key: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/678a20fd3a0b1.jpg",
            provider: "tvdb",
            ratingKey: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/678a20fd3a0b1.jpg",
            selected: false,
            thumb: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/678a20fd3a0b1_t.jpg"
          },
          {
            key: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/61bdee7477c9a.jpg",
            provider: "tvdb",
            ratingKey: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/61bdee7477c9a.jpg",
            selected: false,
            thumb: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/61bdee7477c9a_t.jpg"
          },
          {
            key: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/62390314bc257.jpg",
            provider: "tvdb",
            ratingKey: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/62390314bc257.jpg",
            selected: false,
            thumb: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/62390314bc257_t.jpg"
          },
          {
            key: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/6754a61428bd3.jpg",
            provider: "tvdb",
            ratingKey: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/6754a61428bd3.jpg",
            selected: false,
            thumb: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/6754a61428bd3_t.jpg"
          },
          {
            key: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/678a1383d6b23.jpg",
            provider: "tvdb",
            ratingKey: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/678a1383d6b23.jpg",
            selected: false,
            thumb: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/678a1383d6b23_t.jpg"
          },
          {
            key: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/620f529b23056.jpg",
            provider: "tvdb",
            ratingKey: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/620f529b23056.jpg",
            selected: false,
            thumb: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/620f529b23056_t.jpg"
          },
          {
            key: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/6789c64c2459b.jpg",
            provider: "tvdb",
            ratingKey: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/6789c64c2459b.jpg",
            selected: false,
            thumb: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/6789c64c2459b_t.jpg"
          },
          {
            key: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/678a12fded049.jpg",
            provider: "tvdb",
            ratingKey: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/678a12fded049.jpg",
            selected: false,
            thumb: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/678a12fded049_t.jpg"
          },
          {
            key: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/63d2bce8eabf6.jpg",
            provider: "tvdb",
            ratingKey: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/63d2bce8eabf6.jpg",
            selected: false,
            thumb: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/63d2bce8eabf6_t.jpg"
          },
          {
            key: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/63de0ed770ffb.jpg",
            provider: "tvdb",
            ratingKey: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/63de0ed770ffb.jpg",
            selected: false,
            thumb: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/63de0ed770ffb_t.jpg"
          },
          {
            key: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/63de0ee939fdf.jpg",
            provider: "tvdb",
            ratingKey: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/63de0ee939fdf.jpg",
            selected: false,
            thumb: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/63de0ee939fdf_t.jpg"
          },
          {
            key: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/63de0ef717079.jpg",
            provider: "tvdb",
            ratingKey: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/63de0ef717079.jpg",
            selected: false,
            thumb: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/63de0ef717079_t.jpg"
          },
          {
            key: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/64ce618ea8e2a.jpg",
            provider: "tvdb",
            ratingKey: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/64ce618ea8e2a.jpg",
            selected: false,
            thumb: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/64ce618ea8e2a_t.jpg"
          },
          {
            key: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/675d7650e7990.jpg",
            provider: "tvdb",
            ratingKey: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/675d7650e7990.jpg",
            selected: false,
            thumb: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/675d7650e7990_t.jpg"
          },
          {
            key: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/6781b0ca0ec76.jpg",
            provider: "tvdb",
            ratingKey: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/6781b0ca0ec76.jpg",
            selected: false,
            thumb: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/6781b0ca0ec76_t.jpg"
          },
          {
            key: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/6789baeab23b2.jpg",
            provider: "tvdb",
            ratingKey: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/6789baeab23b2.jpg",
            selected: false,
            thumb: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/6789baeab23b2_t.jpg"
          },
          {
            key: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/678aafe6b8833.jpg",
            provider: "tvdb",
            ratingKey: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/678aafe6b8833.jpg",
            selected: false,
            thumb: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/678aafe6b8833_t.jpg"
          },
          {
            key: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/67c53405106f8.jpg",
            provider: "tvdb",
            ratingKey: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/67c53405106f8.jpg",
            selected: false,
            thumb: "https://artworks.thetvdb.com/banners/v4/series/371980/backgrounds/67c53405106f8_t.jpg"
          },
          {
            key: "http://assets.fanart.tv/fanart/tv/371980/tvthumb/severance-625081203f8b5.jpg",
            provider: "fanarttv",
            ratingKey: "http://assets.fanart.tv/fanart/tv/371980/tvthumb/severance-625081203f8b5.jpg",
            selected: false,
            thumb: "http://assets.fanart.tv/preview/tv/371980/tvthumb/severance-625081203f8b5.jpg"
          },
          {
            key: "http://assets.fanart.tv/fanart/tv/371980/showbackground/severance-62508194a4755.jpg",
            provider: "fanarttv",
            ratingKey: "http://assets.fanart.tv/fanart/tv/371980/showbackground/severance-62508194a4755.jpg",
            selected: false,
            thumb: "http://assets.fanart.tv/preview/tv/371980/showbackground/severance-62508194a4755.jpg"
          },
          {
            key: "http://assets.fanart.tv/fanart/tv/371980/showbackground/severance-678bc71b9762f.jpg",
            provider: "fanarttv",
            ratingKey: "http://assets.fanart.tv/fanart/tv/371980/showbackground/severance-678bc71b9762f.jpg",
            selected: false,
            thumb: "http://assets.fanart.tv/preview/tv/371980/showbackground/severance-678bc71b9762f.jpg"
          },
          {
            key: "http://assets.fanart.tv/fanart/tv/371980/showbackground/severance-6250818dc6cb7.jpg",
            provider: "fanarttv",
            ratingKey: "http://assets.fanart.tv/fanart/tv/371980/showbackground/severance-6250818dc6cb7.jpg",
            selected: false,
            thumb: "http://assets.fanart.tv/preview/tv/371980/showbackground/severance-6250818dc6cb7.jpg"
          },
          {
            key: "http://assets.fanart.tv/fanart/tv/371980/showbackground/severance-678a95bf8ed1e.jpg",
            provider: "fanarttv",
            ratingKey: "http://assets.fanart.tv/fanart/tv/371980/showbackground/severance-678a95bf8ed1e.jpg",
            selected: false,
            thumb: "http://assets.fanart.tv/preview/tv/371980/showbackground/severance-678a95bf8ed1e.jpg"
          },
          {
            key: "http://assets.fanart.tv/fanart/tv/371980/tvthumb/severance-6228ead490205.jpg",
            provider: "fanarttv",
            ratingKey: "http://assets.fanart.tv/fanart/tv/371980/tvthumb/severance-6228ead490205.jpg",
            selected: false,
            thumb: "http://assets.fanart.tv/preview/tv/371980/tvthumb/severance-6228ead490205.jpg"
          },
          {
            key: "http://assets.fanart.tv/fanart/tv/371980/showbackground/severance-678a95bdae96d.jpg",
            provider: "fanarttv",
            ratingKey: "http://assets.fanart.tv/fanart/tv/371980/showbackground/severance-678a95bdae96d.jpg",
            selected: false,
            thumb: "http://assets.fanart.tv/preview/tv/371980/showbackground/severance-678a95bdae96d.jpg"
          },
          {
            key: "https://metadata-static.plex.tv/6/gracenote/6a2f7f07f2b0e30dcf830f27838d9f58.jpg",
            provider: "gracenote",
            ratingKey: "https://metadata-static.plex.tv/6/gracenote/6a2f7f07f2b0e30dcf830f27838d9f58.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=270&width=480&minSize=1&upscale=1&url=https%3A%2F%2Fmetadata-static%2Eplex%2Etv%2F6%2Fgracenote%2F6a2f7f07f2b0e30dcf830f27838d9f58%2Ejpg"
          },
          {
            key: "https://metadata-static.plex.tv/a/gracenote/adb0b6b4bf6fb581e37568a647ddb971.jpg",
            provider: "gracenote",
            ratingKey: "https://metadata-static.plex.tv/a/gracenote/adb0b6b4bf6fb581e37568a647ddb971.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=270&width=480&minSize=1&upscale=1&url=https%3A%2F%2Fmetadata-static%2Eplex%2Etv%2Fa%2Fgracenote%2Fadb0b6b4bf6fb581e37568a647ddb971%2Ejpg"
          },
          {
            key: "https://metadata-static.plex.tv/f/gracenote/ff49ff49bf29cb66ba5ed4bd4492cc69.jpg",
            provider: "gracenote",
            ratingKey: "https://metadata-static.plex.tv/f/gracenote/ff49ff49bf29cb66ba5ed4bd4492cc69.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=270&width=480&minSize=1&upscale=1&url=https%3A%2F%2Fmetadata-static%2Eplex%2Etv%2Ff%2Fgracenote%2Fff49ff49bf29cb66ba5ed4bd4492cc69%2Ejpg"
          },
          {
            key: "https://metadata-static.plex.tv/6/gracenote/6de9d707b85f4031b309d537ab6647c8.jpg",
            provider: "gracenote",
            ratingKey: "https://metadata-static.plex.tv/6/gracenote/6de9d707b85f4031b309d537ab6647c8.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=270&width=480&minSize=1&upscale=1&url=https%3A%2F%2Fmetadata-static%2Eplex%2Etv%2F6%2Fgracenote%2F6de9d707b85f4031b309d537ab6647c8%2Ejpg"
          },
          {
            key: "https://metadata-static.plex.tv/d/gracenote/dde72a761b604ca3ab08ff47f8f4cea4.jpg",
            provider: "gracenote",
            ratingKey: "https://metadata-static.plex.tv/d/gracenote/dde72a761b604ca3ab08ff47f8f4cea4.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=270&width=480&minSize=1&upscale=1&url=https%3A%2F%2Fmetadata-static%2Eplex%2Etv%2Fd%2Fgracenote%2Fdde72a761b604ca3ab08ff47f8f4cea4%2Ejpg"
          },
          {
            key: "https://metadata-static.plex.tv/d/gracenote/d29c4d72c2198239d5165141da59daf3.jpg",
            provider: "gracenote",
            ratingKey: "https://metadata-static.plex.tv/d/gracenote/d29c4d72c2198239d5165141da59daf3.jpg",
            selected: false,
            thumb: "https://images.plex.tv/photo?height=270&width=480&minSize=1&upscale=1&url=https%3A%2F%2Fmetadata-static%2Eplex%2Etv%2Fd%2Fgracenote%2Fd29c4d72c2198239d5165141da59daf3%2Ejpg"
          }
        ],
        identifier: "com.plexapp.plugins.library",
        mediaTagPrefix: "/system/bundle/media/flags/",
        mediaTagVersion: 1740148659,
        size: 79
      }
    }

    validateResponseSpec("/library/metadata/{ratingKey}/arts", "get", 200, response)
  })
})
