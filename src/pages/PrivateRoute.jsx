import { Navigate } from 'react-router-dom'
import { useAuthState } from '../firebase.config'

export default function PrivateRoute({ children, ...props }) {
  const { isAuthenticated } = useAuthState()
  return isAuthenticated ? children : <Navigate to='/admin/signin' replace />
}
