import { LatLngTuple } from 'leaflet'

export type Geometry = {
  type: string
  coordinates: [number, number][]
}

export type Properties = {
  OBJECTID_1: number
  OBJECTID: number
  FRAARCID: number
  FRFRANODE: number
  TOFRANODE: number
  STFIPS: string
  CNTYFIPS: string
  STCNTYFIPS: string
  STATEAB: string
  COUNTRY: string
  FRADISTRCT: number
  RROWNER1: string
  RROWNER2: string
  RROWNER3: string
  TRKRGHTS1: string
  TRKRGHTS2: string
  TRKRGHTS3: string
  TRKRGHTS4: string
  TRKRGHTS5: string
  TRKRGHTS6: string
  TRKRGHTS7: string
  TRKRGHTS8: string
  TRKRGHTS9: string
  SUBDIV: string
  YARDNAME: string
  PASSNGR: string
  STRACNET: string
  TRACKS: number
  CARDDIRECT: string
  NET: string
  MILES: number
  KM: number
  TIMEZONE: string
  IM_RT_TYPE: string
  DBLSTK: string
  Shape_Leng: number
  Shape_Length: number
}

export type Feature = {
  type: string
  properties: Properties
  geometry: Geometry
}

export type RailLinesResponse = {
  type: string
  name: string
  crs: {
    type: string
    properties: {
      name: string
    }
  }
  features: Feature[]
}

// Existing types for the Map component
export type RailwayLine = {
  coordinates: LatLngTuple[]
  properties: {
    YARDNAME: string
    KM: number
  }
}

export type MapProps = {
  lines: RailwayLine[]
  onLineHover: (line: RailwayLine) => void
}
