import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

import SearchIcon from "@seg-estetica/assets/icons8-search-24.png";

import { useFetch } from "@seg-estetica/hooks";
import { EstablishmentCard } from "@seg-estetica/components";

import {
  SearchButton,
  SearchInput,
  Container,
  Scroller,
  HeaderArea,
} from "./styles";

const StyledImage = styled.Image`
  width: 24px;
  height: 24px;
`;

export const Search = () => {
  const establishments = useFetch("establishments");
  const [searchTermState, setSearchTermState] = useState("");
  const [establishmentCards, setEstablishmentCards] = useState([]);

  useEffect(() => {
    if (!Array.isArray(establishments)) {
      return;
    }

    const filterFunction = ({ name }) => {
      const preparedSearchTerm = searchTermState.normalize("NFD").toUpperCase();
      const preparedName = name.normalize("NFD").toUpperCase();

      return preparedName.includes(preparedSearchTerm);
    };

    const filteredEstablishments = establishments.filter(filterFunction);

    setEstablishmentCards(
      filteredEstablishments.map((item) => {
        return (
          <EstablishmentCard establishment={item} key={item.uuid} />
        );
      })
    );
  }, [establishments, searchTermState]);

  return (
    <Container>
      <Scroller>
        <HeaderArea>
          <SearchInput
            placeholder="Pesquisar"
            placeholderTextColor="#fff"
            value={searchTermState}
            onChangeText={(value) => setSearchTermState(value)}
          />
          <SearchButton onPress={() => { }}>
            <StyledImage source={SearchIcon} />
          </SearchButton>
        </HeaderArea>

        {establishmentCards}
      </Scroller>
    </Container>
  );
};
