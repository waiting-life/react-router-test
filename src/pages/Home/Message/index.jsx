import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

import Detail from './Detail'
export default class Message extends Component {
  state = {
    messageArr: [
      { id: "01", title: '信息1' },
      { id: "02", title: '信息2' },
      { id: "03", title: '信息3' },
    ]
  }
  render() {
    return (
      <div>
        <h4>这里是信息组件</h4>
        <ul>
          {
            this.state.messageArr.map( messageObj => {
              return (
                <li key={ messageObj.id }>
                  <Link to={`/home/message/detail/${messageObj.id}/${messageObj.title}`}>{ messageObj.title }</Link>
                </li>
              )
            })
          }
        </ul>
        <Route path="/home/message/detail/:id/:title" component={ Detail }/>
      </div>
    )
  }
}
