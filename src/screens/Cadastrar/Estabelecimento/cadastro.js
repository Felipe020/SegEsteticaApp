import React, { useEffect, useState } from 'react';
import { Image, View, ScrollView, Alert } from 'react-native';

import { SimpleInputList, SimpleButton } from '@seg-estetica/components';
import { useFetch, useFormState, usePickerData } from '@seg-estetica/hooks';

import { styles } from './styles';

import { register } from './conexao';
import { consultarCep } from './viacep';

export const CadastroEstabelecimento = ({ navigation }) => {
  const [aguardandoPromessa, setAguardandoPromessa] = useState(false);
  const [formData, setPropOfForm, errors, setFormState] = useFormState({});

  const states = useFetch('states');
  const stateOptions = usePickerData(states, { labelAlias: 'name', valueAlias: 'id' });

  const cities = useFetch('cities?cityStateId=' + formData?.establishmentStateId || 0);
  const cityOptions = usePickerData(cities, { labelAlias: 'name', valueAlias: 'id' });

  const emptyFieldsAlert = () => {
    Alert.alert("Erro de validação!", errors.join('\n'), [{
      style: 'cancel',
      text: 'Ok!',
    }]);
  };

  useEffect(async () => {
    if (!aguardandoPromessa && formData.postCode) {
      setAguardandoPromessa(true);

      const dados = await consultarCep(formData.postCode);

      if (dados !== undefined) {
        setFormState({
          ...formData,
          neighborhoodName: dados.bairro,
          streetName: dados.logradouro,
        });
      }

      setAguardandoPromessa(false);
    }
  }, [formData.postCode]);

  return (
    <View style={styles.container}>
      <ScrollView styles={styles.form} contentContainerStyle={styles.formContainer}>
        <Image style={styles.icon}
          source={require('@seg-estetica/assets/CorteDeCabelo.png')}
        />

        <SimpleInputList
          formState={formData}
          setPropOfState={setPropOfForm}
          fields={[
            { name: 'establishmentName', label: 'Nome' },
            { name: 'establishmentEmail', label: 'E-mail' },
            {
              name: 'establishmentStateId', label: 'Estado',
              type: 'picker', options: stateOptions
            },
            {
              name: 'establishmentCityId', label: 'Cidade',
              type: 'picker', options: cityOptions
            },
            {
              name: 'postCode', label: 'CEP',
            },
            {
              name: 'neighborhoodName', label: 'Bairro',
            },
            {
              name: 'streetName', label: 'Rua',
            },
            { name: 'establishmentAddressNumber', label: 'Número do Endereço' },
            { name: 'establishmentPassword', label: 'Senha', isSecure: true },
          ]}
        />

        <View style={styles.registerBtn}>
          <SimpleButton onPress={() => !!errors ? register(formData) : emptyFieldsAlert()} text="Cadastrar Estabelecimento" />
        </View>
      </ScrollView>
    </View>
  );
};
