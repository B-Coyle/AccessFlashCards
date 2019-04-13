import React, {Component} from 'react';
import './App.scss';
import Dataset from '../Data/Dataset.js'
import Card from '../Card/Card.js';
import Button from '../Button/Button.js';
import Start from '../Start/Start.js';
import Footer from '../Footer/Footer.js';


export default class App extends Component {
    constructor() {
        super();
        this.state = { 
            allQuestions: []
        }
    }

    render() {
        let card= Dataset.accessibility.map(question => 
            this.state.allQuestions.push(question)
        )


        return(
            <section className='mainScreen'>
                <header className='header'>
                    <h1 className="appTitle">Aria Garden</h1>
                </header>
                <article className="startContainer">
                <Start />>
                </article>
                <article className='cardContainer'>
                    <Card 
                    allQuestions = {this.state.allQuestions}
                    />
                </article>
                <article className="buttonContainer">                    
                    <Button />
                </article>
                <article className="footerContainer">
                    <Footer />
                </article>
            </section>
        ) 
    }
  }