import React from 'react';
import HeaderContainer from '../containers/header';
import MainContainer from '../containers/main';
import NavigationContainer from '../containers/navigation';
import FooterContainer from '../containers/footer';

import { ethers } from 'ethers'
import Greeter from '../contract-artifacts/contracts/Greeter.sol/Greeter.json'

export default function Home(){
    

    return (
        <>
            <HeaderContainer>
                <NavigationContainer />
            </HeaderContainer>
                <MainContainer>
                    <div>
                        <p>String: </p>
                    </div>
                </MainContainer>
            <FooterContainer>
                <NavigationContainer/>
            </FooterContainer>
        </>


    )

}