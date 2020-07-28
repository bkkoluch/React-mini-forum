import React from 'react';
import styles from './User.module.css';
import { useDispatch } from 'react-redux';
import { getUsersId, getUsersName } from '../../actions/userActions';
import { useHistory } from 'react-router-dom';

const User = (props) => {
	const history = useHistory();
	const dispatch = useDispatch();

	const getData = () => {
		history.push('/user_details');
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
			<button className={styles.user__button} onClick={() => getData()}>
				Details
			</button>
		</div>
	);
};

export default User;
