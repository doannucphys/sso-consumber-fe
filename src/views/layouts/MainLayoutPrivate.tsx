import { Outlet } from "react-router-dom"
import { useAuth } from "@hooks/useAuth"
import { PrivateHeader } from "@views/components/PrivateHeader"

export const MainLayoutPrivate = () => {
  const { user } = useAuth()

  if (!(user && (user?.name || user?.username || user?.id))) {
    window.location.href = `${import.meta.env.VITE_SSO_APP}/login?url=${import.meta.env.VITE_URL}`
  }

  return (
    <>
      <div className="layout-base">
        <PrivateHeader />
        <div className="flex flex-col items-center justify-center bg-gray-100 min-h-my_body">
          <Outlet />
        </div>
      </div>
    </>
  )
}
