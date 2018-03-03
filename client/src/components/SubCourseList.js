import React from 'react';

const SubCourseList = (props) => {
  return (
    <div className="subcourselist">
      <thead>
        <tr>
          <b>{props.degreeArea}</b>
        </tr>
      </thead>
      {props.courses.map(courseObject => (
        courseObject.taken &&
        <tbody>
        <tr>
          <td class="col-xs-10">
            <h4>{courseObject.search_name}</h4>
          </td>
          <td class="col-xs-2">
            <h4><a onClick={(e) => {props.changeClass(courseObject);}} className="changeButton" bsStyle="primary"> X</a></h4>
          </td>
        </tr>
        </tbody>
      ))}
    </div>
  )
}

export default SubCourseList
