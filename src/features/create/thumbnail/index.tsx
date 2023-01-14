import { RiArrowLeftLine } from "@react-icons/all-files/ri/RiArrowLeftLine";
import Image from "next/image";

import { CgArrowsExpandRight } from "@react-icons/all-files/cg/CgArrowsExpandRight";
import { RiCheckboxMultipleBlankLine } from "@react-icons/all-files/ri/RiCheckboxMultipleBlankLine";
import { RiZoomInLine } from "@react-icons/all-files/ri/RiZoomInLine";

import { Dialog } from "common";
import { useToggle } from "hooks";
import styles from "./thumbnail.module.scss";

interface ThumbnailProps {
  files: any;
}
const Thumbnail = ({ files }: ThumbnailProps) => {
  const [toggle, setToggle] = useToggle();
  const handleToggle = () => {
    setToggle(!false);
  };
  const renderDialog = () => {
    return (
      <Dialog isOpen={toggle} onClose={handleToggle}>
        <section className={styles.modal}>
          <div className={styles.modalHeader}>
            <strong>Discard post?</strong>
            <small className={styles.modalDescription}>
              If you leave, your edits won&apos;t be saved.{" "}
            </small>
          </div>
          <div className={styles.discardBtn}>Discard</div>
          <div className={styles.cancelBtn} onClick={handleToggle}>
            Cancel
          </div>
        </section>
      </Dialog>
    );
  };

  return (
    <>
      {renderDialog()}
      <section className={styles.root}>
        <div className={styles.header}>
          <RiArrowLeftLine
            className={styles.backIcon}
            onClick={handleToggle}
            size={25}
          />
          <strong>Crop</strong>
          <p className={styles.nextBtn}>Next</p>
        </div>

        {files.map((file: any) => (
          <Image
            className={styles.thumbnail}
            alt="post"
            src={file.preview}
            height={100}
            width={100}
            key={file.name}
            // Revoke data uri after image is loaded
            onLoad={() => {
              URL.revokeObjectURL(file.preview);
            }}
          />
        ))}
        <div className={styles.footer}>
          <div className={styles.zoom}>
            <CgArrowsExpandRight className={styles.icon} size={20} />
            <RiZoomInLine id="zoom" className={styles.icon} size={20} />
          </div>
          <RiCheckboxMultipleBlankLine className={styles.icon} size={20} />
        </div>
      </section>
    </>
  );
};

export default Thumbnail;
