import React, { useState } from 'react';
import styles from './Header.module.css';
import Modal from 'react-modal';
import { useDispatch, connect } from 'react-redux';
import { addPost, deletePost } from '../../actions/postActions';

Modal.setAppElement('#root');

const Header = (props) => {
	const [modalIsOpen, setIsOpen] = useState(false);
	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);
	const dispatch = useDispatch();

	const goBack = () => {
		props.history.goBack();
	};

	const sendPost = () => {
		dispatch(addPost());
	};

	const removePost = (id) => {
		dispatch(deletePost(id));
		goBack();
	};

	return (
		<div className={styles.header__container}>
			<button
				className={styles.header__backButton}
				onClick={goBack}
			></button>
			<p className={styles.header__name}>{props.name}</p>
			<button
				className={
					!props.show ? styles.header__addButton : styles.hidden
				}
				onClick={() => openModal()}
			></button>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				contentLabel='Add post modal'
				overlayClassName={styles.overlay}
				className={styles['header__modal--add']}
			>
				<h5>Add post</h5>
				<h2>Add post</h2>
				<div className={styles.modal__title}>
					<p>Title</p>
					<input type='text' />
				</div>
				<div className={styles.modal__body}>
					<p>Body</p>
					<textarea />
				</div>
				<div className={styles.modal__buttons}>
					<button onClick={() => closeModal()}>Cancel</button>
					<button onClick={() => sendPost()}>Save</button>
				</div>
			</Modal>
			<button
				className={
					props.show ? styles.header__deleteButton : styles.hidden
				}
				onClick={() => removePost(props.id)}
			></button>
		</div>
	);
};

const mapStateToProps = (state) => ({
	id: state.posts.id,
});

export default connect(mapStateToProps)(Header);
