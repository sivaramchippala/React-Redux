import React from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import store, { ageSelector, countSelector } from './Store'
import "./App.css";
// useDispatch
// useSelector // view 

const Age = () => {
  console.log("age component rendered");
  const dispatch = useDispatch();
  const incrementAge = () => {
    dispatch({ type: "inc_age" });
  }
  const decrementAge = () => {
    dispatch({ type: "dec_age" });
  }
  return (
    <div className='box'>
      <p>Age Component</p>
      <button onClick={incrementAge}>increment</button>
      <button onClick={decrementAge}>Decrement</button>
    </div>
  )
}
const Counter = () => {
  console.log("count component rendered");
  const dispatch = useDispatch();
  const incrementCount = () => {
    dispatch({ type: "inc_count" });
  }
  const decrementCount = () => {
    dispatch({ type: "dec_count" });
  }
  const asynincrement = () => {
    dispatch(async function(dispatch,getState){
      console.log("inside async dispath", getState());
      await new Promice(r=>setTimeout(r,2000));
      dispatch({type:"inc_count"})
    });
  };

  //  const asynincrement = async() => {
  //   await new Promise((r)=>setTimeout(r,1000));
  //   dispatch({ type: "inc_count" });
  // }

  return (
    <div className='box'>
      <p>Counter Component</p>
      <button onClick={incrementCount}>increment count</button>
      <button onClick={decrementCount}>Decrement count</button>
      <button onClick={asynincrement}>asyn increment count</button>
    </div>
  )
}

const View = () => {
  console.log("view component rendered");
  const count = useSelector(countSelector);
  const age = useSelector(ageSelector);
  return (
    <div className='box'>
      <p>View Component</p>
      <p><b>Age:</b>{age}</p>
      <p><b>Counter:</b>{count}</p>
    </div>
  )
}



function App() {
  return (
    <Provider store={store}>
      <h1>React-Redux</h1>
      <div className='container'>
        <Age />
        <Counter />
        <View />
      </div>
    </Provider>
  )
}

export default App