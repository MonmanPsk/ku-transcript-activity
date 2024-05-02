import { ActivityProps } from "../../types/TranscriptReport.types"

export default function FifthActivity({ }: ActivityProps) {
    return (
        <div className="activity-container">
            <div className="activity-header">
                <p className="activity-header-title">ได้รับคัดเลือกให้เป็นนิิสิตดีเด่นตามประกาศของมหาวิทยาลัย</p>
            </div>
            <button className="activity-details-button">ทั้งหมด</button>
        </div>
    )
}