import React from 'react';
import { Image, View, ScrollView, Alert } from 'react-native';
import { register } from './conexao';
import { SimpleInputList, SimpleButton } from 'components';
import { useFetch, useFormState, usePickerData } from 'hooks';
import { styles } from './styles';

export function CadastroEstabelecimento({ navigation }) {
  const [formData, setPropOfForm, canSend] = useFormState({});

  const states = useFetch('states');
  const stateOptions = usePickerData(states, { labelAlias: 'name', valueAlias: 'id' });

  const cities = useFetch('cities?cityStateId=' + formData?.establishmentStateId || 0);
  const cityOptions = usePickerData(cities, { labelAlias: 'name', valueAlias: 'id' });

  const neighborhoods = useFetch('neighborhoods?neighborhoodCityId=' + formData?.establishmentCityId || 0);
  const neighborhoodOptions = usePickerData(neighborhoods, { labelAlias: 'name', valueAlias: 'id' });

  const streets = useFetch('streets?streetNeighborhoodId=' + formData?.establishmentNeighborhoodId || 0);
  const streetOptions = usePickerData(streets, { labelAlias: 'name', valueAlias: 'id' });

  const emptyFieldsAlert = () => {
    Alert.alert("Preencha todos os campos!", "Há campos em branco. Preencha todos para se registrar.", [{
      style: 'cancel',
      text: 'Ok!',
    }]);
  };

  return (
    <View style={styles.container}>
      <ScrollView styles={styles.form} contentContainerStyle={styles.formContainer}>
        <Image style={styles.icon}
          source={require('assets/CorteDeCabelo.png')}
        />

        <SimpleInputList
          formState={formData}
          setPropOfState={setPropOfForm}
          fields={[
            { name: 'establishmentName', label: 'Nome'},
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
              name: 'neighborhoodName', label: 'Bairro',
            },
            {
              name: 'streetName', label: 'Rua',
            },
            {
              name: 'postCode', label: 'CEP',
            },
            { name: 'establishmentAddressNumber', label: 'Número do Endereço' },
            { name: 'establishmentPassword', label: 'Senha', isSecure: true },
          ]}
        />

        <View style={styles.registerBtn}>
          <SimpleButton onPress={() => canSend ? register(formData) : emptyFieldsAlert()} text="Cadastrar Estabelecimento" />
        </View>
      </ScrollView>
    </View>
  );
}
