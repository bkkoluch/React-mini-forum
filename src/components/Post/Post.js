import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
	return (
		<div className={styles.post__container}>
			<p>{props.title}</p>
		</div>
	);
};

export default Post;
