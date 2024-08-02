export const createCalendar = (months = 13) => {
  const dateStartDt = new Date();

  const monthsArr = Array(months).fill(0);

  return monthsArr
    .map((_monthNum, i) => i + dateStartDt.getMonth() + 1)
    .map((monthNum) => (monthNum - (monthNum - (monthNum % 12)) === 0 ? 12 : monthNum - (monthNum - (monthNum % 12))))
    .map((month, index) => {
      const year =
        month < dateStartDt.getMonth() + 1 || index > 11
          ? dateStartDt.getFullYear() + Math.round(index / 12)
          : dateStartDt.getFullYear();
      const monthYearDt = new Date(year, month, 0);
      const firstDay = new Date(year, monthYearDt.getMonth(), 1).getDay();
      return {
        month,
        monthTwoDigits: month < 10 ? `0${month}` : month.toString(),
        year,
        placeholders: Array(firstDay === 0 ? 6 : firstDay - 1).fill(0),
        days: Array(monthYearDt.getDate())
          .fill(0)
          .map((_val, i) => ({
            value: i + 1,
            today:
              new Date().getFullYear() + "-" + (new Date().getMonth() + 1) === `${year}-${month}` &&
              new Date().getDate() === i + 1,
            valueTwoDigits: i + 1 < 10 ? `0${i + 1}` : (i + 1).toString(),
          })),
      };
    });
};
