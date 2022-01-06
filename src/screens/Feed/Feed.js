import React, { Fragment, useState } from "react";
import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";

import { useFetch } from 'hooks';
import { EstablishmentCard } from "components";


import {
  Container,
  Scroller,
  HeaderArea,
  HeaderTitle,
  SearchButton,
  LocationArea,
  LocationInput,
  LocationFinder,
} from "./styles";

import SearchIcon from "assets/icons8-search-24.png";
import MyLocationIcon from "assets/icons8-my-location-24.png";

const StyledImage = styled.Image`
  width: 24;
  height: 24;
`;

export const Feed = () => {
  const navigation = useNavigation();

  const [locationText, setLocationText] = useState("");
  const [list, setList] = useState([]);

  const establishments = useFetch('establishments');

  return (
    <Container>
      <Scroller>

        <HeaderArea>
          <HeaderTitle numberOfLines={2} margin-top="40">
            Encontre seu lugar de beleza favorito
          </HeaderTitle>
          <SearchButton onPress={() => navigation.navigate("Search")}>
            <StyledImage source={SearchIcon} />
          </SearchButton>
        </HeaderArea>

        {/* <LocationArea>
          <LocationInput 
            placeholder="Qual a sua cidade?"
            placeholderTextoColor="#955e25"
            value={locationText}
            onchangeText={t=>setLocationText(t)}
          />
          <LocationFinder>
            <StyledImage source={MyLocationIcon}/>
          </LocationFinder>
        </LocationArea> */}

        {Array.isArray(establishments) ? establishments.map((item, index) => (
          <EstablishmentCard establishment={item} key={index} />
        )) : []}

      </Scroller>
    </Container>
  );
};
