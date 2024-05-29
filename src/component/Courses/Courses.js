import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import { Link, useLoaderData } from 'react-router-dom';
import { Button, Card, CardGroup, Col, Row } from 'react-bootstrap';

import { Img } from 'react-image';
import Course from '../Course/Course';

const Courses = () => {


    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data));

    }, []);

    return (<div className='container'>

        {
            courses.map(course => <Course key={course.id} course={course}></Course>)
        }


    </div >
    );
};

export default Courses;