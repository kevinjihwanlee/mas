import React from 'react';
import SubCourseList from './SubCourseList';
import {Button} from 'react-bootstrap';


const CourseList = (props) => {
  return (
    <div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4 className="centeredText bold">Shopping Cart</h4>
      </div>
      <table class="table table-fixed">
        <tbody style={{height:415}}>
        {props.degreeAreas.map(degreeArea => (
             <SubCourseList
              degreeArea={degreeArea}
              courses={props.courseData[degreeArea]}
              changeClass={props.changeClass}
             />
        ))}
        </tbody>
      </table>
      </div>
        <div className="button-wrapper">
          <Button onClick={props.registerClicked} className="register-button" bsStyle="primary">Register</Button>
        </div>
    </div>
  )
}

export default CourseList
