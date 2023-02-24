import Modal from "react-modal";
import { useAppSelector } from "store/hooks";
import { ChildrenType } from "types";
import styles from "./dialog.module.scss";
Modal.setAppElement("body");

interface DialogProps extends ChildrenType {
  isOpen: boolean;
  onClose: () => void;
}
const customStyles = {
  /* to stacked up against elements using z-index and position absolute */
  overlay: { zIndex: 999 },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "20px",
    padding: 0,
    overflow: "hidden",
  },
};
const Dialog = ({ isOpen, onClose, children }: DialogProps) => {
  const isModalOpen = useAppSelector((state) => state.modal.isOpen);
  return (
    <Modal
      style={customStyles}
      isOpen={isOpen || isModalOpen}
      onRequestClose={onClose}
    >
      {children}
    </Modal>
  );
};

export default Dialog;
/* 
const Dialog = ({ children }: ChildrenType) => {
  const isModalOpen = useAppSelector((state) => state.modal.isOpen);
  const dispatch = useAppDispatch();
  const handleToggleModal = () => {
     
    
    dispatch(CLOSE_MODAL({ isOpen: !isModalOpen, modalType: "" }));
  };
  return (
    <Modal
      style={customStyles}
      isOpen={isModalOpen}
      onRequestClose={handleToggleModal}
    >
      {children}
    </Modal>
  );
}; */
