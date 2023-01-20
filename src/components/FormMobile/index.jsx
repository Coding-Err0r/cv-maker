import React from "react";
import { useSelector } from "react-redux";
import styles from "./index.module.css";

export const FormMobile = () => {
  const { language } = useSelector((state) => state.language);

  let div;

  if (language === "en") {
    div = (
      <span>
        We recommend using it on <span className={styles.mark}>desktop</span>or
        <span className={styles.mark}>landscape</span>screen.
      </span>
    );
  } else {
    div = (
      <span>
        একটি ভাল অভিজ্ঞতার জন্য<span className={styles.mark}>ডেস্কটপ</span>বা
        <span className={styles.mark}>অনুভূমিক পর্দায়</span> ব্যবহার করতে আমরা
        সুপারিশ করি।
      </span>
    );
  }

  return <div className={styles.mobile}>{div}</div>;
};
