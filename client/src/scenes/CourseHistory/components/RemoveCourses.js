import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import CourseInfo from './CourseInfo';

const RemoveCourses = (props) => {

  var results = [];
  var darkBackground = true;
  for (var course in props.courses) {
      var course_id = props.courses[course].course_id;
      if (course_id) {
          results.push(<CourseInfo darkBackground={darkBackground} isAdding={props.isAdding} course={props.courses[course]} addCourse={props.removeCourse} />);
          darkBackground = !darkBackground;
      }
  }

  return (
    <div className="register-search-results">
      { results }
    </div>
  )
}

export default RemoveCourses
