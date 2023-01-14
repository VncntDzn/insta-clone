import Modal from "react-modal";
import { ChildrenType } from "types";
import styles from "./dialog.module.scss";
Modal.setAppElement("body");

interface DialogProps extends ChildrenType {
  isOpen: boolean;
  onClose: () => void;
}
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "20px",
    padding: 0,
  },
};
const Dialog = ({ isOpen, onClose, children }: DialogProps) => {
  return (
    <Modal style={customStyles} isOpen={isOpen} onRequestClose={onClose}>
      {children}
    </Modal>
  );
};

export default Dialog;
