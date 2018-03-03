import React, { Component } from 'react';
import {ListGroupItem, NavDropdown, ListGroup, Col, DropdownButton, MenuItem} from 'react-bootstrap';

const SuggestedCourses = (props) => {
  return (
    <div>

    <div class="panel panel-default">
      <div class="panel-heading">
        <Col md={7}>
          <h4 className="centeredText bold">Suggested Classes</h4>
        </Col>
        <Col md={5}>
        <DropdownButton title={props.suggestedDegreeArea} bsSize="small">
          {props.degreeAreas.map(degreeArea => (
            <MenuItem href="#" onClick={(e) => {props.changeSuggestedDegreeArea(degreeArea);}}>{degreeArea}</MenuItem>
          ))}
        </DropdownButton>
        </Col>
      </div>
      <table class="table table-fixed">
        <tbody style={{height:415}}>
            {props.suggestedCourses[props.suggestedDegreeArea] && props.suggestedCourses[props.suggestedDegreeArea].map(course => (
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

export default SuggestedCourses
