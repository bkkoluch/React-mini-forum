import React from 'react';
import styles from './Header.module.css';

const Header = (props) => {
	const goBack = () => {
		props.history.goBack();
	};

	return (
		<div className={styles.header__container}>
			<button
				className={styles.header__backButton}
				onClick={goBack}
			></button>
			<p className={styles.header__name}>{props.name}</p>
			<button
				className={
					!props.show ? styles.header__addButton : styles.hidden
				}
			></button>
			<button
				className={
					props.show ? styles.header__deleteButton : styles.hidden
				}
			></button>
		</div>
	);
};

export default Header;
