import { ActivityProps } from "../../types/TranscriptReport.types";
import { Button, Tab } from "./Button";

export type FifthActivityProps = {
  activities: ActivityProps[];
};

export default function FifthActivity({ activities }: FifthActivityProps) {
  if (!Array.isArray(activities)) {
    console.error("Activities is not an array:", activities);
    // Return null if activities is not an array
    return null;
  }

  return (
    <div className="activity-container">
      <div className="activity-header">
        <p className="activity-header-title">
          ได้รับคัดเลือกให้เป็นนิิสิตดีเด่นตามประกาศของมหาวิทยาลัย
        </p>
      </div>
      <div className="activity-lists">
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
      </div>
      <Button
        handleClick={() => {
          Tab("https://www.youtube.com/");
        }}
      />
    </div>
  );
}
