import FirstActivity from "./FirstActivity";
import SecondActivity from "./SecondActivity";
import ThirdActivity from "./ThirdActivity"
import FourthActivity from "./FourthActivity"
import FifthActivity from "./FifthActivity"

import "../../styles/transcriptReport.css"

export default function TranscriptReport() {
  return (
    <div className="transcript-report-container">
      <div>รายงาน Transcript กิจกรรม</div>
      <FirstActivity />
      <SecondActivity />
      <ThirdActivity />
      <FourthActivity />
      <FifthActivity />
    </div>
  )
}