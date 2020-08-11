import React from 'react';
import { connect } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';

import { ROUTES } from 'utils/utils';
import { fetchUsers } from 'actions/usersActions';

import Homepage from 'components/Homepage/Homepage';
import UserDetails from 'components/User/UserDetails/UserDetails';
import PostDetails from 'components/Post/PostDetails/PostDetails';

class App extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchUsers());
	}

	render() {
		return (
			<div className='App'>
				<HashRouter>
					<Switch>
						<Route exact path={ROUTES.ROOT} component={Homepage} />
						<Route path={ROUTES.POST_DETAILS} component={PostDetails} />
						<Route path={ROUTES.USER_DETAILS} component={UserDetails} />
					</Switch>
				</HashRouter>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	dispatch,
});

export default connect(null, mapDispatchToProps)(App);
