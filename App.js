import React from 'react'
import Header from './Components/Header'
import Cart from './Components/Cart'
import Home from './Components/Home'
import { Route } from 'react-router-dom'
import './App.css'
import { Context } from './Context/Context'
function App() {
  return (
    <Context>
      <Header />
      <div className="App">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} />
      </div>
    </Context>
  )
}

export default App
