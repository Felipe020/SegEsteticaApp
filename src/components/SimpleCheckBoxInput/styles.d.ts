import React from "react";
import { TextStyle, ViewStyle } from "react-native";

export const MarkableBox: React.FC<{
	marked?: Bool
}>;

export const styles: {
	markedBoxContainer: ViewStyle,
	unmarkedBoxContainer: ViewStyle,
	checkBoxContainer: ViewStyle,
	checkBoxText: TextStyle,
};
