import React from "react";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: #2E2E2E;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 30px;
`;

export const SearchButton = styled.TouchableOpacity`
    width: 25px;
    height: 25px;
`;

export const SearchInput = styled.TextInput`
    background-color: #343434;
    font-size: 20px;
    padding: 10px;
    color: #fff;
    width: 325px;
    height: 50px;
    border-radius: 20px;
`;

export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 20px;
`;

export const HeaderArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;