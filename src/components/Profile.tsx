import { ProfileProps } from "../types/Profile.types"
import "../styles/profile.css"

export default function Profile(props: ProfileProps) {

  const handleStatus = (b: boolean) => {
    if (b) { //pass the criteria
      return (
        <div className="page1-pass-status">
          <span className="page1-pass-text006">
            <span>สถานะ : pass</span>
          </span>
        </div>
      )
    } else {
      return ( // not pass the criteria
        <div className="page1-not-pass-status">
          <span className="page1-not-pass-text006">
            <span>สถานะ : not pass</span>
          </span>
        </div>
      )
    }

  }

  return ( // return profile component
    <div className="page1-profile-section">
      <div className="page1-frame10204">
        <div className="page1-frame10205">
          <div className="page1-latest-pic">
            <div className="page1-vector-bg">
              <img
                src="https://tr.rbxcdn.com/ef9bb7b81b5c5046686c4bbcf9a1e189/420/420/Hat/Png"
                alt="profile-pic"
                className="page1-profile-pic"
              />
            </div> 
          </div>
          <div className="page1-name">
            <span className="page1-text002">
              <span>{props.name.first} {props.name.last}</span> 
            </span>
            <span className="page1-text004">
              <span>{props.email}</span>
            </span>
          </div>
        </div>
        <div>
          {handleStatus(props.passStatus)}
        </div>
      </div>
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
    </div>
  )
}