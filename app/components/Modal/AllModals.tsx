import { useDispatch, useSelector } from "react-redux";
import { setOpen, setClose } from "@/functionality/store/Modal";

export function FakeModal() {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        backgroundColor: "black",
        padding: "2.4rem",
        color: "white",
        fontSize: "3.2rem",
      }}
    >
      <h3>Hello</h3>
      <p>Hello again</p>
      <button
        onClick={() => {
          dispatch(setClose({ box: "" }));
        }}
        style={{
          cursor: "pointer",
        }}
      >
        close
      </button>
    </div>
  );
}
