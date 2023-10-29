const addDays = require("date-fns/addDays");

const getDaysAfterXDays = (days) => {
  const newDate = addDays(new Date(2020, 8, 22), days);
  console.log(newDate);
  return `${newDate.getDate()}
  -${newDate.getMonth() + 1}
  -${newDate.getFullYear()}`;
};
module.exports = getDaysAfterXDays;
