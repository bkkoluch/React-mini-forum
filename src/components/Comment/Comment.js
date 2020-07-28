import React, { useState } from 'react';
import styles from './Comments.module.css';

const Comment = (props) => {
	return (
		<div className={styles.comment__container}>
			<div className={styles.comment__details}>
				<p>{props.name}</p>
				<p className={styles.comment__details__email}>{props.email}</p>
			</div>
			<p>{props.body}</p>
		</div>
	);
};

export default Comment;
