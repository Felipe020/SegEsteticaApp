import { VIACEP_API_URL } from "@seg-estetica/config/consts";

export const consultarCep = async (cep, sinal) => {
	if (cep === undefined) {
		return undefined;
	}

	const cepRegex = /^(\d{2})\.?(\d{3})-?(\d{3})$/;
	const cepLimpo = cep.replace(cepRegex, '$1$2$3');

	if (cepLimpo.length !== 8) {
		return undefined;
	}

	return await (await fetch(VIACEP_API_URL + '/' + cepLimpo + '/json', {
		method: 'get',
		signal: sinal
	})).json();
};
