import { store } from "."
import { fourAction, oneAction, thirdAction, twoAction } from "./actions/Actions"

store.dispatch(oneAction())
store.dispatch(twoAction())
store.dispatch(thirdAction())
store.dispatch(fourAction())