import { useLocation } from "react-router-dom";
import BackButton from "../components/BackButton";
import { ActivityProps } from "../types/TranscriptReport.types";

import "../styles/activityPage.css";

function SecondActivityPage() {
    const location = useLocation();

    return (
        <div className="activity-page-container">
            <div className="back-button-container">
                <BackButton path="/" />
            </div>
            <div className="activity-table-title">
                <div className="activity-table-title-name">
                    <p>กิจกรรมเพื่อเสริมสร้างสมรรถนะ&nbsp;</p>
                    <p>(ไม่น้อยกว่า 4 กิจกรรม)</p>
                </div>
                <div className="activity-table-title-status">

                </div>
            </div>
            <div className="activity-table">
                <div className="activity-table-header activity-table-row">
                    <div><p>รหัสกิจกรรม</p></div>
                    <div><p>โครงการ</p></div>
                    <div><p>หน่วยงาน</p></div>
                    <div><p>ตำแหน่ง</p></div>
                    <div><p>หน่วยชั่วโมง</p></div>
                </div>
                <div className="activity-table-data">
                    {location.state.length > 0 ? (
                        location.state.map(
                            (activity: ActivityProps, index: number) => (
                                <div className="activity-table-row" key={index}>
                                    <div>
                                        <p>{activity.activityId}</p>
                                    </div>
                                    <div>
                                        <p>{activity.activityName}</p>
                                    </div>
                                    <div>
                                        <p>{activity.organization}</p>
                                    </div>
                                    <div>
                                        <p>{activity.position}</p>
                                    </div>
                                    <div>
                                        <p>{activity.hours}</p>
                                    </div>
                                </div>
                            )
                        )
                    ) : (
                        <div className="activity-table-no-data activity-table-row">
                            <div>-</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SecondActivityPage