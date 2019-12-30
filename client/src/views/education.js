import React, { Component } from 'react';

class Education extends Component {
  render() {
    return (
      <div className="content">
        {this.props.info.map((info, id) => (
          <div key={id}>
            <div className="edu-header">
              <div className="edu-school" key={(id+2)**1}>{info[0]}</div>
              <div className="edu-location" key={(id+2)**3}>{info[2]}</div>
            </div>
            <div className="edu-content">
              <div className="edu-text" key={(id+2)**2}>{info[3]}</div>
              <div className="edu-years" key={(id+2)**4}>{info[1]}</div>
            </div>
            
            {(!Array.isArray(info[4]))?
              <div className="edu-content">
                <div className="edu-text" key={(id+2)**5}>{info[4]}</div> 
              </div>
            :
            info[4].map((award, id2) => (
              <p className="edu-awards" key={id2}>{award}</p>
            ))
            }
            {info[5]?
            (!Array.isArray(info[5]))?
              <div className="edu-content">
                <div className="edu-text" key={(id+2)**6}>{info[5]}</div> 
              </div>
            :
            info[5].map((award, id3) => (
              <p className="edu-awards" key={id3}>{award}</p>
            ))
            :
            null
            }
            {info[6]?
            (!Array.isArray(info[6]))?
              <div className="edu-content">
                <div className="edu-text" key={(id+2)**7}>{info[6]}</div> 
              </div>
            :
            info[6].map((award, id4) => (
              <p className="edu-awards" key={id4}>{award}</p>
            ))
            :
            null
            }

          </div>
        ))}
      </div>
    );
  }
}

export default Education;