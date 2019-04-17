import React, {Component} from 'react';
import './Card.scss';
import MarkedPractice from '../MarkedPractice/MarkedPractice.js'


export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFlipped: false,
            answered: false,
        }
    }

    updateStudyList = (e) => {
        let obj;
        if (JSON.parse(localStorage.getItem('needPractice'))) {
            if(e.target.value === 'Great!') {
                obj = JSON.parse(localStorage.getItem('needPractice'))
                obj.goodToGo.push(this.props.randomQuestion)
                this.props.allQuestions.splice()
                console.log('goodToGo', this.props.allQuestions)
            } else {
                obj = JSON.parse(localStorage.getItem('needPractice'))
                obj.practice.push(this.props.randomQuestion)
                console.log('practice', this.props.allQuestions)
                this.props.allQuestions.splice()
            }
        } else {
            if (e.target.value === 'Great!') {
                obj = { practice: [],
                    goodToGo: [this.props.randomQuestion] }
            } else {
                obj = { practice: [this.props.randomQuestion],
                    goodToGo: []
            }
            }
        }
        localStorage.setItem('needPractice', JSON.stringify(obj))
        }

    flipCard = () => {
        this.setState({
          isFlipped: true,
          answered: true
        })
    }

    displayNextCard = () => {
        this.props.nextCard()
        this.setState({
            isFlipped: false
        })
      }



render () {
    if(this.props.allQuestions.length){
        if(this.state.isFlipped === true) {
            return (
                <section className="quizCard">
                <article className="answerCard">
                    <h3 className="category">Category: </h3>
                    <h4>{this.props.randomQuestion.category}</h4>
                    <h3 className="answerLabel">Answer:</h3>
                    <h4>{ this.props.randomQuestion.answer}</h4>
                <article className="localStgContainer">
                    <h3>Be honest: How did you do?</h3>
                    <input className="greatBtn" type="button" value="Great!" onClick={this.updateStudyList}/>
                    <input className="notGreatBtn" type="button" value="Not so great..." onClick={this.updateStudyList}/>
                </article>
                </article>
                <article className="cardBtnContainer">
                    <input type='button' className="nextBtn" value='Next Card'  onClick={this.displayNextCard}/>
                </article> 
                </section>
            )
        } else return (
        <section className="quizCard" >
            <article className="questionCard" >
                <h3 className="category"><span className="categorySpan">Category: </span></h3>
                    <h4>{this.props.randomQuestion.category}</h4>
                <h3 className="questionLabel"><span className="questionSpan">Question: </span></h3>
                    <h4>{ this.props.randomQuestion.question}</h4>
            </article>
            <article className="buttonContainer">
                <input type='button' className="flipBtn" value="Flip Card" onClick={this.flipCard}/>
                <input type='button' className="nextBtn" value='Next Card'  onClick={this.displayNextCard}/>
            </article>
        </section>
    )
        } else {
        return (
        
        <MarkedPractice 
            isFlipped = {this.state.isFlipped}
            displayNextCard = {this.props.displayNextCard}
            flipCard= {this.flipCard}
        />
        )
         }
     }
}