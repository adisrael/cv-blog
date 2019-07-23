import React, { Component } from 'react';

class Skills extends Component {
  render() {
    return (
      <div className="content">
        {this.props.info.map((info, id) => (
          <div key={id}>
            
          </div>
        ))}
      </div>
    );
  }
}

export default Skills;