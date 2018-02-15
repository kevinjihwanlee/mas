import React, { Component } from 'react';
import RemoveCourses from './RemoveCourses';
import {Button} from 'react-bootstrap';

const CoursesTaken = (props) => {

  return (
    <div className="register-search-div">
      <h3>Courses Taken</h3>
      <RemoveCourses isAdding={false} removeCourse={props.removeCourse} courses={props.coursesTaken} />
      <Button onClick={props.sendCourses} >Submit</Button>
    </div>
  );
}

export default CoursesTaken
