import { createStore } from "redux"
// import { oneAction, thirdAction, twoAction } from "./actions/Actions"
import { reducers } from "./Reducers";

// import { First_Redux, Second_Redux, THIRD } from "./Types"

// const First_Redux = "first redux working"
// const Second_Redux = "second redux working"
// const THIRD = ""


// //actions 
// export const oneAction = () =>({type: First_Redux})
// export const twoAction = () =>({type: Second_Redux})
// export const thirdAction = () => ({type: THIRD})

//reducers

// const reducers = (state,action) =>{
//   if(action.type === First_Redux){
//      return state = "first working"
//   }else if(action.type === Second_Redux){
//     return state = "second working"
//   }else if(action.type === THIRD){
//     return state = "third working"
//   }else{
//     return state = "nothing here"
//   }


//store
export const store = createStore(reducers);

//dispatch

// store.dispatch(oneAction())
// store.dispatch(twoAction())
// store.dispatch(thirdAction())