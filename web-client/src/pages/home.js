import React from 'react';
import HeaderContainer from '../containers/header';
import MainContainer from '../containers/main';
import NavigationContainer from '../containers/navigation';
import FooterContainer from '../containers/footer';
import useGreeter from '../hooks/usegreeter';


export default function Home(){
    
    const { greeting, setGreeting, setNewGreeting, fetchGreeting } = useGreeter();

    

    return (
        <>
            <HeaderContainer>
                <NavigationContainer />
            </HeaderContainer>
                <MainContainer>
                    <div>
                        <p>Greeting: {greeting.currentGreeting ? greeting.currentGreeting : null}</p>
                    </div>
                    <button onClick={fetchGreeting}>Fetch</button>
                    <input onChange={(e)=>setGreeting({...greeting, newGreeting: e.target.value})}></input>
                    <button onClick={setNewGreeting}>Button</button>
                </MainContainer>
            <FooterContainer>
                <NavigationContainer/>
            </FooterContainer>
        </>


    )

}