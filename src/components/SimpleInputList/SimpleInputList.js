import React from 'react';
import { ScrollView } from 'react-native';
import { SimpleTextInput } from '../SimpleTextInput';
import { styles } from './styles';

export const SimpleInputList = ({
  formState = {},
  setPropOfState = (propName, propValue) => { },
  attributes = [{ name: "exampleAttribute", label: "Example" }]
}) => {
  return (
    <>
      {attributes.map((attribute, idx) => (
        <SimpleTextInput
          style={styles.formItemStyle}
          key={`${idx}:${attribute.name}`}
          changeFunction={(val) => setPropOfState(attribute.name, val)}
          label={attribute.label}
          data={formState[attribute.name] || ""}
        />
      ))}
    </>
  );
};
