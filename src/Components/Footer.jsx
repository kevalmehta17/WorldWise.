import styles from "./Footer.module.css";
function Footer() {
  return (
    <>
      <footer style={{ marginTop: "auto" }}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
        </p>
      </footer>
    </>
  );
}

export default Footer;
