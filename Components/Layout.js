import styles from "../styles/Home.module.css";
import Navbar from "../Components/Navbar";
import Meta from '../Components/Meta';

const Layout = ({ children }) => {
  return (
    <>
      <Meta/>
      <Navbar />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
