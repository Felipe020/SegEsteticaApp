import { Alert } from 'react-native';
import { API_URL } from 'config/consts';

export const cadastro = async (dados) => {
    let resposta, respostaJSON;

    try {
        resposta = await fetch(API_URL + '/establishments', {
            method: 'POST',
            body: JSON.stringify(dados),
            headers: {
                "Content-Type": "application/json",
                'messages-language': 'pt-BR',
            }
        });

        respostaJSON = await resposta.json();

        Alert.alert("Cadastro efetuado com sucesso!", respostaJSON, [
            { text: "Ok", style: "cancel" },
        ]);
    } catch (e) {
        if (!respostaJSON) respostaJSON = await resposta.json();

        Alert.alert("Erro no cadastro!", respostaJSON.errors.join('\n'), [
            { text: "Ok", style: "cancel" },
        ]);

        console.info(e);
    }
};