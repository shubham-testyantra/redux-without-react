const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const WAKE_UP = "WAKE_UP";
const EAT_FOOD = "EAT_FOOD";
const GO_TO_SLEEP = "GO_TO_SLEEP";

function wakeUp() {
  return {
    type: WAKE_UP,
  };
}
function eatFood() {
  return {
    type: EAT_FOOD,
  };
}
function goToSleep() {
  return {
    type: GO_TO_SLEEP,
  };
}
const initialWakeUpState = {
  numofTimesWaking: 5,
};

const initialEatState = {
  numofTimesEating: 3,
};
const initialgoToSleepState = {
  numofTimesSleeping: 2,
};

//Multiple Reducers
const wakeReducer = (state = initialWakeUpState, action) => {
  switch (action.type) {
    case WAKE_UP:
      return {
        ...state,
        numofTimesWaking: state.numofTimesWaking - 1,
      };
    default:
      return state;
  }
};
const eatReducer = (state = initialEatState, action) => {
  switch (action.type) {
    case EAT_FOOD:
      return {
        ...state,
        numofTimesEating: state.numofTimesEating - 1,
      };
    default:
      return state;
  }
};
const sleepReducer = (state = initialgoToSleepState, action) => {
  switch (action.type) {
    case GO_TO_SLEEP:
      return {
        ...state,
        numofTimesSleeping: state.numofTimesSleeping - 1,
      };
    default:
      return state;
  }
};

//CREATe STORE ACCEPTS ONLY ONE REDUCER
//COMBINING THE REDUCERS

const rootReducer = combineReducers({
  wake: wakeReducer,
  eat: eatReducer,
  sleep: sleepReducer,
});
const store = createStore(rootReducer);
console.log("Initial State >>>", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated State >>>", store.getState());
});

store.dispatch(wakeUp());
store.dispatch(wakeUp());
store.dispatch(eatFood());
store.dispatch(eatFood());
store.dispatch(eatFood());
store.dispatch(goToSleep());
store.dispatch(goToSleep());


unsubscribe();
