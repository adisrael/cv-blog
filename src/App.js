import React, { Component } from 'react';
import Home from './views/home';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      lang: "EN",
      // lang_options: ["EN", "ES"],
    }
  }

  componentDidMount() {
    // let selector = document.getElementById("select-lang");
    // let lang = selector.options[selector.selectedIndex].value;
    // this.setState({
    //   lang,
    // })
  }

  shouldComponentUpdate(nextState) {
    // let selector = document.getElementById("select-lang");
    // let lang = selector.options[selector.selectedIndex].value;
    // if (lang !== this.state.lang) {
    //   return true;
    // }
    // else {
    //   return false;
    // }
  }

  onChange() {
    // let selector = document.getElementById("select-lang");
    // let lang = selector.options[selector.selectedIndex].value;
    // this.setState({
    //   lang,
    // })
  }

  render() {
    return (
      <div className="App">
        {/* <select id="select-lang" onChange={this.onChange}>
          {this.state.lang_options.map((lang, id) => (
            <option value={lang} key={id}>{lang}</option>
          ))}
        </select> */}
        <Home lang={this.state.lang}/>
      </div>
    );
  }
}

export default App;
