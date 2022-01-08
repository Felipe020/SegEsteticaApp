import React from "react";
import { StyleProp, TextStyle } from 'react-native';

export const SimpleLabel: React.FC<{
	text: String,
	outsideStyle: StyleProp<TextStyle>,
	color: TextStyle.color,
}>;
