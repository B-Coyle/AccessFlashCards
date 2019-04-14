import React, {Component} from 'react';
import './Start.scss';

export default class Start extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            selectedQuestion: [],
        }
    }

    startGame = () => {
      let randomQuestion = this.props.allQuestions.sort(() => .5 - Math.random());
      this.setState = {
        selectedQuestion: this.state.selectedQuestion.push(randomQuestion)
      }
      this.props.randomQuestion(this.state.selectedQuestion)
      console.log('Test selected question start', this.state.selectedQuestion)
      console.log('Test allQuestions start', this.props.allQuestions)

  }

    render(){
        return(
            <article>
                <input type="button" className="startBtn" onClick={this.startGame} value="Start Studying" />
            </article>
        )
    }
}