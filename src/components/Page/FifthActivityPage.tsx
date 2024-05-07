import BackButton from "./BackButton";

const FifthActivityPage = () => {
  const checkData = false;

  const test_arr = [
    {
      activityId: "166040010007",
      activityName: "เฟรชชี่ เฟสทิเวิล 2023",
      organization: "วิทยาลัยเกษตรศาสตร์ วิทยาเขตบางเขน",
      position: "Doggo",
      hours: 8,
    },
    {
      activityId: "166040010007",
      activityName: "เฟรชชี่ เฟสทิเวิล 2023",
      organization: "วิทยาลัยเกษตรศาสตร์ วิทยาเขตบางเขน",
      position: "Doggo",
      hours: 8,
    },
    {
      activityId: "166040010007",
      activityName: "เฟรชชี่ เฟสทิเวิล 2023",
      organization: "วิทยาลัยเกษตรศาสตร์ วิทยาเขตบางเขน",
      position: "Doggo",
      hours: 8,
    },
    {
      activityId: "166040010007",
      activityName: "เฟรชชี่ เฟสทิเวิล 2023",
      organization: "วิทยาลัยเกษตรศาสตร์ วิทยาเขตบางเขน",
      position: "Doggo",
      hours: 8,
    },
  ];

  return (
    <>
      <div className="back-button-container">
        <BackButton path="/" />
      </div>
      <div className="activity-page-header">
        <div className="activiity-page-header-text">
          ได้รับคัดเลือกให้เป็นนิิสิตดีเด่นตามประกาศของมหาวิทยาลัย
        </div>
        <div>
          <div className="activity-page-table-headbar">
            <div className="first-column-header">รหัสกิจกรรมโครงการ</div>
            <div className="second-column-header">หน่วยงาน</div>
            <div className="third-column-header">ตำแหน่ง</div>
            <div className="fourth-column-header">หน่วยชั่วโมง</div>
          </div>
          <div className="activity-page-table-content">
            <ul>
              <li className="activity-table-list">
                {checkData ? (
                  test_arr.map((activity, index) => (
                    <div className="activity-page-activity" key={index}>
                      <p className="activity-page-activity-id">
                        {activity.activityId}
                      </p>
                      <p className="activity-page-activity-organization">
                        {activity.organization}
                      </p>
                      <p className="activity-page-activity-position">
                        {activity.position}
                      </p>
                      <p className="activity-page-activity-hours">
                        {activity.hours}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="no-data-text">-</div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default FifthActivityPage;