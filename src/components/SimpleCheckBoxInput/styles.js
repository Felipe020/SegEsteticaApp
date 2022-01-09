import React from 'react';
import { StyleSheet, View } from 'react-native';

export const MarkableBox = ({ marked = false }) => {
	return (
		<View style={marked ? styles.markedBoxContainer : styles.unmarkedBoxContainer} />
	);
};

export const styles = StyleSheet.create({
	markedBoxContainer: {
		height: 25,
		width: 25,
		borderColor: 'white',
		backgroundColor: 'white',
		borderWidth: 3,
	},
	unmarkedBoxContainer: {
		height: 25,
		width: 25,
		borderColor: 'white',
		backgroundColor: 'transparent',
		borderWidth: 3,
	},
	checkBoxContainer: {
		flexDirection: 'row',
		width: '100%',
		alignItems: 'center',
		height: 55,
	},
	checkBoxText: {
		color: 'white',
		marginLeft: 5,
	}
});
