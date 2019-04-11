import React from 'react'
// ! Routes
import { Router } from '@reach/router'
// Containers
import Todo from '../../../container/Todo'

export default function PrivateRoutes() {
  return (
    <Router>
      <Todo path='/' />
    </Router>
  )
}
