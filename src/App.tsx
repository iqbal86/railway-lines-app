import React, { useState } from 'react'
import { useRailwayLines } from './hooks/useRailwayLines'
import Map from './components/Map'
import { RailwayLine } from './types/types'
import SegmentEditor from './components/SegmentEditor'

const App: React.FC = () => {
  const { data: lines = [], isLoading } = useRailwayLines() // Provide a default empty array
  const [hoveredLine, setHoveredLine] = useState<RailwayLine | null>(null)

  if (isLoading) return <div>Loading...</div>

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
      <SegmentEditor lines={lines} />
    </div>
  )
}

export default App
