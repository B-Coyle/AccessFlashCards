import React, {Component} from 'react';
import './Header.scss';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state= {
        }
    }

    render() {
        return(
            <header className='header'>
                <h1 className="appTitle">Aria Garden</h1>
                <div className='resetContainer'>
                    <input type='button' value='Reset Game from Start' onClick={this.props.resetGame}/>
                </div>
            </header>
        )
    }
}