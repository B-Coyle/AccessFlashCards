import React, {Component} from 'react';
import './App.scss';
import Card from '../Card/Card.js';
import Start from '../Start/Start.js';
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js';


export default class App extends Component {
    constructor() {
        super();
        this.state = { 
            allQuestions: [],
            randomQuestion: [],
            checked: false,
        }
    }

    resetGame() {
        window.location.reload();
    }

    componentDidMount() {
        this.setState({isLoading: true});
        fetch('https://fe-apps.herokuapp.com/api/v1/memoize/1901/b-coyle-dataset/accessibility')
        .then(response => response.json())
        .then(json => {
            this.setState({
                allQuestions: json.accessibility,
                isLoading: false
            });
        })
        .catch(error => console.log('Card not uploading', error))
    }

    assignRandomQuestion= () => {
        let randomQuestion = this.state.allQuestions.sort(() => .5 - Math.random()).pop();
        this.setState ({
        randomQuestion: randomQuestion,
        checked: true
        })
    }

   

    render() {
        if (this.state.checked === true) {
            return (
                <main>
                 <Header 
                     allQuestions = {this.state.allQuestions}
                     resetGame = {this.resetGame}
                 />
                <Card 
                randomQuestion = {this.state.randomQuestion}
                allQuestions = {this.state.allQuestions}
                nextCard = {this.assignRandomQuestion}
                practice = {this.state.practice}
                goodToGo = {this.state.goodToGo}
                />
                <Footer />
                </main>
                )

        } else return(
            <section className='mainScreen'>
                <Header 
                    resetGame = {this.resetGame}
                />
                <Start 
                    randomQuestion = {this.assignRandomQuestion}
                    allQuestions = {this.state.allQuestions}     
                />
                    <Footer />
            </section>
        ) 
    }
  }