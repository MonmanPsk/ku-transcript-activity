import { useState, useEffect } from "react";

import { ProfileProps } from "../../types/Profile.types";
import "../../styles/profile.css";
import ProfileHeader from "./ProfileHeader";
import ProfileBottom from "./ProfileBottom";
import Status from "./Status";

import fetchUserEN from "../../api/user_en.ts";

export default function Profile({ profileImage, name, email, passStatus, totalHours, totalActivity }: ProfileProps) {
  const [profileLetter, setProfileLetter] = useState<string>("");

  useEffect(() => {
    if (window.localStorage.getItem("profileLetter") === null) {
      fetchUserEN().then((data) => {
        if (data) {
          setProfileLetter(data.firstname[0] + data.lastname[0]);
          window.localStorage.setItem("profileLetter", data.firstname[0] + data.lastname[0]);
        } else {
          console.error("fetchUser() returned undefined");
        }
      });
    }
    else {
      const letter = window.localStorage.getItem("profileLetter");
      setProfileLetter(letter as string);
    }
  }, []);

  return (
    // return profile component
    <div className="page1-profile-section">
      <ProfileHeader
        first={name.first}
        last={name.last}
        email={email}
        imageSrc={profileImage}
        profileLetter={profileLetter}
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
