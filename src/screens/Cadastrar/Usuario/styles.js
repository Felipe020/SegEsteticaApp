import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';

import { SimpleButton } from '@components';

export const Container = ({ children }) => {
	return (
		<View style={styles.container}>
			{children}
		</View>
	);
};

export const Scroller = ({ children }) => {
	return (
		<ScrollView
			style={styles.scroller}
			contentContainerStyle={styles.scrollerContent}>
			{children}
		</ScrollView>
	);
};

export const ScreenIcon = (props) => {
	return <Image {...props} style={styles.screenIcon} />;
};

export const RegisterButton = (props) => {
	return (
		<SimpleButton
			{...props}
			outsideStyle={styles.registerBtn}
		/>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		backgroundColor: '#2E2E2E',
	},
	scroller: {
		width: '100%',
	},
	scrollerContent: {
		width: '85%',
		alignSelf: 'center',
		alignItems: 'stretch',
		justifyContent: 'flex-start',
		paddingBottom: 30,
	},
	screenIcon: {
		width: 150,
		height: 150,
		margin: 40,
		marginTop: 100,
		alignSelf: 'center',
	},
	registerBtn: {
		marginTop: 25,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
	},
});
