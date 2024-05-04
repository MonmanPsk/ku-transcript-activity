import { ProfileProps } from "../../types/Profile.types";
import "../../styles/profile.css";
import ProfileHeader from "./ProfileHeader";
import ProfileBottom from "./ProfileBottom";
import Status from "./Status";

export default function Profile(props: ProfileProps) {
  return (
    // return profile component
    <div className="page1-profile-section">
      <ProfileHeader
        first={props.name.first}
        last={props.name.last}
        email={props.email}
      >
        <Status pass={props.passStatus} />
      </ProfileHeader>
      <ProfileBottom
        totalHours={props.totalHours}
        totalActivity={props.totalActivity}
      />
    </div>
  );
}
