import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from './../../../actions/postActions';
import Post from '../../Post/Post';
import styles from './UserDetails.module.css';

class UserDetails extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchPosts());
	}

	render() {
		const { error, loading, posts } = this.props;
		console.log(this.props);

		if (error) {
			return <div>Error! {error.message}</div>;
		}

		if (loading) {
			return <div>Loading...</div>;
		}

		return (
			<div className={styles.userDetails__container}>
				<p
					style={{
						marginBottom: '80px',
						marginTop: '48px',
						textAlign: 'center',
					}}
				>
					Leanne Graham
				</p>
				{posts.map((post) => (
					<Post key={post.id} title={post.title} />
				))}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	posts: state.posts.posts,
	loading: state.posts.loading,
	error: state.posts.error,
});

export default connect(mapStateToProps)(UserDetails);
