import React, { Component } from 'react';
import CVItem from './components/cv-item';

class Experience extends Component {
  render() {
    return (
      <div className="content">
        
        <div className="cv-item-type">
          Work
        </div>
        {this.props.info['Work'].map((info, id) => (
          <CVItem info_array={info} key={id}/>
        ))}

        <div className="cv-item-type">
          Volunteering
        </div>
        {this.props.info['Volunteering'].map((info, id) => (
          <CVItem info_array={info} key={id}/>
        ))}
      </div>
    );
  }
}

export default Experience;