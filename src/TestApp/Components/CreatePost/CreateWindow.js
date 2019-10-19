import React from 'react'

export default class CreateWindow extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      PostText: '',
      Name: '',
      Theme: 'Nature'
    }
  }

  sendPostInfo = () => {
    if (!this.state.Name) {alert('Please enter your name'); return}
    let PostDate = new Date();
    this.props.submit(this.state, PostDate);
  }

  ChangeText = (textarea) => {
    this.setState({PostText: textarea.target.value})
  }

  ChangeTheme = (select) => {
    this.setState({Theme: select.target.value})
  }

  ChangeName = (inputName) => {
    this.setState({Name: inputName.target.value})
  }

  render() {
    return(
      <div>
        <form>
          <label>
            <textarea onChange={this.ChangeText}>
              Enter post...
            </textarea>
          </label>
          <label>Choose post theme
            <select onChange={this.ChangeTheme}>
              <option value="Nature">Nature</option>
              <option value="Health">Health</option>
              <option value="Lifestyle">Lifestyle</option>
            </select>
          </label>
        </form>
        <form>
          <label>Your name
            <input onChange={this.ChangeName}>
            </input>
          </label>
          <button type='button' onClick={this.sendPostInfo}>Submit</button>
        </form>
      </div>
    );
  } 
}