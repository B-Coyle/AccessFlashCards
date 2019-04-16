import React, {Component} from 'react';
import './MarkedPractice.scss';

export default class MarkedPractice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            practice: false,
            good: false,
            checked: false,
            studyMaterials: JSON.parse(localStorage.getItem('needPractice')),
            newQuestion: []
        }
    }
    displayGood=()=>{
        this.setState({
            practice: true
        })
    }

    displayNextPractice=()=>{
        let practiceQuestion = this.state.studyMaterials.practice.sort(() => .5 - Math.random()).pop();
        this.setState ({
        newQuestion: practiceQuestion,
        checked: true,
        good: true
        })
    }

    restartPracticeGame=()=>{
        this.props.restartGame()
    }

    flipPracticeCard=()=>{
        this.props.flipCard()
    }

render() {
console.log('test', this.state.newQuestion)
    if(this.state.practice === false && this.state.good === false) {
        return (
        <article className="endSelectBtn">
        <h2>What would you like to review?</h2>
        <input type="button" value="Need more practice" onClick={this.displayNextPractice} />
        <input type="button" value="Good to Go" onClick={this.displayGood}/>
        <input type="button" value="Take me to the Start page" onClick={this.restartPracticeGame}/>
        </article>
    )
    } else {
    if(this.props.isFlipped === true) {
        return (
            <section className="quizCard">
            <article className="answerCard">
                <h2>Practice Deck</h2>
                <h3 className="category">Category: </h3>
                <h4>{this.state.newQuestion.category}</h4>
                <h3 className="answerLabel">Answer:</h3>
                <h4>{ this.state.newQuestion.answer}</h4>
            </article>
            <article className="cardBtnContainer">
                <input type='button' className="flipBtn" value="Flip Card" onClick={this.flipCard}/>
                <input type='button' className="nextBtn" value='Next Card' onClick={this.displayNextPractice} />
            </article> 
            </section>
        )
    } else {
        return (
    <section className="quizCard" >
        <article className="questionCard" >
            <h2>Practice Deck</h2>
            <h3 className="category"><span className="categorySpan">Category: </span></h3>
                <h4>{this.state.newQuestion.category}</h4>
            <h3 className="questionLabel"><span className="questionSpan">Question: </span></h3>
                <h4>{ this.state.newQuestion.question}</h4>
        </article>
        <article className="buttonContainer">
            <input type='button' className="flipBtn" value="Flip Card" onClick={this.props.flipCard}/>
            <input type='button' className="nextBtn" value='Next Card'  onClick={this.displayNextPractice}/>
        </article>
    </section>)
            }
        }
    }
}