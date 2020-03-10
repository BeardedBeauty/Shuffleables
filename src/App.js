import React from 'react';
import './App.scss';
import cheese from './cheeses.json';
import Nav from "./components/Nav";
import Cheesebox from "./components/Cheese";
import "./OakwareStyle.css";

//clicc shuffle card game to test your memory

class App extends React.Component {
    state = {
        cheese: cheese,
        score: 0,
        clicc: [],
        geese: "",
        imageclass: ["imgholder z-depth-3 shakeme", "imgholder z-depth-3"],
        i: 1
    }

    handleClick = id => {
        const y = this.state.clicc;
        if (!y.find(i => i === id)) {
            y.push(id);
            this.setState({
                score: this.state.score + 1,
                clicc: y,
                geese: "Correct"
            });
        }
        else {
            this.setState(
                {
                    score: 0,
                    clicc: [],
                    geese: "Wrong!",
                    i: 0
                }
            );
            setTimeout(this.stop, 700);
        };
        console.log(this.state.clicc)
        this.shuffle();
    };

    shuffle = () => {
        let t = this.state.cheese;
        for (let e = t.length - 1; e > 0; e--) {
            let r = Math.floor(Math.random() * (e + 1));
            [t[e], t[r]] = [t[r], t[e]];
        };
        this.setState({ cheese: t });
    };

    stop = () => this.setState({ i: 1 });

    render() {
        return (
            <div>
                <Nav
                    score={this.state.score}
                    guess={this.state.geese}
                />
                <br /> <br />
                <div className="container">
                    <div className="row">
                        {this.state.cheese.map(slice =>
                            <Cheesebox
                                imageclass={this.state.imageclass[this.state.i]}
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