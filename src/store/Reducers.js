import { First_Redux, Four, Second_Redux, THIRD } from "./Types"

export const reducers = (state,action) =>{
    if(action.type === First_Redux){
       return state = "first working"
    }else if(action.type === Second_Redux){
      return state = "second working"
    }else if(action.type === THIRD){
      return state = "third working"
    }else if(action.type === Four){
      return state = "four working"
    }
}