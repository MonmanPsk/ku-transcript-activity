import { ActivityProps } from "../../types/TranscriptReport.types"

export default function FourthActivity({ }: ActivityProps) {
    return (
        <div className="activity-container">
            <div className="activity-header">
                <p className="activity-header-title">เข้าร่วมกิจกรรมในฐานะกรรมการบริหารองค์กรกิจกรรม</p>
            </div>
            <button className="activity-details-button">ทั้งหมด</button>
        </div>
    )
}