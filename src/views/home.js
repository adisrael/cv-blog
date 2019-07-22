import React, { Component } from 'react';
import Title from './components/header';
import NavBar from './components/navbar';

class Home extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      categoryTitle: 'About Me',
      categoryInfo: [
        "Computer science & software engineering student at Pontificia Universidad Católica de Chile (PUC).",
        "Interested in web/mobile development, artificial intelligence and game development.",
        "Passionate about science and technology. Love gaming but I'm not a hardcore gamer. Enjoy music, sports and travelling around the globe."
      ],
    }
  }

  onChange(current) {
    console.log(this.state.categoryTitle)
    this.setState({
      categoryTitle: current.title,
      categoryInfo: current.info,
    })
  }

  render() {
    return (
    <div>
      <Title title="ALEXANDER ISRAEL NAVON"/>

      <NavBar current={this.state.categoryTitle} onChange={this.onChange}/>

      {/* <h3>{this.state.categoryTitle}</h3> */}
      <div className="content">
        {this.state.categoryInfo.map((info, id) => (
          <p className="main-desc" key={id}>{info}</p>
        ))}
      </div>
    </div>
    )
  }
}

export default Home;