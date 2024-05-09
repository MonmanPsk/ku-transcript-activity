import { StudentProps, ActivityProps } from "../types/TranscriptReport.types";

export function sumHoursNestedArray(userData: StudentProps) {
  // Check if userData and userData.activities are defined
  if (!userData || !userData.activities) {
    return 0; // Return 0 if userData or userData.activities is undefined
  }

  // Flatten the nested arrays using flat() method
  const flattenedData = userData.activities.flat(Infinity) as ActivityProps[][];

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
}
