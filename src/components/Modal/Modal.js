import React, { useReducer } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PostModal from './PostModal/PostModal';
import CommentModal from './CommentModal/CommentModal';

Modal.setAppElement('#root');

const ModalPopup = (props) => {
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

	const cleanData = () => {
		Object.keys(userInput).forEach((key) => {
			userInput[key] = '';
		});
	};

	if (props.showPostModal) {
		return (
			<PostModal
				isOpen={props.showPostModal}
				cleanData={cleanData}
				userInput={userInput}
				setUserInput={setUserInput}
			/>
		);
	}

	if (props.showCommentsModal) {
		return (
			<CommentModal
				isOpen={props.showCommentsModal}
				cleanData={cleanData}
				userInput={userInput}
				setUserInput={setUserInput}
			/>
		);
	}

	return null;
};

const mapStateToProps = (state) => ({
	showPostModal: state.posts.showPostModal,
	showCommentsModal: state.comments.showModal,
});

Modal.propTypes = {
	showPostModal: PropTypes.bool,
	showCommentsModal: PropTypes.bool,
};

export default connect(mapStateToProps)(ModalPopup);
