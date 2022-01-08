import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

import { SimpleButton } from '@seg-estetica/components';

import LogoImg from '@seg-estetica/assets/segestestica_logo_s_subtitulo_transparente.png';

export const PaginaInicial = (props) => {
  const { navigation } = props;

  const goTo = (screenName) => {
    navigation.navigate(screenName);
  };

  const entrar = () => goTo('Login');
  const cadastro = () => goTo('CadastrarUsuario');
  const cadastroEstabelecimento = () => goTo('CadastroEstabelecimento');

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={LogoImg} />

      <SimpleButton
        onPress={entrar}
        outsideStyle={styles.btnOutside}
        text="Entrar" />
      <SimpleButton
        onPress={cadastro}
        outsideStyle={styles.btnOutside}
        text="Cadastro de Usuário" />
      <SimpleButton
        onPress={cadastroEstabelecimento}
        outsideStyle={styles.btnOutside}
        text="Cadastro de Estabelecimento" />
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
  btnOutside: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  logo: {
    width: 250,
    height: 250
  }
});
