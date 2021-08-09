import React from 'react'
// component
import { Navigation } from '../components';
// Identicon
import Identicon from 'react-identicons';


export default function NavigationContainer({userState}) {


    return (
        <Navigation>
            <Navigation.NavigationInner>
            <Navigation.TitleText>Boiler Plate</Navigation.TitleText>
            {
                userState ?
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", width: "40%"}}>
                    <Navigation.TitleText>Account: {userState.account}</Navigation.TitleText>
                    <Identicon string={userState.account} size={40}/>
                </div>
                :
                null
            }
            
            </Navigation.NavigationInner>
        </Navigation>

    )
}