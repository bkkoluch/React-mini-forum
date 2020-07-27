import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts, deletePost } from './../../../actions/postActions';
import Post from '../../Post/Post';
// import styles from './UserDetails.module.css';
import Header from '../../Header/Header';

class UserDetails extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchPosts());
	}

	render() {
		const { error, loading, posts } = this.props;

		if (error) {
			return <div>Error! {error.message}</div>;
		}

		if (loading) {
			return <div>Loading...</div>;
		}
		console.log(this.props);
		return (
			<div>
				<Header name={this.props.name} history={this.props.history} />
				{posts.map((post) =>
					post.userId === this.props.id ? (
						<Post
							key={post.id}
							id={post.id}
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
