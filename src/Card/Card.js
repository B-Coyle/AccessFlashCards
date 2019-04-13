import React, {Component} from 'react';
import './Card.scss';


export default class Card extends Component {
    constructor(props) {
        super(props);
    }

render (props) {
    return (
    <section className="quizCard">
        <h3 className="category"><span className="categorySpan">Category: </span>{this.props.allQuestions[0].category}</h3>
        <h3 className="questionLabel"><span className="questionSpan">Question: </span>{ this.props.allQuestions[0].question}</h3>
    </section>
    )

     }
 }