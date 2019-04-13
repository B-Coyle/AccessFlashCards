import React, {Component} from 'react';
import './Start.scss';

export default class Start extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        }
    }
    render(props){
        return(
            <div>
                <button className="startBtn">Start Studying</button>
            </div>
        )
    }
}