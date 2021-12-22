import React, { Fragment, useState } from "react";
import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";
import establishments from "../../mocks/establishments.json";

import {
  Container,
  Scroller,
  HeaderArea,
  HeaderTitle,
  SearchButton,
  LocationArea,
  LocationInput,
  LocationFinder,
  EstablishmentEmail,
  EstablishmentTitle,
  EstablishmentContainer,
} from "./styles";

import SearchIcon from "../../assets/icons8-search-24.png";
import MyLocationIcon from "../../assets/icons8-my-location-24.png";

const StyledImage = styled.Image`
  width: 24;
  height: 24;
`;

const BarberCard = ({ establishment }) => {
  return (
    <EstablishmentContainer>
      <EstablishmentTitle>{establishment.name}</EstablishmentTitle>
      <EstablishmentEmail>{establishment.email}</EstablishmentEmail>
    </EstablishmentContainer>
  );
};



export const Feed = () => {
  const navigation = useNavigation();

  const [locationText, setLocationText] = useState("");
  const [list, setList] = useState([]);

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

        {establishments.map((item) => (
          <BarberCard establishment={item}/>
        ))}

      </Scroller>
    </Container>
  );
};
