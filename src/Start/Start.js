import React, {Component} from 'react';
import './Start.scss';

export default class Start extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            selectedQuestion: [],
        }
    }



    startGame = (props) => {
      let randomQuestion = this.props.allQuestions.sort(() => .5 - Math.random()).pop();
      this.setState = {
        selectedQuestion: this.state.selectedQuestion.push(randomQuestion)
      }
      this.props.randomQuestion(this.state.selectedQuestion)
  }



    render(){
        return(
            <article>
                <input type="button" className="startBtn" onClick={this.startGame} value="Start Studying" />
            </article>
        )
    }
}