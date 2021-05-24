const redux = require("redux");


//Create store
const createStore = redux.createStore;

//Action: Define with string constraints
const BUY_CAKE = "BUY_CAKE";

//Action Creator =  It is  a function
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "I am here to buy a cake",
  };
}

//Initialize the state
const initialState = {
  numOfCakes: 20,
};

//Create a reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        //copy of the state objects
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    //new state value
    default:
      return state;
  }
};

//1) Create a store & it holds the application state
const store = createStore(reducer);

//2) getState() gives the initial state value of application
console.log("Initial Value", store.getState());

//3) Subscribe: Holds the new state value
const unsubscribe = store.subscribe(() => {
  console.log("Updated state value", store.getState());
});

//4) Dispatch: Accepts action as parameter
store.dispatch(buyCake()); //20-1=19
store.dispatch(buyCake()); //19-1=18
store.dispatch(buyCake()); //18-1=17

//5)Unregistering
unsubscribe();
