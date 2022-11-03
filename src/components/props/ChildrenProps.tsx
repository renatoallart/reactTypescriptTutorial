import { ReactNode } from "react";

//Another alternative to use React.children
interface IChildren {
  children: ReactNode;
}

export function ChildrenProps({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1>ChildrenProps Components</h1>
      <h2>{children}</h2>
    </div>
  );
}
