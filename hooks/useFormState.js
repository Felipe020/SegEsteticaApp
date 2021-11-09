import { useState } from "react";

export const useFormState = (initialData = {}) => {
  const [formState, setFormState] = useState(initialData);

  const setPropOfState = (propName, propValue) => {
    const newData = { ...formState };

    newData[propName] = propValue;

    setFormState(newData);
  };

  return [formState, setPropOfState];
};
