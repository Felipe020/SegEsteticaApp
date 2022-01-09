import React from 'react';
import { Text, TouchableNativeFeedback, View } from "react-native";

import { MarkableBox, styles } from './styles';

export const SimpleCheckBoxInput = ({
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


