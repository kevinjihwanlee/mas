import React, { Component } from 'react';
import HeaderBar from './components/HeaderBar';
import Search from './components/Search';
import CourseList from './components/CourseList';
import data from './data/data';

import {Row, Col} from 'react-bootstrap';
import $ from 'jquery';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
       currentCourses: [],
       degreeAreas: [],
       activeDegreeArea: null,
       courseData: {}
    }
  }

  componentDidMount() {
    const cachedCourses = localStorage.getItem("courseData");
    if (cachedCourses) {
      var cachedJSON = JSON.parse(cachedCourses);
      var degreeAreas = [];
      for (var key in cachedJSON) {
        degreeAreas.push(key);
      }

      this.setState({
        courseData: cachedJSON,
        degreeAreas: degreeAreas,
        activeDegreeArea: degreeAreas[0],
        currentCourses: cachedJSON[degreeAreas[0]]
      });
      return;
    }

    var degreeAreas = [];
    for (var key in data) {
      degreeAreas.push(key);
    }

    this.setState({
      courseData: data,
      degreeAreas: degreeAreas,
      activeDegreeArea: degreeAreas[0],
      currentCourses: data[degreeAreas[0]]
    });
  }

  changeDegreeArea(degreeArea) {
    this.setState({
      activeDegreeArea: degreeArea,
      currentCourses: this.state.courseData[degreeArea]
    });
  }

  changeClass(courseObject) {
    var data = this.state.courseData;
    for (var i in data[this.state.activeDegreeArea]) {
      if (data[this.state.activeDegreeArea][i].course_id === courseObject.course_id) {
        data[this.state.activeDegreeArea][i].taken = !data[this.state.activeDegreeArea][i].taken;
      }
    }

    this.setState({
      courseData: data
    });
  }

  registerClicked() {
    var courseData = this.state.courseData;
    localStorage.setItem('courseData', JSON.stringify(courseData));

    $.ajax({
      url: `/register`, //what url
      dataType: 'json',
      method: 'post',
      data: courseData,
      success: function(data) {
        window.location.href = "/";
      },
      error: function(xhr, status, err) {
        console.log(err);
      }
    });
  }

  render() {
    return (
      <div className="App">
        <HeaderBar />
        <div className="main-content">
          <Row>
            <Col md={7}>
              <Search
                changeDegreeArea={this.changeDegreeArea.bind(this)}
                changeClass={this.changeClass.bind(this)}
                currentCourses={this.state.currentCourses}
                degreeAreas={this.state.degreeAreas}
                activeDegreeArea={this.state.activeDegreeArea}
                />
            </Col>
            <Col md={5}>
              <CourseList
                registerClicked={this.registerClicked.bind(this)}
                degreeAreas={this.state.degreeAreas}
                courseData={this.state.courseData}
                />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
