import { MapContainer as LeafletMapContainer, TileLayer, Polyline, } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import React from 'react';
const Map = ({ lines = [], onLineHover }) => {
    return (React.createElement(LeafletMapContainer, { center: [42.3601, -71.0589], zoom: 10, style: { height: '500px', width: '100%' } },
        React.createElement(TileLayer, { url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" }),
        lines.map((line, index) => (React.createElement(Polyline, { key: index, positions: line.coordinates, color: "blue", eventHandlers: {
                mouseover: () => onLineHover(line),
            } })))));
};
export default Map;
