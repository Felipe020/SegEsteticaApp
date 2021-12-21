import { Alert } from 'react-native';
import { API_URL } from 'config/consts';

export const register = async (data) => {
    let response, jsonResponse;

    try {
        response = await fetch(API_URL + '/establishments', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                'messages-language': 'pt-BR',
            }
        });

        jsonResponse = await response.json();

        Alert.alert("Cadastro efetuado com sucesso!", jsonResponse, [
            { text: "Ok", style: "cancel" },
        ]);
    } catch (e) {
        if (jsonResponse) {
            Alert.alert("Erro no cadastro!", jsonResponse.errors.join('\n'), [
                { text: "Ok", style: "cancel" },
            ]);
        }
    }
};