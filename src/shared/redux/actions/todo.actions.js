import { createAction } from 'redux-actions'
// Types
import { ADD_TASK } from '../types/todo.types'

export const addTaskAction = createAction(ADD_TASK)