export function TimeDifference(startTime: string, endTime: string) {
  // Convert start and end times to Date objects
  const startDate: any = new Date(`2000-01-01T${startTime}:00`);
  const endDate: any = new Date(`2000-01-01T${endTime}:00`);

  // Calculate the difference in hours
  const diffHours = (endDate - startDate) / (1000 * 60 * 60);

  // Check if the difference is a whole number
  if (diffHours % 1 === 0) {
    return Math.round(diffHours);
  } else {
    return diffHours.toFixed(1);
  }
}
