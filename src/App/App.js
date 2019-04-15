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
            practice: [],
            goodToGo: [],

        }
    }

    componentDidMount() {
        this.setState({isLoading: true});
        fetch('https://gist.githubusercontent.com/B-Coyle/4c90f3d68b8d8de31e91540a2415e5f9/raw/9b514801f8f4db9fab49b3c9eba74572eed345b7/fetchexample')
        .then(response => response.json())
        .then(json => {
            this.setState({
                allQuestions: json,
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

    // resetGame() {
    //     this.setState({
    //         allQuestions: [],
    //         randomQuestion: [],
    //         checked: false
    //     })
    // }

    render() {
       
        if (this.state.checked === true) {
            return (
                <main>
                 <Header 
                     allQuestions = {this.state.allQuestions}
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