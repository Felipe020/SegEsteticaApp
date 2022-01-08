import { PickerOption } from "@seg-estetica/hooks";
import { StyleProp, ViewStyle } from "react-native";

export const SimplePickerInput: React.FC<{
	label: String,
	value: String,
	changeFunction: (val: any) => void,
	options: PickerOption[],
	style: StyleProp<ViewStyle>,
}>;
