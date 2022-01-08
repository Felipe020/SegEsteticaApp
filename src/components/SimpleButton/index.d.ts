import React from "react"
import { StyleProp } from "react-native"

export const SimpleButton: React.FC<{
	onPress: Function,
	outsideStyle: StyleProp<Object>,
	text: String,
}>;
