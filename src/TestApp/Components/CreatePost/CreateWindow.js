import React from 'react'

export default class CreateWindow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      PostText: '',
      Name: '',
      Theme: 'Nature',
    }
  }

  sendPostInfo = () => {
    if (!this.state.Name) {alert('Please enter your name'); return}
    this.props.submit(this.state);
  }

  ChangeText = (textarea) => {
    this.setState({PostText: textarea.target.value})
  }

  ChangeTheme = (select) => {
    this.setState({Theme: select.target.value})
  }

  ChangeName = (inputName) => {
    if (inputName.target.value.length > 40) { alert('Your name too long'); return } 
    this.setState({Name: inputName.target.value})
  }

  render() {
    return(
      <div className='create-container'>
        <form className='create-main-info'>
          <label>
            <textarea 
              className='text-area'
              defaultValue='Enter your message here...' 
              onChange={this.ChangeText}
            />
          </label>
          <label className='choose-theme'>Choose post theme
            <select className='select-theme-menu' onChange={this.ChangeTheme}>
              <option value="Nature">Nature</option>
              <option value="Health">Health</option>
              <option value="Lifestyle">Lifestyle</option>
            </select>
          </label>
        </form>
        <form className='public-container'>
          <label className='enter-name'>Your name
            <input onChange={this.ChangeName}>
            </input>
          </label>
          <button type='button' onClick={this.sendPostInfo} className='button-submit'>Submit</button>
        </form>
      </div>
    );
  } 
}