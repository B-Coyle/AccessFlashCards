import React, {Component} from 'react';
import './Card.scss';


export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFlipped: false,
            answered: false,
        }
    }

    // updateGoodList = () => {
    //     console.log('Test good list', this.props.goodToGo)
    //     this.props.goodToGo.push(this.props.randomQuestion)
    //     this.setState({
    //         answered: true
    //     })

    // }



    updateStudyList = (e) => {
        let obj;
        if (JSON.parse(localStorage.getItem('needPractice'))) {
            if(e.target.value === 'Great!') {
                obj = JSON.parse(localStorage.getItem('needPractice'))
                obj.goodToGo.push(this.props.randomQuestion)
            } else {
                obj = JSON.parse(localStorage.getItem('needPractice'))
                obj.practice.push(this.props.randomQuestion)
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
        
        // let practice = JSON.parse(localStorage.getItem('needPractice')) || []
        //   let storage = {practice: 
        //     practice.concat(this.props.randomQuestion)}
        //   localStorage.setItem('needPractice', JSON.stringify(storage))


    flipCard = () => {
        this.setState({
          isFlipped: true,
          answered: true
        })
    }

    displayNextCard = () => {
        this.props.nextCard()
      }



render () {
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
        <section className="quizCard">
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
   

     }
 }
