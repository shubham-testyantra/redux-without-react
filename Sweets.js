const redux = require("redux");



const createStore = redux.createStore;
const combineReducers = redux.combineReducers;




const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function buyCake(){
    return{
        type:BUY_CAKE
    }
}
function buyIcecream(){
    return{
        type:BUY_ICECREAM
    }
}
const initialCakeState={
    numOfCakes:20
}

const initialIcecreamState={
    numOfIceCreams:10
}


//Multiple Reducers
const cakeReducer=(state=initialCakeState,action)=>{
    switch(action.type){
        case BUY_CAKE:return{
            ...satate,
            numOfCakes:state.numOfCakes-1
        }
        default :return state
    }
}
const iceCreamReducer=(state=initialCakeState,action)=>{
    switch(action.type){
        case BUY_ICECREAM:return{
            ...satate,
            numOfCakes:state.numOfIceCreams-1
        }
        default :return state
    }
}

//CREATe STORE ACCEPTS ONLY ONE REDUCER
//COMBINING THE REDUCERS

const rootReducer= combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer
})

const store =  createStore(rootReducer)
console.log("Initial State >>>", store.getState());

const unsubscribe = store.subscribe(()=>{
    console.log("Updated State >>>",store.getState());
})


store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())

unsubscribe();