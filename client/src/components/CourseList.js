import React from 'react';
import SubCourseList from './SubCourseList';
import {Button} from 'react-bootstrap';


const CourseList = (props) => {
  return (
    <div>
      <h4 className="centeredText bold">Your Classes</h4>
      <div className="course-list-content">
        {props.degreeAreas.map(degreeArea => (
          <SubCourseList
            degreeArea={degreeArea}
            courses={props.courseData[degreeArea]}
            changeClass={props.changeClass}
            />

        ))}
        <div className="button-wrapper">
          <Button onClick={props.registerClicked} className="register-button" bsStyle="primary">Register</Button>
        </div>
      </div>
    </div>
  )
}

export default CourseList
