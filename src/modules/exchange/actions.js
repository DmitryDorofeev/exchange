export const CHANGE_VALUE = '@exchange/CHANGE_VALUE';
export const CHANGE_RESULT = '@exchange/CHANGE_RESULT';
export const EXCHANGE = '@exchange/EXCHANGE';
export const SWITCH_CURRENCY = '@exchange/SWITCH_CURRENCY';

export const changeValue = (payload) => ({
  type: CHANGE_VALUE,
  payload,
});

// for sagas only
export const changeResult = (payload) => ({
  type: CHANGE_RESULT,
  payload,
});

export const exchange = (payload) => ({
  type: EXCHANGE,
  payload,
});

export const switchFromCurrency = (currency) => ({
  type: SWITCH_CURRENCY,
  payload: {
    direction: 'from',
    currency,
  },
});

export const switchToCurrency = (currency) => ({
  type: SWITCH_CURRENCY,
  payload: {
    direction: 'to',
    currency,
  },
});