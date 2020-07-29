import React from 'react';
import { connect } from 'react-redux';
import styles from './Homepage.module.css';
import User from '../User/User';

class Homepage extends React.Component {
	render() {
		const { error, loading, users } = this.props;

		if (error) {
			return <div>Error! {error.message}</div>;
		}

		if (loading) {
			return <div>Loading...</div>;
		}

		return (
			<div className={styles.homepage__container}>
				{users.map((user) => (
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
