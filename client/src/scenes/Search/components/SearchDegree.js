import React, { Component } from 'react';
import {ListGroupItem, NavDropdown, ListGroup} from 'react-bootstrap';

const SearchDegree = (props) => {
  return (
    <div className="search_degree">
      <ListGroup>
          <ListGroupItem>Degree Audit</ListGroupItem>
          <ListGroupItem href="#" onClick={(e) => {e.preventDefault(); props.changeDegreeArea('major');}} >{'Major'}</ListGroupItem>
          <ListGroupItem href="#" onClick={(e) => {e.preventDefault(); props.changeDegreeArea('breadth');}} >{'Breadth'}</ListGroupItem>
          <ListGroupItem href="#" onClick={(e) => {e.preventDefault(); props.changeDegreeArea('depth');}} >{'Depth'}</ListGroupItem>
          <ListGroupItem href="#" onClick={(e) => {e.preventDefault(); props.changeDegreeArea('project');}} >{'Project Requirements'}</ListGroupItem>
      </ListGroup>
    </div>
  )
}

export default SearchDegree
