import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
// import { BackgroundColor } from "./home.style";

import { LinkText, Section, Title } from "./reusable.style";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Section>
      <Title>Hello from home page</Title>
      <Link href="/auth">
        <LinkText>To auth</LinkText>
      </Link>
    </Section>
  );
}
