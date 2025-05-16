import { Outlet } from "react-router-dom";
import Footer from "./compoents/Footer"
import Header from "./compoents/Header";

import styles from "./App.module.css";

export default function App() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Outlet />
      </div>
  
      <Footer />
    </>
  );
}