import React, { Component } from 'react';
import {ListGroupItem, NavDropdown, ListGroup} from 'react-bootstrap';

const SuggestedCourses = (props) => {
  return (
    <div className="courses-needed">
      <ListGroup>
        {props.coursesNeeded.map(course => (
        <ListGroupItem>
          <h4>{course.search_name}</h4>
          <p>{course.title}</p>
        </ListGroupItem>))}
      </ListGroup>
    </div>
  );
}

export default SuggestedCourses;
