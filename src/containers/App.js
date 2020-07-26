import React from 'react';
import Homepage from '../components/Homepage/Homepage';
import styles from './App.module.css';
import UserDetails from '../components/User/UserDetails/UserDetails';

function App() {
	return (
		<div className='App'>
			{/* <Homepage /> */}
			<UserDetails />
		</div>
	);
}

export default App;
