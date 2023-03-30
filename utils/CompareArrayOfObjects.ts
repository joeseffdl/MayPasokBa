import { scheduleProps } from "./types"

import { isEqual } from "lodash"

export function CompareArraysOfObjects(a: scheduleProps[], b: scheduleProps[]): boolean {
  if (a.length !== b.length) {
    return false
  }

  a = a.sort((x, y) => x.id - y.id)
  b = b.sort((x, y) => x.id - y.id)

  for (let i = 0; i < a.length; i++) {
    if (!isEqual(a[i], b[i])) {
      return false
    }
  }

  return true
}
