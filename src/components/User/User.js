import React from 'react';
import styles from './User.module.css';

const User = () => {
	return (
		<div className={styles.user__container}>
			<p className={styles.user__name}>Leanne Graham</p>
			<div className={styles.user__details}>
				<p>Sincere@april.biz</p>
				<p>1-770-736-8031</p>
				<p>hildegard.org</p>
			</div>

			<div className={styles.user__company}>
				<p>Romaguera-Crona</p>
				<p>Multi-layered client-server neural-net!</p>
			</div>

			<button className={styles.user__button}>Details</button>
		</div>
	);
};

export default User;
