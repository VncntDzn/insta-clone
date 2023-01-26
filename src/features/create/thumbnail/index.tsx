import { RiArrowLeftLine } from "@react-icons/all-files/ri/RiArrowLeftLine";
import Image from "next/image";

import { CgArrowsExpandRight } from "@react-icons/all-files/cg/CgArrowsExpandRight";
import { RiCheckboxMultipleBlankLine } from "@react-icons/all-files/ri/RiCheckboxMultipleBlankLine";
import { RiZoomInLine } from "@react-icons/all-files/ri/RiZoomInLine";
import { RiArrowLeftSFill } from "@react-icons/all-files/ri/RiArrowLeftSFill";
import { RiArrowRightSFill } from "@react-icons/all-files/ri/RiArrowRightSFill";
import { RiImageLine } from "@react-icons/all-files/ri/RiImageLine";
import { Avatar, Dialog, Menu } from "common";
import { useToggle } from "hooks";
import styles from "./thumbnail.module.scss";

import { RiAddLine } from "@react-icons/all-files/ri/RiAddLine";

import { RiCheckboxBlankLine } from "@react-icons/all-files/ri/RiCheckboxBlankLine";
import { ChangeEvent, MutableRefObject, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useAppDispatch, useAppSelector } from "store/hooks";
import { SET_FILES } from "store/slices/uploadSlice";
enum PicMenu {
  ORIGINAL = "fill",
  ONE_IS_TO_ONE = "cover",
  FOUR_IS_TO_FIVE = "contain",
  SIXTEEN_TO_NINE = "scale-down",
}

interface MenuToggleTypes {
  isSizesOpen: boolean;
  isRangeOpen: boolean;
  isMultipleOpen: boolean;
}

