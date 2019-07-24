import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <a href="https://github.com/adisrael">GitHub</a>
        {this.props.lang === "EN"?
          <a href="https://www.linkedin.com/in/alexander-israel/?locale=en_US">LinkedIn</a>
        :
          <a href="https://www.linkedin.com/in/alexander-israel/?locale=es_ES">LinkedIn</a>
        }
        <a href="mailto:alexanderisraeln@gmail.com">alexanderisraeln@gmail.com</a>
        <a href="mailto:adisrael@uc.cl">adisrael@uc.cl</a>
        <a href="https://telegram.me/adisrael">Telegram</a>
        {/* <a href="mailto:adisrael@uc.cl?subject=The%20subject%20of%20the%20mail">adisrael@uc.cl</a> */}
        <a href="assets/CV_alexander_israel_ES.pdf" download>CV Español</a>
        
      </div>
    );
  }
}

export default Contact;