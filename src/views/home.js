import React, { Component } from 'react';
import Title from './components/header';
import NavBar from './components/navbar';

class Home extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      lang: "EN",
      categoryTitle: '',
      categoryInfo: [],
    }
  }

  onChange(current) {
    this.setState({
      categoryTitle: current.title,
      categoryInfo: current.info,
    })
  }

  componentWillMount() {
    // this.setState({
    //   lang: this.props.lang,
    // })
  }

  componentDidUpdate(prevProps, prevState) {
    // if (this.props.lang !== prevProps.lang) {
    //   this.setState({
    //     lang: this.props.lang,
    //   })
    // }
  }

  render() {
    return (
    <div>
      <Title title="ALEXANDER ISRAEL NAVON"/>

      <NavBar current={this.state.categoryTitle} onChange={this.onChange} lang={this.state.lang}/>

      {this.state.categoryTitle === 'About Me'?
      <div className="content">
        {this.state.categoryInfo.map((info, id) => (
          <p className="main-desc" key={id}>{info}</p>
        ))}
      </div>
      :
      <div className="content">
        {this.state.categoryInfo.map((info, id) => (
          <div key={id}>
            <p className="edu-school" key={(id+2)**1}>{info[0]}</p>
            <p className="edu-degree" key={(id+2)**2}>{info[1]}</p>
            <p className="edu-location" key={(id+2)**3}>{info[2]}</p>
            <p className="edu-years" key={(id+2)**4}>{info[3]}</p>
            <p className="edu-awards" key={(id+2)**5}>{info[4]}</p>
          </div>
        ))}
      </div>
      }
    </div>
    )
  }
}

export default Home;