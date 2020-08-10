import React from 'react';
import styles from './Post.module.css';
import Tippy from '@tippy.js/react';

import 'tippy.js/dist/tippy.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { useDispatch } from 'react-redux';
import { Link, generatePath } from 'react-router-dom';

import { ROUTES } from 'containers/App';
import { deleteComments } from 'actions/commentsActions';
import {
	deletePost,
	getPostsDetails,
	deletePostFromApi,
} from 'actions/postsActions';

const Post = (props) => {
	const dispatch = useDispatch();

	const getPostDetails = () => {
		dispatch(getPostsDetails(props.id, props.title, props.body));
	};

	const removePost = (id) => {
		dispatch(deleteComments(id));
		dispatch(deletePost(id));
		dispatch(deletePostFromApi(id));
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
				<Link
					to={generatePath(ROUTES.POST_DETAILS, {
						userId: props.userId,
						postId: props.id,
					})}
					style={{ marginLeft: 'auto' }}
				>
					<FontAwesomeIcon
						icon={faAngleRight}
						size='3x'
						className={styles.post__container__arrow}
						onClick={() => getPostDetails()}
					/>
				</Link>
			</div>
		</Tippy>
	);
};

export default Post;
