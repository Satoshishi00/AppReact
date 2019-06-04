<<<<<<< HEAD
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { hydrate } from 'react-dom';
import App from './App';

Meteor.startup(() => {
  hydrate(<App />, document.getElementById('react-target'));
=======
import React from "react";
import { Meteor } from "meteor/meteor";
import { hydrate } from "react-dom";
import App from "./App";

Meteor.startup(() => {
  hydrate(<App />, document.getElementById("react-target"));
>>>>>>> 7c53509b89af3a19435b7a247c36ee2a93bad06a
});
