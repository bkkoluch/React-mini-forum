import React from 'react';
import { connect } from 'react-redux';
import Post from '../../Post/Post';
import Header from '../../Header/Header';

const UserDetails = (props) => {
	const { error, loading, posts } = props;

	if (error) {
		return <div>Error! {error.message}</div>;
	}

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<Header name={props.name} history={props.history} />
			{posts.map((post) =>
				post.userId === props.id ? (
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
};

const mapStateToProps = (state) => ({
	posts: state.posts.posts,
	loading: state.posts.loading,
	error: state.posts.error,
	id: state.users.id,
	name: state.users.name,
});

export default connect(mapStateToProps)(UserDetails);
