import React from 'react';
import { SimpleTextInput } from '..';

export const SimpleForm = ({
  formState = {},
  setPropOfState = (propName, propValue) => { },
  attributes = [{ name: "exampleAttribute", label: "Example" }]
}) => {
  return (
    <>
      {attributes.map((attribute, idx) => (
        <SimpleTextInput
          key={`${idx}:${attribute.name}`}
          changeFunction={(val) => setPropOfState(attribute.name, val)}
          label={attribute.label}
          data={formState[attribute.name] || ""}
        />
      ))}
    </>
  );
};
