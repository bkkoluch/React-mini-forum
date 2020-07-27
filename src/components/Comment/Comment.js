import React from 'react';
import styles from './Comments.module.css';

const Comment = (props) => {
	return (
		<div className={styles.comment__container}>
			<p>{props.body}</p>
		</div>
	);
};

export default Comment;
