import React from 'react'
import './App.css'
import Login from './Login'
import Logout from './Logout'
import Notes from './components/Notes/Notes'
import { Route, Switch } from 'react-router-dom'

function App() {
  return(
  <div className="App">
    <Route exact path ='/'component={Login} />
    <Route exact path ='/notes'component={Notes} />
    <Route exact path ='/notes'component={Logout} />  
  </div>
  )
}
export default App