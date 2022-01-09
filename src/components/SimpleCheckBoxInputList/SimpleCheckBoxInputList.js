import React from 'react';
import { View } from 'react-native';

import { SimpleCheckBoxInput } from '../SimpleCheckBoxInput';

export const SimpleCheckBoxInputList = ({
	options = [{
		value: "any",
		label: "sample text",
		name: "sampleAttributeName"
	}],
	setOptions = (val) => { },
	enableMultiSelect = false,
}) => {
	const mark = (idx, canMultiSelect) => {
		setOptions(options.map((option, index) => {
			if (index === idx) {
				return { ...option, value: !option.value };
			}

			return canMultiSelect ? option : ({ ...option, value: false });
		}));
	};

	return (
		<View>
			{options.map((option, idx) => {
				return (
					<SimpleCheckBoxInput
						key={idx}
						marked={option.value}
						text={option.label}
						onPress={() => mark(idx, enableMultiSelect)}
					/>
				);
			})}
		</View>
	);
};
