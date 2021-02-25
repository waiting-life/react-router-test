import React, { Component } from 'react'

export default class Detail extends Component {
  state = {
    DetailDate: [
      { id: '01', content: '你好' },
      { id: '02', content: '吃饭了吗' },
      { id: '03', content: '睡觉了吗' }
    ]
  }
  
  render() {
    const { id, title } = this.props.match.params
    const findResult = this.state.DetailDate.find( detailObj => {
      return detailObj.id === id
    })
    return (
      <ul>
        <li>ID: { id }</li>
        <li>TITLE: { title }</li>
        <li>CONTENT: { findResult.content }</li>
      </ul>
    )
  }
}
