import React, { useState } from 'react';
import styles from './Modal.module.css';
import Modal from 'react-modal';
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
	const [body, setBody] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [commentBody, setCommentBody] = useState('');

	const toggleCommentModal = () => dispatch(showCommentsModal(props.isOpen));
	const togglePostModal = () => dispatch(showPostModal(props.showPostModal));
	const sendPost = () => {
		dispatch(addPost(props.sentPost));
		togglePostModal();
	};
	const sendComment = () => {
		dispatch(addComment(props.sentComment));
		toggleCommentModal();
	};

	const handleTitleChange = (e) => {
		setTitle(e.target.value);
		dispatch(sendPostDetails(props.userId, title, body));
	};
	const handleBodyChange = (e) => {
		setBody(e.target.value);
		dispatch(sendPostDetails(props.userId, title, body));
	};

	const handleNameChange = (e) => {
		setName(e.target.value);
		dispatch(sendCommentDetails(name, email, commentBody, props.postId));
	};
	const handleEmailChange = (e) => {
		setEmail(e.target.value);
		dispatch(sendCommentDetails(name, email, commentBody, props.postId));
	};
	const handleCommentBodyChange = (e) => {
		setCommentBody(e.target.value);
		dispatch(sendCommentDetails(name, email, commentBody, props.postId));
	};

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
					<input type='text' onChange={handleNameChange} />
				</div>
				<div className={styles.modal__email}>
					<p>Email</p>
					<input type='text' onChange={handleEmailChange} />
				</div>
				<div className={styles.modal__body}>
					<p>Body</p>
					<textarea onChange={handleCommentBodyChange} />
				</div>
				<div className={styles.modal__buttons}>
					<button onClick={() => toggleCommentModal()}>Cancel</button>
					<button onClick={() => sendComment()}>Save</button>
				</div>
			</Modal>
		);
	}

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
					<input type='text' onChange={handleTitleChange} />
				</div>
				<div className={styles.modal__body}>
					<p>Body</p>
					<textarea onChange={handleBodyChange} />
				</div>
				<div className={styles.modal__buttons}>
					<button onClick={() => togglePostModal()}>Cancel</button>
					<button
						onClick={() => {
							sendPost();
						}}
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
});

export default connect(mapStateToProps)(ModalPopup);
