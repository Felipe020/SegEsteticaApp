import { useEffect, useState } from 'react';

const defaultFormValidator = (formState, validator) => (canOrNot, attribute) => {
  if (!Array.isArray(canOrNot)) {
    return [];
  }

  const defaultErrorMessage = 'Você esqueceu de preencher algum dado!';

  if (formState.length === 0 && canOrNot.find((error) => error === defaultErrorMessage) === undefined) {
    return [...canOrNot, defaultErrorMessage];
  }

  const outsideErrors = validator(formState)(canOrNot, attribute);

  const outsideErrorsIsAnArray = Array.isArray(outsideErrors) && outsideErrors.length > 0;

  if (outsideErrorsIsAnArray) {
    const notRepeatedErrors = outsideErrors.reduce((previous, current) => {
      if (canOrNot.find((error) => error === current) === undefined) {
        return [...previous, current];
      }

      return previous;
    }, []);

    return [...canOrNot, ...notRepeatedErrors];
  }

  return canOrNot;
};

export const useFormState = (initialData = {}, validator = () => () => { }) => {
  const [errors, setErrors] = useState(false);
  const [formState, setFormState] = useState(initialData);

  const setPropOfState = (propName, propValue) => {
    const newData = { ...formState };

    newData[propName] = propValue;

    setFormState(newData);
  };

  useEffect(() => {
    const formStateHasData = Object.values(formState).length > 0;

    const emptyFormMessage = 'O formulário está vazio!';

    const newErrors = formStateHasData ? Object.values(formState).reduce(defaultFormValidator(formState, validator), []) : [emptyFormMessage];

    setErrors(newErrors);
  }, [formState]);

  return [formState, setPropOfState, errors, setFormState];
};
