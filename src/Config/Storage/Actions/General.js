import * as TYPES from '../Reducers/Types';

const TAG = "GENERAL ACTIONS";

/**
 * Counter Function
 * @param {Boolean} increment - Operation type, increment or not (decrement)
 */
export function counterStrike(increment = true) {
  return (dispatch, getState) => {
    return dispatch({
      type: TYPES.COUNTER,
      counter: (increment) ? getState().counter + 1 : getState().counter - 1
    });
  }
}

/**
 * App Refresher
 */
export function refreshApp() {
  return (dispatch, getState) => {
    let prevValue = getState().refresh_app;

    if (!prevValue) {
      return dispatch({
        type: TYPES.REFRESH_APP,
        refresh_app: true
      }, () => {
        setTimeout(() => {
          return dispatch({
            type: TYPES.REFRESH_APP,
            refresh_app: false
          })
        }, 1000);
      });
    }
    else {
      return dispatch({
        type: TYPES.REFRESH_APP,
        refresh_app: false
      });
    }
  }
}