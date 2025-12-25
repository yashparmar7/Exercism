/**
 * The day rate, given a rate per hour
 */
export function dayRate(ratePerHour) {
  return ratePerHour * 8;
}

/**
 * Calculates the number of days in a budget, rounded down
 */
export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / dayRate(ratePerHour));
}

/**
 * Calculates the discounted rate for large projects, rounded up
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const dailyRate = dayRate(ratePerHour);
  const fullMonths = Math.floor(numDays / 22);
  const remainingDays = numDays % 22;

  const discountedMonthlyCost =
    fullMonths * 22 * dailyRate * (1 - discount);

  const remainingCost = remainingDays * dailyRate;

  return Math.ceil(discountedMonthlyCost + remainingCost);
}
