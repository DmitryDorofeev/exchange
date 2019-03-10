export const FETCH_STARTED = '@rates/FETCH_STARTED';
export const FETCH_SUCCEEDED = '@rates/FETCH_SUCCEEDED';
export const FETCH_FAILED = '@rates/FETCH_FAILED';

export const fetchStarted = () => ({type: FETCH_STARTED});
export const fetchSucceeded = (payload) => ({type: FETCH_SUCCEEDED, payload});
export const fetchFailed = (payload) => ({type: FETCH_FAILED, payload});