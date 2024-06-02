import { useState, useEffect } from "react";

import fetchUser from "../api/user.ts";
import fetchUserEN from "../api/user_en.ts";

import { StudentProps } from "../types/TranscriptReport.types.ts";

export function useUserData() {
    const [userData, setUserData] = useState<StudentProps | null>(null);

    useEffect(() => {
        // Clear localStorage from before version
        window.localStorage.clear()
        // Fetch TH user data from api
        fetchUser().then((data) => {
            if (data) {
                setUserData(data);
            } else {
                // Handle case where fetchUser() returns undefined
                console.error("fetchUser() returned undefined");
            }
        });
    }, []) // useEffect will only run once at first

    return userData as StudentProps
}

export function useProfileLetter() {
    const [profileLetter, setProfileLetter] = useState<string>("");

    useEffect(() => {
        // Fetch EN user data from api
        fetchUserEN().then((data) => {
            if (data) {
                setProfileLetter(data.firstname[0] + data.lastname[0]);
            } else {
                console.error("fetchUserEN() returned undefined");
            }
        });
    }, [])

    return profileLetter
}