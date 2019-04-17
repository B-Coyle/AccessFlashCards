import React, {Component} from 'react';
import './Start.scss';

export default class Start extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            // selectedQuestion: [],
        }
    }

    startGame = () => {
      this.props.randomQuestion()
  }

    render(){
        return(
            <article className="startContainer">
                <input type="button" className="startBtn" onClick={this.startGame} value="Start Studying" />
            </article>
        )
    }
}