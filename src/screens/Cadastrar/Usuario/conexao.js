import { Alert } from "react-native";
import { API_URL } from "@seg-estetica/config/consts";

export const register = async (data, goBack = () => { }) => {
	let response, jsonResponse;

	try {
		respostaDoBairro = await fetch(API_URL + "/neighborhoods", {
			method: "POST",
			body: JSON.stringify({
				neighborhoodName: data.userNeighborhoodName,
				neighborhoodCityId: data.userCityId
			}),
			headers: {
				"Content-Type": "application/json",
				"messages-language": "pt-BR",
			},
		});

		jsonResponse = await respostaDoBairro.json();

		if (Array.isArray(jsonResponse.errors)) {
			respostaDoBairro = await fetch(API_URL + "/neighborhoods", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					"messages-language": "pt-BR",
				},
			});

			jsonResponse = await respostaDoBairro.json();

			for (let i = 0; i < jsonResponse.length; i++) {
				if (jsonResponse[i].name.normalize('NFD') === data.userNeighborhoodName.normalize('NFD')) {
					jsonResponse = jsonResponse[i];
					break;
				}
			}
		};

		userData = {
			...data,
			userNeighborhoodId: jsonResponse.id
		};

		response = await fetch(API_URL + "/users", {
			method: "POST",
			body: JSON.stringify(userData),
			headers: {
				"Content-Type": "application/json",
				"messages-language": "pt-BR",
			},
		});

		jsonResponse = await response.json();


		if (response.status >= 400) {
			throw new Error();
		}


		Alert.alert("Cadastro efetuado com sucesso!", JSON.stringify(jsonResponse), [
			{ text: "Ok", style: "cancel" },
		]);

		goBack();
	} catch (e) {
		if (jsonResponse) {
			Alert.alert("Erro no cadastro!", jsonResponse.errors.join("\n"), [
				{ text: "Ok", style: "cancel" },
			]);
		}
	}
};
