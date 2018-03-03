import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';

const SubCourseList = (props) => {
  return (
    <div className="subcourselist">
      <thead>
        <tr>
          <h4>{props.degreeArea}</h4>
        </tr>
      </thead>
      {props.courses.map(courseObject => (
        courseObject.taken &&
        <tbody>
        <tr>

            <h4>{courseObject.search_name} <a id='ex' onClick={(e) => {props.changeClass(courseObject);}} className="changeButton" bsStyle="danger"> X</a></h4>

          {/* <td class="col-xs-2">
            <h4><a onClick={(e) => {props.changeClass(courseObject);}} className="changeButton" bsStyle="primary"> X</a></h4>
          </td> */}
        </tr>
        </tbody>
      ))}
    </div>
  )
}




export default SubCourseList
