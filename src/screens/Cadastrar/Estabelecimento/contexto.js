import React, { createContext, useContext, useEffect, useState } from 'react';
import { useCookies } from 'hooks';

const EstablishmentRegisterContext = createContext();

export const EstablishmentRegisterContextProvider = ({ children }) => {
	const [cookies, setIsAnInvalidCookie] = useCookies();

	const values = {
		cookies,
		setIsAnInvalidCookie,
	};

	return (
		<EstablishmentRegisterContext.Provider value={values}>
			{children}
		</EstablishmentRegisterContext.Provider>
	);
};

export const useEstablishmentRegisterContext = () => {
	const {
		cookies,
		setIsAnInvalidCookie,
	} = useContext(EstablishmentRegisterContext);

	return {
		cookies,
		setIsAnInvalidCookie,
	};
};

