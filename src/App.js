import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import Check from './Check';
import { oneAction, thirdAction, twoAction } from './store/actions/Actions';


function App() {
  const things = useSelector(state => state)
  const dispatch = useDispatch();
  return (
    <>
       <p>{things}</p>
       <button onClick={()=> dispatch(oneAction())}>
        oneAction
       </button>
       <button onClick={()=> dispatch(twoAction())}>
        twoAction
       </button>
       <button onClick={()=> dispatch(thirdAction())}>
        thirdAction
       </button>
       <Check name="nithish"/>
    </>
       
  )
}

export default App