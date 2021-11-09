import React from 'react';
import { ScrollView } from 'react-native';
import { SimpleTextInput } from '../SimpleTextInput';
import { styles } from './styles';

export const SimpleForm = ({
  formState = {},
  setPropOfState = (propName, propValue) => { },
  attributes = [{ name: "exampleAttribute", label: "Example" }]
}) => {
  return (
    <ScrollView
      style={styles.formStyle}
      contentContainerStyle={styles.formContentStyle}>
      {attributes.map((attribute, idx) => (
        <SimpleTextInput
          style={idx !== (attributes.length - 1) ? styles.formItemStyle : {}}
          key={`${idx}:${attribute.name}`}
          changeFunction={(val) => setPropOfState(attribute.name, val)}
          label={attribute.label}
          data={formState[attribute.name] || ""}
        />
      ))}
    </ScrollView>
  );
};
