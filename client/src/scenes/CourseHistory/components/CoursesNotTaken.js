import React, { Component } from 'react';
import AddCourses from './AddCourses';

const CoursesNotTaken = (props) => {

  return (
    <div className="register-search-div">
      <h3>Courses Not Taken</h3>
      <AddCourses isAdding={true} addCourse={props.addCourse} courses={props.coursesNotTaken} />
    </div>
  );
}

export default CoursesNotTaken
