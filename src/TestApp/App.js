import React from 'react';
import './App.css';
import Filter from './Components/Filter/Filter'
import CreateWindow from './Components/CreatePost/CreateWindow'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      Filter: 'all',
      Posts: [],
    }
  }

  setFilter = (FilterValue) => {
    this.setState({Filter: FilterValue.target.value});
  }

  addPost = (PostInfo, PostDate) => {
    let BufferArray = this.state.Posts
    PostInfo.Date = `${PostDate.getHours()}:${PostDate.getMinutes()} ${PostDate.getDate()}.${PostDate.getMonth()+1}.${PostDate.getFullYear()}`
    BufferArray.push(PostInfo)
    this.setState({Posts: BufferArray})
  }

  render() {
    return(
      <div>
        <Filter set={this.setFilter}/>
        <CreateWindow submit={this.addPost}/>
      </div>
    );
  }
}