import { useLocation } from "react-router-dom";
import BackButton from "../components/BackButton";
import { ActivityProps } from "../types/TranscriptReport.types";

import "../styles/activityPage.css";

function FourthActivityPage() {
  const location = useLocation();
  const activities: ActivityProps[][] = location.state;

  return (
    <div className="activity-page-container">
      <div className="back-button-container">
        <BackButton path="/" />
      </div>
      <div className="activity-table-title">
        <div className="activity-table-title-name">
          <p>เข้าร่วมกิจกรรมในฐานะกรรมการบริหารองค์กรกิจกรรม</p>
        </div>
      </div>
      <div className="activity-table">
        <div className="activity-table-header activity-table-row">
          <div><p>รหัสกิจกรรม</p></div>
          <div><p>ตำแหน่งบริหาร</p></div>
        </div>
        <div className="activity-table-data">
          {activities.length > 0 ? (
            activities.map(
              (activity) => (
                activity.map((subActivity, innerIndex) => (
                  <div key={innerIndex} className="activity-table-row">
                    <div>
                      <p>{subActivity.activityId}</p>
                    </div>
                    <div>
                      <p>{subActivity.position}</p>
                    </div>
                  </div>
                ))
              )
            )
          ) : (
            <div className="activity-table-no-data activity-table-row">
              <div>-</div>
              <div></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FourthActivityPage