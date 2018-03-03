import React from 'react';
import { Row, Col } from 'react-bootstrap';
import DegreeAreas from './DegreeAreas';
import Suggested from './Suggested';

const SuggestedList = (props) => {
  return (
    <div>
      <h2 className="centeredText bold">Suggested Courses</h2>
      <Row className="search-content">
        {/* <Col md={3}>
          <DegreeAreas
            degreeAreas={props.degreeAreas}
            changeDegreeArea={props.changeDegreeArea}
            activeDegreeArea={props.activeDegreeArea}
            />
        </Col> */}
        <Col>
          <Suggested
            currentCourses={props.currentCourses}
            // changeClass={props.changeClass}
            />
        </Col>
      </Row>
    </div>
  )
}

export default SuggestedList;
