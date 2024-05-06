import { ActivityProps } from "../../types/TranscriptReport.types";

export default function SecondActivity({ }: ActivityProps) {
  const test_arr = [
    {
      "activityName": "กิจกรรมหนึ่ง",
      "hours": 4
    },
    {
      "activityName": "กิจกรรมสอง",
      "hours": 2
    },
  ]

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
      <div className="activity-lists">
        <div className="activity-sub-lists-container">
          <div className="activity-sub-lists-header">
            <p className="activity-sub-lists-header-title">ด้านพัฒนาคุณธรรมจริยธรรม</p>
            <p >(ไม่น้อยกว่า 1 กิจกรรม)</p>
          </div>
          <div className="activity-sub-lists">
            -
          </div>
        </div>
        <div className="activity-lists-divider"></div>
        <div className="activity-sub-lists-container">
          <div className="activity-sub-lists-header">
            <p className="activity-sub-lists-header-title">ด้านพัฒนาทักษะการคิดและการเรียนรู้</p>
            <p >(ไม่น้อยกว่า 1 กิจกรรม)</p>
          </div>
          <div className="activity-sub-lists">
            {
              test_arr.map((activity, index) => (
                <div className="activity" key={index}>
                  <p className="activity-name">{activity.activityName}</p>
                  <p>{activity.hours}</p>
                </div>
              ))
            }
          </div>
        </div>
        <div className="activity-lists-divider"></div>
        <div className="activity-sub-lists-container">
          <div className="activity-sub-lists-header">
            <p className="activity-sub-lists-header-title">ด้านพัฒนาทักษะเสริมสร้างความสัมพันธ์ระหว่างบุคคลและการสื่อสาร</p>
            <p >(ไม่น้อยกว่า 1 กิจกรรม)</p>
          </div>
          <div className="activity-sub-lists">
            {
              test_arr.map((activity, index) => (
                <div className="activity" key={index}>
                  <p className="activity-name">{activity.activityName}</p>
                  <p>{activity.hours}</p>
                </div>
              ))
            }
          </div>
        </div>
        <div className="activity-lists-divider"></div>
        <div className="activity-sub-lists-container">
          <div className="activity-sub-lists-header">
            <p className="activity-sub-lists-header-title">ด้านพัฒนาสุขภาพ</p>
            <p >(ไม่น้อยกว่า 1 กิจกรรม)</p>
          </div>
          <div className="activity-sub-lists">
            -
          </div>
        </div>
      </div>
      <button className="activity-details-button">ทั้งหมด</button>
    </div>
  );
}
