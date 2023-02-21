export const calculateDayDifference = (oldDate) => {
  const oldParsedDate = new Date(oldDate);
  const todayParsedDate = new Date();

  const timeDiffInMs = todayParsedDate.getTime() - oldParsedDate.getTime();

  const timeDiffInDays = timeDiffInMs / 1000 / 86400;

  return timeDiffInDays;
};
