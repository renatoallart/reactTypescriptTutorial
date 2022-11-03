import { useContext } from "react";
import { IUserProvider, useUserContext } from "./UserProvider";

export function UserConxt() {
  //Using type assertion to specify the  useUserContext
  // has the same property  IUserProvider in order to do the destructuring
  const { user, handleLogin, handleLogout } = useUserContext() as IUserProvider;

  //Other way
  // const something = useUserContext()
  //in order to use . notation to access the property

  return (
    <div>
      <div>
        User's {user?.name} {user?.email}
      </div>
      <button onClick={() => handleLogin("renato", "rena@g.com")}>Login</button>
      <button onClick={() => handleLogout()}>Logout</button>
    </div>
  );
}
