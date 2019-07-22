import React, { Component } from 'react';

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
        <a className="active" onClick={this.onClick}>{this.props.title}</a>
      )
    } else {
      return (
        <a onClick={this.onClick}>{this.props.title}</a>
      )
    }

  }
}

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this)
    this.state = {
      sections: [
        {title:'About Me', active:true, info: [
          "Computer science & software engineering student at Pontificia Universidad Católica de Chile (PUC).",
          "Interested in web/mobile development, artificial intelligence and game development.",
          "Passionate about science and technology. Love gaming but I'm not a hardcore gamer. Enjoy music, sports and travelling around the globe."
        ]},
        {title:'Education', active:false, info: []},
        {title:'Experience', active:false, info: []},
        {title:'Projects', active:false, info: []},
        {title:'Skills', active:false, info: []}
      ],
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

