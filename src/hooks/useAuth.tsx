import { createContext, useContext, useMemo } from "react"
import { useTokenCheck } from "./useTokenCheck"

const AuthContext = createContext<AuthContextType>({
  user: {} as User,
})

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user] = useTokenCheck()

  const value = useMemo(
    () => ({
      user,
    }),
    [user]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}
