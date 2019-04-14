import React, {Component} from 'react';
import './Card.scss';


export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            practice: [],
            goodToGo: [],
            isFlipped: false,
            answered: false
        }
    }

    updateGoodList = () => {
        this.state.goodToGo.push(this.props.randomQuestion)
        this.setState({
            answered: true
        })

    }

    updatePracticeList = () => {
        this.state.practice.push(this.props.randomQuestion)
        this.setState ({
            answered: true
        })
    }


    flipCard = () => {
        this.setState({
          isFlipped: true,
          answered: true
        })
    }

    displayNextCard= () => {
        console.log('Test click for next card')
        if (this.state.answered === true) {
        }
    }



render () {
        if(this.state.isFlipped === true) {
            return (
                <section className="quizCard">
                <article className="answerCard">
                    <h3 className="category">Category: </h3>
                    <h4>{this.props.randomQuestion[0].category}</h4>
                    <h3 className="answerLabel">Answer:</h3>
                    <h4>{ this.props.randomQuestion[0].answer}</h4>
                <article className="localStgContainer">
                    <h3>Be honest: How did you do?</h3>
                    <input className="greatBtn" type="button" value="Great!" onClick={this.updateGoodList}/>
                    <input className="notGreatBtn" type="button" value="Not so great..." onClick={this.updatePracticeList}/>
                </article>
                </article>
                <article className="cardBtnContainer">
                    <input type='button' className="prevBtn" value='Previous Card' onClick={this.displayPreviousCard}/>
                    <input type='button' className="nextBtn" value='Next Card'  onClick={this.displayNextCard}/>
                </article> 
                </section>
            )
        } else return (
        <section className="quizCard">
            <article className="questionCard" >
                <h3 className="category"><span className="categorySpan">Category: </span></h3>
                    <h4>{this.props.randomQuestion[0].category}</h4>
                <h3 className="questionLabel"><span className="questionSpan">Question: </span></h3>
                    <h4>{ this.props.randomQuestion[0].question}</h4>
            </article>
            <article className="buttonContainer">
                <input type='button' className="prevBtn" value='Previous Card' onClick={this.displayPreviousCard}/>
                <input type='button' className="flipBtn" value="Flip Card" onClick={this.flipCard}/>
                <input type='button' className="nextBtn" value='Next Card'  onClick={this.displayNextCard}/>
            </article>
        </section>
    )
   

     }
 }
