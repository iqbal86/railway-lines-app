import { areLinesConnected } from './SegmentEditor'
import { RailwayLine } from '../types/types'

// Define sample lines for testing
const line1: RailwayLine = {
  coordinates: [
    [0, 0],
    [1, 1],
  ],
  properties: { YARDNAME: 'Line 1', KM: 10 },
}

const line2: RailwayLine = {
  coordinates: [
    [1, 1],
    [2, 2],
  ],
  properties: { YARDNAME: 'Line 2', KM: 20 },
}

const line3: RailwayLine = {
  coordinates: [
    [2, 2],
    [3, 3],
  ],
  properties: { YARDNAME: 'Line 3', KM: 30 },
}

const disconnectedLine: RailwayLine = {
  coordinates: [
    [4, 4],
    [5, 5],
  ],
  properties: { YARDNAME: 'Disconnected Line', KM: 40 },
}

describe('areLinesConnected', () => {
  it('should return true for a single line', () => {
    expect(areLinesConnected([line1])).toBe(true)
  })

  it('should return true for a connected sequence of lines', () => {
    expect(areLinesConnected([line1, line2, line3])).toBe(true)
  })

  it('should return false for a disconnected sequence of lines', () => {
    expect(areLinesConnected([line1, disconnectedLine])).toBe(false)
  })

  it('should return false for a sequence of lines with a gap', () => {
    const lineWithGap: RailwayLine = {
      coordinates: [
        [3, 3],
        [5, 5],
      ],
      properties: { YARDNAME: 'Line With Gap', KM: 50 },
    }
    expect(areLinesConnected([line1, line2, lineWithGap])).toBe(false)
  })
})
