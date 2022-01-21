import React, { useState } from "react";
import {
  Image,
  Text,
  TextInput,
  View,
  StyleSheet,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { SimpleButton, SimpleInputList, SimpleTextInput } from "@seg-estetica/components";
import { useSegEsteticaContext } from "@seg-estetica/contexts";

import { login } from "./conexao";
import { useFormState } from "@seg-estetica/hooks";
import { Container, RegisterButton, ScreenIcon } from "./styles";

export const Login = ({ navigation }) => {
  const { setTokenDoUsuario, setUuidDoUsuario } = useSegEsteticaContext();
  const [
    loginFormState,
    setPropOfLoginFormState,
  ] = useFormState("");

  const voltar = () => {
    navigation.navigate('Principal');
  };

  const salvarCredenciais = (credenciais) => {
    setTokenDoUsuario(credenciais.token);
    setUuidDoUsuario(credenciais.uuid);
  };

  const logar = () => {
    login(loginFormState, salvarCredenciais, voltar());
  };

  return (
    <View style={styles.container}>
      <Container>
        <ScreenIcon
          style={styles.icone}
          source={require("@seg-estetica/assets/UserIcon.png")}
        />

        <SimpleInputList
          formState={loginFormState}
          setPropOfState={setPropOfLoginFormState}
          fields={[
            { name: "email", label: "E-mail" },
            { name: "password", label: "Senha" },
          ]}
        />

        <RegisterButton text="Fazer login" onPress={logar} />
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2E2E2E",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  textInput: {
    width: "100%",
    height: 40,
    backgroundColor: "white",
    borderRadius: 20,
    paddingLeft: 10,
    marginBottom: 10,
  },
  btnCadastro: {
    width: "50%",
    height: 40,
    backgroundColor: "#343434",
    borderRadius: 20,
    justifyContent: "center",
  },
  icone: {
    width: 150,
    height: 150,
    margin: 40,
  },
});
