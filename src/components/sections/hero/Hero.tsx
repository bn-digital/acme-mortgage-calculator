import React from 'react';
import background from './images/hero-bg.png'
import './Hero.scss'
import {Typography} from "antd";

const {Title} = Typography
const Hero = () => {
    return (
        <div className={'hero'}>
            <div className="container">
                <div className="content-wrapper">
                <Title className={'main-title'}>{'Financial Freedom'}</Title>

                </div>
            </div>
            <div className="background">
                <img src={background} alt="background"/>
            </div>
        </div>
    );
};

export default Hero;
