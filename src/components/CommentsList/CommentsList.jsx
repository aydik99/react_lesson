import React, { Component } from "react";

export default class CommentsList extends Component {
  render() {
    const { comments, onLoadMore } = this.props;

    return (
      <div>
        <ul>
          {comments.map(comment => <li key={comment.id}>{comment.body}</li>)}
        </ul>
        <button onClick={onLoadMore}>Load more</button>
      </div>
    );
  }
}
