import { Navigate } from 'react-router-dom'

export default function PrivateRoute({ children, loggedIn }) {
  if (!loggedIn) {
    return <Navigate to='/admin/signin' replace />
  }
  return children
}
