import React from 'react';
import { TextInput, View } from 'react-native';
import { styles } from './styles';

export const SimpleTextInput = ({
  data = "not implemented",
  label = "not implemented",
  changeFunction = (val) => { },
  style = {},
  isSecure = false,
}) => {
  return (
    <View style={style}>
      <TextInput
        value={data}
        placeholder={label}
        style={styles.textInput}
        onChangeText={changeFunction}
        secureTextEntry={isSecure}
      />
    </View>
  );
};
