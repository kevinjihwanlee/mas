import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import CoursesNotTaken from './components/CoursesNotTaken';
import CoursesTaken from './components/CoursesTaken';

export default class CourseHistory extends Component {
  constructor(props) {
    super(props);

    this.getCourseData = this.getCourseData.bind(this);
    this.addCourse = this.addCourse.bind(this);
    this.removeCourse = this.removeCourse.bind(this);

    this.state = ({
      coursesNotTaken: this.getCourseData(),
      coursesTaken: {}
    })
  }


  getCourseData() {
    var data = require('../../data/test_api_data.json');
    return data;
  }

  addCourse(courseObject) {
    var copyOfCoursesNotTaken = this.state.coursesNotTaken;
    delete copyOfCoursesNotTaken[courseObject.search_name];
    var copyOfCoursesTaken = this.state.coursesTaken;
    copyOfCoursesTaken[courseObject.search_name] = courseObject;

    this.setState({
      coursesNotTaken: copyOfCoursesNotTaken,
      coursesTaken: copyOfCoursesTaken
    })
  }

  removeCourse(courseObject) {
    var copyOfCoursesTaken = this.state.coursesTaken;
    delete copyOfCoursesTaken[courseObject.search_name];
    var copyOfCoursesNotTaken = this.state.coursesNotTaken;
    copyOfCoursesNotTaken[courseObject.search_name] = courseObject;

    this.setState({
      coursesNotTaken: copyOfCoursesNotTaken,
      coursesTaken: copyOfCoursesTaken
    })
  }

  render() {
    return (
      <div className="main-content">
        <Row>
          <Col md={6}>
            <CoursesNotTaken addCourse={this.addCourse} coursesNotTaken={this.state.coursesNotTaken} />
          </Col>
          <Col md={6}>
            <CoursesTaken removeCourse={this.removeCourse} coursesTaken={this.state.coursesTaken} />
          </Col>
        </Row>
      </div>
    )
  }
}
