import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';
import CustomInput from '/imports/ui/components/CustomInput';
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data'

const FIELDS = [
  { name: "email",      type: "text",      placeholder: "Email"     },
  { name: "password",   type: "password",  placeholder: "Password"  },
  { name: "username",   type: "text",      placeholder: "Username" },
];

class Inscription extends Component {
  state = {
    email: "",
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

  signup = () => {
    const { email, password, username } = this.state;
    Accounts.createUser({ email, password, username }, (err) => {
      if (err)
        console.log(err);
      else
        this.setState({ email: "", password: "", username: "" });
    });
  }

  render() {
    return (
      <div>
        <h1>Inscription</h1>
        {FIELDS.map(field => (
          <CustomInput
            type={field.type}
            key={field.name}
            update={this.update}
            value={this.state[field.name]}
            placeholder={field.placeholder}
            name={field.name}
          />
        ))}
        <button
          onClick={this.signup}
        >Signup
        </button>
        <Link to="signin">Connection</Link>
      </div>
    );
  }
}

export default withTracker(() => ({
  userId: Meteor.userId(),
}))(Inscription);

/*

export default withTracker(() => {
  return {
    userId: Meteor.userId(),
  };
})(Inscription)

*/
