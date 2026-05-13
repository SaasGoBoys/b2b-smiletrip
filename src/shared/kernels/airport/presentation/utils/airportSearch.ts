import type { AirportEntity } from '../../domain/entities/AirportEntity'

type AirportSearchBlock =
  | { kind: 'flat'; items: AirportEntity[] }
  | { kind: 'cityGroup'; city: AirportEntity; subs: AirportEntity[] }

const isSubAirportRow = (t: AirportEntity['type']) => t === 'sub-airport' || t === 'sub-city'

export function groupAirportSearchResults(airports: AirportEntity[]): AirportSearchBlock[] {
  const blocks: AirportSearchBlock[] = []
  const flatBuf: AirportEntity[] = []

  const flushFlat = () => {
    if (flatBuf.length) {
      blocks.push({ kind: 'flat', items: [...flatBuf] })
      flatBuf.length = 0
    }
  }

  let i = 0
  while (i < airports.length) {
    const row = airports[i]
    if (row.type === 'airport') {
      flatBuf.push(row)
      i += 1
      continue
    }
    flushFlat()
    if (row.type === 'city') {
      const city = row
      i += 1
      const subs: AirportEntity[] = []
      while (i < airports.length && isSubAirportRow(airports[i].type)) {
        subs.push(airports[i])
        i += 1
      }
      blocks.push({ kind: 'cityGroup', city, subs })
      continue
    }
    if (isSubAirportRow(row.type)) {
      flatBuf.push(row)
      i += 1
      continue
    }
    i += 1
  }
  flushFlat()
  return blocks
}
