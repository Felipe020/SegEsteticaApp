import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

export const SimpleButton = ({
  onPress = () => { },
  text = "not implemented",
}) => {
  return (
    <TouchableOpacity style={styles.btnStyle} onPress={onPress}>
      <Text style={styles.btnTextStyle}>{text}</Text>
    </TouchableOpacity>
  );
};
