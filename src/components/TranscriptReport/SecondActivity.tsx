import { ActivityProps } from "../../types/TranscriptReport.types";

export type SecondActivityProps = {
  activities: ActivityProps[]
};

export default function SecondActivity({ activities }: SecondActivityProps) {
  const firstSub = activities.filter((activity) => {
    if (activity.hours[0] > 0)
      return activity
  })

  const secondSub = activities.filter((activity) => {
    if (activity.hours[1] > 0)
      return activity
  })

  const thirdSub = activities.filter((activity) => {
    if (activity.hours[2] > 0)
      return activity
  })

  const fourthSub = activities.filter((activity) => {
    if (activity.hours[3] > 0)
      return activity
  })

  return (
    <div className="activity-container">
      <div className="activity-header">
        <p className="activity-header-title">กิจกรรมเพื่อเสริมสร้างสมรรถนะ</p>
        <p>ไม่น้อยกว่า 4 กิจกรรม</p>
      </div>
      <div className="activity-tags-container">
        <div className="activity-tag">
          <p>7 กิจกรรม</p>
        </div>
        <div className="activity-hours-tag">
          <p>ทั้งหมด 102 ชั่วโมง</p>
        </div>
      </div>
      <div className="activity-progress">
        <p>4/3</p>
        <div className="activity-progress-bottombar">
          <div className="activity-progress-frontbar"></div>
        </div>
      </div>
      <div className="activity-lists">
        <div className="activity-sub-lists-container">
          <div className="activity-sub-lists-header">
            <p className="activity-sub-lists-header-title">ด้านพัฒนาคุณธรรมจริยธรรม</p>
            <p >(ไม่น้อยกว่า 1 กิจกรรม)</p>
          </div>
          <div className="activity-sub-lists">
            {
              <>
                {!firstSub.length && <>-</>}
                {(firstSub.length > 0) && <>
                  {
                    firstSub.map((activity, index) => (
                      <div className="activity" key={index}>
                        <p className="activity-name">{activity.activityName}</p>
                        <p>{activity.hours[0]}</p>
                      </div>
                    ))
                  }
                </>
                }
              </>
            }
          </div>
        </div>
        <div className="activity-lists-divider"></div>
        <div className="activity-sub-lists-container">
          <div className="activity-sub-lists-header">
            <p className="activity-sub-lists-header-title">ด้านพัฒนาทักษะการคิดและการเรียนรู้</p>
            <p >(ไม่น้อยกว่า 1 กิจกรรม)</p>
          </div>
          <div className="activity-sub-lists">
            {
              <>
                {!secondSub.length && <>-</>}
                {(secondSub.length > 0) && <>
                  {
                    secondSub.map((activity, index) => (
                      <div className="activity" key={index}>
                        <p className="activity-name">{activity.activityName}</p>
                        <p>{activity.hours[1]}</p>
                      </div>
                    ))
                  }
                </>
                }
              </>
            }
          </div>
        </div>
        <div className="activity-lists-divider"></div>
        <div className="activity-sub-lists-container">
          <div className="activity-sub-lists-header">
            <p className="activity-sub-lists-header-title">ด้านพัฒนาทักษะเสริมสร้างความสัมพันธ์ระหว่างบุคคลและการสื่อสาร</p>
            <p >(ไม่น้อยกว่า 1 กิจกรรม)</p>
          </div>
          <div className="activity-sub-lists">
            {
              <>
                {!thirdSub.length && <>-</>}
                {(thirdSub.length > 0) && <>
                  {
                    thirdSub.map((activity, index) => (
                      <div className="activity" key={index}>
                        <p className="activity-name">{activity.activityName}</p>
                        <p>{activity.hours[2]}</p>
                      </div>
                    ))
                  }
                </>
                }
              </>
            }
          </div>
        </div>
        <div className="activity-lists-divider"></div>
        <div className="activity-sub-lists-container">
          <div className="activity-sub-lists-header">
            <p className="activity-sub-lists-header-title">ด้านพัฒนาสุขภาพ</p>
            <p >(ไม่น้อยกว่า 1 กิจกรรม)</p>
          </div>
          <div className="activity-sub-lists">
            {
              <>
                {!fourthSub.length && <>-</>}
                {(fourthSub.length > 0) && <>
                  {
                    fourthSub.map((activity, index) => (
                      <div className="activity" key={index}>
                        <p className="activity-name">{activity.activityName}</p>
                        <p>{activity.hours[3]}</p>
                      </div>
                    ))
                  }
                </>
                }
              </>
            }
          </div>
        </div>
      </div>
      <button className="activity-details-button">ทั้งหมด</button>
    </div>
  );
}
