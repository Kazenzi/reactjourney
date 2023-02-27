import React, { Component } from 'react'

 class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isloggedin:false
      }
    }
     render() {


         return this.state.isloggedin && <div>Welcome Kazenzi</div>
        //  return (
        //      this.state.isloggedin ?(
        //          <div>welcome kazenzi</div> ):(
        //          <div>welcome Guest</div>)
        //  )

    // let message
    // if(this.state.isloggedin){
    //     message=<div>welcome kazenzi</div>
    // } else{
    //     message =<div>welcome Guest</div>
    // }
    // return <div>{message}</div>
    // if(this.state.isloggedin){
    //     return(
    //         <div>
    //             welcome kazenzi
    //         </div>
    //     )
    // } else{
    //     return(
    //         <div>
    //             welcome Guest
    //         </div>)

    //     }
    // return (
    //     <div>
    //   <div>
    //     welcome kazenzi
    //   </div>
    //   <div>Welcome Guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting