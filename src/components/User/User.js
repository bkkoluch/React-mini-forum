import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, generatePath } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ROUTES } from 'utils/utils';
import { getUserDetails } from 'actions/usersActions';
import { getPostsAmount } from 'actions/postsActions';
import styles from './User.module.css';

const User = (props) => {
	const dispatch = useDispatch();
	const posts = useSelector((state) => state.posts);

	const getData = () => {
		dispatch(getUserDetails(props.id, props.name));
		dispatch(getPostsAmount(posts.posts.length));
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
				<button className={styles.user__button} onClick={getData}>
					Details
				</button>
			</Link>
		</div>
	);
};

User.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	email: PropTypes.string,
	phone: PropTypes.string,
	website: PropTypes.string,
	company: PropTypes.object,
	catchPhrase: PropTypes.string,
};

export default User;
