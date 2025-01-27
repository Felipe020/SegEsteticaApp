import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #2E2E2E;
    padding-top: 30px;
    height: 100%;
    color: #FFFF;
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
export const HeaderTitle = styled.Text`
    width: 300px;
    font-size: 24px;
    font-weight: bold;
    color: #955e25;
`;
export const SearchButton = styled.TouchableOpacity`
    width: 26px;
    height: 26px;
`;

// export const LocationArea = styled.View`
//     background-color: #343434;
//     height: 60px;
//     border-radius: 30px;
//     flex-direction: row;
//     align-items: center;
//     padding-left: 20px;
//     padding- right: 20px;
//     margin-top: 30px;  
// `;
// export const LocationInput = styled.TextInput`
//     flex: 1;
//     font-size: 16px;
//     color: #955e25;
// `;
// export const LocationFinder = styled.TouchableOpacity`
//     width: 24px;
//     height: 24px;
// `;
