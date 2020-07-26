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
		const { error, loading, posts, id } = this.props;

		if (error) {
			return <div>Error! {error.message}</div>;
		}

		if (loading) {
			return <div>Loading...</div>;
		}

		return (
			<div className={styles.userDetails__container}>
				<button onClick={this.goBack}>Go Back</button>
				<p
					style={{
						marginBottom: '80px',
						marginTop: '48px',
						textAlign: 'center',
					}}
				>
					Leanne Graham
				</p>
				{console.log(posts)}
				{posts.map((post) =>
					post.userId === this.props.id ? (
						<Post key={post.id} title={post.title} />
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
});

export default connect(mapStateToProps)(UserDetails);
