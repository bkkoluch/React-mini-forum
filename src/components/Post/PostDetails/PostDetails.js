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
		const { comments } = this.props;
		return (
			<div className={styles.postDetails__container}>
				<p className={styles.postDetails__name}>{this.props.name}</p>
				<p className={styles.postDetails__title}>{this.props.title}</p>
				<p>{this.props.body}</p>
				{comments.map((comment) => {
					return <Comment name={comment.name} body={comment.body} />;
				})}

				{console.log(this.props)}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	name: state.users.name,
	title: state.posts.title,
	body: state.posts.body,
	comments: state.comments.comments,
});

export default connect(mapStateToProps)(PostDetails);
