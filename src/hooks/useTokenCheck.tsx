import { useState } from 'react'
import { jwtDecode } from "jwt-decode"

export const useTokenCheck = () => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const token = window.localStorage.getItem('token')
      const decoded = token ? jwtDecode(token) : {}
      const now = Math.floor(Date.now().valueOf() / 1000);
      if (typeof decoded.exp !== "undefined" && decoded.exp > now) {
        return JSON.parse(JSON.stringify(decoded))
      }
    } catch (err) {
      console.log(err)
      return {}
    }
  })

  const setValue = (newValue: unknown) => {
    setStoredValue(newValue)
  }

  return [storedValue, setValue]
}
