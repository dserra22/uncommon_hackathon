import styled from "styled-components";

export const Section = styled.section`
  max-width: 130rem;
  margin: 0 auto;
  background-color: green;
  color: white;
  font-size: 2.4rem;
  padding: 9.8rem 0;
  height: 200vh;
`;

export const Title = styled.h1`
  font-size: 3.6rem;
  text-align: center;
  color: ${(props) => props.color || "#FFF"};
`;

export const LinkText = styled.span`
  display: inline-block;
  padding: 1.2rem 2.4rem;
  color: white;
  font-size: 2.4rem;
  background-color: orange;
`;
