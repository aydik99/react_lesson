import React, { PureComponent, Fragment } from "react";

import CommentsList from "components/CommentsList";

export default class CommentsListContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      page: 1,
      comments: []
    };
  }

  load() {
    const { page, comments } = this.state;
    if (page === 1) {
      this.setState({ loading: true });
    }
    fetch(
      `https://jsonplaceholder.typicode.com/comments?limit=10&_page=${page}`
    )
      .then(response => response.json())
      .then(results => {
        this.setState({
          loading: false,
          page: page + 1,
          comments: comments.concat(results)
        });
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  }

  componentDidMount() {
    this.load();
  }

  handleLoadMore = () => {
    this.load();
  };

  render() {
    const { comments, loading } = this.state;
    return (
      <Fragment>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <CommentsList onLoadMore={this.handleLoadMore} comments={comments} />
        )}
      </Fragment>
    );
  }
}
