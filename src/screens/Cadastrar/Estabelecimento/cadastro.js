import React, { useEffect, useState } from 'react';
import { Image, View, StyleSheet, ScrollView } from 'react-native';
import { cadastro } from './conexao';
import { SimpleInputList, SimpleButton } from 'components';
import { useFetch, useFormState, usePickerData } from 'hooks';
import { styles } from './styles';

export default function TelaCadastro({ navigation }) {
  const [formData, setPropOfForm] = useFormState({});

  const states = useFetch('states');
  const stateOptions = usePickerData(states, { labelAlias: 'name', valueAlias: 'id' });

  const cities = useFetch('cities?cityStateId=' + formData?.establishmentStateId || 0);
  const cityOptions = usePickerData(cities, { labelAlias: 'name', valueAlias: 'id' });

  const neighborhoods = useFetch('neighborhoods?neighborhoodCityId=' + formData?.establishmentCityId || 0);
  const neighborhoodOptions = usePickerData(neighborhoods, { labelAlias: 'name', valueAlias: 'id' });

  const streets = useFetch('streets?streetNeighborhoodId=' + formData?.establishmentNeighborhoodId || 0);
  const streetOptions = usePickerData(streets, { labelAlias: 'name', valueAlias: 'id' });

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
            {
              name: 'establishmentStateId', label: 'Estado do Estabelecimento',
              type: 'picker', options: stateOptions
            },
            {
              name: 'establishmentCityId', label: 'Cidade do Estabelecimento',
              type: 'picker', options: cityOptions
            },
            {
              name: 'establishmentNeighborhoodId', label: 'Bairro do Estabelecimento',
              type: 'picker', options: neighborhoodOptions
            },
            {
              name: 'establishmentStreetId', label: 'Rua do Estabelecimento',
              type: 'picker', options: streetOptions
            },
            { name: 'establishmentAddressNumber', label: 'Número do Endereço' },
            { name: 'establishmentPassword', label: 'Senha do Estabelecimento', isSecure: true },
          ]}
        />

        <View style={styles.registerBtn}>
          <SimpleButton onPress={() => cadastro()} text="Cadastrar Estabelecimento" />
        </View>
      </ScrollView>
    </View>
  );
}
