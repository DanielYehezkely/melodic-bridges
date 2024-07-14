import React, { createContext, useContext, useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged as firebaseOnAuthStateChanged,
  signOut as firebaseSignOut
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../config/firebaseConfig";


const createUserDocument = async (user) => {
  const userRef = doc(db, "users", user.uid);
  const docSnap = await getDoc(userRef);
  if (!docSnap.exists()) {
    const displayName = user.email ? user.email.split("@")[0] : "Anonymous";
    await setDoc(userRef, {
      name: displayName,
      favoriteSongs: [],
    });
  }
};

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = firebaseOnAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        await createUserDocument(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLoginWithEmail = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      await createUserDocument(userCredential.user);
      setUser(userCredential.user);
    } catch (error) {
      setError(error.message);
      console.error("Error logging in with email:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSignUpWithEmail = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await createUserDocument(userCredential.user);
      setUser(userCredential.user);
    } catch (error) {
      setError(error.message);
      console.error("Error signing up with email:", error.message);
    } finally {
      setLoading(false);
    }
  };

   const handleLogout = async () => {
     setLoading(true);
     setError(null);
     try {
       await firebaseSignOut(auth);
       setUser(null);
     } catch (error) {
       setError(error.message);
       console.error("Error logging out:", error.message);
     } finally {
       setLoading(false);
     }
   };

  return (
    <AuthContext.Provider
      value={{
        user,
        loginWithEmail: handleLoginWithEmail,
        signUpWithEmail: handleSignUpWithEmail,
        logout: handleLogout,
        loading,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
