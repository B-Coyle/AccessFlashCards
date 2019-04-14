import React, {Component} from 'react';
import './Header.scss';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state= {
        newRandomCards: []
        }
    }

    resetGame = () => {

    } 

    shuffleCards = () => {
        let newRandomQuestion = this.props.allQuestions.sort(() => .5 - Math.random());
        this.setState = ({
            newRandomCards: this.state.newRandomCards.push(newRandomQuestion)
      })
    }


    render() {
        return(
            <header className='header'>
                <h1 className="appTitle">Aria Garden</h1>
                <div className='resetContainer'>
                    <input type='button' value='Reset Game from Start' onClick={this.resetCards}/>
                </div>
                <div className='shuffleContainer'>
                <input type ='button' value='Shuffle Cards' onClick={this.shuffleCards}/>
                </div>
            </header>
        )
    }
}