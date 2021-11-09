import React, { useEffect } from 'react';
import { Image, Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import { cadastro } from './conexao';
import { SimpleForm } from 'components';
import { useFormState } from 'hooks';

export default function TelaCadastro({ navigation }) {
  const [formData, setPropOfForm] = useFormState({});

  useEffect(() => { cadastro(); }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.icone}
        source={require('assets/CorteDeCabelo.png')}
      />

      <SimpleForm
        formState={formData}
        setPropOfState={setPropOfForm}
        attributes={[
          { name: 'establishmentName', label: 'Nome do Estabelecimento' },
          { name: 'establishmentEmail', label: 'E-mail do Estabelecimento' },
        ]}
      />

      <TouchableOpacity style={styles.btnCadastro} onPress={() => cadastro()}>
        <Text style={{ color: 'white', textAlign: 'center' }}>
          Cadastrar Estabelecimento
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2E2E',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
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