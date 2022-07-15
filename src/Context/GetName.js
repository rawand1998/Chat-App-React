import React,{useState,createContext,useEffect} from 'react';
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth,db} from '../firebase'
export const ContextData = createContext();
function GetName({children}){
    const [name,setName] = useState([])
    const [user] = useAuthState(auth)
    const [active,serActive] = useState(false)

    // const getName = ()=>{
    //     try{
    //        const userName = db.collection('users').doc(user.uid).get()
    //        console.log(userName,"==========")
    //        setName(userName)
           
    //     }catch(err){
    //         console.error(err)
    //     }
    // }
    // useEffect(()=>{
    //     getName()

    // },[])
    return (

        <ContextData.Provider value={{ name, user,setName,active,serActive }}>
          {children}
        </ContextData.Provider>
    
      );
}
export default GetName;