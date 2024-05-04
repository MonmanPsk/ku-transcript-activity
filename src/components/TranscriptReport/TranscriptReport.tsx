import FirstActivity from "./FirstActivity";
import SecondActivity from "./SecondActivity";
import ThirdActivity from "./ThirdActivity";
import FourthActivity from "./FourthActivity";
import FifthActivity from "./FifthActivity";

import "../../styles/transcriptReport.css";

export default function TranscriptReport() {
  return (
    <div className="transcript-report-container">
      <p className="transcript-report-header">รายงาน Transcript กิจกรรม</p>
      <FirstActivity />
      <SecondActivity />
      <ThirdActivity />
      <FourthActivity />
      <FifthActivity />
    </div>
  );
}
