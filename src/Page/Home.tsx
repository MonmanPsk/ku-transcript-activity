import { useEffect, useState } from "react";

import fetchUser from "../api/user.ts";
// import fetchUserEN from "../api/user_en.ts";

import Header from "../components/Header";
import Profile from "../components/Profile/Profile";
import Downloader from "../components/Downloader";
import TranscriptReport from "../components/TranscriptReport/TranscriptReport";

import "../styles/App.css";

import {
  ActivityProps,
  StudentProps,
} from "../types/TranscriptReport.types";
import { name } from "../types/Profile.types";

import { getActivityAmount } from "../modules/getActivityAmount.modules.ts";
import { sumHoursNestedArray } from "../modules/totalHours.modules.ts";
import { checkStatus } from "../modules/checkStatus.modules.ts";

function Home() {
  const [userData, setUserData] = useState<StudentProps | null>(null);

  useEffect(() => {
    // Fetch data only if userData is null (not fetched before)
    if (userData === null) {
      fetchUser().then((data) => {
        if (data) {
          setUserData(data);
        } else {
          // Handle case where fetchUser() returns undefined
          console.error("fetchUser() returned undefined");
        }
      });
    }
    // Add userData to dependency array to ensure useEffect runs only when userData changes
  }, [userData]); // useEffect will only run when userData changes

  const activitiesData: ActivityProps[][] = userData?.activities ?? [];

  const profile = {
    profileImage: userData?.profileImage as string,
    name: { first: userData?.firstname, last: userData?.lastname } as name,
    email: userData?.email as string,
    passStatus: checkStatus(activitiesData),
    totalHours: sumHoursNestedArray(userData as StudentProps),
    totalActivity: getActivityAmount(userData as StudentProps),
  };

  return (
    <>
      <Header />
      <Profile
        profileImage={profile.profileImage}
        name={profile.name}
        email={profile.email}
        passStatus={profile.passStatus}
        totalHours={profile.totalHours}
        totalActivity={profile.totalActivity}
      />
      <Downloader />
      <TranscriptReport activities={activitiesData} />
    </>
  );
}

export default Home;
