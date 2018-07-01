import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';

import { loadUsers } from 'actions/users';
import UserList from 'components/UserList';

class UserListContainer extends PureComponent {
  componentDidMount() {
    const { load, users } = this.props;
    
    if(!users.length) {
      load();
    }
  }

  handleLoadMore = () => {
    const { load } = this.props;

    load();
  }

  render() {
    const { users, loading } = this.props;
    return (
      <Fragment>
        {loading && !users.length ? <div>Loading...</div> : <UserList onLoadMore={this.handleLoadMore} users={users} />}
      </Fragment>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    ...props,
    page: state.users.page,
    loading: state.users.loading,
    users: state.users.entries,
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    ...props,
    load: () => dispatch(loadUsers()),
  }
}

function mergeMap(stateProps, dispatchProps, ownProps) {
  return {
    ...stateProps,
    ...ownProps,
    load: () => dispatchProps.load(stateProps.page),
  }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeMap)(UserListContainer);