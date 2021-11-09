import React from 'react';
import { TextInput } from 'react-native';
import { styles } from './styles';

export const SimpleTextInput = ({
  key = undefined,
  data = "not implemented",
  label = "not implemented",
  changeFunction = () => { },
}) => {
  return (
    <TextInput
      key={key}
      value={data}
      placeholder={label}
      style={styles.textInput}
      onChangeText={(val) => changeFunction(val)}
    />
  );
};
