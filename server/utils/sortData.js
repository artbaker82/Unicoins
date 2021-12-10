export const getSortedDataByDate = (expenses, time) => {
  //config object for times in milliseconds
  const timesInMilliseconds = {
    //keys are the values that could be passed in the time parameter
    "1w": 604800 * 1000,
    "1m": 2629746 * 1000,
    "3m": 7889238 * 1000,
    "6m": 15778476 * 1000,
    "9m": 23667714 * 1000,
    "9m": 23667714 * 1000,
    "1y": 31556952 * 1000,
  };

  const dateRange = Date.now() - timesInMilliseconds[time];

  const sortedExpenses = expenses.filter((expense) => {
    const date = new Date(expense.date).getTime();
    if (date > dateRange) {
      return expense;
    }
  });

  return sortedExpenses;
};
