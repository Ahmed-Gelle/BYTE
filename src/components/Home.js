import React from 'react'
import './Home.css'
import home from '../assets/home.png'
import bottom from '../assets/Vector.png'
import {Link} from 'react-router-dom'
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import telephone from '../assets/telephone.png'
export default function Home() {
    return (
        <>
        <div className="body">
        <div className="container">
            <div className="text">
            <h1 className="Learn">Learn Fast.</h1>
            <h4>Efficiently practice all Programming Languages.</h4>
            <Link to="/login"><button className="btn">Join Now</button></Link>
            </div>            
            <div className="img">
            <img src={home} alt="home"/>

            </div>
            
        </div>
        <footer className="bottom">
                <img src={bottom} alt="bottom"/>
                {/* <div className="footerbar">
                    <ul>
                        <li><Link to="/"><img src={instagram} alt="instagram"/></Link></li>
                        <li><Link to="/"><img src={facebook} alt="facebook"/></Link></li>
                        <li><Link to="/"><img src={telephone} alt="telephone"/></Link></li>
                    </ul>
                </div> */}
        </footer>
      
        </div>
        
        
        </>
    )
}
