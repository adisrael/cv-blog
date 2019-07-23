import React, { Component } from 'react';
import NavBar from './components/navbar';
import Title from './components/header';
import Contact from './contact';
import AboutMe from './aboutMe';
import Education from './education';
import Experience from './experience';
import Projects from './projects';
import Skills from './skills';

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

  generateTabs(info) {
    switch (this.state.categoryTitle) {
      case 'About Me':
        return <AboutMe info={info}/>
      case 'Education':
        return <Education info={info}/>
      case 'Experience':
        return <Experience info={info}/>
      case 'Projects':
        return <Projects info={info}/>
      case 'Skills':
        return <Skills info={info}/>  
      default:
        return null;
    }
  }

  render() {
    return (
    <div>
      <Title title="ALEXANDER ISRAEL NAVON"/>

      <Contact />

      <NavBar current={this.state.categoryTitle} onChange={this.onChange} lang={this.state.lang}/>

      {this.generateTabs(this.state.categoryInfo)}

    </div>
    )
  }
}

export default Home;