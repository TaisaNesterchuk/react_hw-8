import { Outlet } from 'react-router'
import GoHomeButton from '../components/GoHomeButton'

function SimpleLayout() {
  return (
    <div>
      <Outlet />
      <hr />
      <GoHomeButton />
    </div>
  )
}

export default SimpleLayout
