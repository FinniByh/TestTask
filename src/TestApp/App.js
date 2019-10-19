import React from 'react';
import './App.css';
import Filter from './Components/Filter/Filter'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      Filter: 'all'
    }
  }

  setFilter = (FilterValue) => {
    this.setState({Filter: FilterValue.target.value});
  }

  render() {
    return(
      <div>
        <Filter set={this.setFilter}/>
      </div>
    );
  }
}