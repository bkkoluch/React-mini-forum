import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/postActions';
import styles from './Homepage.module.css';
import User from '../User/User';

class Homepage extends React.Component {
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

		return (
			<div className={styles.homepage__container}>
				{/* {posts.map((post) => (
					<li key={post.id}>{post.title}</li>
				))} */}
				<User />
				<User />
				<User />
				<User />
				<User />
				<User />
				<User />
				<User />
				<User />
				<User />
				<User />
				<User />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	posts: state.posts.posts,
	loading: state.posts.loading,
	error: state.posts.error,
});

export default connect(mapStateToProps)(Homepage);
