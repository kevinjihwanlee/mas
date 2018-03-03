import React, { Component } from 'react';
import {ListGroupItem, NavDropdown, ListGroup} from 'react-bootstrap';

export default class SuggestedCourses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      suggestedCourses: []
    }
  }

  componentDidMount() {

  }

  render() {
    console.log(this.props.suggestedCourses);
  return (
    <div>
            <div class="panel panel-default">
              <div class="panel-heading">
                <h4>
                  Suggested Classes
                </h4>
              </div>

              <table class="table table-fixed">
                <tbody>
                    {this.props.suggestedCourses.map(course => (
                    <tr>
                    <td class="col-xs-12">
                      <h4>{course.search_name}</h4>
                      <p>{course.title}</p>
                    </td>
                    </tr>))}
                </tbody>
              </table>
              </div>
    </div>
  );
}
}
