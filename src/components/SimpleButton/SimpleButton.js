import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { styles } from './styles';

export const SimpleButton = ({
  onPress = () => { },
  outsideStyle = {},
  text = "not implemented",
}) => {
  return (
    <View style={outsideStyle}>
      <TouchableOpacity style={styles.btnStyle} onPress={onPress}>
        <Text style={styles.btnTextStyle}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};
