import React, {Component} from 'react';
import './Button.scss';

export default class Button extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <section className="buttons">
                <input type='button' className="prevBtn" value='Previous Card' />
                <input type='button' className="nextBtn" value='Next Card' />
            </section>
        )
    }
}