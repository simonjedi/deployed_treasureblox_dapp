// App.js

import React, {useState, useEffect} from 'react'
import { useWallet, UseWalletProvider } from 'use-wallet'
import { Button } from 'react-bootstrap';

import MyNav from "./MyNav";
import App from "./App";
import getWeb3 from "./getWeb3";


const Connection = (props) =>  {

  const wallet = useWallet()
  const [firstPartAddress, setFirstPartAddress] = useState('Connect Wallet');
  const [secondPartAddress, setSecondPartAddress] = useState('');

  useEffect(() => {
     const init = async() => {
       const web3 = await getWeb3();
       const accounts = await web3.eth.getAccounts();
       const usersAccount = accounts[0];
       const stringOfUsersAccount = new String(usersAccount)
       console.log(stringOfUsersAccount.slice(0, 4)); // "01"
       setFirstPartAddress(stringOfUsersAccount.slice(0, 5));
       setSecondPartAddress('____'+stringOfUsersAccount.slice(27, 32));

     }
     init()
   });

  const connectWallet = async(e) => {
    await wallet.connect()
    const usersAccount = props.accounts;
    const stringOfUsersAccount = new String(usersAccount)
    console.log(stringOfUsersAccount.slice(0, 4)); // "01"
    setFirstPartAddress('Welcome');
    setSecondPartAddress('');
  }

  return(
    <div>
      <Button onClick={connectWallet} className="customButton enableEthereumButton">{firstPartAddress}{secondPartAddress}</Button>
    </div>
  )
}

// Wrap everything in <UseWalletProvider />
export default (props) => (
  <UseWalletProvider
    chainId={1337}
    connectors={{
      // This is how connectors get configured
      provided: {provider: window.cleanEthereum},
    }}>

    <Connection accounts={props.accounts}/>



  </UseWalletProvider>
)
