import { ActivityProps } from "../../types/TranscriptReport.types";
import DataTable from "../DataTable";
import { ButtonAll } from "./ButtonAll";

export type ThirdActivityProps = {
  activities: ActivityProps[];
};

export default function ThirdActivity({ activities }: ThirdActivityProps) {
  const totalActivityAmount = activities.length;
  const totalHours = Array.from(
    activities,
    (activity) => activity.hours
  ).reduce((prev, curr) => (prev as number) + (curr as number), 0);
  const activityProgress = (100 * totalActivityAmount) / 1

  const thirdTable: JSX.Element[] = activities.map((activity, index) => (
    <div className="activity" key={index}>
      <p className="activity-name">{activity.activityName}</p>
      <p>{activity.hours}</p>
    </div>
  ));

  return (
    <div className="activity-container">
      <div className="activity-header">
        <p className="activity-header-title">กิจกรรมเพื่อสังคม</p>
        <p>ไม่น้อยกว่า 1 กิจกรรม</p>
      </div>
      <div className="activity-tags-container">
        <div className="activity-tag">
          <p>{totalActivityAmount} กิจกรรม</p>
        </div>
        <div className="activity-hours-tag">
          <p>ทั้งหมด {totalHours} ชั่วโมง</p>
        </div>
      </div>
      <div className="activity-progress">
        <p>{totalActivityAmount}/1</p>
        <div className="activity-progress-bottombar">
          <div className="activity-progress-bar" style={{ width: `${activityProgress > 100 ? 100 : activityProgress}%` }}>
            <div className="activity-progress-frontbar"></div>
          </div>
        </div>
      </div>
      <div className="activity-lists">
        <DataTable child={thirdTable} />
      </div>
      <ButtonAll path="/third-activity" data={[]} />
    </div>
  );
}
