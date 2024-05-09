import React, { useState } from "react";
import "../styles/DataTable.css"; // Import your CSS file
import { ActivityProps } from "../types/TranscriptReport.types";

interface DataTableProps {
  data: ActivityProps[];
}

const DataTable: React.FC<DataTableProps> = ({ data}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="data-table">
      <div className="toggle-button" onClick={toggleExpanded}>
        <span className={`arrow-icon ${isExpanded ? "expanded" : ""}`}>
          &#x25B6;
        </span>
        <span>Toggle Table</span>
      </div>
      {isExpanded && (
        <div className="activity-lists">
        {data.map((activity, index) => (
          <div className="activity" key={index}>
            <p className="activity-name">{activity.activityName}</p>
            <p>{activity.hours}</p>
          </div>
        ))}
        </div>
      )}
    </div>
  );
};

export default DataTable;
