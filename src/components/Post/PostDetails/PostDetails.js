import React from 'react';
import styles from './PostDetails.module.css';

import { connect } from 'react-redux';
import { commentToggle, showCommentsModal, fetchComments } from 'actions/commentsActions';

import Comment from 'components/Comment/Comment';
import Header from 'components/Header/Header';
import ModalPopup from 'components/Modal/Modal';
import Spinner from 'components/Spinner/Spinner';

class PostDetails extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchComments());
	}

	render() {
		const openModal = () => this.props.dispatch(showCommentsModal());
		const modal = <ModalPopup isOpen={this.props.showModal} />;

		if (this.props.loading) {
			return <Spinner />;
		}

		return (
			<div>
				<Header name={this.props.name} history={this.props.history} show={true} />
				<div className={styles.postDetails__container}>
					<p className={styles.postDetails__title}>{this.props.title}</p>
					<p className={styles.postDetails__body}>{this.props.body}</p>
					<div className={styles.postDetails__container__buttons}>
						<button
							className={styles['postDetails__container__buttons--toggle']}
							onClick={() => this.props.dispatch(commentToggle())}
						>
							{this.props.show ? 'Hide comments' : 'Show comments'}
						</button>
						<button
							className={
								this.props.show
									? styles['postDetails__container__buttons--add']
									: styles.hidden
							}
							onClick={openModal}
						>
							Add Comment
						</button>
						{modal}
					</div>
					{this.props.show
						? this.props.comments.map((comment) =>
								comment.postId === this.props.id ? (
									<Comment
										key={comment.id}
										name={comment.name}
										body={comment.body}
										email={comment.email}
									/>
								) : (
									''
								)
						  )
						: ''}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	name: state.users.name,
	id: state.posts.id,
	title: state.posts.title,
	body: state.posts.body,
	loading: state.comments.loading,
	comments: state.comments.comments,
	show: state.comments.show,
	showModal: state.comments.showModal,
});

export default connect(mapStateToProps)(PostDetails);
