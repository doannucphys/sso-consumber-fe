import { Outlet } from "react-router-dom"
export const MainLayoutPublic = () => {
  return (
    <div className="layout-center">
      <Outlet />
    </div>
  )
}