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

function Home({ data, profileLetter }: { data: StudentProps, profileLetter: string }) {
  const activitiesData: ActivityProps[][] = data?.activities ?? [];

  const profile = {
    profileImage: data?.profileImage as string,
    name: { first: data?.firstname, last: data?.lastname } as name,
    email: data?.email as string,
    passStatus: checkStatus(activitiesData),
    totalHours: sumHoursNestedArray(data as StudentProps),
    totalActivity: getActivityAmount(data as StudentProps),
  };

  return (
    <>
      <Header />
      <Profile
        profileImage={profile.profileImage}
        profileLetter={profileLetter}
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
