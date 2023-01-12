import { Dialog } from "common";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { TOGGLE_MODAL } from "store/slices/modalSlice";

const Create = () => {
  return (
    <div>
      <p>Create new post</p>
      <hr />
    </div>
  );
};

Create.propTypes = {};

export default Create;
