import React, {Component} from 'react';
import './Header.scss';

export default class Header extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <header className='header'>
                <h1 className="appTitle">Aria Garden</h1>
                <div className='resetContainer'>
                    <input type='button' value='Reset Cards' />
                </div>
                <div className='shuffleContainer'>
                <input type ='button' value='Shuffle Cards' />
                </div>
            </header>
        )
    }
}