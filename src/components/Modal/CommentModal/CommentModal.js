import React from 'react';
import Modal from 'react-modal';
import { useDispatch, connect } from 'react-redux';
import PropTypes from 'prop-types';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';

import {
	showCommentsModal,
	addComment,
	sendCommentDetails,
	addCommentToApi,
} from 'actions/commentsActions';
import styles from 'components/Modal/Modal.module.css';

const CommentModal = (props) => {
	const dispatch = useDispatch();
	const handleChange = (e) => {
		props.setUserInput({ [e.target.name]: e.target.value });
		sendCommentData();
	};

	const sendCommentData = () =>
		dispatch(
			sendCommentDetails(
				props.postId,
				props.comments.length + 1,
				props.userInput.name,
				props.userInput.email,
				props.userInput.commentBody
			)
		);

	const toggleCommentModal = () => {
		dispatch(showCommentsModal(props.isOpen));
		props.cleanData();
	};

	const sendComment = () => {
		dispatch(addComment(props.sentComment));
		toggleCommentModal();
		dispatch(
			addCommentToApi(
				props.sentComment.name,
				props.sentComment.email,
				props.sentComment.body,
				props.userId
			)
		);
	};

	const validateCommentModal = () => {
		const nameValidation = props.userInput.name.match(
			/^[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{3,10}$/
		);
		const emailValidation = props.userInput.email.match(
			/[\w-\.]{2,10}@([\w-]{2,8}\.)+[\w-]{2,4}$/
		);
		const bodyValidation = props.userInput.commentBody.match(
			/^[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{8,198}$/
		);

		if (nameValidation && emailValidation && bodyValidation) {
			return false;
		}
		return true;
	};

	return (
		<Modal
			isOpen={props.isOpen}
			onRequestClose={toggleCommentModal}
			contentLabel='Add post modal'
			overlayClassName={styles.overlay}
			className={styles['modal__container--comment']}
		>
			<h5>Add comment</h5>
			<h2>Add comment</h2>
			<div className={styles.modal__title}>
				<p>Name</p>
				<Tippy content='The name must start with a capital letter and be between 5-12 letters'>
					<input
						type='text'
						name='name'
						value={props.userInput.name}
						onChange={handleChange}
					/>
				</Tippy>
			</div>
			<div className={styles.modal__email}>
				<p>Email</p>
				<Tippy content='The email must be between 2-10 letters, the domain adress between 2-8 letters, top-level domain should be between 2-4 letters '>
					<input
						type='text'
						name='email'
						value={props.userInput.email}
						onChange={handleChange}
					/>
				</Tippy>
			</div>
			<div className={styles.modal__body}>
				<p>Body</p>
				<Tippy content='The comment body must start with a capital letter and be between 10-200 letters'>
					<textarea
						name='commentBody'
						value={props.userInput.commentBody}
						onChange={handleChange}
					/>
				</Tippy>
			</div>
			<div className={styles.modal__buttons}>
				<button onClick={toggleCommentModal}>Cancel</button>
				<button onClick={sendComment} disabled={validateCommentModal()}>
					Save
				</button>
			</div>
		</Modal>
	);
};

const mapStateToProps = (state) => ({
	postId: state.posts.id,
	sentComment: state.comments.comment,
	comments: state.comments.comments,
});

CommentModal.propTypes = {
	postId: PropTypes.number,
	comments: PropTypes.array,
	sentComment: PropTypes.object,
};

export default connect(mapStateToProps)(CommentModal);
