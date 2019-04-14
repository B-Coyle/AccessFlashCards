import React, {Component} from 'react';
import './App.scss';
import Dataset from '../Data/Dataset.js'
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

    componentDidMount() {
        this.setState({isLoading: true});
        fetch('https://gist.githubusercontent.com/B-Coyle/4c90f3d68b8d8de31e91540a2415e5f9/raw/4377d81715182892a2828411a079338ee62d7096/fetchexample')
        .then(response => response.json())
        .then(json => {
            this.setState({
                allQuestions: json,
                isLoading: false
            });
        })
        .catch(error => console.log('Card not uploading', error));
    }

assignRandomQuestion= (selectedQuestion) => {
    this.setState ({
      randomQuestion: selectedQuestion,
      checked: true
    })
  }

    render() {
        let card= Dataset.accessibility.forEach(question => {
            this.state.allQuestions.push(question)
        })

        if (this.state.checked === true) {
            return (
                <main>
                 <Header />
                <Card 
                randomQuestion = {this.state.randomQuestion}
                allQuestions = {this.state.allQuestions}
                />
                </main>
                )

        }

        return(
            <section className='mainScreen'>
                <Header />
                <Start 
                    randomQuestion = {this.assignRandomQuestion}
                    allQuestions = {this.state.allQuestions}
                />
                    {card}
                    <Footer />
            </section>
        ) 
    }
  }