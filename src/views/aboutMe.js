import React, { Component } from 'react';

class AboutMe extends Component {
  render() {
    return (
      <div className="content">
        {this.props.info.map((info, id) => (
          <p className="main-desc" key={id}>{info}</p>
        ))}
      </div>
    );
  }
}

export default AboutMe;