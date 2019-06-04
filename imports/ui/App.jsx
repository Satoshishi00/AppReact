import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Inscription from './Inscription';
import Connection from './Connection';
import ArticleForm from './ArticleForm';

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
