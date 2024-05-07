import { useEffect, useState } from "react";
import fetchUser from "../../api/user";
import Header from "../Header";
import Profile from "../Profile/Profile";
import Downloader from "../Downloader";
import TranscriptReport from "../TranscriptReport/TranscriptReport";
import "../../styles/App.css";
import {
  ActivityProps,
  StudentProps,
} from "../../types/TranscriptReport.types";
import { name } from "../../types/Profile.types";


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


  const name = {
    first: userData?.firstname,
    last: userData?.lastname,
  };

  const sumHours = () => {
    // Check if userData and userData.activities are defined
    if (!userData || !userData.activities) {
      return 0; // Return 0 if userData or userData.activities is undefined
    }

    // Flatten the nested arrays using flat() method
    const flattenedData = userData.activities.flat(
      Infinity
    ) as ActivityProps[][];

    // Use reduce to sum up the hours
    const totalHours = flattenedData.reduce((acc, curr) => {
      // Check if the current item has the "hours" property using the in operator
      if ("hours" in curr) {
        // If "hours" is an array, use reduce to sum up its elements
        if (Array.isArray(curr.hours)) {
          return acc + curr.hours.reduce((a, b) => a + b, 0);
        }
        // If "hours" is a number, directly add it to the accumulator
        else if (typeof curr.hours === "number") {
          return acc + curr.hours;
        }
      }
      return acc; // Return the accumulator unchanged if "hours" is not present or not a number/array
    }, 0);

    return totalHours;
  };

  const getActivityAmount = () => {
    // Check if userData and userData.activities are defined
    if (!userData || !userData.activities) {
      return 0; // Return 0 if userData or userData.activities is undefined
    }

    // Map each 2D array of activities to its length
    const activityAmounts = userData.activities.map(
      (activityArray) => activityArray.length
    );

    // Sum up the lengths of all activity arrays
    const totalActivityAmount = activityAmounts.reduce(
      (acc, curr) => acc + curr,
      0
    );

    return totalActivityAmount;
  };

  const profile = {
    name: name,
    email: userData?.email,
    passStatus: false,
    totalHours: sumHours(),
    totalActivity: getActivityAmount(),
  };


  const activitiesData: ActivityProps[][] = userData?.activities ?? [];

  return (
    <>
      <Header />
      <Profile
        name={profile.name as name}
        email={profile.email as string}
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
