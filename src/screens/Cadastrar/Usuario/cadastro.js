import React from 'react';

import { SimpleInputList } from '@seg-estetica/components';

import {
  useFetch,
  useFormState,
  usePickerData,
} from '@seg-estetica/hooks';

import {
  Container,
  RegisterButton,
  ScreenIcon,
  Scroller,
} from './styles';

import CorteDeCabeloPng from '@seg-estetica/assets/CorteDeCabelo.png';

export const CadastroUsuario = ({ navigation }) => {
  const [loginFormState, setPropOfLoginFormState] = useFormState();

  const states = useFetch('states');
  const stateOptions = usePickerData(states, { labelAlias: 'name', valueAlias: 'id' });

  const cities = useFetch('cities?cityStateId=' + loginFormState?.userStateId || 0);
  const cityOptions = usePickerData(cities, { labelAlias: 'name', valueAlias: 'id' });

  const neighborhoods = useFetch('neighborhoods?neighborhoodCityId=' + loginFormState?.userCityId || 0);
  const neighborhoodOptions = usePickerData(neighborhoods, { labelAlias: 'name', valueAlias: 'id' });

  return (
    <Container>
      <Scroller>
        <ScreenIcon source={CorteDeCabeloPng} />

        <SimpleInputList
          formState={loginFormState}
          setPropOfState={setPropOfLoginFormState}
          fields={[
            { name: "userName", label: "Nome" },
            { name: "userLastName", label: "Sobrenome" },
            { name: "userEmail", label: "E-mail" },
            { name: "userPassword", label: "Senha" },
            { name: "userPasswordConfirmation", label: "Confirme a Senha" },
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
              name: "userNeighborhoodId",
              label: "Selecione um bairro",
              type: "picker",
              options: neighborhoodOptions
            },
          ]}

        />

        <RegisterButton
          text="Cadastrar"
        />
      </Scroller>
    </Container>
  );
};
