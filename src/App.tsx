import { useState } from 'react'
import { useRailwayLines } from './hooks/useRailwayLines'
import Map from './components/Map'
import { RailwayLine } from './types/types'
import SegmentEditor from './components/SegmentEditor'
import SegmentList from './components/SegmentList'

const App = () => {
  const { data: lines = [], isLoading } = useRailwayLines() // Provide a default empty array
  const [hoveredLine, setHoveredLine] = useState<RailwayLine | null>(null)
  const [segments, setSegments] = useState<RailwayLine[][]>([])

  if (isLoading) return <div>Loading...</div>

  const handleEditSegment = (segment: RailwayLine[]) => {
    console.log('Edit segment:', segment)
    // Implement segment editing functionality here
  }

  const handleDeleteSegment = (segment: RailwayLine) => {
    setSegments(segments.filter((s) => !s.includes(segment)))
    console.log('Deleted segment:', segment)
  }

  const handleCreateSegment = (newSegment: RailwayLine[]) => {
    setSegments([...segments, newSegment])
    console.log('Created segment:', newSegment)
  }

  return (
    <div>
      <h1>Railway Lines</h1>
      <Map lines={lines} onLineHover={(line) => setHoveredLine(line)} />
      {hoveredLine && (
        <div>
          <h2>Line Info</h2>
          <p>Yard Name: {hoveredLine.properties.YARDNAME}</p>
          <p>KM: {hoveredLine.properties.KM}</p>
        </div>
      )}
      <SegmentEditor lines={lines} onCreateSegment={handleCreateSegment} />
      <SegmentList
        segments={segments.flat()}
        onEditSegment={handleEditSegment}
        onDeleteSegment={handleDeleteSegment}
      />
    </div>
  )
}

export default App
