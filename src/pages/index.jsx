import Head from "next/head";
import { useContext, useEffect, useState } from "react";

import GithubCorner from "react-github-corner";

import { SnackbarContext } from "../contexts/SnackbarContext";
import Snackbar from "../components/Snackbar";

import styles from "../styles/pages/Home.module.css";

export default function Home() {
  const [redField, setRedField] = useState(0);
  const [greenField, setGreenField] = useState(0);
  const [blueField, setBlueField] = useState(0);
  const [customColor, setCustomColor] = useState("#000000");
  const [showMessage, setShowMessage] = useState(false);
  const snackbarContext = useContext(SnackbarContext);

  const handleInput = (event, setValue) => {
    const value = event.target.value;
    if (isNaN(value)) {
      setShowMessage(true);
      return;
    }

    if (value === "" || value < 0) {
      setShowMessage(true);
      setValue(0);
      return;
    }

    if (value > 255) {
      setShowMessage(true);
      setValue(255);
      return;
    }

    setValue(value);
    setShowMessage(false);
  };

  const selectField = (event) => event.target.select();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(customColor);
    snackbarContext.open();
  };

  useEffect(() => {
    setCustomColor(`rgb(${redField}, ${greenField}, ${blueField})`);
  }, [redField, greenField, blueField]);

  return (
    <>
      <div
        className={styles.container}
        style={{ backgroundColor: customColor }}
        onClick={copyToClipboard}
      >
        <Head>
          <title>Início | RGB mixin</title>
        </Head>

        <section
          className={styles.section}
          onClick={(event) => event.stopPropagation()}
        >
          <div className={styles.section_field}>
            <div className={styles.input_form}>
              <label
                className={styles.input_label}
                style={{ color: customColor }}
              >
                R
              </label>
              <input
                type="text"
                className={styles.input}
                value={redField}
                onFocus={selectField}
                onChange={(event) => handleInput(event, setRedField)}
              />
            </div>
            <div className={styles.input_form}>
              <label
                className={styles.input_label}
                style={{ color: customColor }}
              >
                G
              </label>
              <input
                type="text"
                className={styles.input}
                value={greenField}
                onFocus={selectField}
                onChange={(event) => handleInput(event, setGreenField)}
              />
            </div>
            <div className={styles.input_form}>
              <label
                className={styles.input_label}
                style={{ color: customColor }}
              >
                B
              </label>
              <input
                type="text"
                className={styles.input}
                value={blueField}
                onFocus={selectField}
                onChange={(event) => handleInput(event, setBlueField)}
              />
            </div>
          </div>
          {showMessage && (
            <div className={styles.section_warning}>
              <span>
                Valor inválido! Intensidade da cor deve estar entre 0 e 255.
              </span>
            </div>
          )}
        </section>
      </div>
      {snackbarContext.isDisplayed && (
        <Snackbar message="Copiado com sucesso!" />
      )}
      <GithubCorner href="https://github.com/whisoer/rgb-mixin" />
    </>
  );
}
