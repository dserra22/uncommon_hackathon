import { LinkItem } from "@/components/Navbar/Nav.styles";
import Link from "next/link";
import { Section } from "../reusable.style";

const multipleID = ["20394", "23409", "23489"];

const Index = () => {
  return (
    <section>
      Main
      {multipleID.map((anID: string, i: number) => {
        return (
          <Link href={`/topic/${anID}`}>
            <LinkItem>{anID}</LinkItem>
          </Link>
        );
      })}
    </section>
  );
};

export default Index;
