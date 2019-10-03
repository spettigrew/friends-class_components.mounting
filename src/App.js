import React, { Component } from "react";
import "./App.css";
import { people } from './people'

class App extends Component {
  constructor() {
    console.log("Constructor Invoked.")
    super();

    this.state = {
      friends: []
    };
  }
  componentDidMount() {
    console.log("CDM Invoked.");
    this.setState({ friends: people });
    }
  
   render() {
     console.log('Render Invoked.')
    return (
      <div className="App">
        <h1> Welcome Friends! </h1>
        {this.state.friends.map(friend => (
          <div key={friend.id}>{friend.first_name}</div>
        ))}
      </div>
    );
  }
}

export default App;
