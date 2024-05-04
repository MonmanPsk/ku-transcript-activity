export type StatusProps = {
  pass: boolean;
};

export default function Status(status: StatusProps) {
  if (status.pass) {
    //pass the criteria
    return (
      <div className="page1-pass-status">
        <span className="page1-pass-text006">
          <span>สถานะ : pass</span>
        </span>
      </div>
    );
  } else {
    return (
      // not pass the criteria
      <div className="page1-not-pass-status">
        <span className="page1-not-pass-text006">
          <span>สถานะ : not pass</span>
        </span>
      </div>
    );
  }
}
