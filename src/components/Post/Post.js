import React from 'react';
import styles from './Post.module.css';
import { faTrashAlt, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';
import {
	getPostTitle,
	getPostBody,
	getPostId,
	deletePost,
} from '../../actions/postActions';
import { useDispatch } from 'react-redux';

const Post = (props) => {
	const history = useHistory();
	const dispatch = useDispatch();

	const clickOnPost = () => {
		history.push('/post_details');
		dispatch(getPostTitle(props.title));
		dispatch(getPostBody(props.body));
		dispatch(getPostId(props.id));
	};
	console.log(props);
	const removePost = (id) => {
		dispatch(deletePost(id));
	};

	return (
		<div className={styles.post__container}>
			<FontAwesomeIcon
				icon={faTrashAlt}
				size='2x'
				className={styles.post__container__trash}
				onClick={() => removePost(props.id)}
			/>
			<p>{props.title}</p>
			<FontAwesomeIcon
				icon={faAngleRight}
				size='3x'
				className={styles.post__container__arrow}
				onClick={() => clickOnPost()}
			/>
		</div>
	);
};

export default Post;
