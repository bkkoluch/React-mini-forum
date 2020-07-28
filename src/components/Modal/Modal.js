import React, { useState } from 'react';
import styles from './Modal.module.css';
import Modal from 'react-modal';
import { useDispatch, connect } from 'react-redux';
import { showCommentsModal } from '../../actions/commentActions';
import {
	addPost,
	deletePost,
	sendPostDetails,
	showPostModal,
} from '../../actions/postActions';

Modal.setAppElement('#root');

const ModalPopup = (props) => {
	const dispatch = useDispatch();
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');

	const toggleCommentModal = () => dispatch(showCommentsModal(props.isOpen));
	const togglePostModal = () => dispatch(showPostModal(props.showPostModal));
	const sendPost = () => dispatch(addPost(props.sentPost));

	const handleTitleChange = (e) => {
		setTitle(e.target.value);
		dispatch(sendPostDetails(props.userId, title, body));
	};
	const handleBodyChange = (e) => {
		setBody(e.target.value);
		dispatch(sendPostDetails(props.userId, title, body));
	};

	if (props.showCommentsModal) {
		return (
			<Modal
				isOpen={props.isOpen}
				onRequestClose={toggleCommentModal}
				contentLabel='Add post modal'
				overlayClassName={styles.overlay}
				className={styles['header__modal--add']}
			>
				<h5>Add comment</h5>
				<h2>Add comment</h2>
				<div className={styles.modal__title}>
					<p>Name</p>
					<input type='text' />
				</div>
				<div className={styles.modal__title}>
					<p>Email</p>
					<input type='text' />
				</div>
				<div className={styles.modal__body}>
					<p>Body</p>
					<textarea />
				</div>
				<div className={styles.modal__buttons}>
					<button onClick={() => toggleCommentModal()}>Cancel</button>
					<button>Save</button>
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
				className={styles['header__modal--add']}
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
	userId: state.users.id,
});

export default connect(mapStateToProps)(ModalPopup);
