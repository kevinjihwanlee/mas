import React, { Component } from 'react';
import {ListGroupItem, NavDropdown, ListGroup} from 'react-bootstrap';

const SuggestedCourses = (props) => {
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
                    {props.suggestedCourses.map(course => (
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

export default SuggestedCourses;
