import React, {RefObject} from 'react'

export default class NameForm extends React.Component {
  
  nameRef: RefObject<HTMLInputElements> = React.createRef()

  handleSubmit = (event: React.FormEvent<HTMLFormElement> ) => {
    event.preventDefault()

    if (this.nameRef.current) {
      alert(this.nameRef.current.value)
    }
  }

  render () { 
    return (
      <form onSubmit={this.handleSubmit}>
        <button>Submit</button>
        <input type="text" ref={this.nameRef}/>
      </form>
    )
  }
}