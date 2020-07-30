import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postsActions';
import { fetchUsers } from '../actions/usersActions';
import { fetchComments } from '../actions/commentsActions';

import Homepage from '../components/Homepage/Homepage';
import UserDetails from '../components/User/UserDetails/UserDetails';
import PostDetails from '../components/Post/PostDetails/PostDetails';

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
						<Route exact path='/' component={Homepage} />
						<Route path='/user_details' component={UserDetails} />
						<Route path='/post_details' component={PostDetails} />
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
