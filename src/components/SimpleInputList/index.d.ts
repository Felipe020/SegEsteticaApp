import React from "react";

import { PickerOption } from "@seg-estetica/data";

export type FieldData = {
	name: String,
	label: String,
	type?: "picker",
	options?: Array<PickerOption>
};

export const SimpleInputList: React.FC<{
	formState: Object,
	setPropOfState: Function,
	fields: FieldData[]
}>;
