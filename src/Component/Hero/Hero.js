import React from 'react';
import heroImage from '../../imgs/Photos/Illustration.png';
const Hero = () => {
    return (
        <div>
             <section className="container">
                <div className="row">
                    <div className="col-md-6">
                        <small>Are you ready to Learn?</small>
                        <h1>Learn With fun <br/>
                            on <span>any schedule</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius blandit facilisis quam netus.</p>
                        <button className="button get-started">Get Started</button>
                    </div>
                    <div className="col-md-6">
                        <img className="hero-img" src={heroImage} alt=""></img>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;