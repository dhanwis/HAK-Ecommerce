
import { createContext, useEffect, useState } from "react";


export const AuthContext  = createContext(null);


const AuthProvider = ({children})=>{
    const [accessToken,setAccessToken] = useState('')
      const [refreshToken,setRefreshToken] = useState('')


      useEffect(()=>{
        if(accessToken && refreshToken)
        {
            setAccessToken(accessToken);
            setRefreshToken(refreshToken)
        }else{
            console.log('no tokens');
        }
      },[])
    return(
        
        <AuthContext.Provider value={{accessToken,refreshToken, setAccessToken,setRefreshToken}}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthProvider;