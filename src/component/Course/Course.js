import React from 'react';
import { Card } from 'react-bootstrap';

const Course = ({ course }) => {
    const { courseName, teacherName, email, coursePrice, mobNum, image } = course;

    return (
        <div >
            <h1>Course Details:{courseName}</h1>
            <container >
                <Card className=' card w-50 d-flex'>
                    <img src={image} alt="" />
                    <span>Course Name:{courseName}</span>
                    <span>Teacher Name:{teacherName}</span>
                    <span>email:{email}</span>
                    <span>Mob Num:{mobNum}</span>
                    <span>Course Price:{coursePrice}</span>

                </Card>
            </container>

        </div>
    );
};

export default Course;