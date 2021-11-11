import { useEffect, useState } from 'react';

export const usePickerData = (data, { valueAlias, labelAlias }) => {
  const [formattedToPicker, setFormattedToPicker] = useState([]);

  useEffect(() => {
    if (!Array.isArray(data)) return;

    const newFormattedData = data.reduce((formatted, actual) => {
      return [...formatted, { value: actual[valueAlias], label: actual[labelAlias] }];
    }, []);

    setFormattedToPicker(newFormattedData);
  }, [data]);

  return formattedToPicker;
};
