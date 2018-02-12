import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import {Row, Col } from 'react-bootstrap';

const CourseInfo = (props) => {

  var buttonText;
  if (props.isAdding) {
    buttonText = "Add";
  }
  else {
    buttonText = "Remove";
  }

  return (
      <div className={"register-search-result-div " + (props.darkBackground ? "register-search-result-dark" : "register-search-result-light")}>
        <Row>
            <Col md={8}>
                <h4>{props.course.search_name}</h4>
                <p>{props.course.title}</p>
            </Col>
            <Col md={4}>
                <Button className="search-button" onClick={props.addCourse.bind(this, props.course)}>{buttonText}</Button>
            </Col>
        </Row>
      </div>
  );
}

export default CourseInfo
