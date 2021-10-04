import React, { useState } from 'react';
import Books from '../Books/Books';
import Cart from '../Cart/Cart';
import Course from '../Course/Course';
import Hero from '../Hero/Hero';
import Layout from '../Layouts/Layout';
import Testimonial from '../Testimonial/Testimonial';
import FakeData from '../../FakeData/fakeData'
const Home = () => {
    const [course, setCourse] = useState(FakeData);
  const [cart, setCart] = useState([]);
  const enroleBtnhandler = (course) => {
    const newCart = [...cart, course]
    setCart(newCart);
  }

    return (
        <div className="course-card">
            <Layout>
                <section className="hero-area">
                    <Hero></Hero>
                </section>
                <Cart courses={cart}></Cart>
                <Books></Books>
                <section className="container" id="courses">
                    <h3 className="section-heading">Some Of Our Courses</h3>
                    <div className="row ">
                        {
                            course.map(x => <Course btn={enroleBtnhandler} key={x.id} data={x}></Course>)
                        }
                    </div>
                </section>
                <Testimonial></Testimonial>
            </Layout>
        </div>
    );
};

export default Home;