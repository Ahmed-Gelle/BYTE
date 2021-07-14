import React from 'react'
import about from '../assets/About.png'
import bottom from '../assets/Vector.png'
import {Link} from 'react-router-dom'
import './About.css'
export default function About() {
    return (
        <>
        <div className="container">
            <div className="text">
            
            <h4>Who are we?</h4>
            <h6>We are Software enginers who decieds to provide a new fearture <br/>
Thats allows every Sofware Developer learn rapidly.</h6>
            <h4>What we provide?</h4>
            <h6>We provide a tons of problem solving quizs with several levels <br/>
and our technology helps you to split every problem and practicing<br/> the
Agile Methodology.</h6>
            <h4>Have a question ?</h4>

            <Link to="/contact"><button className="btnn">Contact</button></Link>
            
            </div>            
            <div className="img">
            <img src={about} alt="about"/>

            </div>
            
        </div>
        <footer className="bottom">
                <img src={bottom} alt="bottom"/>
        </footer>
        </>
    )
}
