import React from 'react';
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import { styles } from './styles';

export const SimplePickerInput = ({
  label = "",
  value = "",
  changeFunction = (val) => { },
  options = [],
  style = {},
}) => {
  return (
    <View style={style}>
      <View style={styles.pickerInput}>
        <Picker
          onValueChange={changeFunction}
          selectedValue={value}>
          <Picker.Item label={label} value={0} isDisabled />
          {options.map((option => (
            <Picker.Item
              key={`${option.value}:${option.label}`}
              label={option.label}
              value={option.value}
            />
          )))}
        </Picker>
      </View>
    </View>
  );
};
