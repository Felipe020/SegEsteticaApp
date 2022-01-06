import React, { useState } from 'react';
import { Image, Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFormState } from 'hooks';
import { SimpleInputList } from 'components';


export const CadastroUsuario = ({ navigation }) => {
  const [loginFormState, setPropOfLoginFormState] = useFormState();

  const cadastro = () => {

  };


  return (

    <View style={styles.container}>
      <StatusBar hidden />

      <Image style={styles.icone}
        source={require('assets/CorteDeCabelo.png')}
      />

      <SimpleInputList
        formState={loginFormState}
        setPropOfState={setPropOfLoginFormState}
        fields={[
          { name: "userName", label: "Nome" }

        ]}

      />
      <TextInput placeholder="Nome" style={styles.textInput} onChangeText={text => setNome(text)} />
      <TextInput placeholder="Email" style={styles.textInput} onChangeText={text => setEmail(text)} />
      <TextInput secureTextEntry={true} placeholder="Senha" style={styles.textInput} onChangeText={text => setSenha(text)} />
      <TextInput placeholder="CEP" style={styles.textInput} onChangeText={text => setCEP(text)} />

      <TouchableOpacity style={styles.btnCadastro} onPress={() => cadastro()}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Cadastrar</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2E2E',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  textInput: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingLeft: 10,
    marginBottom: 10
  },
  btnCadastro: {
    width: '50%',
    height: 40,
    backgroundColor: '#343434',
    borderRadius: 20,
    justifyContent: 'center'
  },
  icone: {
    width: 150,
    height: 150,
    margin: 40,
  }
});