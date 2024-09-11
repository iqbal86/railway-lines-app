/* eslint-disable react-refresh/only-export-components */
import React, { useState } from 'react';
export const areLinesConnected = (lines) => {
    if (lines.length < 2)
        return true; // Single line or empty list is always connected
    const isConnected = (lineA, lineB) => {
        const endPointA = lineA.coordinates[lineA.coordinates.length - 1];
        const startPointB = lineB.coordinates[0];
        return endPointA[0] === startPointB[0] && endPointA[1] === startPointB[1];
    };
    for (let i = 0; i < lines.length - 1; i++) {
        if (!isConnected(lines[i], lines[i + 1])) {
            console.log('lines dont connect');
            return false; // If any pair is not connected, return false
        }
    }
    console.log('lines connect');
    return true; // All lines are connected in sequence
};
const SegmentEditor = ({ lines, onCreateSegment }) => {
    const [selectedLines, setSelectedLines] = useState([]);
    const toggleLine = (index) => {
        setSelectedLines((prev) => prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]);
    };
    const handleCreateSegment = () => {
        const selected = selectedLines.map((i) => lines[i]);
        if (areLinesConnected(selected)) {
            onCreateSegment(selected);
        }
        else {
            alert('Selected lines do not form a connected path.');
        }
    };
    return (React.createElement("div", null,
        React.createElement("h2", null, "Segment Editor"),
        React.createElement("ul", null, lines.map((line, index) => (React.createElement("li", { key: index },
            React.createElement("input", { type: "checkbox", checked: selectedLines.includes(index), onChange: () => toggleLine(index) }),
            "Segment ",
            index + 1,
            " - ",
            line.properties.YARDNAME)))),
        React.createElement("button", { onClick: handleCreateSegment }, "Create Segment")));
};
export default SegmentEditor;
