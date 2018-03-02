import React from 'react';
import { Row, Col } from 'react-bootstrap';
import DegreeAreas from './DegreeAreas';
import Courses from './Courses';

const Search = (props) => {
  return (
    <div>

      <Row className="search-content">
        <Col md={4}>
          <DegreeAreas
            degreeAreas={props.degreeAreas}
            changeDegreeArea={props.changeDegreeArea}
            activeDegreeArea={props.activeDegreeArea}
            />
        </Col>
        <Col md={8}>
          <Courses
            currentCourses={props.currentCourses}
            changeClass={props.changeClass}
            />
        </Col>
      </Row>
    </div>
  )
}

export default Search;
