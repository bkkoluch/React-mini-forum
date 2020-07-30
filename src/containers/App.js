import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPosts } from './../actions/postActions';
import { fetchUsers } from './../actions/userActions';
import { fetchComments } from './../actions/commentActions';

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

//TODO:
//add 'add comment' modal (done)
//add 'adding comment' (done)
//loading screen (done)
//validation (done)
//add validation tooltips (done)
//refactor
//fix the send post and send comment issue (last letter is ommited)
