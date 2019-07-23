import React, { Component } from 'react';
import infoEn from '../../assets/info-en.js';
import infoEs from '../../assets/info-es.js';

class NavItem extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onClick(this.props.id);
  }

  render() {
    if (this.props.active) {
      return (
        <button className="active" onClick={this.onClick}>{this.props.title}</button>
      )
    } else {
      return (
        <button onClick={this.onClick}>{this.props.title}</button>
      )
    }

  }
}

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this)
    this.state = {
      sections: [],
    }
  }

  // shouldComponentUpdate(nextState, nextProps) {
    // if (nextProps.lang !== this.props.lang) {
    //   return true;
    // }
    // else {
    //   return false;
    // }
  // }

  componentDidUpdate(prevProps) {
    // if (this.props.lang !== prevProps.lang) {
    //   if (this.props.lang === 'EN') {
    //     this.setState({
    //       sections: [...infoEn],
    //     })
    //   }
    //   else {
    //     this.setState({
    //       sections: [...infoEs],
    //     })
    //   }
    // }
  }

  componentDidMount() {
    if (this.props.lang === 'EN') {
      this.setState({
        sections: [...infoEn],
      })
    }
    else {
      this.setState({
        sections: [...infoEs],
      })
    }
  }

  onClick(key) {
    let newSections = [];
    for (let i = 0; i < this.state.sections.length; i++) {
      let newItem = {title: this.state.sections[i].title, info: this.state.sections[i].info};
      if (i === key) {
        newItem = {...newItem, active: true};
      }
      else if (this.state.sections[i].active) {
        newItem = {...newItem, active: false};
      }
      else {
        newItem = {...newItem, active: this.state.sections[i].active};
      }
      newSections.push(newItem);
    }
    this.setState({
      sections: newSections,
    })
    this.props.onChange(this.state.sections[key]);
  }

  render() {
    return (
      <ul>
        {this.state.sections.map((section, id) => (
          <li key={id}><NavItem title={section.title} active={section.active} onClick={this.onClick} key={id} id={id}/></li>
        ))}
      </ul>
    )
  }
}

export default NavBar;

