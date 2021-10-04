import React from 'react';
import './AllCourse.css'
import AllCourseData from '../../FakeData/AllCoursesData';
import Layout from '../Layouts/Layout';


const AllCourse = () => {
    const imgStyle = {
        height: '255px',
    };
    const cardHeight = {
        height: '595px'
    }
    return (
        <Layout>
            <div className="mt-3">
                <h3 className="section-heading">Our All Courses </h3>
            </div>
            <div className="container main-div">
                <div className="row">
                    {
                        AllCourseData.map((data, index) => <div className="col-md-4 col-12 col-sm-6" style={cardHeight}>
                            <div className="course-box">
                                <div className="card">
                                    <img src={data.image} className="card-img-top" alt="..." style={imgStyle}></img>
                                    <div className="card-body">
                                        <h5 className="card-title">{data.name}</h5>
                                        <h5 className="card-title">${data.price}</h5>
                                        <p className="card-text">By {data.instructor}</p>
                                        <p className="card-text">Catagory: {data.topic}</p>
                                        <button className="button buy-course">Enrole Now</button>
                                    </div>
                                    <div className="card-footer d-flex justify-content-between">
                                        <i className="fa fa-calendar" aria-hidden="true"> Start 20  April, 2021</i>
                                        <i className="fa fa-user-o" aria-hidden="true"> 60 seats</i>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </Layout>
    );
};

export default AllCourse;