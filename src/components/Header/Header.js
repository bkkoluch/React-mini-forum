import React from 'react';
import styles from './Header.module.css';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';

import { useDispatch, connect } from 'react-redux';
import { deletePost, showPostModal, deletePostFromApi } from 'actions/postsActions';
import { deleteComments } from 'actions/commentsActions';

import ModalPopup from 'components/Modal/Modal';

const Header = (props) => {
	const dispatch = useDispatch();

	const toggleModal = () => dispatch(showPostModal(props.showPostModal));
	const goBack = () => props.history.goBack();
	const removePost = () => {
		dispatch(deleteComments(props.id));
		dispatch(deletePost(props.id));
		dispatch(deletePostFromApi(props.id));
		goBack();
	};

	const modal = <ModalPopup isOpen={props.showPostModal} />;

	return (
		<div className={styles.header__container}>
			<Tippy content='Click to go back'>
				<button className={styles.header__backButton} onClick={goBack} />
			</Tippy>
			<p className={styles.header__name}>{props.name}</p>
			<Tippy content='Click to add a post'>
				<button
					className={!props.show ? styles.header__addButton : styles.hidden}
					onClick={() => toggleModal()}
				/>
			</Tippy>
			{modal}
			<Tippy content='Click to remove a post'>
				<button
					className={props.show ? styles.header__deleteButton : styles.hidden}
					onClick={() => removePost(props.id)}
				/>
			</Tippy>
		</div>
	);
};

const mapStateToProps = (state) => ({
	id: state.posts.id,
	showPostModal: state.posts.showPostModal,
});

export default connect(mapStateToProps)(Header);
