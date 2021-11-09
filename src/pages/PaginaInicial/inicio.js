import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { SimpleButton } from 'components';
import LogoImg from 'assets/segestestica_logo_s_subtitulo_transparente.png';


export default function TelaInicial(props) {
  const { navigation } = props;

  const entrar = () => navigation.navigate('Logar');
  const cadastro = () => navigation.navigate('CadastrarUsuario');
  const cadastroEstabelecimento = () => navigation.navigate('CadastroEstabelecimento');

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={LogoImg} />

      <SimpleButton onPress={entrar} text="Entrar" />
      <SimpleButton onPress={cadastro} text="Cadastro" />
      <SimpleButton onPress={cadastroEstabelecimento} text="Cadastro de Estabelecimento" />
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
  logo: {
    width: 250,
    height: 250
  }
});