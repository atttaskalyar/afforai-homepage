import Navbar from "./UseCaseComponents/Navbar";
import styles from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Navbar />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
