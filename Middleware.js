const redux = require("redux");

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

// =====================================================
//1)import the middleware redux logger
const reduxLogger = require("redux-logger");

//2)Created the logger
const logger = reduxLogger.createLogger();

// 3)make use of middleware
const applyMiddleware = redux.applyMiddleware;

const BUY_APPLE = "BUY_APPLE";
const BUY_MANGO = "BUY_MANGO";

function buyApple() {
  return {
    type: BUY_APPLE,
  };
}
function buyMango() {
  return {
    type: BUY_MANGO,
  };
}
const initialAppleState = {
  numOfApple: 0,
};
const initialMangosState = {
  numOfMangoes: 0,
};
const AppleReducer = (state = initialAppleState, action) => {
  switch (action.type) {
    case BUY_APPLE:
      return {
        ...state,
        numOfApple: state.numOfApple + 1,
      };
    default:
      return state;
  }
};

const MangoesReducer = (state = initialAppleState, action) => {
  switch (action.type) {
    case BUY_MANGO:
      return {
        ...state,
        numOfMangoes: state.numOfMangoes + 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  apple: AppleReducer,
  mango: MangoesReducer,
});

//Call the Applymiddleware with logger
const store = createStore(rootReducer, applyMiddleware(logger));

console.log("Initial State >>>", store.getState());

const unsubscribe = store.subscribe(() => {
  // console.log("Updating State values >>>", store.getState())
  {
  } //Logger
});

store.dispatch(buyMango());
store.dispatch(buyMango());
store.dispatch(buyApple());
store.dispatch(buyApple());

unsubscribe();
