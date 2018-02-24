import React from 'react';
import {ListGroupItem, ListGroup} from 'react-bootstrap';

const DegreeAreas = (props) => {

  return (
    <div className="search_degree">
      <ListGroup>
          {props.degreeAreas.map(degreeArea => {
            return (<ListGroupItem href="#" onClick={(e) => {props.changeDegreeArea(degreeArea);}}>{degreeArea}</ListGroupItem>)
          })}
      </ListGroup>
    </div>
  )
}

export default DegreeAreas
