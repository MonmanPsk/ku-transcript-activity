import { ActivityProps } from "../../types/TranscriptReport.types";
import { Button, Tab } from "./Button";

export default function FourthActivity({}: ActivityProps) {
    const test_arr = [
        {
            "activityId": "166111111111",
            "position": "รองประธาน"
        },
        {
            "activityId": "166111111111",
            "position": "รองประธาน"
        },
        {
            "activityId": "166111111111",
            "position": "รองประธาน"
        },
        {
            "activityId": "166111111111",
            "position": "รองประธาน"
        },
      ]
    
  return (
    <div className="activity-container">
      <div className="activity-header">
        <p className="activity-header-title">
          เข้าร่วมกิจกรรมในฐานะกรรมการบริหารองค์กรกิจกรรม
        </p>
      </div>
      <div className="activity-lists">
        {
          test_arr.map((activity, index) => (
            <div className="activity" key={index}>
              <p className="activity-name">{activity.activityId}</p>
              <p>{activity.position}</p>
            </div>
          ))
        }
      </div>
      <Button
        handleClick={() => {
          Tab("https://www.youtube.com/");
        }}
      />
    </div>
  );
}