const Thumbnail = () => {
  const files = useAppSelector((state) => state.upload.files);
  const dispatch = useAppDispatch();
  const horizontalScrollRef = useRef(null);
  const [toggle, setToggle] = useToggle();
  const [imageFit, setImageFit] = useState<PicMenu | undefined>(undefined);
  const [imageRange, setImageRange] = useState(1);
  const [isCaptionBoxVisible, setCaptionBoxVisible] = useState(false);

  const [selectedItem, setSelectedItem] = useState(0);
  const [menuToggle, setMenuToggle] = useState<any>({
    isSizesOpen: false,
    isRangeOpen: false,
    isMultipleOpen: false,
  });

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      dispatch(
        SET_FILES(
          acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        )
      );
    },
  });
  const handleImageRange = (e: ChangeEvent<HTMLInputElement> | undefined) => {
    setImageRange(parseInt(e!.target!.value));
  };
  const handleToggle = () => {
    setToggle(!false);
  };
  const handleMenuToggle = (e: any) => {
    const { id } = e.target;
    setMenuToggle({ [id]: !menuToggle[id] });
  };

  const changeStyle = (id: boolean) => {
    return {
      background: `${id ? "white" : "black"}`,
      color: `${id ? "black" : "white"}`,
    };
  };

  const handleSelectedItem = (e, index) => {
    setSelectedItem(index);
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
  const renderImageMenu = () => {
    return (
      <Menu className={styles.picMenu}>
        <div
          tabIndex={0}
          className={styles.picOptions}
          onClick={() => setImageFit(PicMenu.ORIGINAL)}
        >
          Original
          <RiImageLine size={25} />
        </div>
        <div
          tabIndex={1}
          className={styles.picOptions}
          onClick={() => setImageFit(PicMenu.ONE_IS_TO_ONE)}
        >
          1:1
          <RiCheckboxBlankLine size={25} />
        </div>
        <div
          tabIndex={2}
          className={styles.picOptions}
          onClick={() => setImageFit(PicMenu.FOUR_IS_TO_FIVE)}
        >
          4:5 <RiCheckboxBlankLine size={25} />
        </div>
        <div
          tabIndex={3}
          className={styles.picOptions}
          onClick={() => setImageFit(PicMenu.SIXTEEN_TO_NINE)}
        >
          16:9 <RiCheckboxBlankLine size={25} />
        </div>
      </Menu>
    );
  };
  const renderInputRange = () => {
    return (
      <Menu className={styles.range}>
        <input
          onChange={handleImageRange}
          max={5}
          min={1}
          step={0.1}
          value={imageRange}
          type="range"
        />
      </Menu>
    );
  };

  const renderMultipleImageOptions = () => {
    const handleScrollHorizontal = (direction: "right" | "left") => {
      if (horizontalScrollRef.current) {
        if (direction === "right") {
          (horizontalScrollRef.current as HTMLElement).scrollLeft += 50;
        } else {
          (horizontalScrollRef.current as HTMLElement).scrollLeft -= 50;
        }
      }
    };

    return (
      <Menu className={styles.multipleImages}>
        <div ref={horizontalScrollRef} className={styles.multiImageContainer}>
          <RiArrowLeftSFill
            className={styles.arrowLeft}
            size={50}
            onClick={() => handleScrollHorizontal("left")}
            style={{ display: `${files.length >= 5 ? "block" : "none"}` }}
          />
          <div className={styles.multiImage}>
            {files.map((file, index) => (
              <div
                onClick={(e) => handleSelectedItem(e, index)}
                key={file.name}
                style={{
                  opacity: `${index === selectedItem ? "1" : "0.4"}`,
                }}
              >
                <Image
                  id={file.name}
                  alt={file.name}
                  src={file.preview}
                  width={100}
                  height={100}
                />
              </div>
            ))}
          </div>
          <RiArrowRightSFill
            className={styles.arrowRight}
            size={50}
            onClick={() => handleScrollHorizontal("right")}
            style={{ display: `${files.length >= 5 ? "block" : "none"}` }}
          />
          <div className={styles.addMore}>
            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              <RiAddLine color="white" size={35} />
            </div>
          </div>
        </div>
      </Menu>
    );
  };

  const handleCaptionVisibility = () => {
    setCaptionBoxVisible(!isCaptionBoxVisible);
  };
  const renderCaption = () => {
    return (
      <div className={styles.caption}>
        <Avatar />
        <textarea
          autoComplete="off"
          aria-label="Write a caption..."
          placeholder="Write a caption..."
          className={styles.textArea}
        />
      </div>
    );
  };
  return (
    <>
      {menuToggle.isMultipleOpen && renderMultipleImageOptions()}
      {menuToggle.isSizesOpen && renderImageMenu()}
      {menuToggle.isRangeOpen && renderInputRange()}
      {toggle && renderDialog()}
      <div className={styles.header}>
        <RiArrowLeftLine
          className={styles.backIcon}
          onClick={handleToggle}
          size={25}
        />
        <strong>Crop</strong>
        <p className={styles.nextBtn} onClick={handleCaptionVisibility}>
          Next
        </p>
      </div>
      <main className={styles.content}>
        <Carousel
          className={styles.carousel}
          selectedItem={selectedItem}
          showThumbs={false}
          showStatus={false}
        >
          {files.map((file) => (
            <section key={file.name} className={styles.image}>
              <Image
                id={file.name}
                alt={file.name}
                src={file.preview}
                fill
                style={{
                  objectFit: imageFit,
                  transform: `scale(${imageRange})`,
                }}
              />
            </section>
          ))}
        </Carousel>
        <div className={styles.footer}>
          <div className={styles.options}>
            <div onClick={handleMenuToggle}>
              <CgArrowsExpandRight
                className={styles.icon}
                size={20}
                id="isSizesOpen"
                style={changeStyle(menuToggle.isSizesOpen)}
              />
            </div>
            <div onClick={handleMenuToggle}>
              <RiZoomInLine
                id="isRangeOpen"
                className={styles.icon}
                size={20}
                style={changeStyle(menuToggle.isRangeOpen)}
              />
            </div>
          </div>
          <div onClick={handleMenuToggle}>
            <RiCheckboxMultipleBlankLine
              className={styles.icon}
              size={20}
              id="isMultipleOpen"
              style={changeStyle(menuToggle.isMultipleOpen)}
            />
          </div>
        </div>
        {isCaptionBoxVisible && renderCaption()}
      </main>
    </>
  );
};

export default Thumbnail;
