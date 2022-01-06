import React from "react";
import styled from "styled-components";

import HomeIcon from 'assets/icons8-home-24.png';
import SearchIcon from 'assets/icons8-search-24.png';
import TodayIcon from 'assets/icons8-today-48.png';
import FavoriteIcon from 'assets/icons8-favorite-24.png';
import AccountIcon from 'assets/icons8-account-30.png';

const TabArea = styled.View`
    height: 60px;
    background-color: #343434;
    flex-direction: row; 
`;

const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const StyledImage = styled.Image`
  width: 24;
  height: 24;
`;

const TabItemCenter = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    justify-content: center;
    align-items: center;
    background-color: #343434;
    border: 3px solid #955e25;
    border-radius: 35px;
    margin-top: -20px;
`;

export const CustomTabBar = ({ state, navigation }) => {

    const goTo = (screenName) => {
        navigation.navigate(screenName);
    };

    return (
        <TabArea>
            <TabItem onPress={() => goTo('Feed')}>
                <StyledImage source={HomeIcon} />
            </TabItem>
            <TabItem onPress={() => goTo('Search')}>
                <StyledImage source={SearchIcon} />
            </TabItem>
            <TabItemCenter onPress={() => goTo('Appointments')}>
                <StyledImage source={TodayIcon} />
            </TabItemCenter>
            <TabItem onPress={() => goTo('Favoritos')}>
                <StyledImage source={FavoriteIcon} />
            </TabItem>
            <TabItem onPress={() => goTo('Profile')}>
                <StyledImage source={AccountIcon} />
            </TabItem>
        </TabArea>
    );
};
