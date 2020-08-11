import React from 'react';
import Modal from 'react-modal';
import { useDispatch, connect } from 'react-redux';
import PropTypes from 'prop-types';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';

import {
	addPost,
	sendPostDetails,
	showPostModal,
	getPostsAmount,
	addPostToApi,
} from 'actions/postsActions';
import styles from 'components/Modal/Modal.module.css';

const PostModal = (props) => {
	const dispatch = useDispatch();
	const handleChange = (e) => {
		props.setUserInput({ [e.target.name]: e.target.value });
		sendPostData();
	};

	const sendPostData = () =>
		dispatch(
			sendPostDetails(
				props.userId,
				props.amount + 1,
				props.userInput.title,
				props.userInput.postBody
			)
		);

	const togglePostModal = () => {
		dispatch(showPostModal(props.showPostModal));
		props.cleanData();
	};

	const sendPost = () => {
		dispatch(addPost(props.sentPost));
		togglePostModal();
		dispatch(getPostsAmount(props.amount + 1));
		dispatch(addPostToApi(props.sentPost.title, props.sentPost.body, props.userId));
	};

	const validatePostModal = () => {
		const titleValidation = props.userInput.title.match(
			/^[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{3,12}$/
		);
		const bodyValidation = props.userInput.postBody.match(
			/^[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{8,498}$/
		);

		if (titleValidation && bodyValidation) {
			return false;
		}
		return true;
	};

	return (
		<Modal
			isOpen={props.isOpen}
			onRequestClose={togglePostModal}
			contentLabel='Add post modal'
			overlayClassName={styles.overlay}
			className={styles['modal__container--post']}
		>
			<h5>Add post</h5>
			<h2>Add post</h2>
			<div className={styles.modal__title}>
				<p>Title</p>
				<Tippy content='The name should start with a capital letter and be between 5-15 letters'>
					<input
						type='text'
						name='title'
						value={props.userInput.title}
						onChange={handleChange}
					/>
				</Tippy>
			</div>
			<div className={styles.modal__body}>
				<p>Body</p>
				<Tippy content='The post body should be between 10-500 letters'>
					<textarea
						name='postBody'
						onChange={handleChange}
						value={props.userInput.postBody}
					/>
				</Tippy>
			</div>
			<div className={styles.modal__buttons}>
				<button onClick={togglePostModal}>Cancel</button>
				<button onClick={sendPost} disabled={validatePostModal()}>
					Save
				</button>
			</div>
		</Modal>
	);
};

const mapStateToProps = (state) => ({
	posts: state.posts.posts,
	amount: state.posts.amount,
	sentPost: state.posts.sentPost,
	userId: state.users.id,
});

PostModal.propTypes = {
	posts: PropTypes.array,
	amount: PropTypes.number,
	sentPost: PropTypes.object,
	userId: PropTypes.number,
};

export default connect(mapStateToProps)(PostModal);
