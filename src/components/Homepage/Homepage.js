import React from 'react';
import styles from './Homepage.module.css';

import { connect } from 'react-redux';

import User from 'components/User/User';
import Spinner from 'components/Spinner/Spinner';

class Homepage extends React.Component {
	render() {
		if (this.props.error) {
			return <div>Error! {this.props.error.message}</div>;
		}

		if (this.props.loading) {
			return <Spinner />;
		}

		return (
			<div className={styles.homepage__container}>
				{this.props.users.map((user) => (
					<User
						key={user.id}
						id={user.id}
						name={user.name}
						company={user.company}
						email={user.email}
						phone={user.phone.split(' ')[0]}
						website={user.website}
					/>
				))}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	users: state.users.users,
	loading: state.users.loading,
	error: state.users.error,
});

export default connect(mapStateToProps)(Homepage);
