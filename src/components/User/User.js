import React from 'react';
import { Link, generatePath } from 'react-router-dom';
import styles from './User.module.css';

import { useDispatch, connect } from 'react-redux';
import { getUserDetails } from 'actions/usersActions';
import { getPostsAmount } from 'actions/postsActions';
import { ROUTES } from 'containers/App';

const User = (props) => {
	const dispatch = useDispatch();

	const getData = () => {
		dispatch(getUserDetails(props.id, props.name));
		dispatch(getPostsAmount(props.posts.posts.length));
	};

	return (
		<div className={styles.user__container}>
			<p className={styles.user__name}>{props.name}</p>
			<div className={styles.user__details}>
				<p>{props.email}</p>
				<p>{props.phone}</p>
				<p>{props.website}</p>
			</div>
			<div className={styles.user__company}>
				<p>{props.company.name}</p>
				<p>{props.company.catchPhrase}</p>
			</div>
			<Link
				to={generatePath(ROUTES.USER_DETAILS, { userId: props.id })}
				style={{ textAlign: 'center' }}
			>
				<button
					className={styles.user__button}
					onClick={() => getData()}
				>
					Details
				</button>
			</Link>
		</div>
	);
};

const mapStateToProps = (state) => ({
	posts: state.posts,
});

export default connect(mapStateToProps)(User);
