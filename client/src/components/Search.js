import React from 'react';
import { Row, Col } from 'react-bootstrap';
import DegreeAreas from './DegreeAreas';
import Courses from './Courses';

const Search = (props) => {
  return (
    <div>
      <h2 className="centeredText bold">Search for Classes</h2>
      <Row className="search-content">
        <Col md={3}>
          <DegreeAreas
            degreeAreas={props.degreeAreas}
            changeDegreeArea={props.changeDegreeArea}
            activeDegreeArea={props.activeDegreeArea}
            />
        </Col>
        <Col md={9}>
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
