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
    var data = this.state.courseData;

    $.ajax({
      url: `/`, //what url
      dataType: 'json',
      method: 'post',
      data: data,
      success: function(data) {
        alert("Successfuly registration!");
      },
      error: function(xhr, status, err) {
        console.log(err);
        alert("Oops! Something went wrong.");
      }
    })
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
