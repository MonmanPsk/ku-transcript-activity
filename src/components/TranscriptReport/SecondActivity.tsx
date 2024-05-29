import { ActivityProps } from "../../types/TranscriptReport.types";
import DataTable from "../DataTable";
import { ButtonAll } from "./ButtonAll";

export type SecondActivityProps = {
  activities: ActivityProps[];
};

export default function SecondActivity({ activities }: SecondActivityProps) {
  const totalActivityAmount = activities.length;
  const totalHours = Array.from(
    activities,
    (activity) => activity.hours
  ).reduce((prev, curr) => {
    return (prev as number) + (curr as number[]).reduce((a, b) => a + b, 0);
  }, 0);
  const activityProgress = (100 * totalActivityAmount) / 4

  const firstSub = activities.filter((activity) => {
    if ((activity.hours as number[])[0] > 0) return activity;
  });

  const secondSub = activities.filter((activity) => {
    if ((activity.hours as number[])[1] > 0) return activity;
  });

  const thirdSub = activities.filter((activity) => {
    if ((activity.hours as number[])[2] > 0) return activity;
  });

  const fourthSub = activities.filter((activity) => {
    if ((activity.hours as number[])[3] > 0) return activity;
  });

  const secondTable: JSX.Element[] = [
    (
      <>
        {!firstSub.length && <>-</>}
        {firstSub.length > 0 && (
          <>
            {firstSub.map((activity, index) => (
              <div className="activity" key={index}>
                <p className="activity-name">{activity.activityName}</p>
                <p>{(activity.hours as number[])[0]}</p>
              </div>
            ))}
          </>
        )}
      </>
    ),
    (
      <>
        {!secondSub.length && <>-</>}
        {secondSub.length > 0 && (
          <>
            {secondSub.map((activity, index) => (
              <div className="activity" key={index}>
                <p className="activity-name">{activity.activityName}</p>
                <p>{(activity.hours as number[])[1]}</p>
              </div>
            ))}
          </>
        )}
      </>
    ),
    (
      <>
        {!thirdSub.length && <>-</>}
        {thirdSub.length > 0 && (
          <>
            {thirdSub.map((activity, index) => (
              <div className="activity" key={index}>
                <p className="activity-name">{activity.activityName}</p>
                <p>{(activity.hours as number[])[2]}</p>
              </div>
            ))}
          </>
        )}
      </>
    ),
    (
      <>
        {!fourthSub.length && <>-</>}
        {fourthSub.length > 0 && (
          <>
            {fourthSub.map((activity, index) => (
              <div className="activity" key={index}>
                <p className="activity-name">{activity.activityName}</p>
                <p>{(activity.hours as number[])[3]}</p>
              </div>
            ))}
          </>
        )}
      </>
    ),
  ];

  return (
    <div className="activity-container">
      <div className="activity-header">
        <p className="activity-header-title">กิจกรรมเพื่อเสริมสร้างสมรรถนะ</p>
        <p>ไม่น้อยกว่า 4 กิจกรรม</p>
      </div>
      <div className="activity-tags-container">
        <div className="activity-tag">
          <p>{totalActivityAmount} กิจกรรม</p>
        </div>
        <div className="activity-hours-tag">
          <p>ทั้งหมด {totalHours} ชั่วโมง</p>
        </div>
      </div>
      <div className="activity-progress">
        <p>{totalActivityAmount}/4</p>
        <div className="activity-progress-bottombar">
          <div className="activity-progress-bar" style={{ width: `${activityProgress > 100 ? 100 : activityProgress}%` }}>
            <div className="activity-progress-frontbar"></div>
          </div>
        </div>
      </div>
      <div className="activity-lists">
        <div className="activity-sub-lists-container">
          <div className="activity-sub-lists-header">
            <p className="activity-sub-lists-header-title">
              ด้านพัฒนาคุณธรรมจริยธรรม
            </p>
            <p>(ไม่น้อยกว่า 1 กิจกรรม)</p>
          </div>
          <div className="activity-sub-lists">
            <DataTable child={secondTable[0]} />
          </div>
        </div>
        <div className="activity-lists-divider"></div>
        <div className="activity-sub-lists-container">
          <div className="activity-sub-lists-header">
            <p className="activity-sub-lists-header-title">
              ด้านพัฒนาทักษะการคิดและการเรียนรู้
            </p>
            <p>(ไม่น้อยกว่า 1 กิจกรรม)</p>
          </div>
          <div className="activity-sub-lists">
            <DataTable child={secondTable[1]} />
          </div>
        </div>
        <div className="activity-lists-divider"></div>
        <div className="activity-sub-lists-container">
          <div className="activity-sub-lists-header">
            <p className="activity-sub-lists-header-title">
              ด้านพัฒนาทักษะเสริมสร้างความสัมพันธ์ระหว่างบุคคลและการสื่อสาร
            </p>
            <p>(ไม่น้อยกว่า 1 กิจกรรม)</p>
          </div>
          <div className="activity-sub-lists">
            <DataTable child={secondTable[2]} />
          </div>
        </div>
        <div className="activity-lists-divider"></div>
        <div className="activity-sub-lists-container">
          <div className="activity-sub-lists-header">
            <p className="activity-sub-lists-header-title">ด้านพัฒนาสุขภาพ</p>
            <p>(ไม่น้อยกว่า 1 กิจกรรม)</p>
          </div>
          <div className="activity-sub-lists">
            <DataTable child={secondTable[3]} />
          </div>
        </div>
      </div>
      <ButtonAll path="/second-activity" data={activities} />
    </div>
  );
}
