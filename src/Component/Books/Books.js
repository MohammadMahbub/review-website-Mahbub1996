import React from 'react';
import book from '../../imgs/ICON/book.png';
import student from '../../imgs/ICON/Student.png';
import Test from '../../imgs/ICON/Test.png';
import Students from '../../imgs/ICON/Students.png';
const Books = () => {
    return (
        <div>
            <section className="container" id="book">
                <div className="row">
                    <div className="col-md-3 col-12 col-sm-6">
                        <div className="box d-flex align-items-center justify-content-center">
                            <div>
                                <img className="icon" src={book} alt=""></img>
                                <h6>1500+Topic</h6>
                                <small className="speciality">Learn Anything</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-12 col-sm-6">
                        <div className="box d-flex align-items-center justify-content-center">
                            <div>
                                <img className="icon" src={student} alt=""></img>
                                <h6>1800+ Students</h6>
                                <small className="speciality">Learn Anything</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-12 col-sm-6">
                        <div className="box d-flex align-items-center justify-content-center">
                            <div>
                                <img className="icon" src={Test} alt=""></img>
                                <h6>9K+ Test Taken</h6>
                                <small className="speciality">Learn Anything</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-12 col-sm-6">
                        <div className="box d-flex align-items-center justify-content-center">
                            <div>
                                <img className="icon" src={Students} alt=""></img>
                                <h6>2000+ Student</h6>
                                <small className="speciality">Learn Anything</small>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Books;