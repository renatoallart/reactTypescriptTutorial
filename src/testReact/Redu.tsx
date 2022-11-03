import { useReducer, useState } from "react";

interface IUser {
  id: number;
  name: string;
  age: number;
}

type ACTION_TYPE =
  | { type: "SET_USER"; userId: number; name: string; age: number }
  | { type: "DELETE_USER"; userId: number }
  | { type: "UPDATE_USER"; userID: number; newName: string };

const INITIAL_STATE: IUser[] = [];

function myReducer(state: typeof INITIAL_STATE, action: ACTION_TYPE) {
  switch (action.type) {
    case "SET_USER":
      return [
        ...state,
        { id: action.userId, age: action.age, name: action.name },
      ];
    case "DELETE_USER":
      return state.filter((user) => user.id !== action.userId);
    case "UPDATE_USER":
      return state.map((user) =>
        user.id === action.userID ? { ...user, name: action.newName } : user
      );
    default:
      return state;
  }
}

export function App() {
  const [users, dispatch] = useReducer(myReducer, INITIAL_STATE);

  return (
    <div>
      {users.map((user) => (
        <p>
          {user.id}: {user.name} {user.age}
        </p>
      ))}
      <button
        onClick={() =>
          dispatch({ type: "SET_USER", userId: 4, name: "renato", age: 555 })
        }
      >
        Test
      </button>
      <button onClick={() => dispatch({ type: "DELETE_USER", userId: 4 })}>
        Delete User
      </button>
      <button
        onClick={() =>
          dispatch({ type: "UPDATE_USER", userID: 4, newName: "jORGE" })
        }
      >
        UPDATE User
      </button>
    </div>
  );
}
