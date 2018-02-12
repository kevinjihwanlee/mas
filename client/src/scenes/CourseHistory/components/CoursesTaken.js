import React, { Component } from 'react';
import RemoveCourses from './RemoveCourses';

const CoursesTaken = (props) => {

  return (
    <div className="register-search-div">
      <h3>Courses Taken</h3>
      <RemoveCourses isAdding={false} removeCourse={props.removeCourse} courses={props.coursesTaken} />
    </div>
  );
}

export default CoursesTaken
