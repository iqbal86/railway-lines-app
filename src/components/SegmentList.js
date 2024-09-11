import React from 'react';
const SegmentList = ({ segments, onEditSegment, onDeleteSegment, }) => {
    return (React.createElement("div", null,
        React.createElement("h2", null, "Segment List"),
        React.createElement("ul", null, segments.map((segment, index) => (React.createElement("li", { key: index },
            React.createElement("span", null,
                "Yard Name: ",
                segment.properties.YARDNAME,
                ", KM:",
                ' ',
                segment.properties.KM),
            React.createElement("button", { onClick: () => onEditSegment([segment]) }, "Edit"),
            React.createElement("button", { onClick: () => onDeleteSegment(segment) }, "Delete")))))));
};
export default SegmentList;
