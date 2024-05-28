import { ActivityProps } from "../../types/TranscriptReport.types";
import DataTable from "../DataTable";
import { ButtonAll } from "./ButtonAll";

export type FourthActivityProps = {
  activities: ActivityProps[];
};

export default function FourthActivity({ activities }: FourthActivityProps) {
  const fourthTable: JSX.Element = (
    <div className="activity-lists">
      {activities.map((innerArray, index) => (
        <div className="inner-activity-list" key={index}>
          {innerArray.map((activity: ActivityProps, innerIndex: number) => (
            <div className="activity" key={innerIndex}>
              <p className="activity-name">{activity.activityId}</p>
              <p>{activity.position}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );

  if (!Array.isArray(activities)) {
    console.error("Activities is not an array:", activities);
    return null; // Return null if activities is not an array
  }

  return (
    <div className="activity-container">
      <div className="activity-header">
        <p className="activity-header-title">
          เข้าร่วมกิจกรรมในฐานะกรรมการบริหารองค์กรกิจกรรม
        </p>
      </div>
      <DataTable child={fourthTable} />
      <ButtonAll path="/fourth-activity" data={activities} />
    </div>
  );
}
