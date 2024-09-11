import { useQuery } from 'react-query'
import { RailLinesResponse, RailwayLine } from '../types/types'

const API_URL =
  'https://raw.githubusercontent.com/charnger/fe_test/7ce67741f65ef3c11b547642cb80142f26cf191e/MA_rail_lines.geojson'

const fetchRailwayLines = async (): Promise<RailwayLine[]> => {
  const response = await fetch(API_URL)
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  const data: RailLinesResponse = await response.json()

  console.log('Response..', data)

  return data.features.map((feature) => ({
    coordinates: feature.geometry.coordinates,
    properties: {
      YARDNAME: feature.properties.YARDNAME,
      KM: feature.properties.KM,
    },
  }))
}

export const useRailwayLines = () => {
  return useQuery<RailwayLine[], Error>({
    queryKey: ['railwayLines'],
    queryFn: fetchRailwayLines,
    // Optional: Add configuration options here
    staleTime: 60000, // Cache the data for 60 seconds
    retry: 3, // Retry up to 3 times on failure
  })
}

export default useRailwayLines
