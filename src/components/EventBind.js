import React, { Component } from 'react'

 class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message:'Hello'
      }
      this.clickhandler=this.clickhandler.bind(this)
    }
    // clickhandler(){
    //      this.setState=({message:'Goodbye'})
    //     console.log(this)
    // }
    clickhandler=() =>{
        this.setState(
            {
                message:'Goodbye'
            }
        )
    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
{/* <button onClick={this.clickhandler.bind(this)}>Click</button> */}
{/* <button onClick={()=>this.clickhandler()}>Click</button> */}
<button onClick={this.clickhandler}>Click</button>
<button onClick={this.clickhandler} >trytwo</button>

      </div>
    )
  }
}

export default EventBind