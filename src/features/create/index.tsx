import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import Thumbnail from "./thumbnail";

import { RiImage2Line } from "@react-icons/all-files/ri/RiImage2Line";
import styles from "./create.module.scss";

export interface ThumbnailProps {
  preview: string;
  name: string;
}
const Create = () => {
  const [files, setFiles] = useState<ThumbnailProps[]>([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  if (files.length >= 1) {
    return <Thumbnail files={files} />;
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
