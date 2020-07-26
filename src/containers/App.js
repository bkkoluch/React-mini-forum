import React from 'react';
import styles from './App.module.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from '../components/Homepage/Homepage';
import UserDetails from '../components/User/UserDetails/UserDetails';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={Homepage} />
					<Route exact path='/user_details' component={UserDetails} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
