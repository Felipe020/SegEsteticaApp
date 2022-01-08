import React from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, View } from "react-native";

export const MarkableBox = ({ marked = false }) => {
	if (marked) {
		return (
			<View style={styles.markedBoxContainer} />
		);
	}

	return (
		<View style={styles.unmarkedBoxContainer} />
	);
};

export const CheckBoxInput = ({
	text = "example text",
	marked = false,
	onPress = () => { },
}) => {
	return (
		<TouchableNativeFeedback onPress={onPress}>
			<View style={styles.checkBoxContainer}>
				<MarkableBox marked={marked} />
				<Text style={styles.checkBoxText} >{text}</Text>
			</View>
		</TouchableNativeFeedback>
	);
};

const styles = StyleSheet.create({
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

