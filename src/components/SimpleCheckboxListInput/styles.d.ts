import React from "react";

export const MarkableBox: React.FC<{
	marked?: Bool
}>;

export const CheckBoxInput: React.FC<{
	text: String,
	marked: Bool,
	onPress: Function,
}>
