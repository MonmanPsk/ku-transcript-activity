import { StudentProps } from "../types/TranscriptReport.types";

export function getActivityAmount(userData: StudentProps) {
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
}
