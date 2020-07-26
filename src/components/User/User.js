import React from 'react';
import styles from './User.module.css';

const User = (props) => {
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
			<button className={styles.user__button}>Details</button>
		</div>
	);
};

export default User;
