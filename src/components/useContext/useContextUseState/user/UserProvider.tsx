import { createContext, ReactNode, useContext, useState } from "react";

interface IAuthUser {
  name: string;
  email: string;
}
export interface IUserProvider {
  user: IAuthUser | null;
  handleLogin: (name: string, email: string) => void;
  handleLogout: () => void;
}

export const UserContextProvider = createContext<IUserProvider | null>(null);

export function useUserContext() {
  return useContext(UserContextProvider);
}

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<IAuthUser | null>(null);

  function handleLogin(name: string, email: string) {
    setUser({ name, email });
  }
  function handleLogout() {
    setUser(null);
  }

  return (
    <UserContextProvider.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </UserContextProvider.Provider>
  );
}
