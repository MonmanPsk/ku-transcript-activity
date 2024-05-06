import FirstActivity from "./FirstActivity";
import SecondActivity from "./SecondActivity";
import ThirdActivity from "./ThirdActivity";
import FourthActivity from "./FourthActivity";
import FifthActivity from "./FifthActivity";
import { ActivityProps } from "../../types/TranscriptReport.types";

import "../../styles/transcriptReport.css";

interface TranscriptReportProps {
  activities: ActivityProps[][];
}

export default function TranscriptReport({ activities }: TranscriptReportProps) {
  if (!activities || activities.length === 0) { // Check whether activities is undefined or not
    return (
      <div className="transcript-report-container">
        <p className="transcript-report-header">No activities found</p>
      </div>
    );
  }

  const firstActivityProps: ActivityProps[] = activities[0];
  const secondActivityProps: ActivityProps[] = activities[1];
  const thirdActivityProps: ActivityProps[] = activities[2];
  const fourthActivityProps: ActivityProps[] = activities[3];
  const fifthActivityProps: ActivityProps[] = activities[4];

  return (
    <div className="transcript-report-container">
      <p className="transcript-report-header">รายงาน Transcript กิจกรรม</p>
      <FirstActivity activities={firstActivityProps} />
      <SecondActivity activities={secondActivityProps} />
      <ThirdActivity activities={thirdActivityProps} />
      <FourthActivity activities={fourthActivityProps} />
      <FifthActivity activities={fifthActivityProps} />
    </div>
  );
}
