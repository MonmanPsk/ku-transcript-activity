export function sumArray(userData: number[]) {
  const total = userData.reduce((acc, curr) => {
    return acc + curr;
  });

  return total;
}
