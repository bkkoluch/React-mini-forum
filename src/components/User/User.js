import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './User.module.css';

import { useDispatch, connect } from 'react-redux';
import { getUserDetails } from 'actions/usersActions';
import { getPostsAmount } from 'actions/postsActions';

const User = (props) => {
	const history = useHistory();
	const dispatch = useDispatch();

	const getData = () => {
		history.push('/user_details');
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
			<button className={styles.user__button} onClick={() => getData()}>
				Details
			</button>
		</div>
	);
};

const mapStateToProps = (state) => ({
	posts: state.posts,
});

export default connect(mapStateToProps)(User);
