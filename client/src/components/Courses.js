import React from 'react';
import {ListGroupItem, ListGroup} from 'react-bootstrap';

const Courses = (props) => {
  return (
    <div>
      <ListGroup>
        <h4 className="sectionHeader underlinedText centeredText">Courses Not Taken</h4>
        {props.currentCourses.map(course => (
          !course.taken &&
          <ListGroupItem>
            <h4 className="bold">{course.search_name}</h4>
            <p>{course.title}</p>
            <p className="rightText"><a onClick={(e) => {props.changeClass(course);}} className="changeButton">Add Class</a></p>
          </ListGroupItem>
        ))}
      </ListGroup>
      <ListGroup>
        <h4 className="sectionHeader underlinedText centeredText">Courses Taken</h4>
        {props.currentCourses.map(course => (
          course.taken &&
          <ListGroupItem>
            <h4 className="bold">{course.search_name}</h4>
            <p>{course.title}</p>
            <p  className="rightText"><a onClick={(e) => {props.changeClass(course);}} className="changeButton">Remove Class</a></p>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  )
}

export default Courses
