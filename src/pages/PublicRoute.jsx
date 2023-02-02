import { Navigate } from 'react-router-dom'
import { useAuthState } from '../firebase.config'

export default function PublicRoute({ children, ...props }) {
  const { isAuthenticated } = useAuthState()
  return !isAuthenticated ? children : <Navigate to='/admin/' replace />
}
