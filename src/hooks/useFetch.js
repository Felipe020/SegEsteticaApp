import { useEffect, useState } from 'react';
import { API_URL } from 'config/consts';

export const useFetch = (url, toJSON = true, maxAttempts = 3, extern = false) => {
  const [response, setResponse] = useState('');
  const [attempts, setAttempts] = useState(0);
  const attemptsLimit = maxAttempts;

  useEffect(async () => {
    if (attempts >= attemptsLimit) return;

    let responseToBeSet = response;

    try {
      const fetchedResponse = await fetch(extern ? url : `${API_URL}/${url}`);

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
