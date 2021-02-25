import React, { Component } from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'

import News from './News'
import Message from './Message'

import './index.css' 

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>这里是Home组件</h3>
        <ul className="home-nav-list">
          <li>
            <NavLink to="/home/news" className="home-list-item">新闻</NavLink>
          </li>
          <li>
            <NavLink to="/home/message" className="home-list-item">消息</NavLink>
          </li>
        </ul>
        <div className="news-show-container">
          <Switch>
            <Route path="/home/news" component={ News }/>
            <Route path="/home/message" component={ Message }/>
          </Switch>
        </div>
      </div>
    )
  }
}
