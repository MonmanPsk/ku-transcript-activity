import { ActivityProps } from "../types/TranscriptReport.types";

export function checkStatus(activities: ActivityProps[][]) {
    if (!activities || activities.length === 0) {
        return false;
    }

    const firstActivity: ActivityProps[] = activities[0];
    const secondActivity: ActivityProps[] = activities[1];
    const thirdActivity: ActivityProps[] = activities[2];

    const firstActivityStatus: boolean = (firstActivity.length >= 3);
    const secondOneActivityStatus: boolean = (secondActivity.filter((activity) => {
        if ((activity.hours as number[])[0] > 0) return activity;
    }).length >= 1);
    const secondTwoActivityStatus: boolean = (secondActivity.filter((activity) => {
        if ((activity.hours as number[])[1] > 0) return activity;
    }).length >= 1);
    const secondThreeActivityStatus: boolean = (secondActivity.filter((activity) => {
        if ((activity.hours as number[])[2] > 0) return activity;
    }).length >= 1);
    const secondFourActivityStatus: boolean = (secondActivity.filter((activity) => {
        if ((activity.hours as number[])[3] > 0) return activity;
    }).length >= 1);
    const thirdActivityStatus: boolean = (thirdActivity.length >= 1);    

    return firstActivityStatus && (secondOneActivityStatus && secondTwoActivityStatus && secondThreeActivityStatus && secondFourActivityStatus) && thirdActivityStatus;
}