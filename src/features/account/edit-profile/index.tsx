import { Avatar } from "common";
import styles from "./edit-profile.module.scss";
const EditProfile = () => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Avatar height={40} width={40} />
        <div className={styles.name}>
          <span>vincent.tsx</span>
          <small>Change Picture</small>
        </div>
      </div>
      <div className={styles.container}>
        <label className={styles.label} htmlFor="name">
          Name
        </label>
        <div className={styles.hintContainer}>
          <input className={styles.input} id="name" placeholder="Name" />
          <p className={styles.hint}>
            Help people discover your account by using the name you&apos;re
            known by: either your full name, nickname, or business name.
          </p>
          <p className={styles.hint}>
            You can only change your name twice within 14 days.
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <label className={styles.label} htmlFor="username">
          Username
        </label>
        <div className={styles.hintContainer}>
          <input
            className={styles.input}
            id="username"
            placeholder="Username"
          />
          <p className={styles.hint}>
            In most cases, you&apos;ll be able to change your username back to
            vincent.tsx for another 14 days.
          </p>
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
            Personal information Pro className={styles.input}vide your personal
            information, even if the account is used for a business, a pet or
            something else. This won&apos;t be a part of your public profile.
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <div className={styles.hintContainer}>
          <input
            type="email"
            className={styles.input}
            id="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div className={styles.container}>
        <label className={styles.label} htmlFor="phoneNumber">
          Phone Number
        </label>
        <div className={styles.hintContainer}>
          <input
            type="number"
            className={styles.input}
            id="phoneNumber"
            placeholder="Phone Number"
          />
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
