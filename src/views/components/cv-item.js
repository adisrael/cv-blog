import React, { Component } from 'react';

class CVItem extends Component {
  render() {
    return (
      <div key={this.props.id}>
      <div className="cv-item-header">
        <div className="cv-item-title" key={(this.props.id+2)**1}>{this.props.info_array[0]}</div>
        <div className="cv-item-location" key={(this.props.id+2)**3}>{this.props.info_array[2]}</div>
      </div>
      <div className="cv-item-content">
        <div className="cv-item-text" key={(this.props.id+2)**2}>{this.props.info_array[3]}</div>
        <div className="cv-item-date" key={(this.props.id+2)**4}>{this.props.info_array[1]}</div>
      </div>
      {this.props.info_array[4].map((desc, id) => (
        <div className="cv-item-desc" key={(id+2)**5}>{desc}</div>
      ))}
    </div>
    )
  }
}

export default CVItem;
