import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, generatePath } from 'react-router-dom';
import PropTypes from 'prop-types';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { ROUTES } from 'utils/utils';
import { deleteComments } from 'actions/commentsActions';
import { deletePost, getPostsDetails, deletePostFromApi } from 'actions/postsActions';
import styles from './Post.module.css';

const Post = (props) => {
	const dispatch = useDispatch();

	const getPostDetails = () => {
		dispatch(getPostsDetails(props.id, props.title, props.body));
	};

	const removePost = () => {
		dispatch(deleteComments(props.id));
		dispatch(deletePost(props.id));
		dispatch(deletePostFromApi(props.id));
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
							onClick={removePost}
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
						onClick={getPostDetails}
					/>
				</Link>
			</div>
		</Tippy>
	);
};

Post.propTypes = {
	id: PropTypes.number,
	title: PropTypes.string,
	body: PropTypes.string,
	userId: PropTypes.string,
};

export default Post;
