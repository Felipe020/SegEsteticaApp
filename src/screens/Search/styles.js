import React from "react";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: #2E2E2E;
    flex-direction: row;
    justify-content: space-between;
`;

export const SearchButton = styled.TouchableOpacity`
    width: 26px;
    height: 26px;
`;

export const SearchInput = styled.TextInput`
    background-color: #343434;
    border-radius: 25px;
    font-size: 20px;
    padding: 20px;
    color: #fff;
`;