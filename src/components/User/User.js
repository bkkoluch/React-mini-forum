import React from 'react';
import styles from './User.module.css';
import { useDispatch } from 'react-redux';
import { getUsersId, getUsersName } from '../../actions/userActions';
import { Link } from 'react-router-dom';

const User = (props) => {
	const dispatch = useDispatch();

	const getData = () => {
		dispatch(getUsersId(props.id));
		dispatch(getUsersName(props.name));
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
				to='/user_details'
				className={styles.user__button}
				onClick={() => getData()}
			>
				Details
			</Link>
		</div>
	);
};

export default User;
