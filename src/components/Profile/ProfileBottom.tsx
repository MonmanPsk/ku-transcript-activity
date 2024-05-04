type ProfileBottomProps = {
  totalHours: number;
  totalActivity: number;
};

export default function ProfileBottom(props: ProfileBottomProps) {
  return (
    <>
      <div className="page1-frame10206">
        <div className="page1-height-card">
          <span className="page1-text008">
            <span>{props.totalHours}</span>
          </span>
          <span className="page1-text010">
            <span>ชั่วโมงกิจกรรม</span>
          </span>
        </div>
        <div className="page1-height-card1">
          <span className="page1-text012">
            <span>{props.totalActivity}</span>
          </span>
          <span className="page1-text014">
            <span>โครงการ</span>
          </span>
        </div>
        <div className="page1-height-card2">
          <span className="page1-text016">
            <span>{props.totalActivity}</span>
          </span>
          <span className="page1-text018">
            <span>กิจกรรม</span>
          </span>
        </div>
      </div>
    </>
  );
}
