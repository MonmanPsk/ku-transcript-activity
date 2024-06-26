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
  if (!activities || activities.length === 0) {
    // Check whether activities is undefined or not
    return (
      <div className="transcript-report-container">
        <p className="transcript-report-header">No activities found</p>
      </div>
    );
  }

  return (
    <div className="transcript-report-container">
      <p className="transcript-report-header">รายงาน Transcript กิจกรรม</p>
      <FirstActivity activities={activities[0]} />
      <SecondActivity activities={activities[1]} />
      <ThirdActivity activities={activities[2]} />
      <FourthActivity activities={activities[3]} />
      <FifthActivity activities={activities[4]} />
    </div>
  );
}
