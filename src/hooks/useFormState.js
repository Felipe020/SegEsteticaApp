import { useEffect, useState } from "react";

const defaultCanSendAnalyzer = (canOrNot, attribute) => {
  if (canOrNot) {
    return !!attribute;
  }

  return false;
};

export const useFormState = (initialData = {}, canSendAnalyzer = defaultCanSendAnalyzer) => {
  const [canSend, setCanSend] = useState(false);
  const [formState, setFormState] = useState(initialData);

  const setPropOfState = (propName, propValue) => {
    const newData = { ...formState };

    newData[propName] = propValue;

    setFormState(newData);
  };

  useEffect(() => {
    const formStateHasData = Object.values(formState).length > 0;

    const newCanSend = formStateHasData ? Object.values(formState).reduce(canSendAnalyzer, true) : false;

    setCanSend(newCanSend);
  }, [formState]);

  return [formState, setPropOfState, canSend];
};
