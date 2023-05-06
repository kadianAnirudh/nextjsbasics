import styles from "../styles/Layout.module.css";
import Navbar from "./Navbar.js";
import HeaderStyles from "./Header.js";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <HeaderStyles />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
