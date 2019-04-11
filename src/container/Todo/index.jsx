import React from 'react'
// Components
import Form from '../../components/Todo/Form.component'
// Helpers
import helper from '../../helpers/todo.halper'
// * HOC
import Connect from '../../hoc/Connect.hoc'
// ! Redux actions
import { addTaskAction } from '../../shared/redux/actions/todo.actions'

function App({ state, dispatch }) {

  const sendData = (task) => {
    console.log(task)
    dispatch(addTaskAction(helper.addTaskHelper(task)))
    return null
  }

  return (
    <div>
      <Form sendData={sendData} />
    </div>
  )
}

export default Connect(App)