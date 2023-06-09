import Background from "@/components/Background/Background";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "../functionality/store/Store";
import { Provider } from "react-redux";
import Head from "next/head";
import Nav from "@/components/Navbar/Nav";
import PopupToast from "@/components/PopupToast/PopupToast";
import Modal from "@/components/Modal/Modal";
import Footer from "@/components/Footer/Footer";

export default function App({ Component, pageProps }: AppProps) {
  const main = (
    // @ts-ignore
    <Background>
      <Component {...pageProps} />
      <PopupToast />
      <Modal />
    </Background>
  );

  return (
    <Provider store={store}>
      <Head>
        <title>David Serrano</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Pacifico&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Nav />
      {main}
      <Footer />
    </Provider>
  );
}
