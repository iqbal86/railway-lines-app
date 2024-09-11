import React, { useState } from 'react';
import { useRailwayLines } from './hooks/useRailwayLines';
import Map from './components/Map';
import SegmentEditor from './components/SegmentEditor';
import SegmentList from './components/SegmentList';
const App = () => {
    const { data: lines = [], isLoading } = useRailwayLines(); // Provide a default empty array
    const [hoveredLine, setHoveredLine] = useState(null);
    const [segments, setSegments] = useState([]);
    if (isLoading)
        return React.createElement("div", null, "Loading...");
    const handleEditSegment = (segment) => {
        console.log('Edit segment:', segment);
        // Implement segment editing functionality here
    };
    const handleDeleteSegment = (segment) => {
        setSegments(segments.filter((s) => !s.includes(segment)));
        console.log('Deleted segment:', segment);
    };
    const handleCreateSegment = (newSegment) => {
        setSegments([...segments, newSegment]);
        console.log('Created segment:', newSegment);
    };
    return (React.createElement("div", null,
        React.createElement("h1", null, "Railway Lines"),
        React.createElement(Map, { lines: lines, onLineHover: (line) => setHoveredLine(line) }),
        hoveredLine && (React.createElement("div", null,
            React.createElement("h2", null, "Line Info"),
            React.createElement("p", null,
                "Yard Name: ",
                hoveredLine.properties.YARDNAME),
            React.createElement("p", null,
                "KM: ",
                hoveredLine.properties.KM))),
        React.createElement(SegmentEditor, { lines: lines, onCreateSegment: handleCreateSegment }),
        React.createElement(SegmentList, { segments: segments.flat(), onEditSegment: handleEditSegment, onDeleteSegment: handleDeleteSegment })));
};
export default App;
