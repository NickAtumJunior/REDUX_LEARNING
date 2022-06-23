import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { fourAction, oneAction, thirdAction, twoAction } from './store/actions/Actions'

function Check(props) {
     const Checkingthings = useSelector(state => state)
     const dispatch = useDispatch()
  return (
    <div>
        <h1>{props.name}</h1>
        <p>{Checkingthings}</p>
         <button onClick={() => dispatch(oneAction())}>additionalone</button>
         <button onClick={() => dispatch(twoAction())}>additionaltwo</button>
         <button onClick={() => dispatch(thirdAction())}>additionalthree</button>
         <button onClick={() => dispatch(fourAction())}>additionalfour</button>
    </div>
  )
}

export default Check