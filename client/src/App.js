import React, { Component} from 'react';
import ReactDOM from 'react-dom'

import HeaderBar from './components/HeaderBar';
import CourseList from './components/CourseList';
import SuggestedCourses from './components/SuggestedCourses';
import Courses from './components/Courses';
import DegreeAreas from './components/DegreeAreas';

import data from './data/data';
import test_data from './data/test_data';
import api_data from './data/api_data.json';

import {Row, Col} from 'react-bootstrap';
import $ from 'jquery';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
       currentCourses: [],
       suggestedCourses: [],
       degreeAreas: [],
       activeDegreeArea: null,
       suggestedDegreeArea: null,
       courseData: {},
       suggestedData: {},
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
      suggestedData: test_data,
      degreeAreas: degreeAreas,
      activeDegreeArea: degreeAreas[0],
      suggestedDegreeArea: degreeAreas[0],
      currentCourses: data[degreeAreas[0]],
    });
  }

  changeDegreeArea(degreeArea) {
    this.setState({
      activeDegreeArea: degreeArea,
      currentCourses: data[degreeArea]
    });
  }

  changeSuggestedDegreeArea(degreeArea) {
    this.setState({
      suggestedDegreeArea: degreeArea
    });
  }

  changeClass(courseObject) {
    var searchData = this.state.courseData;
    for (var i in searchData[this.state.activeDegreeArea]) {
      if (searchData[this.state.activeDegreeArea][i].course_id === courseObject.course_id) {
        searchData[this.state.activeDegreeArea][i].taken = !searchData[this.state.activeDegreeArea][i].taken;
      }
    }

    this.setState({
      courseData: searchData
    });
  }

  getSuggested() {
    var suggestData = this.state.suggestedData[this.state.suggestedDegreeArea];
    var courses = [];

    for (var i in suggestData) {
      for (var j in api_data) {
        if (api_data[j].search_name.includes(suggestData[i])) {
          courses.push(api_data[j]);
        }
      }
    }

    return courses;
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
                suggestedCourses={this.getSuggested()}
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
