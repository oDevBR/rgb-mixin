import Head from "next/head";
import { useEffect, useState } from "react";

import styles from "../styles/Home.module.css";

export default function Home() {
  const [redField, setRedField] = useState(0);
  const [greenField, setGreenField] = useState(0);
  const [blueField, setBlueField] = useState(0);
  const [customColor, setCustomColor] = useState("#000000");
  const [showMessage, setShowMessage] = useState(false);

  const validate = (value) => {
    if (isNaN(value) || value < 0 || value > 255) {
      setShowMessage(true);
      return false;
    }
    setShowMessage(false);
    return true;
  };

  useEffect(() => {
    setCustomColor(`rgb(${redField}, ${greenField}, ${blueField})`);
  }, [redField, greenField, blueField]);

  return (
    <div className={styles.container} style={{ backgroundColor: customColor }}>
      <Head>
        <title>Início | RGB mixin</title>
      </Head>

      <section className={styles.section}>
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
              onFocus={(e) => e.target.select()}
              onChange={(e) => {
                if (validate(e.target.value)) {
                  setRedField(e.target.value);
                }
              }}
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
              onFocus={(e) => e.target.select()}
              onChange={(e) => {
                if (validate(e.target.value)) {
                  setGreenField(e.target.value);
                }
              }}
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
              onFocus={(e) => e.target.select()}
              onChange={(e) => {
                if (validate(e.target.value)) {
                  setBlueField(e.target.value);
                }
              }}
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
  );
}
