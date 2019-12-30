import React, { Component } from 'react';

class Experience extends Component {
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

export default Experience;