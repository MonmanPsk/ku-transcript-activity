import { ActivityProps } from "../../types/TranscriptReport.types";
import DataTable from "../DataTable";
import { ButtonAll } from "./ButtonAll";

export type FirstActivityProps = {
  activities: ActivityProps[]
};

export default function FirstActivity({ activities }: FirstActivityProps) {
  const totalActivityAmount = activities.length;
  const totalHours = Array.from(activities, (activity) => activity.hours).reduce((prev, curr) => (prev as number) + (curr as number), 0);

  const firstTable: JSX.Element[] = activities.map((activity, index) => (
    <div className="activity" key={index}>
      <p className="activity-name">{activity.activityName}</p>
      <p>{activity.hours}</p>
    </div>
  ));

  return (
    <div className="activity-container">
      <div className="activity-header">
        <p className="activity-header-title">กิจกรรมมหาวิทยาลัย</p>
        <p>ไม่น้อยกว่า 3 กิจกรรม</p>
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
        <p>{totalActivityAmount}/3</p>
        <div className="activity-progress-bottombar">
          <div className="activity-progress-frontbar" style={{ width: `${100 * totalActivityAmount / 3}%` }}></div>
        </div>
      </div>
      <div className="activity-lists">
        <DataTable child={firstTable}/>
      </div>
      <ButtonAll path="/first-activity" data={[]} />
    </div>
  );
}
