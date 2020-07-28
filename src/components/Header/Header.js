import React from 'react';
import styles from './Header.module.css';
import { useDispatch, connect } from 'react-redux';
import { deletePost, showPostModal } from '../../actions/postActions';
import ModalPopup from '../Modal/Modal';

const Header = (props) => {
	const dispatch = useDispatch();

	const toggleModal = () => dispatch(showPostModal(props.showPostModal));
	const goBack = () => props.history.goBack();
	const removePost = (id) => {
		dispatch(deletePost(id));
		goBack();
	};

	const modal = <ModalPopup isOpen={props.showPostModal} />;

	return (
		<div className={styles.header__container}>
			<button className={styles.header__backButton} onClick={goBack} />
			<p className={styles.header__name}>{props.name}</p>
			<button
				className={
					!props.show ? styles.header__addButton : styles.hidden
				}
				onClick={() => toggleModal()}
			/>
			{modal}
			<button
				className={
					props.show ? styles.header__deleteButton : styles.hidden
				}
				onClick={() => removePost(props.id)}
			/>
		</div>
	);
};

const mapStateToProps = (state) => ({
	id: state.posts.id,
	showPostModal: state.posts.showPostModal,
});

export default connect(mapStateToProps)(Header);
