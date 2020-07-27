import React from 'react';
import { connect } from 'react-redux';
import styles from './PostDetails.module.css';
import { fetchComments } from '../../../actions/commentActions';
import Comment from '../../Comment/Comment';

class PostDetails extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchComments());
	}

	render() {
		const { error, loading, comments } = this.props;

		if (error) {
			return <div>Error! {error.message}</div>;
		}

		if (loading) {
			return <div>Loading...</div>;
		}

		return (
			<div className={styles.postDetails__container}>
				<p className={styles.postDetails__name}>{this.props.name}</p>
				<p className={styles.postDetails__title}>{this.props.title}</p>
				<p>{this.props.body}</p>
				{comments.map((comment) =>
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
				)}

				{console.log(this.props)}
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
});

export default connect(mapStateToProps)(PostDetails);
