import { Alert } from "react-native";
import { API_URL } from "@seg-estetica/config/consts";

export const register = async (data) => {
  let response, jsonResponse;

  try {
    respostaDoBairro = await fetch(API_URL + "/neighborhoods", {
      method: "POST",
      body: JSON.stringify({ neighborhoodName: data.neighborhoodName, neighborhoodCityId: data.establishmentCityId }),
      headers: {
        "Content-Type": "application/json",
        "messages-language": "pt-BR",
      },
    });

    respostaDoBairroObjeto = await respostaDoBairro.json();

    respostaDaRua = await fetch(API_URL + "/streets", {
      method: "POST",
      body: JSON.stringify({ streetName: data.streetName, streetPostCode: data.postCode, streetNeighborhoodId: respostaDoBairroObjeto.id }),
      headers: {
        "Content-Type": "application/json",
        "messages-language": "pt-BR",
      },
    });

    respostaDaRuaObjeto = await respostaDaRua.json();

    response = await fetch(API_URL + "/establishments", {
      method: "POST",
      body: JSON.stringify({ ...data, establishmentStreetId: respostaDaRuaObjeto.id }),
      headers: {
        "Content-Type": "application/json",
        "messages-language": "pt-BR",
      },
    });

    jsonResponse = await response.json();

    Alert.alert("Cadastro efetuado com sucesso!", jsonResponse, [
      { text: "Ok", style: "cancel" },
    ]);
  } catch (e) {
    if (jsonResponse) {
      Alert.alert("Erro no cadastro!", jsonResponse.errors.join("\n"), [
        { text: "Ok", style: "cancel" },
      ]);
    }
  }
};
