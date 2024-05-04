import { ActivityProps } from "../../types/TranscriptReport.types";
import { Button, Tab} from "./Button";

export default function FifthActivity({}: ActivityProps) {
  const test_arr = [
    {
      "activityId": "166222222222",
      "outstanding": "ฟุตบอล"
    },
    {
      "activityId": "166222222222",
      "outstanding": "ฟุตบอล"
    },
    {
      "activityId": "166222222222",
      "outstanding": "ฟุตบอล"
    },
    {
      "activityId": "166222222222",
      "outstanding": "ฟุตบอล"
    },
  ]

  return (
    <div className="activity-container">
      <div className="activity-header">
        <p className="activity-header-title">
          ได้รับคัดเลือกให้เป็นนิิสิตดีเด่นตามประกาศของมหาวิทยาลัย
        </p>
      </div>
      <div className="activity-lists">
        {
          test_arr.map((activity, index) => (
            <div className="activity" key={index}>
              <p className="activity-name">{activity.activityId}</p>
              <p>{activity.outstanding}</p>
            </div>
          ))
        }
      </div>
      <Button
        handleClick={() => {
          Tab("https://www.youtube.com/");
        }}
      />
    </div>
  );
}
