import { ActivityProps } from "../../types/TranscriptReport.types"

export default function FifthActivity({}: ActivityProps) {
    return (
        <div className="page1-fullbody-card">
            <div className="page1-workout-text">
            <span className="page1-text">
                <span>ได้รับคัดเลือกให้เป็นนิิสิตดีเด่นตามประกาศของมหาวิทยาลัย</span>
            </span>
            </div>
            <button className="page1-button-viewmore">
            <span className="page1-button-text">
                <span>ทั้งหมด</span>
            </span>
            </button>
        </div>
    )
}