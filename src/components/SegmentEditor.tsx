/* eslint-disable react-refresh/only-export-components */
import { useState } from 'react'
import { RailwayLine } from '../types/types'

type SegmentProps = {
  lines: RailwayLine[]
  onCreateSegment: (segment: RailwayLine[]) => void
}

export const areLinesConnected = (lines: RailwayLine[]): boolean => {
  if (lines.length < 2) return true // Single line or empty list is always connected

  const isConnected = (lineA: RailwayLine, lineB: RailwayLine): boolean => {
    const endPointA = lineA.coordinates[lineA.coordinates.length - 1]
    const startPointB = lineB.coordinates[0]
    return endPointA[0] === startPointB[0] && endPointA[1] === startPointB[1]
  }

  for (let i = 0; i < lines.length - 1; i++) {
    if (!isConnected(lines[i], lines[i + 1])) {
      console.log('lines dont connect')
      return false // If any pair is not connected, return false
    }
  }
  console.log('lines connect')
  return true // All lines are connected in sequence
}

const SegmentEditor = ({ lines, onCreateSegment }: SegmentProps) => {
  const [selectedLines, setSelectedLines] = useState<number[]>([])

  const toggleLine = (index: number) => {
    setSelectedLines((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    )
  }

  const handleCreateSegment = () => {
    const selected = selectedLines.map((i) => lines[i])
    if (areLinesConnected(selected)) {
      onCreateSegment(selected)
    } else {
      alert('Selected lines do not form a connected path.')
    }
  }

  return (
    <div>
      <h2>Segment Editor</h2>
      <ul>
        {lines.map((line, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={selectedLines.includes(index)}
              onChange={() => toggleLine(index)}
            />
            Segment {index + 1} - {line.properties.YARDNAME}
          </li>
        ))}
      </ul>
      <button onClick={handleCreateSegment}>Create Segment</button>
    </div>
  )
}

export default SegmentEditor
