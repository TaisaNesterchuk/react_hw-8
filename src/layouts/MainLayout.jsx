import { Outlet } from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'
import styles from './MainLayout.module.css'

function MainLayout() {
  return (
    <div className={styles.containerMainLayout}>
      <Header />
      <main className={styles.containerMain}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
