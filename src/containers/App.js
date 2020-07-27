import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from '../components/Homepage/Homepage';
import UserDetails from '../components/User/UserDetails/UserDetails';
import PostDetails from '../components/Post/PostDetails/PostDetails';

function App() {
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

export default App;
