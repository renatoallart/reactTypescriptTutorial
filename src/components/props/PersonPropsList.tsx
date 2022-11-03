import React from "react";
import { IPerson } from "./PersonProps";

interface IPersonPropsList {
  users: IPerson[];
}

export function PersonPropsList({ users }: IPersonPropsList) {
  return (
    <div>
      <h1>PersonPropsList Component</h1>
      {users.map((user, index) => (
        <h2 key={index}>
          {user.firstName} {user.lastName}
        </h2>
      ))}
    </div>
  );
}
