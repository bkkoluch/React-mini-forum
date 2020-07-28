import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from '../components/Homepage/Homepage';
import UserDetails from '../components/User/UserDetails/UserDetails';
import PostDetails from '../components/Post/PostDetails/PostDetails';
import { fetchPosts } from './../actions/postActions';
import { connect } from 'react-redux';

class App extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchPosts());
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
//fix the send post and send comment issue (last letter is ommited)
//add 'add comment' modal
//refactor
//loading screen
//validation
