import React, { Component } from 'react';
import './App.css';

const list = [
  {
    title : 'React',
    url : 'https://facebook.github.io/react/',
    author : 'Aji Pratama',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title : 'Redux',
    url : 'https://github.reactjs/redux',
    author : 'Dan Abramov, Andrew Clark',
    num_comments : 2,
    points: 5,
    objectID : 1,
  },
];

function isSearched(searcTerm) {
  return function(item) {
    return !searcTerm || item.title.toLowerCase().includes(searcTerm.toLowerCase());
  }
}

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      list,
      searcTerm: '',
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  onSearchChange(event){
    this.setState({ searcTerm: event.target.value});
  }

  onDismiss(id){

    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });
  }

  render() {
      const { searcTerm, list} = this.state;
      return (
        <div className="App">
          <form>
            <input
              type="text"
              value={searcTerm}
              onChange={this.onSearchChange}
              />
          </form>
          { filter(isSearched(searcTerm)).map(item =>
                <div key={item.objectID}>
                  <span>
                    <a href={item.url}>{item.title}</a>
                  </span>
                  <span>{item.author}</span>
                  <span>{item.num_comments}</span>
                  <span>{item.points}</span>
                  <span>
                    <button
                      onClick={() => this.onDismiss(item.objectID)}
                      type="button"
                    >
                      Dismiss
                    </button>
                  </span>
                </div>
          )}
        </div>
      );
  }
}

export default App;
