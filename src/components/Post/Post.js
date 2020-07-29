import React from 'react';
import styles from './Post.module.css';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
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

	const getPostDetails = () => {
		history.push('/post_details');
		dispatch(getPostTitle(props.title));
		dispatch(getPostBody(props.body));
		dispatch(getPostId(props.id));
	};

	const removePost = (id) => {
		dispatch(deletePost(id));
	};

	return (
		<Tippy
			content="Click on the arrow to go to post's details"
			placement='top-end'
			arrow=''
		>
			<div className={styles.post__container}>
				<Tippy content='Click to remove a post'>
					<div>
						<FontAwesomeIcon
							icon={faTrashAlt}
							size='2x'
							className={styles.post__container__trash}
							onClick={() => removePost(props.id)}
						/>
					</div>
				</Tippy>
				<p>{props.title}</p>
				<FontAwesomeIcon
					icon={faAngleRight}
					size='3x'
					className={styles.post__container__arrow}
					onClick={() => getPostDetails()}
				/>
			</div>
		</Tippy>
	);
};

export default Post;
