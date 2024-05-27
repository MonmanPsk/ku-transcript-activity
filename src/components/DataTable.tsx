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
    <>
      {isExpanded && (
        <div className="activity-data-lists popup">
          {child}
        </div>
      )}
      <div className="toggle-button" onClick={toggleExpanded}>
        {!isExpanded &&
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 arrow-icon popup">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>

        }
        {isExpanded &&
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 arrow-icon popup">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
          </svg>
        }
      </div>
    </>
  );
};

export default DataTable;
