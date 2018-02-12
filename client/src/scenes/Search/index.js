import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import SearchDegree from  './components/SearchDegree';
import SuggestedCourses from './components/SuggestedCourses';
import testData from '../../data/test_data';


export default class Search extends Component {
  constructor(props) {
    super(props);

    this.changeDegreeArea = this.changeDegreeArea.bind(this);
    this.getCoursesNeeded = this.getCoursesNeeded.bind(this);

    this.state = ({
      currentDegreeArea: 'breadth'
    });
  }

  changeDegreeArea(degreeArea) {
    this.setState({
      currentDegreeArea: degreeArea
    })
  }

  getCourseData() {
    var data = require('../../data/test_api_data.json');
    return data;
  }

  getCoursesNeeded() {
    var availableCourses = testData.courses_available[this.state.currentDegreeArea];
    var coursesTaken = testData.courses_taken[this.state.currentDegreeArea];
    console.log(availableCourses);
    console.log(coursesTaken);

    var api_data = this.getCourseData();

    var coursesNeeded = [];
    for (var index in availableCourses) {
      if (!(coursesTaken.indexOf(availableCourses[index]) > -1)) {
        for (var course in api_data) {
          if (api_data[course].search_name.includes(availableCourses[index])) {
            coursesNeeded.push(api_data[course]);
          }
        }
      }
    }

    return coursesNeeded;
  }

  getCourseCount(degreeArea) {
    var course_count = 0;
    var availableCourses = testData.courses_available[degreeArea];
    var coursesTaken = testData.courses_taken[degreeArea];
    var api_data = this.getCourseData();

    for (var index in availableCourses) {
      if (coursesTaken.indexOf(availableCourses[index]) > -1) {
        course_count++;
      }
    }

    return course_count;
  }


  render() {

    var degreeAreas = []
    for (var key in testData.courses_available) {
      degreeAreas.push(key);
    }

    return (
      <div className="main-content">
        <Row>
          <Col md={4}>
            <div className="sidebar">
              <SearchDegree degreeAreas={ degreeAreas } changeDegreeArea={this.changeDegreeArea}/>
            </div>
          </Col>

          <Col md={8}>
            <div className= "content">
              <SuggestedCourses coursesNeeded={ this.getCoursesNeeded() } />
            </div>
          </Col>
        </Row>
      </div>

    )
  }
}
