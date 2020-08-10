import React, { useReducer } from 'react';
import styles from './Modal.module.css';
import Modal from 'react-modal';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';

import { useDispatch, connect } from 'react-redux';
import {
	showCommentsModal,
	addComment,
	sendCommentDetails,
	addCommentToApi,
} from 'actions/commentsActions';
import {
	addPost,
	sendPostDetails,
	showPostModal,
	getPostsAmount,
	addPostToApi,
} from 'actions/postsActions';

Modal.setAppElement('#root');

const ModalPopup = (props) => {
	const dispatch = useDispatch();
	const [userInput, setUserInput] = useReducer(
		(state, newState) => ({ ...state, ...newState }),
		{
			title: '',
			postBody: '',
			name: '',
			email: '',
			commentBody: '',
		}
	);

	const handleChange = (e) => {
		setUserInput({ [e.target.name]: e.target.value });
		sendPostData();
		sendCommentData();
	};

	const cleanData = () => {
		Object.keys(userInput).forEach((key) => {
			userInput[key] = '';
		});
	};

	const sendPostData = () =>
		dispatch(
			sendPostDetails(
				props.userId,
				props.amount + 1,
				userInput.title,
				userInput.postBody
			)
		);
	const sendCommentData = () =>
		dispatch(
			sendCommentDetails(
				props.postId,
				props.comments.length + 1,
				userInput.name,
				userInput.email,
				userInput.commentBody
			)
		);

	const togglePostModal = () => {
		dispatch(showPostModal(props.showPostModal));
		cleanData();
	};
	const toggleCommentModal = () => {
		dispatch(showCommentsModal(props.isOpen));
		cleanData();
	};

	const sendPost = () => {
		dispatch(addPost(props.sentPost));
		togglePostModal();
		dispatch(getPostsAmount(props.amount + 1));
		dispatch(addPostToApi(props.sentPost.title, props.sentPost.body, props.userId));
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

	const validatePostModal = () => {
		const titleValidation = userInput.title.match(
			/^[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{3,12}$/
		);
		const bodyValidation = userInput.postBody.match(
			/^[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{8,498}$/
		);

		if (titleValidation && bodyValidation) {
			return false;
		}
		return true;
	};

	const validateCommentModal = () => {
		const nameValidation = userInput.name.match(
			/^[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{3,10}$/
		);
		const emailValidation = userInput.email.match(
			/[\w-\.]{2,10}@([\w-]{2,8}\.)+[\w-]{2,4}$/
		);
		const bodyValidation = userInput.commentBody.match(
			/^[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{8,198}$/
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
							value={userInput.title}
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
							value={userInput.postBody}
						/>
					</Tippy>
				</div>
				<div className={styles.modal__buttons}>
					<button onClick={() => togglePostModal()}>Cancel</button>
					<button onClick={() => sendPost()} disabled={validatePostModal()}>
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
							value={userInput.name}
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
							value={userInput.email}
							onChange={handleChange}
						/>
					</Tippy>
				</div>
				<div className={styles.modal__body}>
					<p>Body</p>
					<Tippy content='The comment body must start with a capital letter and be between 10-200 letters'>
						<textarea
							name='commentBody'
							value={userInput.commentBody}
							onChange={handleChange}
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
	amount: state.posts.amount,
});

export default connect(mapStateToProps)(ModalPopup);
