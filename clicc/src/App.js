import React from 'react';
import './App.css';
import cheese from './cheeses.json';
import Nav from "./components/Nav";
import Cheesebox from "./components/Cheese";

class App extends React.Component {
  state = {
    cheese: cheese,
    score: 0,
    clicked: []
  }

  handleClick = id => {
    // id.preventDefault();
    this.setState({ score: this.state.score + 1 });
    console.log(this.state.score + id)
  }

  render() {
    return (
      <div>
        <Nav score={this.state.score} />
        <br /><br />
        <div className="container">
          <div className="row">
            {this.state.cheese.map(slice =>
              <Cheesebox
                image={slice.img}
                id={slice.id}
                onClick={this.handleClick}
              />
            )}
          </div>
        </div>
      </div>
    );
  };
};

export default App;
