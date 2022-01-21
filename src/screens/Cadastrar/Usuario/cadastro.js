import React, { useEffect, useState } from 'react';

import {
  SimpleInputList,
  SimpleCheckBoxInputList,
} from '@seg-estetica/components';

import {
  useCheckBoxData,
  useFetch,
  useFormState,
  usePickerData,
} from '@seg-estetica/hooks';

import CorteDeCabeloPng from '@seg-estetica/assets/CorteDeCabelo.png';

import {
  Container,
  RegisterButton,
  ScreenIcon,
  Scroller,
} from './styles';

import {
  UserCreationData
} from '@seg-estetica/mocks';
import { Alert } from 'react-native';
import { consultarCep } from './viacep';
import { register } from './conexao';

export const CadastroUsuario = ({ navigation }) => {
  const formValidator = (formState) => (errors, currentAttribute) => {
    if (formState.userPassword !== formState.userPasswordConfirmation) {
      return [...errors, 'Senhas não coincidem!'];
    }

    return errors;
  };

  const [aguardandoPromessa, setAguardandoPromessa] = useState(false);
  const [loginFormState, setPropOfLoginFormState, errors, setFormState] = useFormState({
    'userName': 'Ayres',
    'userLastName': 'Monteiro',
    'userEmail': 'ayresmonteiro52@gmail.com',
    'userPassword': '1234',
    'userPasswordConfirmation': '1234',
    'userPhoneNumber': '32988452820',
    'userStateId': 11,
    'userCityId': 1794,
  }, formValidator);

  // const [initialOptions] = useState([
  //   { nome: 'teste', etiqueta: 'Teste' },
  //   { nome: 'teste2', etiqueta: 'Teste 2' },
  // ]);

  // const [checkBoxOptions, setCheckBoxOptions] = useCheckBoxData(initialOptions, {
  //   labelAlias: 'etiqueta',
  //   nameAlias: 'nome',
  // });

  const states = useFetch('states');
  const stateOptions = usePickerData(states, { labelAlias: 'name', valueAlias: 'id' });

  const cities = useFetch('cities?cityStateId=' + loginFormState?.userStateId || 0);
  const cityOptions = usePickerData(cities, { labelAlias: 'name', valueAlias: 'id' });

  const neighborhoods = useFetch('neighborhoods?neighborhoodCityId=' + loginFormState?.userCityId || 0);
  const neighborhoodOptions = usePickerData(neighborhoods, { labelAlias: 'name', valueAlias: 'id' });

  const voltar = () => {
    navigation.goBack();
  };

  const registrar = () => {
    if (Array.isArray(errors) && errors.length > 0) {
      Alert.alert('Erro de validação!', errors.join('\n'), [
        { text: "Ok", style: "cancel" }
      ]);
    } else {
      register(loginFormState, voltar);
    }
  };

  useEffect(async () => {
    if (!aguardandoPromessa && loginFormState.postCode) {
      setAguardandoPromessa(true);

      const dados = await consultarCep(loginFormState.postCode);

      if (dados !== undefined) {
        setFormState({
          ...loginFormState,
          userNeighborhoodName: dados.bairro,
        });
      }

      setAguardandoPromessa(false);
    }
  }, [loginFormState.postCode]);

  return (
    <Container>
      <Scroller>
        <ScreenIcon source={CorteDeCabeloPng} />

        {/* <SimpleCheckBoxInputList
          options={checkBoxOptions}
          setOptions={setCheckBoxOptions}
        /> */}

        <SimpleInputList
          formState={loginFormState}
          setPropOfState={setPropOfLoginFormState}
          fields={[
            { name: "userName", label: "Nome" },
            { name: "userLastName", label: "Sobrenome" },
            { name: "userEmail", label: "E-mail" },
            { name: "userPassword", label: "Senha", isSecure: true },
            { name: "userPasswordConfirmation", label: "Confirme a Senha", isSecure: true },
            { name: "userPhoneNumber", label: "Número de telefone" },
            {
              name: "userStateId",
              label: "Selecione um estado",
              type: "picker",
              options: stateOptions
            },
            {
              name: "userCityId",
              label: "Selecione uma cidade",
              type: "picker",
              options: cityOptions
            },
            {
              name: 'postCode', label: 'CEP (Ele não será salvo)',
            },
            {
              name: "userNeighborhoodName",
              label: "Bairro",
            },
          ]}
        />

        <RegisterButton
          onPress={registrar}
          text="Cadastrar"
        />
      </Scroller>
    </Container>
  );
};
