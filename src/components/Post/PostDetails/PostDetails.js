import React from 'react';
import { connect } from 'react-redux';
import styles from './PostDetails.module.css';
import {
	commentToggle,
	showCommentsModal,
} from '../../../actions/commentActions';
import Comment from '../../Comment/Comment';
import Header from '../../Header/Header';
import ModalPopup from '../../Modal/Modal';

class PostDetails extends React.Component {
	render() {
		const { error, loading, comments } = this.props;
		const openModal = () =>
			this.props.dispatch(showCommentsModal(this.props.add));

		if (error) {
			return <div>Error! {error.message}</div>;
		}

		if (loading) {
			return <div>Loading...</div>;
		}

		const modal = <ModalPopup isOpen={this.props.showModal} />;

		return (
			<div>
				<Header
					name={this.props.name}
					history={this.props.history}
					show={true}
				/>
				<div className={styles.postDetails__container}>
					<p className={styles.postDetails__title}>
						{this.props.title}
					</p>
					<p className={styles.postDetails__body}>
						{this.props.body}
					</p>
					<div className={styles.postDetails__container__buttons}>
						<button
							className={
								styles[
									'postDetails__container__buttons--toggle'
								]
							}
							onClick={() => this.props.dispatch(commentToggle())}
						>
							{this.props.show
								? 'Hide comments'
								: 'Show comments'}
						</button>
						<button
							className={
								this.props.show
									? styles[
											'postDetails__container__buttons--add'
									  ]
									: styles.hidden
							}
							onClick={() => openModal()}
						>
							Add Comment
						</button>
						{modal}
					</div>
					{this.props.show
						? comments.map((comment) =>
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
	comments: state.comments.comments,
	show: state.comments.show,
	showModal: state.comments.showModal,
});

export default connect(mapStateToProps)(PostDetails);
