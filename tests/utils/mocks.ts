import { randNumber, randRecentDate, randUuid } from "@ngneat/falso"

export function randUUID() {
  return randUuid()
}

export function randPlexUnixEpoch() {
  const date = randRecentDate()
  return Math.floor(date.getTime() / 1000)
}

export function randRelativeSeconds() {
  return randNumber({ min: 1000, max: 100000 })
}
