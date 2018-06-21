import React, { Component } from "react";
import CommentsList from "containers/CommentsListContainer";

export default class Comments extends Component {
  render() {
    return (
      <div>
        <CommentsList />
      </div>
    );
  }
}
