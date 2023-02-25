import React from 'react'

function ChildComponent( props) {
  return (
    <div>

        {/* <button onClick={props.greethandler}>GreetParent</button> */}
        <button onClick={()=>props.greethandler('child')}>GreetParent</button>

    </div>
  )
}

export default ChildComponent 