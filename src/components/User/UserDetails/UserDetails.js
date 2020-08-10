import React from 'react';

import { connect } from 'react-redux';

import Post from 'components/Post/Post';
import Header from 'components/Header/Header';

const UserDetails = (props) => {
	console.log(props);
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
