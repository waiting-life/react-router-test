import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'

import MyNavLink from './components/MyNavLink'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="header">
          <Header/>
        </div>
        <div className="main-content">
          <div className="nav-list">
            <MyNavLink to="/home">Home</MyNavLink>
            <MyNavLink to="/about">About</MyNavLink>
          </div>
          <div className="show-container">
            <Switch>
              <Route path='/home' component={Home} />
              <Route path='/about' component={About} />
              <Redirect to='/home' />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}
