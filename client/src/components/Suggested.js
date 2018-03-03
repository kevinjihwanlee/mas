import React from 'react';
import {ListGroupItem, ListGroup} from 'react-bootstrap';

const Suggested = (props) => {
  return (
    <div>
      <ListGroup>
        {props.currentCourses.map(course => (
          !course.taken &&
          <ListGroupItem>
            <h4 className="bold">{course.search_name}</h4>
            <p>{course.title}</p>
            <p className="rightText"><a onClick={(e) => {props.changeClass(course);}} className="changeButton" bsStyle="primary">Add Class</a></p>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  )
}

export default Suggested
