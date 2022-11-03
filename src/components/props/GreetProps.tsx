interface IGreetProps {
  name: string;
  messageCounter: number;
  isLogin: boolean;
  handleLogin: () => void;
}

export function GreetProps({
  name,
  messageCounter,
  isLogin,
  handleLogin,
}: IGreetProps) {
  return (
    <div>
      <h1>GreetProps Component</h1>
      {isLogin ? (
        <div>
          <h2>
            Welcome {name}! U've {messageCounter} unread messages
          </h2>
          <button onClick={() => handleLogin()}>Login</button>
        </div>
      ) : (
        <div>
          <h2>Please Login to continue!</h2>
          <button onClick={() => handleLogin()}>Login</button>
        </div>
      )}
    </div>
  );
}
