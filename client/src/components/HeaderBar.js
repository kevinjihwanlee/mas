import React from 'react';

/* PROPS PASSED
changeTab -> function that changes the active tab
*/

const HeaderBar = (props) => {
  return (
    <div>
      <header style={styles.shadow} className="App-header">
        <h1 className="App-title">MÁS: More than MAS</h1>
      </header>
    </div>
  );
}

const styles = {
  shadow: {
    webkitBoxShadow: "0px 5px 10px 0px rgba(0,0,0,0.75)",
    mozBoxShadow: "0px 5px 10px 0px rgba(0,0,0,0.75)",
    boxShadow: "0px 5px 10px 0px rgba(0,0,0,0.75)"
  }
};

export default HeaderBar;
