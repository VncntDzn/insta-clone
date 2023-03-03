import { Avatar } from "common";
import styles from "./edit-profile.module.scss";
const EditProfile = () => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div className={styles.avatar}>
          <Avatar height={40} width={40} />
        </div>
        <div className={styles.name}>
          <span>vincent.tsx</span>
          <small className={styles.changeProfilePhoto}>
            Change Profile Photo
          </small>
        </div>
      </div>
      <div className={styles.container}>
        <label className={styles.label} htmlFor="website">
          Website
        </label>
        <div className={styles.hintContainer}>
          <input className={styles.input} id="website" placeholder="Website" />
          <p className={styles.hint}>
            Editing your links is only available on mobile. Visit the Instagram
            app and edit your profile to change the websites in your bio.
          </p>
        </div>
      </div>

      <div className={styles.container}>
        <label className={styles.label} htmlFor="bio">
          Bio
        </label>
        <div className={styles.hintContainer}>
          <textarea className={styles.input} id="bio" placeholder="bio" />
          <p className={styles.hint}>
            Personal information Pro vide your personal
            information, even if the account is used for a business, a pet or
            something else. This won&apos;t be a part of your public profile.
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <label className={styles.label} htmlFor="gender">
          Gender
        </label>{" "}
        <div className={styles.hintContainer}>
          <input className={styles.input} id="gender" placeholder="gender" />
        </div>
      </div>
      <div className={styles.container}>
        <label className={styles.label} htmlFor="accountSuggestions">
          Show account suggestions on profiles
        </label>{" "}
        <div className={styles.hintContainer}>
          <input
            type="checkbox"
            className={styles.input}
            id="accountSuggestions"
          />
          <p className={styles.hint}>
            Choose whether people can see similar account suggestions on your
            profile, and whether your account can be suggested on other
            profiles.
          </p>
        </div>
      </div>
      <button className={styles.submitBtn}>Submit</button>
    </div>
  );
};

export default EditProfile;
