import { ActivityProps } from "../types/TranscriptReport.types";

export function checkStatus(activities: ActivityProps[][]) {
    if (!activities || activities.length === 0) {
        return false;
    }

    const firstActivity: ActivityProps[] = activities[0];
    const secondActivity: ActivityProps[] = activities[1];
    const thirdActivity: ActivityProps[] = activities[2];

    const firstActivityStatus: boolean = (firstActivity.length >= 3) ? true : false;
    const secondActivityStatus: boolean = (secondActivity.length >= 4) ? true : false;
    const thirdActivityStatus: boolean = (thirdActivity.length >= 1) ? true : false;

    return firstActivityStatus && secondActivityStatus && thirdActivityStatus;
}