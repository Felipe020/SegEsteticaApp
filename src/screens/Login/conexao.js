import { Alert } from "react-native";
import { API_URL } from "@seg-estetica/config/consts";

export const login = async (
	data,
	saveData = (credentials) => { },
	goBack = () => { }
) => {
	let response, jsonResponse;

	try {
		response = await fetch(API_URL + "/users/login", {
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json",
				"messages-language": "pt-BR",
			},
		});

		jsonResponse = await response.json();

		saveData(jsonResponse);

		Alert.alert("Logado!", '', [
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
