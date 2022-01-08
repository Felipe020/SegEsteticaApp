import React from "react";
import { StyleProp, ViewStyle } from "react-native";

export const SimpleTextInput: React.FC<{
	data: String,
	label: String,
	changeFunction: (val: any) => void,
	style: StyleProp<ViewStyle>,
	isSecure: Bool,
}>;
