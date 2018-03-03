import React, { Component } from 'react';
import {ListGroupItem, NavDropdown, ListGroup, DropdownButton, MenuItem, Col} from 'react-bootstrap';
import DegreeAreas from './DegreeAreas';

const SuggestedCourses = (props) => {
  return (
    <div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <Col md={7}>
          <h4 className="centeredText bold">Suggested Classes</h4>
        </Col>
        <Col md={5}>
        <DropdownButton title="Degree Areas" bsSize="small">
          {props.degreeAreas.map(degreeArea => (
            <MenuItem href="#" onClick={(e) => {props.changeSuggestedDegreeArea(degreeArea);}}>{degreeArea}</MenuItem>
          ))}
        </DropdownButton>
        </Col>
      </div>
      <table class="table table-fixed">
        <tbody style={{height:415}}>
            {props.suggestedCourses.map(course => (
            <tr>
            <td class="col-xs-12">
              <h4>{course.search_name}</h4>
              <p>{course.title}</p>
            </td>
            </tr>))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default SuggestedCourses;
