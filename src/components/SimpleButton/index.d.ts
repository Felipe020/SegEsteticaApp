import React from "react"
import { StyleProp } from "react-native"

export type SimpleButton = React.FC<{
	onPress: Function,
	outsideStyle: StyleProp<Object>,
	text: String,
}>;
