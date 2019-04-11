import { combineReducers } from 'redux'
// Reducer
import todo from './reducer/todo.reducer'

const ROOT_REDUCER = combineReducers({
  todo
})

export default ROOT_REDUCER