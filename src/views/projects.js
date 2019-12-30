import React, { Component } from 'react';
import CVItem from './components/cv-item';

class Projects extends Component {
  render() {
    return (
      <div className="content">
        {this.props.info.map((info, id) => (
          <CVItem info_array={info} key={id}/>
        ))}
      </div>
    );
  }
}

export default Projects;