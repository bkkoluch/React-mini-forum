import React from 'react';
import styles from './Post.module.css';
import { faTrashAlt, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Post = (props) => {
	return (
		<div className={styles.post__container}>
			<FontAwesomeIcon
				icon={faTrashAlt}
				size='2x'
				className={styles.post__container__trash}
			/>
			<p>{props.title}</p>
			<FontAwesomeIcon
				icon={faAngleRight}
				size='3x'
				className={styles.post__container__arrow}
			/>
		</div>
	);
};

export default Post;
