import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export const SimpleLabel = ({
  text = "not implemented",
  outsideStyle = {},
  color = "white",
}) => {
  return (
    <Text style={outsideStyle}>
      <Text style={{ ...styles.labelTextStyle, color }}>
        {text}
      </Text>
    </Text>
  );
};
