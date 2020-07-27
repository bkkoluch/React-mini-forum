import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from './../../../actions/postActions';
import Post from '../../Post/Post';
import styles from './UserDetails.module.css';

class UserDetails extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchPosts());
	}

	goBack = () => {
		this.props.history.goBack();
	};

	render() {
		const { error, loading, posts } = this.props;

		if (error) {
			return <div>Error! {error.message}</div>;
		}

		if (loading) {
			return <div>Loading...</div>;
		}

		return (
			<div>
				<div className={styles.userDetails__header}>
					<button
						className={styles.userDetails__backButton}
						onClick={this.goBack}
					></button>
					<p className={styles.userDetails__name}>
						{this.props.name}
					</p>
					<button className={styles.userDetails__addButton}></button>
				</div>
				{posts.map((post) =>
					post.userId === this.props.id ? (
						<Post
							key={post.id}
							title={post.title}
							body={post.body}
						/>
					) : (
						''
					)
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	posts: state.posts.posts,
	loading: state.posts.loading,
	error: state.posts.error,
	id: state.users.id,
	name: state.users.name,
});

export default connect(mapStateToProps)(UserDetails);
