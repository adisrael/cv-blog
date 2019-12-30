import React, { Component } from 'react';
import Home from './views/home';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

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
      <Router>
        <div className="App">
          {/* <select id="select-lang" onChange={this.onChange}>
            {this.state.lang_options.map((lang, id) => (
              <option value={lang} key={id}>{lang}</option>
            ))}
          </select> */}
          <Switch>
            <Route exact path="/">
              <Home lang={this.state.lang}/>
            </Route>
            {/* <Route path="/about">
              <About />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route> */}
            <Route path="/hey" />
            <Route path="/.well-known/acme-challenge/Pgy-4adoAqOpRtrXDJeQrwlZELvSxSVuxnHILgrd7VE" />
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        Lo siento! No se ha encontrado la ruta: <code style={{color: 'red'}}>{location.pathname}</code>
      </h3>
    </div>
  );
}

export default App;
