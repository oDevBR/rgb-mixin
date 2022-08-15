import React, { useContext } from "react";

import { SnackbarContext } from "../../contexts/SnackbarContext";

import styles from "../../styles/components/Snackbar.module.css";

const Snackbar = (props) => {
  const snackbarContext = useContext(SnackbarContext);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <span>{props.message}</span>
      </div>
      <div className={styles.closeIcon} onClick={snackbarContext.close}>
        &#10005;
      </div>
    </div>
  );
};

export default Snackbar;
