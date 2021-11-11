import React from 'react';
import { SimpleLabel } from '../SimpleLabel';
import { SimplePickerInput } from '../SimplePickerInput';
import { SimpleTextInput } from '../SimpleTextInput';
import { styles } from './styles';

export const SimpleInputList = ({
  formState = {},
  setPropOfState = (propName, propValue) => { },
  fields = [{
    name: "examplefield",
    label: "Example",
    type: "picker",
    options: [{ label: "Example", value: "example" }],
  }]
}) => {
  const getInputByfield = (field, idx) => {
    const key = `${idx}:${field.name}`;

    switch (field.type) {
      case 'picker':
        return <SimplePickerInput
          key={key}
          value={formState[field.name] || 0}
          label={field.label}
          changeFunction={(val) => setPropOfState(field.name, val)}
          style={styles.formItemStyle}
          options={field.options}
        />;
      default:
        return <SimpleTextInput
          style={styles.formItemStyle}
          key={key}
          changeFunction={(val) => setPropOfState(field.name, val)}
          label={field.label}
          isSecure={field.isSecure}
          data={formState[field.name] || ""}
        />;
    };
  };

  return (
    <>
      {fields.map((field, idx) => {
        return (
          <>
            <SimpleLabel text={field.label + ":"} outsideStyle={styles.formItemLabelStyle} />
            {getInputByfield(field, idx)}
          </>
        );
      })}
    </>
  );
};
