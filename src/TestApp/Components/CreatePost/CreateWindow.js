import React from 'react'

export default class CreateWindow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      PostText: '',
      Name: '',
      Theme: 'Nature',
      TextAreaDefault: 'Enter your message here...',
    }

    this.AreaClear = React.createRef();
  }

  sendPostInfo = () => {
    if (!this.state.Name) {alert('Please enter your name'); return}
    this.props.submit(this.state);
    this.AreaClear.current.value = 'Enter your message here...'
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

  TextareaFocus = (textarea) => {
    if (textarea.target.value === this.state.TextAreaDefault) textarea.target.value = '';
  }

  TextareaBlur = (textarea) => {
    if (!textarea.target.value) textarea.target.value = this.state.TextAreaDefault;
  }

  render() {
    return(
      <div className='create-container'>
        <form className='create-main-info'>
          <label>
            <textarea 
              className='text-area'
              defaultValue={this.state.TextAreaDefault} 
              onChange={this.ChangeText}
              onFocus={this.TextareaFocus}
              onBlur={this.TextareaBlur}
              ref={this.AreaClear}
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