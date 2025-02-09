import { logout } from "@api/user"

export const PushToken = () => {
  // get Message text from parent
  window.addEventListener('message', async (event) =>  {
    if (event.origin !== import.meta.env.VITE_SSO_APP) {
      return
    }
    if (event.data) {
      localStorage.setItem("token", event.data as string)
    } else {
      await logout()
    }
  });
  return <></>
}  