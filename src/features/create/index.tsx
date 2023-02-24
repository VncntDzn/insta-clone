import { useEffect } from "react";
import { useDropzone } from "react-dropzone";
import Thumbnail from "./thumbnail";

import { RiImage2Line } from "react-icons/ri";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { SET_FILES } from "store/slices/uploadSlice";
import styles from "./create.module.scss";

const Create = () => {
  const dispatch = useAppDispatch();
  const files = useAppSelector((state) => state.upload.files);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
      "video/*": [],
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

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  if (files.length >= 1) {
    return <Thumbnail />;
  }
  return (
    <div className={styles.root}>
      <p className={styles.title}>Create new post</p>
      <div className={styles.slogan}>
        <RiImage2Line size={100} />
        <p>Drag photos and videos here</p>
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <button className={styles.selectBtn}>Select from computer</button>
        </div>
      </div>
    </div>
  );
};
export default Create;
