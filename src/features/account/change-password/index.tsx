import styles from "./change-password.module.scss";

const ChangePassword = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <label className={styles.label} htmlFor="oldPassword">
          Old Password
        </label>
        <input
          className={styles.input}
          id="oldPassword"
          placeholder="Old Password"
        />
      </div>
      <div className={styles.container}>
        <label className={styles.label} htmlFor="newPassword">
          New Password
        </label>
        <input
          className={styles.input}
          id="newPassword"
          placeholder="New Password"
        />
      </div>
      <div className={styles.container}>
        <label className={styles.label} htmlFor="confirmNewPassword">
          Confirm New Password
        </label>
        <input
          className={styles.input}
          id="confirmNewPassword"
          placeholder="Confirm New Password"
        />
      </div>
      <button className={styles.changePasswordBtn}>Change Password</button>
      <p className={styles.forgotPassword}>Forgot Password?</p>
    </div>
  );
};

export default ChangePassword;
