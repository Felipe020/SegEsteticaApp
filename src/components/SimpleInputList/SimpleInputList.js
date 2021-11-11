import React from 'react';
import { ScrollView } from 'react-native';
import { SimplePickerInput } from '../SimplePickerInput';
import { SimpleTextInput } from '../SimpleTextInput';
import { styles } from './styles';

export const SimpleInputList = ({
  formState = {},
  setPropOfState = (propName, propValue) => { },
  attributes = [{
    name: "exampleAttribute",
    label: "Example",
    type: "picker",
    options: [{ label: "Example", value: "example" }],
  }]
}) => {
  return (
    <>
      {attributes.map((attribute, idx) => {
        if (attribute.type === 'picker') {
          return <SimplePickerInput
            key={`${idx}:${attribute.name}`}
            value={formState[attribute.name] || 0}
            label={attribute.label}
            changeFunction={(val) => setPropOfState(attribute.name, val)}
            style={styles.formItemStyle}
            options={attribute.options}
          />;
        }

        return <SimpleTextInput
          style={styles.formItemStyle}
          key={`${idx}:${attribute.name}`}
          changeFunction={(val) => setPropOfState(attribute.name, val)}
          label={attribute.label}
          isSecure={attribute.isSecure}
          data={formState[attribute.name] || ""}
        />;
      })}
    </>
  );
};
