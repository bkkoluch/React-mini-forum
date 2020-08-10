import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ROUTES } from 'utils/utils';
import { fetchPosts } from 'actions/postsActions';
import { fetchUsers } from 'actions/usersActions';
import { fetchComments } from 'actions/commentsActions';

import Homepage from 'components/Homepage/Homepage';
import UserDetails from 'components/User/UserDetails/UserDetails';
import PostDetails from 'components/Post/PostDetails/PostDetails';

class App extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchPosts());
		this.props.dispatch(fetchUsers());
		this.props.dispatch(fetchComments());
	}

	render() {
		return (
			<div className='App'>
				<BrowserRouter>
					<Switch>
						<Route exact path={ROUTES.ROOT} component={Homepage} />
						<Route path={ROUTES.POST_DETAILS} component={PostDetails} />
						<Route path={ROUTES.USER_DETAILS} component={UserDetails} />
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	dispatch,
});

export default connect(null, mapDispatchToProps)(App);
