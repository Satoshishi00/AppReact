import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import CustomInput from './CustomInput';
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data'

const FIELDS = [
  { name: "username",   type: "text",      placeholder: "Identifiant" },
  { name: "password",   type: "password",  placeholder: "Password"    },
];

class Connection extends Component {
  state = {
    password: "",
    username: "",
  }

  static getDerivedStateFromProps(props) {
    if (props.userId)
      props.history.push('/home');
    return {};
  };

  update = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  signin = () => {
    const { password, username } = this.state;
    Meteor.loginWithPassword(username, password, (err) => {
      if (err)
        console.log(err);
    });
  }

  render() {
    return (
      <div>
        <h1>Connection</h1>
        {FIELDS.map(field => (
          <CustomInput
            type={field.type}
            key={field.name}
            update={this.update}
            value={this.state[field.name]}
            placeholder={field.placeholder}
            name={field.name}
            blabla="zliuheflz"
          />
        ))}
        <button
          onClick={this.signin}
        >Signup
        </button>
        <Link to="/signup">Inscription</Link>
      </div>
    );
  }
}

export default withTracker(() => ({
  userId: Meteor.userId(),
}))(Connection);

/*

export default withTracker(() => {
  return {
    userId: Meteor.userId(),
  };
})(Connection)

*/
