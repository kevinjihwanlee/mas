import React, { Component } from 'react';
import {Nav, NavItem} from 'react-bootstrap';

/* PROPS PASSED
changeTab -> function that changes the active tab
*/

const HeaderBar = (props) => {
  return (
    <div>
      <header className="App-header">
        <h1 className="App-title">Registration Tool</h1>

        <Nav bsStyle="tabs">
          <NavItem eventKey="1" href="/">Search for Courses</NavItem>
          <NavItem eventKey="2" href="/coursehistory">Course History</NavItem>
        </Nav>
      </header>
    </div>
  );
}

export default HeaderBar;
