import React, { Component} from 'react';
import ReactDOM from 'react-dom'

import HeaderBar from './components/HeaderBar';
import Search from './components/Search';
import CourseList from './components/CourseList';
import SuggestedCourses from './components/SuggestedCourses';
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
       courseData: {},
       suggestedData: {},
       itemsCount : 40
    }
  }

  componentDidMount() {
    var degreeAreas = [];
    for (var key in data) {
      degreeAreas.push(key);
    }

    this.setState({
      courseData: data,
      suggestedData: test_data,
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

  getSuggested() {
    var suggestData = this.state.suggestedData[this.state.activeDegreeArea];
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
            </Col>
            <Col md={5}>
              <SuggestedCourses
                suggestedCourses={this.getSuggested()}
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
