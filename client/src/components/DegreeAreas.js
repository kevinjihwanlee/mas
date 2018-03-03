import React from 'react';
import {ListGroupItem, ListGroup, DropdownButton, MenuItem} from 'react-bootstrap';

const DegreeAreas = (props) => {

  return (
    <div className="search_degree">
      <DropdownButton title={props.activeDegreeArea} bsSize="small">
        {props.degreeAreas.map(degreeArea => {
          return (<MenuItem href="#" onClick={(e) => {props.changeDegreeArea(degreeArea);}}>{degreeArea}</MenuItem>)
        })}
      </DropdownButton>
    </div>
  )
}

export default DegreeAreas
