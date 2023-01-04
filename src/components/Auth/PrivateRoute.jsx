import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

import { userCtx } from '../../contexts/user-ctx'

export default function PrivateRoute({ children: ProtectedRoute, ...props }) {
  const { currentUser } = useContext(userCtx)
  if (!currentUser) {
    return <Navigate to={'/admin/signin'} replace />
  }
  // renders protected route
  return ProtectedRoute
}
