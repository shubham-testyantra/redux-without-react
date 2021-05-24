const redux = require("redux");
const createStore = redux.createStore;

const PLAY_CRICKET = "PLAY_CRICKET";

function playCricket() {
  return {
    type: PLAY_CRICKET,
  };
}

const initialState = {
  numOfPlayers: 11,
};

const sportsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAY_CRICKET:
      return {
        ...state,
        numOfPlayers: state.numOfPlayers - 1,
      };
    default:
      return state;
  }
};

const store = createStore(sportsReducer);

console.log(" Initial Players", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Playeres Out of Game ", store.getState());
});

store.dispatch(playCricket());
store.dispatch(playCricket());
store.dispatch(playCricket());

unsubscribe();
console.log("Cuurent Players", store.getState());
