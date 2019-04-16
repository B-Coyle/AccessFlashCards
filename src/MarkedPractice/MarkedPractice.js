import React, {Component} from 'react';
import './MarkedPractice.scss';
import Card from '../Card/Card.js'

export default class MarkedPractice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            practice: false,
            good: false
        }
    }
    displayGood=()=>{
        this.setState({
            practice: true
        })
    }

    displayPractice=()=>{
        this.setState({
            good: true
        })
    }

render() {
    let localStorage = JSON.parse(localStorage.getItem('needPractice'))

    if(this.state.practice === false && this.state.good === false){
        return (
        <article className="endSelectBtn">
        <h2>What would you like to review?</h2>
        <input type="button" value="Need more practice" onClick={this.displayPractice}/>
        <input type="button" value="Good to Go" onClick={this.displayGood}/>
        <input type="button" value="Take me to the Start page" onClick={this.props.restartGame}/>
        </article>
    )
    }else {
    if(this.props.isFlipped === true) {
        return (
            <section className="quizCard">
            <article className="answerCard">
                <h3 className="category">Category: </h3>
                <h4>localStorage.practice.category}</h4>
                <h3 className="answerLabel">Answer:</h3>
                <h4>{ JSON.parse(localStorage.getItem('needPractice')).answer}</h4>
            </article>
            <article className="cardBtnContainer">
                <input type='button' className="nextBtn" value='Next Card'  onClick={this.displayNextCard}/>
            </article> 
            </section>
        )
    } else {
        return (
    <section className="quizCard" >
        <article className="questionCard" >
            <h3 className="category"><span className="categorySpan">Category: </span></h3>
                <h4>{JSON.parse(localStorage.getItem('needPractice')).category}</h4>
            <h3 className="questionLabel"><span className="questionSpan">Question: </span></h3>
                <h4>{ JSON.parse(localStorage.getItem('needPractice')).question}</h4>
        </article>
        <article className="buttonContainer">
            <input type='button' className="flipBtn" value="Flip Card" onClick={this.flipCard}/>
            <input type='button' className="nextBtn" value='Next Card'  onClick={this.displayNextCard}/>
        </article>
    </section>)
        }
    }
}