import React, { Component } from 'react'

 class Form extends Component {

    handleusernamechange= event =>{
        this.setState(
            {
                username:event.target.value
            }

        )
    }
    handlemessagechange= event =>{
        this.setState(
            {
                message:event.target.value
            }

        )
    }
    handletopichange= event =>{
        this.setState(
            {
                topic:event.target.value
            }

        )
    }
    handlesubmit = event =>{
       
            {
                alert(`${this.state.username} ${this.state.message} ${this.state.topic}`)
                event.preventDefault()
            }

        

    }
  render() {
    return (
      <form onSubmit={this.handlesubmit}>
        <div>
            <label value={this.state.username}onChange={this.handleusernamechange}>
                Username
            </label>
            <input type="Text"/>
        </div>
        <div>
            <label value={this.state.message}onChange={this.handlemessagechange}>Comments</label>
            <textarea></textarea>
        </div>
        <div>
        <label>Topic</label>
        <select value={this.state.topic} onChange={this.handletopichange}>
            <option value="React">React</option>
            <option value="Vue">Vue</option>
            <option value="Angular">Angular</option>
        </select>
        </div>
        <button type='submit'>Submit</button>

      </form>
    )
  } 
}

export default Form