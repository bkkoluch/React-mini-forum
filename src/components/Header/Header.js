import React, { useState } from 'react';
import styles from './Header.module.css';
import Modal from 'react-modal';

const Header = (props) => {
	const goBack = () => {
		props.history.goBack();
	};

	const [modalIsOpen, setIsOpen] = useState(false);
	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);

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
				contentLabel='Example Modal'
				overlayClassName={styles.overlay}
				className={styles['header__modal--add']}
			>
				<h5>Add post</h5>
				<h2>Add post</h2>
				<div className={styles.modal__post__title}>
					<p>Title</p>
					<input type='text' />
				</div>
				<div className={styles.modal__post__body}>
					<p>Body</p>
					<textarea />
				</div>
				<button onClick={() => closeModal()}>Cancel</button>
				<button>Save</button>
			</Modal>
			<button
				className={
					props.show ? styles.header__deleteButton : styles.hidden
				}
			></button>
		</div>
	);
};

export default Header;
