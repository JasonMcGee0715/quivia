import React, { Component } from 'react';
import '../../App.css';
import logo from '../app/brainium-logo2.png'
import Jason from './jason.jpg'
import Me from './me.png'

class LeaderBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scores: []
    };
  }

  componentDidMount() {
    this.getScores()
  }

  getScores = () => {
    let url = "http://quiviaapi.herokuapp.com/users";
    fetch(url)
    .then(res=>res.json())
    .then(data => {
      this.setState({
        scores: data
      })
    })
  }

  render() {
    return (
    <div className="App">
      <header>
        <div>
          <img src={logo} alt=""/>
          Contributors
        </div>
        
        <div>
           <div>
           <a href="https://github.com/crashdaddy"> <img src = {Me} alt="" /></a>
           Crashdaddy
           </div> 
           <div>
           <a href="https://github.com/JasonMcGee0715"><img src = {Jason} alt="" /></a>
           JasonMcGee0715
           </div>
        </div>
         <div>
         <a href="/">Back to Branium!</a>
       </div>
      </header>
    </div>
  );
}
}

export default LeaderBoard;