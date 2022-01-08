import { useEffect, useState } from 'react';
import { API_URL, API_BASE_URL } from '@seg-estetica/config/consts';

const provideDefaultValuesToOptions = (options) => {
  const defaultOptions = { useAPIBase: false, toJSON: true, maxAttempts: 3, extern: false, headers: {} };

  return { ...defaultOptions, ...options };
};

export const useFetch = (url, options) => {
  options = provideDefaultValuesToOptions(options);

  const { useAPIBase, toJSON, maxAttempts, extern, headers } = options;

  const [response, setResponse] = useState('');
  const [attempts, setAttempts] = useState(0);
  const attemptsLimit = maxAttempts;

  useEffect(() => {
    setAttempts(0);
  }, [url]);

  useEffect(async () => {
    if (attempts >= attemptsLimit) return;

    let responseToBeSet = response;

    try {
      const fetchedResponse = await fetch(extern ? url : `${useAPIBase ? API_BASE_URL : API_URL}/${url}`, {
        headers: { ...(extern ? {} : { 'messages-language': 'pt-BR' }), ...headers },
      });

      if (!toJSON) responseToBeSet = fetchedResponse;
      else responseToBeSet = await fetchedResponse.json();

      setAttempts(attemptsLimit);
    } catch (e) {
      console.error(e);
      setAttempts(attempts + 1);
    } finally {
      setResponse(responseToBeSet);
    }
  }, [url, extern, response, attempts, attemptsLimit]);

  return response;
};
