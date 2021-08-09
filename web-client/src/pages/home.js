import React from 'react';
import HeaderContainer from '../containers/header';
import MainContainer from '../containers/main';
import NavigationContainer from '../containers/navigation';
import FooterContainer from '../containers/footer';



export default function Home(){
    

    return (
        <>
            <HeaderContainer>
                <NavigationContainer />
            </HeaderContainer>
                <MainContainer>
                    <p>test</p>
                </MainContainer>
            <FooterContainer>
                <NavigationContainer/>
            </FooterContainer>
        </>


    )

}