import React from 'react';
import PropTypes from 'prop-types';
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

Comment.propTypes = {
	name: PropTypes.string,
	email: PropTypes.string,
	body: PropTypes.string,
};

export default Comment;
