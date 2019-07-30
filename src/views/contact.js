import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="contact-container">

        <a className="contact" href="https://github.com/adisrael">github</a>

        {this.props.lang === "EN"?
          <a className="contact" href="https://www.linkedin.com/in/alexander-israel/?locale=en_US">linkedin</a>
        :
          <a className="contact" href="https://www.linkedin.com/in/alexander-israel/?locale=es_ES">linkedin</a>
        }

        <a className="contact" href="mailto:alexanderisraeln@gmail.com">email</a>

        {/* <a className="contact" href="mailto:adisrael@uc.cl">adisrael@uc.cl</a> */}

        <a className="contact" href="https://telegram.me/adisrael">telegram</a>

        {/* <a href="mailto:adisrael@uc.cl?subject=The%20subject%20of%20the%20mail">adisrael@uc.cl</a> */}
        {this.props.lang === "EN"?
          <a className="contact" href="assets/CV_alexander_israel_EN.pdf" download>cv</a>
        :
          <a className="contact" href="assets/CV_alexander_israel_ES.pdf" download>cv</a>
        }
        
      </div>
    );
  }
}

export default Contact;