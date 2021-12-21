import React from "react";
// import { Text } from "react-native-svg";
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

import SearchIcon from "assets/icons8-search-50.png";
import MyLocationIcon from "assets/icons8-my-location-30.png";

export const Feed = () => {
  return (
    <Container>
      <Scroller>
        {" "}
        // tela rolavel
        <HeaderArea>
          <HeaderTitle numberOfLines={2}>
            {" "}
            Encontre seu estabelecimento favorito{" "}
          </HeaderTitle>
          <SearchButton>
            <SearchIcon width="26" height="26" fill="#FFF">
              {" "}
            </SearchIcon>
          </SearchButton>
        </HeaderArea>
        <LocationArea>
          <LocationInput />
          <LocationFinder>
            <MyLocationIcon width="24" height="24" fill="#FFF" />
          </LocationFinder>
        </LocationArea>
      </Scroller>
    </Container>
  );
};
