import React from 'react';
import { Image, View, StyleSheet, ScrollView } from 'react-native';
import { cadastro } from './conexao';
import { SimpleInputList, SimpleButton } from 'components';
import { useFormState } from 'hooks';

export default function TelaCadastro({ navigation }) {
  const [formData, setPropOfForm] = useFormState({});

  return (
    <View style={styles.container}>
      <ScrollView styles={styles.form} contentContainerStyle={styles.formContainer}>
        <Image style={styles.icon}
          source={require('assets/CorteDeCabelo.png')}
        />

        <SimpleInputList
          formState={formData}
          setPropOfState={setPropOfForm}
          attributes={[
            { name: 'establishmentName', label: 'Nome do Estabelecimento' },
            { name: 'establishmentEmail', label: 'E-mail do Estabelecimento' },
          ]}
        />

        <View style={styles.registerBtn}>
          <SimpleButton onPress={() => cadastro()} text="Cadastrar Estabelecimento" />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#2E2E2E',
    padding: 20,
  },
  form: {
  },
  formContainer: {
    width: '90%',
    alignSelf: 'center',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  registerBtn: {
    marginTop: 25,
    alignSelf: 'center',
  },
  icon: {
    width: 150,
    height: 150,
    margin: 40,
    marginTop: 100,
    alignSelf: 'center',
  }
});