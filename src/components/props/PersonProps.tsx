import React from "react";
export interface IPerson {
  firstName: string;
  lastName: string;
}

interface IPersonProps {
  person: IPerson;
}

export function PersonProps({ person }: IPersonProps) {
  return (
    <div>
      <h1>PersonProps Component</h1>
      <p>
        {person.firstName} {person.lastName}
      </p>
    </div>
  );
}
