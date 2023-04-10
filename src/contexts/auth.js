import React, {createContext, useState} from 'react';

// importação das funções
import {
  fVerifyUser,
  fHandleSignIn,
  fHandleSignUp,
  fHandleSignOut,
  fDbSetData,
  fDbGetData,
  fUserStorage,
  fGetUserStorage,
  fCheck,
} from '../functions';

export const AuthContext = createContext({});

export default function AuthProvider({children}) {
  const [loading, setLoading] = useState(true);
  const [dataContext, setDataContext] = useState({});

  // Declaração das funções
  const verifyUser = () => fVerifyUser(setDataContext, setLoading);
  const handleSignIn = (email, pwd) =>
    fHandleSignIn(userStorage, setDataContext, setLoading, email, pwd);
  const handleSignUp = (name, email, pwd) =>
    fHandleSignUp(setLoading, dbSetData, handleSignIn, name, email, pwd);
  const handleSignOut = () => fHandleSignOut(setDataContext, setLoading);
  const dbSetData = (uid, email, name, pwd) =>
    fDbSetData(uid, email, name, pwd);
  const dbGetData = () => fDbGetData(dataContext);
  const userStorage = data => fUserStorage(data);
  const getUserStorage = () => fGetUserStorage();
  // comandos para teste
  const check = data => fCheck(setLoading, loading, data);

  // disponibilizar funções e variaveis para o provider
  return (
    <AuthContext.Provider
      value={{
        dataContext,
        loading,
        setLoading,
        verifyUser,
        handleSignIn,
        handleSignUp,
        handleSignOut,
        userStorage,
        getUserStorage,
        check,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
