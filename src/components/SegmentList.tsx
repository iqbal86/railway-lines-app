import React from 'react'
import { RailwayLine } from '../types/types'

type SegmentListProps = {
  segments: RailwayLine[]
  onEditSegment: (segment: RailwayLine[]) => void
  onDeleteSegment: (segment: RailwayLine) => void
}

const SegmentList = ({
  segments,
  onEditSegment,
  onDeleteSegment,
}: SegmentListProps) => {
  return (
    <div>
      <h2>Segment List</h2>
      <ul>
        {segments.map((segment, index) => (
          <li key={index}>
            <span>
              Yard Name: {segment.properties.YARDNAME}, KM:{' '}
              {segment.properties.KM}
            </span>
            <button onClick={() => onEditSegment([segment])}>Edit</button>
            <button onClick={() => onDeleteSegment(segment)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SegmentList
