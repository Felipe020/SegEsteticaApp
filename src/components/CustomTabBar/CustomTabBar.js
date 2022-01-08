import React from "react";
import { Image, StyleSheet } from 'react-native';

import styled from "styled-components";

import HomeIcon from '@seg-estetica/assets/icons8-home-24.png';
import SearchIcon from '@seg-estetica/assets/icons8-search-24.png';
import TodayIcon from '@seg-estetica/assets/icons8-today-48.png';
import FavoriteIcon from '@seg-estetica/assets/icons8-favorite-24.png';
import AccountIcon from '@seg-estetica/assets/icons8-account-30.png';

const StyledImage = (props) => {
    return <Image {...props} style={styles.styledImage} />;
};

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

export const CustomTabBar = ({ navigation }) => {
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

const styles = StyleSheet.create({
    styledImage: {
        width: 24,
        height: 24,
    }
});
