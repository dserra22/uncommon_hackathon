import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useDispatch, useSelector } from "react-redux";
import { setOpen, setClose } from "@/functionality/store/Modal";
import { setTriggerToast } from "@/functionality/store/Toast";

// import { BackgroundColor } from "./home.style";

import { LinkText, Section, Title } from "./reusable.style";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const executeRandomFunction = () => {};

export default function Home() {
  const dispatch = useDispatch();

  return (
    <Section>
      <Title>Hello from home page</Title>
      <button
        style={{
          fontSize: "3.2rem",
          padding: "1.2rem 2.4rem",
        }}
        onClick={() => {
          dispatch(
            setTriggerToast({
              timeOn: 3000,
              text: "This component works",
              isSuccess: true,
              isOn: true,
            })
          );
        }}
      >
        Popup Toast On
      </button>
      <button
        style={{
          fontSize: "3.2rem",
          padding: "1.2rem 2.4rem",
        }}
        onClick={() => {
          dispatch(
            setTriggerToast({
              timeOn: 3000,
              text: "This component works but red",
              isSuccess: false,
              isOn: true,
            })
          );
        }}
      >
        Popup Toast Off
      </button>
      <button
        onClick={() => {
          dispatch(setOpen({ box: "fakeModal" }));
        }}
      >
        Open Modal
      </button>
      <Link href="/auth">
        <LinkText>To auth</LinkText>
      </Link>
    </Section>
  );
}
