import Navbar from "@/component/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "@/component/Footer";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { auth } from "@/firebase/firebase";
import { login, logout } from "@/feature/userSlice";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "@/translations/index";

const AuthListener = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authuser) => {
      if (authuser) {
        dispatch(
          login({
            photo: authuser.photoURL || "",
            name: authuser.displayName || "",
            email: authuser.email || "",
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  return null;
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AuthListener />
      <div className="bg-white">
        <ToastContainer />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </Provider>
  );
}
