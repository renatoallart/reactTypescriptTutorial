import { useReducer, useState } from "react";

type ACTIONTYPE =
  | { type: "increment"; value: number }
  | { type: "decrement"; value: number }
  | { type: "name"; name: string }
  | { type: "age"; age: number };

interface User {
  name: string;
  age: number;
}

const INITIAL_STATE: User = { name: "", age: 0 };

function countReducer(state: User, action: ACTIONTYPE) {
  switch (action.type) {
    case "name":
      return { ...state, name: action.name };
    case "age":
      return { ...state, age: action.age };
    default:
      return state;
  }
}

export function Array() {
  const [list, setList] = useState<User[]>([]);
  const [user, dispatch] = useReducer(countReducer, INITIAL_STATE);

  function addList() {
    setList([...list, user]);
  }

  return (
    <div>
      <h1>Name: {user.name}</h1>
      <h1>Age: {user.age}</h1>
      <input
        type="text"
        placeholder="name"
        onChange={(event) =>
          dispatch({ type: "name", name: event.target.value })
        }
      />
      <input
        type="number"
        placeholder="age"
        onChange={(event) =>
          dispatch({ type: "age", age: Number(event.target.value) })
        }
      />
      <button onClick={addList}>AddList</button>
      <div>
        {list?.map((item) => (
          <p>
            {item.name} {item.age}
          </p>
        ))}
      </div>
    </div>
  );
}
