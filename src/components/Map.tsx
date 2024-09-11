import {
  MapContainer as LeafletMapContainer,
  TileLayer,
  Polyline,
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { MapProps } from '../types/types'
import React from 'react'

const Map = ({ lines = [], onLineHover }: MapProps) => {
  return (
    <LeafletMapContainer
      center={[42.3601, -71.0589]} // Boston's latitude and longitude
      zoom={10}
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {lines.map((line, index) => (
        <Polyline
          key={index}
          positions={line.coordinates}
          color="blue"
          eventHandlers={{
            mouseover: () => onLineHover(line),
          }}
        />
      ))}
    </LeafletMapContainer>
  )
}

export default Map
