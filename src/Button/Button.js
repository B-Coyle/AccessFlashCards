import React, {Component} from 'react';
import './Button.scss';

export default class Button extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <section className="buttons">
                <button className="prevBtn">Previous</button>
                <button className="nextBtn">Next</button> 
            </section>
        )
    }
}