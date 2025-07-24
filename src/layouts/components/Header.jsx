import { NavLink } from 'react-router'
import styles from './Header.module.css'
import frontRoutes from '../../routes/frontRoutes'
function Header() {
  return (
    <header className={styles.container}>
      <NavLink
        to={frontRoutes.navigate.home}
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        Home
      </NavLink>

      <NavLink
        to={frontRoutes.navigate.teachers.index}
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        Teachers
      </NavLink>

      <NavLink
        to={frontRoutes.navigate.meeting}
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        Meeting
      </NavLink>

      <NavLink
        to={frontRoutes.navigate.aboutApp}
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        AboutApp
      </NavLink>

      <NavLink
        to={frontRoutes.navigate.aboutDev}
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        About developers
      </NavLink>
    </header>
  )
}

export default Header
