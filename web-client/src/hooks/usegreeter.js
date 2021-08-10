import { useState, useEffect } from "react";
import { ethers } from 'ethers'
import Greeter from '../contract-artifacts/contracts/Greeter.sol/Greeter.json'


export default function useGreeter(){


    const [ greeting, setGreeting ] = useState({
        currentGreeting: null,
        newGreeting: null
    });

    async function requestAccount() {
        await window.ethereum.request({method: "eth_requestAccounts"});
    }

    async function setNewGreeting(){
        if (!greeting) return
        if (typeof window.ethereum !== "undefined"){
            await requestAccount()
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getSigner();
            const signerContract = new ethers.Contract(process.env.REACT_APP_LOCAL_CONTRACT_ADDRESS, Greeter.abi, signer)
            console.log(signerContract.address)
            const transaction = await signerContract.setGreeting(greeting.newGreeting)
            await transaction.wait()
        }
    }
    
    async function fetchGreeting(){
        const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545")
        const tContract = new ethers.Contract(process.env.REACT_APP_LOCAL_CONTRACT_ADDRESS, Greeter.abi, provider)

        try {
            const greetingRes = await tContract.greet()
            setGreeting({...greeting, currentGreeting: greetingRes})
        } catch (err){
            console.log(err)
        }
        
    }


    return { greeting, setGreeting, setNewGreeting, fetchGreeting }
}