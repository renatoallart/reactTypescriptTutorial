import React, { useState } from "react";

interface IUser {
  name: string;
  email: string;
}

export function User() {
  //interface + generics + union
  //using generics notation <> to specify the type of the user will be the same IUser or Null
  const [user, setUser] = useState<IUser | null>(null);

  // type assertion + interface
  //using type assertion to say to typescript the user will never be other information but IUser
  // const [user1, setUser1] = useState<IUser>({} as IUser);
  //then there's no longer needed to use ? notation to check is the user has or not the prosperity; example user.name
  function handleLogin() {
    setUser({ name: "Renato", email: "rena@g.com" });
  }
  function handleLogout() {
    setUser(null);
  }

  return (
    <div>
      <h2>User's Name:{user?.name}</h2>
      <h2>User's Email: {user?.email}</h2>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
