import React from "react"
import { StyleProp } from "react-native"

export type SimpleButtonProps = {
	onPress: Function,
	outsideStyle: StyleProp<Object>,
	text: String,
};

export type SimpleButton = React.FC<SimpleButtonProps>;
