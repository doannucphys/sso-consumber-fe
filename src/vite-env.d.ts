/// <reference types="vite/client" />

interface User {
  name: string;
  username: string;
  id: number;
}

interface Order {
  id: number;
  product: string;
}

interface AuthContextType {
  user: User;
  // logout: () => void;
}
