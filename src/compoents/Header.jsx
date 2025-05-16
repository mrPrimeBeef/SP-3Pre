import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import ThemeToggle from "../util/ThemeToggle";

export default function Header() {
  return (
    <header className={styles.header}>
      <NavLink to="about">
      <img className={styles.logoImg} src="src\assets\logo.jpg" alt="logo" /></NavLink>
      <nav className={styles.navLinks}>
        <NavLink to="home">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="endpoints">Endpoints</NavLink>
      </nav>
      <ThemeToggle />
    </header>
  );
}