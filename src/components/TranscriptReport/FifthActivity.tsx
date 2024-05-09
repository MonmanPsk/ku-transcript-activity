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
      position: "-",
      hours: 8,
    },
    {
      activityId: "166040010007",
      activityName: "เฟรชชี่ เฟสทิเวิล 2023",
      organization: "วิทยาลัยเกษตรศาสตร์ วิทยาเขตบางเขน",
      position: "-",
      hours: 8,
    },
    {
      activityId: "166040010007",
      activityName: "เฟรชชี่ เฟสทิเวิล 2023",
      organization: "วิทยาลัยเกษตรศาสตร์ วิทยาเขตบางเขน",
      position: "-",
      hours: 8,
    },
    {
      activityId: "166040010007",
      activityName: "เฟรชชี่ เฟสทิเวิล 2023",
      organization: "วิทยาลัยเกษตรศาสตร์ วิทยาเขตบางเขน",
      position: "-",
      hours: 8,
    },
  ];

  if (!Array.isArray(activities)) {
    console.error("Activities is not an array:", activities);
    return null; // Return null if activities is not an array
  }

  return (
    <div className="activity-container">
      <div className="activity-header">
        <p className="activity-header-title">
          ได้รับคัดเลือกให้เป็นนิสิตดีเด่นตามประกาศของมหาวิทยาลัย
        </p>
      </div>
      <ButtonAll path="/fifth-activity" data={test_arr} />
    </div>
  );
}
