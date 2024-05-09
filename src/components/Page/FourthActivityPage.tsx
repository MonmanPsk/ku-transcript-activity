import { ActivityProps } from "../../types/TranscriptReport.types";
import BackButton from "./BackButton";
import { useLocation } from "react-router-dom";

const FourthActivityPage = () => {
  const checkData = true;
  const location = useLocation();

  return (
    <>
      <div className="back-button-container">
        <BackButton path="/" />
      </div>
      <div className="activity-page-header">
        <div className="activiity-page-header-text">
          เข้าร่วมกิจกรรมในฐานะกรรมการบริหารองค์กรกิจกรรม
        </div>
        <div>
          <div className="activity-page-table-headbar">
            <div className="first-column-header">รหัสกิจกรรมโครงการ</div>
            <div className="second-column-header">หน่วยงาน</div>
            <div className="third-column-header">ตำแหน่ง</div>
            <div className="fourth-column-header">หน่วยชั่วโมง</div>
          </div>
          <div className="activity-page-table-content">
            <ul>
              <li className="activity-table-list">
                {checkData ? (
                  location.state.map(
                    (activity: ActivityProps, index: number) => (
                      <div className="activity-page-activity" key={index}>
                        <p className="activity-page-activity-id">
                          {activity.activityId}
                        </p>
                        <p className="activity-page-activity-organization">
                          {activity.organization}
                        </p>
                        <p className="activity-page-activity-position">
                          {activity.position}
                        </p>
                        <p className="activity-page-activity-hours">
                          {activity.hours}
                        </p>
                      </div>
                    )
                  )
                ) : (
                  <div className="no-data-text">-</div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default FourthActivityPage;
