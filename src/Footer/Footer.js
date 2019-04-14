import React, {Component} from 'react';
import './Footer.scss';


export default class Footer extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <article className='footerContainer'>
                <h3>Want to know more?</h3>
                <h4>Resources on Web Accessibility and ARIA</h4>
                <ul>
                    <li><a href='https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#Roles'>Using ARIA: Roles, States, and Properties</a></li>
                    <li><a href='https://www.mcdpartners.com/news/top-5-common-web-accessibility-mistakes/'>Top 5 Most Common Web Accessibility Mistakes</a></li>
                    <li><a href='https://en.wikipedia.org/wiki/Web_accessibility'>Web Accessibility-Wikipedia</a></li>
                    <li><a href='https://www.w3.org/WAI/standards-guidelines/wcag/'>Web Content Accessibility Guidelines (WCAG) Overview</a></li>
                </ul>
           </article>
        )
    }
}