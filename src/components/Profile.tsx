// import { ProfileProps } from "../types/Profile.types"
import "../styles/profile.css"

export default function Profile() {

  return (
    <div className="profile-container">
      <div className="profile-headbar">
        <img src="" alt="profile-pic"></img>
        <div>พชร พรมแพง</div>
        <div>สถานะ : {true ? "pass" : "not pass"}</div>
      </div>
    </div>
  )
}