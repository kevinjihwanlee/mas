import React from 'react';
import {ListGroupItem, ListGroup} from 'react-bootstrap';

const Courses = (props) => {
  return (
    <div>
      <div class="panel panel-default">
        <div class="panel-heading">
          <h4 className="centeredText bold">Search for Classes</h4>
        </div>
        <table class="table table-fixed">
          <thead>
            <tr>
              <th class="col-xs-12 centeredText">Classes Not Taken</th>
            </tr>
          </thead>
          <tbody>
            {props.currentCourses.map(course => (
              !course.taken &&
              <tr>
              <td class="col-xs-12">
                <h4 className="bold">{course.search_name}</h4>
                <p>{course.title}</p>
                <p className="rightText"><a onClick={(e) => {props.changeClass(course);}} className="changeButton" bsStyle="primary">Add Class</a></p>
              </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        <div class="panel panel-default">
          <table class="table table-fixed">
          <thead>
            <tr>
              <th class="col-xs-12 centeredText">Classes Taken</th>
            </tr>
          </thead>
          <tbody>
            {props.currentCourses.map(course => (
              course.taken &&
              <tr>
              <td class="col-xs-12">
                <h4 className="bold">{course.search_name}</h4>
                <p>{course.title}</p>
                <p className="rightText"><a onClick={(e) => {props.changeClass(course);}} className="changeButton" bsStyle="primary">Remove Class</a></p>
              </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Courses
