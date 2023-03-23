import { ModalBackdrop } from "./Modal.style";
import { useDispatch, useSelector } from "react-redux";
import { setClose } from "@/functionality/store/Modal";

import { FakeModal } from "./AllModals";

const Modal = () => {
  const dispatch = useDispatch();
  const { box } = useSelector((state: any) => state.modalReducer);

  console.log(box);

  const getBox = (): JSX.Element => {
    if (box === "fakeModal") {
      return <FakeModal />;
    }

    return <></>;
  };

  return box === "" ? (
    <></>
  ) : (
    <ModalBackdrop
      data-backdrop={true}
      onClick={(e: any) => {
        if (e.target.dataset.backdrop == undefined) return;

        dispatch(setClose({ box: "" }));
      }}
    >
      {getBox()}
    </ModalBackdrop>
  );
};

export default Modal;
