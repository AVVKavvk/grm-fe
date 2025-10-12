// Get last date of current month in IST timezone
const getLastDateOfMonth = () => {
  const now = new Date();

  // Get date in IST
  const istDate = new Date(
    now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
  );

  const year = istDate.getFullYear();
  const month = istDate.getMonth() + 1; // Current month (1-12)

  // Get last day of current month
  // Create date for next month's 0th day (which is last day of current month)
  const lastDayOfMonth = new Date(year, istDate.getMonth() + 1, 0);
  const day = lastDayOfMonth.getDate();

  // Full date string in ISO format with time set to 23:59:59
  const date = `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}T23:59:59`;

  // Calculate days remaining from today to last day of month
  const currentDay = istDate.getDate();
  const daysRemaining = day - currentDay;

  return { date, year, month, day, daysRemaining };
};

export default getLastDateOfMonth;

// Example usage:
// import getLastDateOfMonth from './getLastDateOfMonth';
// const { date, year, month, day, daysRemaining } = getLastDateOfMonth();
// console.log(date, year, month, day, daysRemaining);
// For October 12, 2025: date = "2025-10-31T23:59:59", year = 2025, month = 10, day = 31, daysRemaining = 19
