import { Avatar } from "common";
import styles from "./caption.module.scss";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { RiToggleFill } from "react-icons/ri";
// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";
import { useAppSelector } from "store/hooks";
import Image from "next/image";
import { ChangeEventHandler, useState } from "react";

interface CaptionProps {
  setCaption: (e) => void;
}
const Caption = ({ setCaption }: CaptionProps) => {
  const files = useAppSelector((state) => state.upload.files);

  const handleDescription = (
    e: ChangeEventHandler<HTMLTextAreaElement> | undefined
  ) => {
    setCaption(e!.target!.value);
  };
  return (
    <div className={styles.root}>
      <div className={styles.caption}>
        <div className={styles.header}>
          <Avatar />
          <strong className={styles.username}>vincent.tsx</strong>
        </div>
        <textarea
          autoComplete="off"
          aria-label="Write a caption..."
          placeholder="Write a caption..."
          className={styles.textArea}
          maxLength={2000}
          onChange={handleDescription}
        />
      </div>

      <Accordion allowZeroExpanded allowMultipleExpanded>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>Add Location</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>sad</AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>Accessibility</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <small>
              Alt text describes your photos for people with visual impairments.
              Alt text will be automatically created for your photos or you can
              choose to write your own.
            </small>
            {files.map((file, i) => (
              <div className={styles.accessibilityCaption} key={i}>
                <Image
                  src={file.preview}
                  alt={file.name}
                  height={40}
                  width={40}
                />
                <input
                  className={styles.accessibilityInput}
                  placeholder="Write alt text..."
                />
              </div>
            ))}
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>Advance Settings</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div>
              <div className={styles.option}>
                <p>Hide like and view counts on this post</p>
                <RiToggleFill size={40} />
              </div>
              <small>
                Only you will see the total number of likes and views on this
                post. You can change this later by going to the ··· menu at the
                top of the post. To hide like counts on other people&apos;s
                posts, go to your account settings.
              </small>
            </div>
            <div>
              <div className={styles.option}>
                <p>Turn off commenting</p>
                <RiToggleFill size={40} />
              </div>
              <small>
                You can change this later by going to the ··· menu at the top of
                your post.
              </small>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Caption;
