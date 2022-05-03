import styles from "./JsPreLoader.module.css";

export const JsPreLoader = () => {
  return <div id="js-preloader" className={`js-preloader ${styles.jsPreloader}`}>
    <div className={`preloader-inner ${styles.preloaderInner}`}>
      <span className="dot"></span>
      <div className="dots">
        <span className={`${styles.span}`}></span>
        <span className={`${styles.span}`}></span>
        <span className={`${styles.span}`}></span>
      </div>
    </div>
  </div>
}
