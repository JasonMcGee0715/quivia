import React, { Component } from 'react';
import '../../App.css';
import logo from './brainium-logo2.png'
import wrongMark from './brainium-wrongMark.gif'
import skipButton from './brainium-skip.png';
import HighScore from '../highscore/HighScore'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        questions: [],
        answers: [],
        correct: false,
        wrong: false,
        wrongAnswers: [],
        gameOver: false,
        skipsLeft: 3,
        skip: false,
        score: 0
    };
  }
  
// generate a random number in the required range (min-max)
getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

  componentDidMount() {
    this.getQuestions();
  }

  componentDidUpdate() {
    if(this.state.correct || this.state.wrong || this.state.skip) {
      this.setState({
        correct:false,
        wrong: false,
        skip:false
      })
      this.getQuestions()
    }
  }

  getQuestions = () => {
    let url = "https://opentdb.com/api.php?amount=1&type=multiple";
    fetch(url)
    .then(res=>res.json())
    .then(data => {
     let rightPosition = this.getRandomInt(0,2)
     let answerArray = data.results[0].incorrect_answers
     answerArray.splice(rightPosition,0,data.results[0].correct_answer)
      console.log(answerArray)
      this.setState({
        questions: data.results,
        answers: answerArray
      })
    })
  }

  checkAnswer(answer) {
    let gameOver=this.state.gameOver;
    if (!gameOver) {
    let currentScore = this.state.score;
    if (answer===this.state.questions[0].correct_answer) {
      if(this.state.questions[0].difficulty==="easy") {
        currentScore+=5;
      } else if (this.state.questions[0].difficulty==="medium") {
        currentScore+=10;
      } else if (this.state.questions[0].difficulty==="hard") {
        currentScore+=20;
      }
      this.setState({
        score:currentScore,
        correct:true,
        wrong: false
      })
    } else {
      let gameOver=false;
      let totalWrong = this.state.wrongAnswers;
      if(totalWrong.length<3) {
        totalWrong.push("wrong");
      }
      
      if (totalWrong.length===3) {gameOver=true}
      currentScore-=5;
      if (currentScore<0) currentScore=0;
      this.setState({
        score:currentScore,
        correct:false,
        wrongAnswers:totalWrong,
        gameOver:gameOver,
        wrong: true
      })
  }
}
}

skipQuestion() {
  let skipsLeft = this.state.skipsLeft;

  skipsLeft--;
  if (skipsLeft<0) skipsLeft=0;

  this.setState({
    skipsLeft:skipsLeft,
    skip: true
  })
}

  render() {
    return (
    <div className="App">
      <header>
        <img src={logo} alt="" />
        <span>Wrinkle Your Brain</span>
        
        {this.state.questions && !this.state.gameOver && this.state.questions.map( question => 
          <div>
            <div dangerouslySetInnerHTML={{ __html: question.question }}></div><p/>
            <div>
            {this.state.answers.map(answer => 
              <div onClick={()=>this.checkAnswer(answer)} dangerouslySetInnerHTML={{ __html: answer }}>
              </div>
              )}
            {this.state.skipsLeft>0 &&
            <div onClick={()=>this.skipQuestion()}>
              <img src={skipButton} alt="" />
            </div>
            }
            </div>
                      </div>
          )}
          <div>
            {this.state.score}
          </div>
 
          <div>
          {this.state.wrongAnswers && this.state.wrongAnswers.map(newWrong => 
          <div>
          <img src={wrongMark} alt="" />
           </div>
          )}
          </div>

          {this.state.gameOver && 
          <div>
            <HighScore score={this.state.score}/>
          </div>
          }

          <div>
            <a href="/leaders">LeaderBoard</a>
            <a href="/contributors">Contributors</a>
          </div>

          <div>
            Data Provided By: <a href="https://opentdb.com/api_config.php">
            Open Trivia DB
            </a>
          </div>
      </header>
    </div>
  );
}
}

export default App;
