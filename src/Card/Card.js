import React, {Component} from 'react';
import './Card.scss';


export default class Card extends Component {
    constructor(props) {
        super(props);
    }

render () {
    console.log('Test card randomQuestion',this.props.randomQuestion)
    return (
        <section>
            <header className='header'>
                <h1 className="appTitle">Aria Garden</h1>
            </header>
            <article className="quizCard">
                <h3 className="category"><span className="categorySpan">Category: </span>{this.props.randomQuestion[0].category}</h3>
                <h3 className="questionLabel"><span className="questionSpan">Question: </span>{ this.props.randomQuestion[0].question}</h3>
            </article>
        </section>
    )

     }
 }