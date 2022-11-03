import { useRef } from "react";

export function Ref() {
  const nameRef = useRef<HTMLInputElement>(null);
  function handleForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(nameRef.current?.value);
  }
  return (
    <form onSubmit={(event) => handleForm(event)}>
      <input type="text" placeholder="name" ref={nameRef} />
      <button>Submit</button>
    </form>
  );
}
