import React from 'react'
// Components
import Form from '../../components/Todo/Form.component'
// Helper
import { addTask } from '../../helpers/todo.halper'

function App() {

  const sendData = (task) => {
    console.log(task)
    addTask(task)
    return null
  }

  return (
    <div>
      <Form sendData={sendData} />
    </div>
  )
}

export default App