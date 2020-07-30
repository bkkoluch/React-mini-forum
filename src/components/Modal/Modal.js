import React, { useState } from 'react';
import styles from './Modal.module.css';
import Modal from 'react-modal';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import { useDispatch, connect } from 'react-redux';
import {
	showCommentsModal,
	addComment,
	sendCommentDetails,
} from '../../actions/commentActions';
import {
	addPost,
	sendPostDetails,
	showPostModal,
} from '../../actions/postActions';

Modal.setAppElement('#root');

const ModalPopup = (props) => {
	const dispatch = useDispatch();
	const [title, setTitle] = useState('');
	const [postBody, setPostBody] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [commentBody, setCommentBody] = useState('');

	const sendPostData = () =>
		dispatch(
			sendPostDetails(
				props.userId,
				props.posts.length + 1,
				title,
				postBody
			)
		);
	const sendCommentData = () =>
		dispatch(
			sendCommentDetails(
				props.postId,
				props.comments.length + 1,
				name,
				email,
				commentBody
			)
		);
	const clearPostData = () => {
		setTitle('');
		setPostBody('');
	};
	const clearCommentData = () => {
		setName('');
		setEmail('');
		setCommentBody('');
	};

	const togglePostModal = () => {
		dispatch(showPostModal(props.showPostModal));
		clearPostData();
	};
	const toggleCommentModal = () => {
		dispatch(showCommentsModal(props.isOpen));
		clearCommentData();
	};

	const sendPost = () => {
		dispatch(addPost(props.sentPost));
		togglePostModal();
	};
	const sendComment = () => {
		dispatch(addComment(props.sentComment));
		toggleCommentModal();
	};

	const handlePostTitleChange = (e) => {
		setTitle(e.target.value);
		sendPostData();
	};
	const handlePostBodyChange = (e) => {
		setPostBody(e.target.value);
		sendPostData();
	};

	const handleNameChange = (e) => {
		setName(e.target.value);
		sendCommentData();
	};
	const handleEmailChange = (e) => {
		setEmail(e.target.value);
		sendCommentData();
	};
	const handleCommentBodyChange = (e) => {
		setCommentBody(e.target.value);
		sendCommentData();
	};

	const validatePostModal = () => {
		const titleValidation = title.match(
			/^[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{3,12}$/
		);
		const bodyValidation = postBody.match(
			/^[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{8,48}$/
		);

		if (titleValidation && bodyValidation) {
			return false;
		}
		return true;
	};

	const validateCommentModal = () => {
		const nameValidation = name.match(
			/^[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{3,10}$/
		);
		const emailValidation = email.match(
			/[\w-\.]{2,10}@([\w-]{2,8}\.)+[\w-]{2,4}$/
		);
		const bodyValidation = commentBody.match(
			/^[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{8,38}$/
		);

		if (nameValidation && emailValidation && bodyValidation) {
			return false;
		}
		return true;
	};

	if (props.showPostModal) {
		return (
			<Modal
				isOpen={props.showPostModal}
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
							onChange={handlePostTitleChange}
						/>
					</Tippy>
				</div>
				<div className={styles.modal__body}>
					<p>Body</p>
					<Tippy content='The post body should be between 10-50 letters'>
						<textarea name='body' onChange={handlePostBodyChange} />
					</Tippy>
				</div>
				<div className={styles.modal__buttons}>
					<button onClick={() => togglePostModal()}>Cancel</button>
					<button
						onClick={() => sendPost()}
						disabled={validatePostModal()}
					>
						Save
					</button>
				</div>
			</Modal>
		);
	}

	if (props.showCommentsModal) {
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
							onChange={handleNameChange}
						/>
					</Tippy>
				</div>
				<div className={styles.modal__email}>
					<p>Email</p>
					<Tippy content='The email must be between 2-10 letters, the domain adress between 2-8 letters, top-level domain should be between 2-4 letters '>
						<input
							type='text'
							name='email'
							onChange={handleEmailChange}
						/>
					</Tippy>
				</div>
				<div className={styles.modal__body}>
					<p>Body</p>
					<Tippy content='The comment body must start with a capital letter and be between 10-40 letters'>
						<textarea
							name='body'
							onChange={handleCommentBodyChange}
						/>
					</Tippy>
				</div>
				<div className={styles.modal__buttons}>
					<button onClick={() => toggleCommentModal()}>Cancel</button>
					<button
						onClick={() => sendComment()}
						disabled={validateCommentModal()}
					>
						Save
					</button>
				</div>
			</Modal>
		);
	}

	return null;
};

const mapStateToProps = (state) => ({
	showCommentsModal: state.comments.showModal,
	showPostModal: state.posts.showPostModal,
	sentPost: state.posts.sentPost,
	sentComment: state.comments.comment,
	userId: state.users.id,
	postId: state.posts.id,
	comments: state.comments.comments,
	posts: state.posts.posts,
});

export default connect(mapStateToProps)(ModalPopup);
