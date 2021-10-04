import React from 'react';
import './About.css'
import Layout from '../Layouts/Layout';
import img from '../../imgs/Photos/school.jpg'

const About = () => {
    return (
        <div className="about">
            <Layout>

                <div className=" our-about col-md-6">
                    <h1>About Our Digital Online School</h1>
                    <p>An online school teaches students entirely or primarily online or through the Internet. It has been defined as "education that uses one or more technologies to deliver instruction to students who are separated from the instructor and to support regular and substantive interaction between the students.</p>
                </div>
                <div className="my-5 col-md-6">
                    <img src={img} alt="" srcset="" />
                </div>
            </Layout>
        </div>
    );
};

export default About;