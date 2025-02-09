import {FC} from 'react' 
import { Outlet } from "react-router-dom"
import { AuthProvider } from "@hooks/useAuth"

export const AuthLayout: FC = () => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  )
}
