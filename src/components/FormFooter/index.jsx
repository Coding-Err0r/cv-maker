import React from "react";
import { useSelector } from "react-redux";
import styles from "./index.module.css";

export const FormFooter = () => {
  const { language } = useSelector((state) => state.language);

  let div;

  if (language === "en") {
    div = (
      <>
        <span>
          To contribute, visit my
          <a
            href="https://github.com/XPro-Gamer-Rhine"
            target="_blank"
            className={styles.mark}
          >
            github
          </a>
          repo.
        </span>
        <span>
          Visit
          <a
            href="https://rhine-one.vercel.app"
            target="_blank"
            className={styles.mark}
          >
            my website
          </a>
          for my other projects.
        </span>
      </>
    );
  } else {
    div = (
      <>
        <span>
          অবদান রাখা
          <a
            href="https://github.com/XPro-Gamer-Rhine"
            target="_blank"
            className={styles.mark}
          >
            রেপো
          </a>
          পরিদর্শন
        </span>
        <span>
          আমার অন্যান্য প্রকল্পের জন্য
          <a
            href="https://rhine-one.vercel.app"
            target="_blank"
            className={styles.mark}
          >
            আমার ওয়েবসাইট
          </a>
          পরিদর্শন করুন
        </span>
      </>
    );
  }

  return <div className={styles.footer}>{div}</div>;
};
