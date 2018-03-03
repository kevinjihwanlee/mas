import React, { Component} from 'react';
import HeaderBar from './components/HeaderBar';
import CourseList from './components/CourseList';
import SuggestedCourses from './components/SuggestedCourses';
import Courses from './components/Courses';
import DegreeAreas from './components/DegreeAreas';

import {Row, Col, Button} from 'react-bootstrap';
import $ from 'jquery';

import getSuggestedClasses from './mas_find_classes/ok_classes';
const data = require("./data/eecs-courses.json");

class App extends Component {

  constructor(props) {
    super(props);

    this.registerClicked = this.registerClicked.bind(this);

    this.state = {
       currentCourses: [],
       suggestedCourses: {},
       degreeAreas: [],
       activeDegreeArea: "Major",
       suggestedDegreeArea: "Major",
       courseData: {},
       itemsCount : 40
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
        suggestedDegreeArea: degreeAreas[0],
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
      suggestedDegreeArea: degreeAreas[0],
      currentCourses: data[degreeAreas[0]],
    });
  }

  changeDegreeArea(degreeArea) {
    this.setState({
      activeDegreeArea: degreeArea,
      currentCourses: this.state.courseData[degreeArea]
    });
  }

  changeSuggestedDegreeArea(degreeArea) {
    this.setState({
      suggestedDegreeArea: degreeArea
    });
  }

  changeClass(courseObject) {
    var searchData = this.state.courseData;
    for (var key in searchData) {
      for (var i in searchData[key]) {
        if (searchData[key][i].course_id === courseObject.course_id) {
          searchData[key][i].taken = !searchData[key][i].taken;
        }
      }
    }

    this.setState({
      courseData: searchData
    });
    localStorage.setItem('courseData', JSON.stringify(searchData));
  }


  registerClicked() {
    var courseData = this.state.courseData;
    var suggestedClasses = getSuggestedClasses(courseData);
    var courses = {};
    for (var key in courseData) {
      courses[key] = [];
      for (var i in courseData[key]) {
        for (var j in suggestedClasses) {
          if (suggestedClasses[j] === courseData[key][i].id.toString()) {
            if(!courseData[key][i].taken){
              courses[key].push(courseData[key][i]);
            }
          }
        }
      }
    }
    this.setState({
      suggestedCourses: courses
    });
  }

  handleScroll(scrollData){
    console.log(scrollData);
  }

  render() {

    return (
      <div className="App">
        <HeaderBar />
        <div className="main-content">
          <Row>

            <Col md={4}>
              <Courses
                changeClass={this.changeClass.bind(this)}
                currentCourses={this.state.currentCourses}
                degreeAreas={this.state.degreeAreas}
                activeDegreeArea={this.state.activeDegreeArea}
                changeDegreeArea={this.changeDegreeArea.bind(this)}
              />
            </Col>
            <Col md={4}>
              <CourseList
                changeClass={this.changeClass.bind(this)}
                registerClicked={this.registerClicked.bind(this)}
                degreeAreas={this.state.degreeAreas}
                courseData={this.state.courseData}
              />
            </Col>
            <Col md={4}>
              <SuggestedCourses
                suggestedCourses={this.state.suggestedCourses}
                degreeAreas={this.state.degreeAreas}
                suggestedDegreeArea={this.state.suggestedDegreeArea}
                changeSuggestedDegreeArea={this.changeSuggestedDegreeArea.bind(this)}
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
