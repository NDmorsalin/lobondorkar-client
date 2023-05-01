/* eslint-disable react/prop-types */
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../utility/firebase/firebase.config";

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   register with email and password
  const register = async (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login with email and password
  const login = async (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // login with google
  const googleProvider = new GoogleAuthProvider();
  const loginWithGoogle = async () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // login with github
  const githubProvider = new GithubAuthProvider();
  const loginWithGithub = async () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  // logout
  const logout = async () => {
    setLoading(true);
    return signOut(auth);
  };

  // set user on auth state change
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const authInfo = {
    user,
    loading,
    register,
    login,
    logout,
    loginWithGoogle,
    loginWithGithub,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
