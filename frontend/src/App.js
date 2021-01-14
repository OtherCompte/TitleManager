import React, { useState } from 'react'
import Connected from "./components/connected/Connected"
import NonConnected from './components/nonConnected/NonConnected';


export default function App() {


  // Display Dashboard or display Login page ? this data give to you the information
  const [ userConnected, setUserConnected ] = useState({
    isConnected: false,
    id: ""
  })


  // LoginForm to Dashboard
  const connectUser = (id) => {
    setUserConnected({
      isConnected: true,
      id: id
    })
  }


  // Dashboard to LoginForm
  const disconnectUser = () => {
    setUserConnected({
      isConnected: false,
      id: ""
    })
  }


  return (
    <>


    {/* if User is Connected display Dashboard , else display LoginForm */}
    {userConnected.isConnected ? (


      <>
        {/* Connected page -> Dashboard 
        Send ID to know what is the userDashboard to display 
        didUser fonction for disconnect the User in the Dashboard */}
        <Connected
          key={userConnected.id}
          id={userConnected.id}
          disUser={disconnectUser}
        />
      </>


    ) : (


        
        <>
          {/* NonConnected page -> Login Form 
          connectUser in the LoginForm for switch to the Dashboard before UserLogin 
          execution in LoginButtonClick */}
          <NonConnected conUser={connectUser}/>
        </>
        
        
    )}


    </>
  )
}


