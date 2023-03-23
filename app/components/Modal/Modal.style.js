import styled from "styled-components";

export const ModalBackdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
`;
