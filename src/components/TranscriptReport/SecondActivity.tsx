import { ActivityProps } from "../../types/TranscriptReport.types";

export default function SecondActivity({}: ActivityProps) {
  return (
    <div className="activity-container">
      <div className="activity-header">
        <p className="activity-header-title">กิจกรรมเพื่อเสริมสร้างสมรรถนะ</p>
        <p>ไม่น้อยกว่า 4 กิจกรรม</p>
      </div>
      <div className="activity-tags-container">
        <div className="activity-tag">
          <p>7 กิจกรรม</p>
        </div>
        <div className="activity-hours-tag">
          <p>ทั้งหมด 102 ชั่วโมง</p>
        </div>
      </div>
      <div className="activity-progress">
        <p>4/3</p>
        <div className="activity-progress-bottombar">
          <div className="activity-progress-frontbar"></div>
        </div>
      </div>
      <div className="activity-lists">{}</div>
      <button className="activity-details-button">ทั้งหมด</button>
    </div>
  );
}
