import React from 'react';

const SubCourseList = (props) => {
  return (
    <div className="subcourselist">
      <h4 className="sectionHeader underlinedText">{props.degreeArea}</h4>
      {props.courses.map(courseObject => (
        courseObject.taken && <p>{courseObject.search_name}</p>
      ))}
    </div>
  )
}

export default SubCourseList
