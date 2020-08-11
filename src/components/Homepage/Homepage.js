import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import User from 'components/User/User';
import Spinner from 'components/Spinner/Spinner';
import styles from './Homepage.module.css';

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

Homepage.propTypes = {
	users: PropTypes.array,
	loading: PropTypes.bool,
};

export default connect(mapStateToProps)(Homepage);
