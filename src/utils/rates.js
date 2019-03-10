export const fetchRatesApi = (rates = []) => {
  return fetch('https://openexchangerates.org/api/latest.json?app_id=40b148f856d442959d5954d2a717ff20')
    .then((response) => response.json())
    .then((json) => ({
      response: rates.reduce((prev, rate) => {
        prev[rate] = json.rates[rate];
        return prev;
      }, {}),
    }))
    .catch((error) => ({error}))
};