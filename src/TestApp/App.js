import React from 'react';
import './App.css';
import Filter from './Components/Filter/Filter'
import CreateWindow from './Components/CreatePost/CreateWindow'
import Post from './Components/Post/Post'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      Filter: 'All',
      Posts: [],
      PostsForView: [],
    }
  }

  setFilter = (FilterValue) => {
    this.setState({Filter: FilterValue.target.value}, () => {
      this.updateFilter();
    });
  }

  updateFilter = () => {
    let BufferPosts
    if (this.state.Filter !== 'All') {
      BufferPosts = this.state.Posts.filter(el => el.Theme === this.state.Filter)
    } else
      BufferPosts = this.state.Posts
    this.setState({PostsForView: BufferPosts})
  }

  addPost = (PostInfo) => {
    let BufferArray = this.state.Posts
    let PostDate = new Date();
    PostInfo.Date = `${PostDate.getHours()}:${PostDate.getMinutes()} ${PostDate.getDate()}.${PostDate.getMonth()+1}.${PostDate.getFullYear()}`
    BufferArray.unshift(PostInfo)
    this.setState({Posts: BufferArray}, () => {
      this.updateFilter()
    });
  }

  render() {
    return(
      <div className='container'>
        <Filter set={this.setFilter}/>
        <div className='posts-container'>
          {
            this.state.PostsForView.map( (el, index) => 
            <Post 
            name={el.Name}
            text={el.PostText}
            theme={el.Theme}
            date={el.Date}
            key={index}
            />
          ) }
        </div>
        <CreateWindow submit={this.addPost}/>
      </div>
    );
  }
}