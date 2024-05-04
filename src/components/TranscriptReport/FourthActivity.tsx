import { ActivityProps } from "../../types/TranscriptReport.types";
import { Button, Tab } from "./Button";

export default function FourthActivity({}: ActivityProps) {
  return (
    <div className="activity-container">
      <div className="activity-header">
        <p className="activity-header-title">
          เข้าร่วมกิจกรรมในฐานะกรรมการบริหารองค์กรกิจกรรม
        </p>
      </div>
      <Button
        handleClick={() => {
          Tab("https://www.youtube.com/");
        }}
      />
    </div>
  );
}
