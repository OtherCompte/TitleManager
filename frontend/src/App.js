import React, { useState } from 'react'
import Connected from "./components/connected/Connected"
import NonConnected from './components/nonConnected/NonConnected';

export default function App() {

  const [ userConnected, setUserConnected ] = useState({
    isConnected: false,
    id: ""
  })

  const connectUser = (id) => {
    setUserConnected({
      isConnected: true,
      id: id
    })
  }

  const disconnectUser = () => {
    setUserConnected({
      isConnected: false,
      id: ""
    })
  }


  return (
    <>
    {userConnected.isConnected ? (
      <>
        <Connected
        key={userConnected.id}
        id={userConnected.id}
        disUser={disconnectUser}
        />
      </>
    ) : (
      <>
        <NonConnected 
        conUser={connectUser}/>
      </>
    )}
    </>
  )
}


