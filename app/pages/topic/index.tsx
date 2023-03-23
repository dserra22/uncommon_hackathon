import { LinkItem } from "@/components/Navbar/Nav.styles";
import Link from "next/link";
import { LinkText, Section } from "../reusable.style";
import { Topic } from "./topic.style";

const multipleID = ["20394", "23409", "23489"];

const Index = () => {
  return (
    <section>
      Main
      <ul>
        <Topic>hello</Topic>
        {multipleID.map((anID: string, i: number) => {
          return (
            <LinkItem key={i}>
              <Link href={`/topic/${anID}`}>
                <LinkText>{anID}</LinkText>
              </Link>
            </LinkItem>
          );
        })}
      </ul>
    </section>
  );
};

export default Index;
