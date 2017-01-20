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

class App extends Component {
  render() {
      return (
        <div className="App">
          { list.map(item =>
                <div>
                  <span>
                    <a href={item.url}>{item.title}</a>
                  </span>
                  <span>{item.author}</span>
                  <span>{item.num_comments}</span>
                  <span>{item.points}</span>
                </div>
          )}
        </div>
      );
  }
}

export default App;