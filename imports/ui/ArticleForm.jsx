import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import CustomInput from './CustomInput';
import { Editor } from '@tinymce/tinymce-react';
import { withTracker } from 'meteor/react-meteor-data'

class ArticleForm extends Component {
  state={
    title: "",
    content: "",
  }

  static getDerivedStateFromProps(props) {
    if (!props.userId)
      props.history.push('/signin');
    return {};
  };

  update = (e, { name, value }) => this.setState({ [name]: value });

  send = () => {
    const { title, content } = this.state;
    const { history } = this.props;
    
    Meteor.call("articles.create", { title, content }, (err) => {
      if (err)
        console.log(err);
      else
        history.push('/home');
    });
  }

  render() {
    const { title, content } = this.state;
    return (
      <div>
        <CustomInput
          placeholder="Title"
          name="title"
          value={title}
          update={this.update}
        />
        <Editor
          initialValue={content}
          onChange={(e) => this.update(e, {
            name: "content",
            value: e.target.getContent()
          })}
        />
        <button onClick={this.send} >Créer l'article</button>
      </div>
    )
  }
}

export default withTracker(() => ({
  userId: Meteor.userId(),
}))(ArticleForm);

/*

export default withTracker(() => {
  return {
    userId: Meteor.userId(),
  };
})(ArticleForm)

*/
