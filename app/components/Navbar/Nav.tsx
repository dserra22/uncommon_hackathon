import Link from "next/link";
import { NavBar, HomePage, Navigation, LinkItem, LinkText } from "./Nav.styles";

const page = ["topic", "two", "three"];

const Nav = () => {
  return (
    <NavBar>
      <HomePage>
        <Link href="/">
          <LinkText>Home</LinkText>
        </Link>
      </HomePage>
      <Navigation>
        {page.map((link: string, i: number) => {
          return (
            <LinkItem key={i}>
              <Link href={link}>
                <LinkText>{link}</LinkText>
              </Link>
            </LinkItem>
          );
        })}
      </Navigation>
    </NavBar>
  );
};

export default Nav;
