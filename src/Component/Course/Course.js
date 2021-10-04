import React from 'react';
const Course = (props) => {
    const courseData = props.data;
    const {name,instructor, price, image, topic} = courseData;
    const imgStyle ={
        height:'255px',
    };
    const cardHeight = {
        height:'595px'
    }
    return (
        
        <div className="col-md-4 col-12 col-sm-6" style={cardHeight}>
            <div className="course-box">
                <div className="card">
                    <img src={image} className="card-img-top" alt="..." style={imgStyle}></img>
                    <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h5 className="card-title">${price}</h5>
                    <p className="card-text">By {instructor}</p>
                    <p className="card-text">Catagory: {topic}</p>
                    <button onClick={() =>props.btn(courseData)} className="button buy-course">Enrole Now</button>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <i className="fa fa-calendar" aria-hidden="true"> Start 20  April, 2021</i>
                        <i className="fa fa-user-o" aria-hidden="true"> 60 seats</i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;