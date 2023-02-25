import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

 class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:'Parent'
      }
      this.greetparent=this.greetparent.bind(this)
    }
    greetparent( childName){
        // alert('Hello'+ this.state.parentName)
        alert(`Hello ${this.state.parentName}from  ${childName}`)
    }
  render() {
    return (
      <div>
        <ChildComponent  greethandler={this.greetparent}/>
      </div>
    )
  }
}

export default ParentComponent