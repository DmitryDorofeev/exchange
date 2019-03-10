const currencyMap = {
  'GBP': '£',
  'USD': '$',
  'EUR': '€',
};

export const getCurrencySymbol = (currency) => {
  return currencyMap[currency];
};