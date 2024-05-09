import { ProfileProps } from "../../types/Profile.types";
import "../../styles/profile.css";
import ProfileHeader from "./ProfileHeader";
import ProfileBottom from "./ProfileBottom";
import Status from "./Status";

export default function Profile({ name, email, passStatus, totalHours, totalActivity }: ProfileProps) {
  return (
    // return profile component
    <div className="page1-profile-section">
      <ProfileHeader
        first={name.first}
        last={name.last}
        email={email}
      >
        <Status pass={passStatus} />
      </ProfileHeader>
      <ProfileBottom
        totalHours={totalHours}
        totalActivity={totalActivity}
      />
    </div>
  );
}
