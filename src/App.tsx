// src/App.tsx
import React from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App