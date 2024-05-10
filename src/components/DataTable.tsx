import React, { useState } from "react";
import "../styles/DataTable.css"; // Import your CSS file

interface DataTableProps {
  child: React.ReactNode;
}

const DataTable: React.FC<DataTableProps> = ({ child }) => {
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
          {child}
        </div>
      )}
    </div>
  );
};

export default DataTable;
