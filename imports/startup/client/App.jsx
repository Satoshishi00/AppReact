import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '/imports/ui/Home';
import Inscription from '/imports/ui/Inscription';
import Connection from '/imports/ui/Connection';
import ArticleForm from '/imports/ui/ArticleForm';

const App = () => (
  <Router>
    <Switch>
      <Route path="/home"              component={Home}        />
      <Route path="/signup"            component={Inscription} />
      <Route path="/signin"            component={Connection}  /> 
      <Route path="/articles/add"      component={ArticleForm} />
      <Route path="/articles/edit/:id" component={ArticleForm} />
    </Switch>
  </Router>
);

export default App;
