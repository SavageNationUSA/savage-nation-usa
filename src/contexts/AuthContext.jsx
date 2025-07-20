/* eslint react-refresh/only-export-components: off */
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithPhoneNumber,
  onAuthStateChanged,
  signOut
} from 'firebase/auth';
import { auth, googleProvider, setupRecaptcha } from '../firebase.js';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => {
      setIsAuthenticated(!!user);
    });
    return unsub;
  }, []);

  const loginEmail = async ({ email, password }) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const loginGoogle = async () => {
    await signInWithPopup(auth, googleProvider);
  };

  const loginPhone = async ({ phoneNumber, recaptchaId }) => {
    const verifier = setupRecaptcha(recaptchaId);
    await signInWithPhoneNumber(auth, phoneNumber, verifier);
  };

  const logout = () => signOut(auth);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, loginEmail, loginGoogle, loginPhone, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
