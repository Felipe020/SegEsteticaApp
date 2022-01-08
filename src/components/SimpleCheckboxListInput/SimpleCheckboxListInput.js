import React from 'react';
import { View } from 'react-native';

import { CheckBoxInput } from './styles';

export const SimpleCheckboxListInput = ({
	options = [{
		value: "any",
		label: "sample text",
		name: "sampleAttributeName"
	}],
	setOptions = (val) => { },
	enableMultiSelect = false,
}) => {
	const changeWithoutMultiSelect = (idx) => {
		setOptions(options.map((option, index) => {
			if (index === idx) {
				return { ...option, value: !option.value };
			}

			return { ...option, value: false };
		}));
	};

	const changeWithMultiSelect = (idx) => {
		setOptions(options.map((option, index) => {
			if (index === idx) {
				return { ...option, value: !option.value };
			}

			return option;
		}));
	};

	return (
		<View>
			{options.map((option, idx) => {
				return (
					<CheckBoxInput
						key={idx}
						marked={option.value}
						text={option.label}
						onPress={enableMultiSelect ?
							() => changeWithMultiSelect(idx) :
							() => changeWithoutMultiSelect(idx)}
					/>
				);
			})}
		</View>
	);
};
