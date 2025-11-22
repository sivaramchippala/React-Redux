import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";
const rootreducer = (state = { age: 24, count: 0 }, action) => {
    if (action.type === "inc_age") return { ...state, age: state.age + 1 };
    if (action.type === "dec_age") return { ...state, age: state.age - 1 };
    if (action.type === "inc_count") return { ...state, count: state.count + 1 }
    if (action.type === "dec_count") return { ...state, count: state.count - 1 }

    return state;
}

const store = createStore(rootreducer,applyMiddleware(thunk));

export default store;

//store.getState()

 export const countSelector=(state)=>{
    console.log(state)
    return state.count
}

 export const ageSelector=(state)=>{
    // console.log(state);
    return state.age
}


//while we use the async call use the middle ware for that install npm redux-thunk

const asynCountIncrement=()=>{

}