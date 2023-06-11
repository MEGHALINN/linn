import React from 'react'
import logoimg from '../../images/ns.png';

import './hero.css'

export default function hero() {
    return (
        <div className='hero'>
            <div className='nav'>
                <div className='nav-left'>
                    <img src={logoimg} alt="" />
                </div>
                <div className='nav-right'>
                <a style={{textDecoration:'none'}} href="/login" className='login-btn'>login</a>
                </div>
            </div>
            <div className='hero-cont'>
                <div className='hero-left'>
                    <p>Pg Finder for Night Scholars!!</p>
                    <a style={{textDecoration:'none'}} href="/login" className='login-btn'>Join Now</a>
                </div>
                
            </div>
        </div>
    );
}