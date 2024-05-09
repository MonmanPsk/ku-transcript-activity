import { ActivityProps } from "../../types/TranscriptReport.types";
import { ButtonAll } from "./ButtonAll";

export type FifthActivityProps = {
  activities: ActivityProps[];
};

export default function FifthActivity({ activities }: FifthActivityProps) {
  const test_arr = [
    {
      activityId: "166040010007",
      activityName: "เฟรชชี่ เฟสทิเวิล 2023",
      organization: "วิทยาลัยเกษตรศาสตร์ วิทยาเขตบางเขน",
      position: "Doggo",
      hours: 8,
    },
    {
      activityId: "166040010007",
      activityName: "เฟรชชี่ เฟสทิเวิล 2023",
      organization: "วิทยาลัยเกษตรศาสตร์ วิทยาเขตบางเขน",
      position: "Doggo",
      hours: 8,
    },
    {
      activityId: "166040010007",
      activityName: "เฟรชชี่ เฟสทิเวิล 2023",
      organization: "วิทยาลัยเกษตรศาสตร์ วิทยาเขตบางเขน",
      position: "Doggo",
      hours: 8,
    },
    {
      activityId: "166040010007",
      activityName: "เฟรชชี่ เฟสทิเวิล 2023",
      organization: "วิทยาลัยเกษตรศาสตร์ วิทยาเขตบางเขน",
      position: "Doggo",
      hours: 8,
    },
  ];

  if (!Array.isArray(activities)) {
    console.error("Activities is not an array:", activities);
    // Return null if activities is not an array
    return null;
  }

  return (
    <div className="activity-container">
      <div className="activity-header">
        <p className="activity-header-title">
          ได้รับคัดเลือกให้เป็นนิสิตดีเด่นตามประกาศของมหาวิทยาลัย
        </p>
      </div>
      {/* <div className="activity-lists">
        {activities.map((innerArray, index) => (
          <div className="inner-activity-list" key={index}>
            {innerArray.map((activity, innerIndex) => (
              <div className="activity" key={innerIndex}>
                <p className="activity-name">{activity.activityId}</p>
                <p>{activity.outstanding}</p>
              </div>
            ))}
          </div>
        ))}
      </div> */}
      <ButtonAll path="/fifth-activity" data={test_arr}/>
    </div>
  );
}
