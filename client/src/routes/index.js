import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CourseHistory from '../scenes/CourseHistory';
import Search from '../scenes/Search';

export default () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Search} />
        <Route path="/coursehistory" exact component={CourseHistory} />
      </Switch>
    </BrowserRouter>
  )
}
