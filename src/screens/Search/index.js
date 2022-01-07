import React, {useState} from "react";
import styled from "styled-components/native";

import SearchIcon from "../../assets/icons8-search-24.png";

import{
    SearchButton,
    SearchInput,
    Container
} from "./styles";

const StyledImage = styled.Image`
  width: 24px;
  height: 24px;
`;

export default () => {
    
    const [text, setText] = useState("");
    
    return(
        <Container>
            <SearchInput placeholder="Pesquisar"
            value={text}
            onChangeText={(value) => setText(value)}
           />
            <SearchButton onPress={() => {}}>
                <StyledImage source={SearchIcon} />
            </SearchButton>
        </Container>
    )
}

