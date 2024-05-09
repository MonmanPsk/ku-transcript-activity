import { ActivityProps } from "../../types/TranscriptReport.types";
import { ButtonAll } from "./ButtonAll";

export type FourthActivityProps = {
  activities: ActivityProps[];
};

export default function FourthActivity({ activities }: FourthActivityProps) {
  const test_arr = [
    {
      activityId: "166040010007",
      activityName: "เฟรชชี่ เฟสทิเวิล 2023",
      organization: "วิทยาลัยเกษตรศาสตร์ วิทยาเขตบางเขน",
      position: "ผู้เข้าร่วมโครงการ",
      hours: 8,
    },
    {
      activityId: "166040010007",
      activityName: "เฟรชชี่ เฟสทิเวิล 2023",
      organization: "วิทยาลัยเกษตรศาสตร์ วิทยาเขตบางเขน",
      position: "ผู้เข้าร่วมโครงการ",
      hours: 8,
    },
    {
      activityId: "166040010007",
      activityName: "เฟรชชี่ เฟสทิเวิล 2023",
      organization: "วิทยาลัยเกษตรศาสตร์ วิทยาเขตบางเขน",
      position: "ผู้เข้าร่วมโครงการ",
      hours: 8,
    },
    {
      activityId: "166040010007",
      activityName: "เฟรชชี่ เฟสทิเวิล 2023",
      organization: "วิทยาลัยเกษตรศาสตร์ วิทยาเขตบางเขน",
      position: "ผู้เข้าร่วมโครงการ",
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
          เข้าร่วมกิจกรรมในฐานะกรรมการบริหารองค์กรกิจกรรม
        </p>
      </div>
      <ButtonAll path="/fourth-activity" data={test_arr} />
    </div>
  );
}
