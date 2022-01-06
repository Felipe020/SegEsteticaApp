import React from "react";

export type PickerOption = {
	label: String,
	value: String
};

export type FieldData = {
	name: String,
	label: String,
	type?: "picker",
	options?: Array<PickerOption>
};

export type FieldDataArray = Array<FieldData>;

export type SimpleInputListProps = {
	formState: Object,
	setPropOfState: Function,
	fields: FieldDataArray
};

export const SimpleInputList: React.FC<SimpleInputListProps>;
