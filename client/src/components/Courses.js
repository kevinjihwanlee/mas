import React from 'react';
import {ListGroupItem, ListGroup, Col} from 'react-bootstrap';
import DegreeAreas from './DegreeAreas';

const Courses = (props) => {
  return (
    <div>
      <div class="panel panel-default">
        <div class="panel-heading">
          <Col md={7}>
            <h4 className="centeredText bold">Search for Classes</h4>
          </Col>
          <Col md={5}>
            <DegreeAreas
              degreeAreas={props.degreeAreas}
              changeDegreeArea={props.changeDegreeArea}
            />
          </Col>
        </div>
        <table class="table table-fixed">
          <tbody style={{height:415}}>
            {props.currentCourses.map(course => (
              !course.taken &&
              <tr>
                <td class="col-xs-10">
                  <h4>{course.search_name}</h4>
                </td>
                <td class="col-xs-2">
                  <h4><a onClick={(e) => {props.changeClass(course);}} className="changeButton" bsStyle="primary"> X</a></h4>
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
