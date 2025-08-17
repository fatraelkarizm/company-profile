/* eslint-disable @typescript-eslint/no-unused-vars */
// hooks/useAuth.ts
import { useState } from "react";

export function useAuth() {
  const [user, setUser] = useState(null);
  
  const login = (email: string, password: string) => { /* Logic login */ };
  const logout = () => { setUser(null); };

  return { user, login, logout };
}
