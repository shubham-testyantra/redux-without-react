const redux = require("redux");
const createStore = redux.createStore;

const WATCH_MOVIE = "WATCH_MOVIE";
const PLAY_MOVIE = "PLAY_MOVIE";

function watchMovie() {
  return {
    type: WATCH_MOVIE,
  };
}
function playMovie() {
  return {
    type: PLAY_MOVIE,
  };
}

const initialState = {
  numOfMovies: 7,
  numofWatched: 7,
  numofWatched: 7,
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case WATCH_MOVIE:
      return {
        ...state,
        numofWatched: state.numofWatched + 1,
      };
    case PLAY_MOVIE:
      return {
        ...state,
        numofWatched: state.numofWatched + 1,
      };
    default:
      return state;
  }
};

const store = createStore(moviesReducer);
console.log("Total Movies", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Movies Watched ", store.getState());
  console.log("Movies Played ", store.getState());
});

store.dispatch(watchMovie());
store.dispatch(playMovie());

unsubscribe();
