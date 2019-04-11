import { createAction } from 'redux-actions'
// Types
import { ADD_TASK } from '../types/todo.types'
import { SHOW_TASKS } from '../types/todo.types'

export const addTaskAction = createAction(ADD_TASK)
export const showAllTasksAction = createAction(SHOW_TASKS)