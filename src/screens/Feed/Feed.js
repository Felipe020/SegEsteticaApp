import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useFetch } from '@seg-estetica/hooks';
import { EstablishmentCard } from "@seg-estetica/components";


import {
  Container,
  Scroller,
  HeaderArea,
  HeaderTitle,
  SearchButton,
} from "./styles";

import SearchIcon from "@seg-estetica/assets/icons8-search-24.png";

const StyledImage = (props) => {
  return <Image {...props} style={styles.styledImage} />;
};

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
        {Array.isArray(establishments) ? establishments.map((item, index) => (
          <EstablishmentCard establishment={item} key={index} />
        )) : []}

      </Scroller>
    </Container>
  );
};

const styles = StyleSheet.create({
  styledImage: {
    width: 24,
    height: 24,
  }
});
