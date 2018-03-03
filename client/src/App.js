import React, { Component} from 'react';
import HeaderBar from './components/HeaderBar';
import Search from './components/Search';
import SuggestedCourses from './components/SuggestedCourses';
import {Row, Col, Button} from 'react-bootstrap';

import getSuggestedClasses from './mas_find_classes/ok_classes';
const data = require("./data/eecs-courses.json");

class App extends Component {

  constructor(props) {
    super(props);

    this.registerClicked = this.registerClicked.bind(this);

    this.state = {
       currentCourses: [],
       suggestedCourses: [],
       degreeAreas: [],
       activeDegreeArea: null,
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
      currentCourses: data[degreeAreas[0]],
    });
  }

  changeDegreeArea(degreeArea) {
    this.setState({
      activeDegreeArea: degreeArea,
      currentCourses: this.state.courseData[degreeArea]
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

  registerClicked() {
    var courseData = this.state.courseData;
    localStorage.setItem('courseData', JSON.stringify(courseData));
    console.log(this);
    var suggestedClasses = getSuggestedClasses(courseData);
    console.log(suggestedClasses);
    var courses = [];
    for (var key in courseData) {
      console.log(key);
      for (var i in courseData[key]) {
        for (var j in suggestedClasses) {
          console.log(courseData[key][i].id)
          if (suggestedClasses[j] === courseData[key][i].id) {
            courses.push(courseData[key][i]);
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

    var itemElements = [];

        for( var i = 0; i< this.state.itemsCount; i++){
            itemElements.push(<div className="item" key={i}>item {i}</div>);
        }

        let scrollbarStyles = {borderRadius: 5};

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
                      <div className="button-wrapper">
          <Button onClick={this.registerClicked.bind(this)} className="register-button" bsStyle="primary">Register</Button>
        </div>
            </Col>
            <Col md={5}>
              <SuggestedCourses
                suggestedCourses={this.state.suggestedCourses}
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
