import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { fetchPosts } from 'actions/postsActions';

import Post from 'components/Post/Post';
import Header from 'components/Header/Header';
import Spinner from 'components/Spinner/Spinner';

const UserDetails = (props) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPosts());
	}, []);

	if (props.loading) {
		return <Spinner />;
	}

	return (
		<div>
			<Header name={props.name} history={props.history} />
			{props.posts.map((post) =>
				post.userId === props.id ? (
					<Post
						key={post.id}
						id={post.id}
						title={post.title}
						body={post.body}
						userId={props.match.params.userId}
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
