import { useState } from 'react'
import { MapProps } from '../types/types'

type SegmentProps = Omit<MapProps, 'onLineHover'>

const SegmentEditor = ({ lines }: SegmentProps) => {
  const [selectedLines, setSelectedLines] = useState<number[]>([])

  const toggleLine = (index: number) => {
    setSelectedLines((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    )
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
      <button
        onClick={() =>
          console.log(
            'Segment created:',
            selectedLines.map((i) => lines[i]),
          )
        }
      >
        Create Segment
      </button>
    </div>
  )
}

export default SegmentEditor
