import React, { Component } from 'react';

class Projects extends Component {
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

export default Projects;