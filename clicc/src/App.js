import React from 'react';
import './App.css';
import cheese from './cheeses.json';
import Nav from "./components/Nav";
import Cheesebox from "./components/Cheese";

class App extends React.Component {
  state = {
    cheese: cheese,
    score: 0,
    clicc: []
  }

  handleClick = id => {
    // let y = this.state.clicc;
    // y.find(() => {
    //   y.push(id)
    // }

    this.setState({ score: this.state.score + 1 });
    // this.setState({ clicked: y })
    console.log(this.state.clicc)
    this.shuffle();
  }

  shuffle = () => {
    let t = this.state.cheese;
    for (let e = t.length - 1; e > 0; e--) {
      let r = Math.floor(Math.random() * (e + 1));
      [t[e], t[r]] = [t[r], t[e]];
    }
    this.setState({ cheese: t })
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
                handleClick={this.handleClick}
                key={slice.id}
              />
            )}
          </div>
        </div>
      </div>
    );
  };
};

export default App;
