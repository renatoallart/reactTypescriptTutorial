import { useState } from "react";
import { ChildrenProps } from "./components/props/ChildrenProps";
import { GreetProps } from "./components/props/GreetProps";
import { OnChange } from "./components/props/OnChange";
import { OnClickProps } from "./components/props/OnClickProps";
import { PersonProps } from "./components/props/PersonProps";
import { PersonPropsList } from "./components/props/PersonPropsList";
import { StylesProps } from "./components/props/StylesProps";

interface ILogin {
  isLogin: boolean;
}

export function AppProps() {
  const [isLogin, setIsLogin] = useState(false);
  const [message, setMessage] = useState("");

  function handleLogin() {
    const change = !isLogin;
    console.log(change, "change");
    setIsLogin((old) => !old);
  }

  const user = {
    firstName: "Reanto",
    lastName: "Santos",
  };

  const UserList = [
    {
      firstName: "Bruce",
      lastName: "Wayne",
    },
    {
      firstName: "Clark",
      lastName: "Kent",
    },
    {
      firstName: "Princess",
      lastName: "Diana",
    },
  ];

  function handleClick(id: number) {
    console.log(id, "id");
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
    setMessage(event.target.value);
  }
  return (
    <div>
      <StylesProps style={{ border: "1px solid black", padding: "1rem" }} />
      <OnChange value={message} handleChange={handleChange} />
      <OnClickProps handleClick={handleClick} />
      {/* <GreetProps
        name="Renato"
        messageCounter={10}
        isLogin={isLogin}
        handleLogin={handleLogin}
      />
      <PersonProps person={user} />
      <PersonPropsList users={UserList} />

      {/* React.children  is used to render sth inside a component */}
      {/* <ChildrenProps>Hello I'm a Children</ChildrenProps> */}
    </div>
  );
}
