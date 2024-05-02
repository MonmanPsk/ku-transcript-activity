import { ActivityProps } from "../../types/TranscriptReport.types"

export default function ThirdActivity({ }: ActivityProps) {
    return (
        <div className="activity-container">
            <div className="activity-header">
                <p className="activity-header-title">กิจกรรมเพื่อสังคม</p>
                <p>ไม่น้อยกว่า 1 กิจกรรม</p>
            </div>
            <div className="activity-tags-container">
                <div className="activity-tag">
                    <p>1 กิจกรรม</p>
                </div>
                <div className="activity-hours-tag">
                    <p>ทั้งหมด 8 ชั่วโมง</p>
                </div>
            </div>
            <div className="activity-progress">
                <p>4/3</p>
                <div className="activity-progress-bottombar">
                    <div className="activity-progress-frontbar"></div>
                </div>
            </div>
            <div className="activity-lists">
                { }
            </div>
            <button className="activity-details-button">ทั้งหมด</button>
        </div>
    )
}