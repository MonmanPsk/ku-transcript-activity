import { ActivityProps } from "../../types/TranscriptReport.types";

export type FirstActivityProps = {
  activities: ActivityProps[];
};

export default function FirstActivity({ activities }: FirstActivityProps) {
  return (
    <div className="activity-container">
      <div className="activity-header">
        <p className="activity-header-title">กิจกรรมมหาวิทยาลัย</p>
        <p>ไม่น้อยกว่า 3 กิจกรรม</p>
      </div>
      <div className="activity-tags-container">
        <div className="activity-tag">
          <p>4 กิจกรรม</p>
        </div>
        <div className="activity-hours-tag">
          <p>ทั้งหมด 13 ชั่วโมง</p>
        </div>
      </div>
      <div className="activity-progress">
        <p>4/3</p>
        <div className="activity-progress-bottombar">
          <div className="activity-progress-frontbar"></div>
        </div>
      </div>
      <div className="activity-lists">
        {activities.map((activity, index) => (
          <div className="activity" key={index}>
            <p className="activity-name">{activity.activityName}</p>
            <p>{activity.hours}</p>
          </div>
        ))}
      </div>
      <button className="activity-details-button">ทั้งหมด</button>
    </div>
  );
}
