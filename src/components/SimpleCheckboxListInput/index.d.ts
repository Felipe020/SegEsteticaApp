import { CheckBoxOption } from "@seg-estetica/data";
import React from "react";

export const SimpleCheckboxListInput: React.FC<{
	options: CheckBoxOption[],
	setOptions: Function,
	enableMultiSelect: Bool,
}>;
