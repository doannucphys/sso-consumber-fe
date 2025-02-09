import { useEffect, useState } from "react"
import { getPrivateData } from "@api/user"

export const Profile = () => {
  const [data, setData] = useState<Order>()
  useEffect(() => {
    const fetchData = async () => {
      const ssoUrl = import.meta.env.VITE_SSO_APP;
      const uiUrl = import.meta.env.VITE_URL
      const redirectLoginUrl = `${ssoUrl}/login?url=${uiUrl}`;
      try {
        const privateData = await getPrivateData()
        if (privateData) {
          setData(privateData as Order)
          return 
        }
      } catch (error: unknown) {
        console.log(error)
      }
      window.location.href = redirectLoginUrl
    }
    fetchData()
    return () => {}
  }, [])

  return (
    <>
      <div className="font-bold text-blue-500 text-xl">Private page - app {import.meta.env.VITE_APP_NAME}</div>
      <div className="w-full p-5 md:w-4/12 h-32 border shadow-lg mt-3 ">
      <b>Private data:</b>
        <hr />
        <p>order: <b>{data?.id}</b></p>
        <p>product: <b>{data?.product}</b></p>
      </div>
    </>
  )
}
